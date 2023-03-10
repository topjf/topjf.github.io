import{_ as i,X as a,Y as s,$ as e,a2 as o,a3 as l,a0 as n,a1 as t,D as m}from"./framework-10d91a2c.js";const r={},c=e("h3",{id:"mv-剪切文件或目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mv-剪切文件或目录","aria-hidden":"true"},"#"),n(" mv 剪切文件或目录")],-1),v=t(`<p>①、命令名称：mv</p><p>②、英文原意：move</p><p>③、命令所在路径：/bin/mv</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：剪切文件、改名</p><p>⑥、语法： mv【原文件或目录】【目标目录】</p><p><strong>案例：</strong></p><p>在/tmp目录下，创建一个文件夹d，d目录中创建一个文件b.log，进入/，将/tmp 中的d文件夹中的所有内容包含d目录本身剪切到/home目录下</p><div class="language-shell&#39; line-numbers-mode" data-ext="shell&#39;"><pre class="language-shell&#39;"><code>[root@admin /]# cd /tmp/
[root@admin tmp]# mkdir d
[root@admin tmp]# touch ./d/b.log
[root@admin tmp]# cd /
[root@admin /]# mv /tmp/d /home/
[root@admin /]# ls /home/
d
[root@admin /]# ls /home/d/
b.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function p(u,h){const d=m("RouterLink");return a(),s("div",null,[c,e("ul",null,[e("li",null,[o(d,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:l(()=>[n("返回命令大全列表")]),_:1})])]),v])}const b=i(r,[["render",p],["__file","mv.html.vue"]]);export{b as default};
