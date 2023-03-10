import{_ as e,X as p,Y as t,$ as n,a2 as l,a3 as i,a0 as s,a1 as o,D as c}from"./framework-10d91a2c.js";const r={},u=n("h3",{id:"fdisk-磁盘分区表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fdisk-磁盘分区表","aria-hidden":"true"},"#"),s(" fdisk 磁盘分区表")],-1),d=o(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：</p><p>⑥、语法：</p><p>fdisk 是 Linux 的磁盘分区表操作工具。</p><p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">fdisk</span> <span class="token punctuation">[</span>-l<span class="token punctuation">]</span> 装置名称
<span class="token function">fdisk</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>磁盘<span class="token operator">&gt;</span>    更改分区表
<span class="token function">fdisk</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token parameter variable">-l</span> <span class="token operator">&lt;</span>磁盘<span class="token operator">&gt;</span> 列出分区表
<span class="token function">fdisk</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>分区<span class="token operator">&gt;</span>        给出分区大小<span class="token punctuation">(</span>块数<span class="token punctuation">)</span>
选项：
 <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>大小<span class="token operator">&gt;</span>             扇区大小<span class="token punctuation">(</span><span class="token number">512</span>、1024、2048或4096<span class="token punctuation">)</span>
 -c<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>模式<span class="token operator">&gt;</span><span class="token punctuation">]</span>           兼容模式：“dos”或“nondos”<span class="token punctuation">(</span>默认<span class="token punctuation">)</span>
 <span class="token parameter variable">-h</span>                    打印此帮助文本
 -u<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&lt;</span>单位<span class="token operator">&gt;</span><span class="token punctuation">]</span>           显示单位：“cylinders”<span class="token punctuation">(</span>柱面<span class="token punctuation">)</span>或“sectors”<span class="token punctuation">(</span>扇区，默认<span class="token punctuation">)</span>
 <span class="token parameter variable">-v</span>                    打印程序版本
 <span class="token parameter variable">-C</span> <span class="token operator">&lt;</span>数字<span class="token operator">&gt;</span>             指定柱面数
 <span class="token parameter variable">-H</span> <span class="token operator">&lt;</span>数字<span class="token operator">&gt;</span>             指定磁头数
 <span class="token parameter variable">-S</span> <span class="token operator">&lt;</span>数字<span class="token operator">&gt;</span>             指定每个磁道的扇区数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-l ：输出后面接的装置所有的分区内容。若仅有 fdisk -l 时，则系统将会把整个系统内能够搜寻到的装置的分区均列出来。</li></ul><p><strong>实例 1</strong></p><p>列出所有分区信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># fdisk -l</span>

