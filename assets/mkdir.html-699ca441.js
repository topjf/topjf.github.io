import{_ as e,X as o,Y as i,$ as n,a2 as t,a3 as c,a0 as s,a1 as d,D as p}from"./framework-10d91a2c.js";const l={},r=n("h3",{id:"mkdir-创建目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mkdir-创建目录","aria-hidden":"true"},"#"),s(" mkdir 创建目录")],-1),m=d(`<p>①、命令名称：mkdir</p><p>②、英文原意：make directories</p><p>③、命令所在路径：/bin/mkdir</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：创建新目录</p><p>⑥、语法： mkdir 【-p】【目录名】</p><blockquote><p><code>-p</code> 递归创建</p></blockquote><p><strong>例子：</strong></p><p><em>创建单个目录：</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin root<span class="token punctuation">]</span><span class="token comment"># mkdir data</span>
<span class="token punctuation">[</span>root@admin root<span class="token punctuation">]</span><span class="token comment"># ls</span>
data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>创建多个目录：</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin root<span class="token punctuation">]</span><span class="token comment"># mkdir -p {a,b}</span>
<span class="token punctuation">[</span>root@admin root<span class="token punctuation">]</span><span class="token comment"># ls</span>
a  b  data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><p>1、创建的目录已经存在, 那么 Linux 会提示我们 Linux 无法创建它。</p><p>2、不带任何参数运行 mkdir 命令会在当前目录下创建目录。</p><p>3、不带上<code>-p</code>,如果新建的文件上级目录不存在则不会执行成功这种说法是错误的。加或者不加上 -p 前面的目录没有得都会依次创建。</p><p>4、创建目录的首要条件是， 在想要创建目录的目标路径下你必须具有访问权限</p><ul><li><p>案例：</p><blockquote><p>进入<code>/</code>根目录，创建<code>c，e，d</code> 目录在 <code>home</code> 目录中，其中<code>e</code>中有文件夹 <code>software</code>，<code>d</code>中有文件夹 <code>program</code>，program中有文件夹名为 <code>demo.log</code> 的目录</p></blockquote></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin root<span class="token punctuation">]</span><span class="token comment"># cd /</span>
<span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># mkdir -p /home/{c,e/software,d/program/demo.log}</span>
<span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># cd home/</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># tree</span>
<span class="token builtin class-name">.</span>
├── c
├── d
│   └── program
│       └── demo.log
└── e
    └── software

<span class="token number">10</span> directories, <span class="token number">0</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function u(v,k){const a=p("RouterLink");return o(),i("div",null,[r,n("ul",null,[n("li",null,[t(a,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:c(()=>[s("返回命令大全列表")]),_:1})])]),m])}const h=e(l,[["render",u],["__file","mkdir.html.vue"]]);export{h as default};
