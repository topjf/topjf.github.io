import{_ as c,X as o,Y as r,Z as d,$ as n,a0 as s,a2 as a,a3 as t,a1 as i,D as p}from"./framework-10d91a2c.js";const u="/assets/true-image-20220914104641154-9a416f26.png",v="/assets/true-image-20220914105143147-4af593d9.png",m="/assets/true-image-20220914105525933-49edb6b6.png",b="/assets/true-image-20220914120636967-e2434f64.png",k="/assets/true-image-20220919164800283-e64f57eb.png",h={},g=n("h1",null,"Shell 脚本编程",-1),f=n("h2",{id:"基础认识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础认识","aria-hidden":"true"},"#"),s(" 基础认识")],-1),q=n("h3",{id:"终端仿真器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#终端仿真器","aria-hidden":"true"},"#"),s(" 终端仿真器")],-1),x={href:"https://help.gnome.org/users/gnome-terminal/stable",target:"_blank",rel:"noopener noreferrer"},w={href:"http://konsole.kde.org",target:"_blank",rel:"noopener noreferrer"},y={href:"http://www.eterm.org",target:"_blank",rel:"noopener noreferrer"},$={href:"http://finalterm.org",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/Guake/guake",target:"_blank",rel:"noopener noreferrer"},I={href:"http://lilyterm.luna.com.tw/index.html",target:"_blank",rel:"noopener noreferrer"},S={href:"http://wiki.lxde.org/en/LXTerminal",target:"_blank",rel:"noopener noreferrer"},E={href:"https://code.google.com/p/mrxvt",target:"_blank",rel:"noopener noreferrer"},N={href:"http://roxterm.sourceforge.net",target:"_blank",rel:"noopener noreferrer"},_={href:"https://launchpad.net/terminator",target:"_blank",rel:"noopener noreferrer"},R={href:"http://www.enlightenment.org/p.php?p=about/terminology",target:"_blank",rel:"noopener noreferrer"},D={href:"http://manpages.ubuntu.com/manpages/gutsy/man1/uxterm.1.html",target:"_blank",rel:"noopener noreferrer"},A={href:"http://sourceforge.net/projects/wterm",target:"_blank",rel:"noopener noreferrer"},O={href:"http://invisible-island.net/xterm",target:"_blank",rel:"noopener noreferrer"},L=i(`<h3 id="shell-类型" tabindex="-1"><a class="header-anchor" href="#shell-类型" aria-hidden="true">#</a> shell 类型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/bash /bin/sh  /bin/tcsh
/bin/dash /bin/csh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-的父子关系-bash" tabindex="-1"><a class="header-anchor" href="#shell-的父子关系-bash" aria-hidden="true">#</a> shell 的父子关系-bash</h3><h4 id="_1、bash进程" tabindex="-1"><a class="header-anchor" href="#_1、bash进程" aria-hidden="true">#</a> 1、bash进程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12459</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">12661</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入命令 bash 之后，一个子shell就出现了。第二个 ps -f 是在子shell中执行的。可以从显示结果中看到有两个bash shell程序在运行。第一个bash shell程序，也就是父shell进程，其原始进程ID是 <em>1490</em> 。第二个bash shell程序，即子shell进程，其PID是 <em>12590</em>。注意，子shell的父进程ID（<code>PPID</code>）是 <em>1490</em> ，指明了这个父shell进程就是该子shell的父进程</p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在生成子shell进程时，只有部分父进程的环境被复制到子shell环境中。这会对包括变量在内的一些东西造成影响。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">14253</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:37 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18655</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18679</span>  <span class="token number">18655</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">19698</span>  <span class="token number">18679</span>  <span class="token number">0</span> <span class="token number">10</span>:50 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps --forest</span>
   PID TTY          TIME CMD
  <span class="token number">1490</span> pts/0    00:00:00 <span class="token function">bash</span>
 <span class="token number">12590</span> pts/0    00:00:00  <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18624</span> pts/0    00:00:00      <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18655</span> pts/0    00:00:00          <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18679</span> pts/0    00:00:00              <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18730</span> pts/0    00:00:00                  <span class="token punctuation">\\</span>_ <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bash 命令被输入了三次。这实际上创建了三个子shell。 <code>ps -forest</code> 命令展示了这些子shell间的嵌套结构。</p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>参数</strong></p><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="退出子进程" tabindex="-1"><a class="header-anchor" href="#退出子进程" aria-hidden="true">#</a> 退出子进程</h4><p>exit</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18655</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18679</span>  <span class="token number">18655</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">21975</span>  <span class="token number">18679</span>  <span class="token number">0</span> <span class="token number">10</span>:56 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">22071</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">10</span>:56 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、进程列表" tabindex="-1"><a class="header-anchor" href="#_2、进程列表" aria-hidden="true">#</a> 2、进程列表</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls)</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的第一个例子中，所有的命令依次执行，不存在任何问题。不过这并不是进程列表。</p><p>命令列表要想成为进程列表，这些命令必须包含在括号里。括号的加入使命令列表变成了进程列表，生成了一个子shell来执行对应的命令。</p><p>要想知道是否生成了子shell，得借助一个使用了环境变量的命令。这个命令就是 echo $BASH_SUBSHELL；<strong>如果该命令返回 0 ，就表明没有子shell。如果返回 1 或者其他更大的数字，就表明存在子shell</strong>。如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; echo $BASH_SUBSHELL</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">0</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; echo $BASH_SUBSHELL)</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你甚至可以在命令列表中嵌套括号来创建子shell的子shell。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; (echo $BASH_SUBSHELL))</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">2</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (pwd ; ls ; cd /etc ; pwd ; cd ; pwd ; ls ; (echo $BASH_SUBSHELL))</span>
/root
anaconda-ks.cfg  df.sh  first.sh
/etc
/root
anaconda-ks.cfg  df.sh  first.sh
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、后台模式" tabindex="-1"><a class="header-anchor" href="#_3、后台模式" aria-hidden="true">#</a> 3、后台模式</h4><p><code>sleep</code> 命令会在后台（ <code>&amp;</code> ）睡眠30秒。当它被置入后台。</p><p>使用 <code>jobs</code> 命令来显示后台作业信息。 jobs 命令可以显示出当前运行在后台模式中的所有用户的进程（作业）。使用<code>-l</code> 来显示进程的 PID。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#  sleep 30&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">35051</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">12590</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">10</span>:33 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">18624</span>  <span class="token number">12590</span>  <span class="token number">0</span> <span class="token number">10</span>:48 pts/0    00:00:00 <span class="token function">bash</span>
root      <span class="token number">35051</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">11</span>:28 pts/0    00:00:00 <span class="token function">sleep</span> <span class="token number">30</span>
root      <span class="token number">35093</span>  <span class="token number">18624</span>  <span class="token number">0</span> <span class="token number">11</span>:28 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  运行中               <span class="token function">sleep</span> <span class="token number">30</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># jobs -l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">35051</span> 运行中               <span class="token function">sleep</span> <span class="token number">30</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># jobs -l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">35051</span> 完成                  <span class="token function">sleep</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需要提醒的是：后台作业的结束状态可未必会一直等待到合适的时候才现身。当作业结束状态突然出现在屏幕上的时候，你可别吃惊啊。</p></blockquote><h4 id="_4、将进程列表置入后台" tabindex="-1"><a class="header-anchor" href="#_4、将进程列表置入后台" aria-hidden="true">#</a> 4、将进程列表置入后台</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (sleep 2 ; echo $BASH_SUBSHELL ; sleep 2)</span>
<span class="token number">1</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (sleep 2 ; echo $BASH_SUBSHELL ; sleep 2)&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">39128</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># 1  &lt;=== 按回车</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  完成                  <span class="token punctuation">(</span> <span class="token function">sleep</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$BASH_SUBSHELL</span><span class="token punctuation">;</span> <span class="token function">sleep</span> <span class="token number">2</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把进程列表置入后台会产生一个作业号和进程ID，然后返回到提示符。不过奇怪的是表明单一级子shell的数字 1 显示在了提示符的旁边！不要不知所措，只需要按一下回车键，就会得到另一个提示符。</p><p>在CLI中运用子shell的创造性方法之一就是将进程列表置入后台模式。你既可以在子shell中进行繁重的处理工作，同时也不会让子shell的I/O受制于终端。</p><p>当然了， sleep 和 echo 命令的进程列表只是作为一个示例而已。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># (tar -cf user1.tar /home/user1 ; tar -cf df.log.tar /home/df.log)&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">2423</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg  df.log.tar user1.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、协程-coproc" tabindex="-1"><a class="header-anchor" href="#_5、协程-coproc" aria-hidden="true">#</a> 5、协程 coproc</h4><p>协程可以同时做两件事。它在后台生成一个子shell，并在这个子shell中执行命令。</p><p>除了会创建子shell之外，<strong>协程基本上就是将命令置入后台模式</strong>。当输入 coproc 命令及其参数之后，你会发现启用了一个后台作业。屏幕上会显示出后台作业号（ 1 ）以及进程ID（ 43011）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># coproc sleep 10</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">43011</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  运行中               coproc COPROC <span class="token function">sleep</span> <span class="token number">10</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令的扩展语法自己设置这个名字。</p><hr><p><strong>说明：</strong> 协程能够让你尽情发挥想象力，发送或接收来自子shell中进程的信息。只有在拥有多个协程的时候才需要对协程进行命名，因为你得和它们进行通信。否则的话，让 coproc 命令将其设置成默认的名字 COPROC 就行了。</p><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># coproc My_Job { sleep 10; }</span>
bash: 警告:execute_coproc: coproc <span class="token punctuation">[</span><span class="token number">43011</span>:COPROC<span class="token punctuation">]</span> still exists
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">43087</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>   完成                  coproc COPROC <span class="token function">sleep</span> <span class="token number">10</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+  完成                  coproc My_Job <span class="token punctuation">{</span> <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将协程与进程列表结合起来产生嵌套的子shell。只需要输入进程列表，然后把命令 coproc 放在前面就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># coproc ( sleep 10; sleep 2 )</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">43423</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  运行中               coproc COPROC <span class="token punctuation">(</span> <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token function">sleep</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token operator">&amp;</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># ps --forest</span>
   PID TTY          TIME CMD
  <span class="token number">1490</span> pts/0    00:00:00 <span class="token function">bash</span>
 <span class="token number">12590</span> pts/0    00:00:00  <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">18624</span> pts/0    00:00:00      <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">43423</span> pts/0    00:00:00          <span class="token punctuation">\\</span>_ <span class="token function">bash</span>
 <span class="token number">43424</span> pts/0    00:00:00          <span class="token operator">|</span>   <span class="token punctuation">\\</span>_ <span class="token function">sleep</span>
 <span class="token number">43479</span> pts/0    00:00:00          <span class="token punctuation">\\</span>_ <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>记住</strong>：生成子shell的成本不低，而且速度还慢。创建嵌套子shell更是火上浇油！ 在命令行中使用子shell能够获得灵活性和便利。要想获得这些优势，重要的是理解子shell的行为方式。对于命令也是如此。</p><h3 id="理解-shell-的内建命令" tabindex="-1"><a class="header-anchor" href="#理解-shell-的内建命令" aria-hidden="true">#</a> 理解 shell 的内建命令</h3><p>内建命令和非内建命令的操作方式大不相同。</p><h4 id="_1、外部命令" tabindex="-1"><a class="header-anchor" href="#_1、外部命令" aria-hidden="true">#</a> 1、外部命令</h4><p>外部命令，有时候也被称为文件系统命令，是存在于bash shell之外的程序。它们并不是shell程序的一部分。外部命令程序通常位于<code>/bin</code>、<code>/usr/bin</code>、<code>/sbin</code>或<code>/usr/sbin</code>中。</p><p>ps 就是一个外部命令。你可以使用 which 和 type 命令找到它:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># which ps</span>
/usr/bin/ps
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type -a ps</span>
<span class="token function">ps</span> 是 /usr/bin/ps
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ls -l /usr/bin/ps</span>
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">100112</span> <span class="token number">10</span>月  <span class="token number">1</span> <span class="token number">2020</span> /usr/bin/ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当外部命令执行时，会创建出一个子进程。这种操作被称为衍生（forking）。外部命令 ps 很方便显示出它的父进程以及自己所对应的衍生子进程。</p><p>作为外部命令， ps 命令执行时会创建出一个子进程。</p><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">49716</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">12</span>:04 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">49723</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">12</span>:04 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root       <span class="token number">1490</span>   <span class="token number">1479</span>  <span class="token number">0</span> <span class="token number">10</span>:06 pts/0    00:00:00 <span class="token parameter variable">-bash</span>
root      <span class="token number">49731</span>   <span class="token number">1490</span>  <span class="token number">0</span> <span class="token number">12</span>:04 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当进程必须执行衍生操作时，它需要花费时间和精力来设置新子进程的环境。所以说，外部命令多少还是有代价的。</p><hr><p><strong>说明</strong> 就算衍生出子进程或是创建了子shell，你仍然可以通过发送信号与其沟通，这一点无论是在命令行还是在脚本编写中都是极其有用的。发送信号（signaling）使得进程间可以通过信号进行通信。</p><hr><h4 id="_2、内部命令" tabindex="-1"><a class="header-anchor" href="#_2、内部命令" aria-hidden="true">#</a> 2、内部命令</h4><p>内建命令不需要使用子进程来执行。它们已经和shell编译成了一体，作为shell工具的组成部分存在。不需要借助外部程序文件来运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type cd</span>
<span class="token builtin class-name">cd</span> 是 shell 内嵌
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type exit</span>
<span class="token builtin class-name">exit</span> 是 shell 内嵌
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type -a echo</span>
<span class="token builtin class-name">echo</span> 是 shell 内嵌
<span class="token builtin class-name">echo</span> 是 /usr/bin/echo
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># type -a pwd</span>
<span class="token builtin class-name">pwd</span> 是 shell 内嵌
<span class="token builtin class-name">pwd</span> 是 /usr/bin/pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既不需要通过衍生出子进程来执行，也不需要打开程序文件，内建命令的<strong>执行速度要更快，效率也更高</strong>。</p><h3 id="linux-环境变量" tabindex="-1"><a class="header-anchor" href="#linux-环境变量" aria-hidden="true">#</a> linux 环境变量</h3><h4 id="_1、全局环境变量" tabindex="-1"><a class="header-anchor" href="#_1、全局环境变量" aria-hidden="true">#</a> 1、全局环境变量</h4><p>要查看全局变量，可以使用 env 或 printenv 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># printenv</span>
<span class="token assign-left variable"><span class="token environment constant">XDG_SESSION_ID</span></span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>admin
<span class="token assign-left variable"><span class="token environment constant">TERM</span></span><span class="token operator">=</span>xterm
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">1000</span>
<span class="token assign-left variable">SSH_CLIENT</span><span class="token operator">=</span><span class="token number">192.168</span>.0.5 <span class="token number">9649</span> <span class="token number">22</span>
<span class="token assign-left variable">SSH_TTY</span><span class="token operator">=</span>/dev/pts/0

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># env</span>
<span class="token assign-left variable"><span class="token environment constant">XDG_SESSION_ID</span></span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>admin
<span class="token assign-left variable"><span class="token environment constant">TERM</span></span><span class="token operator">=</span>xterm
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">1000</span>
<span class="token assign-left variable">SSH_CLIENT</span><span class="token operator">=</span><span class="token number">192.168</span>.0.5 <span class="token number">9649</span> <span class="token number">22</span>
<span class="token assign-left variable">SSH_TTY</span><span class="token operator">=</span>/dev/pts/0
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>root

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要显示个别环境变量的值，可以使用 printenv 命令，但是不要用 env 命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># printenv HOME</span>
/root
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># env HOME</span>
env: <span class="token environment constant">HOME</span><span class="token builtin class-name">:</span> 没有那个文件或目录
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $HOME</span>
/root
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># ls $HOME</span>
anaconda-ks.cfg  df.log.tar  df.sh  first.sh  user1.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、局部环境变量" tabindex="-1"><a class="header-anchor" href="#_2、局部环境变量" aria-hidden="true">#</a> 2、局部环境变量</h4><p>局部环境变量只能在定义它们的进程中可见。</p><p>查看局部环境变量的列表有点复杂。遗憾的是，在Linux系统并没有一个只显示局部环境变量的命令。 set 命令会显示为某个特定进程设置的所有环境变量，包括局部变量、全局变量以及用户定义变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># set</span>
<span class="token assign-left variable"><span class="token environment constant">BASH</span></span><span class="token operator">=</span>/bin/bash
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token assign-left variable"><span class="token environment constant">BASH_VERSINFO</span></span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;4&quot;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;46&quot;</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;release&quot;</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;x86_64-redhat-linux-gnu&quot;</span><span class="token punctuation">)</span>
<span class="token assign-left variable"><span class="token environment constant">BASH_VERSION</span></span><span class="token operator">=</span><span class="token string">&#39;4.2.46(2)-release&#39;</span>
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token assign-left variable"><span class="token environment constant">HISTFILE</span></span><span class="token operator">=</span>/root/.bash_history
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/root
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 命令 <code>env</code> 、 <code>printenv</code> 和 <code>set</code> 之间的差异很细微。 <strong>set</strong> 命令会显示出全局变量、局部变量以及用户定义变量。它还会按照字母顺序对结果进行排序。 <strong>env</strong> 和 <strong>printenv</strong> 命令同 set 命令的区别在于前两个命令不会对变量排序，也不会输出局部变量和用户定义变量。在这种情况下， env 和 printenv 的输出是重复的。不过 env 命令有一个 printenv 没有的功能，这使得它要更有用一些。</p><hr><h4 id="_3、设置用户定义变量" tabindex="-1"><a class="header-anchor" href="#_3、设置用户定义变量" aria-hidden="true">#</a> 3、设置用户定义变量</h4><p>可以通过等号给环境变量赋值，值可以是数值或字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_variable=Hello</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>
Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非常简单！现在每次引用 my_variable 环境变量的值，只要通过 $my_variable 引用即可。 如果要给变量赋一个含有空格的字符串值，必须用单引号来界定字符串的首和尾。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_variable=Hello World</span>
-bash: World: 未找到命令
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_variable=&quot;Hello World&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有单引号的话，bash shell会以为下一个词是另一个要执行的命令。注意，你定义的局部环境变量用的是小写字母，而到目前为止你所看到的系统环境变量都是大写字母。</p><hr><p><strong>注意：</strong> 所有的环境变量名均使用大写字母，这是bash shell的标准惯例。如果是你自己创建的局部变量或是shell脚本，请使用小写字母。变量名区分大小写。在涉及用户定义的局部变量时坚持使用小写字母，这能够避免重新定义系统环境变量可能带来的灾难。</p><hr><p>设置了局部环境变量后，就能在shell进程的任何地方使用它了。但是，如果生成了另外一个shell，它在子shell中就不可用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似地，如果你在子进程中设置了一个局部变量，那么一旦你退出了子进程，那个局部环境变量就不可用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># my_0=&quot;1112323&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_0</span>
<span class="token number">1112323</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、设置全局环境变量-export" tabindex="-1"><a class="header-anchor" href="#_4、设置全局环境变量-export" aria-hidden="true">#</a> 4、设置全局环境变量 export</h4><p>创建全局环境变量的方法是先创建一个局部环境变量，然后再把它导出到全局环境中（<code>export</code>）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># vmy_variable=&quot;I am Global now&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># export vmy_variable</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在定义并导出局部环境变量 my_variable 后， bash 命令启动了一个子shell。在这个子shell中能够正确的显示出变量 my_variable 的值。该变量能够保留住它的值是因为 export 命令使其变成了全局环境变量。</p><p>修改子shell中全局环境变量并不会影响到父shell中该变量的值。这种改变只是在子进程中有效，并不会被反映到父shell中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># vmy_variable=&quot;I am Global now 66666&quot;</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now <span class="token number">66666</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、删除环境变量-unset" tabindex="-1"><a class="header-anchor" href="#_5、删除环境变量-unset" aria-hidden="true">#</a> 5、删除环境变量 unset</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># unset my_variable</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你是在子进程中删除了一个全局环境变量，这只对子进程有效。该全局环境变量在父进程中依然可用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># unset my_variable</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $my_variable</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $vmy_variable</span>
I am Global now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>窍门</strong> 如果要用到变量，使用 $ ；如果要操作变量，不使用 $ 。这条规则的一 个例外就是使用 printenv 显示某个变量的值。</p><hr><h4 id="_6、默认的-shell-环境变量" tabindex="-1"><a class="header-anchor" href="#_6、默认的-shell-环境变量" aria-hidden="true">#</a> 6、默认的 shell 环境变量</h4><p>默认情况下，bash shell会用一些特定的环境变量来定义系统环境。这些变量在你的Linux系统上都已经设置好了，只管放心使用。bash shell源自当初的Unix Bourne shell，因此也保留了Unix Bourne shell里定义的那些环境变量。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>$变量     描述
CDPATH  冒号分隔的目录列表，作为 cd 命令的搜索路径
HOME  当前用户的主目录
IFS   shell用来将文本字符串分割成字段的一系列字符
MAIL  当前用户收件箱的文件名（bash shell会检查这个文件，看看有没有新邮件）
MAILPATH 冒号分隔的当前用户收件箱的文件名列表（bash shell会检查列表中的每个文件，看看有没有新邮件）
OPTARG  getopts 命令处理的最后一个选项参数值
OPTIND  getopts 命令处理的最后一个选项参数的索引号
PATH  shell查找命令的目录列表，由冒号分隔
PS1   shell命令行界面的主提示符
PS2   shell命令行界面的次提示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了默认的Bourne的环境变量，bash shell还提供一些自有的变量</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>$变量     描述
BASH   当前shell实例的全路径名
BASH_ALIASES 含有当前已设置别名的关联数组
BASH_ARGC  含有传入子函数或shell脚本的参数总数的数组变量
BASH_ARCV  含有传入子函数或shell脚本的参数的数组变量
BASH_CMDS  关联数组，包含shell执行过的命令的所在位置
BASH_COMMAND shell正在执行的命令或马上就执行的命令
BASH_ENV  设置了的话，每个bash脚本会在运行前先尝试运行该变量定义的启动文件
BASH_EXECUTION_STRING 使用 bash -c 选项传递过来的命令
BASH_LINENO  含有当前执行的shell函数的源代码行号的数组变量
BASH_REMATCH 只读数组，在使用正则表达式的比较运算符=~进行肯定匹配（positive match）时，包含了匹配到的模式和子模式
BASH_SOURCE  含有当前正在执行的shell函数所在源文件名的数组变量
BASH_SUBSHELL 当前子shell环境的嵌套级别（初始值是0）
BASH_VERSINFO 含有当前运行的bash shell的主版本号和次版本号的数组变量
BASH_VERSION 当前运行的bash shell的版本号
BASH_XTRACEFD 若设置成了有效的文件描述符（ 0 、 1 、 2 ），则 &#39;set -x&#39; 调试选项生成的跟踪输出可被重定向。通常用来将跟踪输出到一个文件中
BASHOPTS  当前启用的bash shell选项的列表
BASHPID   当前bash进程的PID
COLUMNS   当前bash shell实例所用终端的宽度
COMP_CWORD  COMP_WORDS 变量的索引值，后者含有当前光标的位置
COMP_LINE  当前命令行
COMP_POINT  当前光标位置相对于当前命令起始的索引
COMP_KEY  用来调用shell函数补全功能的最后一个键
COMP_TYPE  一个整数值，表示所尝试的补全类型，用以完成shell函数补全
COMP_WORDBREAKS  Readline库中用于单词补全的词分隔字符
COMP_WORDS  含有当前命令行所有单词的数组变量
COMPREPLY  含有由shell函数生成的可能填充代码的数组变量
COPROC   占用未命名的协进程的I/O文件描述符的数组变量
DIRSTACK  含有目录栈当前内容的数组变量
EMACS   设置为 &#39;t&#39; 时，表明emacs shell缓冲区正在工作，而行编辑功能被禁止
ENV    如果设置了该环境变量，在bash shell脚本运行之前会先执行已定义的启动文件（仅用于当bash shell以POSIX模式被调用时）
EUID   当前用户的有效用户ID（数字形式）
FCEDIT   供 fc 命令使用的默认编辑器
FIGNORE   在进行文件名补全时可以忽略后缀名列表，由冒号分隔
FUNCNAME  当前执行的shell函数的名称
FUNCNEST  当设置成非零值时，表示所允许的最大函数嵌套级数（一旦超出，当前命令即被终止）
GLOBIGNORE  冒号分隔的模式列表，定义了在进行文件名扩展时可以忽略的一组文件名
GROUPS   含有当前用户属组列表的数组变量
histchars  控制历史记录扩展，最多可有3个字符
HISTCMD   当前命令在历史记录中的编号
HISTCONTROL  控制哪些命令留在历史记录列表中
HISTFILE  保存shell历史记录列表的文件名（默认是.bash_history）
HISTFILESIZE 最多在历史文件中存多少行
HISTTIMEFORMAT 如果设置了且非空，就用作格式化字符串，以显示bash历史中每条命令的时间戳
HISTIGNORE  由冒号分隔的模式列表，用来决定历史文件中哪些命令会被忽略
HISTSIZE  最多在历史文件中存多少条命令
HOSTFILE  shell在补全主机名时读取的文件名称
HOSTNAME  当前主机的名称
HOSTTYPE  当前运行bash shell的机器
IGNOREEOF  shell在退出前必须收到连续的 EOF 字符的数量（如果这个值不存在，默认是 1 ）
INPUTRC   Readline初始化文件名（默认是.inputrc）
LANG   shell的语言环境类别
LC_ALL   定义了一个语言环境类别，能够覆盖 LANG 变量
LC_COLLATE  设置对字符串排序时用的排序规则
LC_CTYPE  决定如何解释出现在文件名扩展和模式匹配中的字符
LC_MESSAGES  在解释前面带有 <span class="token function selector">\\$</span> 的双引号字符串时，该环境变量决定了所采用的语言环境设置
LC_NUMERIC  决定着格式化数字时采用的语言环境设置
LINENO   当前执行的脚本的行号
LINES   定义了终端上可见的行数
MACHTYPE  用“CPU  公司  系统”（CPU-company-system）格式定义的系统类型
MAPFILE   一个数组变量，当 mapfile 命令未指定数组变量作为参数时，它存储了 mapfile 所读入的文本
MAILCHECK  shell查看新邮件的频率（以秒为单位，默认值是 60 ）
OLDPWD   shell之前的工作目录
OPTERR   设置为1时，bash shell会显示 getopts 命令产生的错误
OSTYPE   定义了shell所在的操作系统
PIPESTATUS  含有前台进程的退出状态列表的数组变量
POSIXLY_CORRECT  设置了的话，bash会以POSIX模式启动
PPID   bash shell父进程的PID
PROMPT_COMMAND  设置了的话，在命令行主提示符显示之前会执行这条命令
PROMPT_DIRTRIM  用来定义当启用了 <span class="token function selector">\\w</span> 或 <span class="token function selector">\\W</span> 提示符字符串转义时显示的尾部目录名的数量。被删除的目录名会用一组英文句点替换
PS3    select 命令的提示符
PS4    如果使用了bash的 -x 选项，在命令行之前显示的提示信息
PWD    当前工作目录
RANDOM   返回一个0～32767的随机数（对其的赋值可作为随机数生成器的种子）
READLINE_LINE  当使用 bind –x 命令时，存储Readline缓冲区的内容
READLINE_POINT  当使用 bind –x 命令时，表示Readline缓冲区内容插入点的当前位置
REPLY   read命令的默认变量
SECONDS   自从shell启动到现在的秒数（对其赋值将会重置计数器）
SHELL   bash shell的全路径名
SHELLOPTS  已启用bash shell选项列表，列表项之间以冒号分隔
SHLVL   shell的层级；每次启动一个新bash shell，该值增加1
TIMEFORMAT  指定了shell的时间显示格式
TMOUT   select 和 read 命令在没输入的情况下等待多久（以秒为单位）。默认值为0，表示无限长
TMPDIR   目录名，保存bash shell创建的临时文件
UID    当前用户的真实用户ID（数字形式）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、设置-path-环境变量" tabindex="-1"><a class="header-anchor" href="#_7、设置-path-环境变量" aria-hidden="true">#</a> 7、设置 PATH 环境变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># PATH=$PATH:/home/user1</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin:/home/user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>窍门</strong> 如果希望子shell也能找到你的程序的位置，一定要记得把修改后的 PATH 环境变量导出。</p><hr><h4 id="_8、定位系统环境变量" tabindex="-1"><a class="header-anchor" href="#_8、定位系统环境变量" aria-hidden="true">#</a> 8、定位系统环境变量</h4><p><strong>登录 shell</strong></p><p>当你登录Linux系统时，bash shell会作为登录shell启动。登录shell会从5个不同的启动文件里 读取命令：</p><ul><li>/etc/profile</li><li>$HOME/.bash_profile</li><li>$HOME/.bashrc</li><li>$HOME/.bash_login</li><li>$HOME/.profile</li></ul><p>etc/profile文件是系统上默认的bash shell的主启动文件。系统上的每个用户登录时都会执行 这个启动文件。</p><p>HOME：提供一个用户专属的启动文件来定义该用户所用到的环境变量。</p><p>shell会按照按照下列顺序，运行第一个被找到的文件，余下的则被忽略：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$HOME/.bash_profile
$HOME/.bash_login
$HOME/.profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这个列表中并没有$HOME/.bashrc文件。这是因为该文件通常通过其他文件运行的。</p><h4 id="_9、交互式-shell-进程" tabindex="-1"><a class="header-anchor" href="#_9、交互式-shell-进程" aria-hidden="true">#</a> 9、交互式 shell 进程</h4><p>如果bash是作为交互式shell启动的，它就不会访问/etc/profile文件，只会检查用户HOME目录中的.bashrc文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin ~]# cat .bashrc
# .bashrc

# User specific aliases and functions

alias rm=&#39;rm -i&#39;
alias cp=&#39;cp -i&#39;
alias mv=&#39;mv -i&#39;

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、非交互式shell" tabindex="-1"><a class="header-anchor" href="#_10、非交互式shell" aria-hidden="true">#</a> 10、非交互式shell</h4><p>最后一种shell是非交互式shell。系统执行shell脚本时用的就是这种shell。不同的地方在于它没有命令行提示符。但是当你在系统上运行脚本时，也许希望能够运行一些特定启动的命令。</p><hr><p>窍门 脚本能以不同的方式执行。只有其中的某一些方式能够启动子shell</p><hr><p>为了处理这种情况，bash shell提供了 BASH_ENV 环境变量。当shell启动一个非交互式shell进程时，它会检查这个环境变量来查看要执行的启动文件。如果有指定的文件，shell会执行该文件里的命令，这通常包括shell脚本变量设置。</p><p>在CentOS Linux发行版中，这个环境变量在默认情况下并未设置。如果变量未设置， printenv 命令只会返回CLI提示符：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">printenv</span> BASH_ENV
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在Ubuntu发行版中，变量 BASH_ENV 也没有被设置。记住，如果变量未设置， echo 命令会显示一个空行，然后返回CLI提示符：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">$BASH_ENV</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那如果 BASH_ENV 变量没有设置，shell脚本到哪里去获得它们的环境变量呢？别忘了有些shell脚本是通过启动一个子shell来执行的（参见第5章）。子shell可以继承父shell导出过的变量。</p><p>举例来说，如果父shell是登录shell，在/etc/profile、/etc/profile.d/ * .sh和$HOME/.bashrc文件中设置并导出了变量，用于执行脚本的子shell就能够继承这些变量。</p><p>要记住，由父shell设置但并未导出的变量都是局部变量。子shell无法继承局部变量。</p><p>对于那些不启动子shell的脚本，变量已经存在于当前shell中了。所以就算没有设置 BASH_ENV ，也可以使用当前shell的局部变量和全局变量</p><h4 id="_11、环境变量持久化" tabindex="-1"><a class="header-anchor" href="#_11、环境变量持久化" aria-hidden="true">#</a> 11、环境变量持久化</h4><p>对全局环境变量来说（Linux系统中所有用户都需要使用的变量），可能更倾向于将新的或修改过的变量设置放在<code>/etc/profile</code>文件中，但这可不是什么好主意。如果你升级了所用的发行版，这个文件也会跟着更新，那你所有定制过的变量设置可就都没有了。</p><p>最好是在/etc/profile.d目录中创建一个以.sh结尾的文件。把所有新的或修改过的全局环境变量设置放在这个文件中。</p><p>在大多数发行版中，存储个人用户永久性bash shell变量的地方是 HOME/.bashrc文件。这一点适用于所有类型的shell进程。但如果设置了 BASH_ENV 变量，那么记住，除非它指向的是 HOME/.bashrc，否则你应该将非交互式shell的用户变量放在别的地方。</p><h4 id="_12、数组变量" tabindex="-1"><a class="header-anchor" href="#_12、数组变量" aria-hidden="true">#</a> 12、数组变量</h4><p>要给某个环境变量设置多个值，可以把值放在括号里，值与值之间用空格分隔。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mytest=(one two three four five)</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $mytestecho $mytest</span>
one
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo $mytest</span>
one
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[2]}</span>
three
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[*]}</span>
one two three four five
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mytest[2]=seven</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[*]}</span>
one two seven four five
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># unset mytest[2]</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[*]}</span>
one two four five
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[2]}</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># echo \${mytest[3]}</span>
four
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户及组权限" tabindex="-1"><a class="header-anchor" href="#用户及组权限" aria-hidden="true">#</a> 用户及组权限</h3><h4 id="etc-passwd" tabindex="-1"><a class="header-anchor" href="#etc-passwd" aria-hidden="true">#</a> /etc/passwd</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd</span>
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">]</span>
nginx:x:385:385:Nginx web server:/var/lib/nginx:/sbin/nologin
mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false
user1:x:1001:1001::/home/user1:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>登录用户名</li><li>用户密</li><li>用户账户的UID（数字形式）</li><li>用户账户的组ID（GID）（数字形式）</li><li>用户账户的文本描述（称为备注字段）</li><li>用户HOME目录的位置</li><li>用户的默认shell</li></ul><h4 id="etc-shadow" tabindex="-1"><a class="header-anchor" href="#etc-shadow" aria-hidden="true">#</a> /etc/shadow</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/shadow</span>
root:<span class="token variable">$6</span><span class="token variable">$IuU9ujIkCecQ7kzi</span><span class="token variable">$TCClr5k7U9Zj8yJBxmqg0jpJOGTuJX0bci2YWVl70pRBrGWVSgZ529BI8BFZvhWgJCd0GbPSk4BtgFS6WL0jq</span>.::0:99999:7:::
bin:*:18353:0:99999:7:::
daemon:*:18353:0:99999:7:::
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>与/etc/passwd文件中的登录名字段对应的登录名</li><li>加密后的密码</li><li>自上次修改密码后过去的天数密码（自1970年1月1日开始计算）</li><li>多少天后才能更改密码</li><li>多少天后必须更改密码</li><li>密码过期前提前多少天提醒用户更改密码</li><li>密码过期后多少天禁用用户账户</li><li>用户账户被禁用的日期（用自1970年1月1日到当天的天数表示）</li><li>预留字段给将来使用</li></ul><h4 id="etc-group" tabindex="-1"><a class="header-anchor" href="#etc-group" aria-hidden="true">#</a> /etc/group</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/group</span>
root:x:0:
bin:x:1:
daemon:x:2:
sys:x:3:
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
nginx:x:385:
docker:x:384:
mysql:x:27:
user1:x:1001:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>组名</li><li>组密码</li><li>GID</li><li>属于该组的用户列表</li></ul><p><strong>千万不能通过直接修改/etc/group文件来添加用户到一个组，要用 usermod 命令</strong></p><p>需要参考基础知识：</p>`,159),F=n("li",null,"等等",-1),C=i(`<h2 id="shell-脚本编程基础" tabindex="-1"><a class="header-anchor" href="#shell-脚本编程基础" aria-hidden="true">#</a> shell 脚本编程基础</h2><h3 id="构建基本脚本" tabindex="-1"><a class="header-anchor" href="#构建基本脚本" aria-hidden="true">#</a> 构建基本脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>
<span class="token comment"># 构建基本脚本</span>

<span class="token assign-left variable">name</span><span class="token operator">=</span>demo
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token string">&#39;date&#39;</span>

