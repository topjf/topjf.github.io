import{_ as l,X as d,Y as t,Z as r,$ as n,a0 as e,a2 as i,a1 as a,D as c}from"./framework-10d91a2c.js";const u="/assets/true-image-20220810165403975-a1b4f51f.png",o="/assets/true-image-20221005172127451-24e0cd50.png",v="/assets/true-image-20220810180106690-97f6b7d9.png",p="/assets/true-image-20220810174515569-ad9345bd.png",m="/assets/true-image-20220815154424445-0dc04bf4.png",b="/assets/true-image-20220810180823960-21251171.png",g="/assets/true-image-20220815172322524-f8237869.png",h="/assets/true-image-20220815175644826-e07b981b.png",k="/assets/true-image-20220815175704436-9a02dd83.png",x="/assets/true-image-20220815175737395-62ea9871.png",f="/assets/true-image-20220815152906828-cdfc2be0.png",_="/assets/true-image-20220815152959582-8b634e1f.png",q="/assets/true-image-20220815153017867-bb8f0f54.png",j={},y=n("h1",null,"Jenkins自动化部署",-1),E=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),P=n("blockquote",null,[n("p",null,"开发push代码到git，触发jenkins自动pull代码，通过maven编译、打包，然后通过执行shell脚本使docker构建镜像并push到私服（或者阿里云）仓库，此操作完成后jenkins服务器上再执行SSH命令登录到部署服务器，docker从仓库（私服）拉取镜像，启动容器。整个操作流程完成。")],-1),D=n("hr",null,null,-1),S=n("h2",{id:"通过-war-安装-2-372-推荐使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过-war-安装-2-372-推荐使用","aria-hidden":"true"},"#"),e(" 通过 war 安装 2.372（推荐使用）")],-1),w={href:"https://mirrors.huaweicloud.com/jenkins/war/2.346/jenkins.war",target:"_blank",rel:"noopener noreferrer"},N={href:"https://get.jenkins.io/war-stable/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://get.jenkins.io/war/",target:"_blank",rel:"noopener noreferrer"},B=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> ./jenkins3611.war https://get.jenkins.io/war-stable/2.361.1/jenkins.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> ./jenkins372.war https://get.jenkins.io/war/2.372/jenkins.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),T={href:"https://pan.baidu.com/s/17pkHcX7YrssnEVctveHbHQ",target:"_blank",rel:"noopener noreferrer"},I={href:"https://pan.baidu.com/s/1ch1_sjFDvvgY52-niYEBFw",target:"_blank",rel:"noopener noreferrer"},A={href:"https://pan.baidu.com/s/1TQgpdHz6p38k6QxPsBDhrQ",target:"_blank",rel:"noopener noreferrer"},C=a(`<h3 id="安装-jdk" tabindex="-1"><a class="header-anchor" href="#安装-jdk" aria-hidden="true">#</a> 安装 JDK</h3><ul><li>卸载默认jdk</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -qa | grep java
rpm -e --nodeps java-1.8.0-openjdk*
rpm -e --nodeps  java-1.8.0-openjdk*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解压安装</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf jdk-17_linux-x64_bin.tar.gz -C /usr/java/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>rm -rf /usr/bin/ja* &amp;&amp; ln -s /usr/java/jdk-17.0.4/bin/ja* /usr/bin/ &amp;&amp; ls -al /usr/bin/ja*</code></p><ul><li>设置环境变量</li></ul><p><code>vim /etc/profile</code></p><p>jdk17没有jre目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/jdk-17.0.4

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-tomcat" tabindex="-1"><a class="header-anchor" href="#安装-tomcat" aria-hidden="true">#</a> 安装 tomcat</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf apache-tomcat-9.0.65.tar.gz -C /data
mv /data/apache-tomcat-9.0.65 /data/tomcat-9.0.65 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置端口 <code>vim /data/tomcat-9.0.65/conf/server.xml</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>51000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span>
               <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span>
               <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> <span class="token attr-name">URIEncoding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-maven" tabindex="-1"><a class="header-anchor" href="#安装-maven" aria-hidden="true">#</a> 安装 maven</h3><ul><li>解压</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxvf apache-maven-3.8.6-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置环境变量</li></ul><p><code>vim /etc/profile</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/jdk-17.0.4
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=</span>/data/apache-maven-3.8.6

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">\${M2_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使环境变量生效：<code>source /etc/profile</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@n1 apache-maven-3.8.6<span class="token punctuation">]</span><span class="token comment"># mvn -v</span>

Apache Maven <span class="token number">3.8</span>.6 <span class="token punctuation">(</span>84538c9988a25aec085021c365c560670ad80f63<span class="token punctuation">)</span>
Maven home: /data/apache-maven-3.8.6
Java version: <span class="token number">17.0</span>.4, vendor: Oracle Corporation, runtime: /usr/java/jdk-17.0.4
Default locale: zh_CN, platform encoding: UTF-8
OS name: <span class="token string">&quot;linux&quot;</span>, version: <span class="token string">&quot;3.10.0-1160.71.1.el7.x86_64&quot;</span>, arch: <span class="token string">&quot;amd64&quot;</span>, family: <span class="token string">&quot;unix&quot;</span>

