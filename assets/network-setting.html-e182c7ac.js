import{_ as s,X as a,Y as n,Z as e,a1 as t}from"./framework-10d91a2c.js";const i={},l=t(`<h1>centos网络网卡配置</h1><h2 id="一、设置本机静态ip" tabindex="-1"><a class="header-anchor" href="#一、设置本机静态ip" aria-hidden="true">#</a> 一、设置本机静态IP</h2><h3 id="_1、查看本机ip-ifconfig" tabindex="-1"><a class="header-anchor" href="#_1、查看本机ip-ifconfig" aria-hidden="true">#</a> 1、查看本机ip：ifconfig</h3><h3 id="_2、设置静态ip-配置文件" tabindex="-1"><a class="header-anchor" href="#_2、设置静态ip-配置文件" aria-hidden="true">#</a> 2、设置静态ip -&gt; 配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#网卡的目录:</span>
<span class="token comment">##centOS7的网卡</span>
<span class="token function">vim</span> /etc/sysconfig/network-scripts/ifcfg-ens33
<span class="token comment">##centOS6的网卡</span>
<span class="token function">vim</span> /etc/sysconfig/network-scripts/ifcfg-eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生产 UUID： uuidgen ens33</p><p>ls -l /dev/disk/by-uuid</p><p>查看 UUID： nmcli con | sed -n &#39;1,2p&#39;</p><p>BOOTPROTO：</p><blockquote><p>dhcp 表示使用动态IP，dhcp 动态IP地址是自行生成。</p><p>none 无（不指定）通常是DHCP</p><p>static 要自己自行指定IP地址</p><p>bootp</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;Ethernet&quot;</span>
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span><span class="token string">&quot;none&quot;</span>
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span><span class="token string">&quot;static&quot;</span>
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_PRIVACY</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span><span class="token string">&quot;stable-privacy&quot;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;ens33&quot;</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;ccb173d2-9470-4fc3-b894-cce7029f0455&quot;</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span><span class="token string">&quot;ens33&quot;</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">ETHTOOL_OPTS</span><span class="token operator">=</span><span class="token string">&quot;autoneg off speed 10000 duplex full&quot;</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token string">&quot;192.168.101.119&quot;</span>
<span class="token comment"># PREFIX=&quot;24&quot;</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token string">&quot;255.255.255.0&quot;</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token string">&quot;192.168.101.1&quot;</span>
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token string">&quot;192.168.1.1&quot;</span>
<span class="token assign-left variable">DNS2</span><span class="token operator">=</span><span class="token string">&quot;192.168.101.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;Ethernet&quot;</span>
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span><span class="token string">&quot;none&quot;</span>
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span><span class="token string">&quot;dhcp&quot;</span>
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span><span class="token string">&quot;stable-privacy&quot;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;ens33&quot;</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;5ed15a21-bf0f-4b2a-a40a-33a07afb6560&quot;</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span><span class="token string">&quot;ens33&quot;</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token string">&quot;192.168.100.130&quot;</span>
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token string">&quot;24&quot;</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token string">&quot;192.168.100.2&quot;</span>
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token string">&quot;192.168.100.2&quot;</span>
<span class="token assign-left variable">IPV6_PRIVACY</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span>none
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span>no
<span class="token comment">#设置为静态ＩＰ地址</span>
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>static
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_PRIVACY</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span>stable-privacy
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens33
<span class="token comment">#可以不配置</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>7f69ba6b-895a-4cfa-941d-77dcceaa4c4c
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>ens33
<span class="token comment">#设置为随开机生效</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token comment">#设置为IP地址,这个网段是由虚拟机的NAT模式的网关的决定</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、配置-vim-etc-hosts-映射关系" tabindex="-1"><a class="header-anchor" href="#_3、配置-vim-etc-hosts-映射关系" aria-hidden="true">#</a> 3、配置 vim /etc/hosts 映射关系</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//添加ip+主机名
<span class="token number">127.0</span>.0.1  localhost localhost.localdomain localhost4 localhost4.localdomain4
::1     localhost localhost.localdomain localhost6 localhost6.localdomain6
<span class="token number">192.168</span>.100.130 yu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、重新启动网络服务" tabindex="-1"><a class="header-anchor" href="#_4、重新启动网络服务" aria-hidden="true">#</a> 4、重新启动网络服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//网络命令
system network start //启动网络服务
system network stop //停止网络服务
system network restart  //重启网络服务
system network status   //查看网络服务状态
systemctl restart network.service //重启网络服务，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>system与systemctl的区别：</strong> system：centos6之前使用 systemctl：centos7之后出现的，centos7也可以使用system，兼容低版本</p><h3 id="_5、ip配置成功" tabindex="-1"><a class="header-anchor" href="#_5、ip配置成功" aria-hidden="true">#</a> 5、ip配置成功</h3><h3 id="_6、ping-ctrl-z-退出" tabindex="-1"><a class="header-anchor" href="#_6、ping-ctrl-z-退出" aria-hidden="true">#</a> 6、ping：ctrl+z 退出</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ping</span> 语法
<span class="token parameter variable">-c</span>  <span class="token comment"># 设定ping的次数，如果没有设定默认会一直ping下去直到按 Ctrl + C 结束</span>
<span class="token parameter variable">-f</span>  <span class="token comment"># 洪水ping，也就是以最快的速度去ping，可以用来测试丢包率</span>
<span class="token parameter variable">-i</span>  <span class="token comment"># 设定ping的时间间隔，如 ping -i 0.5 www.baidu.com 表示每隔0.5秒ping一次，如果没</span>
有设置默认是一秒一次
<span class="token parameter variable">-s</span>  <span class="token comment"># 设置发送的数据包的大小，默认发送56字节，最大只能设置为65507字节</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、wind映射linux主机" tabindex="-1"><a class="header-anchor" href="#二、wind映射linux主机" aria-hidden="true">#</a> 二、wind映射Linux主机</h2><p><code>C:\\Windows\\System32\\drivers\\etc</code></p>`,23);function o(p,r){return a(),n("div",null,[e(" more "),l])}const d=s(i,[["render",o],["__file","network-setting.html.vue"]]);export{d as default};