<span class="token builtin class-name">echo</span> <span class="token number">666666</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Let&#39;s see who&#39;s logged&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;Rich says &quot;scripting is easy&quot;.&#39;</span>
<span class="token builtin class-name">echo</span> 使用系统变量：<span class="token environment constant">$HOME</span> + <span class="token environment constant">$LANG</span>
<span class="token builtin class-name">echo</span> 使用用户变量：<span class="token variable">$name</span> + <span class="token variable">$testing</span>
<span class="token assign-left variable">testing</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 更改用户变量：<span class="token variable">$testing</span>
<span class="token builtin class-name">echo</span> 重定向输出 <span class="token operator">&gt;</span> demo.log
<span class="token builtin class-name">echo</span> 重定向输出追加 <span class="token operator">&gt;&gt;</span> demo.log

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span>./demo2.log</span>
重定向输入追加1
重定向输入追加2
重定向输入追加3
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="expr-命令操作符" tabindex="-1"><a class="header-anchor" href="#expr-命令操作符" aria-hidden="true">#</a> expr 命令操作符</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ARG1 | ARG2  如果 ARG1 既不是null也不是零值，返回 ARG1 ；否则返回 ARG2
ARG1 &amp; ARG2  如果没有参数是null或零值，返回 ARG1 ；否则返回 0
ARG1 &lt; ARG2  如果 ARG1 小于 ARG2 ，返回 1 ；否则返回 0
ARG1 &lt;= ARG2 如果 ARG1 小于或等于 ARG2 ，返回 1 ；否则返回 0
ARG1 = ARG2  如果 ARG1 等于 ARG2 ，返回 1 ；否则返回 0
ARG1 != ARG2 如果 ARG1 不等于 ARG2 ，返回 1 ；否则返回 0
ARG1 &gt;= ARG2 如果 ARG1 大于或等于 ARG2 ，返回 1 ；否则返回 0
ARG1 &gt; ARG2  如果 ARG1 大于 ARG2 ，返回 1 ；否则返回 0
ARG1 + ARG2  返回 ARG1 和 ARG2 的算术运算和
ARG1 - ARG2  返回 ARG1 和 ARG2 的算术运算差
ARG1 * ARG2  返回 ARG1 和 ARG2 的算术乘积
ARG1 / ARG2  返回 ARG1 被 ARG2 除的算术商
ARG1 % ARG2  返回 ARG1 被 ARG2 除的算术余数
STRING : REGEXP  如果 REGEXP 匹配到了 STRING 中的某个模式，返回该模式匹配
match STRING REGEXP  如果 REGEXP 匹配到了 STRING 中的某个模式，返回该模式匹配
substr STRING POS LENGTH 返回起始位置为 POS （从 1 开始计数）、长度为 LENGTH 个字符的子字符串
index STRING CHARS  返回在 STRING 中找到 CHARS 字符串的位置；否则，返回 0
length STRING  返回字符串 STRING 的数值长度
+ TOKEN   将 TOKEN 解释成字符串，即使是个关键字
(EXPRESSION) 返回 EXPRESSION 的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">echo</span> 使用expr：
<span class="token function">expr</span> <span class="token number">12</span> + <span class="token number">22</span>
<span class="token function">expr</span> <span class="token number">12</span> <span class="token punctuation">\\</span>* <span class="token number">22</span>
<span class="token function">expr</span> <span class="token number">66</span> / <span class="token number">1</span>
<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> $var2 / $var1<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The result is <span class="token variable">$var3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用方括号" tabindex="-1"><a class="header-anchor" href="#使用方括号" aria-hidden="true">#</a> 使用方括号</h4><p>可以用美元符和方括号（ $[ operation ] ）将数学表达式围起来；</p><p>用方括号执行shell数学运算比用 expr 命令方便很多。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">echo</span> 使用方括号：
<span class="token assign-left variable">var3</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token number">1</span> + <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var3</span>
<span class="token assign-left variable">var4</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$var3</span> * <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var4</span>
<span class="token assign-left variable">var5</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$var4</span> * <span class="token number">2</span> + <span class="token punctuation">(</span> <span class="token number">12</span> + <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$var5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="浮点解决方案" tabindex="-1"><a class="header-anchor" href="#浮点解决方案" aria-hidden="true">#</a> 浮点解决方案</h4><p>格式：variable=$(echo &quot;options; expression&quot; | bc)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">echo</span> 浮点解决方案:
<span class="token assign-left variable">var6</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=4; 3.44 / 5&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The answer is <span class="token variable">$var6</span>
<span class="token assign-left variable">var7</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">var8</span><span class="token operator">=</span><span class="token number">45</span>
<span class="token assign-left variable">var9</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=4; <span class="token variable">$var7</span> / <span class="token variable">$var8</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The answer <span class="token keyword">for</span> this is <span class="token variable">$var9</span>
<span class="token assign-left variable">v1</span><span class="token operator">=</span><span class="token number">10.46</span>
<span class="token assign-left variable">v2</span><span class="token operator">=</span><span class="token number">43.67</span>
<span class="token assign-left variable">v3</span><span class="token operator">=</span><span class="token number">33.2</span>
<span class="token assign-left variable">v4</span><span class="token operator">=</span><span class="token number">71</span>
<span class="token assign-left variable">v5</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">bc</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
scale = 4
a1 = ( <span class="token variable">$v1</span> * <span class="token variable">$v2</span>)
b1 = (<span class="token variable">$v3</span> * <span class="token variable">$v4</span>)
a1 + b1
EOF</span>
<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> The final answer <span class="token keyword">for</span> this mess is <span class="token variable">$v5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="退出脚本" tabindex="-1"><a class="header-anchor" href="#退出脚本" aria-hidden="true">#</a> 退出脚本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span> status

查看退出状态码
<span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux退出状态码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0  命令成功结束
1  一般性未知错误
2  不适合的shell命令
126  命令不可执行
127  没找到命令
128  无效的退出参数
128+x 与Linux信号x相关的严重错误
130  通过Ctrl+C终止的命令
255  正常范围之外的退出状态码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以改变这种默认行为，返回自己的退出状态码。 exit 命令允许你在脚本结束时指定一个退出状态码。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin//bash</span>

<span class="token builtin class-name">exit</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用结构化命令" tabindex="-1"><a class="header-anchor" href="#使用结构化命令" aria-hidden="true">#</a> 使用结构化命令</h3><h4 id="使用-if-then-语句和-else" tabindex="-1"><a class="header-anchor" href="#使用-if-then-语句和-else" aria-hidden="true">#</a> 使用 if-then 语句和 else</h4><p>格式</p><blockquote><p>if command then commands fi</p><p>if command; then commands else commands fi</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;It worked&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> IamNotaCommand<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;It worked&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;It worked2&quot;</span>  
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;We are outside the if statement&quot;</span>

<span class="token assign-left variable">testuser</span><span class="token operator">=</span>user1
<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token variable">$testuser</span> /etc/passwd<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;This is my first command&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> okokokok
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> nononono
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌套-if-语句" tabindex="-1"><a class="header-anchor" href="#嵌套-if-语句" aria-hidden="true">#</a> 嵌套 if 语句</h4><blockquote><p>if command1; then</p><p>​ commands</p><p>elif command2; then</p><p>​ more commands</p><p>elif command3; then</p><p>​ more commands</p><p>[....]</p><p>fi</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token function">ls</span> <span class="token parameter variable">-d</span> /home/user1/<span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> okokokok
  <span class="token keyword">fi</span>   
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> nononono
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> ok-5555
<span class="token keyword">elif</span> <span class="token function">ls</span> <span class="token parameter variable">-d</span> /home/user1/<span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> ok-6666
<span class="token keyword">elif</span> <span class="token function">ls</span> <span class="token parameter variable">-d</span> /home/user2/<span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> ok-8888 
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="test-命令" tabindex="-1"><a class="header-anchor" href="#test-命令" aria-hidden="true">#</a> test 命令</h4><blockquote><p>if test condition; then</p><p>​ commands</p><p>fi</p></blockquote><p>如果不写 test 命令的 condition 部分，它会以非零的退出状态码退出，并执行 else 语句块。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No expression returns a True&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No expression returns a False&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bash shell提供了另一种条件测试方法，无需在 if-then 语句中声明 test 命令:</p><blockquote><p>if [ condition ] ; then</p><p>​ commands</p><p>fi</p></blockquote><p>test 命令可以判断三类条件：</p><ul><li><ul><li>数值比较</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>n1 <span class="token parameter variable">-eq</span> n2  检查 n1 是否与 n2 相等
n1 <span class="token parameter variable">-ge</span> n2  检查 n1 是否大于或等于 n2
n1 <span class="token parameter variable">-gt</span> n2  检查 n1 是否大于 n2
n1 <span class="token parameter variable">-le</span> n2  检查 n1 是否小于或等于 n2
n1 <span class="token parameter variable">-lt</span> n2  检查 n1 是否小于 n2
n1 <span class="token parameter variable">-ne</span> n2  检查 n1 是否不等于 n2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">value1</span><span class="token operator">=</span><span class="token number">13</span>
<span class="token assign-left variable">value2</span><span class="token operator">=</span><span class="token number">11</span>
<span class="token assign-left variable">value3</span><span class="token operator">=</span><span class="token number">11</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$value1</span> <span class="token parameter variable">-gt</span> <span class="token variable">$value2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$value1</span> 大于 <span class="token variable">$value2</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$value2</span> <span class="token parameter variable">-eq</span> <span class="token variable">$value3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$value2</span> 等于 <span class="token variable">$value3</span>&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$value2</span> 不等于 <span class="token variable">$value3</span>&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ul><li>字符串比较</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>str1 = str2  检查 str1 是否和 str2 相同
str1 != str2 检查 str1 是否和 str2 不同
str1 &lt; str2  检查 str1 是否比 str2 小
str1 &gt; str2  检查 str1 是否比 str2 大
-n str1   检查 str1 的长度是否非0
-z str1   检查 str1 的长度是否为0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">username</span><span class="token operator">=</span>root
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token environment constant">$USER</span> <span class="token operator">=</span> <span class="token variable">$username</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Welcome <span class="token variable">$username</span>&quot;</span>
<span class="token keyword">fi</span>
<span class="token assign-left variable">vs1</span><span class="token operator">=</span>baseball
<span class="token assign-left variable">vs2</span><span class="token operator">=</span>hockey
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$vs1</span> <span class="token punctuation">\\</span><span class="token operator">&gt;</span> <span class="token variable">$vs2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$vs1</span> &gt; <span class="token variable">$vs2</span>&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$vs1</span> <span class="token punctuation">\\</span><span class="token operator">&lt;</span> <span class="token variable">$vs2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$vs1</span> &lt; <span class="token variable">$vs2</span>&quot;</span>
<span class="token keyword">else</span> 
  <span class="token builtin class-name">echo</span>   <span class="token string">&quot;<span class="token variable">$vs1</span> !&lt; !&gt; <span class="token variable">$vs2</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">vs3</span><span class="token operator">=</span>gfstes
<span class="token assign-left variable">vs4</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token variable">$vs3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs3</span>&#39; is not empty&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs3</span>&#39; is empty&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$vs4</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs4</span>&#39; is empty&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The string &#39;<span class="token variable">$vs4</span>&#39; is not empty&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ul><li>文件比较</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-d file    检查 file 是否存在并是一个目录
-e file    检查 file 是否存在
-f file    检查 file 是否存在并是一个文件
-r file    检查 file 是否存在并可读
-s file    检查 file 是否存在并非空
-w file    检查 file 是否存在并可写
-x file    检查 file 是否存在并可执行
-O file    检查 file 是否存在并属当前用户所有
-G file    检查 file 是否存在并且默认组与当前用户相同
file1 -nt file2  检查 file1 是否比 file2 新
file1 -ot file2  检查 file1 是否比 file2 旧
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">jump_directory</span><span class="token operator">=</span>/home/shell
<span class="token assign-left variable">jump_directory2</span><span class="token operator">=</span>/home/shell/demo.sh
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$jump_directory</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">$jump_directory</span> directory exists&quot;</span>
  <span class="token builtin class-name">cd</span> <span class="token variable">$jump_directory</span>
  <span class="token function">ls</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">$jump_directory</span> directory does not exist&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;存在 <span class="token variable">$jump_directory2</span> 文件&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 不是空文件&quot;</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 文件可写&quot;</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 文件可执行&quot;</span>
  <span class="token keyword">fi</span>   
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$jump_directory2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> 
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$jump_directory2</span> 文件可执行&quot;</span>
  <span class="token keyword">fi</span> 
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>复合条件测试</li></ul><p>if-then 语句允许你使用布尔逻辑来组合测试。有两种布尔运算符可用：</p><ul><li>[ condition1 ] &amp;&amp; [ condition2 ]</li><li>[ condition1 ] || [ condition2 ]</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token environment constant">$HOME</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token parameter variable">-w</span> <span class="token environment constant">$HOME</span>/testing <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;The file exists and you can write to it&quot;</span>
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;I cannot write to the file&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>使用双方括号和双括号</li></ul><p><strong>双括号</strong>命令允许你在比较过程中使用高级数学表达式。 test 命令只能在比较中使用简单的算术操作。双括号命令提供了更多的数学符号，这些符号对于用过其他编程语言的程序员而言并不陌生。</p><p><code>(( expression ))</code></p><p>expression 可以是任意的数学赋值或比较表达式。除了 test 命令使用的标准数学运算符</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>val++  后增
val--  后减
++val  先增
--val  先减
!   逻辑求反
~   位求反
**   幂运算
&lt;&lt;   左位移
&gt;&gt;   右位移
<span class="token punctuation">&amp;</span>   位布尔和
|   位布尔或
<span class="token punctuation">&amp;</span><span class="token punctuation">&amp;</span>   逻辑和
||   逻辑或
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>双方括号</strong>命令提供了针对字符串比较的高级特性。双方括号命令的格式如下：</p><p>[[ expression ]]</p><hr><p><strong>说明</strong> 双方括号在bash shell中工作良好。不过要小心，不是所有的shell都支持双方括号</p><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">val12</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment">#</span>
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $val12 <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">90</span> <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
<span class="token variable"><span class="token punctuation">((</span> val13 <span class="token operator">=</span> $val12 <span class="token operator">**</span> <span class="token number">2</span> <span class="token punctuation">))</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The square of <span class="token variable">$val12</span> is <span class="token variable">$val13</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token environment constant">$USER</span> <span class="token operator">==</span> r* <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token environment constant">$USER</span>&quot;</span>
<span class="token keyword">else</span> 
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, I do not know you&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>case 命令</li></ul><p>在模式匹配中，可以定义一个正则表达式来匹配字符串值</p><blockquote><p>case variable in</p><p>pattern1 | pattern2 )</p><p>​ commands1 ;;</p><p>pattern3 )</p><p>​ commands2 ;;</p><p>*) default commands ;;</p><p>esac</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  <span class="token function">install</span><span class="token punctuation">)</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装ok&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  -h<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;sh <span class="token variable">$0</span> { *默认执行 | install | start | stop | disable | -h }&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
     <span class="token builtin class-name">echo</span> “执行默认方法” <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多的结构化命令" tabindex="-1"><a class="header-anchor" href="#更多的结构化命令" aria-hidden="true">#</a> 更多的结构化命令</h3><h4 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h4><blockquote><p>for var in list do commands done</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#读取列表中的值</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">test</span> <span class="token keyword">in</span> Alabama Alaska Arizona Arkansas California Colorado
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> The next state is <span class="token variable">$test</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The last state we visited was <span class="token variable">$test</span>&quot;</span>
<span class="token assign-left variable">test</span><span class="token operator">=</span>Connecticut
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Wait, now we&#39;re visiting <span class="token variable">$test</span>&quot;</span>

<span class="token comment">#读取列表中的复杂值</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">test2</span> <span class="token keyword">in</span> I don<span class="token punctuation">\\</span>&#39;t know <span class="token keyword">if</span> this<span class="token punctuation">\\</span>&#39;ll work
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;word:<span class="token variable">$test2</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">test3</span> <span class="token keyword">in</span> Nevada <span class="token string">&quot;New Hampshire&quot;</span> <span class="token string">&quot;New Mexico&quot;</span> <span class="token string">&quot;New York&quot;</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Now going to <span class="token variable">$test3</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#从变量读取列表</span>
<span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token string">&quot;Alabama Alaska Arizona Arkansas Colorado&quot;</span>
<span class="token assign-left variable">list</span><span class="token operator">=</span><span class="token variable">$list</span><span class="token string">&quot; Connecticut&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token variable">$list</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Have you ever visited <span class="token variable">$state</span>?&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#从命令读取值</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;states&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $file<span class="token variable">)</span></span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Visit beautiful <span class="token variable">$state</span>&quot;</span>
<span class="token keyword">done</span>
$ <span class="token function">cat</span> states
Alabama
Alaska
Arizona
Arkansas
Colorado
Connecticut
Delaware
Florida
Georgia

<span class="token comment">#更改字段分隔符：空格、制表符、换行符</span>
<span class="token comment">#IFS=$&#39;\\n&#39;  将这个语句加入到脚本中，告诉bash shell在数据值中忽略空格和制表符</span>
<span class="token comment">#IFS=$&#39;\\n&#39;:;&quot; 这个赋值会将换行符、冒号、分号和双引号作为字段分隔符。如何使用 IFS 字符解析数据没有任何限制。</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;states&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $file<span class="token variable">)</span></span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Visit beautiful <span class="token variable">$state</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token comment">#用通配符读取目录</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /home/demo/test/*
<span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a directory&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a file&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /home/demo/.b* /home/demo/badtest
<span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a directory&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a file&quot;</span>
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> doesn&#39;t exist&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inside loop: <span class="token variable">$b</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h4><blockquote><p>while test command do other commands done</p></blockquote><p>while 命令中定义的 test command 和 if-then 语句中的格式一模一样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>
 <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token comment">#使用多个测试命令</span>
<span class="token comment">#只有最后一个测试命令的退出状态码会被用来决定什么时候结束循环。</span>
<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var2</span> 
 <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-ge</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;This is inside the loop&quot;</span>
 <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token comment">#【...】</span>

This is inside the loop
<span class="token number">1</span>
This is inside the loop
<span class="token number">0</span>
This is inside the loop
<span class="token parameter variable">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while 循环会在 var1 变量等于 0 时执行 echo 语句，然后将 var1 变量的值减一。接下来再次执行测试命令，用于下一次迭代。 echo 测试命令被执行并显示了 var 变量的值（现在小于 0 了）。直到shell执行 test 测试命令， whle 循环才会停止。</p><p>这说明在含有多个命令的 while 语句中，在每次迭代中所有的测试命令都会被执行，包括测试命令失败的最后一次迭代。要留心这种用法。另一处要留意的是该如何指定多个测试命令。</p><p><strong>注意</strong>：每个测试命令都出现在单独的一行上。</p><h4 id="until" tabindex="-1"><a class="header-anchor" href="#until" aria-hidden="true">#</a> until</h4><p>until 命令和 while 命令工作的方式完全相反。 until 命令要求你指定一个通常返回非零退出状态码的测试命令。只有测试命令的退出状态码不为 0 ，bash shell才会执行循环中列出的命令。一旦测试命令返回了退出状态码 0 ，循环就结束了。</p><blockquote><p>until test commands do</p><p>​ other commands done</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token variable">$var1</span>
 <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">25</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test12
<span class="token number">100</span>
<span class="token number">75</span>
<span class="token number">50</span>
<span class="token number">25</span>

<span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">until</span> <span class="token builtin class-name">echo</span> <span class="token variable">$var2</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> Inside the loop: <span class="token variable">$var2</span>
 <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> - <span class="token number">25</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test13
<span class="token number">100</span>
Inside the loop: <span class="token number">100</span>
<span class="token number">75</span>
Inside the loop: <span class="token number">75</span>
<span class="token number">50</span>
Inside the loop: <span class="token number">50</span>
<span class="token number">25</span>
Inside the loop: <span class="token number">25</span>
<span class="token number">0</span>

<span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$var1</span>&quot;</span>
    <span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-lt</span> <span class="token number">5</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">var3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;scale=4; <span class="token variable">$var1</span> / <span class="token variable">$var2</span>&quot;</span> <span class="token operator">|</span> <span class="token function">bc</span><span class="token variable">)</span></span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$var1</span> / <span class="token variable">$var2</span> = <span class="token variable">$var3</span>&quot;</span>
        <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
    <span class="token keyword">done</span>
    <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test16
Outer loop: <span class="token number">3</span>
Inner loop: <span class="token number">3</span> / <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">3.0000</span>
Inner loop: <span class="token number">3</span> / <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1.5000</span>
Inner loop: <span class="token number">3</span> / <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">1.0000</span>
Inner loop: <span class="token number">3</span> / <span class="token number">4</span> <span class="token operator">=</span> .7500
Outer loop: <span class="token number">2</span>
Inner loop: <span class="token number">2</span> / <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2.0000</span>
Inner loop: <span class="token number">2</span> / <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1.0000</span>
Inner loop: <span class="token number">2</span> / <span class="token number">3</span> <span class="token operator">=</span> .6666
Inner loop: <span class="token number">2</span> / <span class="token number">4</span> <span class="token operator">=</span> .5000
Outer loop: <span class="token number">1</span>
Inner loop: <span class="token number">1</span> / <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1.0000</span>
Inner loop: <span class="token number">1</span> / <span class="token number">2</span> <span class="token operator">=</span> .5000
Inner loop: <span class="token number">1</span> / <span class="token number">3</span> <span class="token operator">=</span> .3333
Inner loop: <span class="token number">1</span> / <span class="token number">4</span> <span class="token operator">=</span> .2500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌套循环" tabindex="-1"><a class="header-anchor" href="#嵌套循环" aria-hidden="true">#</a> 嵌套循环</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-ge</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$var1</span>&quot;</span>
 <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> var2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> $var2 <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> var2<span class="token operator">++</span> <span class="token punctuation">))</span></span>
 <span class="token keyword">do</span>
  <span class="token assign-left variable">var3</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> * <span class="token variable">$var2</span> <span class="token punctuation">]</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$var1</span> * <span class="token variable">$var2</span> = <span class="token variable">$var3</span>&quot;</span>
 <span class="token keyword">done</span>
 <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
$ ./test15
Outer loop: <span class="token number">5</span>
Inner loop: <span class="token number">5</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">5</span>
Inner loop: <span class="token number">5</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">10</span>
Outer loop: <span class="token number">4</span>
Inner loop: <span class="token number">4</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">4</span>
Inner loop: <span class="token number">4</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">8</span>
Outer loop: <span class="token number">3</span>
Inner loop: <span class="token number">3</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">3</span>
Inner loop: <span class="token number">3</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">6</span>
Outer loop: <span class="token number">2</span>
Inner loop: <span class="token number">2</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span>
Inner loop: <span class="token number">2</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">4</span>
Outer loop: <span class="token number">1</span>
Inner loop: <span class="token number">1</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>
Inner loop: <span class="token number">1</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">2</span>
Outer loop: <span class="token number">0</span>
Inner loop: <span class="token number">0</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span>
Inner loop: <span class="token number">0</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="循环处理文件数据" tabindex="-1"><a class="header-anchor" href="#循环处理文件数据" aria-hidden="true">#</a> 循环处理文件数据</h4><p>通常必须遍历存储在文件中的数据。这要求结合已经讲过的两种技术：</p><ul><li>使用嵌套循环</li><li>修改 IFS 环境变量</li></ul><p>通过修改 IFS 环境变量，就能强制 for 命令将文件中的每行都当成单独的一个条目来处理，即便数据中有空格也是如此。一旦从文件中提取出了单独的行，可能需要再次利用循环来提取行中的数据。</p><p>典型的例子是处理/etc/passwd文件中的数据。这要求你逐行遍历/etc/passwd文件，并将 IFS变量的值改成冒号，这样就能分隔开每行中的各个数据段了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable"><span class="token environment constant">IFS</span>.OLD</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$&#39;<span class="token entity" title="\\n">\\n</span>&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">entry</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/passwd<span class="token variable">)</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Values in <span class="token variable">$entry</span> –&quot;</span>
    <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
    <span class="token keyword">for</span> <span class="token for-or-select variable">value</span> <span class="token keyword">in</span> <span class="token variable">$entry</span>
    <span class="token keyword">do</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable">$value</span>&quot;</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本使用了两个不同的 IFS 值来解析数据。第一个 IFS 值解析出/etc/passwd文件中的单独的行。内部 for 循环接着将 IFS 的值修改为冒号，允许你从/etc/passwd的行中解析出单独的值。</p><p>在运行这个脚本时，你会得到如下输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh demo2.sh
demo2.sh:行3: IFS.OLD=: 未找到命令
Values in root:x:0:0:root:/root:/bin/bash –
 root
 x
 0
 0
 root
 /root
 /bin/bash
Values in bin:x:1:1:bin:/bin:/sbin/nologin -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内部循环会解析出/etc/passwd每行中的各个值。这种方法在处理外部导入电子表格所采用的逗号分隔的数据时也很方便。</p><h4 id="控制循环" tabindex="-1"><a class="header-anchor" href="#控制循环" aria-hidden="true">#</a> 控制循环</h4><ul><li>break 退出任意类型的循环，包括 <code>while</code> 和 <code>until</code> 循环</li><li><ul><li>跳出单个循环</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment">#!/bin/bash</span>
  
  <span class="token keyword">for</span> <span class="token for-or-select variable">var1</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span>
  <span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration number: <span class="token variable">$var1</span>&quot;</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The for loop is completed&quot;</span>
  ---
  <span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo3.sh</span>
  Iteration number: <span class="token number">1</span>
  Iteration number: <span class="token number">2</span>
  Iteration number: <span class="token number">3</span>
  Iteration number: <span class="token number">4</span>
  The <span class="token keyword">for</span> loop is completed
  ------------
  
  <span class="token assign-left variable">var2</span><span class="token operator">=</span><span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-lt</span> <span class="token number">8</span> <span class="token punctuation">]</span>
  <span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var2</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration: <span class="token variable">$var2</span>&quot;</span>
      <span class="token assign-left variable">var2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var2</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
  <span class="token keyword">done</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The while loop is completed&quot;</span>
  ------------
  <span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo3.sh</span>
  Iteration: <span class="token number">1</span>
  Iteration: <span class="token number">2</span>
  Iteration: <span class="token number">3</span>
  Iteration: <span class="token number">4</span>
  The <span class="token keyword">while</span> loop is completed
  ------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>跳出内部循环</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">do</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$a</span>&quot;</span>
      <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
      <span class="token keyword">do</span>
          <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$b</span> <span class="token parameter variable">-eq</span> <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
              <span class="token builtin class-name">break</span>
          <span class="token keyword">fi</span>
          <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$b</span>&quot;</span>
      <span class="token keyword">done</span>
  <span class="token keyword">done</span>
  ---
  Outer loop: <span class="token number">1</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  Outer loop: <span class="token number">2</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  Outer loop: <span class="token number">3</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  ---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>跳出外部循环 break n</p><p>其中 n 指定了要跳出的循环层级。默认情况下， n 为 1 ，表明跳出的是当前的循环。如果你将n 设为 2 ， break 命令就会停止下一级的外部循环。</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">do</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;Outer loop: <span class="token variable">$a</span>&quot;</span>
      <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
      <span class="token keyword">do</span>
      <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$b</span> <span class="token parameter variable">-gt</span> <span class="token number">4</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
          <span class="token builtin class-name">break</span> <span class="token number">2</span>
      <span class="token keyword">fi</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inner loop: <span class="token variable">$b</span>&quot;</span>
      <span class="token keyword">done</span>
  <span class="token keyword">done</span>
  ---
  Outer loop: <span class="token number">1</span>
   Inner loop: <span class="token number">1</span>
   Inner loop: <span class="token number">2</span>
   Inner loop: <span class="token number">3</span>
   Inner loop: <span class="token number">4</span>
  ---
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>continue</li></ul><p>可以提前中止某次循环中的命令，但并不会完全终止整个循环。可以在循环内部设置shell不执行命令的条件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> var1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> var1 <span class="token operator">&lt;</span> <span class="token number">15</span><span class="token punctuation">;</span> var1<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-gt</span> <span class="token number">5</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">continue</span>
    <span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration number: <span class="token variable">$var1</span>&quot;</span>
<span class="token keyword">done</span>
---
Iteration number: <span class="token number">1</span>
Iteration number: <span class="token number">2</span>
Iteration number: <span class="token number">3</span>
Iteration number: <span class="token number">4</span>
Iteration number: <span class="token number">5</span>
Iteration number: <span class="token number">10</span>
Iteration number: <span class="token number">11</span>
Iteration number: <span class="token number">12</span>
Iteration number: <span class="token number">13</span>
Iteration number: <span class="token number">14</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 if-then 语句的条件被满足时（值大于5且小于10），shell会执行 continue 命令，跳过此次循环中剩余的命令，但整个循环还会继续。当 if-then 的条件不再被满足时，一切又回到正轨。</p><p>也可以在 while 和 until 循环中使用 continue 命令，但要特别小心。当shell执行 continue 命令时，它会跳过剩余的命令。如果你在其中某个条件里对测试条件变量进行增值，问题就会出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">var1</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;while iteration: <span class="token variable">$var1</span>&quot;</span>
    <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-lt</span> <span class="token number">15</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
 <span class="token function">sleep</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-gt</span> <span class="token number">5</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$var1</span> <span class="token parameter variable">-lt</span> <span class="token number">10</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">continue</span>
    <span class="token keyword">fi</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; Inside iteration number: <span class="token variable">$var1</span>&quot;</span>
    <span class="token assign-left variable">var1</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$var1</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
---
<span class="token keyword">while</span> iteration: <span class="token number">0</span>
 Inside iteration number: <span class="token number">0</span>
<span class="token keyword">while</span> iteration: <span class="token number">1</span>
 Inside iteration number: <span class="token number">1</span>
<span class="token keyword">while</span> iteration: <span class="token number">2</span>
 Inside iteration number: <span class="token number">2</span>
<span class="token keyword">while</span> iteration: <span class="token number">3</span>
 Inside iteration number: <span class="token number">3</span>
<span class="token keyword">while</span> iteration: <span class="token number">4</span>
 Inside iteration number: <span class="token number">4</span>
<span class="token keyword">while</span> iteration: <span class="token number">5</span>
 Inside iteration number: <span class="token number">5</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
<span class="token keyword">while</span> iteration: <span class="token number">6</span>
------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 if-then 的条件成立之前，所有一切看起来都很正常，然后shell执行了 continue 命令。当shell执行 continue 命令时，它跳过了 while 循环中余下的命令。不幸的是，被跳过的部分正是 $var1 计数变量增值的地方，而这个变量又被用于 while 测试命令中。这意味着这个变量的值不会再变化了，从前面连续的输出显示中你也可以看出来。</p><p>和 break 命令一样， continue 命令也允许通过命令行参数指定要继续执行哪一级循环：</p><p>continue n</p><p>其中 n 定义了要继续的循环层级。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Iteration <span class="token variable">$a</span>:&quot;</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> b <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> b<span class="token operator">++</span> <span class="token punctuation">))</span></span>
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token number">4</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">continue</span> <span class="token number">2</span>
        <span class="token keyword">fi</span>
        <span class="token assign-left variable">var3</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$a</span> * <span class="token variable">$b</span> <span class="token punctuation">]</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot; The result of <span class="token variable">$a</span> * <span class="token variable">$b</span> = <span class="token variable">$var3</span>&quot;</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
---
Iteration <span class="token number">1</span>:
 The result of <span class="token number">1</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>
 The result of <span class="token number">1</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">2</span>
Iteration <span class="token number">2</span>:
 The result of <span class="token number">2</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">2</span>
 The result of <span class="token number">2</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">4</span>
Iteration <span class="token number">3</span>:
Iteration <span class="token number">4</span>:
 The result of <span class="token number">4</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">4</span>
 The result of <span class="token number">4</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">8</span>
Iteration <span class="token number">5</span>:
 The result of <span class="token number">5</span> * <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">5</span>
 The result of <span class="token number">5</span> * <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">10</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处用 continue 命令来停止处理循环内的命令，但会继续处理外部循环。注意，值为 3 的那次迭代并没有处理任何内部循环语句，因为尽管 continue 命令停止了处理过程，但外部循环依然会继续。</p><h4 id="重定向循环的输出" tabindex="-1"><a class="header-anchor" href="#重定向循环的输出" aria-hidden="true">#</a> 重定向循环的输出</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> /home/shell/*
