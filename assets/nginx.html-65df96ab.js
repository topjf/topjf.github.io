import{_ as e,X as i,Y as l,Z as p,$ as n,a0 as s,a2 as o,a1 as a,D as c}from"./framework-10d91a2c.js";const u={},d=a(`<h1>nginx</h1><h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h2><ol><li><strong>重启</strong>：./sbin/nginx -s quit &amp;&amp; ./sbin/nginx</li><li><strong>加载配置</strong>：./sbin/nginx -s reload</li><li><strong>退出</strong>： ./sbin/nginx -s quit</li><li><strong>启动</strong>：./sbin/nginx</li><li><strong>检查文件</strong>：./sbin/nginx -t</li><li><strong>查看服务</strong>：ps -ef | grep nginx</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="http配置" tabindex="-1"><a class="header-anchor" href="#http配置" aria-hidden="true">#</a> http配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>http <span class="token punctuation">{</span>
  <span class="token comment">#隐藏version</span>
  server_tokens off;

  log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_iso8601<span class="token punctuation">]</span> &quot;$request&quot; &#39;
  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

log_format  mylog &#39;<span class="token punctuation">{</span><span class="token key atrule">&quot;date_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$year-$month-$day $hour:$minutes:$seconds&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;host&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_ip&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_id&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;url&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;referer&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request_time&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_time&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;status&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$status&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;size&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$body_bytes_sent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;info&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;x_forwarded_for&quot;<span class="token punctuation">:</span> &quot;$http_x_forwarded_for&quot;&#39;
                      &#39; <span class="token punctuation">}</span>&#39;;

  keepalive_timeout  65;
  client_max_body_size 50m;
  <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数,可以理解为保存到本地再传给用户</span>
  client_body_buffer_size 256k;
  client_header_timeout 3m;
  client_body_timeout 3m;
  send_timeout 3m;
  <span class="token comment">#代理配置参数</span>
  <span class="token comment">#nginx 跟后端服务器连接超时时间(代理连接超时)</span>
  proxy_connect_timeout 300s;
  <span class="token comment">#连接成功后，后端服务器响应时间(代理接收超时)</span>
  proxy_read_timeout 300s;
  proxy_send_timeout 300s;
  <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
  proxy_buffer_size 64k;
  <span class="token comment">#proxy_buffers 缓冲区，网页平均在 32k 以下的话，这样设置</span>
  proxy_buffers 4 32k;
  <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
  proxy_busy_buffers_size 64k;
  <span class="token comment">#设定缓存文件夹大小，大于这个值，将从 upstream 服务器传递请求，而不缓冲到磁盘</span>
  proxy_temp_file_write_size 64k;
  <span class="token comment">#不允许代理端主动关闭连接</span>
  proxy_ignore_client_abort on;
  <span class="token comment">## 可以放到具体的 location</span>
  proxy_set_header Host $host;
  proxy_set_header X<span class="token punctuation">-</span>Forwarder<span class="token punctuation">-</span>For $remote_addr;

  include /etc/nginx/conf.d/<span class="token important">*.conf;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志-自定义格式" tabindex="-1"><a class="header-anchor" href="#日志-自定义格式" aria-hidden="true">#</a> 日志+自定义格式</h3><p>获取不到的值：以 - 代替</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>http<span class="token punctuation">{</span>
  <span class="token comment">## $time_iso8601、$time_local</span>
  log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_iso8601<span class="token punctuation">]</span> &quot;$request&quot; &#39;
  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
<span class="token comment">#172.17.0.1 - - [20/Jan/2022:03:05:54 +0000] &quot;GET /codeutil/get/log HTTP/1.1&quot; 200 19</span>
<span class="token comment">#&quot;-&quot; &quot;ApiPOST Runtime +https://www.apipost.cn&quot; &quot;-&quot;</span>
<span class="token comment">#172.17.0.1 - - [2022-01-20T04:21:16+00:00] &quot;GET /codeutil/get/log HTTP/1.1&quot; 200 19</span>
<span class="token comment">#&quot;-&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0&quot; &quot;-&quot;</span>

log_format  mylog &#39;<span class="token punctuation">{</span><span class="token key atrule">&quot;date_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$year-$month-$day $hour:$minutes:$seconds&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;host&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_ip&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_id&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;url&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;referer&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request_time&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_time&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;status&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$status&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;size&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$body_bytes_sent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;info&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;x_forwarded_for&quot;<span class="token punctuation">:</span> &quot;$http_x_forwarded_for&quot;&#39;
                      &#39; <span class="token punctuation">}</span>&#39;;
<span class="token comment">#{&quot;date_time&quot;: &quot;2022-01-20 06:25:05&quot;,&quot;host&quot;: &quot;172.17.0.9&quot;,&quot;client_ip&quot;: &quot;172.17.0.1&quot;,&quot;client_id&quot;: &quot;-&quot;,&quot;url&quot;:&quot;/codeutil/get/log&quot;,</span>
<span class="token comment">#&quot;request&quot;: &quot;GET /codeutil/get/log HTTP/1.1&quot;,&quot;referer&quot;: &quot;-&quot;,&quot;request_time&quot;: &quot;0.004&quot;,&quot;status&quot;: &quot;200&quot;,&quot;size&quot;: &quot;19&quot;,</span>
<span class="token comment">#&quot;info&quot;: &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0&quot;,&quot;x_forwarded_for&quot;: &quot;-&quot;}</span>

  server<span class="token punctuation">{</span>
      <span class="token comment">### 这里仅仅是当前配置</span>
      include /etc/nginx/conf.d/time.txt;
      <span class="token comment">#把if(){}抽离到time.txt</span>
      <span class="token comment">#if ($time_iso8601 ~ &quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;) {</span>
      <span class="token comment">#  set $year $1;</span>
      <span class="token comment">#  set $month $2;</span>
      <span class="token comment">#  set $day $3;</span>
      <span class="token comment">#  set $hour $4;</span>
      <span class="token comment">#  set $minutes $5;</span>
      <span class="token comment">#  set $seconds $6;</span>
      <span class="token comment">#}</span>
      access_log  /var/log/nginx/my.log  mylog; <span class="token comment"># buffer=32k;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"示例"),n("th",null,"说明")])],-1),v=n("tr",null,[n("td",null,"$server_addr"),n("td",null,"172.17.0.9"),n("td",null,"服务端IP地址")],-1),m=n("tr",null,[n("td",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"r"),n("mi",null,"e"),n("mi",null,"m"),n("mi",null,"o"),n("mi",null,"t"),n("msub",null,[n("mi",null,"e"),n("mi",null,"a")]),n("mi",null,"d"),n("mi",null,"d"),n("mi",null,"r"),n("mo",{separator:"true"},",")]),n("annotation",{encoding:"application/x-tex"},"remote_addr,")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal"},"re"),n("span",{class:"mord mathnormal"},"m"),n("span",{class:"mord mathnormal"},"o"),n("span",{class:"mord mathnormal"},"t"),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"e"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.1514em"}},[n("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"a")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mord mathnormal"},"dd"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),n("span",{class:"mpunct"},",")])])]),s("http_x_forwarded_for")]),n("td",null,'172.17.0.1,"-"'),n("td",null,"客户端IP地址")],-1),k=n("tr",null,[n("td",null,"$remote_user"),n("td",null,"-"),n("td",null,"客户端用户")],-1),b=n("tr",null,[n("td",null,"$time_iso8601"),n("td",null,"2022-01-20T03:25:07+00:00"),n("td",null,"时间")],-1),g=n("tr",null,[n("td",null,"$time_local"),n("td",null,"20/Jan/2022:03:05:54 +0000"),n("td",null,"时间")],-1),_=n("tr",null,[n("td",null,"$request"),n("td",null,'"GET /codeutil/get/log HTTP/1.1"'),n("td",null,"请求")],-1),h=n("tr",null,[n("td",null,"$request_time"),n("td",null,"12"),n("td",null,"请求处理时间-秒")],-1),q=n("tr",null,[n("td",null,"$status"),n("td",null,"200"),n("td",null,"状态")],-1),x=n("tr",null,[n("td",null,"$body_bytes_sent"),n("td",null,"19"),n("td",null,"发送的正文字节")],-1),y=n("tr",null,[n("td",null,"$http_referer"),n("td",null,'"-"'),n("td",null,[s("记录从哪个页面链接访问过来的。"),n("br"),s("场景：防盗链（某网站通过url引用了你的页面，当用户在浏览器上点击url时，"),n("br"),s("http请求的头部中会通过referer头部，将该网站当前页面的url带上，"),n("br"),s("告诉服务器本次请求是由这个页面发起的。）")])],-1),f=n("td",null,"$http_user_agent",-1),$={href:"https://www.apipost.cn",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),T=n("td",null,"记录调用端、访问端浏览器相关信息",-1),j=a(`<h3 id="https配置" tabindex="-1"><a class="header-anchor" href="#https配置" aria-hidden="true">#</a> https配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen       443 ssl;
  server_name  www.xxx.cn;

  charset utf<span class="token punctuation">-</span>8;
  root html;
  index index.html index.htm;

  ssl_certificate /etc/nginx/conf.d/cert/www.xxx.cn.pem;
  ssl_certificate_key /etc/nginx/conf.d/cert/www.xxx.cn.key;

  ssl_session_timeout 5m;
  ssl_ciphers ECDHE<span class="token punctuation">-</span>RSA<span class="token punctuation">-</span>AES128<span class="token punctuation">-</span>GCM<span class="token punctuation">-</span>SHA256<span class="token punctuation">:</span>ECDHE<span class="token punctuation">:</span>ECDH<span class="token punctuation">:</span>AES<span class="token punctuation">:</span>HIGH<span class="token punctuation">:</span><span class="token tag">!NULL:</span><span class="token tag">!aNULL:</span><span class="token tag">!MD5:</span><span class="token tag">!ADH:</span><span class="token tag">!RC4;</span>
  <span class="token comment">#表示使用的加密套件的类型。</span>
  ssl_protocols TLSv1.1 TLSv1.2; <span class="token comment">#表示使用的TLS协议的类型。 TLSv1 TLSv1.1 TLSv1.2</span>
  ssl_prefer_server_ciphers on;

  access_log  logs/https.www.xxx.log  mylog;

  <span class="token comment">#代理</span>
  location / <span class="token punctuation">{</span>
      proxy_pass https<span class="token punctuation">:</span>//www.xxx.cn/wwwvue/;
  <span class="token punctuation">}</span>
  location ^~/wwwvue/ <span class="token punctuation">{</span>
      alias   /data/xxxweb/wwwvue/;
      index index.html index.htm;
      <span class="token comment"># vue解决刷新404问题</span>
      try_files $uri $uri/ /$1/index.html last;
  <span class="token punctuation">}</span>
  location @rewrites <span class="token punctuation">{</span>
      rewrite ^/(wwwvue)/(.+)$ /$1/index.html last;
  <span class="token punctuation">}</span>
  <span class="token comment"># www 权限管理系统：后端</span>
  location /www/ <span class="token punctuation">{</span>
      proxy_pass https<span class="token punctuation">:</span>//xxx_server/www/;
  <span class="token punctuation">}</span>
  error_page  400 404              /40x.html;
  location = /40x.html <span class="token punctuation">{</span>
      root   html;
  <span class="token punctuation">}</span>
  error_page   500 502 503 504  /50x.html;
  location = /50x.html <span class="token punctuation">{</span>
      root   html;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理配置" tabindex="-1"><a class="header-anchor" href="#代理配置" aria-hidden="true">#</a> 代理配置</h3><h3 id="负载均衡配置" tabindex="-1"><a class="header-anchor" href="#负载均衡配置" aria-hidden="true">#</a> 负载均衡配置</h3><table><thead><tr><th>server标签</th><th>参数说明</th></tr></thead><tbody><tr><td>server 10.0.0.6:80</td><td>负载均衡后面的RS配置，可以是IP或域名，如果不写端口，默认是80端口。高并发场景下，IP可换成域名，通过DNS做负载均衡。</td></tr><tr><td>weight=1</td><td>代表服务器的权重，默认值是1。权重数字越大表示接受的请求比例越大。</td></tr><tr><td>max_fails=1</td><td>Nginx尝试连接后端主机失败的次数，这个数值是配置proxy_next_upstream、fastcgi_next_upstream和memcached_next_upstream三个参数来使用的，<br>当Nginx接受后端服务器返回这三个参数定义的状态码时，会将这个请求转发给正常工作的后端服务器，例如404、502、503。max_fails的默认值是1；企业场景：建议2-3次。</td></tr><tr><td>backup</td><td>热备配置（RS）节点的高可用，当期面激活的RS都失败后会自动启用热备RS。这标志着这个服务器作为备份服务器，若主服务器全部宕机了，就会向他转发请求；<br>注意：当负载调度算法为ip_hash时，后端服务器在负载均衡调度中的状态不能是weight和backup。</td></tr><tr><td>fail_timeout=10s</td><td>在max_fails定义的失败次数后，距离下次检查的间隔时间，默认是10s；如果max_fails是5，他就检测5次。如果5次都是502，那么他就会根据fail_timeout的值，<br>等待10s再去检查，还是只检查一次，如果持续502，在不重新加载nginx配置的情况下，每隔10s都只检测一次。常规业务：2-3秒比较合理。</td></tr><tr><td>down</td><td>这标识着服务器永远不可用，这个参数可配合ip_hash使用</td></tr></tbody></table><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream www_server_pool <span class="token punctuation">{</span>
    server 10.0.0.7 weight=5;
    server 10.0.0.16 weight=10;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream www_server <span class="token punctuation">{</span>
    server 10.0.0.5;   <span class="token comment">#这一行标签和下一行是等价的</span>
    server 10.0.0.6：80 weight=1 max_fails=1 fails_timeout=10s; <span class="token comment">#此行标签为默认配置</span>
    server 10.0.0.7：80 weight=1 max_fails=2  fails_timeout=10s backup;
    server 10.0.0.8：80 weight=1 max_fails=3 fails_timeout=20s backup;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream www_server_pool <span class="token punctuation">{</span>
    server www.test.com<span class="token punctuation">:</span>8080;
    server www.example.com weight=10;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常规配置" tabindex="-1"><a class="header-anchor" href="#常规配置" aria-hidden="true">#</a> 常规配置</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream www_server_pools <span class="token punctuation">{</span>
    server  172.16.1.16<span class="token punctuation">:</span>80 ;
    server  172.16.1.17<span class="token punctuation">:</span>80 ;
<span class="token punctuation">}</span>
 server <span class="token punctuation">{</span>
    listen 80;
    server_name www_server_pools;
        location / <span class="token punctuation">{</span>
            access_log logs/access.log main;
            proxy_pass http<span class="token punctuation">:</span>//www_server_pools;
            proxy_set_header Host $host;
            proxy_set_header X<span class="token punctuation">-</span>Forwarded<span class="token punctuation">-</span>For $remote_addr;
            proxy_redirect default;
            proxy_buffer_size 512k;
            proxy_buffers 6 512k;
            proxy_busy_buffers_size 512k;
            proxy_temp_file_write_size 512k;
            client_max_body_size 100m;
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署项目" tabindex="-1"><a class="header-anchor" href="#部署项目" aria-hidden="true">#</a> 部署项目</h2><h3 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen       80;
  server_name  static.xxx.cn;
  location ~ /(css<span class="token punctuation">|</span>data<span class="token punctuation">|</span>fronts<span class="token punctuation">|</span>img<span class="token punctuation">|</span>js<span class="token punctuation">|</span>common)/ <span class="token punctuation">{</span>
      root   /opt/static; <span class="token comment">#静态资源位置</span>
  <span class="token punctuation">}</span>

  location ~* \\.(gif<span class="token punctuation">|</span>jpg<span class="token punctuation">|</span>png<span class="token punctuation">|</span>swf<span class="token punctuation">|</span>flv)$ <span class="token punctuation">{</span>
      <span class="token comment"># 白名单防盗链</span>
      valid_referers none blocked 192.168.1.99 www.test.com  <span class="token important">*.jfedu.net;</span>
      root /usr/share/nginx/html;
      if ($invalid_referer) <span class="token punctuation">{</span>
        return 403;
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署-vue" tabindex="-1"><a class="header-anchor" href="#部署-vue" aria-hidden="true">#</a> 部署 vue</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen       80;
  server_name www.xxx.cn;
  charset utf<span class="token punctuation">-</span>8;
  access_log  /var/log/nginx/xxx.log  mylog;
  <span class="token comment">##########################################################</span>
  location / <span class="token punctuation">{</span>
      proxy_pass http<span class="token punctuation">:</span>//www.xxx.cn/demovue/;
  <span class="token punctuation">}</span>
  location ^~/demovue/ <span class="token punctuation">{</span>
      alias   /data/web/demovue/;
      index index.html index.htm;
      try_files $uri $uri/ /$1/index.html last;
  <span class="token punctuation">}</span>
  location @rewrites <span class="token punctuation">{</span>
      rewrite ^/(demovue)/(.+)$ /$1/index.html last;
  <span class="token punctuation">}</span>
  <span class="token comment">##########################或者如下################################</span>
  location / <span class="token punctuation">{</span>
      root   /usr/share/nginx/html/demovue/;
      index index.html index.htm;
      <span class="token comment"># 解决vue去掉#部署刷新报错</span>
      try_files $uri $uri/ /index.html;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理java服务" tabindex="-1"><a class="header-anchor" href="#代理java服务" aria-hidden="true">#</a> 代理java服务</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 代理后台管理01</span>
    server <span class="token punctuation">{</span>
      listen       80;
      server_name  www.xxx.cn;
      charset utf<span class="token punctuation">-</span>8;
      access_log  logs/host.access.log  mylog;

      location /demo/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//192.168.3.2<span class="token punctuation">:</span>3655/;
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token comment">##########################或者如下################################</span>
    <span class="token comment"># 代理后台管理02</span>
    <span class="token comment"># 必须指定 [ 主机IP , 服务器IP ] 真实IP（错误：127.0.0.1）</span>
    upstream demo_server <span class="token punctuation">{</span>
        server 192.168.101.4<span class="token punctuation">:</span>51320;
    <span class="token punctuation">}</span>
    upstream demo_server_dev <span class="token punctuation">{</span>
        server 192.168.101.4<span class="token punctuation">:</span>51321;
    <span class="token punctuation">}</span>
    upstream demo_server_test <span class="token punctuation">{</span>
        server 192.168.101.4<span class="token punctuation">:</span>51322;
    <span class="token punctuation">}</span>
    
    server <span class="token punctuation">{</span>
        listen       80;
        server_name  www.xxx.cn;
        charset utf<span class="token punctuation">-</span>8;
        access_log logs/host.access.log  mylog;
    
        location /demo/ <span class="token punctuation">{</span>
          <span class="token comment">##http://代理列表/自己的后台名称/;</span>
          proxy_pass http<span class="token punctuation">:</span>//demo_server/demo/;
        <span class="token punctuation">}</span>
        location /javacode<span class="token punctuation">-</span>template/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//javacode_util_server/javacode<span class="token punctuation">-</span>template/;
        <span class="token punctuation">}</span>
        location /javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>dev/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//javacode_util_dev_server/javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>dev/;
        <span class="token punctuation">}</span>
        location /javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>test/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//javacode_util_test_server/javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>test/;
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整真实案例" tabindex="-1"><a class="header-anchor" href="#完整真实案例" aria-hidden="true">#</a> 完整真实案例</h2><p>nginx\\conf\\nginx.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#user  nginx;</span>
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events <span class="token punctuation">{</span>
    worker_connections  1024;
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
 server_tokens off;
    include       /etc/nginx/mime.types;
    default_type  application/octet<span class="token punctuation">-</span>stream;
 
    <span class="token comment">## $time_iso8601、$time_local</span>
 log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_iso8601<span class="token punctuation">]</span> &quot;$request&quot; &#39;
       &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    log_format  mylog &#39;<span class="token punctuation">{</span><span class="token key atrule">&quot;date_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$year-$month-$day $hour:$minutes:$seconds&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;host&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_ip&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_id&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;url&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;referer&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request_time&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_time&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;status&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$status&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;size&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$body_bytes_sent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;info&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;x_forwarded_for&quot;<span class="token punctuation">:</span> &quot;$http_x_forwarded_for&quot;&#39;
                      &#39;<span class="token punctuation">}</span>&#39;;

 
    sendfile        on;
 <span class="token comment">#tcp_nopush     on;</span>
 keepalive_timeout  65;

 client_max_body_size 50m;
 client_body_buffer_size 256k;
 client_header_timeout 3m;
 client_body_timeout 3m;
 proxy_connect_timeout 300s;
 proxy_read_timeout 300s;
 proxy_send_timeout 300s;
 proxy_buffer_size 64k;
 proxy_buffers 4 32k;
 proxy_busy_buffers_size 64k;
 proxy_temp_file_write_size 64k;
 proxy_ignore_client_abort on;
 proxy_set_header Host $host;
 proxy_set_header X<span class="token punctuation">-</span>Forwarder<span class="token punctuation">-</span>For $remote_addr;

    gzip  on;
    include /etc/nginx/conf.d/<span class="token important">*.conf;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx\\conf.d\\javacode.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>upstream javacode_util_server <span class="token punctuation">{</span> 
    server 192.168.101.4<span class="token punctuation">:</span>51320;
<span class="token punctuation">}</span>
upstream javacode_util_dev_server <span class="token punctuation">{</span>
    server 192.168.101.4<span class="token punctuation">:</span>51321;
<span class="token punctuation">}</span>
upstream javacode_util_test_server <span class="token punctuation">{</span>
    server 192.168.101.4<span class="token punctuation">:</span>51322;
<span class="token punctuation">}</span>
upstream prod_api_server <span class="token punctuation">{</span>
    server 192.168.101.4<span class="token punctuation">:</span>8080;
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       80;
    server_name  www.javacode.cn;
    charset utf<span class="token punctuation">-</span>8;
    include /etc/nginx/conf.d/time.txt;
    access_log  /var/log/nginx/javacode.log  mylog; <span class="token comment"># buffer=32k;</span>

    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html/dist/;
        index index.html index.htm;
        <span class="token comment"># 解决vue去掉#部署刷新报错</span>
        try_files $uri $uri/ /index.html;
    <span class="token punctuation">}</span>
    location /prod<span class="token punctuation">-</span>api/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//prod_api_server/;
    <span class="token punctuation">}</span>

    location /javacode<span class="token punctuation">-</span>util/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//javacode_util_server/javacode<span class="token punctuation">-</span>util/;
    <span class="token punctuation">}</span>
    location /javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>dev/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//javacode_util_dev_server/javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>dev/;
    <span class="token punctuation">}</span>
    location /javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>test/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//javacode_util_test_server/javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>test/;
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    error_page   500 502 503 504  /50x.html;
    location = /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx\\conf.d\\time.txt</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>if ($time_iso8601 ~ &quot;^(\\d<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>)<span class="token punctuation">-</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)<span class="token punctuation">-</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)T(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)<span class="token punctuation">:</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)<span class="token punctuation">:</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)&quot;) <span class="token punctuation">{</span>
 set $year $1;
 set $month $2;
 set $day $3;
 set $hour $4;
 set $minutes $5;
 set $seconds $6;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx\\html</p><ul><li>50x.html</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>50x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 35em<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> Tahoma<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>An error occurred.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>500服务器异常!!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>404.html</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>404<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 35em<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> Tahoma<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>An error occurred.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>404，你的资源飞了！！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.html</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>ok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 35em<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> Tahoma<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>加载OK-666666666<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function z(S,E){const t=c("ExternalLinkIcon");return i(),l("div",null,[p(" more "),d,n("table",null,[r,n("tbody",null,[v,m,k,b,g,_,h,q,x,y,n("tr",null,[f,n("td",null,[s('"ApiPOST Runtime +'),n("a",$,[s("https://www.apipost.cn"),o(t)]),s('"'),w,s('"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0"')]),T])])]),j])}const H=e(u,[["render",z],["__file","nginx.html.vue"]]);export{H as default};
