import{_ as i,X as r,Y as c,Z as d,$ as n,a0 as e,a2 as s,a1 as l,D as o}from"./framework-10d91a2c.js";const t={},p=n("h1",null,"Open-Falcon监控平台",-1),u=n("h2",{id:"环境准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#"),e(" 环境准备")],-1),v=n("h3",{id:"安装-redis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-redis","aria-hidden":"true"},"#"),e(" 安装 redis")],-1),m={href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://note-jf.github.io/tools/docker/docker-install-mysql-redis-nginx-nacos-mq-es.html",target:"_blank",rel:"noopener noreferrer"},f=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /mydoc/redis/conf
touch /mydoc/redis/conf/redis.conf
#################linux
docker run -p 6491:6379 --name redis \\
--restart=always \\
-v /data/docker/redis/data:/data \\
-v /data/docker/redis/conf/redis.conf:/etc/redis/redis.conf \\
-d registry.cn-chengdu.aliyuncs.com/jinfang/redis:latest redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 4529e2c29cbb redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql" aria-hidden="true">#</a> 安装mysql</h3>`,3),g={href:"https://note-jf.github.io/database/mysql/install.html",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.7/en/server-configuration-defaults.html

[client]
default-character-set=utf8mb4

[mysqld]

#删除前导，以设置主要用于报表服务器的选项。
#对于事务和快速选择，服务器默认值更快。
#根据需要调整尺寸，实验以找到最佳值。
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
#默认
port=3306
#数据目录
datadir=/var/lib/mysql
#该条配置需在[client]段同时配置
socket=/var/lib/mysql/mysql.sock
#多客户访问同一数据库，该选项默认开启
symbolic-links=0
#默认
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
#打开时，和max_connections对比，取大数
open_files_limit=65535
#max_connections=1000
#开启慢查询日志相关，默认10秒，慢查询日志路径，记录没有使用索引的sql
slow_query_log=on
long_query_time=10
slow_query_log_file=/var/log/mysql/slow_query.log
log-queries-not-using-indexes=1
#InnoDB为独立表空间模式，每个数据库的每个表都会生成一个数据空间
default_storage_engine=InnoDB
innodb_file_per_table=on
#生产中要改，建议为操作系统内存的70%-80%，需重启服务生效
innodb_buffer_pool_size=1G
#忽略主机名解析，提高访问速度（注意配置文件中使用主机名将不能解析）
skip_name_resolve=on
#忽略表单大小写
lower_case_table_names=0
#设定默认字符为utf8mb4
character-set-server=utf8mb4
collation-server=utf8mb4_general_ci

#SQL_MODEL

sql_mode=&#39;STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单体安装-open-falcon" tabindex="-1"><a class="header-anchor" href="#单体安装-open-falcon" aria-hidden="true">#</a> 单体安装 open-falcon</h2>`,2),k={href:"https://github.com/open-falcon/falcon-plus/releases",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/open-falcon/falcon-plus/releases/download/v0.3/open-falcon-v0.3.tar.gz",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/open-falcon/falcon-plus/releases/download/v0.2.1/open-falcon-v0.2.1.tar.gz",target:"_blank",rel:"noopener noreferrer"},O=l(`<p>一、创建工作目录</p><p>export FALCON_HOME=/data/work</p><p>export WORKSPACE=$FALCON_HOME/open-falcon</p><p>mkdir -p $WORKSPACE</p><p>二、解压二进制包</p><p>cd /data/software</p><p>tar -xzvf open-falcon-v0.3.tar.gz -C $WORKSPACE</p><p>三、配置数据库账号和密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$WORKSPACE</span>

<span class="token function">grep</span> <span class="token parameter variable">-Ilr</span> <span class="token number">3306</span> ./ <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> -- <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/root:/root:root12/g&#39;</span>
<span class="token function">grep</span> <span class="token parameter variable">-Ilr</span> <span class="token number">6379</span> ./ <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> -- <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/127.0.0.1:6379/127.0.0.1:6491/g&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、启动</p><p>查看目录下包括Open-Falcon的所有组件，我们先默认全部启动，之后我们一个一个讲解如何分布式部署以及启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master open-falcon<span class="token punctuation">]</span><span class="token comment"># ls</span>
agent  aggregator  alarm  api  gateway  graph  hbs  judge  nodata  open-falcon  plugin  public  transfer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>./open-falcon start</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./open-falcon start
<span class="token punctuation">[</span>falcon-graph<span class="token punctuation">]</span> <span class="token number">15489</span>
<span class="token punctuation">[</span>falcon-hbs<span class="token punctuation">]</span> <span class="token number">15494</span>
<span class="token punctuation">[</span>falcon-judge<span class="token punctuation">]</span> <span class="token number">15521</span>
<span class="token punctuation">[</span>falcon-transfer<span class="token punctuation">]</span> <span class="token number">15531</span>
<span class="token punctuation">[</span>falcon-nodata<span class="token punctuation">]</span> <span class="token number">15534</span>
<span class="token punctuation">[</span>falcon-aggregator<span class="token punctuation">]</span> <span class="token number">15551</span>
<span class="token punctuation">[</span>falcon-agent<span class="token punctuation">]</span> <span class="token number">15554</span>
<span class="token punctuation">[</span>falcon-gateway<span class="token punctuation">]</span> <span class="token number">15569</span>
<span class="token punctuation">[</span>falcon-api<span class="token punctuation">]</span> <span class="token number">15576</span>
<span class="token punctuation">[</span>falcon-alarm<span class="token punctuation">]</span> <span class="token number">15586</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查所有模块的启动状况</li></ul><p>./open-falcon check</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./open-falcon check
        falcon-graph       DOWN               - 
          falcon-hbs       DOWN               - 
        falcon-judge         UP           <span class="token number">15521</span> 
     falcon-transfer         UP           <span class="token number">15531</span> 
       falcon-nodata       DOWN               - 
   falcon-aggregator       DOWN               - 
        falcon-agent         UP           <span class="token number">15554</span> 
      falcon-gateway         UP           <span class="token number">15569</span> 
          falcon-api       DOWN               - 
        falcon-alarm       DOWN               - 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>五、更多命令行工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ./open-falcon [start|stop|restart|check|monitor|reload] module</span>