<span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$file</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a directory&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$file</span> is a file&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span> <span class="token operator">&gt;</span> output.txt

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The number is <span class="token variable">$a</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">&gt;&gt;</span> output.txt
---
/home/shell/demo6.sh is a <span class="token function">file</span>
/home/shell/demo7.sh is a <span class="token function">file</span>
/home/shell/demo.sh is a <span class="token function">file</span>
/home/shell/output.txt is a <span class="token function">file</span>
The number is <span class="token number">1</span>
The number is <span class="token number">2</span>
The number is <span class="token number">3</span>
The number is <span class="token number">4</span>
The number is <span class="token number">5</span>
The number is <span class="token number">6</span>
The number is <span class="token number">7</span>
The number is <span class="token number">8</span>
The number is <span class="token number">9</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将循环的结果管接给另一个命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">state</span> <span class="token keyword">in</span> <span class="token string">&quot;North Dakota&quot;</span> Connecticut Illinois Alabama Tennessee
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$state</span> is the next place to go&quot;</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">sort</span>
------------
Alabama is the next place to go
Connecticut is the next place to go
Illinois is the next place to go
North Dakota is the next place to go
Tennessee is the next place to go
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="综合实例" tabindex="-1"><a class="header-anchor" href="#综合实例" aria-hidden="true">#</a> 综合实例</h4><ul><li>查找可执行文件</li></ul><p>首先是创建一个 for 循环，对环境变量 PATH 中的目录进行迭代。处理的时候别忘了设置 IFS 分隔符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token keyword">for</span> <span class="token for-or-select variable">folder</span> <span class="token keyword">in</span> <span class="token environment constant">$PATH</span>
<span class="token keyword">do</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你已经将各个目录存放在了变量 $folder 中，可以使用另一个 for 循环来迭代特定目录中的所有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$folder</span>/*
<span class="token keyword">do</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一步是检查各个文件是否具有可执行权限，你可以使用 if-then 测试功能来实现。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$file</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable">$file</span>&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，搞定了！将这些代码片段组合成脚本就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span>:
<span class="token keyword">for</span> <span class="token for-or-select variable">folder</span> <span class="token keyword">in</span> <span class="token environment constant">$PATH</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$folder</span>:&quot;</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token variable">$folder</span>/*
    <span class="token keyword">do</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$file</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable">$file</span>&quot;</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span> <span class="token operator">|</span> <span class="token function">more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行这段代码时，你会得到一个可以在命令行中使用的可执行文件的列表。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/sbin:
/usr/local/bin:
/usr/sbin:
 /usr/sbin/abrt-auto-reporting
 /usr/sbin/abrt-configuration
 /usr/sbin/abrtd
<span class="token punctuation">..</span><span class="token punctuation">..</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建多个用户账户</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">input</span><span class="token operator">=</span><span class="token string">&quot;users.csv&quot;</span>
<span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;,&#39;</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> userid name
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;adding <span class="token variable">$userid</span>&quot;</span>
    <span class="token function">useradd</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> <span class="token parameter variable">-m</span> <span class="token variable">$userid</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$input</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">tail</span> <span class="token parameter variable">-3</span> /etc/passwd<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>christine,Christine Bresnahan
barbara,Barbara Blum
tim,Timothy Bresnahan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh user.sh
adding christine
adding barbara
adding tim
christine:x:1002:1002:Christine Bresnahan:/home/christine:/bin/bash
barbara:x:1003:1003:Barbara Blum:/home/barbara:/bin/bash
tim:x:1004:1004:Timothy Bresnahan:/home/tim:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理用户输入" tabindex="-1"><a class="header-anchor" href="#处理用户输入" aria-hidden="true">#</a> 处理用户输入</h3><h4 id="传递与读取参数-n" tabindex="-1"><a class="header-anchor" href="#传递与读取参数-n" aria-hidden="true">#</a> 传递与读取参数 $n</h4>`,133),M={href:"http://demo.sh",target:"_blank",rel:"noopener noreferrer"},G=i(`<p>在脚本内通过 \`$n\` 来获取参数（ $0 是程序名，$1 是第一个参数， $2 是第二个参数，依次类推，直到第九个参数 $9 ）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> 程序名称： <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> 参数1 <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> 参数2 <span class="token variable">$2</span>

---
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo4.sh 123 3</span>
程序名称： demo4.sh
参数1 <span class="token number">123</span>
参数2 <span class="token number">3</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P=n("p",{10:""},"如果脚本需要的命令行参数不止9个，你仍然可以处理，但是需要稍微修改一下变量名。在第9个变量之后，你必须在变量数字周围加上花括号，比如 $",-1),H=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> 程序名称： <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> 参11 <span class="token variable">$11</span>
<span class="token builtin class-name">echo</span> 参11 <span class="token variable">\${11}</span>
<span class="token builtin class-name">echo</span> 参12 <span class="token variable">\${12}</span>

---
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo4.sh 1 2 3 4 5 6 7 8 9 10 &quot;sdfw6513wer&quot; 12 13</span>
程序名称： demo4.sh
参11 <span class="token number">11</span>
参11 sdfw6513wer
参12 <span class="token number">12</span>
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这种写法是不可取的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> Hello <span class="token variable">$1</span>, glad to meet you.
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, you did not identify yourself. &quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="跟踪参数" tabindex="-1"><a class="header-anchor" href="#跟踪参数" aria-hidden="true">#</a> 跟踪参数 $# $* $@</h4><h5>参数统计</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> Usage: <span class="token variable">$0</span> a b
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> The last parameter is <span class="token variable">\${<span class="token operator">!</span><span class="token operator">#</span>}</span>
<span class="token builtin class-name">echo</span> The last parameter is <span class="token variable">$#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>抓取所有的数据</h5><p>$* 和 $@ 变量可以用来轻松访问所有的参数。</p><p>$* 所有参数当作一个单词保存</p><p>$@ 所有参数当作同一字符串中的多个独立的单词，通常通过 for 命令得到每个参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> parameter <span class="token punctuation">\\</span><span class="token variable">$*</span><span class="token builtin class-name">:</span> <span class="token variable">$*</span>
<span class="token builtin class-name">echo</span> parameter <span class="token punctuation">\\</span><span class="token variable">$@</span><span class="token builtin class-name">:</span> <span class="token variable">$@</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment">#</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$*</span> Parameter #<span class="token variable">$count</span> = <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token assign-left variable">count2</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;\\<span class="token variable">$@</span> Parameter #<span class="token variable">$count2</span> = <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count2</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count2</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$* Parameter #10 = 1 2 3 4 5 6 7 8 9 10 sdfw6513wer 12 13
$@ Parameter #100 = 1
$@ Parameter #101 = 2
$@ Parameter #102 = 3
$@ Parameter #103 = 4
$@ Parameter #104 = 5
$@ Parameter #105 = 6
$@ Parameter #106 = 7
$@ Parameter #107 = 8
$@ Parameter #108 = 9
$@ Parameter #109 = 10
$@ Parameter #110 = sdfw6513wer
$@ Parameter #111 = 12
$@ Parameter #112 = 13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用 for 命令遍历这两个特殊变量，你能看到它们是如何不同地处理命令行参数的。 $* 变量会将所有参数当成单个参数，而 $@ 变量会单独处理每个参数。这是遍历命令行参数的一个绝妙方法。</p><h4 id="移动变量" tabindex="-1"><a class="header-anchor" href="#移动变量" aria-hidden="true">#</a> 移动变量</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#count=1</span>
<span class="token comment">#while [ -n &quot;$1&quot; ]</span>
<span class="token comment">#do</span>
<span class="token comment">#    echo &quot;Parameter #$count = $1&quot;</span>
<span class="token comment">#    count=$[ $count + 1 ]</span>
<span class="token comment">#    shift</span>
<span class="token comment">#done</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original parameters: <span class="token variable">$*</span>&quot;</span>
<span class="token builtin class-name">shift</span> <span class="token number">2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Here&#39;s the new first parameter: <span class="token variable">$1</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh shift.sh 1 2 3 4 5 6 7 8 9 10

The original parameters: 1 2 3 4 5 6 7 8 9 10
Here&#39;s the new first parameter: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本通过测试第一个参数值的长度执行了一个 while 循环。当第一个参数的长度为零时，循环结束。测试完第一个参数后， shift 命令会将所有参数的位置移动一个位置。</p><hr><p><strong>窍门</strong> 使用 shift 命令的时候要小心。如果某个参数被移出，它的值就被丢弃了，无法再恢复。</p><hr><h4 id="处理选项" tabindex="-1"><a class="header-anchor" href="#处理选项" aria-hidden="true">#</a> 处理选项</h4><h5>处理简单选项</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    -b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>

$ ./test15.sh <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option
Found the <span class="token parameter variable">-c</span> option
<span class="token parameter variable">-d</span> is not an option
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>分离参数和选项</h5><p>对Linux来说，这个特殊字符是双破折线（ -- ）。shell会用双破折线来表明选项列表结束。在双破折线之后，脚本就可以放心地将剩下的命令行参数当作参数，而不是选项来处理了。</p><p>要检查双破折线，只要在 case 语句中加一项就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --<span class="token punctuation">)</span> <span class="token builtin class-name">shift</span>
        <span class="token builtin class-name">break</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter #<span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在遇到双破折线时，脚本用 break 命令来跳出 while 循环。由于过早地跳出了循环，我们需要再加一条 shift 命令来将双破折线移出参数变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh test16.sh -c -a -b test1 test2 test3
Found the -c option
Found the -a option
Found the -b option
test1 is not an option
test2 is not an option
test3 is not an option

sh test16.sh -c -a -b -- test1 test2 test3
Found the -c option
Found the -a option
Found the -b option
Parameter #1: test1
Parameter #2: test2
Parameter #3: test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当脚本遇到双破折线时，它会停止处理选项，并将剩下的参数都当作命令行参数。</p><h5>处理带值的选项</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        -b<span class="token punctuation">)</span> <span class="token assign-left variable">param</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with parameter value <span class="token variable">$param</span>&quot;</span>
            <span class="token builtin class-name">shift</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        --<span class="token punctuation">)</span> <span class="token builtin class-name">shift</span>
            <span class="token builtin class-name">break</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter #<span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sh</span> demo4.sh <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> test1 <span class="token parameter variable">-d</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with parameter value test1
<span class="token parameter variable">-d</span> is not an option
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中， case 语句定义了三个它要处理的选项。 -b 选项还需要一个额外的参数值。由于要处理的参数是 $1 ，额外的参数值就应该位于 $2 （因为所有的参数在处理完之后都会被移出）。只要将参数值从 $2 变量中提取出来就可以了。当然，因为这个选项占用了两个参数位，所以你还需要使用 shift 命令多移动一个位置。</p><p>只用这些基本的特性，整个过程就能正常工作，不管按什么顺序放置选项（但要记住包含每个选项相应的选项参数）。</p><p>现在shell脚本中已经有了处理命令行选项的基本能力，但还有一些限制。比如，如果你想将 多个选项放进一个参数中时，它就不能工作了。</p>`,36),B={href:"http://test.sh",target:"_blank",rel:"noopener noreferrer"},U=i(`<h5>getopt</h5><p>它能够识别命令行参数，从而在脚本中解析它们时更方便。</p><blockquote><p>getopt optstring parameters</p><p>optstring 是这个过程的关键所在。它定义了命令行有效的选项字母，还定义了哪些选项字母需要参数值。 首先，在 optstring 中列出你要在脚本中用到的每个命令行选项字母。然后，在每个需要参数值的选项字母后加一个冒号。 getopt 命令会基于你定义的 optstring 解析提供的参数。</p></blockquote><p>简单例子:</p><blockquote><p>如果指定了一个不在 optstring 中的选项，默认情况下， getopt 命令会产生一条错误消息。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># getopt ab:cd -a -b test1 -cd test2 test3</span>
 <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> test1 <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> -- test2 test3
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># getopt ab:cd -a -b test1 -cde test2 test3</span>
getopt：无效选项 -- e
 <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> test1 <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> -- test2 test3
 <span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># getopt -q ab:cd -a -b test1 -cde test2 test3</span>
 <span class="token parameter variable">-a</span> <span class="token parameter variable">-b</span> <span class="token string">&#39;test1&#39;</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-d</span> -- <span class="token string">&#39;test2&#39;</span> <span class="token string">&#39;test3&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意 ： getopt 命令选项必须出现在 optstring 之前。</p></blockquote><p><strong>在脚本中使用</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">set</span> -- <span class="token variable"><span class="token variable">$(</span>getopt <span class="token parameter variable">-q</span> ab:cd <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        -a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -b<span class="token punctuation">)</span> <span class="token assign-left variable">param</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with parameter value <span class="token variable">$param</span>&quot;</span>
            <span class="token builtin class-name">shift</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        -c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        --<span class="token punctuation">)</span> <span class="token builtin class-name">shift</span>
            <span class="token builtin class-name">break</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> is not an option&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter #<span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo5.sh -ac</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-c</span> option

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo5.sh -a -b test1 -cd test2 test3 test4</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with parameter value <span class="token string">&#39;test1&#39;</span>
Found the <span class="token parameter variable">-c</span> option
<span class="token parameter variable">-d</span> is not an option
Parameter <span class="token comment">#1: &#39;test2&#39;</span>
Parameter <span class="token comment">#2: &#39;test3&#39;</span>
Parameter <span class="token comment">#3: &#39;test4&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getopt 命令并不擅长处理带空格和引号的参数值。它会将空格当作参数分隔符，而不是根据双引号将二者当作一个参数。幸而还有另外一个办法能解决这个问题 <strong>（使用更高级的 getopts）</strong> 。</p><h5>getopts</h5><p>getopt会将命令行上选项和参数处理后只生成一个输出，而 getopts 命令能够和已有的shell参数变量配合默契。</p><p>每次调用它时，它一次只处理命令行上检测到的一个参数。处理完所有的参数后，它会退出并返回一个大于0的退出状态码。这让它非常适合用解析命令行所有参数的循环中。</p><p>getopts 命令的格式如下：</p><p><code>getopts optstring variable</code></p><p>optstring 值类似于 getopt 命令中的那个。有效的选项字母都会列在 optstring 中，如果选项字母要求有个参数值，就加一个冒号。要去掉错误消息的话，可以在 optstring 之前加一个冒号。 getopts 命令将当前参数保存在命令行中定义的 variable 中。</p><p>getopts 命令会用到两个环境变量。如果选项需要跟一个参数值， OPTARG 环境变量就会保存这个值。 OPTIND 环境变量保存了参数列表中 getopts 正在处理的参数位置。这样你就能在处理完选项之后继续处理其他命令行参数了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span>
<span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> :ab:c opt
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$opt</span>&quot;</span> <span class="token keyword">in</span>
        a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with value <span class="token variable">$OPTARG</span>&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Unknown option: <span class="token variable">$opt</span>&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo5.sh -ab test1 -c</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with value test1
Found the <span class="token parameter variable">-c</span> option
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -b &quot;test1 test2&quot; -a</span>
Found the <span class="token parameter variable">-b</span> option, with value test1 test2
Found the <span class="token parameter variable">-a</span> option
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -abtest1</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with value test1
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -acde</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-c</span> option
Unknown option: ?
Unknown option: ?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>特性：</strong></p><ul><li>可以在参数值中包含空格</li><li>将选项字母和参数值放在一起使用，而不用加空格</li><li>将命令行上找到的所有未定义的选项统一输出成问号</li><li>知道何时停止处理选项，并将参数留给你处理</li></ul><p>在 getopts 处理每个选项时，它会将 OPTIND 环境变量值增一。在 getopts 完成处理时，你可以使用 shift 命令和 OPTIND 值来移动参数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> :ab:cd opt
<span class="token keyword">do</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$opt</span>&quot;</span> <span class="token keyword">in</span>
        a<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -a option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        b<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -b option, with value <span class="token variable">$OPTARG</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        c<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -c option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        d<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Found the -d option&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Unknown option: <span class="token variable">$opt</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token builtin class-name">shift</span> $<span class="token punctuation">[</span> <span class="token environment constant">$OPTIND</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token comment">#</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">param</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Parameter <span class="token variable">$count</span>: <span class="token variable">$param</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># -a -b test1 -d test2 test3 test4</span>
Found the <span class="token parameter variable">-a</span> option
Found the <span class="token parameter variable">-b</span> option, with value test1
Found the <span class="token parameter variable">-d</span> option
Parameter <span class="token number">1</span>: test2
Parameter <span class="token number">2</span>: test3
Parameter <span class="token number">3</span>: test4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将选项标准化" tabindex="-1"><a class="header-anchor" href="#将选项标准化" aria-hidden="true">#</a> 将选项标准化</h4><p>在创建shell脚本时，显然可以控制具体怎么做。你完全可以决定用哪些字母选项以及它们的 用法。</p><p>但有些字母选项在Linux世界里已经拥有了某种程度的标准含义。如果你能在shell脚本中支 持这些选项，脚本看起来能更友好一些：</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>选项  描述
-a  显示所有对象
-c  生成一个计数
-d  指定一个目录
-e  扩展一个对象
-f  指定读入数据的文件
-h  显示命令的帮助信息
-i  忽略文本大小写
-l  产生输出的长格式版本
-n  使用非交互模式（批处理）
-o  将所有输出重定向到的指定的输出文件
-q  以安静模式运行
-r  递归地处理目录和文件
-s  以安静模式运行
-v  生成详细输出
-x  排除某个对象
-y  对所有问题回答yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获得用户输入-read" tabindex="-1"><a class="header-anchor" href="#获得用户输入-read" aria-hidden="true">#</a> 获得用户输入 read</h4><p>尽管命令行选项和参数是从脚本用户处获得输入的一种重要方式，但有时脚本的交互性还需要更强一些。比如你想要在脚本运行时问个问题，并等待运行脚本的人来回答</p><h5>基本的读取 read -p</h5><p>read 命令从标准输入（键盘）或另一个文件描述符中接受输入。在收到输入后， read 命令 会将数据放进一个变量。下面是 read 命令的最简单用法。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;Enter your name: &quot;</span>
<span class="token builtin class-name">read</span> name
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token variable">$name</span>, welcome to my program. &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh test21.sh
Enter your name: xiao yu
Hello xiao yu, welcome to my program.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>read 命令包含了 -p 选项，允许你直接在 read 命令行指定提示符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please enter your age: &quot;</span> age name
<span class="token assign-left variable">days</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$age</span> * <span class="token number">365</span> <span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;name <span class="token variable">$name</span>; That makes you over <span class="token variable">$days</span> days old! &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh test22.sh
Please enter your age: 10 yu
name yu; That makes you over 3650 days old!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在 read 命令行中不指定变量。如果是这样， read 命令会将它收到的任何数据都放进特殊环境变量 REPLY 中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Testing the REPLY Environment variable</span>
<span class="token comment">#</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter your name: &quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> Hello <span class="token environment constant">$REPLY</span>, welcome to my program.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh test24.sh
Enter your name: Christine
Hello Christine, welcome to my program.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>REPLY 环境变量会保存输入的所有数据，可以在shell脚本中像其他变量一样使用</p><h5>超时 read -t</h5><p>使用 read 命令时要当心。脚本很可能会一直苦等着脚本用户的输入。如果不管是否有数据输入，脚本都必须继续执行，你可以用 -t 选项来指定一个计时器。 -t 选项指定了 read 命令等待输入的秒数。当计时器过期后， read 命令会返回一个非零退出状态码。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Please enter your name: &quot;</span> name
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello <span class="token variable">$name</span>, welcome to my script&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, too slow! &quot;</span>
<span class="token keyword">fi</span>

$ <span class="token function">sh</span> test25.sh
Please enter your name: Rich
Hello Rich, welcome to my script
$ <span class="token function">sh</span> test25.sh
Please enter your name:
Sorry, too slow<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果计时器过期， read 命令会以非零退出状态码退出。</p><p>当输入的字符达到预设的字符数时，就自动退出，将输入的数据赋给变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-n1</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Do you want to continue [Y/N]? &quot;</span> answer
<span class="token keyword">case</span> <span class="token variable">$answer</span> <span class="token keyword">in</span>
    Y <span class="token operator">|</span> y<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;fine, continue on…&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    N <span class="token operator">|</span> n<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span>
        <span class="token builtin class-name">echo</span> OK, goodbye
    <span class="token builtin class-name">exit</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sh test26.sh
Do you want to continue [Y/N]? Y
fine, continue on…
This is the end of the script
$
$ sh test26.sh
Do you want to continue [Y/N]? n
OK, goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-n 选项和值 1 一起使用，告诉 read 命令在接受单个字符后退出。</p><h5>隐藏方式读取 read -s</h5><p>有时你需要从脚本用户处得到输入，但又在屏幕上显示输入信息。其中典型的例子就是输入的密码，但除此之外还有很多其他需要隐藏的数据类型。</p><p>-s 选项可以避免在 read 命令中输入的数据出现在显示器上（实际上，数据会被显示，只是 read 命令会将文本颜色设成跟背景色一样）。这里有个在脚本中使用 -s 选项的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter your password: &quot;</span> pass
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Is your password really <span class="token variable">$pass</span>? &quot;</span>

$ <span class="token function">sh</span> test27.sh
Enter your password:
Is your password really T3st1ng?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>从文件中读取</h5><p>也可以用 read 命令来读取Linux系统上文件里保存的数据。每次调用 read 命令，它都会从文件中读取一行文本。当文件中再没有内容时， read 命令会退出并返回非零退出状态码。</p><p>其中最难的部分是将文件中的数据传给 read 命令。最常见的方法是对文件使用 cat 命令，将结果通过管道直接传给含有 read 命令的 while 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bas</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token function">cat</span> <span class="token builtin class-name">test</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Line <span class="token variable">$count</span>: <span class="token variable">$line</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Finished processing the file&quot;</span>
$
$ <span class="token function">cat</span> <span class="token builtin class-name">test</span>
The quick brown dog jumps over the lazy fox.
This is a test, this is only a test.
O Romeo, Romeo<span class="token operator">!</span> Wherefore art thou Romeo?
$
$ <span class="token function">sh</span> test28.sh
Line <span class="token number">1</span>: The quick brown dog jumps over the lazy fox.
Line <span class="token number">2</span>: This is a test, this is only a test.
Line <span class="token number">3</span>: O Romeo, Romeo<span class="token operator">!</span> Wherefore art thou Romeo?
Finished processing the <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="呈现数据" tabindex="-1"><a class="header-anchor" href="#呈现数据" aria-hidden="true">#</a> 呈现数据</h3><h4 id="输入和输出" tabindex="-1"><a class="header-anchor" href="#输入和输出" aria-hidden="true">#</a> 输入和输出</h4><p><strong>标准文件描述符</strong></p><p>Linux系统将每个对象当作文件处理。这包括输入和输出进程。Linux用文件描述符（ filedescriptor ）来标识每个文件对象。文件描述符是一个非负整数，可以唯一标识会话中打开的文件。每个进程一次最多可以有九个文件描述符。出于特殊目的，bash shell保留了前三个文件描述符（ 0 、 1 和 2 ）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>文件描述符   缩 写    描 述
0     STDIN  标准输入 &lt;
1     STDOUT  标准输出 &gt; &gt;&gt; 
2     STDERR  标准错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>STDIN</li></ul><p>对终端界面来说，标准输入是键盘。shell从 STDIN 文件描述符对应的键盘获得输入，在用户输入时处理每个字符。 在使用输入重定向符号（ &lt; ）时，Linux会用重定向指定的文件来替换标准输入文件描述符。它会读取文件并提取数据，就如同它是键盘上键入的。许多bash命令能接受 STDIN 的输入，尤其是没有在命令行上指定文件的话。下面是个用 cat 命令处理 STDIN 输入的数据的例子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cat
this is a test
this is a test
this is a second test.
this is a second test.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当在命令行上只输入 cat 命令时，它会从 STDIN 接受输入。输入一行， cat 命令就会显示出一行。</p><p>但你也可以通过 STDIN 重定向符号强制 cat 命令接受来自另一个非 STDIN 文件的输入。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;</span> testfile
This is the first line.
This is the second line.
This is the third line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 cat 命令会用testfile文件中的行作为输入。你可以使用这种技术将数据输入到任何能从STDIN 接受数据的shell命令中。</p><ul><li>STDOUT</li></ul><p>STDOUT 文件描述符代表shell的标准输出。在终端界面上，标准输出就是终端显示器。shell的所有输出（包括shell中运行的程序和脚本）会被定向到标准输出中，也就是显示器。</p><p>默认情况下，大多数bash命令会将输出导向 STDOUT 文件描述符。如第11章中所述，你可以用输出重定向来改变。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">&gt;</span> test2
$ <span class="token function">cat</span> test2
total <span class="token number">20</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">53</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:30 <span class="token builtin class-name">test</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">73</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:23 testfile

$ <span class="token function">who</span> <span class="token operator">&gt;&gt;</span> test2
$ <span class="token function">cat</span> test2
total <span class="token number">20</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">53</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:30 <span class="token builtin class-name">test</span>
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">73</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:23 testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">15</span>:34 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>who 命令生成的输出会被追加到test2文件中已有数据的后面。</p><p>但是，如果你对脚本使用了标准输出重定向，你会遇到一个问题。下面的例子说明了可能会出现什么情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> badfile <span class="token operator">&gt;</span> test3
ls: cannot access badfile: No such <span class="token function">file</span> or directory
$ <span class="token function">cat</span> test3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当命令生成错误消息时，shell并未将错误消息重定向到输出重定向文件。shell创建了输出重定向文件，但错误消息却显示在了显示器屏幕上。注意，在显示test3文件的内容时并没有任何错误。test3文件创建成功了，只是里面是空的。</p><p>shell对于错误消息的处理是跟普通输出分开的。如果你创建了在后台模式下运行的shell脚本，通常你必须依赖发送到日志文件的输出消息。用这种方法的话，如果出现了错误信息，这些信息是不会出现在日志文件中的。你需要换种方法来处理。</p><ul><li>STDERR</li></ul><p>shell通过特殊的 STDERR 文件描述符来处理错误消息。 STDERR 文件描述符代表shell的标准错误输出。shell或shell中运行的程序和脚本出错时生成的错误消息都会发送到这个位置。</p><p>默认情况下， STDERR 文件描述符会和 STDOUT 文件描述符指向同样的地方（尽管分配给它们的文件描述符值不同）。也就是说，默认情况下，错误消息也会输出到显示器输出中。</p><p>但从上面的例子可以看出， STDERR 并不会随着 STDOUT 的重定向而发生改变。使用脚本时，你常常会想改变这种行为，尤其是当你希望将错误消息保存到日志文件中的时候。</p><p><strong>重定向错误</strong></p><p>你已经知道如何用重定向符号来重定向 STDOUT 数据。重定向 STDERR 数据也没太大差别，只要在使用重定向符号时定义 STDERR 文件描述符就可以了。有几种办法实现方法。</p><ul><li>只重定向错误</li></ul><p>STDERR 文件描述符被设成 2 。可以选择只重定向错误消息，将该文件描述符值放在重定向符号前。该值必须紧紧地放在重定向符号前，否则不会工作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> badfile <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test4
$ <span class="token function">cat</span> test4
ls: cannot access badfile: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行该命令，错误消息不会出现在屏幕上了。该命令生成的任何错误消息都会保存在输出文件中。用这种方法，shell会只重定向错误消息，而非普通数据。这里是另一个将 STDOUT 和 STDERR 消息混杂在同一输出中的例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token builtin class-name">test</span> badtest test2 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test5
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">158</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2

$ <span class="token function">cat</span> test5
ls: cannot access test: No such <span class="token function">file</span> or directory
ls: cannot access badtest: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重定向错误和数据</li></ul><p>如果想重定向错误和正常输出，必须用两个重定向符号。需要在符号前面放上待重定向数据所对应的文件描述符，然后指向用于保存数据的输出文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token builtin class-name">test</span> test2 test3 badtest <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test6 <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> test7

$ <span class="token function">cat</span> test6
ls: cannot access test: No such <span class="token function">file</span> or directory
ls: cannot access badtest: No such <span class="token function">file</span> or directory
$ <span class="token function">cat</span> test7
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">158</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:33 test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以用这种方法将脚本的正常输出和脚本生成的错误消息分离开来。这样就可以轻松地识别出错误信息，再不用在成千上万行正常输出数据中翻腾了。</p></blockquote><p>如果愿意，也可以将 STDERR 和 STDOUT 的输出重定向到同一个输出文件。为此bash shell提供了特殊的重定向符号 &amp;&gt; 。当使用 &amp;&gt; 符时，命令生成的所有输出都会发送到同一位置，包括数据和错误。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token builtin class-name">test</span> test2 test3 badtest <span class="token operator">&amp;&gt;</span> test7

$ <span class="token function">cat</span> test7
ls: cannot access test: No such <span class="token function">file</span> or directory
ls: cannot access badtest: No such <span class="token function">file</span> or directory
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">158</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:32 test2
-rw-rw-r-- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-16 <span class="token number">11</span>:33 test3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在脚本中重定向输出输入" tabindex="-1"><a class="header-anchor" href="#在脚本中重定向输出输入" aria-hidden="true">#</a> 在脚本中重定向输出输入</h4><p><strong>重定向输出</strong></p><h5>临时重定向行输出</h5><p>在重定向到文件描述符时，你必须在文件描述符数字之前加一个 &amp; ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This is an error message&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is an error&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is normal output&quot;</span>

$ ./test8
This is an error
This is normal output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，Linux会将 STDERR 导向 STDOUT 。但是，如果你在运行脚本时重定向了STDERR ，脚本中所有导向 STDERR 的文本都会被重定向。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./test8 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test9
This is normal output
$ <span class="token function">cat</span> test9
This is an error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法非常适合在脚本中生成错误消息。如果有人用了你的脚本，他们可以像上面的例子中那样轻松地通过 STDERR 文件描述符重定向错误消息</p><h5>永久重定向脚本中的所有命令 exec</h5><p>如果脚本中有大量数据需要重定向，那重定向每个 echo 语句就会很烦琐。取而代之，你可以用 exec 命令告诉shell在脚本执行期间重定向某个特定文件描述符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>testout
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test of redirecting all output&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;from a script to another file.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;without having to redirect every individual line&quot;</span>

$ ./test10
$ <span class="token function">cat</span> testout
This is a <span class="token builtin class-name">test</span> of redirecting all output
from a script to another file.
without having to redirect every individual line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在脚本执行过程中重定向 STDOUT 。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># redirecting output to different locations</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>testerror
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the start of the script&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;now redirecting all output to another location&quot;</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>testout
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This output should go to the testout file&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;but this should go to the testerror file&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>

$ ./test11
This is the start of the script
now redirecting all output to another location
$ <span class="token function">cat</span> testout
This output should go to the testout <span class="token function">file</span>
$ <span class="token function">cat</span> testerror
but this should go to the testerror <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重定向输入</strong></p><blockquote><p>exec 0&lt; testfile</p></blockquote><p>这个命令会告诉shell它应该从文件 testfile 中获得输入，而不是 STDIN 。这个重定向只要在脚本需要输入时就会作用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span> testfile
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Line #<span class="token variable">$count</span>: <span class="token variable">$line</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

$ ./test12
Line <span class="token comment">#1: This is the first line.</span>
Line <span class="token comment">#2: This is the second line.</span>
Line <span class="token comment">#3: This is the third line.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建自己的重定向" tabindex="-1"><a class="header-anchor" href="#创建自己的重定向" aria-hidden="true">#</a> 创建自己的重定向</h4><p><strong>创建输出文件描述符</strong></p><p>可以用 exec 命令来给输出分配文件描述符。和标准的文件描述符一样，一旦将另一个文件描述符分配给一个文件，这个重定向就会一直有效，直到你重新分配。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#exec 3&gt;test13out</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&gt;</span>test13out
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This should display on the monitor&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;and this should be stored in the file&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Then this should be back on the monitor&quot;</span>

$ ./test13
This should display on the monitor
Then this should be back on the monitor
$ <span class="token function">cat</span> test13out
and this should be stored <span class="token keyword">in</span> the <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本用 exec 命令将文件描述符 3 重定向到另一个文件。当脚本执行 echo 语句时，输出内容会像预想中那样显示在 STDOUT 上。但你重定向到文件描述符 3 的那行 echo 语句的输出却进入了另一个文件。这样你就可以在显示器上保持正常的输出，而将特定信息重定向到文件中（比如日志文件）。</p><p><strong>重定向文件描述符</strong></p><p>现在介绍怎么恢复已重定向的文件描述符。你可以分配另外一个文件描述符给标准文件描述 符，反之亦然。这意味着你可以将 STDOUT 的原来位置重定向到另一个文件描述符，然后再利用 该文件描述符重定向回 STDOUT 。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>test14out
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This should store in the output file&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;along with this line.&quot;</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Now things should be back to normal&quot;</span>

$ ./test14
Now things should be back to normal
$ <span class="token function">cat</span> test14out
This should store <span class="token keyword">in</span> the output <span class="token function">file</span>
along with this line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，脚本将文件描述符 3 重定向到文件描述符1的当前位置，也就是 STDOUT 。这意味着任何发送给文件描述符 3 的输出都将出现在显示器上。</p><p>第二个 exec 命令将 STDOUT 重定向到文件，shell现在会将发送给 STDOUT 的输出直接重定向到输出文件中。但是，文件描述符 3 仍然指向 STDOUT 原来的位置，也就是显示器。如果此时将输出数据发送给文件描述符 3 ，它仍然会出现在显示器上，尽管 STDOUT 已经被重定向了。</p><p>在向 STDOUT （现在指向一个文件）发送一些输出之后，脚本将 STDOUT 重定向到文件描述符 3 的当前位置（现在仍然是显示器）。这意味着现在 STDOUT 又指向了它原来的位置：显示器。</p><p>这个方法可能有点叫人困惑，但这是一种在脚本中临时重定向输出，然后恢复默认输出设置的常用方法。</p><p><strong>创建输入文件描述符</strong></p><p>可以用和重定向输出文件描述符同样的办法重定向输入文件描述符。在重定向到文件之前，先将 STDIN 文件描述符保存到另外一个文件描述符，然后在读取完文件之后再将 STDIN 恢复到它原来的位置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&lt;</span><span class="token file-descriptor important">&amp;0</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span> testfile
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Line #<span class="token variable">$count</span>: <span class="token variable">$line</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span><span class="token file-descriptor important">&amp;6</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Are you done now? &quot;</span> answer
<span class="token keyword">case</span> <span class="token variable">$answer</span> <span class="token keyword">in</span>
    Y<span class="token operator">|</span>y<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Goodbye&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    N<span class="token operator">|</span>n<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;Sorry, this is the end.&quot;</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
$ ./test15
Line <span class="token comment">#1: This is the first line.</span>
Line <span class="token comment">#2: This is the second line.</span>
Line <span class="token comment">#3: This is the third line.</span>
Are you <span class="token keyword">done</span> now? y
Goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，文件描述符 6 用来保存 STDIN 的位置。然后脚本将 STDIN 重定向到一个文件。read 命令的所有输入都来自重定向后的 STDIN （也就是输入文件）。</p><p>在读取了所有行之后，脚本会将 STDIN 重定向到文件描述符 6 ，从而将 STDIN 恢复到原先的位置。该脚本用了另外一个 read 命令来测试 STDIN 是否恢复正常了。这次它会等待键盘的输入。</p><p><strong>创建读写文件描述符</strong></p><p>尽管看起来可能会很奇怪，但是你也可以打开单个文件描述符来作为输入和输出。可以用同一个文件描述符对同一个文件进行读写。</p><p>不过用这种方法时，你要特别小心。由于你是对同一个文件进行数据读写，shell会维护一个内部指针，指明在文件中的当前位置。任何读或写都会从文件指针上次的位置开始。如果不够小心，它会产生一些令人瞠目的结果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&lt;&gt;</span> testfile
<span class="token builtin class-name">read</span> line <span class="token operator">&lt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Read: <span class="token variable">$line</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>


$ <span class="token function">cat</span> testfile
This is the first line.
This is the second line.
This is the third line.
$ ./test16
Read: This is the first line.
$ <span class="token function">cat</span> testfile
This is the first line.
This is a <span class="token builtin class-name">test</span> line
ine.
This is the third line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这个例子用了 exec 命令将文件描述符 3 分配给文件 testfile 以进行文件读写。接下来，它通过分配好的文件描述符，使用 read 命令读取文件中的第一行，然后将这一行显示在 STDOUT 上。最后，它用 echo 语句将一行数据写入由同一个文件描述符打开的文件中。</p></blockquote><p>在运行脚本时，一开始还算正常。输出内容表明脚本读取了testfile文件中的第一行。但如果你在脚本运行完毕后，查看testfile文件内容的话，你会发现写入文件中的数据覆盖了已有的数据。</p><p>当脚本向文件中写入数据时，它会从文件指针所处的位置开始。 read 命令读取了第一行数据，所以它使得文件指针指向了第二行数据的第一个字符。在 echo 语句将数据输出到文件时，它会将数据放在文件指针的当前位置，覆盖了该位置的已有数据。</p><p><strong>关闭文件描述符</strong></p><p>如果你创建了新的输入或输出文件描述符，shell会在脚本退出时自动关闭它们。然而在有些情况下，你需要在脚本结束前手动关闭文件描述符。</p><p>要关闭文件描述符，将它重定向到特殊符号 &amp;- 。</p><p>exec 3&gt;&amp;- 该语句会关闭文件描述符 3 ，不再在脚本中使用它。这里有个例子来说明当你尝试使用已关闭的文件描述符时会怎样。一旦关闭了文件描述符，就不能在脚本中向它写入任何数据，否则shell会生成错误消息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test17file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&amp;</span>-
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This won&#39;t work&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>

$ ./badtest
./badtest: <span class="token number">3</span>: Bad <span class="token function">file</span> descriptor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在关闭文件描述符时还要注意另一件事。如果随后你在脚本中打开了同一个输出文件，shell 会用一个新文件来替换已有文件。这意味着如果你输出数据，它就会覆盖已有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test17file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&amp;</span>-
<span class="token function">cat</span> test17file
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test17file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This&#39;ll be bad&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>

$ ./test17
This is a <span class="token builtin class-name">test</span> line of data
$ <span class="token function">cat</span> test17file
This&#39;ll be bad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在向test17file文件发送一个数据字符串并关闭该文件描述符之后，脚本用了 cat 命令来显示文件的内容。到目前为止，一切都还好。下一步，脚本重新打开了该输出文件并向它发送了另一个数据字符串。当显示该输出文件的内容时，你所能看到的只有第二个数据字符串。shell覆盖了原来的输出文件。</p></blockquote><h4 id="列出打开的文件描述符-lsof" tabindex="-1"><a class="header-anchor" href="#列出打开的文件描述符-lsof" aria-hidden="true">#</a> 列出打开的文件描述符 lsof</h4><p>该命令会产生大量的输出。它会显示当前Linux系统上打开的每个文件的有关信息。这包括后台运行的所有进程以及登录到系统的任何用户。有大量的命令行选项和参数可以用来帮助过滤 lsof 的输出。最常用的有 -p 和 -d ，前者允许指定进程ID（PID），后者允许指定要显示的文件描述符编号。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# lsof -a -p $$ -d 0,1,2
COMMAND  PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
bash    1458 root    0u   CHR  136,0      0t0    3 /dev/pts/0
bash    1458 root    1u   CHR  136,0      0t0    3 /dev/pts/0
bash    1458 root    2u   CHR  136,0      0t0    3 /dev/pts/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>COMMAND 正在运行的命令名的前9个字符</li><li>PID 进程的PID</li><li>USER 进程属主的登录名</li><li>FD 文件描述符号以及访问类型（ r 代表读， w 代表写， u 代表读写）</li><li>TYPE 文件的类型（ CHR 代表字符型， BLK 代表块型， DIR 代表目录， REG 代表常规文件）</li><li>DEVICE 设备的设备号（主设备号和从设备号）</li><li>SIZE 如果有的话，表示文件的大小</li><li>NODE 本地文件的节点号</li><li>NAME 文件名</li></ul><p>与 STDIN 、 STDOUT 和 STDERR 关联的文件类型是字符型。因为 STDIN 、 STDOUT 和 STDERR 文件描述符都指向终端，所以输出文件的名称就是终端的设备名。所有3种标准文件都支持读和写（尽管向 STDIN 写数据以及从 STDOUT 读数据看起来有点奇怪）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span> test18file1
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span> test18file2
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">7</span>&lt;</span> testfile
/usr/sbin/lsof <span class="token parameter variable">-a</span> <span class="token parameter variable">-p</span> <span class="token variable">$$</span> -d0,1,2,3,6,7


$ ./test18
COMMAND PID <span class="token environment constant">USER</span> FD TYPE DEVICE SIZE NODE NAME
test18 <span class="token number">3594</span> demo 0u CHR <span class="token number">136,0</span> <span class="token number">2</span> /dev/pts/0
test18 <span class="token number">3594</span> demo 1u CHR <span class="token number">136,0</span> <span class="token number">2</span> /dev/pts/0
test18 <span class="token number">3594</span> demo 2u CHR <span class="token number">136,0</span> <span class="token number">2</span> /dev/pts/0
<span class="token number">18</span> <span class="token number">3594</span> demo 3w REG <span class="token number">253,0</span> <span class="token number">0</span> <span class="token number">360712</span> /home/demo/test18file1
<span class="token number">18</span> <span class="token number">3594</span> demo 6w REG <span class="token number">253,0</span> <span class="token number">0</span> <span class="token number">360715</span> /home/demo/test18file2
<span class="token number">18</span> <span class="token number">3594</span> demo 7r REG <span class="token number">253,0</span> <span class="token number">73</span> <span class="token number">360717</span> /home/demo/testfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="阻止命令输出" tabindex="-1"><a class="header-anchor" href="#阻止命令输出" aria-hidden="true">#</a> 阻止命令输出</h4><p>有时候，你可能不想显示脚本的输出。这在将脚本作为后台进程运行时很常见。如果在运行在后台的脚本出现错误消息，shell会通过电子邮件将它们发给进程的属主。这会很麻烦，尤其是当运行会生成很多烦琐的小错误的脚本时。</p><p>要解决这个问题，可以将 STDERR 重定向到一个叫作null文件的特殊文件。null文件跟它的名字很像，文件里什么都没有。shell输出到null文件的任何数据都不会保存，全部都被丢掉了。</p><p>在Linux系统上null文件的标准位置是/dev/null。你重定向到该位置的任何数据都会被丢掉，不会显示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> <span class="token operator">&gt;</span> /dev/null
<span class="token function">cat</span> /dev/null
<span class="token function">ls</span> <span class="token parameter variable">-al</span> badfile test16 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建临时文件" tabindex="-1"><a class="header-anchor" href="#创建临时文件" aria-hidden="true">#</a> 创建临时文件</h4><p><strong>创建本地临时文件</strong></p><p>模板可以包含任意文本文件名，在文件名末尾加上6个 X 就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mktemp testing.XXXXXX
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> testing*
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:30 testing.UfIi13
$ mktemp testing.XXXXXX
testing.1DRLuV
$ mktemp testing.XXXXXX
testing.lVBtkW
$ mktemp testing.XXXXXX
testing.PgqNKG
$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> testing*
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:57 testing.1DRLuV
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:57 testing.PgqNKG
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:30 testing.UfIi13
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> Oct <span class="token number">17</span> <span class="token number">21</span>:57 testing.lVBtkW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">tempfile</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp test19.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span><span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This script writes to temp file <span class="token variable">$tempfile</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the first line&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the second line.&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the last line.&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;3</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">3</span>&gt;&amp;</span>-
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Done creating temp file. The contents are:&quot;</span>
<span class="token function">cat</span> <span class="token variable">$tempfile</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$tempfile</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null

$ ./test19
This script writes to temp <span class="token function">file</span> test19.vCHoya
Done creating temp file. The contents are:
This is the first line
This is the second line.
This is the last line.
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> test19*
-rwxr--r-- <span class="token number">1</span> demo demo <span class="token number">356</span> Oct <span class="token number">29</span> <span class="token number">22</span>:03 test19*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mktemp 命令来创建临时文件并将文件名赋给 $tempfile 变量。接着将这个临时文件作为文件描述符 3 的输出重定向文件。在将临时文件名显示在 STDOUT 之后，向临时文件中写入了几行文本，然后关闭了文件描述符。最后，显示出临时文件的内容，并用 rm 命令将其删除。</p></blockquote><p><strong>在/tmp 目录创建临时文件</strong></p><p>-t 选项会强制 mktemp 命令来在系统的临时目录来创建该文件。在用这个特性时， mktemp 命令会返回用来创建临时文件的全路径，而不是只有文件名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mktemp <span class="token parameter variable">-t</span> test.XXXXXX
/tmp/test.xG3374
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span> /tmp/test*
-rw------- <span class="token number">1</span> demo demo <span class="token number">0</span> <span class="token number">2014</span>-10-29 <span class="token number">18</span>:41 /tmp/test.xG3374
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 mktemp 命令返回了全路径名，你可以在Linux系统上的任何目录下引用该临时文件，不管临时目录在哪里。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># creating a temp file in /tmp</span>
<span class="token assign-left variable">tempfile</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp <span class="token parameter variable">-t</span> tmp.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test file.&quot;</span> <span class="token operator">&gt;</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the second line of the test.&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The temp file is located at: <span class="token variable">$tempfile</span>&quot;</span>
<span class="token function">cat</span> <span class="token variable">$tempfile</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$tempfile</span>


$ ./test20
The temp <span class="token function">file</span> is located at: /tmp/tmp.Ma3390
This is a <span class="token builtin class-name">test</span> file.
This is the second line of the test.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建临时目录</strong></p><p>-d 选项告诉 mktemp 命令来创建一个临时目录而不是临时文件。这样你就能用该目录进行任何需要的操作了，比如创建其他的临时文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># using a temporary directory</span>
<span class="token assign-left variable">tempdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp <span class="token parameter variable">-d</span> dir.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">cd</span> <span class="token variable">$tempdir</span>
<span class="token assign-left variable">tempfile1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp temp.XXXXXX<span class="token variable">)</span></span>
<span class="token assign-left variable">tempfile2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp temp.XXXXXX<span class="token variable">)</span></span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">7</span>&gt;</span> <span class="token variable">$tempfile1</span>
<span class="token builtin class-name">exec</span> <span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span> <span class="token variable">$tempfile2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Sending data to directory <span class="token variable">$tempdir</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data for <span class="token variable">$tempfile1</span>&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;7</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test line of data for <span class="token variable">$tempfile2</span>&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;8</span>
$ ./test21
Sending data to directory dir.ouT8S8
$ <span class="token function">ls</span> <span class="token parameter variable">-al</span>
total <span class="token number">72</span>
drwxr-xr-x <span class="token number">3</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 ./
drwxr-xr-x <span class="token number">9</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> 09:44 <span class="token punctuation">..</span>/
drwx------ <span class="token number">2</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 dir.ouT8S8/
-rwxr--r-- <span class="token number">1</span> demo demo <span class="token number">338</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 test21*
$ <span class="token builtin class-name">cd</span> dir.ouT8S8
<span class="token punctuation">[</span>dir.ouT8S8<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span>
total <span class="token number">16</span>
drwx------ <span class="token number">2</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 ./
drwxr-xr-x <span class="token number">3</span> demo demo <span class="token number">4096</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 <span class="token punctuation">..</span>/
-rw------- <span class="token number">1</span> demo demo <span class="token number">44</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 temp.N5F3O6
-rw------- <span class="token number">1</span> demo demo <span class="token number">44</span> Oct <span class="token number">17</span> <span class="token number">22</span>:20 temp.SQslb7
<span class="token punctuation">[</span>dir.ouT8S8<span class="token punctuation">]</span>$ <span class="token function">cat</span> temp.N5F3O6
This is a <span class="token builtin class-name">test</span> line of data <span class="token keyword">for</span> temp.N5F3O6
<span class="token punctuation">[</span>dir.ouT8S8<span class="token punctuation">]</span>$ <span class="token function">cat</span> temp.SQslb7
This is a <span class="token builtin class-name">test</span> line of data <span class="token keyword">for</span> temp.SQslb7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="记录消息" tabindex="-1"><a class="header-anchor" href="#记录消息" aria-hidden="true">#</a> 记录消息</h4><p>将输出同时发送到显示器和日志文件，这种做法有时候能够派上用场。你不用将输出重定向两次，只要用特殊的 tee 命令就行。</p><p>tee 命令相当于管道的一个T型接头。它将从 STDIN 过来的数据同时发往两处。一处是STDOUT ，另一处是 tee 命令行所指定的文件名：</p><p>tee filename</p><p>由于 tee 会重定向来自 STDIN 的数据，你可以用它配合管道命令来重定向命令输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">date</span> <span class="token operator">|</span> <span class="token function">tee</span> testfile
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:56:21 EDT <span class="token number">2014</span>
$ <span class="token function">cat</span> testfile
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:56:21 EDT <span class="token number">2014</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，默认情况下， tee 命令会在每次使用时覆盖输出文件内容，如果你想将数据追加到文件中，必须用 -a 选项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">who</span> <span class="token operator">|</span> <span class="token function">tee</span> testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">18</span>:41 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>
$ <span class="token function">cat</span> testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">18</span>:41 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>

$ <span class="token function">date</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> testfile
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:58:05 EDT <span class="token number">2014</span>
$ <span class="token function">cat</span> testfile
demo pts/0 <span class="token number">2014</span>-10-17 <span class="token number">18</span>:41 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.2<span class="token punctuation">)</span>
Sun Oct <span class="token number">19</span> <span class="token number">18</span>:58:05 EDT <span class="token number">2014</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这个方法，既能将数据保存在文件中，也能将数据显示在屏幕上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">tempfile</span><span class="token operator">=</span>test22file
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the start of the test&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the second line of the test&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> <span class="token variable">$tempfile</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the test&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> <span class="token variable">$tempfile</span>

$ ./test22
This is the start of the <span class="token builtin class-name">test</span>
This is the second line of the <span class="token builtin class-name">test</span>
This is the end of the <span class="token builtin class-name">test</span>
$ <span class="token function">cat</span> test22file
This is the start of the <span class="token builtin class-name">test</span>
This is the second line of the <span class="token builtin class-name">test</span>
This is the end of the <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="综合实例-1" tabindex="-1"><a class="header-anchor" href="#综合实例-1" aria-hidden="true">#</a> 综合实例</h4><p>这个样例脚本两件事都做了。它读取.csv 格式的数据文件，输出SQL INSERT 语句来将数据插入数据库。</p><p>使用命令行参数指定待读取的.csv文件。.csv格式用于从电子表格中导出数据，所以你可以把数据库数据放入电子表格中，把电子表格保存成.csv格式，读取文件，然后创建 INSERT 语句将数据插入MySQL数据库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">outfile</span><span class="token operator">=</span><span class="token string">&#39;members.sql&#39;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;,&#39;</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> lname fname address city state <span class="token function">zip</span>
<span class="token keyword">do</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> <span class="token variable">$outfile</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
INSERT INTO members (lname,fname,address,city,state,zip) VALUES
(&#39;<span class="token variable">$lname</span>&#39;, &#39;<span class="token variable">$fname</span>&#39;, &#39;<span class="token variable">$address</span>&#39;, &#39;<span class="token variable">$city</span>&#39;, &#39;<span class="token variable">$state</span>&#39;, &#39;<span class="token variable">$zip</span>&#39;);
EOF</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token variable">\${1}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制脚本" tabindex="-1"><a class="header-anchor" href="#控制脚本" aria-hidden="true">#</a> 控制脚本</h3><h4 id="处理信号" tabindex="-1"><a class="header-anchor" href="#处理信号" aria-hidden="true">#</a> 处理信号</h4><h5>信号</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>信号  值    描述
1   SIGHUP  挂起进程
2   SIGINT  终止进程
3   SIGQUIT  停止进程
9   SIGKILL  无条件终止进程
15  SIGTERM  尽可能终止进程
17  SIGSTOP  无条件停止进程，但不是终止进程
18  SIGTSTP  停止或暂停进程，但不终止进程
19  SIGCONT  继续运行停止的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>sleep((生成信号:中断、暂停进程)、</h5><p>sleep 100;</p><h5>kill(结束进程)</h5><p>kill -9 2152</p><h5>trap(捕获信号)</h5><blockquote><p>trap commands signals</p></blockquote><p>展示了如何使用 trap 命令来忽略 SIGINT 信号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; Sorry! I have trapped Ctrl-C&#39;&quot;</span> SIGINT

<span class="token builtin class-name">echo</span> This is a <span class="token builtin class-name">test</span> script

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the test script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ./test1.sh
This is a test script
Loop #1
Loop #2
Loop #3
Loop #4
Loop #5
^C Sorry! I have trapped Ctrl-C
Loop #6
Loop #7
Loop #8
^C Sorry! I have trapped Ctrl-C
Loop #9
Loop #10
This is the end of the test script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>捕获脚本退出</h5><p>除了在shell脚本中捕获信号，你也可以在shell脚本退出时进行捕获。这是在shell完成任务时执行命令的一种简便方法。</p><p>要捕获shell脚本的退出，只要在 trap 命令后加上 EXIT 信号就行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo Goodbye...&quot;</span> EXIT

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>


$ ./test2.sh
Loop <span class="token comment">#1</span>
Loop <span class="token comment">#2</span>
Loop <span class="token comment">#3</span>
Loop <span class="token comment">#4</span>
Loop <span class="token comment">#5</span>
Goodbye<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>修改或移除捕获</h5><p>要想在脚本中的不同位置进行不同的捕获处理，只需重新使用带有新选项的 trap 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Modifying a set trap</span>
<span class="token comment">#</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; Sorry... Ctrl-C is trapped.&#39;&quot;</span> SIGINT
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token comment">#</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; I modified the trap!&#39;&quot;</span> SIGINT
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Second Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改了信号捕获之后，脚本处理信号的方式就会发生变化。但如果一个信号是在捕获被修改前接收到的，那么脚本仍然会根据最初的 trap 命令进行处理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh test3.sh
Loop #1
Loop #2
Loop #3
^C Sorry... Ctrl-C is trapped.
Loop #4
Loop #5
Second Loop #1
Second Loop #2
^C I modified the trap!
Second Loop #3
Second Loop #4
Second Loop #5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以删除已设置好的捕获。只需要在 trap 命令与希望恢复默认行为的信号列表之间加上两个破折号就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Modifying a set trap</span>
<span class="token comment">#</span>
<span class="token builtin class-name">trap</span> <span class="token string">&quot;echo &#39; Sorry... Ctrl-C is trapped.&#39;&quot;</span> SIGINT
<span class="token comment">#</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">trap</span> -- SIGINT
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I just removed the trap&quot;</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Second Loop #<span class="token variable">$count</span>&quot;</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

$ ./test3b.sh
Loop <span class="token comment">#1</span>
Loop <span class="token comment">#2</span>
Loop <span class="token comment">#3</span>
Loop <span class="token comment">#4</span>
Loop <span class="token comment">#5</span>
I just removed the <span class="token builtin class-name">trap</span>
Second Loop <span class="token comment">#1</span>
Second Loop <span class="token comment">#2</span>
Second Loop <span class="token comment">#3</span>
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除信号捕获后，脚本按照默认行为来处理 SIGINT 信号，也就是终止脚本运行。但如果信号是在捕获被移除前接收到的，那么脚本会按照原先 trap 命令中的设置进行处理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./test3b.sh
Loop <span class="token comment">#1</span>
Loop <span class="token comment">#2</span>
Loop <span class="token comment">#3</span>
^C Sorry<span class="token punctuation">..</span>. Ctrl-C is trapped.
Loop <span class="token comment">#4</span>
Loop <span class="token comment">#5</span>
I just removed the <span class="token builtin class-name">trap</span>
Second Loop <span class="token comment">#1</span>
Second Loop <span class="token comment">#2</span>
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后台模式" tabindex="-1"><a class="header-anchor" href="#后台模式" aria-hidden="true">#</a> 后台模式 &amp;</h4><p>当 &amp; 符放到命令后时，它会将命令和bash shell分离开来，将命令作为系统中的一个独立的后台进程运行。</p><p>后台运行脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./test4.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在非控制台下运行脚本（在退出终端会话时阻止进程退出）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./test1.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="作业控制-jobs" tabindex="-1"><a class="header-anchor" href="#作业控制-jobs" aria-hidden="true">#</a> 作业控制 jobs</h4><p><strong>查看作业</strong></p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>参 数   描 述
-l  列出进程的PID以及作业号
-n  只列出上次shell发出的通知后改变了状态的作业
-p  只列出作业的PID
-r  只列出运行中的作业
-s  只列出已停止的作业
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test10.sh
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- Running ./test10.sh <span class="token operator">&gt;</span> test10.out <span class="token operator">&amp;</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">1897</span> Stopped ./test10.sh
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- <span class="token number">1917</span> Running ./test10.sh <span class="token operator">&gt;</span> test10.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带加号<code>+</code>的作业会被当做默认作业。带减号<code>-</code>的作业成为下一个默认作业。</p><p>下面例子说明了队列中的下一个作业在默认作业移除时是如何成为默认作业的。有3个独立的进程在后台被启动。 jobs 命令显示出了这些进程、进程的PID及其状态。注意，默认进程（带有加号的那个）是最后启动的那个进程，也就是3号作业。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1950</span>
$ ./test10.sh <span class="token operator">&gt;</span> test10b.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token number">1952</span>
$ ./test10.sh <span class="token operator">&gt;</span> test10c.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">1955</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1950</span> Running ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- <span class="token number">1952</span> Running ./test10.sh <span class="token operator">&gt;</span> test10b.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>+ <span class="token number">1955</span> Running ./test10.sh <span class="token operator">&gt;</span> test10c.out <span class="token operator">&amp;</span>
$ <span class="token function">kill</span> <span class="token number">1955</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>- <span class="token number">1950</span> Running ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ <span class="token number">1952</span> Running ./test10.sh <span class="token operator">&gt;</span> test10b.out <span class="token operator">&amp;</span>
$ <span class="token function">kill</span> <span class="token number">1952</span>
$ <span class="token function">jobs</span> <span class="token parameter variable">-l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ <span class="token number">1950</span> Running ./test10.sh <span class="token operator">&gt;</span> test10a.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重启停止的作业</strong></p><p>要以后台模式重启一个作业，可用 bg n 命令加上作业号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./test11.sh
^Z
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test11.sh
$ <span class="token function">bg</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ ./test11.sh <span class="token operator">&amp;</span>
$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Running ./test11.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令 bg 2 用于将第二个作业置于后台模式。注意，当使用 jobs 命令时，它列出了作业及其状态，即便是默认作业当前并未处于后台模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./test11.sh
^Z
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test11.sh
$ ./test12.sh
^Z
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ Stopped ./test12.sh
$ <span class="token function">bg</span> <span class="token number">2</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ ./test12.sh <span class="token operator">&amp;</span>
$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped ./test11.sh
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- Running ./test12.sh <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要以前台模式重启作业，可用带有作业号的 fg 命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">fg</span> <span class="token number">2</span>
./test12.sh
This is the script&#39;s end<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调整谦让度-nice" tabindex="-1"><a class="header-anchor" href="#调整谦让度-nice" aria-hidden="true">#</a> 调整谦让度 nice</h4><p>调度优先级是个整数值，从 -20（最高优先级）到+19（最低优先级）。默认情况下，bash shell 以优先级0来启动所有进程</p><p>nice 命令允许你设置命令启动时的调度优先级。要让命令以更低的优先级运行，只要用 nice 的 -n 命令行来指定新的优先级级别。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nice</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">4973</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">4973</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">4973</span> <span class="token number">4721</span> <span class="token number">10</span> /bin/bash ./test4.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nice 命令会阻止普通系统用户来提高命令的优先级</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nice</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">4985</span>
$ nice: cannot <span class="token builtin class-name">set</span> niceness: Permission denied
 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Done <span class="token function">nice</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nice 命令的 -n 选项并不是必须的，只需要在破折号后面跟上优先级就行了.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nice</span> <span class="token parameter variable">-10</span> ./test4.sh <span class="token operator">&gt;</span> test4.out <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">4993</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">4993</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">4993</span> <span class="token number">4721</span> <span class="token number">10</span> /bin/bash ./test4.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>renice</strong></p><p>有时你想改变系统上已运行命令的优先级。这正是 renice 命令可以做到的。它允许你指定运行进程的PID来改变它的优先级。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ./test11.sh <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">5055</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">5055</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">5055</span> <span class="token number">4721</span> <span class="token number">0</span> /bin/bash ./test11.sh
$ <span class="token function">renice</span> <span class="token parameter variable">-n</span> <span class="token number">10</span> <span class="token parameter variable">-p</span> <span class="token number">5055</span>
<span class="token number">5055</span>: old priority <span class="token number">0</span>, new priority <span class="token number">10</span>
$ <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token number">5055</span> <span class="token parameter variable">-o</span> pid,ppid,ni,cmd
PID <span class="token environment constant">PPID</span> NI CMD
<span class="token number">5055</span> <span class="token number">4721</span> <span class="token number">10</span> /bin/bash ./test11.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>renice 命令会自动更新当前运行进程的调度优先级。和 nice 命令一样， renice 命令也有一些限制：</p><ul><li>只能对属于你的进程执行 renice ；</li><li>只能通过 renice 降低进程的优先级；</li><li>root用户可以通过 renice 来任意调整进程的优先级。</li></ul><p>如果想完全控制运行进程，必须以root账户身份登录或使用 sudo 命令。</p><h4 id="定时运行作业" tabindex="-1"><a class="header-anchor" href="#定时运行作业" aria-hidden="true">#</a> 定时运行作业</h4><h5>at</h5><p><code>at</code> 命令会将作业提交到队列中，指定shell何时运行该作业。 at 的守护进程 atd 会以后台模式运行，检查作业队列来运行作业。大多数Linux发行版会在启动时运行此守护进程。</p><p><code>atd</code> 守护进程会检查系统上的一个特殊目录（通常位于/var/spool/at）来获取用 at 命令提交的作业。默认情况下， atd 守护进程会每60秒检查一下这个目录。有作业时， atd 守护进程会检查作业设置运行的时间。如果时间跟当前时间匹配， atd 守护进程就会运行此作业。</p><p><em>命令的格式:</em></p><blockquote><p>at [-f filename] time</p><p>默认情况下， at 命令会将 STDIN 的输入放到队列中。</p><p><code>-f</code> 参数来指定用于读取命令（脚本文件）的文件名</p><p><code>time</code> 如果指定的时间已经错过， at 命令会在第二天的那个时间运行指定的作业。</p></blockquote><p><em>时间格式:</em></p><ul><li>标准的小时和分钟格式，比如10:15。</li><li>AM/PM指示符，比如10:15 PM。</li><li>特定可命名时间，比如now、noon、midnight或者teatime（4 PM）。除了指定运行作业的时间，也可以通过不同的日期格式指定特定的日期。</li><li>标准日期格式，比如MMDDYY、MM/DD/YY或DD.MM.YY。</li><li>文本日期，比如Jul 4或Dec 25，加不加年份均可。</li><li>你也可以指定时间增量 <ul><li>当前时间+25 min</li><li>明天10:15 PM</li><li>10:15+7 天</li></ul></li></ul><p>使用 at 命令时，该作业会被提交到作业队列（job queue）。作业队列会保存通过 at 命令提交的待处理的作业。针对不同优先级，存在26种不同的作业队列。作业队列通常用小写字母 <code>a~z</code> 和大写字母 <code>A~Z</code> 来指代。</p><p>作业队列的字母排序越高，作业运行的优先级就越低。默认情况下， at 的作业会被提交到 a 作业队列。如果想以更高优先级运行作业，可以用 -q 参数指定不同的队列字母。</p><p><strong>获取作业的输出</strong></p><p>重定向输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span> zz.log
<span class="token builtin class-name">echo</span> <span class="token string">&quot;at 定时执行任务: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F,%T<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> zz.log
<span class="token function">sleep</span> <span class="token number">5</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;脚本任务执行完成: <span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F,%T<span class="token variable">)</span></span>&quot;</span> <span class="token operator">&gt;&gt;</span> zz.log


<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -f demo6.sh now</span>
job <span class="token number">12</span> at Fri Sep <span class="token number">16</span> <span class="token number">13</span>:05:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat zz.log</span>
at 定时执行任务: <span class="token number">2022</span>-09-16,13:05:49
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat zz.log</span>
at 定时执行任务: <span class="token number">2022</span>-09-16,13:05:49
脚本任务执行完成: <span class="token number">2022</span>-09-16,13:05:54
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果不想在 at 命令中使用邮件或重定向，最好加上 -M 选项来屏蔽作业产生的输出信息。</p></blockquote><p>使用 e-mail 作为 at 命令的输出极其不便。使用 <code>sendmail</code> 应用程序来发送邮件。</p><p>yum -y install sendmail</p><p><strong>列出等待的作业 atq</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh teatime
at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh tomorrow
at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh <span class="token number">13</span>:04
at <span class="token parameter variable">-M</span> <span class="token parameter variable">-f</span> demo6.sh now
atq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh teatime</span>
job <span class="token number">13</span> at Fri Sep <span class="token number">16</span> <span class="token number">16</span>:00:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh tomorrow</span>
job <span class="token number">14</span> at Sat Sep <span class="token number">17</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh 13:04</span>
job <span class="token number">15</span> at Sat Sep <span class="token number">17</span> <span class="token number">13</span>:04:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># at -M -f demo6.sh now</span>
job <span class="token number">16</span> at Fri Sep <span class="token number">16</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token number">9</span>       Sat Sep <span class="token number">17</span> <span class="token number">13</span>:02:00 <span class="token number">2022</span> a root
<span class="token number">13</span>      Fri Sep <span class="token number">16</span> <span class="token number">16</span>:00:00 <span class="token number">2022</span> a root
<span class="token number">14</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span> a root
<span class="token number">15</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:04:00 <span class="token number">2022</span> a root
<span class="token number">16</span>      Fri Sep <span class="token number">16</span> <span class="token number">13</span>:07:00 <span class="token number">2022</span> <span class="token operator">=</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除作业 atrm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token number">9</span>       Sat Sep <span class="token number">17</span> <span class="token number">13</span>:02:00 <span class="token number">2022</span> a root
<span class="token number">17</span>      Fri Sep <span class="token number">16</span> <span class="token number">16</span>:00:00 <span class="token number">2022</span> a root
<span class="token number">18</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:11:00 <span class="token number">2022</span> a root
<span class="token number">19</span>      Sat Sep <span class="token number">17</span> <span class="token number">13</span>:04:00 <span class="token number">2022</span> a root
<span class="token number">20</span>      Fri Sep <span class="token number">16</span> <span class="token number">13</span>:11:00 <span class="token number">2022</span> <span class="token operator">=</span> root
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atrm {17,19,18}</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token number">9</span>       Sat Sep <span class="token number">17</span> <span class="token number">13</span>:02:00 <span class="token number">2022</span> a root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>cron</h5>`,267),j={href:"http://cron.ciding.cc/",target:"_blank",rel:"noopener noreferrer"},z=i(`<p>用 at 命令在预设时间安排脚本执行非常好用，但如果你需要脚本在每天的同一时间运行或是每周一次、每月一次呢？用不着再使用 at 不断提交作业了。</p><p><strong>cron时间表</strong></p><p><em>格式如下：</em></p><blockquote><p>分钟 小时 日期值（N号） 月 周 【需要执行的命令】</p><p>min hour dayofmonth month dayofweek command</p><ul><li>dayofmonth 表项指定月份中的日期值（*，1-31）</li><li>dayofweek（*，mon、tue、wed、thu、fri、sat、sun）或数值（*，0为周日，6为周六）来指定。</li></ul></blockquote><p>cron时间表允许你用特定值、取值范围（比如1~5）或者是通配符（星号*）来指定条目。</p><p>例如：在每天的10:15运行一个命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">15</span> <span class="token number">10</span> * * * <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在每周一4:15 PM运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">15</span> <span class="token number">16</span> * * <span class="token number">1</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在每个月的第一天中午12点执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>00 <span class="token number">12</span> <span class="token number">1</span> * * <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong> 如何设置一个在每个月的最后一天执行的命令，因为你无法设置dayofmonth的值来涵盖所有的月份。这个问题困扰着Linux和Unix程序员，也激发了不少解决办法。常用的方法是加一条使用 date 命令的 if-then 语句来检查明天的日期是不是01：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>00 <span class="token number">12</span> * * * <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span> <span class="token function">date</span> +%d <span class="token parameter variable">-d</span> tomorrow <span class="token variable">\`</span></span> <span class="token operator">=</span> 01 <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token punctuation">;</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它会在每天中午12点来检查是不是当月的最后一天，如果是，cron将会运行该命令。</p></blockquote><p>命令列表必须指定要运行的命令或脚本的全路径名:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">15</span> <span class="token number">10</span> * * * /home/shell/test4.sh <span class="token operator">&gt;</span> test4out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5>crontab</h5><p><strong>浏览cron目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> /etc/cron.*ly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有4个基本目录：<code>hourly</code>、<code>daily</code>、<code>monthly</code> 和 <code>weekly</code></p><p>因此，如果脚本需要每天运行一次，只要将脚本复制到daily目录，cron就会每天执行它，以此类推。</p><p><strong>常见示例</strong></p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>（1）0/2 * * * * ?   表示每2秒 执行任务
（1）0 0/2 * * * ?    表示每2分钟 执行任务
（1）0 0 2 1 * ?   表示在每月的1日的凌晨2点调整任务
（2）0 15 10 ? * MON-FRI   表示周一到周五每天上午10:15执行作业
（3）0 15 10 ? 6L 2002-2006   表示2002-2006年的每个月的最后一个星期五上午10:15执行
（4）0 0 10,14,16 * * ?   每天上午10点，下午2点，4点 
（5）0 0/30 9-17 * * ?   朝九晚五工作时间内每半小时 
（6）0 0 12 ? * WED    表示每个星期三中午12点 
（7）0 0 12 * * ?   每天中午12点触发 
（8）0 15 10 ? * *    每天上午10:15触发 
（9）0 15 10 * * ?     每天上午10:15触发 
（10）0 15 10 * * ?    每天上午10:15触发 
（11）0 15 10 * * ? 2005    2005年的每天上午10:15触发 
（12）0 * 14 * * ?     在每天下午2点到下午2:59期间的每1分钟触发 
（13）0 0/5 14 * * ?    在每天下午2点到下午2:55期间的每5分钟触发 
（14）0 0/5 14,18 * * ?     在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发
（15）0 0-5 14 * * ?    在每天下午2点到下午2:05期间的每1分钟触发 
（16）0 10,44 14 ? 3 WED    每年三月的星期三的下午2:10和2:44触发 
（17）0 15 10 ? * MON-FRI    周一至周五的上午10:15触发 
（18）0 15 10 15 * ?    每月15日上午10:15触发 
（19）0 15 10 L * ?    每月最后一日的上午10:15触发 
（20）0 15 10 ? * 6L    每月的最后一个星期五上午10:15触发 
（21）0 15 10 ? * 6L 2002-2005   2002年至2005年的每月的最后一个星期五上午10:15触发 
（22）0 15 10 ? * 6#3   每月的第三个星期五上午10:15触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>anacron</h5><p>如果某个作业在cron时间表中安排运行的时间已到，但这时候Linux系统处于关机状态，那么这个作业就不会被运行。当系统开机时，cron程序不会再去运行那些错过的作业。要解决这个问题，许多Linux发行版还包含了anacron 程序。</p><p>这个功能常用于进行常规日志维护的脚本。</p><p>只会处理位于cron目录的程序，比如/etc/cron.monthly。它用时间戳来决定作业是否在正确的计划间隔内运行了。每个cron目录都有个时间戳文件，该文件位于/var/spool/anacron。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat /var/spool/anacron/cron.monthly</span>
<span class="token number">20220908</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>anacron程序使用自己的时间表（通常位于/etc/anacrontab）来检查作业目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat /etc/anacrontab</span>
<span class="token comment"># /etc/anacrontab: configuration file for anacron</span>

<span class="token comment"># See anacron(8) and anacrontab(5) for details.</span>

<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/sh
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin:/bin:/usr/sbin:/usr/bin
<span class="token assign-left variable">MAILTO</span><span class="token operator">=</span>root
<span class="token comment"># the maximal random delay added to the base delay of the jobs</span>
<span class="token assign-left variable">RANDOM_DELAY</span><span class="token operator">=</span><span class="token number">45</span>
<span class="token comment"># the jobs will be started during the following hours only</span>
<span class="token assign-left variable">START_HOURS_RANGE</span><span class="token operator">=</span><span class="token number">3</span>-22

<span class="token comment">#period in days   delay in minutes   job-identifier   command</span>
<span class="token number">1</span>       <span class="token number">5</span>       cron.daily              <span class="token function">nice</span> run-parts /etc/cron.daily
<span class="token number">7</span>       <span class="token number">25</span>      cron.weekly             <span class="token function">nice</span> run-parts /etc/cron.weekly
@monthly <span class="token number">45</span>     cron.monthly            <span class="token function">nice</span> run-parts /etc/cron.monthly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>anacron时间表的基本格式和cron时间表略有不同：</p><blockquote><p>period delay identifier command</p></blockquote><ul><li>period 条目定义了作业多久运行一次，以天为单位。anacron程序用此条目来检查作业的时间戳文件。</li><li>delay 条目会指定系统启动后anacron程序需要等待多少分钟再开始运行错过的脚本。</li><li>command 条目包含了run-parts程序和一个cron脚本目录名。run-parts程序负责运行目录中传给它的 任何脚本。<strong>注意</strong> anacron不会运行位于/etc/cron.hourly的脚本。这是因为anacron程序不会处理执行时间 需求小于一天的脚本。</li><li>identifier 条目是一种特别的非空字符串，如 cron-weekly 。它用于唯一标识日志消息和错误邮件中的作业</li></ul><h5>使用新 shell 启动脚本</h5><p>回想一下当用户登入bash shell时需要运行的启动文件 <a href="#linux-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">参见环境变量</a>。另外别忘了，不是所有的发行版中都包含这些启动文件。基本上，依照下列顺序所找到的第一个文件会被运行，其余的文件会被忽略：</p><ul><li>$HOME/.bash_profil</li><li>$HOME/.bash_login</li><li>$HOME/.profile</li></ul><p>因此，应该将需要在登录时运行的脚本放在上面第一个文件中。每次启动一个新shell时，bash shell都会运行.bashrc文件。可以这样来验证：在主目录下的.bashrc文件中加入一条简单的 echo 语句，然后启动一个新shell。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .bashrc
<span class="token comment"># .bashrc</span>
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>
<span class="token comment"># User specific aliases and functions</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I&#39;m in a new shell!&quot;</span>

$ <span class="token function">bash</span>
I&#39;m <span class="token keyword">in</span> a new shell<span class="token operator">!</span>
$ <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级-shell-脚本编程" tabindex="-1"><a class="header-anchor" href="#高级-shell-脚本编程" aria-hidden="true">#</a> 高级 shell 脚本编程</h2><h3 id="创建函数" tabindex="-1"><a class="header-anchor" href="#创建函数" aria-hidden="true">#</a> 创建函数</h3><h4 id="基本的脚本函数" tabindex="-1"><a class="header-anchor" href="#基本的脚本函数" aria-hidden="true">#</a> 基本的脚本函数</h4><p><strong>创建函数</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#1</span>
<span class="token keyword">function</span>  <span class="token function-name function">name</span> <span class="token punctuation">{</span>
 commands
<span class="token punctuation">}</span>
<span class="token comment">#2</span>
<span class="token function-name function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 commands
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用函数</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function-name function">func1</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;# <span class="token variable">$count</span> - This is an example of a function111&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">func2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;# <span class="token variable">$count</span> - This is an example of a function222&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    func1
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-ge</span> <span class="token number">5</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$count</span> <span class="token parameter variable">-le</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    func2
    <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is the end of the loop&quot;</span>
func1
<span class="token builtin class-name">echo</span>
func2
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Now this is the end of the script&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo7.sh</span>
<span class="token comment"># 1 - This is an example of a function111</span>
<span class="token comment"># 2 - This is an example of a function111</span>
<span class="token comment"># 3 - This is an example of a function111</span>
<span class="token comment"># 4 - This is an example of a function111</span>
<span class="token comment"># 5 - This is an example of a function111</span>
<span class="token comment"># 6 - This is an example of a function222</span>
<span class="token comment"># 7 - This is an example of a function222</span>
<span class="token comment"># 8 - This is an example of a function222</span>
<span class="token comment"># 9 - This is an example of a function222</span>
<span class="token comment"># 10 - This is an example of a function222</span>

This is the end of the loop
<span class="token comment"># 11 - This is an example of a function111</span>

<span class="token comment"># 11 - This is an example of a function222</span>
Now this is the end of the script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> 如果在函数被定义前使用函数，你会收到一条错误消息</p><h5>返回值</h5><p><strong>使用 $?</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo
echo &quot;The exit status is: $?&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo7.sh</span>
The <span class="token builtin class-name">exit</span> status is: <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 return</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">dbl</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter a value: &quot;</span> value
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;doubling the value&quot;</span>
    <span class="token builtin class-name">return</span> $<span class="token punctuation">[</span> <span class="token variable">$value</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
dbl
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The new value is <span class="token variable">$?</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh demo8.sh
Enter a value: 2
doubling the value
The new value is 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但当用这种方法从函数中返回值时，要小心了。记住下面两条技巧来避免问题：</p><ul><li>记住，函数一结束就取返回值；</li><li>记住，退出状态码必须是0~255。</li></ul><p>如果在用 $? 变量提取函数返回值之前执行了其他命令，函数的返回值就会丢失。记住，$? 变量会返回执行的最后一条命令的退出状态码。</p><p>第二个问题界定了返回值的取值范围。由于退出状态码必须小于256，函数的结果必须生成一个小于256的整数值。任何大于256的值都会产生一个错误值。</p><p><strong>使用函数输出</strong></p><p><code>result=$(dbl)</code> 这个命令会将 dbl 函数的输出<code>echo</code>赋给 $result 变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">dbl</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter a value: &quot;</span> value
    <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$value</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
    <span class="token builtin class-name">echo</span> <span class="token number">6666</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>dbl<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The new value is <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh demo9.sh
Enter a value: 200
The new value is 400
6666
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 通过这种技术，你还可以返回浮点值和字符串值。这使它成为一种获取函数返回值的强大方法。</p><hr><h5>在函数中使用变量</h5><p><strong>向函数传递参数</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">addem</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-gt</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> <span class="token number">0</span>个或大于2个参数
    <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> + <span class="token variable">$1</span> <span class="token punctuation">]</span>
    <span class="token keyword">else</span>
     <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> * <span class="token variable">$2</span> <span class="token punctuation">]</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;传入 10 15 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem <span class="token number">10</span> <span class="token number">15</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;传入 10 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem <span class="token number">10</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;无参数 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;传入 10 15 20 &quot;</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem <span class="token number">10</span> <span class="token number">15</span> <span class="token number">20</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> 返回：<span class="token variable">$value</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh demo10.sh
传入 10 15 返回：150

传入 10 返回：20

无参数 返回：0个或大于2个参数

传入 10 15 20 返回：0个或大于2个参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于函数使用特殊参数环境变量作为自己的参数值，因此它无法直接获取脚本在命令行中的参数值。下面的例子将会运行失败。尽管函数也使用了 $1 和 $2 变量，但它们和脚本主体中的 $1 和 $2 变量并不相同。要在函数中使用这些值，必须在调用函数时手动将它们传过去.。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">badfunc1</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> * <span class="token variable">$2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$@</span>
<span class="token builtin class-name">echo</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>badfunc1<span class="token variable">)</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$value</span>&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-eq</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>badfunc1 $1 $2<span class="token variable">)</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$value</span>&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: badtest1 a b&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh demo11.sh 12 2
12 2

demo11.sh:行4: *  : 语法错误: 期待操作数 （错误符号是 &quot;*  &quot;）
The result is
[root@admin shell]# sh demo11.sh 12 2 21
12 2 21

The result is 24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在函数中处理变量</strong></p><ul><li>全局变量</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">dbl</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$value</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
    <span class="token builtin class-name">echo</span> 函数内：<span class="token variable">$value</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;输入一个值: &quot;</span> value
dbl
<span class="token builtin class-name">echo</span> <span class="token string">&quot;函数外: <span class="token variable">$value</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo12.sh</span>
输入一个值: <span class="token number">12</span>
函数内：24
函数外: <span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$value 变量在函数外定义并被赋值。当 dbl 函数被调用时，该变量及其值在函数中都依然有效。如果变量在函数内被赋予了新值，那么在脚本中引用该变量时，新值也依然有效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">func1</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">temp</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$value</span> + <span class="token number">5</span> <span class="token punctuation">]</span>
    <span class="token assign-left variable">result</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$temp</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">temp</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">6</span>

func1
<span class="token builtin class-name">echo</span> <span class="token string">&quot;temp = <span class="token variable">$temp</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;result = <span class="token variable">$result</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$temp</span> <span class="token parameter variable">-gt</span> <span class="token variable">$value</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 大&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 小&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sh demo12.sh</span>
temp <span class="token operator">=</span> <span class="token number">11</span>
result <span class="token operator">=</span> <span class="token number">22</span>
temp is 大
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于函数中用到了 $temp 变量，它的值在脚本中使用时受到了影响，产生了意想不到的后果。有个简单的办法可以在函数中解决这个问题，下面将会介绍</p><ul><li>局部变量 local</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">func1</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">temp</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$value</span> + <span class="token number">5</span> <span class="token punctuation">]</span>
    <span class="token assign-left variable">result</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$temp</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">temp</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">6</span>

func1
<span class="token builtin class-name">echo</span> <span class="token string">&quot;temp = <span class="token variable">$temp</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;result = <span class="token variable">$result</span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$temp</span> <span class="token parameter variable">-gt</span> <span class="token variable">$value</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 大&quot;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;temp is 小&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>local 关键字保证了变量只局限在该函数中。如果脚本中在该函数之外有同样名字的变量，那么shell将会保持这两个变量的值是分离的。</p><h5>数组变量和函数</h5><p><strong>向函数传数组参数</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">testit</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The parameters are: <span class="token variable">$@</span>&quot;</span>
    <span class="token assign-left variable">thisarray</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The received array is <span class="token variable">\${thisarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is: <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
testit <span class="token variable">$myarray</span>

<span class="token comment">#####变化</span>
<span class="token keyword">function</span> <span class="token function-name function">testit</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> newarray
    <span class="token assign-left variable">newarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token string">&#39;echo &quot;$@&quot;&#39;</span><span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;The new array value is: <span class="token variable">\${newarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
testit <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>The original array is: <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
The parameters are: <span class="token number">1</span>
The received array is <span class="token number">1</span>
<span class="token comment">#####变化后</span>
The original array is <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
The new array value is: <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在函数内部，数组仍然可以像其他数组一样使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">addarray</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token builtin class-name">local</span> newarray
    <span class="token assign-left variable">newarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">value</span> <span class="token keyword">in</span> <span class="token variable">\${newarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$sum</span> + <span class="token variable">$value</span> <span class="token punctuation">]</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is: <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token assign-left variable">arg1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addarray $arg1<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The original array is: 1 2 3 4 5
The result is 15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>addarray 函数会遍历所有的数组元素，将它们累加在一起。你可以在 myarray 数组变量中放置任意多的值， addarry 函数会将它们都加起来。</p><p><strong>从函数返回数组</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">arraydblr</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> origarray
    <span class="token builtin class-name">local</span> newarray
    <span class="token builtin class-name">local</span> elements
    <span class="token builtin class-name">local</span> i
    <span class="token assign-left variable">origarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">)</span>
    <span class="token assign-left variable">newarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">)</span>
    <span class="token assign-left variable">elements</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$#</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> $elements<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">))</span></span> <span class="token punctuation">{</span>
        newarray<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">\${origarray<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span> * <span class="token number">2</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">\${newarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">myarray</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The original array is: <span class="token variable">\${myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token assign-left variable">arg1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $<span class="token punctuation">{</span>myarray<span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token variable">)</span></span>
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span>arraydblr $arg1<span class="token variable">)</span></span><span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The new array is: <span class="token variable">\${result<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The original array is: 1 2 3 4 5
The new array is: 2 4 6 8 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5>函数递归</h5><p>函数可以调用自己来得到结果。通常递归函数都有一个最终可以迭代到的基准值。许多高级数学算法用递归对复杂的方程进行逐级规约，直到基准值定义的那级。</p><p>递归算法的经典例子是计算阶乘。一个数的阶乘是该数之前的所有数乘以该数的值。因此，要计算5的阶乘，可以执行如下方程：</p><blockquote><p>5! = 1 <em>2</em> 3 <em>4</em> 5 = 120</p></blockquote><p>使用递归，方程可以简化成以下形式：</p><blockquote><p>x! = x * (x-1)!</p></blockquote><p>也就是说，x的阶乘等于x乘以x1的阶乘。这可以用简单的递归脚本表达为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">factorial</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$1</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">temp</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$1</span> - <span class="token number">1</span> <span class="token punctuation">]</span>
        <span class="token builtin class-name">local</span> <span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token string">&#39;factorial $temp&#39;</span>
        <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$result</span> * <span class="token variable">$1</span> <span class="token punctuation">]</span>
    <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;Enter value: &quot;</span> value
<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>factorial $value<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The factorial of <span class="token variable">$value</span> is: <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Enter value: 5
The factorial of 5 is: 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5>创建库 source</h5><p>source 命令会在当前shell上下文中执行命令，而不是创建一个新shell。可以用 source 命令来在shell脚本中运行库文件脚本。</p><p>第一步是创建一个包含脚本中所需函数的公用库文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function addem {
    echo $[ $1 + $2 ]
}
function multem {
    echo $[ $1 * $2 ]
}
function divem {
    if [ $2 -ne 0 ]; then
        echo $[ $1 / $2 ]
    else
        echo -1
    fi
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">.</span> ./myfuncs

<span class="token assign-left variable">value1</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">value2</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token assign-left variable">result1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>addem $value1 $value2<span class="token variable">)</span></span>
<span class="token assign-left variable">result2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>multem $value1 $value2<span class="token variable">)</span></span>
<span class="token assign-left variable">result3</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>divem $value1 $value2<span class="token variable">)</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result of adding them is: <span class="token variable">$result1</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result of multiplying them is: <span class="token variable">$result2</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result of dividing them is: <span class="token variable">$result3</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The result of adding them is: 15
The result of multiplying them is: 50
The result of dividing them is: 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>在命令行上使用函数</h5><ul><li>一种方法是采用单行方式定义函数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># function divem { echo $[ $1 / $2 ]; }</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># divem 66 3</span>
<span class="token number">22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>另一种方法是采用多行方式来定义函数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># function multem {</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> * <span class="token variable">$2</span> <span class="token punctuation">]</span>
<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># multem 12 2</span>
<span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在.bashrc 文件中定义函数</strong></p><p>最佳地点就是.bashrc文件。bash shell在每次启动时都会在主目录下查找这个文件，不管是交互式shell还是从现有shell中启动的新shell。</p><ul><li>直接定义函数</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .bashrc</span>
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>
<span class="token keyword">function</span> <span class="token function-name function">addem</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> $<span class="token punctuation">[</span> <span class="token variable">$1</span> + <span class="token variable">$2</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>读取函数文件</li></ul><p>只要是在shell脚本中，都可以用 source 命令（或者它的别名点操作符）将库文件中的函数添加到你的.bashrc脚本中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .bashrc</span>
<span class="token comment"># Source global definitions</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-r</span> /etc/bashrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">.</span> /etc/bashrc
<span class="token keyword">fi</span>

<span class="token builtin class-name">.</span> /home/shell/libraries/myfuncs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要确保库文件的路径名正确，以便bash shell能够找到该文件。下次启动shell时，库中的所有函数都可在命令行界面下使用了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ addem 10 5
15
$ multem 10 5
50
$ divem 10 5
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="shtool函数库使用示例" tabindex="-1"><a class="header-anchor" href="#shtool函数库使用示例" aria-hidden="true">#</a> shtool函数库使用示例</h4><h5>下载与安装</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install shtool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5>构建库</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./confifgure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>configure 命令会检查构建shtool库文件所必需的软件。一旦发现了所需的工具，它会使用工具路径修改配置文件。</p><p>make 命令负责构建shtool库文件。最终的结果（ shtool ）是一个完整的库软件包。</p><p>要完成安装，需要使用 make 命令的 install 选项。</p><h5>shtool 库函数</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>函 数   描 述
Arx   创建归档文件（包含一些扩展功能）
Echo  显示字符串，并提供了一些扩展构件
fixperm  改变目录树中的文件权限
install  安装脚本或文件
mdate  显示文件或目录的修改时间
mkdir  创建一个或更多目录
Mkln  使用相对路径创建链接
mkshadow  创建一棵阴影树
move  带有替换功能的文件移动
Path  处理程序路径
platform  显示平台标识
Prop  显示一个带有动画效果的进度条
rotate  转置日志文件
Scpp  共享的C预处理器
Slo   根据库的类别，分离链接器选项
Subst  使用sed的替换操作
Table  以表格的形式显示由字段分隔（field-separated）的数据
tarball  从文件和目录中创建tar文件
version  创建版本信息文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个shtool函数都包含大量的选项和参数，你可以利用它们改变函数的工作方式。下面是 shtool函数的使用格式：</p><blockquote><p>shtool [options] [function [options] [args]]</p></blockquote><h5>使用库</h5><p>可以在命令行或自己的shell脚本中直接使用shtool函数。下面是一个在shell脚本中使用 platform 函数的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> test16
<span class="token comment">#!/bin/bash</span>
shtool platform
$ ./test16
centos <span class="token number">7.9</span>.2009 <span class="token punctuation">(</span>AMD64<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls –al /usr/bin | shtool prop –p &quot;waiting...&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="图形化桌面环境中的脚本编程" tabindex="-1"><a class="header-anchor" href="#图形化桌面环境中的脚本编程" aria-hidden="true">#</a> 图形化桌面环境中的脚本编程</h3><h4 id="创建文本菜单" tabindex="-1"><a class="header-anchor" href="#创建文本菜单" aria-hidden="true">#</a> 创建文本菜单</h4><h4 id="创建文本窗口部件" tabindex="-1"><a class="header-anchor" href="#创建文本窗口部件" aria-hidden="true">#</a> 创建文本窗口部件</h4><h4 id="添加x-window图形" tabindex="-1"><a class="header-anchor" href="#添加x-window图形" aria-hidden="true">#</a> 添加X Window图形</h4><h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3><h4 id="正则表达式的类型" tabindex="-1"><a class="header-anchor" href="#正则表达式的类型" aria-hidden="true">#</a> 正则表达式的类型</h4><p>正则表达式是通过正则表达式引擎（regular expression engine）实现的。正则表达式引擎是一套底层软件，负责解释正则表达式模式并使用这些模式进行文本匹配。 在Linux中，有两种流行的正则表达式引擎：</p><ul><li>POSIX基础正则表达式（basic regular expression，BRE）引擎</li><li>POSIX扩展正则表达式（extended regular expression，ERE）引擎</li></ul><p>大多数Linux工具都至少符合POSIX BRE引擎规范，能够识别该规范定义的所有模式符号。遗憾的是，有些工具（比如sed编辑器）只符合了BRE引擎规范的子集。这是出于速度方面的考虑导致的，因为sed编辑器希望能尽可能快地处理数据流中的文本。</p><p>POSIX BRE引擎通常出现在依赖正则表达式进行文本过滤的编程语言中。它为常见模式提供了高级模式符号和特殊符号，比如匹配数字、单词以及按字母排序的字符。gawk程序用ERE引擎来处理它的正则表达式模式。</p><hr><p><strong>警告</strong> 记住，sed编辑器和gawk程序的正则表达式引擎之间是有区别的。gawk程序可以使用大多数扩展正则表达式模式符号，并且能提供一些额外过滤功能，而这些功能都是sed编辑器所不具备的。但正因为如此，gawk程序在处理数据流时通常才比较慢。</p><hr><h4 id="基础正则表达式-bre" tabindex="-1"><a class="header-anchor" href="#基础正则表达式-bre" aria-hidden="true">#</a> 基础正则表达式 BRE</h4><h5>纯文本</h5><p>在sed编辑器和gawk程序中用标准文本字符串来过滤数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/test/p&#39;</span>
This is a <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/trial/p&#39;</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | gawk &#39;/test/{print $0}&#39;</span>
This is a <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | gawk &#39;/trial/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一个模式定义了一个单词test。sed编辑器和gawk程序脚本用它们各自的 print 命令打印出匹配该正则表达式模式的所有行。由于 echo 语句在文本字符串中包含了单词test，数据流文本能够匹配所定义的正则表达式模式，因此sed编辑器显示了该行。</p><p>第二个模式也定义了一个单词，这次是trial。因为 echo 语句文本字符串没包含该单词，所以正则表达式模式没有匹配，因此sed编辑器和gawk程序都没打印该行。</p></blockquote><p>第一条原则就是：正则表达式模式都区分大小写。这意味着它们只会匹配大小写也相符的模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/this/p&#39;</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed -n &#39;/This/p&#39;</span>
This is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;The books are expensive&quot; | sed -n &#39;/book/p&#39;</span>
The books are expensive
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;The book is expensive&quot; | sed -n &#39;/books/p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在正则表达式中使用空格和数字。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is line number 1&quot; | sed -n &#39;/ber 1/p&#39;</span>
This is line number <span class="token number">1</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is line number1&quot; | sed -n &#39;/ber 1/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data1</span>
Thisisanormallineoftext.
This is a line with too many spaces. 
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/ /p&#39; data1</span>
This is a line with too many spaces.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>特殊字符</h5><blockquote><ul><li><code>.</code> <code>*</code> <code>[]</code> <code>^</code> <code>$</code> <code>{}</code> <code>\\</code> <code>/</code> <code>+</code> <code>?</code> <code>|</code> <code>()</code></li></ul></blockquote><p>用某个特殊字符作为文本字符，就必须转义。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data2</span>
The cost is <span class="token variable">$4</span>.00
sdfs oioijk <span class="token number">6846</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/\\$/p&#39; data2</span>
The cost is <span class="token variable">$4</span>.00

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;\\ is a special character&quot; | sed -n &#39;/\\\\/p&#39;</span>
<span class="token punctuation">\\</span> is a special character

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;3 / 2&quot; | sed -n &#39;///p&#39;</span>
sed: <span class="token parameter variable">-e</span> expression <span class="token comment">#1, char 2: No previous regular expression</span>

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;3 / 2&quot; | sed -n &#39;/\\//p&#39;</span>
<span class="token number">3</span> / <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>锚字符 ^$</h5><ul><li>锁定在行首 <code>^</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;The book store&quot; | sed -n &#39;/^book/p&#39;</span>

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;Books are great&quot; | sed -n &#39;/^Book/p&#39;</span>
Books are great

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data3</span>
This is a <span class="token builtin class-name">test</span> line.
this is another <span class="token builtin class-name">test</span> line.
A line that tests this feature.
Yet <span class="token function">more</span> testing of this
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/^this/p&#39; data3</span>
this is another <span class="token builtin class-name">test</span> line.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This ^ is a test&quot; | sed -n &#39;/s ^/p&#39;</span>
This ^ is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>锁定在行尾 <code>$</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a good book&quot; | sed -n &#39;/book$/p&#39;</span>
This is a good book
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This book is good&quot; | sed -n &#39;/book$/p&#39;</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;There are a lot of good books&quot; | sed -n &#39;/book$/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>组合使用</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data4</span>
this is a <span class="token builtin class-name">test</span> of using both anchors
I said this is a <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>
I<span class="token string">&#39;m sure this is a test.
[root@admin shell]# sed -n &#39;</span>/^this is a test$/p<span class="token string">&#39; data4
this is a test
[root@admin shell]# sed -n &#39;</span>/^this is test$/p<span class="token string">&#39; data4
[root@admin shell]# sed -n &#39;</span>/^this test$/p&#39; data4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤出数据流中的空白行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data5</span>
This is one <span class="token builtin class-name">test</span> line.

This is another <span class="token builtin class-name">test</span> line.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;/^$/d&#39; data5</span>
This is one <span class="token builtin class-name">test</span> line.
This is another <span class="token builtin class-name">test</span> line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>点号字符</h5><p><code>.</code> 用来匹配除换行符之外的 <strong>任意单个字符</strong>。它必须匹配一个字符，如果在点号字符的位置没有字符，那么模式就不成立。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data6</span>
This is a <span class="token builtin class-name">test</span> of a line.
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
This <span class="token builtin class-name">test</span> is at line four.
at ten o<span class="token string">&#39;clock we&#39;</span>ll go home.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/.at/p&#39; data6</span>
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
This <span class="token builtin class-name">test</span> is at line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在正则表达式中，空格也是字符，因此 at 前面的空格刚好匹配了该模式。第五行证明了这点，将 at 放在行首就不 会匹配该模式了。</p><h5>字符组 []</h5><p>可以定义用来匹配文本模式中某个位置的一组字符。如果字符组中的某个字符出现在了数据流中，那它就匹配了该模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data6</span>
This is a <span class="token builtin class-name">test</span> of a line.
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
This <span class="token builtin class-name">test</span> is at line four.
at ten o<span class="token string">&#39;clock we&#39;</span>ll go home.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/[ch]at/p&#39; data6</span>
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;Yes&quot; | sed -n &#39;/[Yy]es/p&#39;</span>
Yes
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;yes&quot; | sed -n &#39;/[Yy]es/p&#39;</span>
<span class="token function">yes</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;Yes&quot; | sed -n &#39;/[Yy][Ee][Ss]/p&#39;</span>
Yes
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;yEs&quot; | sed -n &#39;/[Yy][Ee][Ss]/p&#39;</span>
yEs
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;yeS&quot; | sed -n &#39;/[Yy][Ee][Ss]/p&#39;</span>
yeS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以是数字</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data7</span>
This line doesn<span class="token string">&#39;t contain a number.
This line has 1 number on it.
This line a number 2 on it.
This line has a number 4 on it.

[root@admin shell]# sed -n &#39;</span>/<span class="token punctuation">[</span>0123<span class="token punctuation">]</span>/p&#39; data7
This line has <span class="token number">1</span> number on it.
This line a number <span class="token number">2</span> on it.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>邮编验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data8</span>
<span class="token number">60633</span>
<span class="token number">46201</span>
<span class="token number">223001</span>
<span class="token number">556400</span>
<span class="token number">4353</span>
<span class="token number">22203</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># $ sed -n &#39;/^[0123456789][0123456789][0123456789][0123456789][0123456789]$/p&#39; data8</span>
<span class="token number">60633</span>
<span class="token number">46201</span>
<span class="token number">22203</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data9</span>
I need to have some maintenence <span class="token keyword">done</span> on my car.
I<span class="token string">&#39;ll pay that in a seperate invoice.
After I pay for the maintenance my car will be as good as new.

[root@admin shell]# sed -n &#39;</span>/maint<span class="token punctuation">[</span>ea<span class="token punctuation">]</span>n<span class="token punctuation">[</span>ae<span class="token punctuation">]</span>nce/p/sep<span class="token punctuation">[</span>ea<span class="token punctuation">]</span>r<span class="token punctuation">[</span>ea<span class="token punctuation">]</span>te/p<span class="token string">&#39; data9
I need to have some maintenence done on my car.
I&#39;</span>ll pay that <span class="token keyword">in</span> a seperate invoice.
After I pay <span class="token keyword">for</span> the maintenance my car will be as good as new.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本例中的两个 sed 打印命令利用正则表达式字符组来帮助找到文本中拼错的单词 <code>maintenance</code> 和 <code>separate</code>。同样的正则表达式模式也能匹配正确拼写的 <code>maintenance</code>。</p><h5>排除型字符组</h5><p>只要在字符组的开头加个脱字符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> /<span class="token punctuation">[</span>^ab<span class="token punctuation">]</span>ops/p data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5>区间</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^[0-9][0-9][0-9][0-9][0-9]$/p&#39;</span> data8
<span class="token number">60633</span>
<span class="token number">46201</span>
<span class="token number">45902</span>

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[0-9][a-z]ops/p&#39;</span> data
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[a-ch-m]at/p&#39;</span> data6
The <span class="token function">cat</span> is sleeping.
That is a very <span class="token function">nice</span> hat.
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a8392&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^[0-9][0-9][0-9][0-9][0-9]$/p&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1839a&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^[0-9][0-9][0-9][0-9][0-9]$/p
echo &quot;18a92&quot; | sed -n &#39;</span>/^<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>$/p&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>特殊的字符组</h5><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>组      描 述
<span class="token punctuation">[</span><span class="token punctuation">[</span>:alpha:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意字母字符，不管是大写还是小写
<span class="token punctuation">[</span><span class="token punctuation">[</span>:alnum:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意字母数字字符0~9、A~Z或a~z
<span class="token punctuation">[</span><span class="token punctuation">[</span>:blank:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配空格或制表符
<span class="token punctuation">[</span><span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配0~9之间的数字
<span class="token punctuation">[</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配小写字母字符a~z
<span class="token punctuation">[</span><span class="token punctuation">[</span>:print:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意可打印字符
<span class="token punctuation">[</span><span class="token punctuation">[</span>:punct:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配标点符号
<span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意空白字符：空格、制表符、NL、FF、VT和CR
<span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span>  匹配任意大写字母字符A~Z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:digit:]]/p&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;abc&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:alpha:]]/p&#39;</span>
abc
<span class="token builtin class-name">echo</span> <span class="token string">&quot;abc123&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:digit:]]/p&#39;</span>
abc123
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is, a test&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:punct:]]/p&#39;</span>
This is, a <span class="token builtin class-name">test</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is a test&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/[[:punct:]]/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>星号</h5><p>在字符后面放置星号表明该字符必须在匹配模式的文本中出现0次或多次。</p><p>这个模式符号广泛用于处理有常见拼写错误或在不同语言中有拼写变化的单词。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;ik&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
ik
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;iek&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
iek
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;ieek&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
ieek
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;ieeek&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/ie*k/p&#39;</span>
ieeek
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写个可能用在美式或英式英语中的脚本，模式中的 u* 表明字母u可能出现或不出现在匹配模式的文本中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;I&#39;m getting a color TV&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/colou*r/p&#39;</span>
I<span class="token string">&#39;m getting a color TV
echo &quot;I&#39;</span>m getting a colour TV<span class="token string">&quot; | sed -n &#39;/colou*r/p&#39;
I&#39;m getting a colour TV

echo &quot;</span>I ate a potatoe with my lunch.<span class="token string">&quot; | sed -n &#39;/potatoe*/p&#39;
I ate a potatoe with my lunch.
echo &quot;</span>I ate a potato with my lunch.&quot; <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/potatoe*/p&#39;</span>
I ate a potato with my lunch.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将点号特殊字符和星号特殊字符组合起来。这个组合能够匹配任意数量的任意字符。它通常用在数据流中两个可能相邻或不相邻的文本字符串之间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;this is a regular pattern expression&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/regular.*expression/p&#39;</span>
this is a regular pattern expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>星号还能用在字符组上。它允许指定可能在文本中出现多次的字符组或字符区间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
bt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;btt&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
btt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baat&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
baat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baaeeet&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
baaeeet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baeeaeeat&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
baeeaeeat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baakeeet&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/b[ae]*t/p&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="扩展正则表达式-ere" tabindex="-1"><a class="header-anchor" href="#扩展正则表达式-ere" aria-hidden="true">#</a> 扩展正则表达式 ERE</h4><p><code>gawk</code>程序能够识别 <code>ERE</code> 模式，但 <code>sed</code> 编辑器不能。</p><h5>问号</h5><p>问号表明前面的字符可以出现 <strong>0次或1次</strong>，它不会匹配多次出现的字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
bt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
bt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bot&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]?t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果字符组中的字符出现了0次或1次，模式匹配就成立。但如果两个字符都出现了，或者其中一个字符出现了2次，模式匹配就不成立。</p><h5>加号</h5><p>加号表明前面的字符可以出现 <strong>1次或多次</strong>，但 <strong>必须至少出现1次</strong>。如果该字符没有出现，那么模式就不会匹配。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;beeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
beeet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/be+t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次如果字符组中定义的任一字符出现了，文本就会匹配指定的模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
beat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/b[ae]+t/{print $0}&#39;</span>
beeat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h5>花括号</h5><p>ERE中的花括号允许你为可重复的正则表达式指定一个上限。这通常称为间隔（interval）。</p><p>可以用两种格式来指定区间。</p><ul><li>m ：正则表达式准确出现 m 次。</li><li>m, n ：正则表达式至少出现 m 次，至多 n 次。</li></ul><p>这个特性可以精确调整字符或字符集在模式中具体出现的次数。</p><hr><p><strong>警告</strong> 默认情况下，gawk程序不会识别正则表达式间隔。必须指定gawk程序的 <code>--re- interval</code> 命令行选项才能识别正则表达式间隔</p><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1}t/{print $0}&#39;</span>
beet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/be{1,2}t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;bt&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
bet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
beat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
beet
<span class="token builtin class-name">echo</span> <span class="token string">&quot;beeat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baeet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;baeaet&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> --re-interval <span class="token string">&#39;/b[ae]{1,2}t/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字母a或e在文本模式中只出现了1~2次，则正则表达式模式匹配；否则，模式匹配失败</p><h5>管道符号</h5><p>管道符号允许你在检查数据流时，用逻辑 OR 方式指定正则表达式引擎要用的两个或多个模式。如果任何一个模式匹配了数据流文本，</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat is asleep&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/cat|dog/{print $0}&#39;</span>
The <span class="token function">cat</span> is asleep
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The dog is asleep&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/cat|dog/{print $0}&#39;</span>
The dog is asleep
<span class="token builtin class-name">echo</span> <span class="token string">&quot;The sheep is asleep&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/cat|dog/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;He has a hat.&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/[ch]at|dog/{print $0}&#39;</span>
He has a hat.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>表达式分组-圆括号</h5><p>当你将正则表达式模式分组时，该组会被视为一个标准字符。可以像对普通字符一样给该组使用特殊字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Sat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/Sat(urday)?/{print $0}&#39;</span>
Sat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Saturday&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/Sat(urday)?/{print $0}&#39;</span>
Saturday
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结尾的 urday 分组以及问号，使得模式能够匹配完整的 Saturday 或缩写 Sat</p><p>将分组和管道符号一起使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;cat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
<span class="token function">cat</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cab&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
cab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bat&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
bat
<span class="token builtin class-name">echo</span> <span class="token string">&quot;bab&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
bab
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tab&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tac&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;/(c|b)a(b|t)/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="正则表达式实例" tabindex="-1"><a class="header-anchor" href="#正则表达式实例" aria-hidden="true">#</a> 正则表达式实例</h4><h5>$PATH目录文件计数</h5><p>首先你得将 PATH 变量解析成单独的目录名</p><blockquote><p>echo $PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin</p></blockquote><p>用空格来替换冒号</p><blockquote><p>echo $PATH | sed &#39;s/😕 /g&#39;</p><p>/usr/local/sbin /usr/local/bin /usr/sbin /usr/bin /root/bin</p></blockquote><p>使用标准 for 语句中来遍历每个目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">mypath</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/:/ /g&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">directory</span> <span class="token keyword">in</span> <span class="token variable">$mypath</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">check</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> $directory<span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token variable">$check</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$directory</span> - <span class="token variable">$count</span>&quot;</span>
    <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin shell]# sh demo13.sh
