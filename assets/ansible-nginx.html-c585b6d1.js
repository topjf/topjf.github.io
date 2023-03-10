import{_ as i,X as l,Y as t,Z as o,$ as n,a0 as s,a2 as c,a1 as a,D as p}from"./framework-10d91a2c.js";const r="/assets/true-image-20220729211246699-378e0158.png",d="/assets/true-image-20220729211332978-7bf2e7e6.png",u="/assets/true-image-20220729212349643-4c9ebf47.png",m="/assets/true-image-20220729214251417-f8312efa.png",v={},b=a(`<h1>ansible安装nginx</h1><h2 id="_1-在roles目录下生成对应的目录结构" tabindex="-1"><a class="header-anchor" href="#_1-在roles目录下生成对应的目录结构" aria-hidden="true">#</a> ① 在<code>roles</code>目录下生成对应的目录结构</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ansible<span class="token punctuation">]</span><span class="token comment"># cd roles/</span>
<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ls</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># mkdir -pv ./{nginx,mysql,httpd}/{files,templates,vars,tasks,handlers,meta,default}</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># touch ./{nginx,mysql,httpd}/{files,templates,vars,tasks,handlers,meta,default}/main.yml</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># tree nginx/</span>
nginx/
├── default
│   └── main.yml
├── files
│   ├── main.yml
│   └── nginx-1.22.0-1.el7.ngx.x86_64.rpm
├── handlers
│   └── main.yml
├── tasks
│   ├── copy.yml
│   ├── install.yml
│   ├── main.yml
│   ├── start.yml
│   ├── stop.yml
│   └── uninstall.yml
├── templates
│   ├── default.conf.j2
│   ├── html
│   │   ├── <span class="token number">404</span>.html
│   │   ├── 50x.html
│   │   └── index.html
│   ├── logs
│   ├── main.yml
│   ├── nginx.conf.j2
│   └── time.txt
└── vars
    └── main.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以使用 ansible-galaxy role init xxx 来实现目录的自动创建，结构跟上面一样</strong></p><h2 id="准备-nginx-conf-j2-配置文件" tabindex="-1"><a class="header-anchor" href="#准备-nginx-conf-j2-配置文件" aria-hidden="true">#</a> 准备 nginx.conf.j2 配置文件</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>user nginx;

worker_processes <span class="token punctuation">{</span><span class="token punctuation">{</span> ansible_processor_vcpus <span class="token punctuation">}</span><span class="token punctuation">}</span>;

error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/<span class="token important">*.conf;</span>

events <span class="token punctuation">{</span>
    worker_connections 1024;
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_local<span class="token punctuation">]</span> &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
                      
                      
    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    default_type        application/octet<span class="token punctuation">-</span>stream;

    include /etc/nginx/conf.d/<span class="token important">*.conf;</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token punctuation">{</span><span class="token punctuation">{</span> nginxprot <span class="token punctuation">}</span><span class="token punctuation">}</span>;
        listen       <span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span> nginxprot <span class="token punctuation">}</span><span class="token punctuation">}</span>;
        server_name  localhost;
        
        root         /usr/share/nginx/html;
        
        location / <span class="token punctuation">{</span>
           root   /usr/share/nginx/html;
           index  index.html index.htm;
        <span class="token punctuation">}</span>
        
        error_page 404 /404.html;
        location = /404.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        error_page 500 502 503 504 /50x.html;
        location = /50x.html <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-定义-tasks-任务文件" tabindex="-1"><a class="header-anchor" href="#_2-定义-tasks-任务文件" aria-hidden="true">#</a> ② 定义 tasks 任务文件</h2><p>rpm包下载：</p>`,8),k={href:"http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.22.0-1.el7.ngx.x86_64.rpm",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"chmod -R 777 nginx-1.22.0-1.el7.ngx.x86_64.rpm",-1),h=a(`<p><strong>vim /etc/ansible/roles/nginx/tasks/main.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> install.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> copy.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> start.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>install.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install nginx
  <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=nginx state=present
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>copy.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=/etc/ansible/roles/nginx/templates/nginx.conf.j2 dest=/etc/nginx/nginx.conf mode=0777
  <span class="token comment"># notify: restarted、reloaded 这里对应的触发是 handlers 处理器</span>
  <span class="token key atrule">notify</span><span class="token punctuation">:</span> restarted nginx service
  <span class="token comment"># tags: restartnginx、reloadnginx</span>
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> restartnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>start.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start nginx service
  <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=started enabled=true
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> startnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>stop.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> stop nginx service
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=nginx state=stopped
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> stopnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ansible-playbook ./nginx/tasks/stop.yml</p><p>ansible-playbook nginx.yml -t startnginx</p></blockquote><p><strong>uninstall.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> uninstall nginx
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> yum remove <span class="token punctuation">-</span>y nginx <span class="token important">&amp;&amp;</span> rm <span class="token punctuation">-</span>rf /etc/nginx <span class="token important">&amp;&amp;</span> ls /usr/sbin/nginx <span class="token important">&amp;&amp;</span> ls /etc/nginx
      <span class="token key atrule">tags</span><span class="token punctuation">:</span> uninstallnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ansible-playbook ./nginx/tasks/uninstall.yml</p></blockquote><h2 id="_3-放置我们所需要的文件到指定目录" tabindex="-1"><a class="header-anchor" href="#_3-放置我们所需要的文件到指定目录" aria-hidden="true">#</a> ③ 放置我们所需要的文件到指定目录</h2><p>因为我们定义的角色已经有了新的组成方式，所以我们需要把文件都放到指定的位置，这样，才能让配置文件找到这些并进行加载。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># tree</span>
├── default
│   └── main.yml
├── files
│   ├── main.yml
│   └── nginx-1.22.0-1.el7.ngx.x86_64.rpm
├── handlers
│   └── main.yml
├── meta
│   └── main.yml
├── tasks
│   ├── copy.yml
│   ├── install.yml
│   ├── main.yml
│   ├── stop.yml
│   ├── uninstall.yml
│   └── start.yml
├── templates
│   ├── default.conf.j2
│   ├── html
│   │   ├── <span class="token number">404</span>.html
│   │   ├── 50x.html
│   │   └── index.html
│   ├── logs
│   ├── main.yml
│   ├── nginx.conf.j2
│   └── time.txt
└── vars
    └── main.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-定义-vars-变量文件" tabindex="-1"><a class="header-anchor" href="#_4-定义-vars-变量文件" aria-hidden="true">#</a> ④ 定义 vars 变量文件</h2><p>我们在模板中定义的变量，也要去配置文件中加上：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./vars/main.yml</span>
---
nginxprot: <span class="token number">5120</span>
ansible_processor_vcpus: <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-定义-handlers-文件" tabindex="-1"><a class="header-anchor" href="#_5-定义-handlers-文件" aria-hidden="true">#</a> ⑤ 定义 handlers 文件</h2><p>我们在配置文件中定义了<code>notify</code>，所以我么也需要定义<code>handlers</code>，我们来修改配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./handlers/main.yml</span>
---
- name: restarted nginx <span class="token function">service</span>
  service: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx <span class="token assign-left variable">state</span><span class="token operator">=</span>restarted
- name: reloaded nginx <span class="token function">service</span>
  service: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx <span class="token assign-left variable">state</span><span class="token operator">=</span>reloaded

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-定义-nginx-剧本文件" tabindex="-1"><a class="header-anchor" href="#_6-定义-nginx-剧本文件" aria-hidden="true">#</a> ⑥ 定义 nginx 剧本文件</h2><p>接下来，我们就来定义剧本文件，由于大部分设置我们都单独配置在了roles里面，所以，接下来剧本就只需要写一点点内容即可：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># vim ./nginx.yml</span>
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-启动服务" tabindex="-1"><a class="header-anchor" href="#_7-启动服务" aria-hidden="true">#</a> ⑦ 启动服务</h2><p>剧本定义完成以后，我们就可以来启动服务了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-playbook nginx.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_8-启动过后照例查看端口号" tabindex="-1"><a class="header-anchor" href="#_8-启动过后照例查看端口号" aria-hidden="true">#</a> ⑧ 启动过后照例查看端口号</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible web -m shell -a &quot;ss -ntulp |grep 5120&quot;</span>

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible web -m shell -a &quot;ss -ntulp |grep nginx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible web -m shell -a &#39;curl http://127.0.0.1:5120/&#39;</span>

<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: Consider using the get_url or uri module rather than running <span class="token string">&#39;curl&#39;</span><span class="token builtin class-name">.</span>  If you need to use <span class="token builtin class-name">command</span> because
get_url or uri is insufficient you can <span class="token function">add</span> <span class="token string">&#39;warn: false&#39;</span> to this <span class="token builtin class-name">command</span> task or <span class="token builtin class-name">set</span> <span class="token string">&#39;command_warnings=False&#39;</span> <span class="token keyword">in</span>
ansible.cfg to get rid of this message.

<span class="token number">192.168</span>.0.8 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE HTML PUBLIC <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to CentOS<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>style <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text/css&quot;</span><span class="token operator">&gt;</span>

<span class="token number">192.168</span>.0.10 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE HTML PUBLIC <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to CentOS<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-测试修改后重新加载配置文件-restartnginx" tabindex="-1"><a class="header-anchor" href="#_9-测试修改后重新加载配置文件-restartnginx" aria-hidden="true">#</a> ⑨ 测试修改后重新加载配置文件 - restartnginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./vars/main.yml</span>

nginxprot: <span class="token number">5133</span>

<span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./tasks/copy.yml</span>
- name: copy config
  template: <span class="token assign-left variable">src</span><span class="token operator">=</span>/etc/ansible/roles/nginx/templates/nginx.conf.j2 <span class="token assign-left variable">dest</span><span class="token operator">=</span>/etc/nginx/nginx.conf <span class="token assign-left variable">mode</span><span class="token operator">=</span>0777
  notify: restarted nginx <span class="token function">service</span>
  tags: restartnginx

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-playbook nginx.yml -t restartnginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_10-测试修改后重新加载配置文件-reloadnginx" tabindex="-1"><a class="header-anchor" href="#_10-测试修改后重新加载配置文件-reloadnginx" aria-hidden="true">#</a> 10 测试修改后重新加载配置文件 - reloadnginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./vars/main.yml</span>

nginxprot: <span class="token number">5166</span>

<span class="token punctuation">[</span>root@admin nginx<span class="token punctuation">]</span><span class="token comment"># vim ./tasks/copy.yml</span>
- name: copy config
  template: <span class="token assign-left variable">src</span><span class="token operator">=</span>/etc/ansible/roles/nginx/templates/nginx.conf.j2 <span class="token assign-left variable">dest</span><span class="token operator">=</span>/etc/nginx/nginx.conf <span class="token assign-left variable">mode</span><span class="token operator">=</span>0777
  notify: reloaded nginx <span class="token function">service</span>
  tags: reloadnginx

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-playbook nginx.yml -t reloadnginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',40);function x(y,f){const e=p("ExternalLinkIcon");return l(),t("div",null,[o(" more "),b,n("blockquote",null,[n("p",null,[s("wget "),n("a",k,[s("http://nginx.org/packages/centos/7/x86_64/RPMS/nginx-1.22.0-1.el7.ngx.x86_64.rpm"),c(e)])]),g]),h])}const q=i(v,[["render",x],["__file","ansible-nginx.html.vue"]]);export{q as default};
