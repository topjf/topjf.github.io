import{_ as t,X as l,Y as r,Z as o,$ as n,a0 as s,a2 as e,a1 as i,D as c}from"./framework-10d91a2c.js";const d="/assets/true-image-20211025122421088-bec996f7.png",p="/assets/true-image-20210716144517921-e8de9cf3.png",u="/assets/true-image-20210716144319159-bf92cf2e.png",v="/assets/true-image-20210716144339073-bbd4c021.png",m="/assets/true-image-20210716144351814-3052d796.png",k="/assets/true-image-20210716152647038-a66d1225.png",b="/assets/true-test-f0e26070.png",h="/assets/true-image-20210716175146294-f3dbc771.png",g="/assets/true-image-20210716175240487-80ca6918.png",f="/assets/true-image-20210716221821041-ffc56a3e.png",x="/assets/true-image-20210716221950684-5faadf29.png",_="/assets/true-image-20210716222615232-58c21b3f.png",y={},q=i('<h1>Centos7 Docker使用</h1><h2 id="前导" tabindex="-1"><a class="header-anchor" href="#前导" aria-hidden="true">#</a> 前导</h2><p>Docker 包括三个基本概念:</p><ul><li><strong>镜像（Image）</strong>：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。</li><li><strong>容器（Container）</strong>：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</li><li><strong>仓库（Repository）</strong>：仓库可看成一个代码控制中心，用来保存镜像。</li></ul><table><thead><tr><th style="text-align:left;">Docker</th><th style="text-align:left;">面向对象</th></tr></thead><tbody><tr><td style="text-align:left;">镜像</td><td style="text-align:left;">类</td></tr><tr><td style="text-align:left;">容器</td><td style="text-align:left;">对象</td></tr></tbody></table>',5),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"概念"),n("th",{style:{"text-align":"left"}},"说明")])],-1),R=n("tr",null,[n("td",{style:{"text-align":"left"}},"Docker 镜像(Images)"),n("td",{style:{"text-align":"left"}},"Docker 镜像是用于创建 Docker 容器的模板，比如 Ubuntu 系统。")],-1),A=n("tr",null,[n("td",{style:{"text-align":"left"}},"Docker 容器(Container)"),n("td",{style:{"text-align":"left"}},"容器是独立运行的一个或一组应用，是镜像运行时的实体。")],-1),O=n("td",{style:{"text-align":"left"}},"Docker 客户端(Client)",-1),I={style:{"text-align":"left"}},D={href:"https://docs.docker.com/develop/sdk/",target:"_blank",rel:"noopener noreferrer"},N=n("tr",null,[n("td",{style:{"text-align":"left"}},"Docker 主机(Host)"),n("td",{style:{"text-align":"left"}},"一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。")],-1),T=n("tr",null,[n("td",{style:{"text-align":"left"}},"Docker Registry"),n("td",{style:{"text-align":"left"}},[s("Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。一个 Registry 中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 "),n("strong",null,"<仓库名>:<标签>"),s(" 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 "),n("strong",null,"latest"),s(" 作为默认标签。")])],-1),j=n("tr",null,[n("td",{style:{"text-align":"left"}},"Docker Machine"),n("td",{style:{"text-align":"left"}},"Docker Machine是一个简化Docker安装的命令行工具，通过一个简单的命令行即可在相应的平台上安装Docker，比如VirtualBox、 Digital Ocean、Microsoft Azure。")],-1),C=n("hr",null,null,-1),M=n("h2",{id:"一、下载与安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、下载与安装","aria-hidden":"true"},"#"),s(" 一、下载与安装")],-1),S={href:"https://docs.docker.com/engine/install/centos/#prerequisites",target:"_blank",rel:"noopener noreferrer"},P={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://docs.docker.com/desktop/windows/install/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.docker.com/desktop/linux/install/debian/",target:"_blank",rel:"noopener noreferrer"},F=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get -y install ./docker-desktop-4.8.1-amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="a、前提条件" tabindex="-1"><a class="header-anchor" href="#a、前提条件" aria-hidden="true">#</a> A、前提条件</h3><h4 id="_1、卸载旧版本" tabindex="-1"><a class="header-anchor" href="#_1、卸载旧版本" aria-hidden="true">#</a> 1、卸载旧版本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine 

<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc
<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> gnupg2 software-properties-common lsb-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b、安装方法" tabindex="-1"><a class="header-anchor" href="#b、安装方法" aria-hidden="true">#</a> B、安装方法</h3><h4 id="_1、设置存储库《centos》" tabindex="-1"><a class="header-anchor" href="#_1、设置存储库《centos》" aria-hidden="true">#</a> 1、设置存储库《centos》</h4><p>centos</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---------华为--------------
<span class="token number">1</span>、若您安装过docker，需要先删掉，之后再安装依赖:
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> docker-common docker-selinux docker-engine
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
<span class="token number">2</span>、下载repo文件
<span class="token function">sudo</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://repo.huaweicloud.com/docker-ce/linux/centos/docker-ce.repo
软件仓库地址替换为：
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s+download.docker.com+repo.huaweicloud.com/docker-ce+&#39;</span> /etc/yum.repos.d/docker-ce.repo
<span class="token number">3</span>、更新索引文件
<span class="token function">sudo</span> yum makecache fast
yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-<span class="token punctuation">[</span>VERSION<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>debian</p><div class="language-ABAP line-numbers-mode" data-ext="ABAP"><pre class="language-ABAP"><code>##########卸载旧版本
sudo apt-get remove docker docker-engine docker.io
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-compose-plugin

##########安装必要的一些系统工具
sudo apt-get -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common lsb-release

##########信任Docker的GPG公钥:
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://repo.huaweicloud.com/docker-ce/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

##########添加软件仓库:设置 稳定 存储库
echo &quot;deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://repo.huaweicloud.com/docker-ce/linux/debian $(lsb_release -cs) stable&quot; | sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null

##########
sudo apt-get update
apt-cache madison docker-ce
sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、添加docker官方的gpg密钥" tabindex="-1"><a class="header-anchor" href="#_2、添加docker官方的gpg密钥" aria-hidden="true">#</a> 2、添加Docker官方的GPG密钥</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-----------------debian
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/debian/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg
-----------------centos
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/docker-archive-keyring.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置 <strong>稳定</strong> 存储库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-----------------debian
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
-----------------centos
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
  <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\
  <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>sudo apt-get update</p></blockquote><h4 id="_3、安装" tabindex="-1"><a class="header-anchor" href="#_3、安装" aria-hidden="true">#</a> 3、安装</h4><p><em><strong>（1、2 选其一安装）</strong></em>*</p><p>1 <strong>默认最新版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
基础环境、docker、k8s环境准备ok，但未安装docker、k8s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 <strong>指定版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-cache</span> madison docker-ce
 docker-ce <span class="token operator">|</span> <span class="token number">5</span>:20.10.14~3-0~ubuntu-impish
 docker-ce <span class="token operator">|</span> <span class="token number">5</span>:20.10.13~3-0~ubuntu-impish
 docker-ce <span class="token operator">|</span> <span class="token number">5</span>:20.10.12~3-0~ubuntu-impish
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce 
yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

<span class="token comment">## 格式</span>
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> docker-ce-cli-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> containerd.io
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce<span class="token operator">=</span><span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> docker-ce-cli<span class="token operator">=</span><span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> containerd.io docker-compose-plugin
<span class="token comment">## 栗：</span>
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce-20.10.8-3.el8 docker-ce-cli-20.10.8-3.el8 containerd.io <span class="token parameter variable">--allowerasing</span>
<span class="token comment"># deepin:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce<span class="token operator">=</span><span class="token number">5</span>:20.10.14~3-0~ubuntu-impish docker-ce-cli<span class="token operator">=</span><span class="token number">5</span>:20.10.14~3-0~ubuntu-impish containerd.io
<span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce<span class="token operator">=</span> docker-ce-cli<span class="token operator">=</span> containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#%E5%8A%A0%E9%80%9F">设置镜像加速</a></p><p>1 <strong>启动Docker</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl stop <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl disable <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl status <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="image-20211025122421088" tabindex="0" loading="lazy"><figcaption>image-20211025122421088</figcaption></figure><h4 id="非root用户" tabindex="-1"><a class="header-anchor" href="#非root用户" aria-hidden="true">#</a> 非root用户</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> jf123 <span class="token comment">#非root用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请记住注销并重新登录才能生效！</p><h3 id="c、卸载docker" tabindex="-1"><a class="header-anchor" href="#c、卸载docker" aria-hidden="true">#</a> C、卸载Docker</h3><p>卸载Docker Engine，CLI和Containerd软件包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io
<span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>主机上的映像，容器，卷或自定义配置文件不会自动删除。要删除所有图像，容器和卷：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您必须手动删除所有已编辑的配置文件。</p><h2 id="二、docker-镜像加速" tabindex="-1"><a class="header-anchor" href="#二、docker-镜像加速" aria-hidden="true">#</a> 二、Docker 镜像加速<a name="加速"></a></h2>`,35),V={href:"https://console.huaweicloud.com/swr/?region=cn-north-4#/app/swr/huaweiOfficialList",target:"_blank",rel:"noopener noreferrer"},L={href:"https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors",target:"_blank",rel:"noopener noreferrer"},U=i(`<h3 id="_2、在-etc-docker配置daemon-json" tabindex="-1"><a class="header-anchor" href="#_2、在-etc-docker配置daemon-json" aria-hidden="true">#</a> 2、在/etc/docker配置daemon.json</h3><p>基本</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>sudo mkdir -p /etc/docker

sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
<span class="token punctuation">{</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://04eo9xup.mirror.aliyuncs.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://098cc8006500f4db0f2fc01937bbce40.mirror.swr.myhuaweicloud.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k8s集群</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>sudo mkdir -p /etc/docker

cat -s &lt;&lt;EOF &gt; /etc/docker/daemon.json
<span class="token punctuation">{</span>
  <span class="token property">&quot;exec-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;log-driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;json-file&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;log-opts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;max-size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100m&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;storage-driver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;overlay2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://04eo9xup.mirror.aliyuncs.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://098cc8006500f4db0f2fc01937bbce40.mirror.swr.myhuaweicloud.com&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token string">&quot;https://04eo9xup.mirror.aliyuncs.com&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;https://ustc-edu-cn.mirror.aliyuncs.com/&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;https://mirror.baidubce.com&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1>启动服务</h1><p>sudo systemctl daemon-reload sudo systemctl restart docker</p><h2 id="三、常用操作指令" tabindex="-1"><a class="header-anchor" href="#三、常用操作指令" aria-hidden="true">#</a> 三、常用操作指令</h2><p>sudo vim ~/.bashrc</p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>###some more ls aliases
alias rmf=&#39;rm -rf&#39;
alias ll=&#39;ls -l&#39;
alias la=&#39;ls -all&#39;
alias ggroup=&#39;cat /etc/group&#39;
alias gpasswd=&#39;cat /etc/passwd&#39;
alias stdk=&#39;systemctl start docker&#39;
alias restdk=&#39;systemctl restart docker&#39;
alias stopdk=&#39;systemctl stop docker&#39;
alias enabledk=&#39;systemctl enable docker&#39;
alias disabledk=&#39;systemctl disable docker&#39;

#镜像检索
alias dkse=&#39;docker search&#39;      #镜像名称
alias dklogin=&#39;docker login&#39;    #登录远程镜像仓库
#推送
alias dkpull=&#39;docker pull&#39;      #镜像名称
alias dkcommit=&#39;docker commit&#39;  #提交容器为镜像         [-a=&#39;作者&#39; -m=&#39;备注&#39; 运行时容器ID 新镜像名称]
alias dkb=&#39;docker build&#39;        #file文件构建镜像       [-f [DockerFile文件] -t [设置标签]:版本 . ]
alias dktag=&#39;docker tag&#39;        #设置镜像为阿里|xx标签  [容器ID [设置标签]:version]
alias dkpush=&#39;docker push&#39;      #镜像提交到仓库         [输入设置好的标签:verison]
#镜像列表
alias dki=&#39;docker images&#39;       #镜像名称or镜像Id
#镜像删除
alias dkrmi=&#39;docker rmi&#39;        #镜像名称or镜像Id
alias dkrmif=&#39;docker rmi -f&#39;
#删除所有镜像
alias dkrmia=&#39;docker rmi $(docker images -q)&#39;
#容器列表
alias dkps=&#39;docker ps&#39;  #在运行的容器
alias dkpsa=&#39;docker ps -a&#39;      #全部容器
#启动容器
alias dkstart=&#39;docker start&#39;    #容器名称or容器Id
alias dkrestart=&#39;docker restart&#39;  #容器名称or容器Id
#停止容器
alias dkstop=&#39;docker stop&#39;      #stop 容器名称or容器Id
alias dkkill=&#39;docker kill&#39;      #docker kill 容器ID or 容器名
#删除容器
alias dkrm=&#39;docker rm&#39;  #docker rm 容器id
#强制删除容器
alias dkrmf=&#39;docker rm -f&#39;      #容器ID1  容器ID2 中间空格隔开
alias dkrma=&#39;docker rm $(docker ps -a -q)&#39;      #删除所有容器

# 宿主机和容器之间文件拷
#docker cp 容器ID:容器目录   宿主机目录
#docker cp 需要拷贝的文件或者目录  容器ID:容器目录
alias dkcp=&#39;docker cp&#39;
#容器日志
alias dklogs=&#39;docker logs&#39;      #容器名称/容器id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> --- 镜像 ---</h3><h4 id="_1、docker镜像检索" tabindex="-1"><a class="header-anchor" href="#_1、docker镜像检索" aria-hidden="true">#</a> 1、docker镜像检索</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker search 镜像名</span>
<span class="token function">sudo</span> <span class="token function">docker</span> search centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、docker镜像下载" tabindex="-1"><a class="header-anchor" href="#_2、docker镜像下载" aria-hidden="true">#</a> 2、docker镜像下载</h4>`,15),G={href:"https://hub.docker.com/_/centos?tab=tags&page=1",target:"_blank",rel:"noopener noreferrer"},z=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker pull 镜像名</span>
<span class="token function">sudo</span> <span class="token function">docker</span> pull centos:centos7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、docker镜像列表" tabindex="-1"><a class="header-anchor" href="#_3、docker镜像列表" aria-hidden="true">#</a> 3、docker镜像列表</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>REPOSITORY</th><th>镜像的仓库源</th></tr></thead><tbody><tr><td>TAG</td><td>镜像的标签（版本）同一个仓库有多个TAG的镜像，多个版本；我们用REPOSITORY:TAG来定义不同的镜像；</td></tr><tr><td>IMAGE ID</td><td>镜像ID，镜像的唯一标识</td></tr><tr><td>CREATE</td><td>镜像创建时间</td></tr><tr><td>SIZE</td><td>镜像大小</td></tr></tbody></table><p><strong>OPTIONS 可选参数：</strong></p><table><thead><tr><th>-a</th><th>显示所有镜像（包括中间层）</th></tr></thead><tbody><tr><td>**-**q</td><td>只显示镜像ID</td></tr><tr><td>-qa</td><td>可以组合</td></tr><tr><td>--digests</td><td>显示镜像的摘要信息</td></tr><tr><td>--no-trunc</td><td>显示完整的镜像信息</td></tr></tbody></table><h4 id="_4、docker镜像删除" tabindex="-1"><a class="header-anchor" href="#_4、docker镜像删除" aria-hidden="true">#</a> 4、docker镜像删除</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker rmi  image-id (镜像id)</span>
<span class="token function">sudo</span> <span class="token function">docker</span> rmi 34336sdf12
<span class="token function">sudo</span> <span class="token function">docker</span> rmi 34336sdf12 5525636f12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、删除所有镜像" tabindex="-1"><a class="header-anchor" href="#_5、删除所有镜像" aria-hidden="true">#</a> 5、删除所有镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> rmi  <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> --- 容器 ---</h3><h4 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;容器新名字&quot;</span>：为容器指定一个名称；
-i：以交互模式运行容器，通常与-t或者-d同时使用；
-t：为容器重新分配一个伪输入终端，通常与-i同时使用；
-d: 后台运行容器，并返回容器ID；
-P: <span class="token punctuation">(</span>大写<span class="token punctuation">)</span>随机端口映射，容器内部端口随机映射到主机的端口
-p: 指定端口映射，格式为：主机<span class="token punctuation">(</span>宿主<span class="token punctuation">)</span>端口:容器端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1、创建并运行容器" tabindex="-1"><a class="header-anchor" href="#_1、创建并运行容器" aria-hidden="true">#</a> 1、创建并运行容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 启动普通容器： <span class="token function">docker</span> run <span class="token parameter variable">--name</span> 别名 镜像ID  
 启动交互式容器：  <span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> 别名 镜像ID 
<span class="token comment"># docker run 镜像命名</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run centos
<span class="token comment"># 指定容器名</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> webcentos  centos
<span class="token comment"># 以守护进程的方式运行容器</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> webcentos <span class="token parameter variable">-d</span> centos

<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> centos:centos7 /bin/bash
<span class="token punctuation">[</span>root@0f6665eda526 /<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-post.log  dev  home  lib64  mnt  proc  run   srv  tmp  var
bin                etc  lib   media  opt  root  sbin  sys  usr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、容器列表" tabindex="-1"><a class="header-anchor" href="#_2、容器列表" aria-hidden="true">#</a> 2、容器列表</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、启动容器" tabindex="-1"><a class="header-anchor" href="#_3、启动容器" aria-hidden="true">#</a> 3、启动容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker start 容器名称/容器Id</span>
<span class="token comment"># docker restart 容器名称/容器Id</span>
<span class="token function">sudo</span> <span class="token function">docker</span> start webcentos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、停止容器" tabindex="-1"><a class="header-anchor" href="#_4、停止容器" aria-hidden="true">#</a> 4、停止容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker  stop 容器名称/容器Id</span>
<span class="token function">sudo</span> <span class="token function">docker</span> stop webcentos
<span class="token comment">#暴力删除，直接杀掉进程 （不推荐）</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">kill</span> 容器ID or 容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、删除容器" tabindex="-1"><a class="header-anchor" href="#_5、删除容器" aria-hidden="true">#</a> 5、删除容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker rm 容器id</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> 235483s15c
<span class="token comment"># 强制删除docker rm -f 容器ID</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 235483s15c
<span class="token comment">#删除多个容器 </span>
<span class="token comment">#docker rm -f 容器ID1  容器ID2 中间空格隔开</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 235483s15c 235483s169
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、删除所有容器" tabindex="-1"><a class="header-anchor" href="#_6、删除所有容器" aria-hidden="true">#</a> 6、删除所有容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7、容器日志" tabindex="-1"><a class="header-anchor" href="#_7、容器日志" aria-hidden="true">#</a> 7、容器日志</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker logs 容器名称/容器id</span>
<span class="token function">sudo</span> <span class="token function">docker</span> logs webcentos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、登陆、进入-退出容器" tabindex="-1"><a class="header-anchor" href="#_8、登陆、进入-退出容器" aria-hidden="true">#</a> 8、登陆、进入\\退出容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker attach 容器名称/容器id</span>
<span class="token comment"># docker exec：推荐大家使用 docker exec 命令，因为此退出容器终端，不会导致容器的停止。</span>
<span class="token comment"># docker exec -it 容器名称/容器id  /bin/bash</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-itd</span>  /bin/bash
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> webcentos /bin/bash
<span class="token comment"># exit 退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中， -t 选项让Docker分配一个伪终端（ pseudo-tty）并绑定到容器的标准输入上， -i 则让容器的标准输入保持打开。</p><h4 id="_9、宿主机和容器之间文件拷贝" tabindex="-1"><a class="header-anchor" href="#_9、宿主机和容器之间文件拷贝" aria-hidden="true">#</a> 9、宿主机和容器之间文件拷贝</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#docker cp 容器名称：容器目录   宿主机目录</span>
<span class="token punctuation">[</span>root@hdas software<span class="token punctuation">]</span><span class="token comment"># sudo docker cp 45bb56e75d40:/software/a/ /software/</span>
<span class="token punctuation">[</span>root@hdas software<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">28</span>
drwxr-xr-x. <span class="token number">2</span> root root     <span class="token number">6</span> May <span class="token number">24</span> <span class="token number">20</span>:39 a

<span class="token comment"># docker cp 需要拷贝的文件或者目录  容器名称：容器目录</span>
<span class="token punctuation">[</span>root@hdas software<span class="token punctuation">]</span><span class="token comment"># sudo docker cp /d/soft-win/jdk/jdk-17.0.3_linux-x64_bin.tar.gz centos7:/soft</span>
<span class="token punctuation">[</span>root@hdas software<span class="token punctuation">]</span><span class="token comment"># sudo docker exec -it 45bb56e75d40 /bin/bash</span>
<span class="token punctuation">[</span>root@45bb56e75d40 /<span class="token punctuation">]</span><span class="token comment"># cd software/</span>
<span class="token punctuation">[</span>root@45bb56e75d40 software<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">0</span>
drwxr-xr-x. <span class="token number">2</span> root root <span class="token number">6</span> May <span class="token number">24</span> <span class="token number">12</span>:39 a
drwxr-xr-x. <span class="token number">2</span> root root <span class="token number">6</span> May <span class="token number">24</span> <span class="token number">12</span>:42 b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、提交运行时容器成为镜像-commit" tabindex="-1"><a class="header-anchor" href="#_10、提交运行时容器成为镜像-commit" aria-hidden="true">#</a> 10、提交运行时容器成为镜像 commit</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&#39;作者&#39;</span> <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&#39;备注&#39;</span> 运行时容器ID 新镜像名称:<span class="token punctuation">[</span>版本<span class="token punctuation">]</span>

<span class="token comment"># sudo docker ps</span>
CONTAINER ID   IMAGE            COMMAND 
c8e6eb47f268   centos:centos7  <span class="token string">&quot;/bin/bash&quot;</span>  

<span class="token comment"># sudo docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos              centos7             b5b4d78bc90c        <span class="token number">2</span> weeks ago         203MB
-----------------------------------------------------------------
<span class="token function">docker</span> commit <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&#39;jf&#39;</span> <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&#39;jf&#39;</span> ce4ad0d3dd40 centos:7.9-jdk17
$ <span class="token function">docker</span> commit <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&#39;yu&#39;</span> <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&#39;no log tomcat&#39;</span> c8e6eb47f268 yu/centos7:1.0

<span class="token comment"># sudo docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
yu/centos7          <span class="token number">1.0</span>                 3642a1c65bfe        <span class="token number">5</span> seconds ago       203MB
centos              centos7             b5b4d78bc90c        <span class="token number">2</span> weeks ago         203MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11、推送镜像到hub服务器" tabindex="-1"><a class="header-anchor" href="#_11、推送镜像到hub服务器" aria-hidden="true">#</a> 11、推送镜像到hub服务器</h4>`,35),H={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},J=n("h4",{id:"_12、推送镜像到阿里云-推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_12、推送镜像到阿里云-推荐","aria-hidden":"true"},"#"),s(" 12、推送镜像到阿里云<推荐>"),n("a",{name:"推送到阿里镜像仓库"})],-1),X={href:"https://cr.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},Y=i('<h5>b, 创建命名空间-创建镜像仓库</h5><figure><img src="'+p+'" alt="image-20210716144517921" tabindex="0" loading="lazy"><figcaption>image-20210716144517921</figcaption></figure><p>创建镜像仓库</p><figure><img src="'+u+'" alt="image-20210716144319159" tabindex="0" loading="lazy"><figcaption>image-20210716144319159</figcaption></figure><figure><img src="'+v+'" alt="image-20210716144339073" tabindex="0" loading="lazy"><figcaption>image-20210716144339073</figcaption></figure><figure><img src="'+m+`" alt="image-20210716144351814" tabindex="0" loading="lazy"><figcaption>image-20210716144351814</figcaption></figure><h5>c. 登录阿里云Docker Registry</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>程序app registry.cn-chengdu.aliyuncs.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用于登录的用户名为阿里云账号全名，密码为开通服务时设置的密码。</p><h5>d. 从Registry中拉取镜像</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-chengdu.aliyuncs.com/0-test/nacos:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5>e. 将镜像推送到Registry</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>小牛程序app registry.cn-chengdu.aliyuncs.com
<span class="token function">docker</span> tag <span class="token punctuation">[</span>镜像ID<span class="token punctuation">]</span> registry.cn-chengdu.aliyuncs.com/0-test/nacos:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/0-test/nacos:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>g. 示例</h5><p>使用&quot;docker tag&quot;命令重命名镜像，并将它通过专有网络地址推送至Registry。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kong@k:~$ dkps
CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                               NAMES
a4dcf4c99xxx        nacos/nacos-server:1.4.2   <span class="token string">&quot;bin/docker-startup.…&quot;</span>   <span class="token number">6</span> weeks ago         Up <span class="token number">4</span> hours          <span class="token number">0.0</span>.0.0:8848-<span class="token operator">&gt;</span><span class="token number">8848</span>/tcp              nacos
-----------------------------------------------------------------------------
kong@k:~$ dki
REPOSITORY      TAG       IMAGE ID    CREATED    SIZE
-----------------------------------------------------------------------------
kong@k:~$ <span class="token function">docker</span> commit <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&#39;yu&#39;</span> <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&#39;no logs&#39;</span> a4dcf4c99xxx yu/nacos:1.0
kong@k:~$ dki
REPOSITORY           TAG       IMAGE ID        CREATED        SIZE
yu/nacos             <span class="token number">1.0</span>       89f1d606e613    <span class="token number">2</span> seconds ago  965MB
-----------------------------------------------------------------------------
kong@k:~$ <span class="token function">docker</span> tag 89f1d606e613 registry.cn-chengdu.aliyuncs.com/0-test/nacos:1.0
kong@k:~$ dki
REPOSITORY              TAG     IMAGE ID    
yu/nacos                <span class="token number">1.0</span>     89f1d606e613
registry.cn-chengdu.aliyuncs.com/0-test/nacos   <span class="token number">1.0</span>     89f1d606e613
-----------------------------------------------------------------------------
kong@k:~$ <span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/0-test/nacos:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="image-20210716152647038" tabindex="0" loading="lazy"><figcaption>image-20210716152647038</figcaption></figure><h4 id="_13、查看容器元信息" tabindex="-1"><a class="header-anchor" href="#_13、查看容器元信息" aria-hidden="true">#</a> 13、查看容器元信息</h4><p>docker inspect 容器ID</p><h4 id="_14、docker-update-修改容器配置" tabindex="-1"><a class="header-anchor" href="#_14、docker-update-修改容器配置" aria-hidden="true">#</a> 14、docker update 修改容器配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Usage:  docker update [OPTIONS] CONTAINER [CONTAINER...]

Update configuration of one or more containers

Options:
      --blkio-weight uint16        块IO（相对权重），介于10和1000之间，或0禁用（默认为0）
      --cpu-period int             限制CPU CFS（完全公平调度程序）周期
      --cpu-quota int              限制CPU CFS（完全公平调度程序）配额
      --cpu-rt-period int          以微秒为单位限制CPU实时周期
      --cpu-rt-runtime int         以微秒为单位限制CPU实时运行时间
  -c, --cpu-shares int             CPU份额（相对权重）
      --cpus decimal               CPU数量
      --cpuset-cpus string         允许执行的CPU（0-3，0,1）
      --cpuset-mems string         允许执行的MEMs（0-3，0,1）
      --kernel-memory bytes        内核内存限制
  -m, --memory bytes               内存限制
      --memory-reservation bytes   内存软限制
      --memory-swap bytes          交换限制等于内存加交换：“-1”以启用无限制交换
      --pids-limit int             调整容器pids限制（设置-1表示无限制）
      --restart string             当容器退出时要应用的重新启动策略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、容器目录挂载" tabindex="-1"><a class="header-anchor" href="#四、容器目录挂载" aria-hidden="true">#</a> 四、容器目录挂载</h2><p>作用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>我们可以在创建容器的时候，将宿主机的目录与容器内的目录进行映射，这样我们就可以实现宿主机和容器目录的双向数据自动同步；
我们通过容器目录挂载，能够轻松实现代码上传，配置修改，日志同步等需求；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实现：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>语法：
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> /宿主机目录:/容器目录 镜像名

多目录挂载
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true /宿主机目录:/容器目录 <span class="token parameter variable">-v</span> /宿主机目录2:/容器目录2  镜像名

注意：
如果你同步的是多级目录，可能会出现权限不足的提示；
这是因为Centos7中的安全模块selinux把权限禁掉了，我们需要添加  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true 来解决挂载的目录没有权限的问题；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>挂载目录只读：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span>  /宿主机目录:/容器目录:ro 镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="五、dockerfile-构建镜像" tabindex="-1"><a class="header-anchor" href="#五、dockerfile-构建镜像" aria-hidden="true">#</a> 五、DockerFile 构建镜像</h2><h3 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h3><ul><li><strong>FROM</strong> #定制的镜像都是基于 FROM 的镜像[<code>nginx，centos...</code>]</li><li><strong>RUN</strong> [&quot;可执行文件&quot;, &quot;参数1&quot;, &quot;参数2&quot;] #构建镜像时需要运行的[Linux、自定义]命令（可以写多条，建议使用 <strong>&amp;&amp;</strong> 连接符）；是在 docker build 时运行。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>RUN <span class="token punctuation">[</span><span class="token string">&quot;./test.jar&quot;</span>, <span class="token string">&quot;dev&quot;</span>, <span class="token string">&quot;offline&quot;</span><span class="token punctuation">]</span> 等价于RUN ./test.jar dev offline
   
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span>
   
RUN <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis.tar.gz
   
简化，使用<span class="token operator">&amp;&amp;</span>连接：RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span> <span class="token punctuation">\\</span> <span class="token operator">&amp;&amp;</span> RUN <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>CMD</strong> #指定容器启动时要运行的命令，假如有多个CMD，最后一个生效；用于运行程序，在 docker run 时运行。CMD &lt;shell 命令&gt; ；</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CMD <span class="token punctuation">[</span><span class="token string">&quot;\\&lt;可执行文件或命令\\&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param1&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param2&gt;&quot;</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span> 

CMD <span class="token punctuation">[</span><span class="token string">&quot;\\&lt;param1&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param2&gt;&quot;</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 该写法是为 ENTRYPOINT 指令指定的程序提供默认参数</span>

CMD <span class="token punctuation">[</span><span class="token string">&quot;\\&lt;可执行文件或命令&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param1&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param2&gt;&quot;</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span> 

CMD <span class="token punctuation">[</span><span class="token string">&quot;\\&lt;param1&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param2&gt;&quot;</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span>  <span class="token comment"># 该写法是为 ENTRYPOINT 指令指定的程序提供默认参数</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>MAINTAINER</strong> xxx #声明镜像维护者信息</li><li><strong>LABEL</strong> name=&quot;xxx&quot; \\ build-date=&quot;20201212&quot; #镜像描述元信息（可以写多条）</li><li><strong>WORKDIR</strong> /root/xx #设置终端默认登录进来的工作目录</li><li><strong>EXPOSE</strong> 8088 #当前容器对外暴露出的端口</li><li><strong>ADD</strong> 文件 容器内部目录 #将宿主机的文件复制到容器内，如果是一个压缩文件，将会在复制后<strong>自动解压</strong></li><li><strong>COPY</strong> [&quot;源文件&quot; &quot;容器内部路径&quot;] #和ADD相似，但是如果有压缩文件是<strong>不能解压</strong></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COPY home.txt /mydir/ <span class="token comment">#路径不存在的话，会自动创建。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>VOLUME</strong> #创建一个可以从本地主机或其他容器挂载的挂载点，一般用来存放数据库和需要保持的数据等</li><li><strong>ENV</strong> &lt;key&gt;=&lt; value&gt;：为容器设置 Linux 环境变量 ，定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ENV JAVA_HOME /home/jdk1.8.0_151
ENV CLASSPATH <span class="token punctuation">\\</span><span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>ARG</strong> &lt;key&gt;=&lt; value&gt;： 设置环境变量，环境变量只作用于Dockerfile内。</li><li><strong>ENTRYPOINT</strong> #指定容器启动时要运行的命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;\\&lt;executeable&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param1&gt;&quot;</span>,<span class="token string">&quot;\\&lt;param2&gt;&quot;</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
ENTRYPOINT nginx <span class="token parameter variable">-g</span> <span class="token string">&quot;daemon off;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>USER</strong> 用于指定执行后续命令的用户和用户组 USER 用户名:用户组 <ul><li>USER kong:k</li></ul></li><li><strong>ONBUILD</strong> #当构建一个被继承的Dockerfile时运行的命令，父镜像在被子镜像继承后父镜像的onbuild被触发。可以把ONBUID理解为一个触发器。</li></ul><h3 id="dockerfile-示例" tabindex="-1"><a class="header-anchor" href="#dockerfile-示例" aria-hidden="true">#</a> DockerFile 示例</h3><h4 id="基于nginxdockerfile" tabindex="-1"><a class="header-anchor" href="#基于nginxdockerfile" aria-hidden="true">#</a> 基于nginxDockerFile<a name="nginxDockerFile"></a></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM nginx
MAINTAINER kong9
ADD dist-vue.tar.gz /usr/share/nginx/html
ADD conf.tar.gz /etc/nginx
EXPOSE <span class="token number">80</span>
ENTRYPOINT nginx <span class="token parameter variable">-g</span> <span class="token string">&quot;daemon off;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于centosdockerfile" tabindex="-1"><a class="header-anchor" href="#基于centosdockerfile" aria-hidden="true">#</a> 基于CentosDockerFile<a name="CentosDockerFile"></a></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM centos
MAINTAINER kong9
LABEL <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;Java1234 CentOS Image&quot;</span> <span class="token punctuation">\\</span>
    build-date<span class="token operator">=</span><span class="token string">&quot;20191112&quot;</span>
WORKDIR <span class="token variable">$WORKPATH</span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>

EXPOSE <span class="token number">80</span>
CMD /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于tomcatdockerfile" tabindex="-1"><a class="header-anchor" href="#基于tomcatdockerfile" aria-hidden="true">#</a> 基于TomcatDockerFile<a name="基于TomcatDockerFile"></a></h4><p><strong>tomcat:9.0.62-jre8-temurin-focal、tomcat:8.5.78-jre8-temurin-focal</strong></p><p><strong>tomcat:9.0.62-jre11-temurin-focal、tomcat:8.5.78-jre11-temurin-focal</strong></p><p><strong>tomcat:9.0.62-jre17-temurin-focal、tomcat:8.5.78-jre17-temurin-focal</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#使用的基础镜像</span>
FROM tomcat:8.5
<span class="token comment">#启动时运行tomcat</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;catalina.sh&quot;</span>, <span class="token string">&quot;run&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#设置启动命令</span>
<span class="token comment">#ENTRYPOINT [&quot;/usr/local/tomcat/bin/catalina.sh&quot;,&quot;run&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM tomcat:9.0.62-jre11-temurin-focal
MAINTAINER kong9
<span class="token comment"># jdk</span>
ADD server-jre-8u151-linux-x64.tar.gz /home/
ADD apache-tomcat-8.5.37.tar.gz /home/
<span class="token comment"># java项目的jar包</span>
ADD eureka.jar /eureka.jar
ENV WORKPATH /home/apache-tomcat-8.5.37/
WORKDIR <span class="token variable">$WORKPATH</span>
<span class="token comment"># 配置java环境</span>
ENV JAVA_HOME /home/jdk1.8.0_151
ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar
ENV CATALINA_HOME /home/apache-tomcat-8.5.37/
ENV CATALINA_BASE /home/apache-tomcat-8.5.37/
ENV <span class="token environment constant">PATH</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$CATALINA_HOME</span>/lib:<span class="token variable">$CATALINA_HOME</span>/bin
EXPOSE <span class="token number">8080</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;/home/apache-tomcat-8.5.37/bin/catalina.sh&quot;</span>,<span class="token string">&quot;run&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#ENTRYPOINT [&quot;/usr/local/tomcat/bin/catalina.sh&quot;,&quot;run&quot;]</span>
<span class="token comment"># 指定容器启动时要运行的命令 </span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/eureka.jar&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于centos7的java项目镜像" tabindex="-1"><a class="header-anchor" href="#基于centos7的java项目镜像" aria-hidden="true">#</a> 基于centos7的java项目镜像<a name="基于centos7的java镜像"></a></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM registry.cn-chengdu.aliyuncs.com/jinfang/centos:7.9

MAINTAINER jf
LABEL <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span>

<span class="token comment">#添加JVM参数</span>
ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -Xmx1024M -Xms1024M -Xmn750M -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=512M -XX:GCTimeRatio=19 -XX:+ClassUnloading&quot;</span>

<span class="token comment"># 项目打包后的jar包名</span>
ENV <span class="token assign-left variable">JAR_FILE</span><span class="token operator">=</span>web-1.0.0.jar
ENV <span class="token assign-left variable">JDK_FILE</span><span class="token operator">=</span>jdk-17.0.3_linux-x64_bin.tar.gz

<span class="token comment"># 项目根目录</span>
ENV <span class="token assign-left variable">ROOT_DIR</span><span class="token operator">=</span>/data/web
<span class="token comment">#动态加载配置文件</span>
ENV <span class="token assign-left variable">ROOT_DIR_CONFIG</span><span class="token operator">=</span>/data/web/config
<span class="token comment">#jdk目录</span>
ENV <span class="token assign-left variable">JAVA_DIR</span><span class="token operator">=</span>/usr/local/java

RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$JAVA_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment">#在容器运行时声明一个 volume, 在容器中创建目录</span>
VOLUME <span class="token variable">$ROOT_DIR</span>
VOLUME <span class="token variable">$JAVA_DIR</span>

<span class="token comment">#设置终端默认登录进来的工作目录</span>
WORKDIR <span class="token variable">$ROOT_DIR</span>

<span class="token comment"># 配置中文字符 默认：LANG=&quot;en_US.UTF-8&quot;</span>
<span class="token comment"># RUN echo &#39;LANG=&quot;zh_CN.UTF-8&quot;&#39; &gt; /etc/locale.conf &amp;&amp; source /etc/locale.conf</span>
<span class="token comment"># RUN echo &quot;export LC_ALL=zh_CN.UTF-8&quot; &gt;&gt; /etc/profile &amp;&amp; source /etc/profile</span>
RUN <span class="token function">ln</span> <span class="token parameter variable">-sf</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> kde-l10n-Chinese <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> yum <span class="token parameter variable">-y</span> reinstall glibc-common <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> localedef <span class="token parameter variable">-c</span> <span class="token parameter variable">-f</span> UTF-8 <span class="token parameter variable">-i</span> zh_CN zh_CN.UTF-8 <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;LANG=&quot;zh_CN.UTF-8&quot;&#39;</span> <span class="token operator">&gt;</span> /etc/locale.conf <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/locale.conf <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> yum clean all
ENV <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8 <span class="token punctuation">\\</span>
    <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>zh_CN.UTF-8

<span class="token comment"># 配置jdk</span>
COPY ./<span class="token variable">$JDK_FILE</span> <span class="token variable">$JAVA_DIR</span>
<span class="token comment"># RUN 构建镜像时需要运行的Linux命令、CMD #指定容器启动时要运行的命令</span>
RUN <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> <span class="token variable">$JAVA_DIR</span>/<span class="token variable">$JDK_FILE</span> <span class="token parameter variable">-C</span> <span class="token variable">$JAVA_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$JAVA_DIR</span>/<span class="token variable">$JDK_FILE</span>
<span class="token comment"># 设置环境变量</span>
ENV <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span><span class="token variable">$JAVA_DIR</span>/jdk-17.0.3
ENV <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$CLASSPATH</span>
ENV <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token comment"># RUN source /etc/profile &amp;&amp; java -version</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;source&quot;</span>,<span class="token string">&quot;/etc/profile&quot;</span>,<span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-version&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># java项目的jar包</span>
COPY ./target/<span class="token variable">$JAR_FILE</span> <span class="token variable">$ROOT_DIR</span>
COPY ./src/main/resources <span class="token variable">$ROOT_DIR_CONFIG</span>

RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;java -Djava.security.egd=file:/dev/./urandom <span class="token variable">\${JAVA_OPTS}</span> -jar <span class="token variable">$ROOT_DIR</span>/<span class="token variable">$JAR_FILE</span>&quot;</span> <span class="token operator">&gt;</span> /run_module.sh

<span class="token comment"># 当前容器对外暴露出的端口</span>
EXPOSE <span class="token number">51155</span>
EXPOSE <span class="token number">51156</span>
EXPOSE <span class="token number">51157</span>

<span class="token comment"># 指定容器启动时要运行的命令</span>
<span class="token comment">#ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/web-1.0.0.jar&quot;,&quot;--spring.profiles.active=prod&quot;]</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;/run_module.sh&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#[&quot;java&quot;,&quot;-Djava.security.egd=file:/dev/./urandom&quot;,&quot;-jar&quot;,&quot;/home/javacode.jar&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于jdk的java项目镜像-推荐" tabindex="-1"><a class="header-anchor" href="#基于jdk的java项目镜像-推荐" aria-hidden="true">#</a> 基于jdk的java项目镜像&lt;推荐&gt;<a name="基于jdk的java镜像"></a></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 添加JAVA启动的必要镜像，推荐使用jre版本</span>
<span class="token comment"># openjdk:8-jre(295.16 MB)、openjdk:11-jre(328.63 MB)、openjdk:17-jdk|oracle(492.57 MB)</span>
FROM registry.cn-chengdu.aliyuncs.com/jinfang/openjdk:17-jdk
<span class="token comment">#声明镜像维护者信息</span>
MAINTAINER jf
<span class="token comment">#镜像描述元信息</span>
LABEL <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;web&quot;</span>

<span class="token comment">#添加JVM参数</span>
ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -Xmx1024M -Xms1024M -Xmn750M -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=512M -XX:GCTimeRatio=19 -XX:+ClassUnloading&quot;</span>

<span class="token comment"># 项目打包后的jar包名</span>
ENV <span class="token assign-left variable">JAR_FILE</span><span class="token operator">=</span>web-1.0.0.jar

<span class="token comment"># 项目根目录</span>
ENV <span class="token assign-left variable">ROOT_DIR</span><span class="token operator">=</span>/data/web
<span class="token comment">#动态加载配置文件</span>
ENV <span class="token assign-left variable">ROOT_DIR_CONFIG</span><span class="token operator">=</span>/data/web/config

RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR</span>
RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment">#在容器运行时声明一个 volume, 在容器中创建目录</span>
VOLUME <span class="token variable">$ROOT_DIR</span>

<span class="token comment">#设置终端默认登录进来的工作目录</span>
WORKDIR <span class="token variable">$ROOT_DIR</span>

<span class="token comment"># java项目的jar包</span>
COPY ./target/<span class="token variable">$JAR_FILE</span> <span class="token variable">$ROOT_DIR</span>
<span class="token comment"># java项目的配置文件，使用这个文件为容器内部默认配置文件</span>
COPY ./src/main/resources <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment"># Create a script 由于ENTRYPOINT无法使用dockerfile中定义的环境变量</span>
<span class="token comment"># 所以需要按照指定的环境变量生成运行脚本，并输出到文件，之后ENTRYPOINT运行脚本文件就行了</span>
<span class="token comment">#  --spring.config.location=\${ROOT_DIR_CONFIG}/application-\${PROFILES}.yml</span>
<span class="token comment">#  --spring.profiles.active=$PROFILES</span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;java -Djava.security.egd=file:/dev/./urandom <span class="token variable">\${JAVA_OPTS}</span> -jar <span class="token variable">$ROOT_DIR</span>/<span class="token variable">$JAR_FILE</span>&quot;</span> <span class="token operator">&gt;</span> /run_module.sh

<span class="token comment"># 当前容器对外暴露出的端口</span>
EXPOSE <span class="token number">51155</span>
EXPOSE <span class="token number">51156</span>
EXPOSE <span class="token number">51157</span>

<span class="token comment"># 指定容器启动时要运行的命令</span>
<span class="token comment">#ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/web-1.0.0.jar&quot;,&quot;--spring.profiles.active=prod&quot;]</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;/run_module.sh&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile-构建java项目镜像" tabindex="-1"><a class="header-anchor" href="#dockerfile-构建java项目镜像" aria-hidden="true">#</a> DockerFile 构建java项目镜像</h3><h4 id="a-编写dockerfile文件" tabindex="-1"><a class="header-anchor" href="#a-编写dockerfile文件" aria-hidden="true">#</a> a, 编写DockerFile文件</h4><p><a href="#%E5%9F%BA%E4%BA%8Ejdk%E7%9A%84java%E9%95%9C%E5%83%8F"># 基于jdk的java镜像</a></p><h4 id="b-开始构建镜像" tabindex="-1"><a class="header-anchor" href="#b-开始构建镜像" aria-hidden="true">#</a> b, 开始构建镜像</h4><p>docker build -f [DockerFile文件] -t [设置标签]:版本 .</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> myCentosDockerFile <span class="token parameter variable">-t</span> yu/mycentos:1.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建镜像OK后,推送到阿里镜像仓库 | docker hub镜像仓库</p><p><a href="#%E6%8E%A8%E9%80%81%E5%88%B0%E9%98%BF%E9%87%8C%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93">#推送到阿里镜像仓库</a></p><h4 id="c-运行镜像" tabindex="-1"><a class="header-anchor" href="#c-运行镜像" aria-hidden="true">#</a> c, 运行镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> 镜像ID <span class="token operator">||</span> <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:8080 镜像ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="d-查看镜像历史" tabindex="-1"><a class="header-anchor" href="#d-查看镜像历史" aria-hidden="true">#</a> d, 查看镜像历史</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">history</span> 镜像ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六、docker-compose" tabindex="-1"><a class="header-anchor" href="#六、docker-compose" aria-hidden="true">#</a> 六、Docker Compose</h2><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><p>Compose 使用的三个步骤：</p><ul><li>使用 Dockerfile 定义应用程序的环境。</li><li>使用 docker-compose.yml 定义构成应用程序的服务，这样它们可以在隔离环境中一起运行。</li><li>最后，执行 docker-compose up 命令来启动并运行整个应用程序。</li></ul><p>docker-compose.yml 的配置案例如下:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># yaml 配置实例</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ../../..
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5001:5001&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>/code
        <span class="token punctuation">-</span> logvolume01<span class="token punctuation">:</span>/var/log
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">logvolume01</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载 Docker Compose 的当前稳定版本：（GitHub，可能不太稳定。）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
或
$ <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://get.daocloud.io/docker/compose/releases/download/v2.4.1/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
$ <span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
$ <span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
cker-compose version <span class="token number">1.24</span>.1, build 4667896b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir composetest
cd composetest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>composetest/app.py</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>import redis
from flask import Flask

<span class="token key attr-name">app</span> <span class="token punctuation">=</span> <span class="token value attr-value">Flask(__name__)</span>
<span class="token key attr-name">cache</span> <span class="token punctuation">=</span> <span class="token value attr-value">redis.Redis(host=&#39;redis&#39;, port=6379)</span>
def get_hit_count():
  <span class="token key attr-name">retries</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
  while True:
    try:
      return cache.incr(&#39;hits&#39;)
    except redis.exceptions.ConnectionError as exc:
      <span class="token key attr-name">if retries</span> <span class="token punctuation">=</span><span class="token value attr-value">= 0:</span>
        raise exc
      <span class="token key attr-name">retries -</span><span class="token punctuation">=</span> <span class="token value attr-value">1</span>
      time.sleep(0.5)

@app.route(&#39;/&#39;)
def hello():
  <span class="token key attr-name">count</span> <span class="token punctuation">=</span> <span class="token value attr-value">get_hit_count()</span>
  return &#39;Hello World! I have been seen {} times.\\n&#39;.format(count)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>composetest/requirements.txt</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flask
redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Dockerfile</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>FROM python:3.7-alpine
WORKDIR /code
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD [&quot;flask&quot;, &quot;run&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># yaml 配置</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;redis:alpine&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Compose 命令构建和运行您的应用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="n、docker-私有仓库" tabindex="-1"><a class="header-anchor" href="#n、docker-私有仓库" aria-hidden="true">#</a> N、docker 私有仓库</h2><p>Docker私有仓库主要是企业内部用来存放镜像的仓库，相对官方仓库以及阿里云仓库，具有更高的保密安全级别；</p><h3 id="a-搭建仓库" tabindex="-1"><a class="header-anchor" href="#a-搭建仓库" aria-hidden="true">#</a> A 搭建仓库</h3><h4 id="第一步-拉取私有仓库镜像-私有仓库程序本身就是一个镜像" tabindex="-1"><a class="header-anchor" href="#第一步-拉取私有仓库镜像-私有仓库程序本身就是一个镜像" aria-hidden="true">#</a> 第一步：拉取私有仓库镜像 （私有仓库程序本身就是一个镜像）</h4><p>docker pull registry</p><h4 id="第二步-启动私有仓库容器" tabindex="-1"><a class="header-anchor" href="#第二步-启动私有仓库容器" aria-hidden="true">#</a> 第二步：启动私有仓库容器</h4><p>docker run -d -v /opt/registry:/var/lib/registry --name=myRegistry -p 5000:5000 registry</p><p>docker run -d -v /opt/registry:/var/lib/registry --name=myRegistry -p 5000:5000 --restart=always registry</p><h4 id="第三步-测试" tabindex="-1"><a class="header-anchor" href="#第三步-测试" aria-hidden="true">#</a> 第三步：测试</h4>`,98),K={href:"http://localhost:5000/v2/_catalog",target:"_blank",rel:"noopener noreferrer"},W=i('<figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看到这个 说明启动OK。因为仓库里还没有镜像，所以就是空的；</p><h4 id="第四步-etc-docker-修改daemon-json-让docker信任私有仓库地址" tabindex="-1"><a class="header-anchor" href="#第四步-etc-docker-修改daemon-json-让docker信任私有仓库地址" aria-hidden="true">#</a> 第四步：etc/docker 修改daemon.json，让docker信任私有仓库地址</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://0xp.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;insecure-registries&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:5000&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第五步-修改配置后重启docker" tabindex="-1"><a class="header-anchor" href="#第五步-修改配置后重启docker" aria-hidden="true">#</a> 第五步：修改配置后重启docker</h4><p>systemctl restart docker</p><h3 id="b-添加镜像到仓库" tabindex="-1"><a class="header-anchor" href="#b-添加镜像到仓库" aria-hidden="true">#</a> B 添加镜像到仓库</h3><h4 id="第一步-标记此镜像为私有仓库的镜像" tabindex="-1"><a class="header-anchor" href="#第一步-标记此镜像为私有仓库的镜像" aria-hidden="true">#</a> 第一步：标记此镜像为私有仓库的镜像</h4><p>docker tag nginx:stable-perl localhost:5000/nginx:1.0</p><h4 id="第二步-上传镜像到私有仓库" tabindex="-1"><a class="header-anchor" href="#第二步-上传镜像到私有仓库" aria-hidden="true">#</a> 第二步：上传镜像到私有仓库</h4><p>docker push localhost:5000/nginx:1.0</p><figure><img src="`+h+'" alt="image-20210716175146294" tabindex="0" loading="lazy"><figcaption>image-20210716175146294</figcaption></figure><p>此时私有仓库里已经有了这个镜像；</p><h4 id="第三步-删除localhost-5000-nginx本地仓库镜像" tabindex="-1"><a class="header-anchor" href="#第三步-删除localhost-5000-nginx本地仓库镜像" aria-hidden="true">#</a> 第三步：删除localhost:5000/nginx本地仓库镜像</h4><p>dkrmi localhost:5000/nginx:1.0</p><h4 id="第四步-从私有仓库拉取localhost-5000-nginx镜像-并运行" tabindex="-1"><a class="header-anchor" href="#第四步-从私有仓库拉取localhost-5000-nginx镜像-并运行" aria-hidden="true">#</a> 第四步：从私有仓库拉取localhost:5000/nginx镜像，并运行</h4><p>docker pull localhost:5000/nginx:1.0</p><p>docker run -it -p 80:80 localhost:5000/nginx:1.0</p>',18),Z={id:"第五步-浏览器运行-http-localhost-8080测试",tabindex:"-1"},Q=n("a",{class:"header-anchor",href:"#第五步-浏览器运行-http-localhost-8080测试","aria-hidden":"true"},"#",-1),nn={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},sn=n("figure",null,[n("img",{src:g,alt:"image-20210716175240487",tabindex:"0",loading:"lazy"}),n("figcaption",null,"image-20210716175240487")],-1),an=n("h3",{id:"c-搭建管理界面-harbor-2-2-x",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c-搭建管理界面-harbor-2-2-x","aria-hidden":"true"},"#"),s(" C 搭建管理界面 harbor-2.2.x")],-1),en={href:"https://github.com/goharbor/harbor/releases",target:"_blank",rel:"noopener noreferrer"},tn=n("h4",{id:"设置本地域名-etc-hosts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置本地域名-etc-hosts","aria-hidden":"true"},"#"),s(" 设置本地域名/etc/hosts")],-1),ln={href:"http://dk.harbor.com",target:"_blank",rel:"noopener noreferrer"},rn=i(`<h4 id="生成证书颁发机构证书" tabindex="-1"><a class="header-anchor" href="#生成证书颁发机构证书" aria-hidden="true">#</a> 生成证书颁发机构证书</h4><h5>---生成 CA 证书私钥</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-out</span> ca.key <span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5>---生成 CA 证书</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-new</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=dkharbor.qyk8.top&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-key</span> ca.key <span class="token punctuation">\\</span>
 <span class="token parameter variable">-out</span> ca.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成服务器证书" tabindex="-1"><a class="header-anchor" href="#生成服务器证书" aria-hidden="true">#</a> 生成服务器证书</h4><h5>---生成私钥</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl genrsa <span class="token parameter variable">-out</span> dkharbor.qyk8.top.key <span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5>---生成证书签名请求 (CSR)</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl req <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-new</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=dkharbor.qyk8.top&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-key</span> dkharbor.qyk8.top.key <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> dkharbor.qyk8.top.csr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>---生成 x509 v3 扩展文件</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> v3.ext <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1=dkharbor.qyk8.top
DNS.2=dkharbor.qyk8
DNS.3=k
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>---使用 <code>v3.ext</code>文件为您的 Harbor 主机生成证书</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-extfile</span> v3.ext <span class="token punctuation">\\</span>
    <span class="token parameter variable">-CA</span> ca.crt <span class="token parameter variable">-CAkey</span> ca.key <span class="token parameter variable">-CAcreateserial</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-in</span> dkharbor.qyk8.top.csr <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> dkharbor.qyk8.top.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="向-harbor-和-docker-提供证书" tabindex="-1"><a class="header-anchor" href="#向-harbor-和-docker-提供证书" aria-hidden="true">#</a> 向 Harbor 和 Docker 提供证书</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> dkharbor.qyk8.top.crt ./data/cert/
<span class="token function">cp</span> dkharbor.qyk8.top.key ./data/cert/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2,兑换 <code>yourdomain.com.crt</code>至 <code>yourdomain.com.cert</code>，供 Docker 使用。</p><p>Docker 守护进程解释 <code>.crt</code>文件作为 CA 证书和 <code>.cert</code>文件作为客户端证书。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl x509 <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-in</span> dkharbor.qyk8.top.crt <span class="token parameter variable">-out</span> dkharbor.qyk8.top.cert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3,将服务器证书、密钥和 CA 文件复制到 Harbor 主机上的 Docker 证书文件夹中。 您必须先创建适当的文件夹。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> dkharbor.qyk8.top.cert /etc/docker/certs.d/dkharbor.qyk8.top/
<span class="token function">sudo</span> <span class="token function">cp</span> dkharbor.qyk8.top.key /etc/docker/certs.d/dkharbor.qyk8.top/
<span class="token function">sudo</span> <span class="token function">cp</span> ca.crt /etc/docker/certs.d/dkharbor.qyk8.top/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您映射默认 <code>nginx</code>端口 443 到不同的端口，创建文件夹 <code>/etc/docker/certs.d/yourdomain.com:port</code>， 或者 <code>/etc/docker/certs.d/harbor_IP:port</code>.</p><p>4,重启 Docker 引擎。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#区别，前者会remove掉容器、image、网络，停的更干净，后者只是停服务</span>
<span class="token function">sudo</span> <span class="token function">docker-compose</span> down <span class="token parameter variable">-v</span> 或 <span class="token function">sudo</span> <span class="token function">docker-compose</span> stop  
<span class="token comment">#重启Harbor</span>
<span class="token function">sudo</span> <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>                       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="https访问" tabindex="-1"><a class="header-anchor" href="#https访问" aria-hidden="true">#</a> HTTPS访问</h4>`,27),on=n("code",null,"/etc/docker/daemon.json",-1),cn=n("code",null,"-insecure-registry",-1),dn={href:"https://yourdomain.com",target:"_blank",rel:"noopener noreferrer"},pn=i(`<p>从 Docker 客户端登录 Harbor。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login yourdomain.com
<span class="token function">docker</span> login yourdomain.com:port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),un={href:"https://dkharbor.qyk8.top/",target:"_blank",rel:"noopener noreferrer"},vn=i('<h4 id="上传实例" tabindex="-1"><a class="header-anchor" href="#上传实例" aria-hidden="true">#</a> 上传实例</h4><h5>-- 新建项目</h5><figure><img src="'+f+'" alt="image-20210716221821041" tabindex="0" loading="lazy"><figcaption>image-20210716221821041</figcaption></figure><h5>-- 推送</h5><p>dktag b84b6fdf2183 dkharbor.qyk8.top/test/nginx:1.0.1</p><p>dkpush dkharbor.qyk8.top/test/nginx:1.0.1</p><figure><img src="'+x+'" alt="image-20210716221950684" tabindex="0" loading="lazy"><figcaption>image-20210716221950684</figcaption></figure><figure><img src="'+_+'" alt="image-20210716222615232" tabindex="0" loading="lazy"><figcaption>image-20210716222615232</figcaption></figure>',8);function mn(kn,bn){const a=c("ExternalLinkIcon");return l(),r("div",null,[o(" more "),q,n("table",null,[E,n("tbody",null,[R,A,n("tr",null,[O,n("td",I,[s("Docker 客户端通过命令行或者其他工具使用 Docker SDK ("),n("a",D,[s("https://docs.docker.com/develop/sdk/"),e(a)]),s(") 与 Docker 的守护进程通信。")])]),N,T,j])]),C,M,n("p",null,[s("请确保您 "),n("a",S,[s("满足先决条件"),e(a)]),s("，然后 "),n("a",P,[s("安装Docker"),e(a)]),s("。")]),n("p",null,[s("安装 "),n("a",$,[s("window"),e(a)]),s("、"),n("a",w,[s("linux"),e(a)]),s(" 桌面版")]),F,n("p",null,[n("a",V,[s("华为加速"),e(a)])]),n("p",null,[n("a",L,[s("阿里云镜像"),e(a)])]),U,n("p",null,[s("可以在这里查看镜像： "),n("a",G,[s("https://hub.docker.com/_/centos?tab=tags&page=1"),e(a)])]),z,n("p",null,[n("a",H,[s("https://hub.docker.com/"),e(a)]),s(" 注册得到docker id和密码,用docker login登陆hub服务器,docker push推送")]),n("p",null,[s("查看: 登陆 "),n("a",B,[s("https://hub.docker.com/"),e(a)]),s(" 点击 Repositories 菜单")]),J,n("h5",null,[s("a, "),n("a",X,[s("阿里开通镜像服务"),e(a)])]),Y,n("p",null,[n("a",K,[s("http://localhost:5000/v2/_catalog"),e(a)])]),W,n("h4",Z,[Q,s(" 第五步：浏览器运行 "),n("a",nn,[s("http://localhost:8080"),e(a)]),s("测试")]),sn,an,n("p",null,[n("a",en,[s("下载地址"),e(a)])]),tn,n("p",null,[s("192.168.101.6 "),n("a",ln,[s("dk.harbor.com"),e(a)]),s(" 192.168.101.6 dkharbor.qyk8.top")]),rn,n("p",null,[s("某些浏览器可能会显示一条警告，指出证书颁发机检查 "),on,s("文件以确保 "),cn,s("未为 设置选项 "),n("a",dn,[s("https://yourdomain.com"),e(a)]),s("。")]),pn,n("p",null,[s("帐号密码为 admin/Harbor12345 ("),n("a",un,[s("https://dkharbor.qyk8.top/"),e(a)]),s(")")]),vn])}const gn=t(y,[["render",mn],["__file","docker-note.html.vue"]]);export{gn as default};