/usr/local/sbin - 0
/usr/local/bin - 0
/usr/sbin - 832
/usr/bin - 1524
ls: 无法访问/root/bin: 没有那个文件或目录
/root/bin - 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>验证电话号码</h5><p>电话号码有几种常见的形式：</p><ul><li>(123)456-7890</li><li>(123) 456-789</li><li>123-456-7890</li><li>123.456.7890</li></ul><p>电话号码中可能有也可能没有左圆括号。这可以用如下模式来匹配：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>^\\(?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>脱字符用来表明数据的开始。由于左圆括号是个特殊字符，因此必须将它转义成普通字符。问号表明左圆括号可能出现，也可能不出现。紧接着就是3位区号。在美国，区号以数字2开始（没有以数字0或1开始的区号），最大可到9。要匹配区号，可以用如下模式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[2-9][0-9]{2}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这要求第一个字符是2~9的数字，后跟任意两位数字。在区号后面，收尾的右圆括号可能存在，也可能不存在。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在区号后，存在如下可能：有一个空格，没有空格，有一条单破折线或一个点。你可以对它们使用管道符号，并用圆括号进行分组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(| |-|\\.)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一个管道符号紧跟在左圆括号后，用来匹配没有空格的情形。你必须将点字符转义，否则它会被解释成可匹配任意字符。紧接着是3位电话交换机号码。这里没什么需要特别注意的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[0-9]{3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在电话交换机号码之后，你必须匹配一个空格、一条单破折线或一个点（这次不用考虑匹配没有空格的情况，因为在电话交换机号码和其余号码间必须有至少一个空格）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>( |-|\\.)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，必须在字符串尾部匹配4位本地电话分机号。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[0-9]{4}$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完整的模式如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>^\\(?[2-9][0-9]{2}\\)?(| |-|\\.)[0-9]{3}( |-|\\.)[0-9]{4}$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> isphone
<span class="token comment">#!/bin/bash</span>
<span class="token function">gawk</span> --re-interval <span class="token string">&#39;/^\\(?[2-9][0-9]{2}\\)?(| |-|\\¬[0-9]{3}( |-|\\.)[0-9]{4}/{print $0}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;317-555-1234&quot;</span> <span class="token operator">|</span> ./isphone
<span class="token number">317</span>-555-1234
<span class="token builtin class-name">echo</span> <span class="token string">&quot;000-555-1234&quot;</span> <span class="token operator">|</span> ./isphone
<span class="token builtin class-name">echo</span> <span class="token string">&quot;312 555-1234&quot;</span> <span class="token operator">|</span> ./isphone
<span class="token number">312</span> <span class="token number">555</span>-1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> phonelist
000-000-0000
<span class="token number">123</span>-456-7890
<span class="token number">212</span>-555-1234
<span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
<span class="token punctuation">(</span><span class="token number">202</span><span class="token punctuation">)</span> <span class="token number">555</span>-9876
<span class="token number">33523</span>
<span class="token number">1234567890</span>
<span class="token number">234.123</span>.4567

$ <span class="token function">cat</span> phonelist <span class="token operator">|</span> ./isphone
<span class="token number">212</span>-555-1234
<span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
<span class="token punctuation">(</span><span class="token number">202</span><span class="token punctuation">)</span> <span class="token number">555</span>-9876
<span class="token number">234.123</span>.4567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>解析邮件地址</h5><p>邮件地址的基本格式为：</p><blockquote><p>username@hostname</p></blockquote><p>username 值可用字母数字字符以及以下特殊字符：</p><ul><li>点号</li><li>单破折线</li><li>加号</li><li>下划线</li></ul><p>在有效的邮件用户名中，这些字符可能以任意组合形式出现。邮件地址的 hostname 部分由一个或多个域名和一个服务器名组成。服务器名和域名也必须遵照严格的命名规则，只允许字母数字字符以及以下特殊字符：</p><ul><li>点号</li><li>下划线</li></ul><p>服务器名和域名都用点分隔，先指定服务器名，紧接着指定子域名，最后是后面不带点号的顶级域名。 顶级域名的数量在过去十分有限，正则表达式模式编写者会尝试将它们都加到验证模式中。然而遗憾的是，随着互联网的发展，可用的顶级域名也增多了。这种方法已经不再可行。从左侧开始构建这个正则表达式模式。我们知道，用户名中可以有多个有效字符。这个相当容易。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>^([a-zA-Z0-9_\\-\\.\\+]+) @
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个分组指定了用户名中允许的字符，加号表明必须有至少一个字符。下一个字符很明显是@ ，没什么意外的。 hostname 模式使用同样的方法来匹配服务器名和子域名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>([a-zA-Z0-9_\\-\\.]+)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个模式可以匹配文本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server
server.subdomain
server.subdomain.subdomain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于顶级域名，有一些特殊的规则。顶级域名只能是字母字符，必须不少于二个字符（国家 或地区代码中使用），并且长度上不得超过五个字符。下面就是顶级域名用的正则表达式模式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\.([a-zA-Z]{2,5})$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将整个模式放在一起会生成如下模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>^<span class="token punctuation">(</span><span class="token punctuation">[</span>a-zA-Z0-9_<span class="token punctuation">\\</span>-<span class="token punctuation">\\</span>.<span class="token punctuation">\\</span>+<span class="token punctuation">]</span>+<span class="token punctuation">)</span>@<span class="token punctuation">(</span><span class="token punctuation">[</span>a-zA-Z0-9_<span class="token punctuation">\\</span>-<span class="token punctuation">\\</span>.<span class="token punctuation">]</span>+<span class="token punctuation">)</span><span class="token punctuation">\\</span>.<span class="token punctuation">(</span><span class="token punctuation">[</span>a-zA-Z<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2,5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here.now&quot;</span> <span class="token operator">|</span> ./isemail
demo@here.now
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here.now.&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here.n&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo@here-now&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo.blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
demo.blum@here.now
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;rich_blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
rich_blum@here.now
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo/blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo#blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
$
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;demo*blum@here.now&quot;</span> <span class="token operator">|</span> ./isemail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h3><h4 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h4><p>sed编辑器被称作流编辑器（stream editor），和普通的交互式文本编辑器恰好相反。在交互式文本编辑器中（比如vim），你可以用键盘命令来交互式地插入、删除或替换数据中的文本。</p><p>sed编辑器会执行下列操作:</p><ul><li>(1) 一次从输入中读取一行数据。</li><li>(2) 根据所提供的编辑器命令匹配数据。</li><li>(3) 按照命令修改流中的数据。</li><li>(4) 将新的数据输出到 STDOUT 。</li></ul><p>语法格式：</p><blockquote><p>sed options script file</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选 项    描 述
-e script  在处理输入时，将 script 中指定的命令添加到已有的命令中
-f file  在处理输入时，将 file 中指定的命令添加到已有的命令中
-n  不产生命令输出，使用 print 命令来完成输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># echo &quot;This is a test&quot; | sed &#39;s/test/big test/&#39;</span>
This is big <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment">#  cat data1.txt</span>
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy cat.
The quick brown fox jumps over the lazy cat.
The quick brown fox jumps over the lazy cat.
The quick brown fox jumps over the lazy cat.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -e &#39;s/brown/green/; s/dog/cat/&#39; data1.txt</span>
The quick green fox jumps over the lazy cat.
The quick green fox jumps over the lazy cat.
The quick green fox jumps over the lazy cat.
The quick green fox jumps over the lazy cat.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从文件中读取 sed 编辑器命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat script1.sed</span>
s/brown/green/
s/fox/elephant/
s/dog/cat/
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -f script1.sed data1.txt</span>
The quick green elephant jumps over the lazy cat.
The quick green elephant jumps over the lazy cat.
The quick green elephant jumps over the lazy cat.
The quick green elephant jumps over the lazy cat.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>替换标记</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data4.txt</span>
This is a <span class="token builtin class-name">test</span> of the <span class="token builtin class-name">test</span> script.
This is the second <span class="token builtin class-name">test</span> of the <span class="token builtin class-name">test</span> script.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/&#39; data4.txt</span>
This is a trial of the <span class="token builtin class-name">test</span> script.
This is the second trial of the <span class="token builtin class-name">test</span> script.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下它只替换每行中出现的第一处；替换标记 <code>flags</code> 会在替换命令字符串之后设置。</p><blockquote><p>s/pattern/replacement/flags</p></blockquote><p>有4种可用的替换标记：</p><ul><li>数字，表明新文本将替换第几处模式匹配的地方；</li><li>g ，表明新文本将会替换所有匹配的文本；</li><li>p ，表明原先行的内容要打印出来；打印与替换命令中指定的模式匹配的行。这通常会和 sed 的 <code>-n</code> 选项一起使用；将二者配合使用的效果就是只输出被替换命令修改过的行。</li><li>w file ，将替换的结果写到文件中。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/2&#39; data4.txt</span>
This is a <span class="token builtin class-name">test</span> of the trial script.
This is the second <span class="token builtin class-name">test</span> of the trial script.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/g&#39; data4.txt</span>
This is a trial of the trial script.
This is the second trial of the trial script.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat data5.txt</span>
This is a <span class="token builtin class-name">test</span> line.
This is a different line.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;s/test/trial/p&#39; data5.txt</span>
This is a trial line.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;s/test/trial/w test.txt&#39; data5.txt</span>
This is a trial line.
This is a different line.
<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># cat test.txt</span>
This is a trial line.

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>替换字符</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/\\/bin\\/bash/\\/bin\\/csh/&#39;</span> /etc/passwd
<span class="token function">sed</span> <span class="token string">&#39;s!/bin/bash!/bin/csh!&#39;</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>感叹号被用作字符串分隔符，这样路径名就更容易阅读和理解了。</p><h5>使用地址</h5><p>默认情况下，在sed编辑器中使用的命令会作用于文本数据的所有行。如果只想将命令作用于特定行或某些行，则必须用行寻址（line addressing）。</p><p>在sed编辑器中有两种形式的行寻址：</p><ul><li>以数字形式表示行区间</li><li>用文本模式来过滤出行</li></ul><p>两种形式都使用相同的格式来指定地址：</p><blockquote><p>[address]command</p></blockquote><p>也可以将特定地址的多个命令分组：</p><blockquote><p>address { command1 command2 command3 }</p></blockquote><ul><li>数字方式的行寻址 <code>M 单行匹配</code> 、 <code>M,N 区间M到N行</code> 、 <code>M,$ 从某行开始的所有行</code></li></ul><p>sed编辑器会将文本流中的第一行编号为1，以此类。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy dog

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2,3s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy dog

<span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2,$s/dog/cat/&#39; data1.txt</span>
The quick brown fox jumps over the lazy dog
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy <span class="token function">cat</span>
The quick brown fox jumps over the lazy <span class="token function">cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用文本模式过滤器</li></ul><p>格式：/pattern/command</p><p>例如：只修改用户Samantha的默认shell，可以使用 sed 命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> Samantha /etc/passwd
Samantha:x:502:502::/home/Samantha:/bin/bash

<span class="token function">sed</span> <span class="token string">&#39;/Samantha/s/bash/csh/&#39;</span> /etc/passwd
root:x:0:0:root:/root:/bin/bash
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
Samantha:x:502:502::/home/Samantha:/bin/csh
Timothy:x:503:503::/home/Timothy:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命令组合</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin shell<span class="token punctuation">]</span><span class="token comment"># sed &#39;2{</span>
<span class="token operator">&gt;</span> s/fox/elephant/
<span class="token operator">&gt;</span> s/dog/cat/
<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token string">&#39; data1.txt
The quick brown fox jumps over the lazy dog.
The quick brown elephant jumps over the lazy cat.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.

[root@admin shell]# sed &#39;</span><span class="token number">3</span>,<span class="token variable">\${
&gt; s<span class="token operator">/</span>brown<span class="token operator">/</span>green<span class="token operator">/</span>
&gt; s<span class="token operator">/</span>lazy<span class="token operator">/</span>active<span class="token operator">/</span>
&gt; }</span>&#39; data1.txt
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick green fox jumps over the active dog.
The quick green fox jumps over the active dog.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>删除行 d</h5><p><code>M 单行匹配</code> 、 <code>M,N 区间M到N行</code> 、 <code>M,$ 从某行开始的所有行</code> 、<code>结尾字符</code></p><p>它会删除匹配指定寻址模式的所有行。使用该命令时要特别小心，如果你忘记加入寻址模式的话，流中的所有文本行都会被删除。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">1</span>
The quick brown fox jumps over the lazy dog <span class="token number">2</span>
The quick brown fox jumps over the lazy dog <span class="token number">3</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>

<span class="token function">sed</span> <span class="token string">&#39;d&#39;</span> data1. <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt

<span class="token function">sed</span> <span class="token string">&#39;1d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">2</span>
The quick brown fox jumps over the lazy dog <span class="token number">3</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>

<span class="token function">sed</span> <span class="token string">&#39;2,3d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">1</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>

<span class="token function">sed</span> <span class="token string">&#39;3,$d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">1</span>
The quick brown fox jumps over the lazy dog <span class="token number">2</span>

<span class="token function">sed</span> <span class="token string">&#39;/dog 1/d&#39;</span> data1.txt <span class="token operator">&amp;&amp;</span> <span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog <span class="token number">2</span>
The quick brown fox jumps over the lazy dog <span class="token number">3</span>
The quick brown fox jumps over the lazy dog <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data7.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is line number <span class="token number">1</span> again.
This is text you want to keep.
This is the last line <span class="token keyword">in</span> the file.

<span class="token function">sed</span> <span class="token string">&#39;/1/,/3/d&#39;</span> data7.txt
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个出现数字“1”的行再次触发了删除命令，因为没有找到停止模式，所以就将数据流中的剩余行全部删除了。当然，如果你指定了一个从未在文本中出现的停止模式，显然会出现另外一个问题。</p><blockquote><p>$ sed &#39;/1/,/5/d&#39; data7.txt</p></blockquote><h5>插入和附加文本 i a</h5><ul><li>插入（ insert ）命令（ i ）会在指定行前增加一个新行；</li><li>附加（ append ）命令（ a ）会在指定行后增加一个新行。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;Test Line 2&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;i\\Test Line 1&#39;</span>
Test Line <span class="token number">1</span>
Test Line <span class="token number">2</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Test Line 2&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;i\\Test Line 3&#39;</span>
Test Line <span class="token number">2</span>
Test Line <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将一个新行插入到数据流第三行前，起始位置增加一个新行 <code>1i</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;3i\\This is an inserted line.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is an inserted line.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将一个新行附加到数据流中第三行后</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;3a\\This is an appended line.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is an appended line.
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将新行附加到数据流的末尾</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;$a\\This is an appended line.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is an appended line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>修改行 c</h5><p>修改（ change ）命令允许修改数据流中整行文本的内容。它跟插入和附加命令的工作机制一样，你必须在 sed 命令中单独指定新行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;3c\\This is a changed line of text.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is a changed line of text.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token string">&#39;/number 3/c\\This is a changed line of text.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is a changed line of text.
This is line number <span class="token number">4</span>.

<span class="token comment">#你可以在修改命令中使用地址区间，但结果未必如愿。</span>
<span class="token function">sed</span> <span class="token string">&#39;2,3c\\This is a new line of text.&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is a new line of text.
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>转换命令 y</h5><p>转换（ transform ）命令（ y ）是唯一可以处理单个字符的sed编辑器命令。转换命令格式如下。</p><blockquote><p>[address]y/inchars/outchars/</p></blockquote><p>转换命令会对 inchars 和 outchars 值进行一对一的映射。 inchars 中的第一个字符会被转换为 outchars 中的第一个字符，以此类推。这个映射过程会一直持续到处理完指定字符；如果 inchars 和 outchars 的长度不同，则sed编辑器会产生一条错误消息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;y/123/789/&#39;</span> data8.txt
This is line number <span class="token number">7</span>.
This is line number <span class="token number">8</span>.
This is line number <span class="token number">9</span>.
This is line number <span class="token number">4</span>.
This is line number <span class="token number">7</span> again.
This is yet another line.
This is the last line <span class="token keyword">in</span> the file.

<span class="token builtin class-name">echo</span> <span class="token string">&quot;This 1 is a test of 1 try.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;y/123/456/&#39;</span>
This <span class="token number">4</span> is a <span class="token builtin class-name">test</span> of <span class="token number">4</span> try.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>打印 p = l</h5><p>打印数据流中的信息：</p><ul><li>p 命令用来打印文本行；</li><li>= 命令用来打印行号；</li><li>l （小写的L）命令用来列出行。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;this is a test&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;p&#39;</span>
this is a <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>

<span class="token function">cat</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/number 3/p&#39;</span> data6.txt
This is line number <span class="token number">3</span>.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2,3p&#39;</span> data6.txt
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.

<span class="token comment">##修改行之前显示该行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/3/{
&gt; p
&gt; s/line/test/p
&gt; }&#39;</span> data6.txt
This is line number <span class="token number">3</span>.
This is <span class="token builtin class-name">test</span> number <span class="token number">3</span>.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1.txt
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog.

<span class="token function">sed</span> <span class="token string">&#39;=&#39;</span> data1.txt
<span class="token number">1</span>
The quick brown fox jumps over the lazy dog.
<span class="token number">2</span>
The quick brown fox jumps over the lazy dog.
<span class="token number">3</span>
The quick brown fox jumps over the lazy dog.
<span class="token number">4</span>
The quick brown fox jumps over the lazy dog.


<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/number 4/{
&gt; =
&gt; p
&gt; }&#39;</span> data6.txt
<span class="token number">4</span>
This is line number <span class="token number">4</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data9.txt
This line contains tabs.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;l&#39;</span> data9.txt
This<span class="token punctuation">\\</span>tline<span class="token punctuation">\\</span>tcontains<span class="token punctuation">\\</span>ttabs.
--------------------
--------------------
<span class="token function">cat</span> data10.txt
This line contains an escape character.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;l&#39;</span> data10.txt
This line contains an escape character. <span class="token punctuation">\\</span>a$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>使用 sed 处理文件 w</h5><ul><li>写入文件</li></ul><p>w 命令用来向文件写入行。该命令的格式如下：</p><p>[address]w filename</p><p><code>filename</code> 可以使用相对路径或绝对路径；用户都必须有文件的写权限。</p><p>将数据流中的前两行打印到一个文本文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;1,2w test.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.

<span class="token function">cat</span> test.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要根据一些公用的文本值从主文件中创建一份数据文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data11.txt
Blum, R Browncoat
McGuiness, A Alliance
Bresnahan, C Browncoat
Harken, C Alliance

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/Browncoat/w Browncoats.txt&#39;</span> data11.txt

<span class="token function">cat</span> Browncoats.txt
Blum, R Browncoat
Bresnahan, C Browncoat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从文件读取数据 r</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data12.txt
This is an added line.
This is the second added line.

<span class="token function">sed</span> <span class="token string">&#39;3r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is an added line.
This is the second added line.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token string">&#39;/number 2/r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is an added line.
This is the second added line.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.

<span class="token function">sed</span> <span class="token string">&#39;$r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is an added line.
This is the second added line.

<span class="token function">sed</span> <span class="token string">&#39;1r data12.txt&#39;</span> data6.txt
This is line number <span class="token number">1</span>.
This is line number <span class="token number">2</span>.
This is line number <span class="token number">3</span>.
This is line number <span class="token number">4</span>.
This is an added line.
This is the second added line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取命令的另一个很酷的用法是和删除命令配合使用：利用另一个文件中的数据来替换文件中的占位文本。举例来说，假定你有一份套用信件保存在文本文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> notice.std
Would the following people:
LIST
please report to the ship&#39;s captain.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>套用信件将通用占位文本 LIST 放在人物名单的位置。要在占位文本后插入名单，只需读取命令就行了。但这样的话，占位文本仍然会留在输出中。要删除占位文本的话，你可以用删除命令。结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;/LIST/{
&gt; r data11.txt
&gt; d
&gt; }&#39;</span> notice.std
Would the following people:
Blum, R Browncoat
McGuiness, A Alliance
Bresnahan, C Browncoat
Harken, C Alliance
please report to the ship&#39;s captain.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在占位文本已经被替换成了数据文件中的名单。</p><h4 id="多行命令" tabindex="-1"><a class="header-anchor" href="#多行命令" aria-hidden="true">#</a> 多行命令</h4><p>处理多行文本的特殊命令：</p><ul><li>N ：将数据流中的下一行加进来创建一个多行组（multiline group）来处理。</li><li>D ：删除多行组中的一行</li><li>P ：打印多行组中的一行。</li></ul><h5>next 命令</h5><p>首先需要看一下单行版本的 next 命令是如何工作的，然后就比 较容易理解多行版本的 next 命令是如何操作的了。</p><ul><li>1、单行的 next 命令 <code>n</code></li></ul><p>小写的 n 命令会告诉sed编辑器移动到数据流中的下一文本行，而不用重新回到命令的最开始再执行一遍。记住，通常sed编辑器在移动到数据流中的下一文本行之前，会在当前行上执行完所有定义好的命令。单行 next 命令改变了这个流程。</p><p>这听起来可能有些复杂，没错，有时确实是。在这个例子中，你有个数据文件，共有5行内容，其中的两行是空的。目标是删除首行之后的空白行，而留下最后一行之前的空白行。如果写一个删掉空白行的sed脚本，你会删掉两个空白行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1.log
This is the header line.

