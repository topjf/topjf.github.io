import{_ as s,X as t,Y as a,Z as o,$ as n,a0 as e,a2 as l,a1 as i,D as p}from"./framework-10d91a2c.js";const d={},c=n("h1",null,"centos(kernel)内核升级",-1),u=n("h2",{id:"升级内核、并删除当前无用的系统内核版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#升级内核、并删除当前无用的系统内核版本","aria-hidden":"true"},"#"),e(" 升级内核、并删除当前无用的系统内核版本")],-1),h={href:"https://kernel.org/",target:"_blank",rel:"noopener noreferrer"},v=n("th",null,"mainline:",-1),k=n("th",null,[n("strong",null,"5.18-rc6")],-1),b=n("th",null,"2022-05-08",-1),g={href:"https://git.kernel.org/torvalds/t/linux-5.18-rc6.tar.gz",target:"_blank",rel:"noopener noreferrer"},_=n("th",null,null,-1),m={href:"https://git.kernel.org/torvalds/p/v5.18-rc6/v5.17",target:"_blank",rel:"noopener noreferrer"},f={href:"https://git.kernel.org/torvalds/p/v5.18-rc6/v5.18-rc5",target:"_blank",rel:"noopener noreferrer"},x={href:"https://git.kernel.org/torvalds/ds/v5.18-rc6/v5.18-rc5",target:"_blank",rel:"noopener noreferrer"},w={href:"https://git.kernel.org/torvalds/h/v5.18-rc6",target:"_blank",rel:"noopener noreferrer"},z=n("th",null,null,-1),y=n("td",null,"stable:",-1),q=n("td",null,[n("strong",null,"5.17.6")],-1),L=n("td",null,"2022-05-09",-1),C={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.17.6.tar.xz",target:"_blank",rel:"noopener noreferrer"},E={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.17.6.tar.sign",target:"_blank",rel:"noopener noreferrer"},N={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/patch-5.17.6.xz",target:"_blank",rel:"noopener noreferrer"},V={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/incr/patch-5.17.5-6.xz",target:"_blank",rel:"noopener noreferrer"},$={href:"https://git.kernel.org/stable/ds/v5.17.6/v5.17.5",target:"_blank",rel:"noopener noreferrer"},B={href:"https://git.kernel.org/stable/h/v5.17.6",target:"_blank",rel:"noopener noreferrer"},G={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/ChangeLog-5.17.6",target:"_blank",rel:"noopener noreferrer"},I=n("td",null,"stable:",-1),K=n("td",null,[n("strong",null,"5.16.20 [EOL]")],-1),P=n("td",null,"2022-04-13",-1),Y={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.16.20.tar.xz",target:"_blank",rel:"noopener noreferrer"},D={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.16.20.tar.sign",target:"_blank",rel:"noopener noreferrer"},F={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/patch-5.16.20.xz",target:"_blank",rel:"noopener noreferrer"},M={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/incr/patch-5.16.19-20.xz",target:"_blank",rel:"noopener noreferrer"},O={href:"https://git.kernel.org/stable/ds/v5.16.20/v5.16.19",target:"_blank",rel:"noopener noreferrer"},R={href:"https://git.kernel.org/stable/h/v5.16.20",target:"_blank",rel:"noopener noreferrer"},S={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/ChangeLog-5.16.20",target:"_blank",rel:"noopener noreferrer"},T=n("td",null,"longterm:",-1),U=n("td",null,[n("strong",null,"5.15.38")],-1),X=n("td",null,"2022-05-09",-1),Z={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.15.38.tar.xz",target:"_blank",rel:"noopener noreferrer"},j={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.15.38.tar.sign",target:"_blank",rel:"noopener noreferrer"},A={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/patch-5.15.38.xz",target:"_blank",rel:"noopener noreferrer"},H={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/incr/patch-5.15.37-38.xz",target:"_blank",rel:"noopener noreferrer"},J={href:"https://git.kernel.org/stable/ds/v5.15.38/v5.15.37",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://git.kernel.org/stable/h/v5.15.38",target:"_blank",rel:"noopener noreferrer"},W={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/ChangeLog-5.15.38",target:"_blank",rel:"noopener noreferrer"},ee=n("td",null,"longterm:",-1),ne=n("td",null,[n("strong",null,"5.10.114")],-1),re=n("td",null,"2022-05-09",-1),le={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.10.114.tar.xz",target:"_blank",rel:"noopener noreferrer"},se={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.10.114.tar.sign",target:"_blank",rel:"noopener noreferrer"},te={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/patch-5.10.114.xz",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/incr/patch-5.10.113-114.xz",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://git.kernel.org/stable/ds/v5.10.114/v5.10.113",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://git.kernel.org/stable/h/v5.10.114",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/ChangeLog-5.10.114",target:"_blank",rel:"noopener noreferrer"},de=n("td",null,"longterm:",-1),ce=n("td",null,[n("strong",null,"5.4.192")],-1),ue=n("td",null,"2022-05-09",-1),he={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.4.192.tar.xz",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.4.192.tar.sign",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/patch-5.4.192.xz",target:"_blank",rel:"noopener noreferrer"},be={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/incr/patch-5.4.191-192.xz",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://git.kernel.org/stable/ds/v5.4.192/v5.4.191",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://git.kernel.org/stable/h/v5.4.192",target:"_blank",rel:"noopener noreferrer"},me={href:"https://cdn.kernel.org/pub/linux/kernel/v5.x/ChangeLog-5.4.192",target:"_blank",rel:"noopener noreferrer"},fe=n("h3",{id:"centos-内核升级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#centos-内核升级","aria-hidden":"true"},"#"),e(" centos 内核升级")],-1),xe={href:"http://www.elrepo.org/",target:"_blank",rel:"noopener noreferrer"},we=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 导入该源的秘钥</span>
<span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
<span class="token comment"># 启用该源仓库</span>
<span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> http://www.elrepo.org/elrepo-release-7.0-6.el7.elrepo.noarch.rpm
或者：
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看可升级的内核版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">--disablerepo</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span><span class="token string">&quot;elrepo-kernel&quot;</span> list available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>可安装的软件包</strong></p><p>kernel-lt.x86_64 5.4.211-1.el7.elrepo elrepo-kernel</p><p>kernel-ml.x86_64 5.19.4-1.el7.elrepo elrepo-kernel</p><p><strong>安装内核</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>elrepo-kernel <span class="token function">install</span> <span class="token parameter variable">-y</span> kernel-lt-5.4.211-1.el7.elrepo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看当前系统内可用内核</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> -F<span class="token punctuation">\\</span>&#39; <span class="token string">&#39;$1==&quot;menuentry &quot; {print i++ &quot; : &quot; $2}&#39;</span> /etc/grub2.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>设置开机从新内核版本启动（其中 0 是上面查询出来的可用内核编号）</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>grub2-set-default <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="并删除当前无用的系统内核版本" tabindex="-1"><a class="header-anchor" href="#并删除当前无用的系统内核版本" aria-hidden="true">#</a> 并删除当前无用的系统内核版本</h3><p><strong>所有已安装的内核版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep kernel</span>

kernel-tools-libs-3.10.0-1160.76.1.el7.x86_64
kernel-3.10.0-1160.76.1.el7.x86_64
kernel-headers-3.10.0-1160.76.1.el7.x86_64
kernel-devel-3.10.0-1160.el7.x86_64
kernel-tools-3.10.0-1160.76.1.el7.x86_64
kernel-devel-3.10.0-1160.76.1.el7.x86_64
kernel-lt-5.4.211-1.el7.elrepo.x86_64
kernel-3.10.0-1160.el7.x86_64
abrt-addon-kerneloops-2.1.11-60.el7.centos.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当前使用的内核版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># uname -r</span>
<span class="token number">5.4</span>.192-1.el7.elrepo.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token parameter variable">-y</span> kernel-3.10.0-1160.el7.x86_64 kernel-3.10.0-1160.76.1.el7.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token variable"><span class="token variable">$(</span><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> kernel <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token punctuation">$(</span>uname -r<span class="token punctuation">)</span><span class="token variable">)</span></span>

<span class="token comment"># 卸载后重新安装</span>
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>elrepo-kernel <span class="token function">install</span> <span class="token parameter variable">-y</span> kernel-lt-devel-5.4.211-1.el7.elrepo <span class="token punctuation">\\</span>
kernel-lt-doc-5.4.211-1.el7.elrepo <span class="token punctuation">\\</span>
kernel-lt-headers-5.4.211-1.el7.elrepo <span class="token punctuation">\\</span>
kernel-lt-tools-5.4.211-1.el7.elrepo <span class="token punctuation">\\</span>
kernel-lt-tools-libs-5.4.211-1.el7.elrepo <span class="token punctuation">\\</span>
kernel-lt-tools-libs-devel-5.4.211-1.el7.elrepo

<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep kernel</span>
kernel-lt-doc-5.4.211-1.el7.elrepo.noarch
kernel-lt-tools-5.4.211-1.el7.elrepo.x86_64
kernel-lt-devel-5.4.211-1.el7.elrepo.x86_64
kernel-lt-5.4.211-1.el7.elrepo.x86_64
kernel-lt-tools-libs-5.4.211-1.el7.elrepo.x86_64
kernel-lt-headers-5.4.211-1.el7.elrepo.x86_64
kernel-lt-tools-libs-devel-5.4.211-1.el7.elrepo.x86_64


yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc <span class="token function">make</span> ncurses-devel openssl-devel flex bison  elfutils-libelf-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function ze(ye,qe){const r=p("ExternalLinkIcon");return t(),a("div",null,[o(" more "),c,u,n("p",null,[n("a",h,[e("https://kernel.org/"),l(r)])]),n("table",null,[n("thead",null,[n("tr",null,[v,k,b,n("th",null,[e("["),n("a",g,[e("tarball"),l(r)]),e("]")]),_,n("th",null,[e("["),n("a",m,[e("patch"),l(r)]),e("]")]),n("th",null,[e("["),n("a",f,[e("inc. patch"),l(r)]),e("]")]),n("th",null,[e("["),n("a",x,[e("view diff"),l(r)]),e("]")]),n("th",null,[e("["),n("a",w,[e("browse"),l(r)]),e("]")]),z])]),n("tbody",null,[n("tr",null,[y,q,L,n("td",null,[e("["),n("a",C,[e("tarball"),l(r)]),e("]")]),n("td",null,[e("["),n("a",E,[e("pgp"),l(r)]),e("]")]),n("td",null,[e("["),n("a",N,[e("patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",V,[e("inc. patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",$,[e("view diff"),l(r)]),e("]")]),n("td",null,[e("["),n("a",B,[e("browse"),l(r)]),e("]")]),n("td",null,[e("["),n("a",G,[e("changelog"),l(r)]),e("]")])]),n("tr",null,[I,K,P,n("td",null,[e("["),n("a",Y,[e("tarball"),l(r)]),e("]")]),n("td",null,[e("["),n("a",D,[e("pgp"),l(r)]),e("]")]),n("td",null,[e("["),n("a",F,[e("patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",M,[e("inc. patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",O,[e("view diff"),l(r)]),e("]")]),n("td",null,[e("["),n("a",R,[e("browse"),l(r)]),e("]")]),n("td",null,[e("["),n("a",S,[e("changelog"),l(r)]),e("]")])]),n("tr",null,[T,U,X,n("td",null,[e("["),n("a",Z,[e("tarball"),l(r)]),e("]")]),n("td",null,[e("["),n("a",j,[e("pgp"),l(r)]),e("]")]),n("td",null,[e("["),n("a",A,[e("patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",H,[e("inc. patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",J,[e("view diff"),l(r)]),e("]")]),n("td",null,[e("["),n("a",Q,[e("browse"),l(r)]),e("]")]),n("td",null,[e("["),n("a",W,[e("changelog"),l(r)]),e("]")])]),n("tr",null,[ee,ne,re,n("td",null,[e("["),n("a",le,[e("tarball"),l(r)]),e("]")]),n("td",null,[e("["),n("a",se,[e("pgp"),l(r)]),e("]")]),n("td",null,[e("["),n("a",te,[e("patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",ae,[e("inc. patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",oe,[e("view diff"),l(r)]),e("]")]),n("td",null,[e("["),n("a",ie,[e("browse"),l(r)]),e("]")]),n("td",null,[e("["),n("a",pe,[e("changelog"),l(r)]),e("]")])]),n("tr",null,[de,ce,ue,n("td",null,[e("["),n("a",he,[e("tarball"),l(r)]),e("]")]),n("td",null,[e("["),n("a",ve,[e("pgp"),l(r)]),e("]")]),n("td",null,[e("["),n("a",ke,[e("patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",be,[e("inc. patch"),l(r)]),e("]")]),n("td",null,[e("["),n("a",ge,[e("view diff"),l(r)]),e("]")]),n("td",null,[e("["),n("a",_e,[e("browse"),l(r)]),e("]")]),n("td",null,[e("["),n("a",me,[e("changelog"),l(r)]),e("]")])])])]),fe,n("p",null,[n("a",xe,[e("http://www.elrepo.org/"),l(r)])]),we])}const Ce=s(d,[["render",ze],["__file","update-kernel.html.vue"]]);export{Ce as default};