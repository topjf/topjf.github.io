import{_ as i,X as t,Y as r,Z as o,$ as s,a0 as n,a2 as l,a1 as a,D as c}from"./framework-10d91a2c.js";const d={},p=a(`<h1>Linux下安装mysql</h1><h2 id="rpm-方式安装-mysql" tabindex="-1"><a class="header-anchor" href="#rpm-方式安装-mysql" aria-hidden="true">#</a> rpm 方式安装 mysql</h2><h3 id="_1、检查当前操作系统是否安装过mysql-如果安装进行卸载操作" tabindex="-1"><a class="header-anchor" href="#_1、检查当前操作系统是否安装过mysql-如果安装进行卸载操作" aria-hidden="true">#</a> 1、检查当前操作系统是否安装过mysql ，如果安装进行卸载操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看是否安装有mysql</span>

<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -aq | grep mysql</span>
mysql57-community-release-el7-11.noarch
mysql-community-common-5.6.46-2.el7.x86_64
mysql-community-libs-5.6.46-2.el7.x86_64
mysql-community-server-5.6.46-2.el7.x86_64
mysql-community-client-5.6.46-2.el7.x86_64

<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -aq | grep mariadb</span>
mariadb-libs-5.5.65-1.el7.x86_64

<span class="token comment">#卸载：rpm -e --nodeps </span>

<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps mariadb-libs</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps mysql57-community-release-el7-11.noarch</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps mysql-community-common-5.7.38-1.el7.x86_64 mysql-community-server-5.7.38-1.el7.x86_64 mysql-community-client-5.7.38-1.el7.x86_64 mysql-community-libs-5.7.38-1.el7.x86_64</span>

<span class="token comment">#清除数据</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/mysql/
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/mysql/data
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/log/mysqld.log 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、下载与安装mysql" tabindex="-1"><a class="header-anchor" href="#_2、下载与安装mysql" aria-hidden="true">#</a> 2、下载与安装mysql</h3><p>要求在线下载安装，所以必须保证你的虚拟机的Linux系统能正常的访问外网( 上网)</p><p>注：如何系统中没安装wget软件, 先安装:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum –y <span class="token function">install</span> <span class="token function">wget</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用-wget-命令下载mysql的repo源" tabindex="-1"><a class="header-anchor" href="#使用-wget-命令下载mysql的repo源" aria-hidden="true">#</a> 使用 wget 命令下载mysql的repo源</h4><hr>`,10),m={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-community-common-5.7.38-1.el7.x86_64.rpm
wget https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-community-libs-5.7.38-1.el7.x86_64.rpm
wget https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-community-client-5.7.38-1.el7.x86_64.rpm
wget https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-community-server-5.7.38-1.el7.x86_64.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://repo.mysql.com/mysql57-community-release-el7-11.noarch.rpm
<span class="token function">chmod</span> +x mysql*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-rpm-安装mysql-的yum源" tabindex="-1"><a class="header-anchor" href="#使用-rpm-安装mysql-的yum源" aria-hidden="true">#</a> 使用 rpm 安装mysql 的yum源</h4><ul><li>安装时必须严格遵守安装顺序 <strong>依赖关系依次为 common → libs → client → server</strong></li><li><strong>注</strong>：ivh中， i-install安装；v-verbose进度条；h-hash哈希校验</li></ul><p><strong>方式一：</strong><code>yum -y install ./mysql57-community-release-el7-11.noarch.rpm</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># yum -y install ./mysql57-community-release-el7-11.noarch.rpm</span>
<span class="token comment">#查看</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -aq | grep mysql</span>
mysql57-community-release-el7-11.noarch
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># yum repolist enabled | grep mysql.*</span>
mysql-connectors-community/x86_64 MySQL Connectors Community                 <span class="token number">199</span>
mysql-tools-community/x86_64      MySQL Tools Community                       <span class="token number">92</span>
mysql57-community/x86_64          MySQL <span class="token number">5.7</span> Community Server                 <span class="token number">604</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：</strong><code>rpm -ivh ./mysql57-community-release-el7-11.noarch.rpm</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -ivh ./mysql57-community-release-el7-11.noarch.rpm</span>
<span class="token comment">#查看</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -aq | grep mysql</span>
mysql57-community-release-el7-11.noarch
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># yum repolist enabled | grep mysql.*</span>
mysql-connectors-community/x86_64 MySQL Connectors Community                 <span class="token number">199</span>
mysql-tools-community/x86_64      MySQL Tools Community                       <span class="token number">92</span>
mysql57-community/x86_64          MySQL <span class="token number">5.7</span> Community Server                 <span class="token number">604</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>yum 源安装mysql服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># yum -y install mysql-community-server</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方式三：（推荐）</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-common-5.7.38-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-libs-5.7.38-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-client-5.7.38-1.el7.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql-community-server-5.7.38-1.el7.x86_64.rpm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不需要执行：yum -y install mysql-community-server</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装后查询安装的MySQL版本</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># mysqladmin --version</span>
mysqladmin  Ver <span class="token number">8.42</span> Distrib <span class="token number">5.7</span>.38, <span class="token keyword">for</span> Linux on x86_64

<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># rpm -aq | grep mysql</span>
mysql-community-server-5.7.38-1.el7.x86_64
mysql-community-common-5.7.38-1.el7.x86_64
mysql-community-libs-5.7.38-1.el7.x86_64
mysql-community-client-5.7.38-1.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3、-启动-mysql-服务" tabindex="-1"><a class="header-anchor" href="#_3、-启动-mysql-服务" aria-hidden="true">#</a> 3、 启动 mysql 服务</h3><table><thead><tr><th>CentOS6及以前版本</th><th>CentOS7</th><th>作用</th></tr></thead><tbody><tr><td>service 服务名 start</td><td>systemctl start 服务名</td><td>启动某个服务</td></tr><tr><td>service 服务名 stop</td><td>systemctl stop 服务名</td><td>停止</td></tr><tr><td>service 服务名 restart</td><td>systemctl restart 服务名</td><td>重启</td></tr><tr><td>service 服务名 status</td><td>systemctl status 服务名</td><td>查看状态</td></tr><tr><td></td><td>systemctl enable 服务名</td><td>服务永久生效</td></tr><tr><td></td><td>systemctl disable 服务名</td><td>服务永久关闭</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#当前有效，关机后失效</span>
systemctl start mysqld
systemctl status mysqld
<span class="token comment">#启用系统服务永久生效</span>
systemctl <span class="token builtin class-name">enable</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-、配置mysql" tabindex="-1"><a class="header-anchor" href="#_4-、配置mysql" aria-hidden="true">#</a> 4 、配置mysql</h3><h4 id="查看密码" tabindex="-1"><a class="header-anchor" href="#查看密码" aria-hidden="true">#</a> 查看密码</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /var/log/mysqld.log <span class="token operator">|</span> <span class="token function">grep</span> password
或者：
<span class="token function">grep</span> <span class="token string">&#39;temporary password&#39;</span> /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="登陆mysql" tabindex="-1"><a class="header-anchor" href="#登陆mysql" aria-hidden="true">#</a> 登陆mysql</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql  <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="进入mysql系统数据库" tabindex="-1"><a class="header-anchor" href="#进入mysql系统数据库" aria-hidden="true">#</a> 进入mysql系统数据库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>use mysql<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在执行此语句之前，必须使用ALTER USER语句重置密码</p><blockquote><p>You must reset your password using ALTER USER statement before executing this statement.</p></blockquote><h4 id="设置密码" tabindex="-1"><a class="header-anchor" href="#设置密码" aria-hidden="true">#</a> 设置密码</h4><p><strong>判断修改密码时候新密码是否符合当前的策略，密码不满足会报错，不让修改。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_policy</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token builtin class-name">set</span> global <span class="token assign-left variable">validate_password_length</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（选1种即可：）</p><p><strong>（1）</strong> ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;root12&#39;;</p><p><strong>（2）</strong> update user set password=password(&#39;root12&#39;) where user=&#39;root&#39;;</p><p><strong>刷新：</strong> flush privileges;</p><p>如果出现【ERROR1054(42S22):Unknown column &#39;password&#39; in &#39;field list&#39;】</p><p>执行：<code>update mysql.user set authentication_string=password(&#39;root12&#39;) where user=&#39;root&#39;;</code> 即可</p><h4 id="查看-新密码校验插件-可选项" tabindex="-1"><a class="header-anchor" href="#查看-新密码校验插件-可选项" aria-hidden="true">#</a> 查看 新密码校验插件（可选项）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;validate_password%&#39;</span><span class="token punctuation">;</span>
+--------------------------------------+--------+
<span class="token operator">|</span> Variable_name                        <span class="token operator">|</span> Value  <span class="token operator">|</span>
+--------------------------------------+--------+
<span class="token operator">|</span> validate_password_check_user_name    <span class="token operator">|</span> OFF    <span class="token operator">|</span>
<span class="token operator">|</span> validate_password_dictionary_file    <span class="token operator">|</span>        <span class="token operator">|</span> 字典文件
<span class="token operator">|</span> validate_password_length             <span class="token operator">|</span> <span class="token number">8</span>      <span class="token operator">|</span> 密码长度的最小值。
<span class="token operator">|</span> validate_password_mixed_case_count   <span class="token operator">|</span> <span class="token number">1</span>      <span class="token operator">|</span> 大小写的最小个数。
<span class="token operator">|</span> validate_password_number_count       <span class="token operator">|</span> <span class="token number">1</span>      <span class="token operator">|</span> 密码中数字的最小个数。
<span class="token operator">|</span> validate_password_policy             <span class="token operator">|</span> MEDIUM <span class="token operator">|</span> <span class="token number">0</span>--<span class="token operator">&gt;</span>low ， <span class="token number">1</span>--<span class="token operator">&gt;</span>MEDIUM ， <span class="token number">2</span>--<span class="token operator">&gt;</span>strong。
<span class="token operator">|</span> validate_password_special_char_count <span class="token operator">|</span> <span class="token number">1</span>      <span class="token operator">|</span> 特殊字符的最小个数。
+--------------------------------------+--------+

mysql<span class="token operator">&gt;</span> use mysql<span class="token punctuation">;</span>

<span class="token comment">#查看对应user与host关系</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> user,host from user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置访问权限-可以通过外部连接-数据库" tabindex="-1"><a class="header-anchor" href="#设置访问权限-可以通过外部连接-数据库" aria-hidden="true">#</a> 设置访问权限,可以通过外部连接 数据库</h4><p>GRANT ALL PRIVILEGES ON *.* TO [远程访问用户名]@&#39;IP&#39; IDENTIFIED BY [&#39;密码&#39;] WITH GRANT OPTION;</p><p>如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39;IDENTIFIED BY &#39;root12&#39; WITH GRANT OPTION;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="开启log-bin日志" tabindex="-1"><a class="header-anchor" href="#开启log-bin日志" aria-hidden="true">#</a> 开启log-bin日志</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set global log_bin_trust_function_creators=1;

持久化对应my.cnf
log_bin_trust_function_creators=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>刷新马上生效</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flush privileges<span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重启mysql服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl  restart  mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看进程</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-e</span> <span class="token operator">|</span> <span class="token function">grep</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、开放端口" tabindex="-1"><a class="header-anchor" href="#_5、开放端口" aria-hidden="true">#</a> 5、开放端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>实际应用场景中防火墙是要打开的，只能开放端口来外部访问。
<span class="token number">1</span>、linux防火墙问题：
systemctl stop firewalld；开机就关闭：systemctl disable firewalld

一般是通过开放端口来实现，关闭防火墙容易导致安全问题。    
开端口命令：firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
重启防火墙：systemctl restart firewalld
命令含义：
<span class="token parameter variable">--zone</span> <span class="token comment">#作用域</span>
--add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp  <span class="token comment">#添加端口，格式为：端口/通讯协议 </span>
<span class="token parameter variable">--permanent</span>   <span class="token comment">#永久生效，没有此参数重启后失效</span>
查看开启的所有端口：netstat <span class="token parameter variable">-ntlp</span> 或：firewall-cmd --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>permanent
重启防火墙：systemctl restart firewalld
命令含义：
--zone #作用域
--add-port=3306/tcp  #添加端口，格式为：端口/通讯协议 
--permanent   #永久生效，没有此参数重启后失效
查看开启的所有端口：netstat -ntlp 或：firewall-cmd --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、自己配置文件-vim-etc-my-cnf" tabindex="-1"><a class="header-anchor" href="#_6、自己配置文件-vim-etc-my-cnf" aria-hidden="true">#</a> 6、自己配置文件 vim /etc/my.cnf</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># For advice on how to change settings please see</span>
<span class="token comment"># http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html</span>

<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>

<span class="token comment">#删除前导，以设置主要用于报表服务器的选项。</span>
<span class="token comment">#对于事务和快速选择，服务器默认值更快。</span>
<span class="token comment">#根据需要调整尺寸，实验以找到最佳值。</span>
<span class="token comment"># join_buffer_size = 128M</span>
<span class="token comment"># sort_buffer_size = 2M</span>
<span class="token comment"># read_rnd_buffer_size = 2M</span>
<span class="token comment">#默认</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token comment">#数据目录</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/var/lib/mysql/data
<span class="token comment">#该条配置需在[client]段同时配置</span>
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/var/lib/mysql/mysql.sock
<span class="token comment">#多客户访问同一数据库，该选项默认开启</span>
symbolic-links<span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#默认</span>
log-error<span class="token operator">=</span>/var/log/mysqld.log
pid-file<span class="token operator">=</span>/var/run/mysqld/mysqld.pid
<span class="token comment">#打开时，和max_connections对比，取大数</span>
<span class="token assign-left variable">open_files_limit</span><span class="token operator">=</span><span class="token number">65535</span>
<span class="token comment">#max_connections=1000</span>
<span class="token comment">#开启慢查询日志相关，默认10秒，慢查询日志路径，记录没有使用索引的sql</span>
<span class="token assign-left variable">slow_query_log</span><span class="token operator">=</span>on
<span class="token assign-left variable">long_query_time</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">slow_query_log_file</span><span class="token operator">=</span>/var/log/mysql/slow_query.log
log-queries-not-using-indexes<span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">log_bin_trust_function_creators</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">#InnoDB为独立表空间模式，每个数据库的每个表都会生成一个数据空间</span>
<span class="token assign-left variable">default_storage_engine</span><span class="token operator">=</span>InnoDB
<span class="token assign-left variable">innodb_file_per_table</span><span class="token operator">=</span>on
<span class="token comment">#生产中要改，建议为操作系统内存的70%-80%，需重启服务生效</span>
<span class="token assign-left variable">innodb_buffer_pool_size</span><span class="token operator">=</span>1G
<span class="token comment">#忽略主机名解析，提高访问速度（注意配置文件中使用主机名将不能解析）</span>
<span class="token assign-left variable">skip_name_resolve</span><span class="token operator">=</span>on
<span class="token comment">#忽略表单大小写</span>
<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#设定默认字符为utf8mb4</span>
character-set-server<span class="token operator">=</span>utf8mb4
collation-server<span class="token operator">=</span>utf8mb4_general_ci

<span class="token comment">#SQL_MODEL</span>

<span class="token assign-left variable">sql_mode</span><span class="token operator">=</span><span class="token string">&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl restart mysqld</p><h2 id="tar-方式安装" tabindex="-1"><a class="header-anchor" href="#tar-方式安装" aria-hidden="true">#</a> tar 方式安装</h2>`,58),v={href:"https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.38-el7-x86_64.tar.gz",target:"_blank",rel:"noopener noreferrer"},b=a(`<h3 id="解压" tabindex="-1"><a class="header-anchor" href="#解压" aria-hidden="true">#</a> 解压</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#授权</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># chmod +x mysql-5.7.38-el7-x86_64.tar.gz</span>
<span class="token comment">#解压</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># tar -zxvf mysql-5.7.38-el7-x86_64.tar.gz</span>
<span class="token comment">#重命名</span>
<span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># mv mysql-5.7.38-el7-x86_64 mysql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(k,y){const e=c("ExternalLinkIcon");return t(),r("div",null,[o(" more "),p,s("p",null,[s("a",m,[n("https://downloads.mysql.com/archives/community/"),l(e)]),n("：下载【common、libs、client、server】这几个文件")]),u,s("p",null,[n("wget "),s("a",v,[n("https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.38-el7-x86_64.tar.gz"),l(e)])]),b])}const _=i(d,[["render",h],["__file","install.html.vue"]]);export{_ as default};