This is a data line.

This is the last line.
--------------------------
<span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> data1.log
This is the header line.
This is a data line.
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法是用 n 命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;/header/{n ; d}&#39;</span> data1.log
This is the header line.
This is a data line.

This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>合并文本行 <code>N</code></li></ul><p>了解了单行版的 next 命令，现在来看看多行版的。单行 next 命令会将数据流中的下一文本行移动到sed编辑器的工作空间（称为模式空间）。多行版本的 next 命令（用大写N）会将下一文本行添加到模式空间中已有的文本后。</p><p>这样的作用是将数据流中的两个文本行合并到同一个模式空间中。文本行仍然用换行符分隔，但sed编辑器现在会将两行文本当成一行来处理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token string">&#39;/first/{ N ; s/\\n/ / }&#39;</span> data2.txt
This is the header line.
This is the first data line. This is the second data line.
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>sed编辑器脚本查找含有单词first的那行文本。找到该行后，它会用 N 命令将下一行合并到那行，然后用替换命令 s 将换行符替换成空格。结果是，文本文件中的两行在sed编辑器的输出中成了一行。</p></blockquote><p>如果要在数据文件中查找一个可能会分散在两行中的文本短语的话，这是个很实用的应用程序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data3.txt
On Tuesday, the Linux System
Administrator<span class="token string">&#39;s group meeting will be held.
All System Administrators should attend.
Thank you for your attendance.

