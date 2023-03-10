import{_ as a,X as i,Y as d,$ as s,a2 as l,a3 as t,a0 as e,a1 as c,D as o}from"./framework-10d91a2c.js";const r={},u=s("h3",{id:"head-查看文件内容",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#head-查看文件内容","aria-hidden":"true"},"#"),e(" head 查看文件内容")],-1),p=c(`<p>①、命令名称：head</p><p>②、英文原意：</p><p>③、命令所在路径：/usr/bin/head</p><p>④、执行权限：所有用户</p><p>⑤、功能描述： 查看文件内容，通常查看文件前10行</p><p>⑥、语法</p><p>head 【选项】 【文件】</p><ul><li>-c, --bytes=[-]K 显示每个文件的前 K 字节内容，如果附加&quot;-&quot;参数，则除了每个文件的最后 K 字节数据外显示剩余全部内容；</li><li>-n, --lines=[-]K 显示每个文件的前 K 行内容，如果附加&quot;-&quot;参数，则除了每个文件的最后 K 行外显示剩余全部内容</li><li>-q, --quiet, --silent 不显示包含给定文件名的文件头</li><li>-v, --verbose 总是显示包含给定文件名的文件头</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># head demo.txt</span>
sdfsdfsdf

<span class="token number">1354354</span>

34sdr23424sdfs

34sdr23424sdfs
34sdr23424sdfs
34sdr23424sdfs
34sdr23424sdfs
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># head -3 demo.txt</span>
sdfsdfsdf

<span class="token number">1354354</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(v,h){const n=o("RouterLink");return i(),d("div",null,[u,s("ul",null,[s("li",null,[l(n,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:t(()=>[e("返回命令大全列表")]),_:1})])]),p])}const f=a(r,[["render",m],["__file","head.html.vue"]]);export{f as default};
