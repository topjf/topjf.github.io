import{_ as a,X as i,Y as d,$ as s,a2 as l,a3 as t,a0 as n,a1 as r,D as c}from"./framework-10d91a2c.js";const o={},u=s("h3",{id:"tail-查看文件内容后10行",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tail-查看文件内容后10行","aria-hidden":"true"},"#"),n(" tail 查看文件内容后10行")],-1),m=r(`<p>①、命令名称：tail</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：查看文件内容后10行</p><p>⑥、语法：</p><p>tail 【选项】 【文件】</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># tail demo.txt</span>
34sdr23424sdfs1
34sdr23424sdfs2
34sdr23424sdfs3
34sdr23424sdfs4
34sdr23424sdfs5
34sdr23424sdfs6
34sdr23424sdfs7
34sdr23424sdfs8
34sdr23424sdfs9
34sdr23424sdfs10

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># tail -n 2 demo.txt</span>
34sdr23424sdfs9
34sdr23424sdfs10

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(p,b){const e=c("RouterLink");return i(),d("div",null,[u,s("ul",null,[s("li",null,[l(e,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:t(()=>[n("返回命令大全列表")]),_:1})])]),m])}const _=a(o,[["render",v],["__file","tail.html.vue"]]);export{_ as default};