./open-falcon start graph
./open-falcon start hbs
./open-falcon start judge
./open-falcon start transfer
./open-falcon start nodata
./open-falcon start aggregator
./open-falcon start agent
./open-falcon start gateway
./open-falcon start api
./open-falcon start alarm

./open-falcon check
        falcon-graph         UP           <span class="token number">35697</span> 
          falcon-hbs         UP           <span class="token number">35711</span> 
        falcon-judge         UP           <span class="token number">35719</span> 
     falcon-transfer         UP           <span class="token number">35728</span> 
       falcon-nodata         UP           <span class="token number">35740</span> 
   falcon-aggregator       DOWN               - 
        falcon-agent         UP           <span class="token number">38715</span> 
      falcon-gateway         UP           <span class="token number">40052</span> 
          falcon-api       DOWN               - 
        falcon-alarm       DOWN               - 

For debugging , You can check <span class="token variable">$WorkDir</span>/<span class="token variable">$moduleName</span>/log/logs/xxx.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分布式安装-open-falcon" tabindex="-1"><a class="header-anchor" href="#分布式安装-open-falcon" aria-hidden="true">#</a> 分布式安装 open-falcon</h2>`,20);function y(N,q){const a=o("ExternalLinkIcon");return r(),c("div",null,[d(" more "),p,u,v,n("p",null,[n("a",m,[e("https://redis.io/download/"),s(a)])]),n("p",null,[n("a",b,[e("docker安装教程"),s(a)])]),f,n("p",null,[n("a",g,[e("tar方式-参考地址"),s(a)])]),h,n("p",null,[n("a",k,[e("下载"),s(a)])]),n("p",null,[n("a",_,[e("https://github.com/open-falcon/falcon-plus/releases/download/v0.3/open-falcon-v0.3.tar.gz"),s(a)])]),n("p",null,[n("a",x,[e("https://github.com/open-falcon/falcon-plus/releases/download/v0.2.1/open-falcon-v0.2.1.tar.gz"),s(a)])]),O])}const w=i(t,[["render",y],["__file","open-falcon.html.vue"]]);export{w as default};
