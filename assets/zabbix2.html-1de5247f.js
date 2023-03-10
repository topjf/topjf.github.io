import{_ as i,X as e,Y as t,Z as l,$ as a,a0 as n,a2 as c,a1 as r,D as p}from"./framework-10d91a2c.js";const b="/assets/1-70428e5c.webp",o="/assets/2-a043ebe0.webp",d="/assets/3-71d3e93b.webp",m="/assets/4-b3d0cfe9.webp",u="/assets/5-9e1ef229.webp",g="/assets/6-1f314798.webp",v="/assets/7-0580cf9c.webp",f="/assets/8-5fed5cbd.webp",x="/assets/9-9b3f70bb.webp",z="/assets/10-f2b4f0a2.webp",k="/assets/11-7c582c82.webp",_="/assets/12-39b9e6c9.webp",h="/assets/13-9967a657.webp",y="/assets/14-78ea0c2b.webp",w="/assets/15-d98ccef6.webp",q="/assets/16-0c20674d.webp",S="/assets/17-61e7efb8.webp",C="/assets/18-c9f5b694.webp",E="/assets/19-dcf4a0af.webp",N="/assets/20-bcaf78a0.webp",B="/assets/21-bbf8938b.webp",A="/assets/22-71720d7e.webp",I="/assets/23-26ab267e.webp",L="/assets/24-281ab337.webp",P="/assets/25-24e950a5.webp",T="/assets/26-5cd88a84.webp",D="/assets/27-b5694679.webp",V="/assets/28-b02d41a1.webp",W="/assets/29-992c0c0e.webp",U="/assets/30-1b2d1b16.webp",j="/assets/31-e4afc37c.webp",G="/assets/32-a5239e9e.webp",Z="/assets/33-c7cf14e7.webp",O="/assets/34-5e5d03e0.webp",R="/assets/35-22d60588.webp",Y="/assets/36-123d4e9c.webp",F="/assets/37-b8c354fa.webp",H="/assets/38-46202978.webp",M="/assets/39-a49dc825.webp",X="/assets/40-daa5fa54.webp",$="/assets/41-af4997cf.webp",J="/assets/42-0c1b50b3.webp",K="/assets/43-78a0a1c4.webp",Q="/assets/44-52b23034.webp",aa={},na=r(`<h1>Zabbix概述篇</h1><h2 id="zabbix-是什么" tabindex="-1"><a class="header-anchor" href="#zabbix-是什么" aria-hidden="true">#</a> zabbix 是什么？</h2><ul><li>zabbix 是一个基于 Web 界面的提供分布式系统监视以及网络监视功能的企业级的开源解决方案。</li><li>zabbix 能监视各种网络参数，保证服务器系统的安全运营；并提供灵活的通知机制以让系统管理员快速定位/解决存在的各种问题。</li><li>zabbix 由 2 部分构成，zabbix server 与可选组件 zabbix agent。通过 C/S 模式采集数据，通过 B/S 模式在 Web 端展示和配置。</li><li>zabbix server 可以通过 SNMP，zabbix agent，ping，端口监视等方法提供对远程服务器/网络状态的监视，数据收集等功能， 它可以运行在 Linux 等平台上。</li><li>zabbix agent 需要安装在被监视的目标服务器上，它主要完成对硬件信息或与操作系统有关的内存，CPU 等信息的收集。</li></ul><h2 id="zabbix-的主要特点" tabindex="-1"><a class="header-anchor" href="#zabbix-的主要特点" aria-hidden="true">#</a> zabbix 的主要特点</h2><ul><li>安装与配置简单，学习成本低</li><li>支持多语言（包括中文）</li><li>免费开源</li><li>自动发现服务器与网络设备</li><li>分布式监视以及 WEB 集中管理功能</li><li>可以无 agent 监视</li><li>用户安全认证和柔软的授权方式</li><li>通过 WEB 界面设置或查看监视结果</li><li>email 等通知功能</li></ul><h2 id="zabbix-的主要功能" tabindex="-1"><a class="header-anchor" href="#zabbix-的主要功能" aria-hidden="true">#</a> zabbix 的主要功能</h2><ul><li>CPU 负荷</li><li>内存使用</li><li>磁盘使用</li><li>网络状况</li><li>端口监视</li><li>日志监视</li></ul><h2 id="zabbix-监控原理" tabindex="-1"><a class="header-anchor" href="#zabbix-监控原理" aria-hidden="true">#</a> zabbix 监控原理</h2><p>zabbix agent 安装在被监控的主机上，zabbix agent 负责定期收集客户端本地各项数据，并发送至 zabbix server 端，zabbix server 收到数据后， 将数据存储到数据库中，用户基于 Zabbix WEB 可以看到数据在前端展现图像。当 zabbix 监控某个具体的项目， 该项目会设置一个触发器阈值，当被监控的 指标超过该触发器设定的阈值，会进行一些必要的动作，动作包括：发送信息（邮件、微信、短信）、发送命令（shell 命令、reboot、restart、install 等）。</p><h2 id="zabbix-常见的五个系统" tabindex="-1"><a class="header-anchor" href="#zabbix-常见的五个系统" aria-hidden="true">#</a> zabbix 常见的五个系统</h2><ul><li>zabbix 监控部署在系统中，包含常见的五个程序: <code>zabbix_server</code>、<code>zabbix_agent</code>、<code>zabbix_proxy</code>、<code>zabbix_get</code>、<code>zabbix_sender</code> 等。</li><li>zabbix server：zabbix 服务端守护进程，其中 <code>zabbix_agent、zabbix_get、zabbix_sender、zabbix_proxy</code> 的数据最终都提交给 <code>zabbix server</code>;</li><li>zabbix agent：客户端守护进程，负责收集客户端数据，例如:收集 CPU 负载、内存、硬盘使用情况等;</li><li>zabbix proxy：zabbix 分布式代理守护进程，通常大于 500 台主机，需要进行分布式监控架构部署;</li><li>zabbix get：zabbix 数据接收工具，单独使用的命令，通常在 server 或者 proxy 端执行获取远程客户端信息的命令;</li><li>zabbix sender：zabbix 数据发送工具，用户发送数据给 server 或 proxy 端，通常用户耗时比较长的检查。</li></ul><h2 id="zabbix-端口号" tabindex="-1"><a class="header-anchor" href="#zabbix-端口号" aria-hidden="true">#</a> zabbix 端口号</h2><p>zabbix 服务端 zabbix_server 默认使用 10051 端口。 客户端 zabbix_agent2 默认使用 10050 端口。</p><h2 id="安装-zabbix" tabindex="-1"><a class="header-anchor" href="#安装-zabbix" aria-hidden="true">#</a> 安装 zabbix</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zabbix-server  <span class="token number">192.168</span>.50.105 zabbix-server-mysql、zabbix-agent
zabbix-agent   <span class="token number">192.168</span>.50.110 zabbix-agent2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>部署 zabbix 服务端（端口号 10051）</p></blockquote><p>zabbix-server 内存至少 2G，推荐 4G。</p><p>zabbix 服务端同时安装 zabbix-server-mysql 和 zabbix-agent，因为服务端所在主机自己也要被监控。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>关闭防火墙
systemctl disable <span class="token parameter variable">--now</span> firewalld
setenforce <span class="token number">0</span>
hostnamectl set-hostname zbx-server

<span class="token comment">#获取 zabbix 的下载源</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> https://mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm

<span class="token comment">#更换 zabbix.repo 为阿里源</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#http://repo.zabbix.com#https://mirrors.aliyun.com/zabbix#&#39;</span> zabbix.repo

yum clean all <span class="token operator">&amp;&amp;</span> yum makecache

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-server-mysql zabbix-agent

<span class="token comment">#安装SCL(Software Collections)，便于后续安装高版本的 php，默认 yum 安装的 php 版本为 5.4，版本过低，zabbix 5.0 版本对 php 版本最低要 7.2.0 版本。SCL 可以使得在同一台机器上使用多个版本的软件，而又不会影响整个系统的依赖环境。软件包会安装在 /etc/opt/rh 目录下。</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> centos-release-scl

<span class="token comment">#修改 zabbix-front 前端源，安装 zabbix 前端环境到 scl 环境下</span>
<span class="token function">vim</span> zabbix.repo
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token punctuation">[</span>zabbix-frontend<span class="token punctuation">]</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>          <span class="token comment">#开启安装源</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-web-mysql-scl zabbix-apache-conf-scl

<span class="token comment">#安装 zabbix 所需的数据库</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mariadb-server mariadb

systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> mariadb

mysql_secure_installation         <span class="token comment">#初始化数据库，并设置密码，如 abc123</span>

<span class="token comment">#添加数据库用户，以及 zabbix 所需的数据库信息</span>
mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pabc123</span>

CREATE DATABASE zabbix character <span class="token builtin class-name">set</span> utf8 collate utf8_bin<span class="token punctuation">;</span>
GRANT all ON zabbix.* TO <span class="token string">&#39;zabbix&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;zabbix&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>

<span class="token comment">#导入数据库信息</span>
<span class="token function">rpm</span> <span class="token parameter variable">-ql</span> zabbix-server-mysql   <span class="token comment">#查询 sql 文件的位置</span>

zcat /usr/share/doc/zabbix-server-mysql-5.0.15/create.sql.gz <span class="token operator">|</span> mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-pabc123</span> zabbix

<span class="token comment">#修改 zabbix server 配置文件，修改数据库的密码</span>
<span class="token function">vim</span> /etc/zabbix/zabbix_server.conf
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token assign-left variable">DBPassword</span><span class="token operator">=</span>zabbix     <span class="token comment">#124行，指定 zabbix 数据库的密码</span>

<span class="token comment">#修改 zabbix 的 php 配置文件</span>
<span class="token function">vim</span> /etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
php_value<span class="token punctuation">[</span>date.timezone<span class="token punctuation">]</span> <span class="token operator">=</span> Asia/Shanghai  <span class="token comment">#24行，取消注释，修改时区</span>

<span class="token comment">#启动 zabbix 相关服务</span>
systemctl restart zabbix-server zabbix-agent httpd rh-php72-php-fpm
systemctl <span class="token builtin class-name">enable</span> zabbix-server zabbix-agent httpd rh-php72-php-fpm

浏览器访问：http://192.168.50.105/zabbix
点击下一步，设置数据库的密码 zabbix
安装完成后，默认的登录账号和密码为：Admin/zabbix
设置文件界面：点击左边菜单栏的【User settings】，【Language】选择 Chinese<span class="token punctuation">(</span>zh_CN<span class="token punctuation">)</span>，再点击 Update 更新。

//解决 zabbix-server Web页面中文乱码问题
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> wqy-microhei-fonts

<span class="token function">cp</span> <span class="token parameter variable">-f</span> /usr/share/fonts/wqy-microhei/wqy-microhei.ttc /usr/share/fonts/dejavu/DejaVuSans.ttf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+W+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+U+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>部署 zabbix 客户端（端口号 10050）</p></blockquote><p>zabbix 5.0 版本采用 golang 语言开发的新版本客户端 agent2 。</p><p>zabbix 服务端 zabbix_server 默认使用 10051 端口，客户端 zabbix_agent2 默认使用 10050 端口。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl disable <span class="token parameter variable">--now</span> firewalld
setenforce <span class="token number">0</span>
hostnamectl set-hostname zbx-agent01

//服务端和客户端都配置时间同步
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ntpdate
ntpdate <span class="token parameter variable">-u</span> ntp.aliyun.com

//客户端配置时区，与服务器保持一致
<span class="token function">mv</span> /etc/localtime<span class="token punctuation">{</span>,.bak<span class="token punctuation">}</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

<span class="token function">date</span>

//设置 zabbix 的下载源，安装 zabbix-agent2
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> https://mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm

<span class="token builtin class-name">cd</span> /etc/yum.repos.d
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s#http://repo.zabbix.com#https://mirrors.aliyun.com/zabbix#&#39;</span> /etc/yum.repos.d/zabbix.repo

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-agent2

//修改 agent2 配置文件
<span class="token function">vim</span> /etc/zabbix/zabbix_agent2.conf
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token assign-left variable">Server</span><span class="token operator">=</span><span class="token number">192.168</span>.50.105
<span class="token comment">#80行，指定 zabbix 服务端的 IP 地址</span>
<span class="token assign-left variable">ServerActive</span><span class="token operator">=</span><span class="token number">192.168</span>.50.105
<span class="token comment">#120行，指定 zabbix 服务端的 IP 地址</span>
<span class="token assign-left variable">Hostname</span><span class="token operator">=</span>zbx-agent01
<span class="token comment">#131行，指定当前 zabbix 客户端的主机名</span>

//启动 zabbix-agent2
systemctl start zabbix-agent2
systemctl <span class="token builtin class-name">enable</span> zabbix-agent2

<span class="token function">netstat</span> <span class="token parameter variable">-natp</span> <span class="token operator">|</span> <span class="token function">grep</span> zabbix
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::10050                :::*                    LISTEN      <span class="token number">43654</span>/zabbix_agent2

//在服务端验证 zabbix-agent2 的连通性
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> zabbix-get    <span class="token comment">#安装 zabbix 主动获取数据的命令</span>

zabbix_get <span class="token parameter variable">-s</span> <span class="token string">&#39;192.168.50.110&#39;</span> <span class="token parameter variable">-p</span> <span class="token number">10050</span> <span class="token parameter variable">-k</span> <span class="token string">&#39;agent.ping&#39;</span>
<span class="token number">1</span>

zabbix_get <span class="token parameter variable">-s</span> <span class="token string">&#39;192.168.50.110&#39;</span> <span class="token parameter variable">-p</span> <span class="token number">10050</span> <span class="token parameter variable">-k</span> <span class="token string">&#39;system.hostname&#39;</span>
zbx-agent01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+X+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+$+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',67),sa={href:"https://juejin.cn/post/7169047487007686669",target:"_blank",rel:"noopener noreferrer"};function ia(ea,ta){const s=p("ExternalLinkIcon");return e(),t("div",null,[l(" more "),na,a("p",null,[a("a",sa,[n("原作者链接"),c(s)]),n("（版权归原作者所有，侵删）")])])}const ca=i(aa,[["render",ia],["__file","zabbix2.html.vue"]]);export{ca as default};