sed &#39;</span>N <span class="token punctuation">;</span> s/System Administrator/Desktop User/<span class="token string">&#39; data3.txt
On Tuesday, the Linux System
Administrator&#39;</span>s group meeting will be held.
All Desktop Users should attend.
Thank you <span class="token keyword">for</span> your attendance.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>替换命令会在文本文件中查找特定的双词短语 System Administrator 。如果短语在一行中的话，事情很好处理，替换命令可以直接替换文本。但如果短语分散在两行中的话，替换命令就没法识别匹配的模式了。 这时 N 命令就可以派上用场了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N ; s/System.Administrator/Desktop User/&#39;</span> data3.txt
On Tuesday, the Linux Desktop User&#39;s group meeting will be held.
All Desktop Users should attend.
Thank you <span class="token keyword">for</span> your attendance.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用 N 命令将发现第一个单词的那行和下一行合并后，即使短语内出现了换行，你仍然可以找到它。 <strong>注意</strong>，替换命令在 System 和 Administrator 之间用了通配符模式（.）来匹配空格和换行符这两种情况。但当它匹配了换行符时，它就从字符串中删掉了换行符，导致两行合并成一行。这可能不是你想要的。</p></blockquote><p>要解决这个问题，可以在sed编辑器脚本中用两个替换命令：一个用来匹配短语出现在多行中的情况，一个用来匹配短语出现在单行中的情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N
&gt; s/System\\nAdministrator/Desktop\\nUser/
&gt; s/System Administrator/Desktop User/
&gt; &#39;</span> data3.txt
On Tuesday, the Linux Desktop
User&#39;s group meeting will be held.
All Desktop Users should attend.
Thank you <span class="token keyword">for</span> your attendance.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>但这个脚本中仍有个小问题。这个脚本总是在执行sed编辑器命令前将下一行文本读入到模式空间。当它到了最后一行文本时，就没有下一行可读了，所以 N 命令会叫sed编辑器停止。如果要匹配的文本正好在数据流的最后一行上，命令就不会发现要匹配的数据。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data4.txt
On Tuesday, the Linux System
Administrator<span class="token string">&#39;s group meeting will be held.
All System Administrators should attend.

sed &#39;</span>N
<span class="token operator">&gt;</span> s/System<span class="token punctuation">\\</span>nAdministrator/Desktop<span class="token punctuation">\\</span>nUser/
<span class="token operator">&gt;</span> s/System Administrator/Desktop User/
<span class="token operator">&gt;</span> <span class="token string">&#39; data4.txt
On Tuesday, the Linux Desktop
User&#39;</span>s group meeting will be held.
All System Administrators should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 System Administrator 文本出现在了数据流中的最后一行， N 命令会错过它，因为没有其他行可读入到模式空间跟这行合并。你可以轻松地解决这个问题——将单行命令放到 N 命令前面，并将多行命令放到 N 命令后面，像这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;
&gt; s/System Administrator/Desktop User/
&gt; N
&gt; s/System\\nAdministrator/Desktop\\nUser/
&gt; &#39;</span> data4.txt
On Tuesday, the Linux Desktop
User&#39;s group meeting will be held.
All Desktop Users should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>多行删除命令 D</h5><p>单行删除命令（ d ）。sed编辑器用它来删除模式空间中的当前行。但和 N 命令一起使用时，使用单行删除命令就要小心了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N ; /System\\nAdministrator/d&#39;</span> data4.txt
All System Administrators should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除命令会在不同的行中查找单词System和Administrator，然后在模式空间中将两行都删掉。这未必是你想要的结果。</p><p>sed编辑器提供了多行删除命令 D ，它只删除模式空间中的第一行。该命令会删除到换行符（含换行符）为止的所有字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N ; /System\\nAdministrator/D&#39;</span> data4.txt
Administrator&#39;s group meeting will be held.
All System Administrators should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文本的第二行被 N 命令加到了模式空间，但仍然完好。如果需要删掉目标数据字符串所在行的前一文本行，它能派得上用场。</p><p>这里有个例子，它会删除数据流中出现在第一行前的空白行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data5.txt

This is the header line.
This is a data line.

This is the last line.

<span class="token function">sed</span> <span class="token string">&#39;/^$/{N ; /header/D}&#39;</span> data5.txt
This is the header line.
This is a data line.

This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>sed编辑器脚本会查找空白行，然后用 N 命令来将下一文本行添加到模式空间。如果新的模式空间内容含有单词header，则 D 命令会删除模式空间中的第一行。如果不结合使用 N 命令和 D 命令，就不可能在不删除其他空白行的情况下只删除第一个空白行。</p></blockquote><h5>多行打印命令 P</h5><p>它只打印多行模式空间中的第一行。这包括模式空间中直到换行符为止的所有字符。</p><p>用 -n 选项来阻止脚本输出时，它和显示文本的单行 p 命令的用法大同小异。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;N ; /System\\nAdministrator/P&#39;</span> data3.txt
On Tuesday, the Linux System
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当多行匹配出现时， P 命令只会打印模式空间中的第一行。多行 P 命令的强大之处在和 N 命令及 D 命令组合使用时才能显现出来。</p><p>D 命令的独特之处在于强制sed编辑器返回到脚本的起始处，对同一模式空间中的内容重新执行这些命令（它不会从数据流中读取新的文本行）。在命令脚本中加入 N 命令，你就能单步扫过整个模式空间，将多行一起匹配。</p><p>接下来，使用 P 命令打印出第一行，然后用 D 命令删除第一行并绕回到脚本的起始处。一旦返回， N 命令会读取下一行文本并重新开始这个过程。这个循环会一直继续下去，直到数据流结束。</p><h4 id="保持空间" tabindex="-1"><a class="header-anchor" href="#保持空间" aria-hidden="true">#</a> 保持空间</h4><p>模式空间（pattern space）是一块活跃的缓冲区，在sed编辑器执行命令时它会保存待检查的文本。但它并不是sed编辑器保存文本的唯一空间。</p><p>sed编辑器有另一块称作保持空间（hold space）的缓冲区域。在处理模式空间中的某些行时，可以用保持空间来临时保存一些行。有5条命令可用来操作保持空间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命 令   描 述
h  将模式空间复制到保持空间
H  将模式空间附加到保持空间
g  将保持空间复制到模式空间
G  将保持空间附加到模式空间
x  交换模式空间和保持空间的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些命令用来将文本从模式空间复制到保持空间。这可以清空模式空间来加载其他要处理的字符串。</p><p>通常，在使用 h 或 H 命令将字符串移动到保持空间后，最终还要用 g 、 G 或 x 命令将保存的字符串移回模式空间（否则，你就不用在一开始考虑保存它们了）。</p><p>由于有两个缓冲区域，弄明白哪行文本在哪个缓冲区域有时会比较麻烦。这里有个简短的例子演示了如何用 h 和 g 命令来将数据在sed编辑器缓冲空间之间移动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/first/ {h ; p ; n ; p ; g ; p }&#39;</span> data2.txt
This is the first data line.
This is the second data line.
This is the first data line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我们来一步一步看上面这个代码例子：</p><ul><li><p>(1) sed脚本在地址中用正则表达式来过滤出含有单词first的行；</p></li><li><p>(2) 当含有单词first的行出现时， h 命令将该行放到保持空间；</p></li><li><p>(3) p 命令打印模式空间也就是第一个数据行的内容；</p></li><li><p>(4) n 命令提取数据流中的下一行（ This is the second data line ），并将它放到模式空间；</p></li><li><p>(5) p 命令打印模式空间的内容，现在是第二个数据行；</p></li><li><p>(6) g 命令将保持空间的内容（ This is the first data line ）放回模式空间，替换当前文本；</p></li><li><p>(7) p 命令打印模式空间的当前内容，现在变回第一个数据行了。</p></li></ul></blockquote><p>通过使用保持空间来回移动文本行，你可以强制输出中第一个数据行出现在第二个数据行后面。如果丢掉了第一个 p 命令，你可以以相反的顺序输出这两行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/first/ {h ; n ; p ; g ; p }&#39;</span> data2.txt
This is the second data line.
This is the first data line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是个有用的开端。你可以用这种方法来创建一个sed脚本将整个文件的文本行反转！但要那么做的话，你需要了解sed编辑器的排除特性</p><h5>排除命令</h5><p>感叹号命令（ ! ）用来排除（ negate ）命令，也就是让原本会起作用的命令不起作用。下面的例子演示了这一特性</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/header/!p&#39;</span> data2.txt
This is the first data line.
This is the second data line.
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>除了包含单词header那一行外，文件中其他所有的行都被打印出来了。</p></blockquote><p>sed编辑器无法处理数据流中最后一行文本，因为之后再没有其他行了。可以用感叹号来解决这个问题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;N;
&gt; s/System\\nAdministrator/Desktop\\nUser/
&gt; s/System Administrator/Desktop User/
&gt; &#39;</span> data4.txt
On Tuesday, the Linux Desktop
User<span class="token string">&#39;s group meeting will be held.
All System Administrators should attend.

sed &#39;</span><span class="token variable">$!</span>N<span class="token punctuation">;</span>
<span class="token operator">&gt;</span> s/System<span class="token punctuation">\\</span>nAdministrator/Desktop<span class="token punctuation">\\</span>nUser/
<span class="token operator">&gt;</span> s/System Administrator/Desktop User/
<span class="token operator">&gt;</span> <span class="token string">&#39; data4.txt
On Tuesday, the Linux Desktop
User&#39;</span>s group meeting will be held.
All Desktop Users should attend.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子演示了如何配合使用感叹号与 N 命令以及与美元符特殊地址。美元符表示数据流中的最后一行文本，所以当sed编辑器到了最后一行时，它没有执行 N 命令，但它对所有其他行都执行了这个命令。</p><p>使用这种方法，你可以反转数据流中文本行的顺序。要实现这个效果（先显示最后一行，最后显示第一行），你得利用保持空间做一些特别的铺垫工作。 你得像这样使用模式空间：</p><ul><li>(1) 在模式空间中放置一行；</li><li>(2) 将模式空间中的行放到保持空间中；</li><li>(3) 在模式空间中放入下一行；</li><li>(4) 将保持空间附加到模式空间后；</li><li>(5) 将模式空间中的所有内容都放到保持空间中；</li><li>(6)重复执行第(3)~(5)步，直到所有行都反序放到了保持空间中；</li><li>(7) 提取并打印行。</li></ul><p>在使用这种方法时，你不想在处理时打印行。这意味着要使用 sed 的 -n 命令行选项。下一步是决定如何将保持空间文本附加到模式空间文本后面。这可以用 G 命令完成。唯一的问题是你不想将保持空间附加到要处理的第一行文本后面。这可以用感叹号命令轻松解决：</p><p>1!G</p><p>下一步就是将新的模式空间（含有已反转的行）放到保持空间。这也非常简单，只要用 h 命令就行。</p><p>将模式空间中的整个数据流都反转了之后，你要做的就是打印结果。当到达数据流中的最后一行时，你就知道已经得到了模式空间的整个数据流。打印结果要用下面的命令：</p><p>$p</p><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这些都是你创建可以反转行的sed编辑器脚本所需的操作步骤。现在可以运行一下试试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{1!G ; h ; $p }&#39;</span> data2.txt
This is the last line.
This is the second data line.
This is the first data line.
This is the header line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 可能你想说，有个Linux命令已经有反转文本文件的功能了。 tac 命令会倒序显示一个文本文件。你也许已经注意到了，这个命令的名字很巧妙，它执行的正好是与 cat 命令相反的功能。</p><hr><h4 id="改变流" tabindex="-1"><a class="header-anchor" href="#改变流" aria-hidden="true">#</a> 改变流</h4><p>通常，sed编辑器会从脚本的顶部开始，一直执行到脚本的结尾（ D 命令是个例外，它会强制sed编辑器返回到脚本的顶部，而不读取新的行）。sed编辑器提供了一个方法来改变命令脚本的执行流程，其结果与结构化编程类似。</p><h5>分支 b</h5><p>在前面一节中，你了解了如何用感叹号命令来排除作用在某行上的命令。sed编辑器提供了一种方法，可以基于地址、地址模式或地址区间排除一整块命令。这允许你只对数据流中的特定行执行一组命令。 分支（ branch ）命令 b 的格式如下：</p><p>[ address ]b [ label ]</p><p>address 参数决定了哪些行的数据会触发分支命令。 label 参数定义了要跳转到的位置。如果没有加 label 参数，跳转命令会跳转到脚本的结尾。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
This is the header line.
This is the first data line.
This is the second data line.
This is the last line.

<span class="token function">sed</span> <span class="token string">&#39;{2,3b ; s/This is/Is this/ ; s/line./test?/}&#39;</span> data2.txt

Is this the header test?
This is the first data line.
This is the second data line.
Is this the last test?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分支命令在数据流中的第2行和第3行处跳过了两个替换命令。</p><p>要是不想直接跳到脚本的结尾，可以为分支命令定义一个要跳转到的标签。标签以冒号开始，最多可以是7个字符长度。</p><p>要指定标签，将它加到 b 命令后即可。使用标签允许你跳过地址匹配处的命令，但仍然执行脚本中的其他命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;{/first/b jump1 ; s/This is the/No jump on/
&gt; :jump1
&gt; s/This is the/Jump here on/}&#39;</span> data2.txt

No jump on header line
Jump here on first data line
No jump on second data line
No jump on last line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跳转命令指定如果文本行中出现了 first ，程序应该跳到标签为 jump1 的脚本行。如果分支命令的模式没有匹配，sed编辑器会继续执行脚本中的命令，包括分支标签后的命令（因此，所有的替换命令都会在不匹配分支模式的行上执行）。</p><p>如果某行匹配了分支模式， sed编辑器就会跳转到带有分支标签的那行。因此，只有最后一个替换命令会执行。</p><p>这个例子演示了跳转到sed脚本后面的标签上。</p><p>也可以跳转到脚本中靠前面的标签上，这样就达到了循环的效果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This, is, a, test, to, remove, commas.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{
&gt; :start
&gt; s/,//1p
&gt; b start
&gt; }&#39;</span>

This is, a, test, to, remove, commas.
This is a, test, to, remove, commas.
This is a test, to, remove, commas.
This is a <span class="token builtin class-name">test</span> to, remove, commas.
This is a <span class="token builtin class-name">test</span> to remove, commas.
This is a <span class="token builtin class-name">test</span> to remove commas.
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本的每次迭代都会删除文本中的第一个逗号，并打印字符串。这个脚本有个问题：它永远不会结束。这就形成了一个无穷循环，不停地查找逗号，直到使用Ctrl+C组合键发送一个信号，手动停止这个脚本。</p><p>要防止这个问题，可以为分支命令指定一个地址模式来查找。如果没有模式，跳转就应该结束：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This, is, a, test, to, remove, commas.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{
&gt; :start
&gt; s/,//1p
&gt; /,/b start
&gt; }&#39;</span>
This is, a, test, to, remove, commas.
This is a, test, to, remove, commas.
This is a test, to, remove, commas.
This is a <span class="token builtin class-name">test</span> to, remove, commas.
This is a <span class="token builtin class-name">test</span> to remove, commas.
This is a <span class="token builtin class-name">test</span> to remove commas.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>现在分支命令只会在行中有逗号的情况下跳转。在最后一个逗号被删除后，分支命令不会再执行，脚本也就能正常停止了。</p></blockquote><h5>测试 t</h5><p>类似于分支命令，测试（ test ）命令（ t ）也可以用来改变sed编辑器脚本的执行流程。测试命令会根据替换命令的结果跳转到某个标签，而不是根据地址进行跳转。</p><p>如果替换命令成功匹配并替换了一个模式，测试命令就会跳转到指定的标签。如果替换命令未能匹配指定的模式，测试命令就不会跳转。测试命令使用与分支命令相同的格式。</p><p>[ address ]t [ label ]</p><p>跟分支命令一样，在没有指定标签的情况下，如果测试成功，sed会跳转到脚本的结尾。</p><p>测试命令提供了对数据流中的文本执行基本的 if-then 语句的一个低成本办法。举个例子，如果已经做了一个替换，不需要再做另一个替换，那么测试命令能帮上忙。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;{
&gt; s/first/matched/
&gt; t
&gt; s/This is the/No match on/
&gt; }&#39;</span> data2.txt
No match on header line
This is the matched data line
No match on second data line
No match on last line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一个替换命令会查找模式文本 first 。如果匹配了行中的模式，它就会替换文本，而且测试命令会跳过后面的替换命令。如果第一个替换命令未能匹配模式，第二个替换命令就会被执行。</p></blockquote><p>有了测试命令，你就能结束之前用分支命令形成的无限循环:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This, is, a, test, to, remove, commas. &quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{
&gt; :start
&gt; s/,//1p
&gt; t start
&gt; }&#39;</span>
This is, a, test, to, remove, commas.
This is a, test, to, remove, commas.
This is a test, to, remove, commas.
This is a <span class="token builtin class-name">test</span> to, remove, commas.
This is a <span class="token builtin class-name">test</span> to remove, commas.
This is a <span class="token builtin class-name">test</span> to remove commas.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模式替代" tabindex="-1"><a class="header-anchor" href="#模式替代" aria-hidden="true">#</a> 模式替代</h4><p>你已经知道了如何在 sed 命令中使用模式来替代数据流中的文本。然而在使用通配符时，很难知道到底哪些文本会匹配模式。</p><p>举个例子，假如你想在行中匹配的单词两边上放上引号。如果你只是要匹配模式中的一个单词，那就非常简单。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat sleeps in his hat.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/cat/&quot;cat&quot;/&#39;</span>
The <span class="token string">&quot;cat&quot;</span> sleeps <span class="token keyword">in</span> his hat.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但如果你在模式中用通配符（.）来匹配多个单词呢？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat sleeps in his hat.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/.at/&quot;.at&quot;/g&#39;</span>
The <span class="token string">&quot;.at&quot;</span> sleeps <span class="token keyword">in</span> his <span class="token string">&quot;.at&quot;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>模式字符串用点号通配符来匹配at前面的一个字母。遗憾的是，用于替代的字符串无法匹配已匹配单词中的通配符字符。</p><h5>&amp;符号</h5><p>sed编辑器提供了一个解决办法。 &amp; 符号可以用来代表替换命令中的匹配的模式。不管模式匹配的是什么样的文本，你都可以在替代模式中使用 &amp; 符号来使用这段文本。这样就可以操作模式所匹配到的任何单词了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The cat sleeps in his hat.&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/.at/&quot;&amp;&quot;/g&#39;</span>
The <span class="token string">&quot;cat&quot;</span> sleeps <span class="token keyword">in</span> his <span class="token string">&quot;hat&quot;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当模式匹配了单词cat，&quot;cat&quot;就会出现在了替换后的单词里。当它匹配了单词hat，&quot;hat&quot; 就出现在了替换后的单词中。</p><h5>替代单独的单词</h5><p>&amp; 符号会提取匹配替换命令中指定模式的整个字符串。有时你只想提取这个字符串的一部分。</p><p>当然可以这么做，只是要稍微花点心思而已。</p><p>sed编辑器用圆括号来定义替换模式中的子模式。你可以在替代模式中使用特殊字符来引用每个子模式。替代字符由反斜线和数字组成。数字表明子模式的位置。sed编辑器会给第一个子模式分配字符 \\1 ，给第二个子模式分配字符 \\2 ，依此类推。</p><hr><p><strong>警告</strong> 当在替换命令中使用圆括号时，必须用转义字符将它们标示为分组字符而不是普通的圆括号。这跟转义其他特殊字符正好相反。</p><hr><p>来看一个在sed编辑器脚本中使用这个特性的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;The System Administrator manual&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;
&gt; s/\\(System\\) Administrator/\\1 User/&#39;</span>
The System User manual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个替换命令用一对圆括号将单词System括起来，将其标示为一个子模式。然后它在替代模式中使用 \\1 来提取第一个匹配的子模式。这没什么特别的，但在处理通配符模式时却特别有用。</p><p>如果需要用一个单词来替换一个短语，而这个单词刚好是该短语的子字符串，但那个子字符串碰巧使用了通配符，这时使用子模式会方便很多。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;That furry cat is pretty&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/furry \\(.at\\)/\\1/&#39;</span>
That <span class="token function">cat</span> is pretty

<span class="token builtin class-name">echo</span> <span class="token string">&quot;That furry hat is pretty&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/furry \\(.at\\)/\\1/&#39;</span>
That hat is pretty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，你不能用 &amp; 符号，因为它会替换整个匹配的模式。子模式提供了答案，允许你选择将模式中的某部分作为替代模式。 当需要在两个或多个子模式间插入文本时，这个特性尤其有用。这里有个脚本，它使用子模式在大数字中插入逗号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;1234567&quot;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;{
&gt; :start
&gt; s/\\(.*[0-9]\\)\\([0-9]\\{3\\}\\)/\\1,\\2/
&gt; t start
&gt; }&#39;</span>
<span class="token number">1,234</span>,567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本将匹配模式分成了两部分。</p>`,505),X=n("blockquote",{3:""},[n("p",null,".*[0-9]"),n("p",null,"[0-9]")],-1),Y=i(`<p>这个模式会查找两个子模式。第一个子模式是以数字结尾的任意长度的字符。第二个子模式是若干组三位数字。如果这个模式在文本中找到了，替代文本会在两个子模式之间加一个逗号，每个子模式都会通过其位置来标示。</p><p>这个脚本使用测试命令来遍历这个数字，直到放置好所有的逗号。</p><h4 id="在脚本中使用sed" tabindex="-1"><a class="header-anchor" href="#在脚本中使用sed" aria-hidden="true">#</a> 在脚本中使用sed</h4><h5>使用包装脚本</h5><p>这里有个将命令行参数变量作为sed脚本输入的例子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> reverse.sh
<span class="token comment">#!/bin/bash</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{ 1!G ; h ; $p }&#39;</span> <span class="token variable">$1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>名为reverse的shell脚本用sed编辑器脚本来反转数据流中的文本行。它使用shell参数 $1 从命令行中提取第一个参数，这正是需要进行反转的文件名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./reverse.sh data2.txt
This is the last line.
This is the second data line.
This is the first data line.
This is the header line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你能在任何文件上轻松使用这个sed编辑器脚本，再不用每次都在命令行上重新输入了。</p><h5>重定向 sed 的输出</h5><p>默认情况下，sed编辑器会将脚本的结果输出到 STDOUT 上。你可以在shell脚本中使用各种标准方法对sed编辑器的输出进行重定向。</p><p>可以在脚本中用 $() 将sed编辑器命令的输出重定向到一个变量中，以备后用。下面的例子使用sed脚本来向数值计算结果添加逗号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> fact.sh
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">factorial</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">counter</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token variable">$1</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$counter</span> <span class="token parameter variable">-le</span> <span class="token variable">$number</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
    <span class="token assign-left variable">factorial</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$factorial</span> * <span class="token variable">$counter</span> <span class="token punctuation">]</span>
    <span class="token assign-left variable">counter</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$counter</span> + <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $factorial <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;{
:start
s/\\(.*[0-9]\\)\\([0-9]\\{3\\}\\)/\\1,\\2/
t start
}&#39;</span><span class="token variable">)</span></span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;The result is <span class="token variable">$result</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./fact.sh <span class="token number">20</span>
The result is <span class="token number">2,432</span>,902,008,176,640,000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用普通的阶乘计算脚本后，脚本的结果会被作为sed编辑器脚本的输入，它会给结果加上逗号。然后 echo 语句使用这个值产生最终结果</p><h4 id="创建sed实用工具" tabindex="-1"><a class="header-anchor" href="#创建sed实用工具" aria-hidden="true">#</a> 创建sed实用工具</h4><h5>加倍行间距</h5><p>首先，让我们看一个向文本文件的行间插入空白行的简单sed脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;G&#39;</span> data2.txt
This is the header line.

This is the first data line.

This is the second data line.

This is the last line.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来相当简单！这个技巧的关键在于保持空间的默认值。记住， G 命令会简单地将保持空间内容附加到模式空间内容后。当启动sed编辑器时，保持空间只有一个空行。将它附加到已有行后面，你就在已有行后面创建了一个空白行。</p><p>你可能已经注意到了，这个脚本在数据流的最后一行后面也加了一个空白行，使得文件的末尾也产生了一个空白行。如果你不想要这个空白行，可以用排除符号（ ! ）和尾行符号（ $ ）来确保脚本不会将空白行加到数据流的最后一行后面。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;$!G&#39;</span> data2.txt
This is the header line.

This is the first data line.

This is the second data line.

This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在看起来好一些了。只要该行不是最后一行， G 命令就会附加保持空间内容。当sed编辑器到了最后一行时，它会跳过 G 命令。</p><h5>对可能含有空白行的文件加倍行间距</h5><p>如果文本文件已经有一些空白行，但你想给所有行加倍行间距要怎么办呢？如果用前面的脚本，有些区域会有太多的空白行，因为每个已有的空白行也会被加倍</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data6.txt
This is line one.
This is line two.

This is line three.
This is line four.
$
$ <span class="token function">sed</span> <span class="token string">&#39;$!G&#39;</span> data6.txt
This is line one.

This is line two.



This is line three.

This is line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，在原来空白行的位置有了三个空白行。这个问题的解决办法是，首先删除数据流中的所有空白行，然后用 G 命令在所有行后插入新的空白行。要删除已有的空白行，需要将 d 命令和一个匹配空白行的模式一起使用。</p><blockquote><p>/^$/d</p></blockquote><p>这个模式使用了行首符号（ ^ ）和行尾符号（ $ ）。将这个模式加到脚本中会生成想要的结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;/^$/d ; $!G&#39;</span> data6.txt
This is line one.

This is line two.

This is line three.

This is line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>给文件中的行编号</h5><p>在查看错误消息的行号时，这是一个很好用的小工具。</p><p>用等号来显示数据流中行的行号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;=&#39;</span> data2.txt
<span class="token number">1</span>
This is the header line.
<span class="token number">2</span>
This is the first data line.
<span class="token number">3</span>
This is the second data line.
<span class="token number">4</span>
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;=&#39;</span> data2.txt <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;N; s/\\n/ /&#39;</span>
<span class="token number">1</span> This is the header line.
<span class="token number">2</span> This is the first data line.
<span class="token number">3</span> This is the second data line.
<span class="token number">4</span> This is the last line.

<span class="token function">nl</span> data2.txt
<span class="token number">1</span> This is the header line.
<span class="token number">2</span> This is the first data line.
<span class="token number">3</span> This is the second data line.
<span class="token number">4</span> This is the last line.

<span class="token function">cat</span> <span class="token parameter variable">-n</span> data2.txt
<span class="token number">1</span> This is the header line.
<span class="token number">2</span> This is the first data line.
<span class="token number">3</span> This is the second data line.
<span class="token number">4</span> This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>打印末尾行</h5><p>到目前为止，你已经知道如何用 p 命令来打印数据流中所有的或者是匹配某个特定模式的行。 如果只需处理一个长输出（比如日志文件）中的末尾几行，要怎么办呢？ 美元符代表数据流中最后一行，所以只显示最后一行很容易。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;$p&#39;</span> data2.txt
This is the last line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，如何用美元符来显示数据流末尾的若干行呢？答案是创建滚动窗口。 滚动窗口是检验模式空间中文本行块的常用方法，它使用 N 命令将这些块合并起来。 N 命令将下一行文本附加到模式空间中已有文本行后面。一旦你在模式空间有了一个10行的文本块，你可以用美元符来检查你是否已经处于数据流的尾部。如果不在，就继续向模式空间增加行，同时删除原来的行（记住， D 命令会删除模式空间的第一行）。</p><p>通过循环 N 命令和 D 命令，你在向模式空间的文本行块增加新行的同时也删除了旧行。分支命令非常适合这个循环。要结束循环，只要识别出最后一行并用 q 命令退出就可以了。 最终的sed编辑器脚本看起来如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data7.txt
This is line <span class="token number">1</span>.
This is line <span class="token number">2</span>.
This is line <span class="token number">3</span>.
This is line <span class="token number">4</span>.
This is line <span class="token number">5</span>.
This is line <span class="token number">6</span>.
This is line <span class="token number">7</span>.
This is line <span class="token number">8</span>.
This is line <span class="token number">9</span>.
This is line <span class="token number">10</span>.
This is line <span class="token number">11</span>.
This is line <span class="token number">12</span>.
This is line <span class="token number">13</span>.
This is line <span class="token number">14</span>.
This is line <span class="token number">15</span>.

<span class="token function">sed</span> <span class="token string">&#39;{
&gt; :start
&gt; $q ; N ; 11,$D
&gt; b start
&gt; }&#39;</span> data7.txt
This is line <span class="token number">6</span>.
This is line <span class="token number">7</span>.
This is line <span class="token number">8</span>.
This is line <span class="token number">9</span>.
This is line <span class="token number">10</span>.
This is line <span class="token number">11</span>.
This is line <span class="token number">12</span>.
This is line <span class="token number">13</span>.
This is line <span class="token number">14</span>.
This is line <span class="token number">15</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本会首先检查这行是不是数据流中最后一行。如果是，退出（ quit ）命令会停止循环。 N 命令会将下一行附加到模式空间中当前行之后。如果当前行在第10行后面， 11,$D 命令会删除模式空间中的第一行。这就会在模式空间中创建出滑动窗口效果。因此，这个sed程序脚本只会显示出data7.txt文件最后10行</p><h5>删除行</h5><ul><li>删除连续的空白行</li></ul><p>数据文件中出现多余的空白行会非常让人讨厌。通常，数据文件中都会有空白行，但有时由于数据行的缺失，会产生过多的空白行（就像之前加倍行间距例子中所见到的那样）。</p><p>删除连续空白行的最简单办法是用地址区间来检查数据流。删除连续空白行的关键在于创建包含一个非空白行和一个空白行的地址区间。如果sed编辑器遇到了这个区间，它不会删除行。但对于不匹配这个区间的行（两个或更多的空白行），它会删除这些行。</p><p>下面是完成这个操作的脚本</p><blockquote><p>/./,/^$/!d</p></blockquote><p>区间是 /./ 到 /^$/ 。区间的开始地址会匹配任何含有至少一个字符的行。区间的结束地址会匹配一个空行。在这个区间内的行不会被删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data8.txt
This is line one.


This is line two.

This is line three.



This is line four.

<span class="token function">sed</span> <span class="token string">&#39;/./,/^$/!d&#39;</span> data8.txt
This is line one.

This is line two.

This is line three.

This is line four.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论文件的数据行之间出现了多少空白行，在输出中只会在行间保留一个空白行</p><ul><li>删除开头的空白行</li></ul><p>数据文件开头有多个空白行时也很烦人。通常，在将数据从文本文件导入到数据库时，空白行会产生一些空项，涉及这些数据的计算都得作废。</p><p>删除数据流顶部的空白行不难。下面是完成这个功能的脚本。</p><blockquote><p>/./,$!d</p></blockquote><p>这个脚本用地址区间来决定哪些行要删掉。这个区间从含有字符的行开始，一直到数据流结束。在这个区间内的任何行都不会从输出中删除。这意味着含有字符的第一行之前的任何行都会删除。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data9.txt

This is line one.

This is line two.

<span class="token function">sed</span> <span class="token string">&#39;/./,$!d&#39;</span> data9.txt
This is line one.

This is line two.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试文件在数据行之前有两个空白行。这个脚本成功地删除了开头的两个空白行，保留了数据中的空白行。</p><ul><li>删除结尾的空白行</li></ul><p>很遗憾，删除结尾的空白行并不像删除开头的空白行那么容易。就跟打印数据流的结尾一样，删除数据流结尾的空白行也需要花点心思，利用循环来实现。 在开始讨论前，先看看脚本是什么样的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;{
:start
/^\\n*$/{$d; N; b start }
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data10.txt
This is the first line.
This is the second line.



<span class="token function">sed</span> <span class="token string">&#39;{
&gt; :start
&gt; /^\\n*$/{$d ; N ; b start }
&gt; }&#39;</span> data10.txt
This is the first line.
This is the second line.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>删除 HTML 标签</h5><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>cat data11.txt
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>This is the page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
This is the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>first<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span> line in the Web page.
This should provide some <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>useful<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
information to use in our sed script.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/&lt;[^&gt;]*&gt;//g&#39;</span> data11.txt

This is the page title


