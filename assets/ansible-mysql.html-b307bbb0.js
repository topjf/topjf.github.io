import{_ as l,X as i,Y as t,Z as c,$ as n,a0 as s,a2 as p,a1 as a,D as o}from"./framework-10d91a2c.js";const u={},d=a(`<h1>ansible安装mysql</h1><h2 id="设置主机清单-vim-etc-ansible-hosts" tabindex="-1"><a class="header-anchor" href="#设置主机清单-vim-etc-ansible-hosts" aria-hidden="true">#</a> 设置主机清单 <code>vim /etc/ansible/hosts</code></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysql]
192.168.0.[8:10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-在roles目录下生成对应的目录结构" tabindex="-1"><a class="header-anchor" href="#_1-在roles目录下生成对应的目录结构" aria-hidden="true">#</a> ① 在<code>roles</code>目录下生成对应的目录结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible-galaxy role init mysql</span>
- Role mysql was created successfully

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ls</span>
mysql  mysql.yml

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># cat mysql.yml</span>
---
- hosts: mysql
  remote_user: root
  roles:
    - mysql

<span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># tree dockekr/</span>
mysql/
├── files
│   ├── mysql-17_linux-x64_bin.rpm
│   └── uni_mysql.sh
├── tasks
│   ├── install.yml
│   └── main.yml
└── vars
    └── main.yml

<span class="token number">8</span> directories, <span class="token number">8</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-定义-tasks-任务文件" tabindex="-1"><a class="header-anchor" href="#_2-定义-tasks-任务文件" aria-hidden="true">#</a> ② 定义 tasks 任务文件</h3>`,6),r={href:"http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>vim /etc/ansible/roles/mysql/tasks/main.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> install.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>install.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> uni old mysql
  <span class="token key atrule">script</span><span class="token punctuation">:</span> ../files/uni_mysql.sh
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy package to mysql17
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=../files/mysql<span class="token punctuation">-</span>17_linux<span class="token punctuation">-</span>x64_bin.rpm dest=/opt mode=0775
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> delete line
  <span class="token key atrule">lineinfile</span><span class="token punctuation">:</span> dest=/etc/profile regexp=&#39;(.<span class="token important">*)JAVA_HOME(.*)&#39;</span> state=absent  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install mysql17
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> rpm <span class="token punctuation">-</span>ivh /opt/mysql<span class="token punctuation">-</span>17_linux<span class="token punctuation">-</span>x64_bin.rpm
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> set mysql17 env
  <span class="token key atrule">lineinfile</span><span class="token punctuation">:</span> dest=/etc/profile line=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span>item.value<span class="token punctuation">}</span><span class="token punctuation">}</span>&quot; state=present
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;export JAVA_HOME=/usr/java/mysql-17.0.4/&quot;</span><span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;export PATH=$JAVA_HOME/bin:$PATH&quot;</span><span class="token punctuation">}</span>
  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> source profile
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> source /etc/profile
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> remove mysql package
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf /opt/mysql<span class="token punctuation">-</span>17_linux<span class="token punctuation">-</span>x64_bin.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-编写安装-shell-脚本" tabindex="-1"><a class="header-anchor" href="#_3-编写安装-shell-脚本" aria-hidden="true">#</a> ③ 编写安装 shell 脚本</h3><p>vim files/uni_mysql.sh</p><p><code>rpm -qa | grep java</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 卸载</span>
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-定义-mysql-剧本文件" tabindex="-1"><a class="header-anchor" href="#_3-定义-mysql-剧本文件" aria-hidden="true">#</a> ③ 定义 mysql 剧本文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># vim ./mysql.yml</span>
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> mysql
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-启动剧本" tabindex="-1"><a class="header-anchor" href="#_4-启动剧本" aria-hidden="true">#</a> ④ 启动剧本</h3><p>剧本定义完成以后，我们就可以来启动服务了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook mysql.yml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>校验：ansible mysql -m shell -a &#39;java -version&#39;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin roles<span class="token punctuation">]</span><span class="token comment"># ansible mysql -m shell -a &#39;java -version&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function v(k,b){const e=o("ExternalLinkIcon");return i(),t("div",null,[c(" more "),d,n("p",null,[s("wget "),n("a",r,[s("http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm"),p(e)])]),m])}const y=l(u,[["render",v],["__file","ansible-mysql.html.vue"]]);export{y as default};
