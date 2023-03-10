import{_ as n,X as s,Y as a,Z as e,a1 as t}from"./framework-10d91a2c.js";const l={},i=t(`<p><code>sudo sh install-docker.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token function-name function">kill_s</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment"># https://blog.csdn.net/qq_42476834/article/details/124719250</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; PID=<span class="token variable">$$</span>,PPID=<span class="token environment constant">$PPID</span>&quot;</span>
  <span class="token comment"># 2结束进程，3退出，9强制结束进程</span>
  <span class="token comment"># kill -2 $$ #|| kill -3 $$ || kill -9 $$</span>
  <span class="token function">killall</span> <span class="token parameter variable">-2</span> <span class="token function">tail</span>
<span class="token punctuation">}</span>

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 启动中 ...&quot;</span>
  systemctl start <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 重新启动中 ...&quot;</span>
  systemctl restart <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 重新启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 停止进程中 ...&quot;</span>
  systemctl stop <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 停止进程成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 开启自动启动 ...&quot;</span>
  systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
  systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 开启自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 关闭自动启动 ...&quot;</span>
  systemctl disable <span class="token function">docker</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 关闭自动启动成功！&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前状态 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>systemctl status <span class="token function">docker</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">get_v</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 当前版本&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token parameter variable">-v</span><span class="token variable">)</span></span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">waiting_input_version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>


<span class="token function-name function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 准备卸载旧版本&quot;</span>
<span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io docker-compose-plugin
<span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">install_tool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 安装依赖 ...&quot;</span>
  <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> gnupg2 software-properties-common lsb-release
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token punctuation">}</span>


<span class="token function-name function">daemon_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 设置镜像加速 ...&quot;</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;https://04eo9xup.mirror.aliyuncs.com&quot;,
    &quot;https://098cc8006500f4db0f2fc01937bbce40.mirror.swr.myhuaweicloud.com&quot;
  ]
}
EOF</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;----&gt; 写入文件[/etc/docker/daemon.json] 成功！<span class="token entity" title="\\n">\\n</span>等待重新加载本地文件...&quot;</span>
systemctl daemon-reload
<span class="token function">sleep</span> <span class="token number">5</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 重新加载完成。&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">huawei_install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; 华为源 配置&amp;安装&quot;</span>
  install_tool
<span class="token comment">##########信任Docker的GPG公钥:</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://repo.huaweicloud.com/docker-ce/linux/debian/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/docker.gpg

<span class="token comment">##########添加软件仓库:设置 稳定 存储库</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/etc/apt/keyrings/docker.gpg] https://repo.huaweicloud.com/docker-ce/linux/debian <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null

<span class="token function">apt-get</span> update
<span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt; 查看版本 ...&quot;</span>
<span class="token function">apt-cache</span> madison docker-ce
<span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>

  <span class="token builtin class-name">echo</span> <span class="token string">&quot;----&gt;  正在安装 ...&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>&quot;</span>
  waiting_input_version
  <span class="token comment"># Step 4: 开启Docker服务</span>
  <span class="token function">sleep</span> <span class="token number">8</span><span class="token punctuation">;</span>
  start
  <span class="token function">sleep</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">enable</span>
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  status
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  daemon_reload
  restart
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> jf123
  <span class="token function">docker</span> images
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token punctuation">}</span>


<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y-%m-%d,%H:%M:%S<span class="token variable">)</span></span><span class="token entity" title="\\n">\\n</span>--&gt; docker 安装&quot;</span>
  uninstall
  huawei_install
  get_v
  <span class="token function">sleep</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">#  kill_s</span>
<span class="token punctuation">}</span>


<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
  *<span class="token punctuation">)</span>
    main
 <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function p(c,o){return s(),a("div",null,[e(" more "),i])}const r=n(l,[["render",p],["__file","auto-install-script.html.vue"]]);export{r as default};
