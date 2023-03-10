import{_ as e,X as t,Y as i,$ as n,a2 as p,a3 as l,a0 as s,a1 as o,D as c}from"./framework-10d91a2c.js";const r={},u=n("h3",{id:"split-文件切割",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#split-文件切割","aria-hidden":"true"},"#"),s(" split 文件切割")],-1),d=o(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：在 Linux 系统下使用 split 命令进行大文件切割很方便</p><p>⑥、语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-a: <span class="token comment">#指定输出文件名的后缀长度(默认为2个:aa,ab...)</span>
-d: <span class="token comment">#指定输出文件名的后缀用数字代替</span>
-l: <span class="token comment">#行数分割模式(指定每多少行切成一个小文件;默认行数是1000行)</span>
-b: <span class="token comment">#二进制分割模式(支持单位:k/m)</span>
-C: <span class="token comment">#文件大小分割模式(切割时尽量维持每行的完整性)</span>

<span class="token function">split</span> <span class="token punctuation">[</span>-a<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d<span class="token punctuation">]</span> <span class="token punctuation">[</span>-l <span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-b <span class="token operator">&lt;</span>字节<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-C <span class="token operator">&lt;</span>字节<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>要切割的文件<span class="token punctuation">]</span> <span class="token punctuation">[</span>输出文件名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑦、使用实例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 行切割文件</span>
$ <span class="token function">split</span> <span class="token parameter variable">-l</span> <span class="token number">300000</span> users.sql /data/users_

<span class="token comment"># 使用数字后缀</span>
$ <span class="token function">split</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-l</span> <span class="token number">300000</span> users.sql /data/users_

<span class="token comment"># 按字节大小分割</span>
$ <span class="token function">split</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-b</span> 100m users.sql /data/users_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⑧、帮助信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 帮助信息</span>
$ <span class="token function">split</span> <span class="token parameter variable">--help</span>
Usage: <span class="token function">split</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE <span class="token punctuation">[</span>PREFIX<span class="token punctuation">]</span><span class="token punctuation">]</span>
Output pieces of FILE to PREFIXaa, PREFIXab, <span class="token punctuation">..</span>.<span class="token punctuation">;</span>
default size is <span class="token number">1000</span> lines, and default PREFIX is <span class="token string">&#39;x&#39;</span><span class="token builtin class-name">.</span>

With no FILE, or when FILE is -, <span class="token builtin class-name">read</span> standard input.

Mandatory arguments to long options are mandatory <span class="token keyword">for</span> short options too.
  -a, --suffix-length<span class="token operator">=</span>N   generate suffixes of length N <span class="token punctuation">(</span>default <span class="token number">2</span><span class="token punctuation">)</span>            后缀名称的长度<span class="token punctuation">(</span>默认为2<span class="token punctuation">)</span>
      --additional-suffix<span class="token operator">=</span>SUFFIX  append an additional SUFFIX to <span class="token function">file</span> names
  -b, <span class="token parameter variable">--bytes</span><span class="token operator">=</span>SIZE        put SIZE bytes per output <span class="token function">file</span>                       每个输出文件的字节大小
  -C, --line-bytes<span class="token operator">=</span>SIZE   put at <span class="token function">most</span> SIZE bytes of records per output <span class="token function">file</span>    每个输出文件的最大字节大小
  <span class="token parameter variable">-d</span>                      use numeric suffixes starting at <span class="token number">0</span>, not alphabetic   使用数字后缀代替字母后缀
      --numeric-suffixes<span class="token punctuation">[</span><span class="token operator">=</span>FROM<span class="token punctuation">]</span>  same as -d, but allow setting the start value
  -e, --elide-empty-files  <span class="token keyword">do</span> not generate empty output files with <span class="token string">&#39;-n&#39;</span>        不产生空的输出文件
      <span class="token parameter variable">--filter</span><span class="token operator">=</span>COMMAND    <span class="token function">write</span> to shell COMMAND<span class="token punctuation">;</span> <span class="token function">file</span> name is <span class="token variable">$FILE</span>           写入到shell命令行
  -l, <span class="token parameter variable">--lines</span><span class="token operator">=</span>NUMBER      put NUMBER lines/records per output <span class="token function">file</span>             设定每个输出文件的行数
  -n, <span class="token parameter variable">--number</span><span class="token operator">=</span>CHUNKS     generate CHUNKS output files<span class="token punctuation">;</span> see explanation below  产生chunks文件
  -t, <span class="token parameter variable">--separator</span><span class="token operator">=</span>SEP     use SEP instead of newline as the record separator<span class="token punctuation">;</span>  使用新字符分割
                            <span class="token string">&#39;\\0&#39;</span> <span class="token punctuation">(</span>zero<span class="token punctuation">)</span> specifies the NUL character
  -u, <span class="token parameter variable">--unbuffered</span>        immediately copy input to output with <span class="token string">&#39;-n r/...&#39;</span>     无需缓存
      <span class="token parameter variable">--verbose</span>           print a diagnostic just before each                  显示分割进度
                            output <span class="token function">file</span> is opened
      <span class="token parameter variable">--help</span>     display this <span class="token builtin class-name">help</span> and <span class="token builtin class-name">exit</span>                                    显示帮助信息
      <span class="token parameter variable">--version</span>  output version information and <span class="token builtin class-name">exit</span>                           显示版本信息

The SIZE argument is an integer and optional unit <span class="token punctuation">(</span>example: 10K is <span class="token number">10</span>*1024<span class="token punctuation">)</span>.
Units are K,M,G,T,P,E,Z,Y <span class="token punctuation">(</span>powers of <span class="token number">1024</span><span class="token punctuation">)</span> or KB,MB,<span class="token punctuation">..</span>. <span class="token punctuation">(</span>powers of <span class="token number">1000</span><span class="token punctuation">)</span>.

CHUNKS may be:
  N       <span class="token function">split</span> into N files based on size of input
  K/N     output Kth of N to stdout
  l/N     <span class="token function">split</span> into N files without splitting lines/records
  l/K/N   output Kth of N to stdout without splitting lines/records
  r/N     like <span class="token string">&#39;l&#39;</span> but use round robin distribution
  r/K/N   likewise but only output Kth of N to stdout

GNU coreutils online help: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/<span class="token operator">&gt;</span>
Full documentation at: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/split<span class="token operator">&gt;</span>
or available locally via: info <span class="token string">&#39;(coreutils) split invocation&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function v(m,k){const a=c("RouterLink");return t(),i("div",null,[u,n("ul",null,[n("li",null,[p(a,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:l(()=>[s("返回命令大全列表")]),_:1})])]),d])}const f=e(r,[["render",v],["__file","split.html.vue"]]);export{f as default};