This is the first line <span class="token keyword">in</span> the Web page.
This should provide some useful
information to use <span class="token keyword">in</span> our <span class="token function">sed</span> script.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以加一条删除命令来删除多余的空白行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/&lt;[^&gt;]*&gt;//g ; /^$/d&#39;</span> data11.txt
This is the page title
This is the first line <span class="token keyword">in</span> the Web page.
This should provide some useful
information to use <span class="token keyword">in</span> our <span class="token function">sed</span> script.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gawk" tabindex="-1"><a class="header-anchor" href="#gawk" aria-hidden="true">#</a> gawk</h3><p>虽然sed编辑器是非常方便自动修改文本文件的工具，但其也有自身的限制。通常你需要一个用来处理文件中的数据的更高级工具，它能提供一个类编程环境来修改和重新组织文件中的数据。这正是gawk能够做到的。</p><hr><p><strong>说明</strong> 在所有的发行版中都没有默认安装gawk程序。如果你所用的Linux发行版中没有包含gawk.</p><hr><p>gawk程序是Unix中的原始awk程序的GNU版本。gawk程序让流编辑迈上了一个新的台阶，它提供了一种编程语言而不只是编辑器命令。在gawk编程语言中，你可以做下面的事情：</p><ul><li>定义变量来保存数据；</li><li>使用算术和字符串操作符来处理数据；</li><li>使用结构化编程概念（比如 if-then 语句和循环）来为数据处理增加处理逻辑；</li><li>通过提取数据文件中的数据元素，将其重新排列或格式化，生成格式化报告。</li></ul><p>gawk程序的报告生成能力通常用来从大文本文件中提取数据元素，并将它们格式化成可读的 报告。其中最完美的例子是格式化日志文件。在日志文件中找出错误行会很难，gawk程序可以让 你从日志文件中过滤出需要的数据元素，然后你可以将其格式化，使得重要的数据更易于阅读。</p><h4 id="基础-1" tabindex="-1"><a class="header-anchor" href="#基础-1" aria-hidden="true">#</a> 基础</h4><p>gawk命令格式</p><blockquote><p>gawk options program file</p></blockquote><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>选 项    描 述
-F fs  指定行中划分数据字段的字段分隔符
-f file  从指定的文件中读取程序
-v var=value  定义gawk程序中的一个变量及其默认值
-mf N  指定要处理的数据文件中的最大字段数
-mr N  指定数据文件中的最大数据行数
-W keyword  指定gawk的兼容模式或警告等级
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>从命令行读取程序脚本</h5><p>gawk程序脚本用一对花括号来定义。你必须将脚本命令放到两个花括号（ {} ）中。如果你 错误地使用了圆括号来包含gawk脚本，就会得到一条类似于下面的错误提示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;(print &quot;Hello World!&quot;}&#39;</span>
gawk: <span class="token punctuation">(</span>print <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">}</span>
gawk: ^ syntax error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 gawk 命令行假定脚本是单个文本字符串，你还必须将脚本放到单引号中。下面的例子在命令行上指定了一个简单的gawk程序脚本：</p><blockquote><p>gawk &#39;{print &quot;Hello World!&quot;}&#39;</p></blockquote><p>这个程序脚本定义了一个命令： print 命令。这个命令名副其实：它会将文本打印到 STDOUT 。如果尝试运行这个命令，你可能会有些失望，因为什么都不会发生。原因在于没有在命令行上指定文件名，所以gawk程序会从 STDIN 接收数据。在运行这个程序时，它会一直等待从 STDIN 输入的文本。</p><p>如果你输入一行文本并按下回车键，gawk会对这行文本运行一遍程序脚本。跟sed编辑器一样，gawk程序会针对数据流中的每行文本执行程序脚本。由于程序脚本被设为显示一行固定的文本字符串，因此不管你在数据流中输入什么文本，都会得到同样的文本输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">gawk</span> <span class="token string">&#39;{print &quot;Hello World!&quot;}&#39;</span>
This is a <span class="token builtin class-name">test</span>
Hello World<span class="token operator">!</span>
hello
Hello World<span class="token operator">!</span>
This is another <span class="token builtin class-name">test</span>
Hello World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要终止这个gawk程序，你必须表明数据流已经结束了。bash shell提供了一个组合键来生成EOF（End-of-File）字符。Ctrl+D组合键会在bash中产生一个EOF字符。这个组合键能够终止该gawk程序并返回到命令行界面提示符下</p><h5>使用数据字段变量</h5><p>gawk的主要特性之一是其处理文本文件中数据的能力。它会自动给一行中的每个数据元素分配一个变量。默认情况下，gawk会将如下变量分配给它在文本行中发现的数据字段：</p><ul><li>$0 代表整个文本行；</li><li>$1 代表文本行中的第1个数据字段；</li><li>$2 代表文本行中的第2个数据字段；</li><li>$n 代表文本行中的第n个数据字段。</li></ul><p>gawk程序读取文本文件，只显示第1个数据字段的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2.txt
One line of <span class="token builtin class-name">test</span> text.
Two lines of <span class="token builtin class-name">test</span> text.
Three lines of <span class="token builtin class-name">test</span> text.

<span class="token function">gawk</span> <span class="token string">&#39;{print $1}&#39;</span> data2.txt
One
Two
Three
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要读取采用了其他字段分隔符的文件，可以用 -F 选项指定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> -F: <span class="token string">&#39;{print $1}&#39;</span> /etc/passwd
root
bin
daemon
adm
lp
<span class="token function">sync</span>
<span class="token function">shutdown</span>
<span class="token function">halt</span>
mail
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>在程序脚本中使用多个命令</h5><p>如果一种编程语言只能执行一条命令，那么它不会有太大用处。gawk编程语言允许你将多条命令组合成一个正常的程序。要在命令行上的程序脚本中使用多条命令，只要在命令之间放个分号即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;My name is Rich&quot;</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;{$4=&quot;Christine&quot;; print $0}&#39;</span>
My name is Christine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一条命令会给字段变量 $4 赋值。第二条命令会打印整个数据字段。注意， gawk程序在输出中已经将原文本中的第四个数据字段替换成了新值</p></blockquote><p>也可以用次提示符一次一行地输入程序脚本命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; $4=&quot;Christine&quot;
&gt; print $0}&#39;</span>
My name is Rich
My name is Christine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你用了表示起始的单引号后，bash shell会使用次提示符来提示你输入更多数据。你可以每次在每行加一条命令，直到输入了结尾的单引号。因为没有在命令行中指定文件名，gawk程序会从 STDIN 中获得数据。当运行这个程序的时候，它会等着读取来自 STDIN 的文本。要退出程序，只需按下Ctrl+D组合键来表明数据结束。</p><h5>从文件中读取程序</h5><p>跟sed编辑器一样，gawk编辑器允许将程序存储到文件中，然后再在命令行中引用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> script2.gawk
<span class="token punctuation">{</span>print <span class="token variable">$1</span> <span class="token string">&quot;&#39;s home directory is &quot;</span> <span class="token variable">$6</span><span class="token punctuation">}</span>

<span class="token function">gawk</span> -F: <span class="token parameter variable">-f</span> script2.gawk /etc/passwd
root<span class="token string">&#39;s home directory is /root
bin&#39;</span>s home directory is /bin
daemon<span class="token string">&#39;s home directory is /sbin
adm&#39;</span>s home directory is /var/adm
lp<span class="token string">&#39;s home directory is /var/spool/lpd
[...]
Christine&#39;</span>s home directory is /home/Christine
Samantha<span class="token string">&#39;s home directory is /home/Samantha
Timothy&#39;</span>s home directory is /home/Timothy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在程序文件中指定多条命令。要这么做的话，只要一条命令放一行即可，不需要用分号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> script3.gawk
<span class="token punctuation">{</span>
text <span class="token operator">=</span> <span class="token string">&quot;&#39;s home directory is &quot;</span>
print <span class="token variable">$1</span> text <span class="token variable">$6</span>
<span class="token punctuation">}</span>

<span class="token function">gawk</span> -F: <span class="token parameter variable">-f</span> script3.gawk /etc/passwd
root<span class="token string">&#39;s home directory is /root
bin&#39;</span>s home directory is /bin
daemon<span class="token string">&#39;s home directory is /sbin
adm&#39;</span>s home directory is /var/adm
lp<span class="token string">&#39;s home directory is /var/spool/lpd
[...]
Christine&#39;</span>s home directory is /home/Christine
Samantha<span class="token string">&#39;s home directory is /home/Samantha
Timothy&#39;</span>s home directory is /home/Timothy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>在处理数据前运行脚本</h5><p>gawk还允许指定程序脚本何时运行。默认情况下，gawk会从输入中读取一行文本，然后针对该行的数据执行程序脚本。有时可能需要在处理数据前运行脚本，比如为报告创建标题。 BEGIN关键字就是用来做这个的。它会强制gawk在读取数据前执行 BEGIN 关键字后指定的程序脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN {print &quot;Hello World!&quot;}&#39;</span>
Hello World<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这次 print 命令会在读取数据前显示文本。但在它显示了文本后，它会快速退出，不等待任何数据。如果想使用正常的程序脚本中处理数据，必须用另一个脚本区域来定义程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data3.txt
Line <span class="token number">1</span>
Line <span class="token number">2</span>
Line <span class="token number">3</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN {print &quot;The data3 File Contents:&quot;}
&gt; {print $0}&#39;</span> data3.txt
The data3 File Contents:
Line <span class="token number">1</span>
Line <span class="token number">2</span>
Line <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在gawk执行了BEGIN脚本后，它会用第二段脚本来处理文件数据。这么做时要小心，两段脚本仍然被认为是 gawk 命令行中的一个文本字符串。你需要相应地加上单引号</p><h5>在处理数据后运行脚本</h5><p>与 BEGIN 关键字类似， END 关键字允许你指定一个程序脚本，gawk会在读完数据后执行它</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN {print &quot;The data3 File Contents:&quot;}
&gt; {print $0}
&gt; END {print &quot;End of File&quot;}&#39;</span> data3.txt
The data3 File Contents:
Line <span class="token number">1</span>
Line <span class="token number">2</span>
Line <span class="token number">3</span>
End of File
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当gawk程序打印完文件内容后，它会执行END脚本中的命令。这是在处理完所有正常数据后给报告添加页脚的最佳方法。 可以将所有这些内容放到一起组成一个漂亮的小程序脚本文件，用它从一个简单的数据文件中创建一份完整的报告:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> script4.gawk
BEGIN <span class="token punctuation">{</span>
print <span class="token string">&quot;The latest list of users and shells&quot;</span>
print <span class="token string">&quot; UserID <span class="token entity" title="\\t">\\t</span> Shell&quot;</span>
print <span class="token string">&quot;-------- <span class="token entity" title="\\t">\\t</span> -------&quot;</span>
<span class="token assign-left variable">FS</span><span class="token operator">=</span><span class="token string">&quot;:&quot;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
print <span class="token variable">$1</span> <span class="token string">&quot; <span class="token entity" title="\\t">\\t</span> &quot;</span> <span class="token variable">$7</span>
<span class="token punctuation">}</span>

END <span class="token punctuation">{</span>
print <span class="token string">&quot;This concludes the listing&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个脚本用BEGIN脚本来为报告创建标题。它还定义了一个叫作 FS 的特殊变量。这是定义字段分隔符的另一种方法。这样你就不用依靠脚本用户在命令行选项中定义字段分隔符了。 下面是这个gawk程序脚本的输出（有部分删节）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token parameter variable">-f</span> script4.gawk /etc/passwd
The latest list of <span class="token function">users</span> and shells
UserID Shell
---------------
root /bin/bash
bin /sbin/nologin
daemon /sbin/nologin
<span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
Christine /bin/bash
mysql /bin/bash
Samantha /bin/bash
Timothy /bin/bash
This concludes the listing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与预想的一样，BEGIN脚本创建了标题，程序脚本处理特定数据文件（/etc/passwd）中的信息，END脚本生成页脚。这个简单的脚本让你小试了一把gawk的强大威力。</p><h4 id="使用变量" tabindex="-1"><a class="header-anchor" href="#使用变量" aria-hidden="true">#</a> 使用变量</h4><h5>内建变量</h5><ul><li>字段和记录分隔符变量</li></ul><p>数据字段是由字段分隔符来划定的。默认情况下，字段分隔符是一个空白字符，也就是空格符或者制表符。</p><p>内建变量 FS 是一组内建变量中的一个，这组变量用于控制gawk如何处理输入输出数据中的字段和记录；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>变 量    描 述
FIELDWIDTHS  由空格分隔的一列数字，定义了每个数据字段确切宽度
FS  输入字段分隔符
RS  输入记录分隔符
OFS  输出字段分隔符
ORS  输出记录分隔符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量 FS 来定义记录中的字段分隔符。变量 OFS 具备相同的功能，只不过是用在 print 命令的输出上。默认情况下，gawk将 OFS 设成一个空格，所以如果你用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1
data11,data12,data13,data14,data15
data21,data22,data23,data24,data25
data31,data32,data33,data34,data35

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} {print $1,$2,$3}&#39;</span> data1
data11 data12 data13
data21 data22 data23
data31 data32 data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>print 命令会自动将 OFS 变量的值放置在输出中的每个字段间。通过设置 OFS 变量，可以在输出中使用任意字符串来分隔字段</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; OFS=&quot;-&quot;} {print $1,$2,$3}&#39;</span> data1
data11-data12-data13
data21-data22-data23
data31-data32-data33

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; OFS=&quot;--&quot;} {print $1,$2,$3}&#39;</span> data1
data11--data12--data13
data21--data22--data23
data31--data32--data33

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; OFS=&quot;&lt;--&gt;&quot;} {print $1,$2,$3}&#39;</span> data1
data1<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>--<span class="token operator">&gt;</span>data1<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>--<span class="token operator">&gt;</span>data13
data2<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>--<span class="token operator">&gt;</span>data2<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>--<span class="token operator">&gt;</span>data23
data3<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>--<span class="token operator">&gt;</span>data3<span class="token operator"><span class="token file-descriptor important">2</span>&lt;</span>--<span class="token operator">&gt;</span>data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FIELDWIDTHS 变量允许你不依靠字段分隔符来读取记录。在一些应用程序中，数据并没有使用字段分隔符，而是被放置在了记录中的特定列。这种情况下，必须设定 FIELDWIDTHS 变量来匹配数据在记录中的位置。</p><p>一旦设置了 FIELDWIDTH 变量，gawk就会忽略 FS 变量，并根据提供的字段宽度来计算字段。</p><p>下面是个采用字段宽度而非字段分隔符的例子，每个记录中的数字串会根 据已定义好的字段长度来分割。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data1b
<span class="token number">1005.3247596</span>.37
<span class="token number">115</span>-2.349194.00
05810.1298100.1

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FIELDWIDTHS=&quot;3 5 2 5&quot;}{print $1,$2,$3,$4}&#39;</span> data1b
<span class="token number">100</span> <span class="token number">5.324</span> <span class="token number">75</span> <span class="token number">96.37</span>
<span class="token number">115</span> <span class="token parameter variable">-2.34</span> <span class="token number">91</span> <span class="token number">94.00</span>
058 <span class="token number">10.12</span> <span class="token number">98</span> <span class="token number">100.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>警告</strong> 一定要记住，一旦设定了 FIELDWIDTHS 变量的值，就不能再改变了。这种方法并不适用于变长的字段。</p><hr><p>变量 RS 和 ORS 定义了gawk程序如何处理数据流中的字段。默认情况下，gawk将 RS 和 ORS 设为换行符。默认的 RS 值表明，输入数据流中的每行新文本就是一条新纪录。</p><p>有时，你会在数据流中碰到占据多行的字段。</p><p>典型的例子是包含地址和电话号码的数据，其中地址和电话号码各占一行。</p><p>把 RS 变量设置成空字符串，然后在数据记录间留一个空白行。gawk会把每个空白行当作一个记录分隔符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data2
Riley Mullen
<span class="token number">123</span> Main Street
Chicago, IL <span class="token number">60601</span>
<span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234

Frank Williams
<span class="token number">456</span> Oak Street
Indianapolis, IN <span class="token number">46201</span>
<span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876

Haley Snell
<span class="token number">4231</span> Elm Street
Detroit, MI <span class="token number">48201</span>
<span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {print $1,$4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据变量</li></ul><p>除了字段和记录分隔符变量外，gawk还提供了其他一些内建变量来帮助你了解数据发生了什么变化，并提取shell环境的信息。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>变 量    描 述
ARGC  当前命令行参数个数
ARGIND  当前文件在 ARGV 中的位置
ARGV<span class="token punctuation">[</span>n<span class="token punctuation">]</span>  包含命令行参数的数组
CONVFMT  数字的转换格式（参见 printf 语句），默认值为 <span class="token comment">%.6 g</span>
ENVIRON  当前shell环境变量及其值组成的关联数组
ERRNO  当读取或关闭输入文件发生错误时的系统错误号
FILENAME  用作gawk输入数据的数据文件的文件名
IGNORECASE  设成非零值时，忽略 gawk 命令中出现的字符串的字符大小写
NF  含有数据文件中最后一个数据字段的数字值。
NR  已处理过的记录总数
FNR  当前数据文件中的数据行数（记录数）
OFMT  数字的输出格式，默认值为 <span class="token comment">%.6 g</span>
RLENGTH  由 match 函数所匹配的子字符串的长度
RSTART  由 match 函数所匹配的子字符串的起始位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{print ARGC,ARGV[1]}&#39;</span> data1
<span class="token number">2</span> data1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ARGC 变量表明命令行上有两个参数。这包括 gawk 命令和 data1 参数（记住，程序脚本并不算参数）。</p><p>ARGV 数组从索引 0 开始，代表的是命令。第一个数组值是 gawk 命令后的第一个命令行参数。</p><hr><p>ENVIRON 获取 shell 环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN{
&gt; print ENVIRON[&quot;HOME&quot;]
&gt; print ENVIRON[&quot;PATH&quot;]
&gt; }&#39;</span>
/home/rich
/usr/local/bin:/bin:/usr/bin:/usr/X11R6/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>跟踪数据字段和记录时，变量 <code>FNR</code> 、 <code>NF</code> 和 <code>NR</code> 用起来就非常方便。有时你并不知道记录中到底有多少个数据字段。</p><p><code>NF</code> 变量可以让你在不知道具体位置的情况下指定记录中的最后一个数据字段。<code>FNR</code> 变量的值在 gawk 处理第二个数据文件时被重置了，而 <code>NR</code> 变量则在处理第二个数据文件时继续计数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;:&quot;; OFS=&quot;:&quot;} {print $1,$NF}&#39;</span> /etc/passwd
testy:/bin/csh
mark:/bin/bash
dan:/bin/bash
mike:/bin/bash
test:/bin/bash

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;}{print $1,&quot;FNR=&quot;FNR}&#39;</span> data1 data1
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span>
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN {FS=&quot;,&quot;}
&gt; {print $1,&quot;FNR=&quot;FNR,&quot;NR=&quot;NR}
&gt; END{print &quot;There were&quot;,NR,&quot;records processed&quot;}&#39;</span> data1 data1
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">1</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">2</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">3</span>
data11 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">4</span>
data21 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">5</span>
data31 <span class="token assign-left variable">FNR</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">NR</span><span class="token operator">=</span><span class="token number">6</span>
There were <span class="token number">6</span> records processed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>说明</strong> 在使用gawk时你可能会注意到，gawk脚本通常会比shell脚本中的其他部分还要大一些。为了简单起见，在本章的例子中，我们利用shell的多行特性直接在命令行上运行了gawk脚本。在shell脚本中使用gawk时，应该将不同的 gawk 命令放到不同的行，这样会比较容易阅读和理解，不要在shell脚本中将所有的命令都塞到同一行。还有，如果你发现在不同的shell脚本中用到了同样的gawk脚本，记着将这段gawk脚本放到一个单独的文件中，并用 <code>-f</code> 参数来在shell脚本中引用它.</p><hr><h5>自定义变量</h5><p>自定义变量名可以是任意数目的字母、数字和下划线，但不能以数字开头。重要的是，要记住 gawk 变量名区分大小写。</p><ul><li>在脚本中给变量赋值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN{
&gt; testing=&quot;This is a test&quot;
&gt; print testing
&gt; }&#39;</span>
This is a <span class="token builtin class-name">test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gawk 变量可以保存数值或文本值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; BEGIN{
&gt; testing=&quot;This is a test&quot;
&gt; print testing
&gt; testing=45
&gt; print testing
&gt; }&#39;</span>
This is a <span class="token builtin class-name">test</span>
<span class="token number">45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值语句还可以包含数学算式来处理数字值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x=4; x= x * 2 + 3; print x}&#39;</span>
<span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在命令行上给变量赋值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> script1
BEGIN<span class="token punctuation">{</span>FS<span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>print <span class="token variable">$n</span><span class="token punctuation">}</span>

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> script1 <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">2</span> data1
data12
data22
data32

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> script1 <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">3</span> data1
data13
data23
data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命令行参数来定义变量值会有一个问题。在你设置了变量后，这个值在代码的 BEGIN 部分不可用。可以用 -v 命令行参数来解决这个问题。它允许你在 BEGIN 代码之前设定变量。在命令行上，-v 命令行参数必须放在脚本代码之前。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> script2
BEGIN<span class="token punctuation">{</span>print <span class="token string">&quot;The starting value is&quot;</span>,n<span class="token punctuation">;</span> <span class="token assign-left variable">FS</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>print <span class="token variable">$n</span><span class="token punctuation">}</span>

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> script2 <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">3</span> data1
The starting value is
data13
data23
data33

<span class="token function">gawk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token number">3</span> <span class="token parameter variable">-f</span> script2 data1
The starting value is <span class="token number">3</span>
data13
data23
data33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="处理数组" tabindex="-1"><a class="header-anchor" href="#处理数组" aria-hidden="true">#</a> 处理数组</h4><h5>定义数组变量</h5><p>数组变量赋值的格式如下：</p><blockquote><p>var[index] = element</p></blockquote><p>其中 var 是变量名， index 是关联数组的索引值， element 是数据元素值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>capital<span class="token punctuation">[</span><span class="token string">&quot;Illinois&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Springfield&quot;</span>
capital<span class="token punctuation">[</span><span class="token string">&quot;Indiana&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Indianapolis&quot;</span>
capital<span class="token punctuation">[</span><span class="token string">&quot;Ohio&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Columbus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引用数组变量时，必须包含索引值来提取相应的数据元素值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; capital[&quot;Illinois&quot;] = &quot;Springfield&quot;
&gt; print capital[&quot;Illinois&quot;]
&gt; }&#39;</span>
Springfield
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在引用数组变量时，会得到数据元素的值。数据元素值是数字值时也一样。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[1] = 34
&gt; var[2] = 3
&gt; total = var[1] + var[2]
&gt; print total
&gt; }&#39;</span>
<span class="token number">37</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>遍历数组变量</h5><p>可以用 for 语句的一种特殊形式。</p><blockquote><p>for (var in array)</p><p>{</p><p>​ statements</p><p>}</p><p>for 语句会在每次循环时将关联数组 array 的下一个索引值赋给变量 var ，然后执行一遍 statements .</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[&quot;a&quot;] = 1
&gt; var[&quot;g&quot;] = 2
&gt; var[&quot;m&quot;] = 3
&gt; var[&quot;u&quot;] = 4
&gt; for (test in var)
&gt; {
&gt; print &quot;Index:&quot;,test,&quot; - Value:&quot;,var[test]
&gt; }
&gt; }&#39;</span>
Index: u - Value: <span class="token number">4</span>
Index: m - Value: <span class="token number">3</span>
Index: a - Value: <span class="token number">1</span>
Index: g - Value: <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>删除数组变量</h5><p>从关联数组中删除数组索引要用一个特殊的命令。</p><blockquote><p>delete array[index]</p></blockquote><p>删除命令会从数组中删除关联索引值和相关的数据元素值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[&quot;a&quot;] = 1
&gt; var[&quot;g&quot;] = 2
&gt; for (test in var)
&gt; {
&gt; print &quot;Index:&quot;,test,&quot; - Value:&quot;,var[test]
&gt; }
&gt; delete var[&quot;g&quot;]
&gt; print &quot;---&quot;
&gt; for (test in var)
&gt; print &quot;Index:&quot;,test,&quot; - Value:&quot;,var[test]
&gt; }&#39;</span>

Index: a - Value: <span class="token number">1</span>
Index: g - Value: <span class="token number">2</span>
---
Index: a - Value: <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用模式" tabindex="-1"><a class="header-anchor" href="#使用模式" aria-hidden="true">#</a> 使用模式</h4><h5>正则表达式</h5><p>在使用正则表达式时，正则表达式必须出现在它要控制的程序脚本的左花括号前。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} /11/{print $1}&#39;</span> data1
data11

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} /,d/{print $1}&#39;</span> data1
data11
data21
data31
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>1 正则表达式 /11/ 匹配了数据字段中含有字符串 11 的记录</p></li><li><p>2 匹配了用作字段分隔符的逗号。这也并不总是件好事。它可能会造 成如下问题：当试图匹配某个数据字段中的特定数据时，这些数据又出现在其他数据字段中。如果需要用正则表达式匹配某个特定的数据实例，应该使用匹配操作符。</p></li></ul><h5>匹配操作符</h5><p>匹配操作符（matching operator）允许将正则表达式限定在记录中的特定数据字段。匹配操作符是波浪线（ ~ ）。可以指定匹配操作符、数据字段变量以及要匹配的正则表达式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$1 ~ /^data/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>$1 变量代表记录中的第一个数据字段。这个表达式会过滤出第一个字段以文本 data 开头的所有记录。</p><p>下面是在gawk程序脚本中使用匹配操作符的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} $2 ~ /^data2/{print $0}&#39;</span> data1
data21,data22,data23,data24,data25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配操作符会用正则表达式 /^data2/ 来比较第二个数据字段，该正则表达式指明字符串要以文本 data2 开头。</p><p>这可是件强大的工具，gawk程序脚本中经常用它在数据文件中搜索特定的数据元素。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">gawk</span> -F: <span class="token string">&#39;$1 ~ /rich/{print $1,$NF}&#39;</span> /etc/passwd
rich /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子会在第一个数据字段中查找文本 rich 。如果在记录中找到了这个模式，它会打印该记录的第一个和最后一个数据字段值。</p><p>你也可以用 ! 符号来排除正则表达式的匹配。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$1</span> <span class="token operator">!</span>~ /expression/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果记录中没有找到匹配正则表达式的文本，程序脚本就会作用到记录数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> –F: <span class="token string">&#39;$1 !~ /rich/{print $1,$NF}&#39;</span> /etc/passwd

root /bin/bash
daemon /bin/sh
bin /bin/sh
sys /bin/sh
--- output truncated ---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，gawk程序脚本会打印/etc/passwd文件中与用户ID rich 不匹配的用户ID和登录shell。</p><h5>数学表达式</h5><p>除了正则表达式，你也可以在匹配模式中用数学表达式。这个功能在匹配数据字段中的数字值时非常方便。举个例子，如果你想显示所有属于root用户组（组ID为 0 ）的系统用户，可以用这个脚本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> -F: <span class="token string">&#39;$4 == 0{print $1}&#39;</span> /etc/passwd
root
<span class="token function">sync</span>
<span class="token function">shutdown</span>
<span class="token function">halt</span>
operator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段脚本会查看第四个数据字段含有值 0 的记录。在这个Linux系统中，有五个用户账户属于root用户组。</p><p>可以使用任何常见的数学比较表达式。</p><ul><li>x == y ：值x等于y。</li><li>x &lt;= y ：值x小于等于y。</li><li>x &lt; y ：值x小于y。</li><li>x &gt;= y ：值x大于等于y。</li><li>x &gt; y ：值x大于y。</li></ul><p>也可以对文本数据使用表达式，但必须小心。跟正则表达式不同，表达式必须完全匹配。数据必须跟模式严格匹配。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> -F, <span class="token string">&#39;$1 == &quot;data&quot;{print $1}&#39;</span> data1
<span class="token function">gawk</span> -F, <span class="token string">&#39;$1 == &quot;data11&quot;{print $1}&#39;</span> data1
data11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个测试没有匹配任何记录，因为第一个数据字段的值不在任何记录中。第二个测试用值 data11 匹配了一条记录。</p><h4 id="使用结构化命令-1" tabindex="-1"><a class="header-anchor" href="#使用结构化命令-1" aria-hidden="true">#</a> 使用结构化命令</h4><h5>if</h5><p>格式</p><blockquote><p>if (condition)</p><p>​ statement1</p><p>或者</p><p>if (condition) statement1</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data4
<span class="token number">10</span>
<span class="token number">5</span>
<span class="token number">13</span>
<span class="token number">50</span>
<span class="token number">34</span>
<span class="token function">gawk</span> <span class="token string">&#39;{if ($1 &gt; 20) print $1}&#39;</span> data4
<span class="token number">50</span>
<span class="token number">34</span>

<span class="token function">gawk</span> <span class="token string">&#39;{
&gt; if ($1 &gt; 20)
&gt; {
&gt; x = $1 * 2
&gt; print x
&gt; }
&gt; }&#39;</span> data4
<span class="token number">100</span>
<span class="token number">68</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，不能弄混 if 语句的花括号和用来表示程序脚本开始和结束的花括号。如果弄混了，gawk程序能够发现丢失了花括号，并产生一条错误消息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">gawk</span> <span class="token string">&#39;{
&gt; if ($1 &gt; 20)
&gt; {
&gt; x = $1 * 2
&gt; print x
&gt; }&#39;</span> data4
gawk: cmd. line:6: <span class="token punctuation">}</span>
gawk: cmd. line:6: ^ unexpected newline or end of string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; if ($1 &gt; 20)
&gt; {
&gt; x = $1 * 2
&gt; print x
&gt; } else
&gt; {
&gt; x = $1 / 2
&gt; print x
&gt; }}&#39;</span> data4
<span class="token number">5</span>
<span class="token number">2.5</span>
<span class="token number">6.5</span>
<span class="token number">100</span>
<span class="token number">68</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if (condition) statement1; else statement2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{if ($1 &gt; 20) print $1 * 2; else print $1 / 2}&#39;</span> data4
<span class="token number">5</span>
<span class="token number">2.5</span>
<span class="token number">6.5</span>
<span class="token number">100</span>
<span class="token number">68</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>while</h5><blockquote><p>while (condition)</p><p>{</p><p>​ statements</p><p>}</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> data5
<span class="token number">130</span> <span class="token number">120</span> <span class="token number">135</span>
<span class="token number">160</span> <span class="token number">113</span> <span class="token number">140</span>
<span class="token number">145</span> <span class="token number">170</span> <span class="token number">215</span>

<span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; i = 1
&gt; while (i &lt; 4)
&gt; {
&gt; total += $i
&gt; i++
&gt; }
&gt; avg = total / 3
&gt; print &quot;Average:&quot;,avg
&gt; }&#39;</span> data5
Average: <span class="token number">128.333</span>
Average: <span class="token number">137.667</span>
Average: <span class="token number">176.667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>while 语句会遍历记录中的数据字段，将每个值都加到 total 变量上，并将计数器变量 i 增值。</p><p>当计数器值等于 4 时， while 的条件变成了 FALSE ，循环结束，然后执行脚本中的下一条语句</p></blockquote><p>gawk编程语言支持在 while 循环中使用 break 语句和 continue 语句，允许你从循环中跳出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; i = 1
&gt; while (i &lt; 4)
&gt; {
&gt; total += $i
&gt; if (i == 2)
&gt; break
&gt; i++
&gt; }
&gt; avg = total / 2
&gt; print &quot;The average of the first two data elements is:&quot;,avg
&gt; }&#39;</span> data5
The average of the first two data elements is: <span class="token number">125</span>
The average of the first two data elements is: <span class="token number">136.5</span>
The average of the first two data elements is: <span class="token number">157.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>do-while</h5><p>会在检查条件语句之前执行命令。</p><blockquote><p>do { statements } while (condition)</p></blockquote><p>这种格式保证了语句会在条件被求值之前至少执行一次。当需要在求值条件前执行语句时，这个特性非常方便。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; i = 1
&gt; do
&gt; {
&gt; total += $i
&gt; i++
&gt; } while (total &lt; 150)
&gt; print total }&#39;</span> data5
<span class="token number">250</span>
<span class="token number">160</span>
<span class="token number">315</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这个脚本会读取每条记录的数据字段并将它们加在一起，直到累加结果达到150。如果第一个数据字段大于150（就像在第二条记录中看到的那样），则脚本会保证在条件被求值前至少读取第一个数据字段的内容。</p></blockquote><h5>for</h5><p>for( variable assignment; condition; iteration process)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; for (i = 1; i &lt; 4; i++)
&gt; {
&gt; total += $i
&gt; }
&gt; avg = total / 3
&gt; print &quot;Average:&quot;,avg
&gt; }&#39;</span> data5
Average: <span class="token number">128.333</span>
Average: <span class="token number">137.667</span>
Average: <span class="token number">176.667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="格式化打印-printf" tabindex="-1"><a class="header-anchor" href="#格式化打印-printf" aria-hidden="true">#</a> 格式化打印 printf</h4><p>命令的格式：</p><blockquote><p>printf &quot;format string&quot;, var1, var2 . . .</p><p>format string 是格式化输出的关键。它会用文本元素和格式化指定符来具体指定如何呈现格式化输出。第一个格式化指定符对应列出的 第一个变量，第二个对应第二个变量，依此类推。</p></blockquote><p>格式化指定符采用如下格式：</p><blockquote><p>%[modifier]control-letter</p></blockquote><p>其中 control-letter 是一个单字符代码，用于指明显示什么类型的数据，而 modifier 则定义了可选的格式化特性。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>控制字母   描 述
c  将一个数作为ASCII字符显示
d  显示一个整数值
i  显示一个整数值（跟d一样）
e  用科学计数法显示一个数
f  显示一个浮点值
g  用科学计数法或浮点数显示（选择较短的格式）
o  显示一个八进制值
s  显示一个文本字符串
x  显示一个十六进制值
X  显示一个十六进制值，但用大写字母A~F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，如果你需要显示一个字符串变量，可以用格式化指定符 %s 。如果你需要显示一个整数值，可以用 %d 或 %i （ %d 是十进制数的C风格显示方式）。如果你要用科学计数法显示很大的值，就用 %e 格式化指定符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
x = 10 * 100
printf &quot;The answer is: %e\\n&quot;, x
}&#39;</span>
The answer is: <span class="token number">1</span>.000000e+03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了控制字母外，还有3种修饰符可以用来进一步控制输出。</p><ul><li>width ：指定了输出字段最小宽度的数字值。如果输出短于这个值，printf 会将文本右对齐，并用空格进行填充。如果输出比指定的宽度还要长，则按照实际的长度输出。</li><li>prec ：这是一个数字值，指定了浮点数中小数点后面位数，或者文本字符串中显示的最大字符数。</li><li>-（减号）：指明在向格式化空间中放入数据时采用左对齐而不是右对齐。</li></ul><p>在使用 printf 语句时，你可以完全控制输出样式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {print $1,$4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {printf &quot;%s %s\\n&quot;, $1, $4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>，你需要在 printf 命令的末尾手动添加换行符来生成新行。没添加的话， printf 命令会继续在同一行打印后续输出。</p><p>如果需要用几个单独的 printf 命令在同一行上打印多个输出，这就会非常有用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;} {printf &quot;%s &quot;, $1} END{printf &quot;\\n&quot;}&#39;</span> data1
data11 data21 data31
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>用修饰符来格式化第一个字符串值:</p><blockquote><p>通过添加一个值为 16 的修饰符，我们强制第一个字符串的输出宽度为16个字符。默认情况下，printf 命令使用右对齐来将数据放到格式化空间中。要改成左对齐，只需给修饰符加一个减号即可。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {printf &quot;%16s %s\\n&quot;, $1, $4}&#39;</span> data2
  Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
    Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
    
<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;} {printf &quot;%-16s %s\\n&quot;, $1, $4}&#39;</span> data2
Riley Mullen <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>处理浮点值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;{
&gt; total = 0
&gt; for (i = 1; i &lt; 4; i++)
&gt; {
&gt; total += $i
&gt; }
&gt; avg = total / 3
&gt; printf &quot;Average: %5.1f\\n&quot;,avg
&gt; }&#39;</span> data5
Average: <span class="token number">128.3</span>
Average: <span class="token number">137.7</span>
Average: <span class="token number">176.7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用 %5.1f 格式指定符来强制 printf 命令将浮点值近似到小数点后一位。</p></blockquote><h4 id="使用函数" tabindex="-1"><a class="header-anchor" href="#使用函数" aria-hidden="true">#</a> 使用函数</h4><h5>数学函数</h5><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>函 数    描 述
atan2(x, y)  x/y的反正切，x和y以弧度为单位
cos(x)  x的余弦，x以弧度为单位
exp(x)  x的指数函数
int(x)  x的整数部分，取靠近零一侧的值
log(x)  x的自然对数
rand( )  比0大比1小的随机浮点值
sin(x)  x的正弦，x以弧度为单位
sqrt(x)  x的平方根
srand(x)  为计算随机数指定一个种子值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>x <span class="token operator">=</span> int<span class="token punctuation">(</span><span class="token number">10</span> * rand<span class="token punctuation">(</span><span class="token punctuation">))</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x=exp(100); print x}&#39;</span>
<span class="token number">26881171418161356094253400435962903554686976</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x=exp(1000); print x}&#39;</span>
gawk: warning: exp argument <span class="token number">1000</span> is out of range
inf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第一个例子会计算e的100次幂，虽然数值很大，但尚在系统的区间内。第二个例子尝试计算e的1000次幂，已经超出了系统的数值区间，所以就生成了一条错误消息。</p></blockquote><p>gawk还支持一些按位操作数据的函数。</p><ul><li>and(v1, v2) ：执行值 v1 和 v2 的按位与运算。</li><li>compl(val) ：执行 val 的补运算。</li><li>lshift(val, count) ：将值 val 左移 count 位。</li><li>or(v1, v2) ：执行值 v1 和 v2 的按位或运算。</li><li>rshift(val, count) ：将值 val 右移 count 位。</li><li>xor(v1, v2) ：执行值 v1 和 v2 的按位异或运算。</li></ul><p>位操作函数在处理数据中的二进制值时非常有用。</p><h5>字符串函数</h5><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>函 数    描 述
asort(s <span class="token punctuation">[</span>,d<span class="token punctuation">]</span>)  将数组s按数据元素值排序。索引值会被替换成表示新的排序顺序的连续数字。另外，如果指定了d，则排序后的数组会存储在数组d中

asorti(s <span class="token punctuation">[</span>,d<span class="token punctuation">]</span>)  将数组s按索引值排序。生成的数组会将索引值作为数据元素值，用连续数字索引来表明排序顺序。另外如果指定了d，排序后的数组会存储在数组d中

gensub(r, s, h <span class="token punctuation">[</span>, t<span class="token punctuation">]</span>)  查找变量<span class="token equation string">$0或目标字符串t（如果提供了的话）来匹配正则表达式r。如果h是一个以g或G开头的字符串，就用s替换掉匹配的文本。如果h是一个数字，它表示要替换掉第h处r匹配的地方

gsub(r, s [,t])  查找变量$</span>0或目标字符串t（如果提供了的话）来匹配正则表达式r。如果找到了，就全部替换成字符串s

index(s, t)  返回字符串t在字符串s中的索引值，如果没找到的话返回 0

length(<span class="token punctuation">[</span>s<span class="token punctuation">]</span>)  返回字符串s的长度；如果没有指定的话，返回<span class="token equation string">$0的长度

match(s, r [,a])  返回字符串s中正则表达式r出现位置的索引。如果指定了数组a，它会存储s中匹配正则表达式的那部分

split(s, a [,r])  将s用 FS 字符或正则表达式r（如果指定了的话）分开放到数组a中。返回字段的总数

sprintf(format,variables)  用提供的format和variables返回一个类似于printf输出的字符串

sub(r, s [,t])  在变量$</span>0或目标字符串t中查找正则表达式r的匹配。如果找到了，就用字符串s替换掉第一处匹配

substr(s, i <span class="token punctuation">[</span>,n<span class="token punctuation">]</span>)  返回s中从索引值i开始的n个字符组成的子字符串。如果未提供n，则返回s剩下的部分

tolower(s)  将s中的所有字符转换成小写

toupper(s)  将s中的所有字符转换成大写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{x = &quot;testing&quot;; print toupper(x); print length(x) }&#39;</span>
TESTING
<span class="token number">7</span>

<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; var[&quot;a&quot;] = 1
&gt; var[&quot;g&quot;] = 2
&gt; var[&quot;m&quot;] = 3
&gt; var[&quot;u&quot;] = 4
&gt; asort(var, test)
&gt; for (i in test)
&gt; print &quot;Index:&quot;,i,&quot; - value:&quot;,test[i]
&gt; }&#39;</span>
Index: <span class="token number">4</span> - value: <span class="token number">4</span>
Index: <span class="token number">1</span> - value: <span class="token number">1</span>
Index: <span class="token number">2</span> - value: <span class="token number">2</span>
Index: <span class="token number">3</span> - value: <span class="token number">3</span>


