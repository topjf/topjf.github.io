const n=JSON.parse('{"key":"v-5b3aec46","path":"/linux/basis/commands/top.html","title":"top","lang":"zh-CN","frontmatter":{"title":"top","article":false,"timeline":false,"description":"top 实时监测进程 返回命令大全列表 ①、命令名称：top ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：实时监测进程 ⑥、语法： top [root@admin home]# top 当前时间 系统的运行时间 登录的用户数 平均负载(最近1、5、15分钟的平均负载) top - 16:11:29 up 5:17, 1 user, load average: 0.03, 0.04, 0.01 Tasks: 172 total, 1 running, 94 sleeping, 3 stopped, 0 zombie %Cpu(s): 0.2 us, 0.2 sy, 0.0 ni, 99.5 id, 0.0 wa, 0.0 hi, 0.1 si, 0.0 st KiB Mem : 8125040 total, 7215700 free, 497648 used, 411692 buff/cache KiB Swap: 0 total, 0 free, 0 used. 7312988 avail Mem PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND 386 root -51 0 0 0 0 S 0.3 0.0 0:02.21 irq/16-vmwgfx 1341 mysql 20 0 2145300 278712 15668 S 0.3 3.4 0:11.85 mysqld 2049 root 20 0 114216 4088 2888 S 0.3 0.1 0:53.76 bash 100754 root 20 0 0 0 0 I 0.3 0.0 0:02.57 kworker/1:0-eve 121612 root 20 0 0 0 0 I 0.3 0.0 0:00.08 kworker/2:1-mm_ 125813 root 20 0 162108 4536 3800 R 0.3 0.1 0:00.09 top 1 root 20 0 125556 5464 3940 S 0.0 0.1 0:06.66 systemd 2 root 20 0 0 0 0 S 0.0 0.0 0:00.02 kthreadd 3 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_gp 4 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_par_gp 6 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 kworker/0:0H-kb 8 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 mm_percpu_wq 9 root 20 0 0 0 0 S 0.0 0.0 0:00.02 ksoftirqd/0 10 root 20 0 0 0 0 I 0.0 0.0 0:10.64 rcu_sched 11 root rt 0 0 0 0 S 0.0 0.0 0:00.05 migration/0 13 root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/0 14 root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/1","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/linux/basis/commands/top.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"top"}],["meta",{"property":"og:description","content":"top 实时监测进程 返回命令大全列表 ①、命令名称：top ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：实时监测进程 ⑥、语法： top [root@admin home]# top 当前时间 系统的运行时间 登录的用户数 平均负载(最近1、5、15分钟的平均负载) top - 16:11:29 up 5:17, 1 user, load average: 0.03, 0.04, 0.01 Tasks: 172 total, 1 running, 94 sleeping, 3 stopped, 0 zombie %Cpu(s): 0.2 us, 0.2 sy, 0.0 ni, 99.5 id, 0.0 wa, 0.0 hi, 0.1 si, 0.0 st KiB Mem : 8125040 total, 7215700 free, 497648 used, 411692 buff/cache KiB Swap: 0 total, 0 free, 0 used. 7312988 avail Mem PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND 386 root -51 0 0 0 0 S 0.3 0.0 0:02.21 irq/16-vmwgfx 1341 mysql 20 0 2145300 278712 15668 S 0.3 3.4 0:11.85 mysqld 2049 root 20 0 114216 4088 2888 S 0.3 0.1 0:53.76 bash 100754 root 20 0 0 0 0 I 0.3 0.0 0:02.57 kworker/1:0-eve 121612 root 20 0 0 0 0 I 0.3 0.0 0:00.08 kworker/2:1-mm_ 125813 root 20 0 162108 4536 3800 R 0.3 0.1 0:00.09 top 1 root 20 0 125556 5464 3940 S 0.0 0.1 0:06.66 systemd 2 root 20 0 0 0 0 S 0.0 0.0 0:00.02 kthreadd 3 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_gp 4 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_par_gp 6 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 kworker/0:0H-kb 8 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 mm_percpu_wq 9 root 20 0 0 0 0 S 0.0 0.0 0:00.02 ksoftirqd/0 10 root 20 0 0 0 0 I 0.0 0.0 0:10.64 rcu_sched 11 root rt 0 0 0 0 S 0.0 0.0 0:00.05 migration/0 13 root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/0 14 root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/1"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-05T16:15:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-05T16:15:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"top\\",\\"description\\":\\"top 实时监测进程 返回命令大全列表 ①、命令名称：top ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：实时监测进程 ⑥、语法： top [root@admin home]# top 当前时间 系统的运行时间 登录的用户数 平均负载(最近1、5、15分钟的平均负载) top - 16:11:29 up 5:17, 1 user, load average: 0.03, 0.04, 0.01 Tasks: 172 total, 1 running, 94 sleeping, 3 stopped, 0 zombie %Cpu(s): 0.2 us, 0.2 sy, 0.0 ni, 99.5 id, 0.0 wa, 0.0 hi, 0.1 si, 0.0 st KiB Mem : 8125040 total, 7215700 free, 497648 used, 411692 buff/cache KiB Swap: 0 total, 0 free, 0 used. 7312988 avail Mem PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND 386 root -51 0 0 0 0 S 0.3 0.0 0:02.21 irq/16-vmwgfx 1341 mysql 20 0 2145300 278712 15668 S 0.3 3.4 0:11.85 mysqld 2049 root 20 0 114216 4088 2888 S 0.3 0.1 0:53.76 bash 100754 root 20 0 0 0 0 I 0.3 0.0 0:02.57 kworker/1:0-eve 121612 root 20 0 0 0 0 I 0.3 0.0 0:00.08 kworker/2:1-mm_ 125813 root 20 0 162108 4536 3800 R 0.3 0.1 0:00.09 top 1 root 20 0 125556 5464 3940 S 0.0 0.1 0:06.66 systemd 2 root 20 0 0 0 0 S 0.0 0.0 0:00.02 kthreadd 3 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_gp 4 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_par_gp 6 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 kworker/0:0H-kb 8 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 mm_percpu_wq 9 root 20 0 0 0 0 S 0.0 0.0 0:00.02 ksoftirqd/0 10 root 20 0 0 0 0 I 0.0 0.0 0:10.64 rcu_sched 11 root rt 0 0 0 0 S 0.0 0.0 0:00.05 migration/0 13 root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/0 14 root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/1\\"}"]]},"headers":[{"level":3,"title":"top 实时监测进程","slug":"top-实时监测进程","link":"#top-实时监测进程","children":[]}],"git":{"createdTime":1678023441000,"updatedTime":1678032905000,"contributors":[{"name":"jf","email":"iskong9@163.com","commits":3}]},"readingTime":{"minutes":3.1,"words":929},"filePathRelative":"linux/basis/commands/top.md","localizedDate":"2023年3月5日","excerpt":"<h3> top 实时监测进程</h3>\\n<ul>\\n<li><a href=\\"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86\\" target=\\"blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：top</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：实时监测进程</p>\\n<p>⑥、语法：</p>\\n<p>top</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token punctuation\\">[</span>root@admin home<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># top</span>\\n      当前时间     系统的运行时间  登录的用户数  平均负载<span class=\\"token punctuation\\">(</span>最近1、5、15分钟的平均负载<span class=\\"token punctuation\\">)</span> \\n<span class=\\"token function\\">top</span> - <span class=\\"token number\\">16</span>:11:29 up  <span class=\\"token number\\">5</span>:17,       <span class=\\"token number\\">1</span> user,     load average: <span class=\\"token number\\">0.03</span>, <span class=\\"token number\\">0.04</span>, <span class=\\"token number\\">0.01</span>\\nTasks: <span class=\\"token number\\">172</span> total,   <span class=\\"token number\\">1</span> running,  <span class=\\"token number\\">94</span> sleeping,   <span class=\\"token number\\">3</span> stopped,   <span class=\\"token number\\">0</span> zombie\\n%Cpu<span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span>:  <span class=\\"token number\\">0.2</span> us,  <span class=\\"token number\\">0.2</span> sy,  <span class=\\"token number\\">0.0</span> ni, <span class=\\"token number\\">99.5</span> id,  <span class=\\"token number\\">0.0</span> wa,  <span class=\\"token number\\">0.0</span> hi,  <span class=\\"token number\\">0.1</span> si,  <span class=\\"token number\\">0.0</span> st\\nKiB Mem <span class=\\"token builtin class-name\\">:</span>  <span class=\\"token number\\">8125040</span> total,  <span class=\\"token number\\">7215700</span> free,   <span class=\\"token number\\">497648</span> used,   <span class=\\"token number\\">411692</span> buff/cache\\nKiB Swap:        <span class=\\"token number\\">0</span> total,        <span class=\\"token number\\">0</span> free,        <span class=\\"token number\\">0</span> used.  <span class=\\"token number\\">7312988</span> avail Mem\\n\\n   PID <span class=\\"token environment constant\\">USER</span>      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND\\n   <span class=\\"token number\\">386</span> root     <span class=\\"token parameter variable\\">-51</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> S   <span class=\\"token number\\">0.3</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:02.21 irq/16-vmwgfx\\n  <span class=\\"token number\\">1341</span> mysql     <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span> <span class=\\"token number\\">2145300</span> <span class=\\"token number\\">278712</span>  <span class=\\"token number\\">15668</span> S   <span class=\\"token number\\">0.3</span>  <span class=\\"token number\\">3.4</span>   <span class=\\"token number\\">0</span>:11.85 mysqld\\n  <span class=\\"token number\\">2049</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>  <span class=\\"token number\\">114216</span>   <span class=\\"token number\\">4088</span>   <span class=\\"token number\\">2888</span> S   <span class=\\"token number\\">0.3</span>  <span class=\\"token number\\">0.1</span>   <span class=\\"token number\\">0</span>:53.76 <span class=\\"token function\\">bash</span>\\n<span class=\\"token number\\">100754</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> I   <span class=\\"token number\\">0.3</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:02.57 kworker/1:0-eve\\n<span class=\\"token number\\">121612</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> I   <span class=\\"token number\\">0.3</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.08 kworker/2:1-mm_\\n<span class=\\"token number\\">125813</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>  <span class=\\"token number\\">162108</span>   <span class=\\"token number\\">4536</span>   <span class=\\"token number\\">3800</span> R   <span class=\\"token number\\">0.3</span>  <span class=\\"token number\\">0.1</span>   <span class=\\"token number\\">0</span>:00.09 <span class=\\"token function\\">top</span>\\n     <span class=\\"token number\\">1</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>  <span class=\\"token number\\">125556</span>   <span class=\\"token number\\">5464</span>   <span class=\\"token number\\">3940</span> S   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.1</span>   <span class=\\"token number\\">0</span>:06.66 systemd\\n     <span class=\\"token number\\">2</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> S   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.02 kthreadd\\n     <span class=\\"token number\\">3</span> root       <span class=\\"token number\\">0</span> <span class=\\"token parameter variable\\">-20</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> I   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.00 rcu_gp\\n     <span class=\\"token number\\">4</span> root       <span class=\\"token number\\">0</span> <span class=\\"token parameter variable\\">-20</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> I   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.00 rcu_par_gp\\n     <span class=\\"token number\\">6</span> root       <span class=\\"token number\\">0</span> <span class=\\"token parameter variable\\">-20</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> I   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.00 kworker/0:0H-kb\\n     <span class=\\"token number\\">8</span> root       <span class=\\"token number\\">0</span> <span class=\\"token parameter variable\\">-20</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> I   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.00 mm_percpu_wq\\n     <span class=\\"token number\\">9</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> S   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.02 ksoftirqd/0\\n    <span class=\\"token number\\">10</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> I   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:10.64 rcu_sched\\n    <span class=\\"token number\\">11</span> root      rt   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> S   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.05 migration/0\\n    <span class=\\"token number\\">13</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> S   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.00 cpuhp/0\\n    <span class=\\"token number\\">14</span> root      <span class=\\"token number\\">20</span>   <span class=\\"token number\\">0</span>       <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span>      <span class=\\"token number\\">0</span> S   <span class=\\"token number\\">0.0</span>  <span class=\\"token number\\">0.0</span>   <span class=\\"token number\\">0</span>:00.00 cpuhp/1\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