磁盘 /dev/sda：193.3 GB, <span class="token number">193273528320</span> 字节，377487360 个扇区
Units <span class="token operator">=</span> 扇区 of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
扇区大小<span class="token punctuation">(</span>逻辑/物理<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
I/O 大小<span class="token punctuation">(</span>最小/最佳<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
磁盘标签类型：dos
磁盘标识符：0x000ab2a1

   设备 Boot      Start         End      Blocks   Id  System
/dev/sda1   *        <span class="token number">2048</span>     <span class="token number">2099199</span>     <span class="token number">1048576</span>   <span class="token number">83</span>  Linux
/dev/sda2         <span class="token number">2099200</span>   <span class="token number">377487359</span>   <span class="token number">187694080</span>   8e  Linux LVM

磁盘 /dev/mapper/centos-root：85.9 GB, <span class="token number">85899345920</span> 字节，167772160 个扇区
Units <span class="token operator">=</span> 扇区 of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
扇区大小<span class="token punctuation">(</span>逻辑/物理<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
I/O 大小<span class="token punctuation">(</span>最小/最佳<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节


磁盘 /dev/mapper/centos-swap：8455 MB, <span class="token number">8455716864</span> 字节，16515072 个扇区
Units <span class="token operator">=</span> 扇区 of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
扇区大小<span class="token punctuation">(</span>逻辑/物理<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
I/O 大小<span class="token punctuation">(</span>最小/最佳<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节


磁盘 /dev/mapper/centos-home：97.8 GB, <span class="token number">97836335104</span> 字节，191086592 个扇区
Units <span class="token operator">=</span> 扇区 of <span class="token number">1</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">512</span> bytes
扇区大小<span class="token punctuation">(</span>逻辑/物理<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
I/O 大小<span class="token punctuation">(</span>最小/最佳<span class="token punctuation">)</span>：512 字节 / <span class="token number">512</span> 字节
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实例 2</strong></p><p>找出你系统中的根目录所在磁盘，并查阅该硬盘内的相关信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># df /</span>
文件系统                   1K-块    已用     可用 已用% 挂载点
/dev/mapper/centos-root <span class="token number">83845120</span> <span class="token number">7093716</span> <span class="token number">76751404</span>    <span class="token number">9</span>% /
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># fdisk /dev/mapper/centos-root</span>
欢迎使用 <span class="token function">fdisk</span> <span class="token punctuation">(</span>util-linux <span class="token number">2.23</span>.2<span class="token punctuation">)</span>。

更改将停留在内存中，直到您决定将更改写入磁盘。
使用写入命令前请三思。

Device does not contain a recognized partition table
使用磁盘标识符 0x49e1bab1 创建新的 DOS 磁盘标签。

命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：    <span class="token operator">&lt;=</span><span class="token operator">=</span>等待你的输入！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>命令操作</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令<span class="token punctuation">(</span>输入 m 获取帮助<span class="token punctuation">)</span>：m   <span class="token operator">&lt;=</span><span class="token operator">=</span> 输入 m 后，就会看到底下这些命令介绍
命令操作
    a 切换可引导标志
    b 编辑bsd磁盘标签
    c 切换dos兼容性标志
    d 删除分区
    g 创建一个新的空GPT分区表
    G 创建IRIX（SGI）分区表
    l 已知分区类型列表
    m 打印此菜单
    n 添加新分区
    o 创建一个新的空DOS分区表
    p 打印分区表
    q 退出而不保存更改
    s 创建一个新的空Sun磁盘标签
    t 更改分区的系统id
    u 更改显示/输入单位
    <span class="token function">v</span> 验证分区表
    w 将表写入磁盘并退出
    x 额外功能（仅限专家）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>离开 fdisk 时按下 <code>q</code>，那么所有的动作都不会生效！相反的， 按下<code>w</code>就是动作生效的意思。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p  <span class="token operator">&lt;=</span><span class="token operator">=</span> 这里可以输出目前磁盘的状态

Disk /dev/hdc: <span class="token number">41.1</span> GB, <span class="token number">41174138880</span> bytes        <span class="token operator">&lt;=</span><span class="token operator">=</span>这个磁盘的文件名与容量
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">5005</span> cylinders      <span class="token operator">&lt;=</span><span class="token operator">=</span>磁头、扇区与磁柱大小
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes <span class="token operator">&lt;=</span><span class="token operator">=</span>每个磁柱的大小

   Device Boot      Start         End      Blocks   Id  System
/dev/hdc1   *           <span class="token number">1</span>          <span class="token number">13</span>      <span class="token number">104391</span>   <span class="token number">83</span>  Linux
/dev/hdc2              <span class="token number">14</span>        <span class="token number">1288</span>    <span class="token number">10241437</span>+  <span class="token number">83</span>  Linux
/dev/hdc3            <span class="token number">1289</span>        <span class="token number">1925</span>     <span class="token number">5116702</span>+  <span class="token number">83</span>  Linux
/dev/hdc4            <span class="token number">1926</span>        <span class="token number">5005</span>    <span class="token number">24740100</span>    <span class="token number">5</span>  Extended
/dev/hdc5            <span class="token number">1926</span>        <span class="token number">2052</span>     <span class="token number">1020096</span>   <span class="token number">82</span>  Linux swap / Solaris
<span class="token comment"># 装置文件名 启动区否 开始磁柱    结束磁柱  1K大小容量 磁盘分区槽内的系统</span>

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想要不储存离开吗？按下 q 就对了！不要随便按 w 啊！</p><p>使用 <code>p</code> 可以列出目前这颗磁盘的分割表信息，这个信息的上半部在显示整体磁盘的状态。</p>`,23);function v(m,k){const a=c("RouterLink");return p(),t("div",null,[u,n("ul",null,[n("li",null,[l(a,{to:"/linux/basis/command.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86"},{default:i(()=>[s("返回命令大全列表")]),_:1})])]),d])}const h=e(r,[["render",v],["__file","fdisk.html.vue"]]);export{h as default};