<span class="token function">gawk</span> <span class="token string">&#39;BEGIN{ FS=&quot;,&quot;}{
&gt; split($0, var)
&gt; print var[1], var[5]
&gt; }&#39;</span> data1
data11 data15
data21 data25
data31 data35
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>时间函数</h5><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>mktime(datespec)  将一个按YYYY MM DD HH MM SS <span class="token punctuation">[</span>DST<span class="token punctuation">]</span>格式指定的日期转换成时间戳值 ①

strftime(format<span class="token punctuation">[</span>,timestamp<span class="token punctuation">]</span>)  将当前时间的时间戳或timestamp（如果提供了的话）转化格式化日期（采用shell函数date()的格式）

systime( )  返回当前时间的时间戳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;BEGIN{
&gt; date = systime()
&gt; day = strftime(&quot;%A, %B %d, %Y&quot;, date)
&gt; print day
&gt; }&#39;</span>
Friday, December <span class="token number">26</span>, <span class="token number">2014</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>定义函数</h5><p>要定义自己的函数，必须用 function 关键字。</p><blockquote><p>function name([variables]) { statements }</p></blockquote><p>函数名必须能够唯一标识函数。可以在调用的gawk程序中传给这个函数一个或多个变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">printthird</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    print <span class="token variable">$3</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> myrand<span class="token punctuation">(</span>limit<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> int<span class="token punctuation">(</span>limit * rand<span class="token punctuation">(</span><span class="token punctuation">))</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>使用自定义函数</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gawk</span> <span class="token string">&#39;
&gt; function myprint()
&gt; {
&gt; printf &quot;%-16s - %s\\n&quot;, $1, $4
&gt; }
&gt; BEGIN{FS=&quot;\\n&quot;; RS=&quot;&quot;}
&gt; {
&gt; myprint()
&gt; }&#39;</span> data2

Riley Mullen - <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams - <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell - <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>创建函数库</h5><p>首先，你需要创建一个存储所有gawk函数的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> funclib
<span class="token keyword">function</span> <span class="token function-name function">myprint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;%-16s - %s<span class="token entity" title="\\n">\\n</span>&quot;</span>, <span class="token variable">$1</span>, <span class="token variable">$4</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> myrand<span class="token punctuation">(</span>limit<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> int<span class="token punctuation">(</span>limit * rand<span class="token punctuation">(</span><span class="token punctuation">))</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">printthird</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    print <span class="token variable">$3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>funclib文件含有三个函数定义。需要使用 -f 命令行参数来使用它们。很遗憾，不能将 -f 命令行参数和内联gawk脚本放到一起使用，不过可以在同一个命令行中使用多个 -f 参数。</p><p>因此，要使用库，只要创建一个含有你的gawk程序的文件，然后在命令行上同时指定库文件和程序文件就行了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> script4
BEGIN<span class="token punctuation">{</span> <span class="token assign-left variable">FS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">;</span> <span class="token assign-left variable">RS</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>
myprint<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">gawk</span> <span class="token parameter variable">-f</span> funclib <span class="token parameter variable">-f</span> script4 data2
Riley Mullen - <span class="token punctuation">(</span><span class="token number">312</span><span class="token punctuation">)</span><span class="token number">555</span>-1234
Frank Williams - <span class="token punctuation">(</span><span class="token number">317</span><span class="token punctuation">)</span><span class="token number">555</span>-9876
Haley Snell - <span class="token punctuation">(</span><span class="token number">313</span><span class="token punctuation">)</span><span class="token number">555</span>-4938
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例来说，我们手边有一个数据文件，其中包含了两支队伍（每队两名选手）的保龄球比赛得分情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> scores.txt
Rich Blum,team1,100,115,95
Barbara Blum,team1,110,115,100
Christine Bresnahan,team2,120,115,118
Tim Bresnahan,team2,125,112,116
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每位选手都有三场比赛的成绩，这些成绩都保存在数据文件中，每位选手由位于第二列的队名来标识。下面的脚本对每队的成绩进行了排序，并计算了总分和平均分。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> bowling.sh
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">team</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">gawk</span> –F, <span class="token string">&#39;{print $2}&#39;</span> scores.txt <span class="token operator">|</span> <span class="token function">uniq</span><span class="token variable">)</span></span>
<span class="token keyword">do</span>
    <span class="token function">gawk</span> –v <span class="token assign-left variable">team</span><span class="token operator">=</span><span class="token variable">$team</span> <span class="token string">&#39;BEGIN{FS=&quot;,&quot;; total=0}
    {
        if ($2==team)
        {
            total += $3 + $4 + $5;
        }
    }
    END {
        avg = total / 6;
        print &quot;Total for&quot;, team, &quot;is&quot;, total, &quot;,the average is&quot;,avg
    }&#39;</span> scores.txt
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./bowling.sh
Total <span class="token keyword">for</span> team1 is <span class="token number">635</span>, the average is <span class="token number">105.833</span>
Total <span class="token keyword">for</span> team2 is <span class="token number">706</span>, the average is <span class="token number">117.667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用其他-shell" tabindex="-1"><a class="header-anchor" href="#使用其他-shell" aria-hidden="true">#</a> 使用其他 shell</h3><h4 id="理解dash-shell" tabindex="-1"><a class="header-anchor" href="#理解dash-shell" aria-hidden="true">#</a> 理解dash shell</h4><h4 id="dash-shell脚本编程" tabindex="-1"><a class="header-anchor" href="#dash-shell脚本编程" aria-hidden="true">#</a> dash shell脚本编程</h4><h4 id="zsh-shell介绍" tabindex="-1"><a class="header-anchor" href="#zsh-shell介绍" aria-hidden="true">#</a> zsh shell介绍</h4><h4 id="zsh脚本编程" tabindex="-1"><a class="header-anchor" href="#zsh脚本编程" aria-hidden="true">#</a> zsh脚本编程</h4><h2 id="创建实用的脚本" tabindex="-1"><a class="header-anchor" href="#创建实用的脚本" aria-hidden="true">#</a> 创建实用的脚本</h2><h3 id="编写简单的脚本实用工具" tabindex="-1"><a class="header-anchor" href="#编写简单的脚本实用工具" aria-hidden="true">#</a> 编写简单的脚本实用工具</h3><h4 id="归档" tabindex="-1"><a class="header-anchor" href="#归档" aria-hidden="true">#</a> 归档</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> Files_To_Backup
/home/Christine/Project
/home/Christine/Downloads
/home/Does_not_exist
/home/Christine/Documents

<span class="token function">useradd</span> Christine

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /archive/hourly

<span class="token function">cp</span> Files_To_Backup /archive/
<span class="token function">cp</span> Files_To_Backup /archive/hourly/

<span class="token function">groupadd</span> Archivers
<span class="token function">chgrp</span> Archivers /archive

<span class="token function">usermod</span> <span class="token parameter variable">-aG</span> Archivers Christine

<span class="token function">chmod</span> <span class="token number">775</span> /archive

<span class="token function">ls</span> <span class="token parameter variable">-l</span> /archive

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/Christine/<span class="token punctuation">{</span>Project,Downloads,Documents<span class="token punctuation">}</span>
<span class="token function">mkdir</span> /home/Does_not_exist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>创建按日归档的脚本</h5><p>Daily_Archive.sh 脚本内容如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment"># Daily_Archive - 归档指定文件和目录</span>
<span class="token comment">########################################################</span>
<span class="token comment"># 收集当前日期</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d<span class="token variable">)</span></span>
<span class="token comment"># 设置存档文件名</span>
<span class="token assign-left variable">FILE</span><span class="token operator">=</span>archive-<span class="token variable">$DATE</span>.tar.gz
<span class="token comment"># 设置配置和目标文件</span>
<span class="token assign-left variable">CONFIG_FILE</span><span class="token operator">=</span>/archive/Files_To_Backup
<span class="token assign-left variable">DESTINATION</span><span class="token operator">=</span>/archive/<span class="token variable">$FILE</span>
<span class="token comment">######### Main Script #########################</span>
<span class="token comment"># 检查备份配置文件是否存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$CONFIG_FILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment"># 确保配置文件仍然存在</span>
  <span class="token comment"># 如果它存在，什么也不做，继续。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">else</span> <span class="token comment"># 如果不存在，则发出错误并退出脚本。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$CONFIG_FILE</span> 不存在.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;由于缺少配置文件，备份未完成&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token comment"># 建立所有要备份的文件的名称</span>
<span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token number">1</span>              <span class="token comment"># 从配置文件的第 1 行开始。</span>
<span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span><span class="token variable">$CONFIG_FILE</span>     <span class="token comment"># 将标准输入重定向到配置文件的名称</span>
<span class="token builtin class-name">read</span> FILE_NAME         <span class="token comment"># 读取第一条记录</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token comment"># 创建要备份的文件列表</span>
  <span class="token comment"># 确保文件或目录存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$FILE_NAME</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-d</span> <span class="token variable">$FILE_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># 如果文件存在，则将其名称添加到列表中。</span>
    <span class="token assign-left variable">FILE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$FILE_LIST</span> <span class="token variable">$FILE_NAME</span>&quot;</span>
  <span class="token keyword">else</span>
    <span class="token comment"># 如果文件不存在，发出警告</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FILE_NAME</span>, 不存在.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;显然，我不会将其包含在此存档中.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;它在网上列出 <span class="token variable">$FILE_NO</span> 配置文件的.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;继续建立存档列表...&quot;</span>
    <span class="token builtin class-name">echo</span>
  <span class="token keyword">fi</span>
  <span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$FILE_NO <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span> <span class="token comment"># 将 LineFile 编号加一。</span>
  <span class="token builtin class-name">read</span> FILE_NAME            <span class="token comment"># 阅读下一条记录</span>
<span class="token keyword">done</span>
<span class="token comment">#######################################</span>
<span class="token comment"># 备份文件并压缩存档</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始存档...&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token function">tar</span> <span class="token parameter variable">-czf</span> <span class="token variable">$DESTINATION</span> <span class="token variable">$FILE_LIST</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
<span class="token builtin class-name">echo</span> <span class="token string">&quot;存档完成&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;生成的存档文件是: <span class="token variable">$DESTINATION</span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh Daily_Archive.sh</span>

开始存档<span class="token punctuation">..</span>.

存档完成
生成的存档文件是: /archive/archive-20220922.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>创建按小时归档的脚本</h5><p>Hourly_Archive.sh 脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 设置配置文件</span>
<span class="token assign-left variable">CONFIG_FILE</span><span class="token operator">=</span>/archive/hourly/Files_To_Backup
<span class="token comment"># 设置基本存档目标位置</span>
<span class="token assign-left variable">BASEDEST</span><span class="token operator">=</span>/archive/hourly
<span class="token comment"># 收集当前日期、月份和时间</span>
<span class="token assign-left variable">YERS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y<span class="token variable">)</span></span>
<span class="token assign-left variable">MONTH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%m<span class="token variable">)</span></span>
<span class="token assign-left variable">DAY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%d<span class="token variable">)</span></span>
<span class="token assign-left variable">TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%k%M<span class="token variable">)</span></span>
<span class="token comment"># 创建存档目标目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$BASEDEST</span>/<span class="token variable">$YERS</span>/<span class="token variable">$MONTH</span>/<span class="token variable">$DAY</span>
<span class="token comment"># 构建存档目标文件名</span>
<span class="token assign-left variable">DESTINATION</span><span class="token operator">=</span><span class="token variable">$BASEDEST</span>/<span class="token variable">$YERS</span>/<span class="token variable">$MONTH</span>/<span class="token variable">$DAY</span>/archive-<span class="token variable">$TIME</span>.tar.gz
<span class="token comment">########## Main Script ####################</span>
<span class="token comment"># 检查备份配置文件是否存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$CONFIG_FILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment"># 确保配置文件仍然存在</span>
  <span class="token comment"># 如果它存在，什么也不做，继续。</span>
  <span class="token builtin class-name">echo</span>
<span class="token keyword">else</span> <span class="token comment"># 如果不存在，则发出错误并退出脚本。</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$CONFIG_FILE</span> 不存在.&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;由于缺少配置文件，备份未完成&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token comment"># 建立所有要备份的文件的名称</span>
<span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token number">1</span>              <span class="token comment"># 从配置文件的第 1 行开始。</span>
<span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span><span class="token variable">$CONFIG_FILE</span>     <span class="token comment"># 将标准输入重定向到配置文件的名称</span>
<span class="token builtin class-name">read</span> FILE_NAME         <span class="token comment"># 读取第一条记录</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token comment"># 创建要备份的文件列表</span>
  <span class="token comment"># 确保文件或目录存在</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$FILE_NAME</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-d</span> <span class="token variable">$FILE_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># 如果文件存在，则将其名称添加到列表中。</span>
    <span class="token assign-left variable">FILE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$FILE_LIST</span> <span class="token variable">$FILE_NAME</span>&quot;</span>
  <span class="token keyword">else</span>
    <span class="token comment"># 如果文件不存在，发出警告</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FILE_NAME</span>, 不存在.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;显然，我不会将其包含在此存档中.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;它在网上列出 <span class="token variable">$FILE_NO</span> 配置文件的.&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;继续建立存档列表...&quot;</span>
    <span class="token builtin class-name">echo</span>
  <span class="token keyword">fi</span>
  <span class="token assign-left variable">FILE_NO</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$FILE_NO <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span> <span class="token comment"># 将 LineFile 编号加一。</span>
  <span class="token builtin class-name">read</span> FILE_NAME            <span class="token comment"># 阅读下一条记录</span>
<span class="token keyword">done</span>
<span class="token comment">#######################################</span>
<span class="token comment"># 备份文件并压缩存档</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始存档...&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token function">tar</span> <span class="token parameter variable">-czf</span> <span class="token variable">$DESTINATION</span> <span class="token variable">$FILE_LIST</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
<span class="token builtin class-name">echo</span> <span class="token string">&quot;存档完成&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;生成的存档文件是: <span class="token variable">$DESTINATION</span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh Hourly_Archive.sh</span>

开始存档<span class="token punctuation">..</span>.

存档完成
生成的存档文件是: /archive/hourly/2022/09/22/archive-1825.tar.gz

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="管理用户账户" tabindex="-1"><a class="header-anchor" href="#管理用户账户" aria-hidden="true">#</a> 管理用户账户</h4><h5>需要的功能</h5><p>删除账户在管理账户工作中比较复杂。在删除账户时，至少需要4个步骤：</p><ul><li>(1) 获得正确的待删除用户账户名；</li><li>(2) 杀死正在系统上运行的属于该账户的进程；</li><li>(3) 确认系统中属于该账户的所有文件；</li><li>(4) 删除该用户账户。</li></ul><h5>创建脚本</h5>`,320),W={href:"http://delete-user.sh",target:"_blank",rel:"noopener noreferrer"},V=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#Delete_User - 自动执行删除帐户的 4 个步骤</span>
<span class="token comment">###############################################################</span>
<span class="token comment"># 定义函数</span>
<span class="token comment">#####################################################</span>
<span class="token keyword">function</span> <span class="token function-name function">get_answer</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">unset</span> ANSWER
  <span class="token assign-left variable">ASK_COUNT</span><span class="token operator">=</span><span class="token number">0</span>
  <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$ANSWER</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token comment">#虽然没有给出答案，但请继续询问。</span>
    <span class="token assign-left variable">ASK_COUNT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>$ASK_COUNT <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
    <span class="token keyword">case</span> <span class="token variable">$ASK_COUNT</span> <span class="token keyword">in</span> <span class="token comment">#如果用户在分配的时间内没有给出答案</span>
    <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;请回答问题&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">3</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;最后一次尝试...请回答问题&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">4</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;既然你拒绝回答这个问题...&quot;</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;退出程序.&quot;</span>
      <span class="token builtin class-name">echo</span>
      <span class="token builtin class-name">exit</span>
      <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
    <span class="token builtin class-name">echo</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$LINE2</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment">#打印 2 行</span>
      <span class="token builtin class-name">echo</span> <span class="token variable">$LINE1</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$LINE2</span><span class="token string">&quot; <span class="token entity" title="\\c">\\c</span>&quot;</span>
    <span class="token keyword">else</span> <span class="token comment">#打印 1 行</span>
      <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$LINE1</span><span class="token string">&quot; <span class="token entity" title="\\c">\\c</span>&quot;</span>
    <span class="token keyword">fi</span>
    <span class="token comment"># 在超时前允许 60 秒回答</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">60</span> ANSWER
  <span class="token keyword">done</span>
  <span class="token comment"># 做一些变量清理</span>
  <span class="token builtin class-name">unset</span> LINE1
  <span class="token builtin class-name">unset</span> LINE2
<span class="token punctuation">}</span>

<span class="token comment">#####################################################</span>
<span class="token keyword">function</span> <span class="token function-name function">process_answer</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token variable">$ANSWER</span> <span class="token keyword">in</span>
  y <span class="token operator">|</span> Y <span class="token operator">|</span> YES <span class="token operator">|</span> <span class="token function">yes</span> <span class="token operator">|</span> Yes <span class="token operator">|</span> yEs <span class="token operator">|</span> yeS <span class="token operator">|</span> YEs <span class="token operator">|</span> yES<span class="token punctuation">)</span>
    <span class="token comment"># 如果用户回答“是”，则什么也不做。</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
    <span class="token comment"># 如果用户回答“是”以外的任何内容，则退出脚本</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$EXIT_LINE1</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$EXIT_LINE2</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">exit</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  <span class="token comment"># 做一些变量清理</span>
  <span class="token builtin class-name">unset</span> EXIT_LINE1
  <span class="token builtin class-name">unset</span> EXIT_LINE2
<span class="token punctuation">}</span>

<span class="token comment">##############################################</span>
<span class="token comment">############# Main Script ####################</span>
<span class="token comment"># 获取要检查的用户帐户名称</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 1 步 - 确定要删除的用户帐户名称&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;请输入用户的用户名 &quot;</span>
<span class="token assign-left variable">LINE2</span><span class="token operator">=</span><span class="token string">&quot;您希望从系统中删除的帐户:&quot;</span>
get_answer
<span class="token assign-left variable">USER_ACCOUNT</span><span class="token operator">=</span><span class="token variable">$ANSWER</span>
<span class="token comment"># 与脚本用户仔细检查这是正确的用户帐户</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot; <span class="token variable">$USER_ACCOUNT</span> 是用户帐户 &quot;</span>
<span class="token assign-left variable">LINE2</span><span class="token operator">=</span><span class="token string">&quot;你想从系统中删除? [y/n]&quot;</span>
get_answer
<span class="token comment"># 调用过程应答函数：如果用户回答“是”以外的任何内容，则退出脚本</span>
<span class="token assign-left variable">EXIT_LINE1</span><span class="token operator">=</span><span class="token string">&quot;因为 <span class="token variable">$USER_ACCOUNT</span> 不是账户 &quot;</span>
<span class="token assign-left variable">EXIT_LINE2</span><span class="token operator">=</span><span class="token string">&quot;您要删除的，我们将离开脚本...&quot;</span>
 
<span class="token comment">################################################################</span>
<span class="token comment"># 检查 USER_ACCOUNT 是否真的是系统上的帐户</span>
<span class="token assign-left variable">USER_ACCOUNT_RECORD</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-w</span> $USER_ACCOUNT<span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token comment"># 如果没有找到账号，退出脚本</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;账户, <span class="token variable">$USER_ACCOUNT</span>, 未找到. &quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Leaving the script...&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;我找到了这个记录:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$USER_ACCOUNT_RECORD</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;这是正确的用户帐户吗? [y/n]&quot;</span>
get_answer
<span class="token comment"># 调用 process_answer 函数：如果用户回答“是”以外的任何内容，则退出脚本</span>
<span class="token assign-left variable">EXIT_LINE1</span><span class="token operator">=</span><span class="token string">&quot;因为帐户 , <span class="token variable">$USER_ACCOU</span>      NT, 未找到. &quot;</span>
<span class="token assign-left variable">EXIT_LINE2</span><span class="token operator">=</span><span class="token string">&quot;您要删除的，我们将离开脚本...&quot;</span>
process_answer
<span class="token comment">##################################################################</span>
<span class="token comment">##################################################################</span>
<span class="token comment">##################################################################</span>
<span class="token comment"># 搜索属于用户帐户的任何正在运行的进程</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 2 步 - 在属于用户帐户的系统上查找进程&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token function">ps</span> <span class="token parameter variable">-u</span> <span class="token variable">$USER_ACCOUNT</span> <span class="token operator">&gt;</span>/dev/null <span class="token comment">#用户进程是否正在运行?</span>
<span class="token keyword">case</span> <span class="token variable">$?</span> <span class="token keyword">in</span>
<span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment"># 没有为此用户帐户运行的进程</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;此帐户当前没有正在运行的进程&quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment"># 为此用户帐户运行的进程。询问脚本用户是否希望我们终止进程。</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$USER_ACCOUNT</span> 有以下进程正在运行: &quot;</span>
  <span class="token builtin class-name">echo</span>
  <span class="token function">ps</span> <span class="token parameter variable">-u</span> <span class="token variable">$USER_ACCOUNT</span>
  <span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;你想让我杀死进程吗? [y/n]&quot;</span>
  get_answer
  <span class="token keyword">case</span> <span class="token variable">$ANSWER</span> <span class="token keyword">in</span>
  y <span class="token operator">|</span> Y <span class="token operator">|</span> YES <span class="token operator">|</span> <span class="token function">yes</span> <span class="token operator">|</span> Yes <span class="token operator">|</span> yEs <span class="token operator">|</span> yeS <span class="token operator">|</span> YEs <span class="token operator">|</span> yES<span class="token punctuation">)</span> <span class="token comment"># 如果用户回答“是”，</span>
    <span class="token comment"># 杀死用户帐户进程</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;杀死进程...&quot;</span>
    <span class="token comment"># 列出在变量 COMMAND_1 中运行代码的用户进程</span>
    <span class="token assign-left variable">COMMAND_1</span><span class="token operator">=</span><span class="token string">&quot;ps -u <span class="token variable">$USER_ACCOUNT</span> --no-heading&quot;</span>
    <span class="token comment"># 创建命令以在变量 COMMAND 3 中终止进程</span>
    <span class="token assign-left variable">COMMAND_3</span><span class="token operator">=</span><span class="token string">&quot;xargs -d <span class="token entity" title="\\\\">\\\\</span>n /usr/bin/sudo /bin/kill -9&quot;</span>
    <span class="token comment"># 通过管道命令一起杀死进程</span>
    <span class="token variable">$COMMAND_1</span> <span class="token operator">|</span> <span class="token function">gawk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token variable">$COMMAND_3</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Process(es) killed.&quot;</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span> <span class="token comment"># 如果用户回答“是”以外的任何内容，请不要杀死。</span>
    <span class="token builtin class-name">echo</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;不会杀死进程&quot;</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment"># 创建用户帐户拥有的所有文件的报告</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 3 步 - 在系统上查找属于用户帐户的文件&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;创建所有文件的报告 <span class="token variable">$USER_ACCOUNT</span>.&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;建议您备份存档这些文件,&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;然后做两件事之一:&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 1) 删除文件&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; 2) 将文件的所有权更改为当前用户帐户.&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;请稍等。可能还要等一下...&quot;</span>
<span class="token assign-left variable">REPORT_DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%y%m%d<span class="token variable">)</span></span>
<span class="token assign-left variable">REPORT_FILE</span><span class="token operator">=</span><span class="token variable">$USER_ACCOUNT</span><span class="token string">&quot;_Files_&quot;</span><span class="token variable">$REPORT_DATE</span><span class="token string">&quot;.rpt&quot;</span>
<span class="token function">find</span> / <span class="token parameter variable">-user</span> <span class="token variable">$USER_ACCOUNT</span> <span class="token operator">&gt;</span><span class="token variable">$REPORT_FILE</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;报告完成.&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;报告名称: <span class="token variable">$REPORT_FILE</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;报告地点: <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment">#################################################################</span>
<span class="token comment"># 删除用户帐户</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;第 4 步 - 删除用户帐户&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token assign-left variable">LINE1</span><span class="token operator">=</span><span class="token string">&quot;删除 <span class="token variable">$USER_ACCOUNT</span>&#39;s 系统账户? [y/n]&quot;</span>
get_answer
<span class="token comment"># 调用 process_answer 函数：如果用户回答“是”以外的任何内容，则退出脚本</span>
<span class="token assign-left variable">EXIT_LINE1</span><span class="token operator">=</span><span class="token string">&quot;由于您不希望删除用户帐户,&quot;</span>
<span class="token assign-left variable">EXIT_LINE2</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$USER_ACCOUNT</span> 此时，退出脚本...&quot;</span>
process_answer
<span class="token function">userdel</span> <span class="token variable">$USER_ACCOUNT</span> <span class="token comment">#删除用户帐户</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;用户帐号, <span class="token variable">$USER_ACCOUNT</span>,已被删除&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>运行脚本</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh delete-user.sh</span>
第 <span class="token number">1</span> 步 - 确定要删除的用户帐户名称


请输入用户的用户名
您希望从系统中删除的帐户: user2

user2 是用户帐户
你想从系统中删除? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span> y

我找到了这个记录:
user2:x:1005:1005::/home/user2:/bin/bash

这是正确的用户帐户吗? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span> y

第 <span class="token number">2</span> 步 - 在属于用户帐户的系统上查找进程

此帐户当前没有正在运行的进程


第 <span class="token number">3</span> 步 - 在系统上查找属于用户帐户的文件

创建所有文件的报告 user2.

建议您备份存档这些文件,
然后做两件事之一:
 <span class="token number">1</span><span class="token punctuation">)</span> 删除文件
 <span class="token number">2</span><span class="token punctuation">)</span> 将文件的所有权更改为当前用户帐户.

请稍等。可能还要等一下<span class="token punctuation">..</span>.

报告完成.
报告名称: user2_Files_220922.rpt
报告地点: /root


第 <span class="token number">4</span> 步 - 删除用户帐户


删除 user2&#39;s 系统账户? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span> y

用户帐号, user2,已被删除

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat user2_Files_220922.rpt</span>
/home/user2
/home/user2/.bash_logout
/home/user2/.bash_profile
/home/user2/.bashrc
/home/user2/.mozilla
/home/user2/.mozilla/extensions
/home/user2/.mozilla/plugins
/home/user2/.bash_history
/var/spool/mail/user2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="监测磁盘空间" tabindex="-1"><a class="header-anchor" href="#监测磁盘空间" aria-hidden="true">#</a> 监测磁盘空间</h4><h5>需要的功能</h5><p>你要用到的第一个工具是 du 命令。该命令能够显示出单个文件和目录的磁盘使用情况。 -s 选项用来总结目录一级的整体使用状况。这在计算单个用户使用的总体磁盘空间时很方便。下面的例子是使用 du 命令总结/home目录下每个用户的$HOME目录的磁盘占用情况。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -s /home/*</span>
<span class="token number">12</span>      /home/barbara
<span class="token number">12</span>      /home/christine
<span class="token number">108</span>     /home/shell
<span class="token number">942476</span>  /home/soft
<span class="token number">12</span>      /home/tim
<span class="token number">16</span>      /home/user1
<span class="token number">16</span>      /home/user2

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -s /var/log/*</span>
<span class="token number">6308</span>    /var/log/anaconda
<span class="token number">988</span>     /var/log/ansible.log
<span class="token number">12980</span>   /var/log/audit
<span class="token number">0</span>       /var/log/boot.log
<span class="token number">12</span>      /var/log/boot.log-20220914
<span class="token number">12</span>      /var/log/boot.log-20220915
<span class="token punctuation">[</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># du -S /var/log/*</span>
<span class="token number">6308</span>    /var/log/anaconda
<span class="token number">988</span>     /var/log/ansible.log
<span class="token number">12980</span>   /var/log/audit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-S （大写的S）选项能更适合我们的目的，它为每个目录和子目录分别提供了总计信息。这样你就能快速地定位问题的根源。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Big_Users - 在各种目录中查找大磁盘空间用户</span>
<span class="token comment">###############################################################</span>
<span class="token assign-left variable">CHECK_DIRECTORIES</span><span class="token operator">=</span><span class="token string">&quot; /var/log /home&quot;</span> <span class="token comment">#要检查的目录</span>
<span class="token comment">############## Main Script #################################</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> <span class="token string">&#39;+%Y%m%d&#39;</span><span class="token variable">)</span></span>          <span class="token comment">#报告文件的日期</span>
<span class="token builtin class-name">exec</span> <span class="token operator">&gt;</span>disk_space_<span class="token variable">$DATE</span>.rpt      <span class="token comment">#制作报告文件 STDOUT</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;十大磁盘空间使用率&quot;</span> <span class="token comment">#报告标题</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;来自 <span class="token variable">$CHECK_DIRECTORIES</span> 目录&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">DIR_CHECK</span> <span class="token keyword">in</span> <span class="token variable">$CHECK_DIRECTORIES</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;The <span class="token variable">$DIR_CHECK</span> 目录:&quot;</span>
  <span class="token comment"># 在此目录中创建前十名磁盘空间用户的列表</span>
  <span class="token function">du</span> <span class="token parameter variable">-S</span> <span class="token variable">$DIR_CHECK</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span>
    <span class="token function">sort</span> <span class="token parameter variable">-rn</span> <span class="token operator">|</span>
    <span class="token function">sed</span> <span class="token string">&#39;{11,$D; =}&#39;</span> <span class="token operator">|</span>
    <span class="token function">sed</span> <span class="token string">&#39;N; s/\\n/ /&#39;</span> <span class="token operator">|</span>
    <span class="token function">gawk</span> <span class="token string">&#39;{printf $1 &quot;:&quot; &quot;\\t&quot; $2 &quot;\\t&quot; $3 &quot;\\n&quot;}&#39;</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># chmod +x disk-info.sh</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># sh disk-info.sh</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># cat disk_space_20220922.rpt</span>
十大磁盘空间使用率
来自  /var/log /home 目录

The /var/log 目录:
<span class="token number">1</span>:      <span class="token number">13196</span>   /var/log/audit
<span class="token number">2</span>:      <span class="token number">6308</span>    /var/log/anaconda
<span class="token number">3</span>:      <span class="token number">6212</span>    /var/log
<span class="token number">4</span>:      <span class="token number">2232</span>    /var/log/sa
<span class="token number">5</span>:      <span class="token number">100</span>     /var/log/tuned
<span class="token number">6</span>:      <span class="token number">24</span>      /var/log/tomcat
<span class="token number">7</span>:      <span class="token number">8</span>       /var/log/pki
<span class="token number">8</span>:      <span class="token number">0</span>       /var/log/sssd
<span class="token number">9</span>:      <span class="token number">0</span>       /var/log/samba/old
<span class="token number">10</span>:     <span class="token number">0</span>       /var/log/samba

The /home 目录:
<span class="token number">1</span>:      <span class="token number">942476</span>  /home/soft
<span class="token number">2</span>:      <span class="token number">108</span>     /home/shell
<span class="token number">3</span>:      <span class="token number">16</span>      /home/user2
<span class="token number">4</span>:      <span class="token number">16</span>      /home/user1
<span class="token number">5</span>:      <span class="token number">12</span>      /home/tim
<span class="token number">6</span>:      <span class="token number">12</span>      /home/christine
<span class="token number">7</span>:      <span class="token number">12</span>      /home/barbara
<span class="token number">8</span>:      <span class="token number">0</span>       /home/user2/.mozilla/plugins
<span class="token number">9</span>:      <span class="token number">0</span>       /home/user2/.mozilla/extensions
<span class="token number">10</span>:     <span class="token number">0</span>       /home/user2/.mozilla
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建与数据库、web及电子邮件相关的脚本" tabindex="-1"><a class="header-anchor" href="#创建与数据库、web及电子邮件相关的脚本" aria-hidden="true">#</a> 创建与数据库、Web及电子邮件相关的脚本</h3><h4 id="mysql-数据库" tabindex="-1"><a class="header-anchor" href="#mysql-数据库" aria-hidden="true">#</a> MySQL 数据库</h4><h5>向mysql服务器发送命令</h5><p>有两种实现方法：</p><ul><li>发送单个命令并退出；</li><li>发送多个命令。</li></ul><p>要发送单个命令，你必须将命令作为 mysql 命令行的一部分。对于 mysql 命令，可以用 -e 选项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">cat</span> mtest1
<span class="token comment">#!/bin/bas</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token variable">$MYSQL</span> mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;select * from employees&#39;</span>

$ ./mtest1
+-------+----------+------------+---------+
<span class="token operator">|</span> empid <span class="token operator">|</span> lastname <span class="token operator">|</span> firstname <span class="token operator">|</span> salary <span class="token operator">|</span>
+-------+----------+------------+---------+
<span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Rich <span class="token operator">|</span> <span class="token number">25000</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Barbara <span class="token operator">|</span> <span class="token number">45000</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Katie Jane <span class="token operator">|</span> <span class="token number">34500</span> <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> Blum <span class="token operator">|</span> Jessica <span class="token operator">|</span> <span class="token number">52340</span> <span class="token operator">|</span>
+-------+----------+------------+---------+

<span class="token function">cat</span> mtest2
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token variable">$MYSQL</span> mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
show tables;
select * from employees where salary &gt; 40000;
EOF</span>

$ ./mtest2
Tables_in_test
employees

empid lastname firstname salary
<span class="token number">2</span> Blum Barbara <span class="token number">45000</span>
<span class="token number">4</span> Blum Jessica <span class="token number">52340</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> mtest3
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">4</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: mtest3 empid lastname firstname salary&quot;</span>
<span class="token keyword">else</span>
    <span class="token assign-left variable">statement</span><span class="token operator">=</span><span class="token string">&quot;INSERT INTO employees VALUES (<span class="token variable">$1</span>, &#39;<span class="token variable">$2</span>&#39;, &#39;<span class="token variable">$3</span>&#39;, <span class="token variable">$4</span>)&quot;</span>
    <span class="token variable">$MYSQL</span> mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
    <span class="token variable">$statement</span>
EOF</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> Data successfully added
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> Problem adding data
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

$ ./mtest3
Usage: mtest3 empid lastname firstname salary

$ ./mtest3 <span class="token number">5</span> Blum Jasper <span class="token number">100000</span>
Data added successfully

$ ./mtest3 <span class="token number">5</span> Blum Jasper <span class="token number">100000</span>
ERROR <span class="token number">1062</span> <span class="token punctuation">(</span><span class="token number">23000</span><span class="token punctuation">)</span> at line <span class="token number">1</span>: Duplicate entry <span class="token string">&#39;5&#39;</span> <span class="token keyword">for</span> key <span class="token number">1</span>
Problem adding data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5>格式化数据</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">cat</span> mtest4
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">MYSQL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> mysql<span class="token variable">)</span></span>
<span class="token assign-left variable">dbs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$MYSQL mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-Bse</span> <span class="token string">&#39;show databases&#39;</span><span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">db</span> <span class="token keyword">in</span> <span class="token variable">$dbs</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$db</span>
<span class="token keyword">done</span>

$ ./mtest4
information_schema
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-B</code> 选项指定mysql程序工作在批处理模式运行， <code>-s</code> （ silent ）选项用于禁止输出列标题和格式化符号</p><p>可以用 -X 命令行选项来输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql mytest <span class="token parameter variable">-u</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-X</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;select * from employees where empid = 1&#39;</span>
<span class="token operator">&lt;</span>?xml <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span>?<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>resultset <span class="token assign-left variable">statement</span><span class="token operator">=</span><span class="token string">&quot;select * from employees&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>row<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;empid&quot;</span><span class="token operator">&gt;</span><span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>/field<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;lastname&quot;</span><span class="token operator">&gt;</span>Blum<span class="token operator">&lt;</span>/field<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;firstname&quot;</span><span class="token operator">&gt;</span>Rich<span class="token operator">&lt;</span>/field<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>field <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;salary&quot;</span><span class="token operator">&gt;</span><span class="token number">2500</span><span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/field<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/row<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/resultset<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function K(Z,Q){const e=p("ExternalLinkIcon"),l=p("RouterLink");return o(),r("div",null,[d(" more "),g,f,q,n("p",null,[s("GNOME Terminal（一般系统默认） "),n("a",x,[s("https://help.gnome.org/users/gnome-terminal/stable"),a(e)])]),n("p",null,[s("Konsole Terminal "),n("a",w,[s("http://konsole.kde.org"),a(e)])]),n("p",null,[s("Eterm "),n("a",y,[s("http://www.eterm.org"),a(e)])]),n("p",null,[s("Final Term "),n("a",$,[s("http://finalterm.org"),a(e)])]),n("p",null,[s("Guake "),n("a",T,[s("https://github.com/Guake/guake"),a(e)])]),n("p",null,[s("LillyTerm "),n("a",I,[s("http://lilyterm.luna.com.tw/index.html"),a(e)])]),n("p",null,[s("LXTerminal "),n("a",S,[s("http://wiki.lxde.org/en/LXTerminal"),a(e)])]),n("p",null,[s("mrxvt "),n("a",E,[s("https://code.google.com/p/mrxvt"),a(e)])]),n("p",null,[s("ROXTerm "),n("a",N,[s("http://roxterm.sourceforge.net"),a(e)])]),n("p",null,[s("Terminator "),n("a",_,[s("https://launchpad.net/terminator"),a(e)])]),n("p",null,[s("Terminology "),n("a",R,[s("http://www.enlightenment.org/p.php?p=about/terminology"),a(e)])]),n("p",null,[s("UXterm "),n("a",D,[s("http://manpages.ubuntu.com/manpages/gutsy/man1/uxterm.1.html"),a(e)])]),n("p",null,[s("Wterm "),n("a",A,[s("http://sourceforge.net/projects/wterm"),a(e)])]),n("p",null,[s("xterm "),n("a",O,[s("http://invisible-island.net/xterm"),a(e)])]),L,n("ul",null,[n("li",null,[a(l,{to:"/linux/basis/basis.html#%E7%94%A8%E6%88%B7%E5%8F%8A%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86"},{default:t(()=>[s("参考：用户及权限管理")]),_:1})]),n("li",null,[a(l,{to:"/linux/basis/basis.html#%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:t(()=>[s("参考：目录文件管理")]),_:1})]),n("li",null,[a(l,{to:"/linux/basis/basis.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86"},{default:t(()=>[s("参考：磁盘管理")]),_:1})]),F]),C,n("p",null,[s("sh "),n("a",M,[s("demo.sh"),a(e)]),s(" xiaoyu 20")]),G,P,H,n("blockquote",null,[n("p",null,[s("sh "),n("a",B,[s("test.sh"),a(e)]),s(" -ac")])]),U,n("p",null,[n("a",j,[s("在线表达式生成器"),a(e)])]),z,X,Y,n("p",null,[s("完整的 "),n("a",W,[s("delete-user.sh"),a(e)]),s(" 脚本")]),V])}const nn=c(h,[["render",K],["__file","shell.html.vue"]]);export{nn as default};