<span class="token punctuation">[</span>root@n1 soft<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">&quot;17.0.4&quot;</span> <span class="token number">2022</span>-07-19 LTS
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">17.0</span>.4+11-LTS-179<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">17.0</span>.4+11-LTS-179, mixed mode, sharing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tomcat-启动-jenkins" tabindex="-1"><a class="header-anchor" href="#tomcat-启动-jenkins" aria-hidden="true">#</a> tomcat 启动 jenkins</h3><p>使用Java测试运行1 <code>java -jar jenkins.war httpPort=8889</code></p><p>把war放到 tomcat 里运行 <code>cp -R ../software/jenkins.war ./webapps/</code></p><p>执行：<code>./bin/startup.sh</code></p><p>访问：<code>http://192.168.100.130:51000/jenkins372/</code></p><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /root/.jenkins/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>62db2150540d400a8b86944ea4c9a2af</p><p><strong>后续参考下面docker的：【安装插件】</strong></p><h2 id="通过-yum-安装" tabindex="-1"><a class="header-anchor" href="#通过-yum-安装" aria-hidden="true">#</a> 通过 yum 安装</h2><p>稳定版</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

<span class="token comment">#########</span>
<span class="token punctuation">[</span>jenkins<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Jenkins-stable
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://pkg.jenkins.io/redhat-stable
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">########</span>

<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://pkg.jenkins.io/redhat-stable/jenkins.io.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最新版</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/jenkins2.repo https://pkg.jenkins.io/redhat/jenkins.repo
 
<span class="token comment">#########</span>
<span class="token punctuation">[</span>jenkins<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Jenkins
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://pkg.jenkins.io/redhat
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">########</span>
 
<span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://pkg.jenkins.io/redhat/jenkins.io.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> jenkins

jenkins <span class="token parameter variable">--version</span>
<span class="token number">2.363</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改jenkins的端口号，默认为8080。这里修改为8099。</p><p>vim /etc/sysconfig/jenkins ：jenkins配置文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## Type:        integer(0:65535)</span>
<span class="token comment">## Default:     8080</span>
<span class="token comment">## ServiceRestart: jenkins</span>
<span class="token comment">#</span>
<span class="token comment"># Port Jenkins is listening on.</span>
<span class="token comment"># Set to -1 to disable</span>
<span class="token comment">#</span>
JENKINS_PORT=&quot;8099&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service Jenkins restart
systemctl enable jenkins.service
systemctl start jenkins.service
systemctl restart jenkins.service
systemctl status jenkins.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /var/lib/jenkins/secrets/initialAdminPassword
2a35ad12127f45fd8a61b1017b38c907
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,44),U={href:"http://192.168.100.130:8099",target:"_blank",rel:"noopener noreferrer"},R=n("hr",null,null,-1),J=n("h2",{id:"通过-docker-安装-2-363",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过-docker-安装-2-363","aria-hidden":"true"},"#"),e(" 通过 docker 安装 2.363")],-1),M={href:"https://blog.csdn.net/xiaoxiangzi520/article/details/88842200",target:"_blank",rel:"noopener noreferrer"},H={href:"https://blog.csdn.net/qq_42476834/article/details/117373828",target:"_blank",rel:"noopener noreferrer"},L={href:"https://hub.docker.com/r/jenkins/jenkins",target:"_blank",rel:"noopener noreferrer"},V=a(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull jenkins/jenkins:latest
<span class="token function">docker</span> pull jenkins/jenkins:lts-jdk17
<span class="token function">docker</span> pull jenkins/jenkins:lts-centos7
<span class="token function">docker</span> pull jenkins/jenkins:2.363
<span class="token function">docker</span> pull jenkins/jenkins:2.363-jdk17
<span class="token function">docker</span> pull jenkins/jenkins:2.363-centos7

<span class="token function">docker</span> tag jenkins/jenkins:2.363-centos7 registry.cn-chengdu.aliyuncs.com/jinfang/jenkins:2.363-centos7

<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/jenkins:2.363-centos7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/jenkins_home
<span class="token function">chmod</span> <span class="token number">777</span> /data/jenkins_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8888</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000 <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/jenkins_home:/var/jenkins_home <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> jenkins registry.cn-chengdu.aliyuncs.com/jinfang/jenkins:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8889</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">50001</span>:50000 <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/jenkins_jdk17:/var/jenkins_home <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> jenkins-jdk17 registry.cn-chengdu.aliyuncs.com/jinfang/jenkins:2.363-jdk17
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible web -m shell -a &#39;docker pull registry.cn-chengdu.aliyuncs.com/jinfang/jenkins:latest&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),W={href:"http://192.168.0.8:8889",target:"_blank",rel:"noopener noreferrer"},K=a('<hr><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="查看管理员密码" tabindex="-1"><a class="header-anchor" href="#查看管理员密码" aria-hidden="true">#</a> 查看管理员密码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
*************************************************************
*************************************************************
*************************************************************

Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:

62fc38a29bf840ee8c5fcf746ad9f574

This may also be found at: /var/jenkins_home/secrets/initialAdminPassword

*************************************************************
*************************************************************
*************************************************************
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>62fc38a29bf840ee8c5fcf746ad9f574</p></blockquote><h3 id="配置国内站点加速" tabindex="-1"><a class="header-anchor" href="#配置国内站点加速" aria-hidden="true">#</a> 配置国内站点加速</h3><p><code>vim /data/jenkins_home/hudson.model.UpdateCenter.xml</code></p><p>把 <code>https://updates.jenkins.io/update-center.json</code></p><p>换为其中之一</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://updates.jenkins-zh.cn/update-center.json

https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

https://mirrors.huaweicloud.com/jenkins/updates/update-center.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&#39;1.1&#39; encoding=&#39;UTF-8&#39;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sites</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>site</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://mirrors.huaweicloud.com/jenkins/updates/update-center.json<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>site</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sites</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实国内的配置内容使用的下载更新地址也是 <em>Jenkins</em> 官方默认下载的地址，所以还得编辑 <code>updates/default.json</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;s#https://updates.jenkins.io/download#https://mirrors.huaweicloud.com/jenkins#g&#39; default.json

sed -i &#39;s#http://www.google.com#https://www.baidu.com#g&#39; default.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>国内常用的镜像地址：</p>`,18),z=n("thead",null,[n("tr",null,[n("th",null,"来源"),n("th",null,"地址")])],-1),Y=n("td",null,"tencent",-1),$={href:"https://mirrors.cloud.tencent.com/jenkins/",target:"_blank",rel:"noopener noreferrer"},G=n("td",null,"huawei",-1),F={href:"https://mirrors.huaweicloud.com/jenkins/",target:"_blank",rel:"noopener noreferrer"},X=n("td",null,"tsinghua",-1),Q={href:"https://mirrors.tuna.tsinghua.edu.cn/jenkins/",target:"_blank",rel:"noopener noreferrer"},Z=n("td",null,"ustc",-1),nn={href:"https://mirrors.ustc.edu.cn/jenkins/",target:"_blank",rel:"noopener noreferrer"},en=n("td",null,"bit",-1),sn={href:"http://mirror.bit.edu.cn/jenkins/",target:"_blank",rel:"noopener noreferrer"},an=a('<p>也可以在管理界面进行设置</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>重启服务：<code>docker restart jenkins</code></p><p>查看配置： <code>[root@n1 jenkins_home]# cat updates/default.json</code></p><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><p>二选一即可</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="安装自动化构建和部署所需的插件" tabindex="-1"><a class="header-anchor" href="#安装自动化构建和部署所需的插件" aria-hidden="true">#</a> 安装自动化构建和部署所需的插件</h3><p>所需插件：git plugin、Maven Integration、Pipeline Maven Integration、Gitlab、SSH、Publish Over SSH、gitee、github、Deploy to container、Docker、Docker Commons、docker-build-step</p><p>​</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h3><p>admin admin123456</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="自动部署项目-springboot-maven-gitee" tabindex="-1"><a class="header-anchor" href="#自动部署项目-springboot-maven-gitee" aria-hidden="true">#</a> 自动部署项目（springBoot+maven+gitee）</h2><h3 id="添加凭证" tabindex="-1"><a class="header-anchor" href="#添加凭证" aria-hidden="true">#</a> 添加凭证</h3><p><code>http://192.168.100.130:51000/gitee-project/drj</code></p><h2 id="基础介绍" tabindex="-1"><a class="header-anchor" href="#基础介绍" aria-hidden="true">#</a> 基础介绍</h2><p><em>小目录</em></p><ul><li>什么是流水线</li><li>声明式流水线</li><li>Jenkinsfile 的使用</li></ul><h3 id="什么是流水线" tabindex="-1"><a class="header-anchor" href="#什么是流水线" aria-hidden="true">#</a> 什么是流水线</h3><p>jenkins 有 2 种流水线分为 <strong>声明式流水线</strong>与<strong>脚本化流水线</strong>， 脚本化流水线是 jenkins 旧版本使用的流水线脚本，新版本 Jenkins 推荐使用声明式流水线。 文档只介绍声明流水线。</p><h4 id="_1声明式流水线" tabindex="-1"><a class="header-anchor" href="#_1声明式流水线" aria-hidden="true">#</a> 1声明式流水线</h4><p>在声明式流水线语法中，流水线过程定义在 <code>Pipeline{}</code> 中，Pipeline 块定义了整个流水线中完成的所有工作，比如</p><p><strong>参数说明：</strong></p><ul><li><strong>agent any</strong> ：在任何可用的代理上执行流水线或它的任何阶段，也就是执行流水线过程的位置，也可以指定到具体的节点</li><li><strong>stage</strong> ：定义流水线的执行过程（相当于一个阶段），比如下文所示的 <code>Build、Test、Deploy</code>， 但是这个名字是根据实际情况进行定义的，并非固定的名字</li><li><strong>steps</strong> ：执行某阶段具体的步骤。</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
    stages {
      stage(&#39;Build&#39;) {
        steps {
          echo &#39;Build&#39;
        }
      }
      stage(&#39;Test&#39;) {
        steps {
          echo &#39;Test&#39;
        }
      }
      stage(&#39;Deploy&#39;) {
        steps {
          echo &#39;Deploy&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2脚本化流水线" tabindex="-1"><a class="header-anchor" href="#_2脚本化流水线" aria-hidden="true">#</a> 2脚本化流水线</h4><p>在脚本化流水线语法中，会有一个或多个 Node（节点）块在整个流水线中执行核心工作</p><p><strong>参数说明:</strong></p><ul><li><strong>node</strong> ：在任何可用的代理上执行流水线或它的任何阶段，也可以指定到具体的节点</li><li><strong>stage</strong> ：和声明式的含义一致，定义流水线的阶段。Stage 块在脚本化流水线语法中是可选的， 然而在脚本化流水线中实现 stage 块，可以清楚地在 Jenkins UI 界面中显示每个 stage 的任务子集。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>//Jenkinsfile (Scripted Pipeline)
node <span class="token punctuation">{</span>
  stage(&#39;Build&#39;) <span class="token punctuation">{</span>
    echo &#39;Build&#39;
  <span class="token punctuation">}</span>
  stage(&#39;Test&#39;) <span class="token punctuation">{</span>
    echo &#39;Test&#39;
  <span class="token punctuation">}</span>
  stage(&#39;Deploy&#39;) <span class="token punctuation">{</span>
    echo &#39;Deploy&#39;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明式流水线" tabindex="-1"><a class="header-anchor" href="#声明式流水线" aria-hidden="true">#</a> 声明式流水线</h3><p>声明式流水线必须包含在一个 <code>Pipeline</code> 块中，比如是一个 <code>Pipeline</code> 块的格式</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
  /* insert Declarative Pipeline here <span class="token important">*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在声明式流水线中有效的基本语句和表达式遵循与 <code>Groovy</code> 的语法同样的规则，但有以下例外</p><ul><li>流水线顶层必须是一个 block，即 pipeline{}</li><li>分隔符可以不需要分号，但是每条语句都必须在自己的行上</li><li>块只能由 Sections、Directives、Steps 或 assignment statements 组成</li><li>属性引用语句被当做是无参数的方法调用，比如 input 会被当做 input()。</li></ul><h4 id="sections" tabindex="-1"><a class="header-anchor" href="#sections" aria-hidden="true">#</a> Sections</h4><p>声明式流水线中的 Sections 不是一个关键字或指令， 而是包含一个或多个 <code>Agent</code>、<code>Stages</code>、 <code>post</code>、<code>Directives</code> 和 <code>Steps</code> 的代码区域块。</p><p>1.Agent</p><p>Agent 表示整个流水线或特定阶段中的步骤和命令执行的位置，该部分必须在 pipeline 块的顶层被定义，也可以在 stage 中再次定义，但是 stage 级别是可选的。</p><p><strong>any</strong></p><p>在任何可用的代理上执行流水线，配置语法</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
  agent any
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>none</strong></p><p>表示该 Pipeline 脚本没有全局的 agent 配置。当顶层的 agent 配置为 none 时， 每个 stage 部分都需要包含它自己的 agent。配置语法</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
  agent none
  stages <span class="token punctuation">{</span>
    stage(&#39;Stage For Build&#39;)<span class="token punctuation">{</span>
      agent any
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>label</strong></p><p>以节点标签形式选择某个具体的节点执行 Pipeline 命令，例如：agent { label &#39;my-defined-label&#39; }。节点需要提前配置标签。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
  agent none
    stages <span class="token punctuation">{</span>
      stage(&#39;Stage For Build&#39;)<span class="token punctuation">{</span>
        agent <span class="token punctuation">{</span> label &#39;role<span class="token punctuation">-</span>master&#39; <span class="token punctuation">}</span>
        steps <span class="token punctuation">{</span>
          echo &quot;role<span class="token punctuation">-</span>master&quot;
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>node</strong></p><p>和 label 配置类似，只不过是可以添加一些额外的配置，比如 customWorkspace(设置默认工作目录)</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>pipeline <span class="token punctuation">{</span>
  agent none
    stages <span class="token punctuation">{</span>
      stage(&#39;Stage For Build&#39;)<span class="token punctuation">{</span>
        agent <span class="token punctuation">{</span>
          node <span class="token punctuation">{</span>
            label &#39;role<span class="token punctuation">-</span>master&#39;
            customWorkspace &quot;/tmp/zhangzhuo/data&quot;
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        steps <span class="token punctuation">{</span>
          sh &quot;echo role<span class="token punctuation">-</span>master <span class="token punctuation">&gt;</span> 1.txt&quot;
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>dockerfile</strong></p><p>使用从源码中包含的 Dockerfile 所构建的容器执行流水线或 stage。此时对应的 agent 写法如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>agent <span class="token punctuation">{</span>
   dockerfile <span class="token punctuation">{</span>
     filename &#39;Dockerfile.build&#39;  //dockerfile文件名称
     dir &#39;build&#39;                  //执行构建镜像的工作目录
     label &#39;role<span class="token punctuation">-</span>master&#39;          //执行的node节点，标签选择
     additionalBuildArgs &#39;<span class="token punctuation">-</span><span class="token punctuation">-</span>build<span class="token punctuation">-</span>arg version=1.0.2&#39; //构建参数
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker</strong></p><p>相当于 dockerfile，可以直接使用 docker 字段指定外部镜像即可，可以省去构建的时间。比如使用 maven 镜像进行打包，同时可以指定 args</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>agent{
  docker{
    image &#39;192.168.10.15/kubernetes/alpine:latest&#39;   //镜像地址
    label &#39;role-master&#39; //执行的节点，标签选择
    args &#39;-v /tmp:/tmp&#39;      //启动镜像的参数
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>kubernetes</strong></p>`,66),ln={href:"https://github.com/jenkinsci/kubernetes-plugin/",target:"_blank",rel:"noopener noreferrer"},dn=a(`<p>Jenkins 也支持使用 Kubernetes 创建 Slave，也就是常说的动态 Slave。配置示例如下</p><ul><li><p>cloud: Configure Clouds 的名称，指定到其中一个 k8s</p></li><li><p>slaveConnectTimeout: 连接超时时间</p></li><li><p>yaml: pod 定义文件，jnlp 容器的配置必须有配置无需改变，其余 containerd 根据自己情况指定</p></li><li><p>workspaceVolume：持久化 jenkins 的工作目录。</p></li><li><p>persistentVolumeClaimWorkspaceVolume：挂载已有 pvc。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>workspaceVolume persistentVolumeClaimWorkspaceVolume<span class="token punctuation">(</span>claimName: <span class="token string">&quot;jenkins-agent&quot;</span>, mountPath: <span class="token string">&quot;/&quot;</span>, readOnly: <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>nfsWorkspaceVolume：挂载 nfs 服务器目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>workspaceVolume nfsWorkspaceVolume<span class="token punctuation">(</span>serverAddress: <span class="token string">&quot;192.168.10.254&quot;</span>, serverPath: <span class="token string">&quot;/nfs&quot;</span>, readOnly: <span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>dynamicPVC：动态申请 pvc，任务执行结束后删除</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>workspaceVolume dynamicPVC<span class="token punctuation">(</span>storageClassName: <span class="token string">&quot;nfs-client&quot;</span>, requestsSize: <span class="token string">&quot;1Gi&quot;</span>, accessModes: <span class="token string">&quot;ReadWriteMany&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>emptyDirWorkspaceVolume：临时目录，任务执行结束后会随着 pod 删除被删除，主要功能多个任务 container 共享 jenkins 工作目录。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>workspaceVolume emptyDirWorkspaceVolume<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>hostPathWorkspaceVolume：挂载 node 节点本机目录，注意挂载本机目录注意权限问题，可以先创建设置 777 权限，否则默认 kubelet 创建的目录权限为 755 默认其他用户没有写权限，执行流水线会报错。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>workspaceVolume hostPathWorkspaceVolume<span class="token punctuation">(</span>hostPath: <span class="token string">&quot;/opt/workspace&quot;</span>, readOnly: <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>agent {
  kubernetes {
      cloud &#39;kubernetes&#39;
      slaveConnectTimeout 1200
      workspaceVolume emptyDirWorkspaceVolume()
      yaml &#39;&#39;&#39;
kind: Pod
metadata:
  name: jenkins-agent
spec:
  containers:
  - args: [\\&#39;$(JENKINS_SECRET)\\&#39;, \\&#39;$(JENKINS_NAME)\\&#39;]
    image: &#39;192.168.10.15/kubernetes/jnlp:alpine&#39;
    name: jnlp
    imagePullPolicy: IfNotPresent
  - command:
      - &quot;cat&quot;
    image: &quot;192.168.10.15/kubernetes/alpine:latest&quot;
    imagePullPolicy: &quot;IfNotPresent&quot;
    name: &quot;date&quot;
    tty: true
  restartPolicy: Never
&#39;&#39;&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.agent 的配置示例</p><p><strong>kubernetes 示例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent {
    kubernetes {
      cloud &#39;kubernetes&#39;
      slaveConnectTimeout 1200
      workspaceVolume emptyDirWorkspaceVolume()
      yaml &#39;&#39;&#39;
kind: Pod
metadata:
  name: jenkins-agent
spec:
  containers:
  - args: [\\&#39;$(JENKINS_SECRET)\\&#39;, \\&#39;$(JENKINS_NAME)\\&#39;]
    image: &#39;192.168.10.15/kubernetes/jnlp:alpine&#39;
    name: jnlp
    imagePullPolicy: IfNotPresent
  - command:
      - &quot;cat&quot;
    image: &quot;192.168.10.15/kubernetes/alpine:latest&quot;
    imagePullPolicy: &quot;IfNotPresent&quot;
    name: &quot;date&quot;
    tty: true
  - command:
      - &quot;cat&quot;
    image: &quot;192.168.10.15/kubernetes/kubectl:apline&quot;
    imagePullPolicy: &quot;IfNotPresent&quot;
    name: &quot;kubectl&quot;
    tty: true
  restartPolicy: Never
&#39;&#39;&#39;
    }
  }
  environment {
    MY_KUBECONFIG = credentials(&#39;kubernetes-cluster&#39;)
  }
  stages {
    stage(&#39;Data&#39;) {
      steps {
        container(name: &#39;date&#39;) {
          sh &quot;&quot;&quot;
            date
          &quot;&quot;&quot;
        }
      }
    }
    stage(&#39;echo&#39;) {
      steps {
        container(name: &#39;date&#39;) {
          sh &quot;&quot;&quot;
            echo &#39;k8s is pod&#39;
          &quot;&quot;&quot;
        }
      }
    }
    stage(&#39;kubectl&#39;) {
      steps {
        container(name: &#39;kubectl&#39;) {
          sh &quot;&quot;&quot;
            kubectl get pod -A  --kubeconfig $MY_KUBECONFIG
          &quot;&quot;&quot;
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker 的示例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent none
  stages {
    stage(&#39;Example Build&#39;) {
      agent { docker &#39;maven:3-alpine&#39; }
      steps {
        echo &#39;Hello, Maven&#39;
        sh &#39;mvn --version&#39;
      }
    }
    stage(&#39;Example Test&#39;) {
      agent { docker &#39;openjdk:8-jre&#39; }
      steps {
        echo &#39;Hello, JDK&#39;
        sh &#39;java -version&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.Post</p><p>Post 一般用于流水线结束后的进一步处理，比如错误通知等。 Post 可以针对流水线不同的结果做出不同的处理，就像开发程序的错误处理， 比如 Python 语言的 <code>try catch</code>。</p><p>Post 可以定义在 Pipeline 或 stage 中，目前支持以下条件</p><ul><li><strong>always</strong>：无论 Pipeline 或 stage 的完成状态如何，都允许运行该 post 中定义的指令；</li><li><strong>changed</strong>：只有当前 Pipeline 或 stage 的完成状态与它之前的运行不同时，才允许在该 post 部分运行该步骤；</li><li><strong>fixed</strong>：当本次 Pipeline 或 stage 成功，且上一次构建是失败或不稳定时，允许运行该 post 中定义的指令；</li><li><strong>regression</strong>：当本次 Pipeline 或 stage 的状态为失败、不稳定或终止，且上一次构建的 状态为成功时，允许运行该 post 中定义的指令；</li><li><strong>failure</strong>：只有当前 Pipeline 或 stage 的完成状态为失败（failure），才允许在 post 部分运行该步骤，通常这时在 Web 界面中显示为红色</li><li><strong>success</strong>：当前状态为成功（success），执行 post 步骤，通常在 Web 界面中显示为蓝色 或绿色</li><li><strong>unstable</strong>：当前状态为不稳定（unstable），执行 post 步骤，通常由于测试失败或代码 违规等造成，在 Web 界面中显示为黄色</li><li><strong>aborted</strong>：当前状态为终止（aborted），执行该 post 步骤，通常由于流水线被手动终止触发，这时在 Web 界面中显示为灰色；</li><li><strong>unsuccessful</strong>：当前状态不是 success 时，执行该 post 步骤；</li><li><strong>cleanup</strong>：无论 pipeline 或 stage 的完成状态如何，都允许运行该 post 中定义的指令。和 always 的区别在于，cleanup 会在其它执行之后执行。</li></ul><p>示例</p><p>一般情况下 post 部分放在流水线的底部，比如本实例，无论 stage 的完成状态如何， 都会输出一条 <code>I will always say Hello again!</code> 信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage(&#39;Example1&#39;) {
      steps {
        echo &#39;Hello World1&#39;
      }
    }
    stage(&#39;Example2&#39;) {
      steps {
        echo &#39;Hello World2&#39;
      }
    }
  }
  post {
    always {
      echo &#39;I will always say Hello again!&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将 post 写在 stage，下面示例表示 Example1 执行失败执行 post。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage(&#39;Example1&#39;) {
      steps {
        sh &#39;ip a&#39;
      }
      post {
        failure {
          echo &#39;I will always say Hello again!&#39;
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.sepes</p><p>Steps 部分在给定的 stage 指令中执行的一个或多个步骤，比如在 steps 定义执行一条 shell 命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage(&#39;Example&#39;) {
      steps {
        echo &#39;Hello World&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是使用 sh 字段执行多条指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage(&#39;Example&#39;) {
      steps {
        sh &quot;&quot;&quot;
           echo &#39;Hello World1&#39;
           echo &#39;Hello World2&#39;
        &quot;&quot;&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="directives-条件判断或预处理数据" tabindex="-1"><a class="header-anchor" href="#directives-条件判断或预处理数据" aria-hidden="true">#</a> Directives 条件判断或预处理数据</h4><p>Directives 可用于一些执行 stage 时的条件判断或预处理一些数据，和 Sections 一致，Directives 不是一个关键字或指令， 而是包含了 <code>environment、options、parameters、triggers、stage、tools、 input、when</code> 等配置。</p><p>1.Environment</p><p>Environment 主要用于在流水线中配置的一些环境变量，根据配置的位置决定环境变量的作用域。</p><p>可以定义在 pipeline 中作为全局变量，也可以配置在 stage 中作为该 stage 的环境变量。该指令支持一个特殊的方法 <code>credentials()</code>， 该方法可用于在 Jenkins 环境中通过标识符访问预定义的凭证。</p><p>对于类型为 Secret Text 的凭证，<code>credentials()</code>可以将该 Secret 中的文本内容赋值给环境变量。</p><p>对于类型为标准的账号密码型的凭证，指定的环境变量为 username 和 password，并且也会定义两个额外的环境变量，分别为<code>MYVARNAME_USR</code>和<code>MYVARNAME_PSW</code>。</p><ul><li>基本变量使用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//示例
pipeline {
  agent any
  environment {   //全局变量，会在所有stage中生效
    NAME= &#39;zhangzhuo&#39;
  }
  stages {
    stage(&#39;env1&#39;) {
      environment { //定义在stage中的变量只会在当前stage生效，其他的stage不会生效
        HARBOR = &#39;https://192.168.10.15&#39;
      }
      steps {
        sh &quot;env&quot;
      }
    }
    stage(&#39;env2&#39;) {
      steps {
        sh &quot;env&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用变量引用 secret 的凭证</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//这里使用k8s的kubeconfig文件示例
pipeline {
  agent any
  environment {
    KUBECONFIG = credentials(&#39;kubernetes-cluster&#39;)
  }
  stages {
    stage(&#39;env&#39;) {
      steps {
        sh &quot;env&quot;  //默认情况下输出的变量内容会被加密
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用变量引用类型为标准的账号密码型的凭证</strong></p><p>这里使用 HARBOR 变量进行演示，默认情况下账号密码型的凭证会自动创建 3 个变量</p><ul><li><strong>HARBOR_USR</strong>: 会把凭证中 username 值赋值给这个变量</li><li><strong>HARBOR_PSW</strong>: 会把凭证中 password 值赋值给这个变量</li><li><strong>HARBOR</strong>: 默认情况下赋值的值为 <code>usernamme:password</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//这里使用k8s的kubeconfig文件示例
pipeline {
  agent any
  environment {
    HARBOR = credentials(&#39;harbor-account&#39;)
  }
  stages {
    stage(&#39;env&#39;) {
      steps {
        sh &quot;env&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.Options</p><p>Jenkins 流水线支持很多内置指令，比如 retry 可以对失败的步骤进行重复执行 n 次，可以根据不同的指令实现不同的效果。</p><p>比较常用的指令如下:</p><ul><li><strong>buildDiscarder</strong>：保留多少个流水线的构建记录</li><li><strong>disableConcurrentBuilds</strong>：禁止流水线并行执行，防止并行流水线同时访问共享资源导致流水线失败。</li><li><strong>disableResume</strong>：如果控制器重启，禁止流水线自动恢复。</li><li><strong>newContainerPerStage</strong>：agent 为 docker 或 dockerfile 时，每个阶段将在同一个节点的新容器中运行，而不是所有的阶段都在同一个容器中运行。</li><li><strong>quietPeriod</strong>：流水线静默期，也就是触发流水线后等待一会在执行。</li><li><strong>retry</strong>：流水线失败后重试次数。</li><li><strong>timeout</strong>：设置流水线的超时时间，超过流水线时间，job 会自动终止。如果不加 unit 参数默认为 1 分。</li><li><strong>timestamps</strong>：为控制台输出时间戳。</li></ul><p><strong>定义在 pipeline 中</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  options {
    timeout(time: 1, unit: &#39;HOURS&#39;)  //超时时间1小时，如果不加unit参数默认为1分
    timestamps()                     //所有输出每行都会打印时间戳
    buildDiscarder(logRotator(numToKeepStr: &#39;3&#39;)) //保留三个历史构建版本
    quietPeriod(10)  //注意手动触发的构建不生效
    retry(3)    //流水线失败后重试次数
  }
  stages {
    stage(&#39;env1&#39;) {
      steps {
        sh &quot;env&quot;
        sleep 2
      }
    }
    stage(&#39;env2&#39;) {
      steps {
        sh &quot;env&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义在 stage 中</strong></p><p>Option 除了写在 Pipeline 顶层，还可以写在 stage 中，但是写在 stage 中的 option 仅支持 <code>retry、 timeout、timestamps</code>， 或者是和 stage 相关的声明式选项，比如 <code>skipDefaultCheckout</code>。</p><p>处于 stage 级别的 options 写法如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  stages {
    stage(&#39;env1&#39;) {
      options {   //定义在这里这对这个stage生效
        timeout(time: 2, unit: &#39;SECONDS&#39;) //超时时间2秒
        timestamps()                     //所有输出每行都会打印时间戳
        retry(3)    //流水线失败后重试次数
      }
      steps {
        sh &quot;env &amp;&amp; sleep 2&quot;
      }
    }
    stage(&#39;env2&#39;) {
      steps {
        sh &quot;env&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.Parameters</p><p>Parameters 提供了一个用户在触发流水线时应该提供的参数列表，这些用户指定参数的值可以通过 params 对象提供给流水线的 step（步骤）。 只能定义在 pipeline 顶层。</p><p><strong>目前支持的参数类型如下</strong></p><ul><li><strong>string</strong>：字符串类型的参数。</li><li><strong>text</strong>：文本型参数，一般用于定义多行文本内容的变量。</li><li><strong>booleanParam</strong>：布尔型参数。</li><li><strong>choice</strong>：选择型参数，一般用于给定几个可选的值，然后选择其中一个进行赋值。</li><li><strong>password</strong>：密码型变量，一般用于定义敏感型变量，在 Jenkins 控制台会输出为 <code>*</code> 。</li></ul><p><strong>插件 Parameters</strong></p><ul><li><strong>imageTag</strong>：镜像 tag，需要安装 <code>Image Tag Parameter</code> 插件后使用</li><li><strong>gitParameter</strong>：获取 git 仓库分支，需要 <code>Git Parameter</code> 插件后使用</li></ul><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  parameters {
    string(name: &#39;DEPLOY_ENV&#39;, defaultValue:  &#39;staging&#39;, description: &#39;1&#39;)   //执行构建时需要手动配置字符串类型参数，之后赋值给变量
    text(name:  &#39;DEPLOY_TEXT&#39;, defaultValue: &#39;One\\nTwo\\nThree\\n&#39;, description: &#39;2&#39;)  //执行构建时需要提供文本参数，之后赋值给变量
    booleanParam(name: &#39;DEBUG_BUILD&#39;,  defaultValue: true, description: &#39;3&#39;)   //布尔型参数
    choice(name: &#39;CHOICES&#39;, choices: [&#39;one&#39;, &#39;two&#39;, &#39;three&#39;], description: &#39;4&#39;)  //选择形式列表参数
    password(name: &#39;PASSWORD&#39;, defaultValue: &#39;SECRET&#39;, description: &#39;A  secret password&#39;)  //密码类型参数，会进行加密
    imageTag(name: &#39;DOCKER_IMAGE&#39;, description: &#39;&#39;, image: &#39;kubernetes/kubectl&#39;, filter: &#39;.*&#39;, defaultTag: &#39;&#39;, registry: &#39;https://192.168.10.15&#39;, credentialId: &#39;harbor-account&#39;, tagOrder: &#39;NATURAL&#39;)   //获取镜像名称与tag
    gitParameter(branch: &#39;&#39;, branchFilter: &#39;origin/(.*)&#39;, defaultValue: &#39;&#39;, description: &#39;Branch for build and deploy&#39;, name: &#39;BRANCH&#39;, quickFilterEnabled: false, selectedValue: &#39;NONE&#39;, sortMode: &#39;NONE&#39;,  tagFilter: &#39;*&#39;, type: &#39;PT_BRANCH&#39;)
  }  //获取git仓库分支列表，必须有git引用
  stages {
    stage(&#39;env1&#39;) {
      steps {
        sh &quot;env&quot;
      }
    }
    stage(&#39;git&#39;) {
      steps {
        git branch: &quot;$BRANCH&quot;, credentialsId: &#39;gitlab-key&#39;, url: &#39;git@192.168.10.14:root/env.git&#39;   //使用gitParameter，必须有这个
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.Triggers</p><p>在 Pipeline 中可以用 triggers 实现自动触发流水线执行任务，可以通过 <code>Webhook、Cron、 pollSCM</code> 和 <code>upstream</code> 等方式触发流水线。</p><p><strong>Cron</strong></p><p>定时构建假如某个流水线构建的时间比较长，或者某个流水线需要定期在某个时间段执行构建，可以 使用 cron 配置触发器，比如周一到周五每隔四个小时执行一次</p><p>注意：H 的意思不是 HOURS 的意思，而是 Hash 的缩写。主要为了解决多个流水线在同一时间同时运行带来的系统负载压力。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  triggers {
    cron(&#39;H */4 * * 1-5&#39;)   //周一到周五每隔四个小时执行一次
    cron(&#39;H/12 * * * *&#39;)   //每隔12分钟执行一次
    cron(&#39;H * * * *&#39;)   //每隔1小时执行一次
  }
  stages {
    stage(&#39;Example&#39;) {
      steps {
        echo &#39;Hello World&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Upstream</strong></p><p>Upstream 可以根据上游 job 的执行结果决定是否触发该流水线。比如当 job1 或 job2 执行成功时触发该流水线</p><p>目前支持的状态有 <code>SUCCESS</code>、<code>UNSTABLE</code>、<code>FAILURE</code>、<code>NOT_BUILT</code>、<code>ABORTED</code>等。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  triggers {
    upstream(upstreamProjects: &#39;env&#39;, threshold: hudson.model.Result.SUCCESS)  //当env构建成功时构建这个流水线
  }
  stages {
    stage(&#39;Example&#39;) {
      steps {
        echo &#39;Hello World&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.Input</p><p>Input 字段可以实现在流水线中进行交互式操作，比如选择要部署的环境、是否继续执行某个阶段等。</p><p>配置 Input 支持以下选项</p><ul><li><strong>message</strong>：必选，需要用户进行 input 的提示信息，比如：“是否发布到生产环境？”；</li><li><strong>id</strong>：可选，input 的标识符，默认为 stage 的名称；</li><li><strong>ok</strong>：可选，确认按钮的显示信息，比如：“确定”、“允许”；</li><li><strong>submitter</strong>：可选，允许提交 input 操作的用户或组的名称，如果为空，任何登录用户均可提交 input；</li><li><strong>parameters</strong>：提供一个参数列表供 input 使用。</li></ul><p>假如需要配置一个提示消息为“还继续么”、确认按钮为“继续”、提供一个 PERSON 的变量的参数，并且只能由登录用户为 alice 和 bob 提交的 input 流水线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  stages {
    stage(&#39;Example&#39;) {
      input {
        message &quot;还继续么?&quot;
        ok &quot;继续&quot;
        submitter &quot;alice,bob&quot;
        parameters {
          string(name: &#39;PERSON&#39;, defaultValue: &#39;Mr Jenkins&#39;, description: &#39;Who should I say hello to?&#39;)
        }
      }
      steps {
        echo &quot;Hello, \${PERSON}, nice to meet you.&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.when</p><p>When 指令允许流水线根据给定的条件决定是否应该执行该 stage，when 指令必须包含至少 一个条件。 如果 when 包含多个条件，所有的子条件必须都返回 True，stage 才能执行。</p><p>When 也可以结合 <code>not、allOf、anyOf</code> 语法达到更灵活的条件匹配。</p><p><strong>目前比较常用的内置条件如下</strong></p><ul><li><strong>branch</strong>：当正在构建的分支与给定的分支匹配时，执行这个 stage。注意，branch 只适用于多分支流水线</li><li><strong>changelog</strong>：匹配提交的 changeLog 决定是否构建，例如: <code>when { changelog &#39;.*^\\\\[DEPENDENCY\\\\] .+$&#39; }</code></li><li><strong>environment</strong>：当指定的环境变量和给定的变量匹配时，执行这个 stage，例如：<code>when { environment name: &#39;DEPLOY_TO&#39;, value: &#39;production&#39; }</code></li><li><strong>equals</strong>：当期望值和实际值相同时，执行这个 stage，例如：<code>when { equals expected: 2, actual: currentBuild.number }；</code></li><li><strong>expression</strong>：当指定的 Groovy 表达式评估为 True，执行这个 stage，例如：<code>when { expression { return params.DEBUG_BUILD } }；</code></li><li><strong>tag</strong>：如果 TAG_NAME 的值和给定的条件匹配，执行这个 stage，例如：<code>when { tag &quot;release-&quot; }；</code></li><li><strong>not</strong>：当嵌套条件出现错误时，执行这个 stage，必须包含一个条件，例如：<code>when { not { branch &#39;master&#39; } }；</code></li><li><strong>allOf</strong>：当所有的嵌套条件都正确时，执行这个 stage，必须包含至少一个条件，例如：<code>when { allOf { branch &#39;master&#39;; environment name: &#39;DEPLOY_TO&#39;, value: &#39;production&#39; } }；</code></li><li><strong>anyOf</strong>：当至少有一个嵌套条件为 True 时，执行这个 stage，例如：<code>when { anyOf { branch &#39;master&#39;; branch &#39;staging&#39; } })</code>。</li></ul><p>示例：当分支为 main 时执行 Example Deploy 步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  stages {
    stage(&#39;Example Build&#39;) {
      steps {
        echo &#39;Hello World&#39;
      }
    }
    stage(&#39;Example Deploy&#39;) {
      when {
        branch &#39;main&#39; //多分支流水线，分支为才会执行。
      }
      steps {
        echo &#39;Deploying&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以同时配置多个条件，比如分支是 production，而且 <code>DEPLOY_TO</code> 变量的值为 main 时，才执行 <code>Example Deploy</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  environment {
    DEPLOY_TO = &quot;main&quot;
  }
  stages {
    stage(&#39;Example Deploy&#39;) {
      when {
        branch &#39;main&#39;
        environment name: &#39;DEPLOY_TO&#39;, value: &#39;main&#39;
      }
      steps {
        echo &#39;Deploying&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 <code>anyOf</code> 进行匹配其中一个条件即可，比如分支为 main 或 <code>DEPLOY_TO</code> 为 main 或 master 时执行 Deploy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  stages {
    stage(&#39;Example Deploy&#39;) {
      when {
        anyOf {
          branch &#39;main&#39;
          environment name: &#39;DEPLOY_TO&#39;, value: &#39;main&#39;
          environment name: &#39;DEPLOY_TO&#39;, value: &#39;master&#39;
        }
      }
      steps {
        echo &#39;Deploying&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 <code>expression</code> 进行正则匹配，比如当 <code>BRANCH_NAME</code> 为 main 或 master，并且 <code>DEPLOY_TO</code> 为 master 或 main 时才会执行 <code>Example Deploy</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  stages {
    stage(&#39;Example Deploy&#39;) {
      when {
        expression { BRANCH_NAME ==~ /(main|master)/ }
        anyOf {
          environment name: &#39;DEPLOY_TO&#39;, value: &#39;main&#39;
          environment name: &#39;DEPLOY_TO&#39;, value: &#39;master&#39;
        }
      }
      steps {
        echo &#39;Deploying&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，如果定义了某个 stage 的 agent，在进入该 stage 的 agent 后， 该 stage 的 when 条件才会被评估，但是可以通过一些选项更改此选项。</p><p>比如在进入 stage 的 agent 前评估 when， 可以使用 beforeAgent， 当 when 为 true 时才进行该 stage</p><p><strong>目前支持的前置条件如下</strong></p><ul><li><strong>beforeAgent</strong>：如果 beforeAgent 为 true，则会先评估 when 条件。在 when 条件为 true 时，才会进入该 stage</li><li><strong>beforeInput</strong>：如果 beforeInput 为 true，则会先评估 when 条件。在 when 条件为 true 时，才会进入到 input 阶段；</li><li><strong>beforeOptions</strong>：如果 beforeInput 为 true，则会先评估 when 条件。在 when 条件为 true 时，才会进入到 options 阶段；</li></ul><p><code>beforeOptions</code> 优先级大于 <code>beforeInput</code> 大于 <code>beforeAgent</code></p><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent none
  stages {
    stage(&#39;Example Build&#39;) {
      steps {
        echo &#39;Hello World&#39;
      }
    }
    stage(&#39;Example Deploy&#39;) {
      when {
        beforeAgent true
        branch &#39;main&#39;
      }
      steps {
        echo &#39;Deploying&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parallel-并发构建" tabindex="-1"><a class="header-anchor" href="#parallel-并发构建" aria-hidden="true">#</a> Parallel 并发构建</h4><p>在声明式流水线中可以使用 Parallel 字段，即可很方便的实现并发构建，比如对分支 <code>A、B、C</code> 进行并行处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  stages {
    stage(&#39;Non-Parallel Stage&#39;) {
      steps {
        echo &#39;This stage will be executed first.&#39;
      }
    }
    stage(&#39;Parallel Stage&#39;) {
      failFast true         //表示其中只要有一个分支构建执行失败，就直接推出不等待其他分支构建
      parallel {
        stage(&#39;Branch A&#39;) {
          steps {
            echo &quot;On Branch A&quot;
          }
        }
        stage(&#39;Branch B&#39;) {
          steps {
            echo &quot;On Branch B&quot;
          }
        }
        stage(&#39;Branch C&#39;) {
          stages {
            stage(&#39;Nested 1&#39;) {
              steps {
                echo &quot;In stage Nested 1 within Branch C&quot;
              }
            }
            stage(&#39;Nested 2&#39;) {
              steps {
               echo &quot;In stage Nested 2 within Branch C&quot;
              }
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jenkinsfile-的使用" tabindex="-1"><a class="header-anchor" href="#jenkinsfile-的使用" aria-hidden="true">#</a> Jenkinsfile 的使用</h3><p>上面讲过流水线支持两种语法，即声明式和脚本式，这两种语法都支持构建持续交付流水线。 并且都可以用来在 <code>Web UI</code> 或 <code>Jenkinsfile</code> 中定义流水线，不过通常将 <code>Jenkinsfile</code> 放置于代码仓库中（当然也可以放在单独的代码仓库中进行管理）。</p><p>创建一个 Jenkinsfile 并将其放置于代码仓库中，有以下好处</p><ul><li>方便对流水线上的代码进行复查/迭代</li><li>对管道进行审计跟踪</li><li>流水线真正的源代码能够被项目的多个成员查看和编辑</li></ul><h4 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h4><p>1.静态变量</p><p>Jenkins 有许多内置变量可以直接在 Jenkinsfile 中使用，可以通过 <code>JENKINS_URL/pipeline/syntax/globals#env</code> 获取完整列表。</p><p><strong>目前比较常用的环境变量如下</strong></p><ul><li><strong>BUILD_ID</strong>：当前构建的 ID，与 Jenkins 版本 1.597+ 中的 BUILD_NUMBER 完全相同</li><li><strong>BUILD_NUMBER</strong>：当前构建的 ID，和 BUILD_ID 一致</li><li><strong>BUILD_TAG</strong>：用来标识构建的版本号，格式为：jenkins-{BUILD_NUMBER}， 可以对产物进行命名，比如生产的 jar 包名字、镜像的 TAG 等；</li><li><strong>BUILD_URL</strong>：本次构建的完整 URL，比如：<code>http://buildserver/jenkins/job/MyJobName/17/%EF%BC%9B</code></li><li><strong>JOB_NAME</strong>：本次构建的项目名称</li><li><strong>NODE_NAME</strong>：当前构建节点的名称；</li><li><strong>JENKINS_URL</strong>：Jenkins 完整的 URL，需要在 <code>SystemConfiguration</code> 设置；</li><li><strong>WORKSPACE</strong>：执行构建的工作目录。</li></ul><p>示例如果一个流水线名称为 <code>print_env</code>，第 2 次构建，各个变量的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BUILD_ID：2
BUILD_NUMBER：2
BUILD_TAG：jenkins-print_env-2
BUILD_URL：http://192.168.10.16:8080/job/print_env/2/
JOB_NAME：print_env
NODE_NAME：built-in
JENKINS_URL：http://192.168.10.16:8080/
WORKSPACE：/bitnami/jenkins/home/workspace/print_env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述变量会保存在一个 Map 中，可以使用 <code>env.BUILD_ID</code> 或 <code>env.JENKINS_URL</code> 引用某个内置变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
  agent any
  stages {
    stage(&#39;print env&#39;) {
      parallel {
        stage(&#39;BUILD_ID&#39;) {
          steps {
            echo &quot;$env.BUILD_ID&quot;
          }
        }
        stage(&#39;BUILD_NUMBER&#39;) {
          steps {
            echo &quot;$env.BUILD_NUMBER&quot;
          }
        }
        stage(&#39;BUILD_TAG&#39;) {
          steps {
            echo &quot;$env.BUILD_TAG&quot;
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.动态变量</p><p>动态变量是根据某个指令的结果进行动态赋值，变量的值根据指令的执行结果而不同。如下所示</p><ul><li><strong>returnStdout</strong>：将命令的执行结果赋值给变量，比如下述的命令返回的是 clang，此时 CC 的值为“clang”。</li><li><strong>returnStatus</strong>：将命令的执行状态赋值给变量，比如下述命令的执行状态为 1，此时 <code>EXIT_STATUS</code> 的值为 1。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  environment {
    // 使用 returnStdout
    CC = &quot;&quot;&quot;\${sh(
         returnStdout: true,
         script: &#39;echo -n &quot;clang&quot;&#39;   //如果使用shell命令的echo赋值变量最好加-n取消换行
         )}&quot;&quot;&quot;
    // 使用 returnStatus
    EXIT_STATUS = &quot;&quot;&quot;\${sh(
         returnStatus: true,
         script: &#39;exit 1&#39;
         )}&quot;&quot;&quot;
  }
  stages {
    stage(&#39;Example&#39;) {
      environment {
        DEBUG_FLAGS = &#39;-g&#39;
      }
      steps {
        sh &#39;printenv&#39;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="凭证管理" tabindex="-1"><a class="header-anchor" href="#凭证管理" aria-hidden="true">#</a> 凭证管理</h4><p>Jenkins 的声明式流水线语法有一个 <code>credentials()</code>函数，它支持 <code>secret text（加密文本）</code>、<code>username</code> 和 <code>password（用户名和密码）</code>以及 <code>secret file（加密文件）</code>等。</p><p>接下来看一下一些常用的凭证处理方法。</p><p>1.加密文本</p><p>本实例演示将两个 Secret 文本凭证分配给单独的环境变量来访问 <code>Amazon Web</code> 服务，需要提前创建这两个文件的 <code>credentials（实践的章节会有演示）</code>， <code>Jenkinsfile</code> 文件的内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  environment {
    AWS_ACCESS_KEY_ID = credentials(&#39;txt1&#39;)
    AWS_SECRET_ACCESS_KEY = credentials(&#39;txt2&#39;)
  }
  stages {
    stage(&#39;Example stage 1&#39;) {
      steps {
        echo &quot;$AWS_ACCESS_KEY_ID&quot;
      }
    }
    stage(&#39;Example stage 2&#39;) {
      steps {
        echo &quot;$AWS_SECRET_ACCESS_KEY&quot;
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.用户名密码</p><p>本示例用来演示 credentials 账号密码的使用，比如使用一个公用账户访问 <code>Bitbucket</code>、<code>GitLab</code>、 <code>Harbor</code> 等。</p><p>假设已经配置完成了用户名密码形式的 credentials，凭证 ID 为 <code>harbor-account</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  environment {
    BITBUCKET_COMMON_CREDS = credentials(&#39;harbor-account&#39;)
  }
  stages {
    stage(&#39;printenv&#39;) {
      steps {
        sh &quot;env&quot;
      }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上述的配置会自动生成 3 个环境变量</strong></p><ul><li><strong>BITBUCKET_COMMON_CREDS</strong>：包含一个以冒号分隔的用户名和密码，格式为 <code>username:password</code></li><li><strong>BITBUCKET_COMMON_CREDS_USR</strong>：仅包含用户名的附加变量</li><li><strong>BITBUCKET_COMMON_CREDS_PSW</strong>：仅包含密码的附加变量。</li></ul><p>3.加密文件</p><p>需要加密保存的文件，也可以使用 credential，比如链接到 Kubernetes 集群的 <code>kubeconfig</code> 文件等。</p><p>假如已经配置好了一个 kubeconfig 文件，此时可以在 Pipeline 中引用该文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    kubernetes {
      cloud &#39;kubernetes&#39;
      slaveConnectTimeout 1200
      workspaceVolume emptyDirWorkspaceVolume()
      yaml &#39;&#39;&#39;
kind: Pod
metadata:
  name: jenkins-agent
spec:
  containers:
  - args: [\\&#39;$(JENKINS_SECRET)\\&#39;, \\&#39;$(JENKINS_NAME)\\&#39;]
    image: &#39;192.168.10.15/kubernetes/jnlp:alpine&#39;
    name: jnlp
    imagePullPolicy: IfNotPresent
  - command:
      - &quot;cat&quot;
    image: &quot;192.168.10.15/kubernetes/kubectl:apline&quot;
    imagePullPolicy: &quot;IfNotPresent&quot;
    name: &quot;kubectl&quot;
    tty: true
  restartPolicy: Never
&#39;&#39;&#39;
    }
  }
  environment {
    MY_KUBECONFIG = credentials(&#39;kubernetes-cluster&#39;)
  }
  stages {
    stage(&#39;kubectl&#39;) {
      steps {
        container(name: &#39;kubectl&#39;) {
          sh &quot;&quot;&quot;
            kubectl get pod -A  --kubeconfig $MY_KUBECONFIG
          &quot;&quot;&quot;
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,137),tn={href:"http://u.kubeinfo.cn/ozoxB",target:"_blank",rel:"noopener noreferrer"};function rn(cn,un){const s=c("ExternalLinkIcon");return d(),t("div",null,[r(" more "),y,E,P,D,S,n("p",null,[e("下载地址："),n("a",w,[e("huawei源2.346"),i(s)]),e("、"),n("a",N,[e("稳定版列表"),i(s)]),e("、"),n("a",O,[e("尝鲜版列表"),i(s)])]),B,n("p",null,[e("安装（提取码：1234）： "),n("a",T,[e("java各个版本下载"),i(s)]),e("、"),n("a",I,[e("maven3.8"),i(s)]),e("、"),n("a",A,[e("tomcat"),i(s)]),e("、yum install -y git")]),C,n("p",null,[n("a",U,[e("http://192.168.100.130:8099"),i(s)])]),R,J,n("p",null,[n("a",M,[e("自动化部署 参考"),i(s)])]),n("p",null,[n("a",H,[e("设置docker快捷键"),i(s)])]),n("p",null,[n("a",L,[e("docker.hub"),i(s)])]),V,n("p",null,[e("访问："),n("a",W,[e("http://192.168.0.8:8889"),i(s)])]),K,n("table",null,[z,n("tbody",null,[n("tr",null,[Y,n("td",null,[n("a",$,[e("https://mirrors.cloud.tencent.com/jenkins/"),i(s)])])]),n("tr",null,[G,n("td",null,[n("a",F,[e("https://mirrors.huaweicloud.com/jenkins/"),i(s)])])]),n("tr",null,[X,n("td",null,[n("a",Q,[e("https://mirrors.tuna.tsinghua.edu.cn/jenkins/"),i(s)])])]),n("tr",null,[Z,n("td",null,[n("a",nn,[e("https://mirrors.ustc.edu.cn/jenkins/"),i(s)])])]),n("tr",null,[en,n("td",null,[n("a",sn,[e("http://mirror.bit.edu.cn/jenkins/"),i(s)])])])])]),an,n("p",null,[e("需要部署 kubernetes 相关的插件，"),n("a",ln,[e("官方文档"),i(s)])]),dn,n("ul",null,[n("li",null,[e("介绍内容来源："),n("a",tn,[e("u.kubeinfo.cn/ozoxB"),i(s)])])])])}const vn=l(j,[["render",rn],["__file","jenkins.html.vue"]]);export{vn as default};
