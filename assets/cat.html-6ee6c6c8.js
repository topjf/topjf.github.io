import{_ as e,X as i,Y as t,$ as n,a2 as l,a3 as c,a0 as s,a1 as p,D as o}from"./framework-10d91a2c.js";const d={},r=n("h3",{id:"cat-显示较少内容",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cat-显示较少内容","aria-hidden":"true"},"#"),s(" cat 显示较少内容")],-1),u=p(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：在 Linux 系统下使用 cat 命令进行多个小文件的合并也很方便</p><p>⑥、语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span>

-b: <span class="token comment">#空行不计入行号的统计</span>
-n: <span class="token comment">#显示行号</span>
-e: <span class="token comment">#以$字符作为每行的结尾</span>
-t: <span class="token comment">#显示TAB字符(^I),禁用制表符</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑦、使用实例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 合并文件</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat /data/users_* &gt; users.sql</span>

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat demo.txt</span>
sdfsdfsdf

<span class="token number">1354354</span>

34sdr23424sdfs

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat -n demo.txt</span>
     <span class="token number">1</span>  sdfsdfsdf
     <span class="token number">2</span>
     <span class="token number">3</span>  <span class="token number">1354354</span>
     <span class="token number">4</span>
     <span class="token number">5</span>  34sdr23424sdfs
     <span class="token number">6</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat -b demo.txt</span>
     <span class="token number">1</span>  sdfsdfsdf

     <span class="token number">2</span>  <span class="token number">1354354</span>

     <span class="token number">3</span>  34sdr23424sdfs

<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># cat -T demo.txt</span>
sdfsdfsdf

<span class="token number">1354354</span>

34sdr23424sdfs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 替换全部内容</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /home/test/k8s.conf</span>
vm.swappiness=0
EOF</span>

<span class="token comment"># 追加内容</span>
<span class="token function">cat</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> /home/test/k8s.conf</span>
vm.swappiness=0
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑧、帮助信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 帮助信息</span>
$ <span class="token function">cat</span> <span class="token parameter variable">--h</span>
Usage: <span class="token function">cat</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
Concatenate FILE<span class="token punctuation">(</span>s<span class="token punctuation">)</span> to standard output.

With no FILE, or when FILE is -, <span class="token builtin class-name">read</span> standard input.

  -A, --show-all           equivalent to <span class="token parameter variable">-vET</span>
  -b, --number-nonblank    number nonempty output lines, overrides <span class="token parameter variable">-n</span>
  <span class="token parameter variable">-e</span>                       equivalent to <span class="token parameter variable">-vE</span>
  -E, --show-ends          display $ at end of each line
  -n, <span class="token parameter variable">--number</span>             number all output lines
  -s, --squeeze-blank      suppress repeated empty output lines
  <span class="token parameter variable">-t</span>                       equivalent to <span class="token parameter variable">-vT</span>
  -T, --show-tabs          display TAB characters as ^I
  <span class="token parameter variable">-u</span>                       <span class="token punctuation">(</span>ignored<span class="token punctuation">)</span>
  -v, --show-nonprinting   use ^ and M- notation, except <span class="token keyword">for</span> LFD and TAB
      <span class="token parameter variable">--help</span>     display this <span class="token builtin class-name">help</span> and <span class="token builtin class-name">exit</span>
      <span class="token parameter variable">--version</span>  output version information and <span class="token builtin class-name">exit</span>

Examples:
  <span class="token function">cat</span> f - g  Output f<span class="token string">&#39;s contents, then standard input, then g&#39;</span>s contents.
  <span class="token function">cat</span>        Copy standard input to standard output.

GNU coreutils online help: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/<span class="token operator">&gt;</span>
Full documentation at: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/cat<span class="token operator">&gt;</span>
or available locally via: info <span class="token string">&#39;(coreutils) cat invocation&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function v(m,b){const a=o("RouterLink");return i(),t("div",null,[r,n("ul",null,[n("li",null,[l(a,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:c(()=>[s("返回命令大全列表")]),_:1})])]),u])}const h=e(d,[["render",v],["__file","cat.html.vue"]]);export{h as default};
