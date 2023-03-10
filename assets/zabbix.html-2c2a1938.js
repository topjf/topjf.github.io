import{_ as p,X as i,Y as l,Z as c,$ as n,a0 as s,a2 as e,a1 as t,D as o}from"./framework-10d91a2c.js";const u={},r=n("h1",null,"Zabbix监控平台安装",-1),b=n("h2",{id:"环境准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),s(" 环境准备")],-1),d={href:"https://note-jf.github.io/database/mysql/install.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://note-jf.github.io/tools/docker/docker-install-mysql-redis-nginx-nacos-mq-es.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://note-jf.github.io/middleware/nginx.html",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"tar-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tar-安装","aria-hidden":"true"},"#"),s(" tar 安装")],-1),x={href:"https://www.zabbix.com/cn",target:"_blank",rel:"noopener noreferrer"},y={href:"https://cdn.zabbix.com/zabbix/sources/stable/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.zabbix.com/download_sources",target:"_blank",rel:"noopener noreferrer"},z=t(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>1、解压安装包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir /usr/lib/zabbix
rm -rf /usr/lib/zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> zabbix-6.0.9.tar.gz <span class="token parameter variable">-C</span> /usr/lib/zabbix <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> /usr/lib/zabbix/zabbix-6.0.9/* /usr/lib/zabbix <span class="token operator">&amp;&amp;</span>  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib/zabbix/zabbix-6.0.9 <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> /usr/lib/zabbix

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> zabbix-6.2.3.tar.gz <span class="token parameter variable">-C</span> /usr/lib/zabbix <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> /usr/lib/zabbix/zabbix-6.2.3/* /usr/lib/zabbix <span class="token operator">&amp;&amp;</span>  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/lib/zabbix/zabbix-6.2.3 <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> /usr/lib/zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建zabbix用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token parameter variable">--system</span> zabbix

<span class="token function">useradd</span> <span class="token parameter variable">--system</span> <span class="token parameter variable">-g</span> zabbix <span class="token parameter variable">-d</span> /usr/lib/zabbix <span class="token parameter variable">-s</span> /sbin/nologin <span class="token parameter variable">-c</span> <span class="token string">&quot;Zabbix Monitoring System&quot;</span> zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix进程不需要主目录，因此我们不建议创建它。但是，如果您正在使用一些需要它的功能（例如，将MySQL凭据存储在$HOME/.my.cnf中），您可以使用以下命令创建它。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-m</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rwx,o<span class="token operator">=</span>rx <span class="token parameter variable">-p</span> /usr/lib/zabbix
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">775</span> /usr/lib/zabbix

<span class="token function">chown</span> <span class="token parameter variable">-R</span> zabbix:zabbix /usr/lib/zabbix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、创建数据库</p><p><strong>参考下面的--配置 zabbix 数据库</strong></p><p>4、编译安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum groupinstall <span class="token string">&quot;Development Tools&quot;</span> <span class="token parameter variable">-y</span>

yum <span class="token function">install</span> gcc mysql-devel libevent-devel libcurl-devel libxml2-devel libssh2-devel OpenIPMI-devel net-snmp-devel go java-devel <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /usr/local/zabbix</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--help</span>

要为Zabbix server和agent配置源代码，你可以执行类似如下命令：

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/lib/zabbix --enable-server --enable-agent --with-mysql --enable-ipv6 --with-net-snmp --with-libcurl --with-libxml2 --with-openipmi

要为Zabbix server（和，比如PostgreSQL）配置源代码，你可以执行：

./configure --enable-server --with-postgresql --with-net-snmp

要为Zabbix server（和，比如SQLite）配置源代码，你可以执行：

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/lib/zabbix --enable-proxy --with-net-snmp --with-sqlite3 --with-ssh2

要为Zabbix agent配置源代码，你可以执行：

./configure --enable-agent

或者Zabbix agent <span class="token number">2</span>：

./configure --enable-agent2

<span class="token function">make</span>

<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-zabbix-数据库" tabindex="-1"><a class="header-anchor" href="#配置-zabbix-数据库" aria-hidden="true">#</a> 配置 zabbix 数据库</h3>`,15),_={href:"https://note-jf.github.io/database/mysql/install.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>

<span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_policy</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_length</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">#创建zabbix数据库</span>
create database zabbix<span class="token punctuation">;</span>
show databases<span class="token punctuation">;</span>

<span class="token comment">#创建zabbix用户</span>
create user <span class="token string">&#39;zabbix&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;zabbix123&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#设置访问权限,可以通过外部连接 数据库</span>
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;zabbix&#39;</span>@<span class="token string">&#39;%&#39;</span>IDENTIFIED BY <span class="token string">&#39;zabbix123&#39;</span> WITH GRANT OPTION<span class="token punctuation">;</span>

<span class="token comment">#开启bin日志</span>
<span class="token builtin class-name">set</span> global log_bin_trust_function_creators <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
show variables like <span class="token string">&#39;log_bin%&#39;</span><span class="token punctuation">;</span>

flush privileges<span class="token punctuation">;</span>
quit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入初始架构和数据，导入顺序不能乱，否则会报错</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
root12

show databases<span class="token punctuation">;</span>
use zabbix<span class="token punctuation">;</span>

<span class="token builtin class-name">source</span> /usr/local/zabbix/database/mysql/schema.sql
<span class="token builtin class-name">source</span> /usr/local/zabbix/database/mysql/images.sql
<span class="token builtin class-name">source</span> /usr/local/zabbix/database/mysql/data.sql
<span class="token builtin class-name">source</span> /usr/local/zabbix/database/mysql/double.sql
<span class="token builtin class-name">source</span> /usr/local/zabbix/database/mysql/history_pk_prepare.sql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> global log_bin_trust_function_creators <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
flush privileges<span class="token punctuation">;</span>
quit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-zabbix-server" tabindex="-1"><a class="header-anchor" href="#配置-zabbix-server" aria-hidden="true">#</a> 配置 zabbix_server</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master conf<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/local/zabbix/conf

<span class="token punctuation">[</span>root@master zabbix<span class="token punctuation">]</span><span class="token comment"># egrep -v &quot;^$|^#&quot; conf/zabbix_server.conf</span>
<span class="token assign-left variable">LogFile</span><span class="token operator">=</span>/var/log/zabbix/zabbix_server.log
<span class="token assign-left variable">PidFile</span><span class="token operator">=</span>/usr/local/zabbix/zabbix_server.pid
<span class="token assign-left variable">DBHost</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">DBName</span><span class="token operator">=</span>zabbix
<span class="token assign-left variable">DBUser</span><span class="token operator">=</span>zabbix
<span class="token assign-left variable">DBPassword</span><span class="token operator">=</span>zabbix123
<span class="token assign-left variable">AllowUnsupportedDBVersions</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">Timeout</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token assign-left variable">LogSlowQueries</span><span class="token operator">=</span><span class="token number">3000</span>
<span class="token assign-left variable">StatsAllowedIP</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、创建SERVICE文件内容</p><p>vim /usr/lib/systemd/system/zabbix-server.service</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=Zabbix Server with MySQL DB
After=syslog.target network.target mysqld.service 

[Service]
Type=simple
ExecStart=/usr/local/sbin/zabbix_server -f
User=zabbix

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动服务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl daemon-reload
systemctl restart zabbix-server
systemctl status zabbix-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署zabbix-ui" tabindex="-1"><a class="header-anchor" href="#部署zabbix-ui" aria-hidden="true">#</a> 部署zabbix UI</h3><h3 id="部署zabbix-agentd服务" tabindex="-1"><a class="header-anchor" href="#部署zabbix-agentd服务" aria-hidden="true">#</a> 部署zabbix_agentd服务</h3><h2 id="docker-安装" tabindex="-1"><a class="header-anchor" href="#docker-安装" aria-hidden="true">#</a> docker 安装</h2>`,15),h={href:"https://hub.docker.com/r/zabbix/zabbix-agent/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://hub.docker.com/r/zabbix/zabbix-server-mysql/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://hub.docker.com/r/zabbix/zabbix-web-apache-mysql/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://hub.docker.com/r/zabbix/zabbix-web-nginx-mysql/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://hub.docker.com/r/zabbix/zabbix-proxy-mysql/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://hub.docker.com/r/zabbix/zabbix-java-gateway/",target:"_blank",rel:"noopener noreferrer"},R=t(`<p><strong>示例 1</strong></p><p>该示例示范了如何运行 MySQL 数据库支持的 Zabbix Server 、基于 Nginx Web 服务器的 Zabbix Web 界面和 Zabbix Java 网关。</p><ol><li>创建专用于 Zabbix 组件容器的网络：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network create --subnet 172.20.0.0/16 --ip-range 172.20.240.0/20 zabbix-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>启动空的 MySQL 服务器实例：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-chengdu.aliyuncs.com/jinfang/mysql:8.0.30

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql-server <span class="token parameter variable">-t</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span><span class="token string">&quot;zabbix&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;zabbix&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;zabbix_pwd&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;root_pwd&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-p</span> <span class="token number">8599</span>:80 <span class="token punctuation">\\</span>
             <span class="token parameter variable">--network</span><span class="token operator">=</span>zabbix-net <span class="token punctuation">\\</span>
             <span class="token parameter variable">-d</span> registry.cn-chengdu.aliyuncs.com/jinfang/mysql:5.7.39 <span class="token punctuation">\\</span>
             <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span>
             --character-set-server<span class="token operator">=</span>utf8 --collation-server<span class="token operator">=</span>utf8_bin <span class="token punctuation">\\</span>
             --default-authentication-plugin<span class="token operator">=</span>mysql_native_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>启动 Zabbix Java 网关实例：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull zabbix/zabbix-java-gateway:centos-6.2.3

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> zabbix-java-gateway <span class="token parameter variable">-t</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">--network</span><span class="token operator">=</span>zabbix-net <span class="token punctuation">\\</span>
             <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span>
             <span class="token parameter variable">-d</span> zabbix/zabbix-java-gateway:centos-6.2.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>启动 Zabbix server 实例，并将其关联到已创建的 MySQL server 实例：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull zabbix/zabbix-server-mysql:6.2.3-centos

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> zabbix-server-mysql <span class="token parameter variable">-t</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">DB_SERVER_HOST</span><span class="token operator">=</span><span class="token string">&quot;mysql-server&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span><span class="token string">&quot;zabbix&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;zabbix&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;zabbix_pwd&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;root_pwd&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">ZBX_JAVAGATEWAY</span><span class="token operator">=</span><span class="token string">&quot;zabbix-java-gateway&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">--network</span><span class="token operator">=</span>zabbix-net <span class="token punctuation">\\</span>
             <span class="token parameter variable">-p</span> <span class="token number">10051</span>:10051 <span class="token punctuation">\\</span>
             <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span>
             <span class="token parameter variable">-d</span> zabbix/zabbix-server-mysql:6.2.3-centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix server 实例将 10051/TCP 端口（Zabbix trapper）暴露给主机。</p><ol start="5"><li>启动 Zabbix Web 界面，并将其关联到已创建的 MySQL server 和 Zabbix server 实例：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull zabbix/zabbix-web-nginx-mysql:6.2.3-centos

<span class="token function">docker</span> run <span class="token parameter variable">--name</span> zabbix-web-nginx-mysql <span class="token parameter variable">-t</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">ZBX_SERVER_HOST</span><span class="token operator">=</span><span class="token string">&quot;zabbix-server-mysql&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">DB_SERVER_HOST</span><span class="token operator">=</span><span class="token string">&quot;mysql-server&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span><span class="token string">&quot;zabbix&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span><span class="token string">&quot;zabbix&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;zabbix_pwd&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;root_pwd&quot;</span> <span class="token punctuation">\\</span>
             <span class="token parameter variable">--network</span><span class="token operator">=</span>zabbix-net <span class="token punctuation">\\</span>
             <span class="token parameter variable">-p</span> <span class="token number">80</span>:8080 <span class="token punctuation">\\</span>
             <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span>
             <span class="token parameter variable">-d</span> zabbix/zabbix-web-nginx-mysql:6.2.3-centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zabbix web 界面实例将 80/TCP 端口（HTTP）暴露给主机。</p><p>docker-compose_v3_centos_mysql_latest.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.5&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">zabbix-server</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>mysql<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;10051:10051&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro 
   <span class="token punctuation">-</span> ./zbx_env/usr/lib/zabbix/alertscripts<span class="token punctuation">:</span>/usr/lib/zabbix/alertscripts<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/usr/lib/zabbix/externalscripts<span class="token punctuation">:</span>/usr/lib/zabbix/externalscripts<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/dbscripts<span class="token punctuation">:</span>/var/lib/zabbix/dbscripts<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/export<span class="token punctuation">:</span>/var/lib/zabbix/export<span class="token punctuation">:</span>rw
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/modules<span class="token punctuation">:</span>/var/lib/zabbix/modules<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/enc<span class="token punctuation">:</span>/var/lib/zabbix/enc<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/mibs<span class="token punctuation">:</span>/var/lib/zabbix/mibs<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> snmptraps<span class="token punctuation">:</span>/var/lib/zabbix/snmptraps<span class="token punctuation">:</span>rw
  <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
   <span class="token key atrule">nproc</span><span class="token punctuation">:</span> <span class="token number">65535</span>
   <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
    <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">20000</span>
    <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">40000</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.70&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 1G
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.5&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512M
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_db_mysql
   <span class="token punctuation">-</span> ./env_vars/.env_srv
  <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> MYSQL_USER
   <span class="token punctuation">-</span> MYSQL_PASSWORD
   <span class="token punctuation">-</span> MYSQL_ROOT_USER
   <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD
<span class="token comment">#   - client-key.pem</span>
<span class="token comment">#   - client-cert.pem</span>
<span class="token comment">#   - root-ca.pem</span>
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>server
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
     <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>server
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>mysql
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>mysql
      <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>server<span class="token punctuation">-</span>mysql<span class="token punctuation">-</span>centos
   <span class="token key atrule">zbx_net_frontend</span><span class="token punctuation">:</span>
<span class="token comment">#  devices:</span>
<span class="token comment">#   - &quot;/dev/ttyUSB0:/dev/ttyUSB0&quot;</span>
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 30s
  <span class="token key atrule">sysctls</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> net.ipv4.ip_local_port_range=1024 65000
   <span class="token punctuation">-</span> net.ipv4.conf.all.accept_redirects=0
   <span class="token punctuation">-</span> net.ipv4.conf.all.secure_redirects=0
   <span class="token punctuation">-</span> net.ipv4.conf.all.send_redirects=0
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix server with MySQL database support&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;zabbix-server&quot;</span>
   <span class="token key atrule">com.zabbix.dbtype</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">zabbix-proxy-sqlite3</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>sqlite3<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> all
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;10061:10051&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro 
   <span class="token punctuation">-</span> ./zbx_env/usr/lib/zabbix/externalscripts<span class="token punctuation">:</span>/usr/lib/zabbix/externalscripts<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/modules<span class="token punctuation">:</span>/var/lib/zabbix/modules<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/enc<span class="token punctuation">:</span>/var/lib/zabbix/enc<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/mibs<span class="token punctuation">:</span>/var/lib/zabbix/mibs<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> snmptraps<span class="token punctuation">:</span>/var/lib/zabbix/snmptraps<span class="token punctuation">:</span>rw
  <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
   <span class="token key atrule">nproc</span><span class="token punctuation">:</span> <span class="token number">65535</span>
   <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
    <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">20000</span>
    <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">40000</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.70&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512M
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.3&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256M
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_prx
   <span class="token punctuation">-</span> ./env_vars/.env_prx_sqlite3
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>java<span class="token punctuation">-</span>gateway
   <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>snmptraps
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>sqlite3
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>sqlite3
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>sqlite3<span class="token punctuation">-</span>centos
   <span class="token key atrule">zbx_net_frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 30s
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix proxy with SQLite3 database support&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;zabbix-proxy&quot;</span>
   <span class="token key atrule">com.zabbix.dbtype</span><span class="token punctuation">:</span> <span class="token string">&quot;sqlite3&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">zabbix-proxy-mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>mysql<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> all
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;10071:10051&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/usr/lib/zabbix/externalscripts<span class="token punctuation">:</span>/usr/lib/zabbix/externalscripts<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/modules<span class="token punctuation">:</span>/var/lib/zabbix/modules<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/enc<span class="token punctuation">:</span>/var/lib/zabbix/enc<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/mibs<span class="token punctuation">:</span>/var/lib/zabbix/mibs<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> snmptraps<span class="token punctuation">:</span>/var/lib/zabbix/snmptraps<span class="token punctuation">:</span>rw
  <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
   <span class="token key atrule">nproc</span><span class="token punctuation">:</span> <span class="token number">65535</span>
   <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
    <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">20000</span>
    <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">40000</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.70&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512M
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.3&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256M
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_db_mysql_proxy
   <span class="token punctuation">-</span> ./env_vars/.env_prx
   <span class="token punctuation">-</span> ./env_vars/.env_prx_mysql
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>server
   <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>java<span class="token punctuation">-</span>gateway
   <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>snmptraps
  <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> MYSQL_USER
   <span class="token punctuation">-</span> MYSQL_PASSWORD
   <span class="token punctuation">-</span> MYSQL_ROOT_USER
   <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD
<span class="token comment">#   - client-key.pem</span>
<span class="token comment">#   - client-cert.pem</span>
<span class="token comment">#   - root-ca.pem</span>
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>mysql
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>mysql
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>mysql<span class="token punctuation">-</span>centos
   <span class="token key atrule">zbx_net_frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 30s
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix proxy with MySQL database support&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;zabbix-proxy&quot;</span>
   <span class="token key atrule">com.zabbix.dbtype</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">zabbix-web-nginx-mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>mysql<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;80:8080&quot;</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;443:8443&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/etc/ssl/nginx<span class="token punctuation">:</span>/etc/ssl/nginx<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/usr/share/zabbix/modules/<span class="token punctuation">:</span>/usr/share/zabbix/modules/<span class="token punctuation">:</span>ro
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.70&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512M
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.5&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256M
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_db_mysql
   <span class="token punctuation">-</span> ./env_vars/.env_web
  <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> MYSQL_USER
   <span class="token punctuation">-</span> MYSQL_PASSWORD
<span class="token comment">#   - client-key.pem</span>
<span class="token comment">#   - client-cert.pem</span>
<span class="token comment">#   - root-ca.pem</span>
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>server
   <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>server
  <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
   <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8080/ping&quot;</span><span class="token punctuation">]</span>
   <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
   <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
   <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
   <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 30s
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>mysql
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>mysql
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>nginx<span class="token punctuation">-</span>mysql<span class="token punctuation">-</span>centos
   <span class="token key atrule">zbx_net_frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 10s
  <span class="token key atrule">sysctls</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> net.core.somaxconn=65535
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix frontend on Nginx web-server with MySQL database support&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;zabbix-frontend&quot;</span>
   <span class="token key atrule">com.zabbix.webserver</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx&quot;</span>
   <span class="token key atrule">com.zabbix.dbtype</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">zabbix-agent</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>agent<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> full
   <span class="token punctuation">-</span> all
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;10050:10050&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/etc/zabbix/zabbix_agentd.d<span class="token punctuation">:</span>/etc/zabbix/zabbix_agentd.d<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/modules<span class="token punctuation">:</span>/var/lib/zabbix/modules<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/enc<span class="token punctuation">:</span>/var/lib/zabbix/enc<span class="token punctuation">:</span>ro
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>/var/lib/zabbix/ssh_keys<span class="token punctuation">:</span>ro
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.2&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 128M
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.1&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 64M
   <span class="token key atrule">mode</span><span class="token punctuation">:</span> global
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_agent
  <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">pid</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>agent
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>agent<span class="token punctuation">-</span>passive
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>agent<span class="token punctuation">-</span>centos
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 5s
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix agent&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;zabbix-agentd&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">zabbix-java-gateway</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>java<span class="token punctuation">-</span>gateway<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> full
   <span class="token punctuation">-</span> all
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;10052:10052&quot;</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.5&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512M
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.25&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256M
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_java
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>java<span class="token punctuation">-</span>gateway
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>java<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>centos
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 5s
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix Java Gateway&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;java-gateway&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">zabbix-snmptraps</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>snmptraps<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> full
   <span class="token punctuation">-</span> all
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;162:1162/udp&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> snmptraps<span class="token punctuation">:</span>/var/lib/zabbix/snmptraps<span class="token punctuation">:</span>rw
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.5&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256M
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.25&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 128M
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>snmptraps
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 5s
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix snmptraps&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;snmptraps&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">zabbix-web-service</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> zabbix/zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>service<span class="token punctuation">:</span>centos<span class="token punctuation">-</span>6.2<span class="token punctuation">-</span>latest
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> full
   <span class="token punctuation">-</span> all
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> <span class="token string">&quot;10053:10053&quot;</span>
  <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> SYS_ADMIN
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./zbx_env/var/lib/zabbix/enc<span class="token punctuation">:</span>/var/lib/zabbix/enc<span class="token punctuation">:</span>ro
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
   <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">limits</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.5&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 512M
    <span class="token key atrule">reservations</span><span class="token punctuation">:</span>
      <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&#39;0.25&#39;</span>
      <span class="token key atrule">memory</span><span class="token punctuation">:</span> 256M
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_web_service
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>service
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>web<span class="token punctuation">-</span>service<span class="token punctuation">-</span>centos
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 5s
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">com.zabbix.description</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix web service&quot;</span>
   <span class="token key atrule">com.zabbix.company</span><span class="token punctuation">:</span> <span class="token string">&quot;Zabbix LLC&quot;</span>
   <span class="token key atrule">com.zabbix.component</span><span class="token punctuation">:</span> <span class="token string">&quot;web-service&quot;</span>
   <span class="token key atrule">com.zabbix.os</span><span class="token punctuation">:</span> <span class="token string">&quot;centos&quot;</span>

 <span class="token key atrule">mysql-server</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>8.0<span class="token punctuation">-</span>oracle
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> mysqld
   <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>character<span class="token punctuation">-</span>set<span class="token punctuation">-</span>server=utf8mb4
   <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>collation<span class="token punctuation">-</span>server=utf8mb4_bin
   <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password
<span class="token comment">#   - --require-secure-transport</span>
<span class="token comment">#   - --ssl-ca=/run/secrets/root-ca.pem</span>
<span class="token comment">#   - --ssl-cert=/run/secrets/server-cert.pem</span>
<span class="token comment">#   - --ssl-key=/run/secrets/server-key.pem</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./zbx_env/var/lib/mysql<span class="token punctuation">:</span>/var/lib/mysql<span class="token punctuation">:</span>rw
  <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./env_vars/.env_db_mysql
  <span class="token key atrule">secrets</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> MYSQL_USER
   <span class="token punctuation">-</span> MYSQL_PASSWORD
   <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD
<span class="token comment">#   - server-key.pem</span>
<span class="token comment">#   - server-cert.pem</span>
<span class="token comment">#   - root-ca.pem</span>
  <span class="token key atrule">stop_grace_period</span><span class="token punctuation">:</span> 1m
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
   <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>server
     <span class="token punctuation">-</span> zabbix<span class="token punctuation">-</span>database
     <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>database

 <span class="token key atrule">db_data_mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
   <span class="token punctuation">-</span> ./zbx_env/var/lib/mysql<span class="token punctuation">:</span>/var/lib/mysql<span class="token punctuation">:</span>rw

<span class="token comment"># elasticsearch:</span>
<span class="token comment">#  image: elasticsearch</span>
<span class="token comment">#  profiles:</span>
<span class="token comment">#   - full</span>
<span class="token comment">#   - all</span>
<span class="token comment">#  environment:</span>
<span class="token comment">#   - transport.host=0.0.0.0</span>
<span class="token comment">#   - discovery.zen.minimum_master_nodes=1</span>
<span class="token comment">#  networks:</span>
<span class="token comment">#   zbx_net_backend:</span>
<span class="token comment">#    aliases:</span>
<span class="token comment">#     - elasticsearch</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">zbx_net_frontend</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">driver_opts</span><span class="token punctuation">:</span>
      <span class="token key atrule">com.docker.network.enable_ipv6</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.16.238.0/24
  <span class="token key atrule">zbx_net_backend</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">driver_opts</span><span class="token punctuation">:</span>
      <span class="token key atrule">com.docker.network.enable_ipv6</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
    <span class="token key atrule">internal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.16.239.0/24

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">snmptraps</span><span class="token punctuation">:</span>

<span class="token key atrule">secrets</span><span class="token punctuation">:</span>
  <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./env_vars/.MYSQL_USER
  <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./env_vars/.MYSQL_PASSWORD
  <span class="token key atrule">MYSQL_ROOT_USER</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./env_vars/.MYSQL_ROOT_USER
  <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span>
    <span class="token key atrule">file</span><span class="token punctuation">:</span> ./env_vars/.MYSQL_ROOT_PASSWORD
<span class="token comment">#  client-key.pem:</span>
<span class="token comment">#    file: ./env_vars/.ZBX_DB_KEY_FILE</span>
<span class="token comment">#  client-cert.pem:</span>
<span class="token comment">#    file: ./env_vars/.ZBX_DB_CERT_FILE</span>
<span class="token comment">#  root-ca.pem:</span>
<span class="token comment">#    file: ./env_vars/.ZBX_DB_CA_FILE</span>
<span class="token comment">#  server-cert.pem:</span>
<span class="token comment">#    file: ./env_vars/.DB_CERT_FILE</span>
<span class="token comment">#  server-key.pem:</span>
<span class="token comment">#    file: ./env_vars/.DB_KEY_FILE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function Q(Z,O){const a=o("ExternalLinkIcon");return i(),l("div",null,[c(" more "),r,b,n("ul",null,[n("li",null,[n("a",d,[s("MySQL安装参考"),e(a)])]),n("li",null,[n("a",v,[s("Nginx参考"),e(a)]),s("、"),n("a",k,[s("Nginx配置"),e(a)])])]),m,n("p",null,[n("a",x,[s("官网"),e(a)])]),n("p",null,[n("a",y,[s("https://cdn.zabbix.com/zabbix/sources/stable/"),e(a)])]),n("p",null,[n("a",g,[s("https://www.zabbix.com/download_sources"),e(a)])]),z,n("p",null,[s("数据库选择mysql5.7.38版本 "),n("a",_,[s("MySQL安装参考"),e(a)]),s(" ；如果选用5.7.25，zabbix 6.2在启动的时候会提示数据库版本过低；")]),q,n("ul",null,[n("li",null,[s("Zabbix agent - "),n("a",h,[s("zabbix/zabbix-agent"),e(a)])]),n("li",null,[s("Zabbix server "),n("ul",null,[n("li",null,[s("支持 MySQL 数据库的 Zabbix server - "),n("a",f,[s("zabbix/zabbix-server-mysql"),e(a)])])])]),n("li",null,[s("Zabbix web界面 "),n("ul",null,[n("li",null,[s("基于Apache2 Web服务器 的 Zabbix web 界面，支持 MySQL 数据库 - "),n("a",S,[s("zabbix/zabbix-web-apache-mysql"),e(a)])]),n("li",null,[s("基于Nginx Web服务器 的 Zabbix web 界面，支持 MySQL 数据库 - "),n("a",w,[s("zabbix/zabbix-web-nginx-mysql"),e(a)])])])]),n("li",null,[s("Zabbix proxy "),n("ul",null,[n("li",null,[s("Zabbix proxy， 支持 MySQL 数据库 - "),n("a",L,[s("zabbix/zabbix-proxy-mysql"),e(a)])])])]),n("li",null,[s("Zabbix Java 网关 - "),n("a",M,[s("zabbix/zabbix-java-gateway"),e(a)])])]),R])}const D=p(u,[["render",Q],["__file","zabbix.html.vue"]]);export{D as default};
