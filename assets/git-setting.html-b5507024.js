import{_ as t,X as l,Y as o,Z as c,$ as s,a0 as a,a2 as e,a1 as i,D as r}from"./framework-10d91a2c.js";const d={},p=i(`<h2 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置" aria-hidden="true">#</a> git配置</h2><p><strong>安装Git</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
<span class="token function">git</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Git 全局设置</strong></p><p>name#这里随便取</p><p>email#这里是邮箱</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;jinfang&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;topjfk@163.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看config配置消息：<code>git config --list</code></p><p>如果有多个name值时执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --replace-all user.name &quot;jinfang&quot;
git config --global --replace-all user.email &quot;topjfk@163.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建公钥-私钥</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;topjfk@163.com&quot;</span>    
<span class="token comment"># 按3次回车，创建ssh免密</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>添加私钥(可选)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-add ~/.ssh/id_rsa   
eval \`ssh-agent -s\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看公钥</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看私钥</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把 id_rsa.pub 内容复制到：gitee --&gt; 安全设置 --&gt; SSH公钥 --&gt; 添加公钥 --&gt; 把id_rsa.pub内容粘贴进来。</p>`,19),u={href:"https://gitee.com/profile/sshkeys",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"},m=i(`<p><strong>校验公钥应用是否生效</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com

<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示输入yes，以后提交代码就不用输入账号密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>k<span class="token operator">&gt;</span> <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com
Hi jin<span class="token operator">!</span> You<span class="token string">&#39;ve successfully authenticated, but GITEE.COM does not provide shell access.&#39;</span>

PS C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>k<span class="token operator">&gt;</span> <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
Hi top<span class="token operator">!</span> You<span class="token string">&#39;ve successfully authenticated, but GitHub does not provide shell access.&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制推送" tabindex="-1"><a class="header-anchor" href="#强制推送" aria-hidden="true">#</a> 强制推送</h2>`,5),g={href:"https://blog.csdn.net/qq_42476834/article/details/108263267",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull origin develop –allow-unrelated-histories
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin develop <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitee-推送" tabindex="-1"><a class="header-anchor" href="#gitee-推送" aria-hidden="true">#</a> Gitee 推送</h2><p>创建 git 仓库:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> xxx
<span class="token builtin class-name">cd</span> xxx
<span class="token function">git</span> init 
<span class="token function">touch</span> README.md
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/xxx/xxx.git
或者
<span class="token function">git</span> remote set-url origin https://自己的token@gitee.com/用户（组织）名称/仓库名称.git


<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token string">&quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已有仓库:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/xxx/xxx.git
或者
<span class="token function">git</span> remote set-url origin https://自己的token@gitee.com/用户（组织）名称/仓库名称.git

<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin <span class="token string">&quot;master&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-推送" tabindex="-1"><a class="header-anchor" href="#github-推送" aria-hidden="true">#</a> GitHub 推送</h2><p>未有仓库:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 创建本地项目</span>
<span class="token function">mkdir</span> topsjf.github.io
<span class="token builtin class-name">cd</span> topsjf.github.io
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token comment">### 提交本地代码</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;提交代码了丫&#39;</span>
<span class="token comment">### 创建分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main

<span class="token comment">### https与远程仓库关联</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/topsjf/topsjf.git
<span class="token function">git</span> remote set-url origin https://自己的token@github.com/topsjf/topsjf.git
<span class="token comment">### 使用ssh连接</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:topsjf/topsjf.git
<span class="token function">git</span> remote set-url origin git@github.com:topsjf/topsjf.git

<span class="token comment">### 推送</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>已有仓库:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:topsjf/topsjf.git
<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function h(k,f){const n=r("ExternalLinkIcon");return l(),o("div",null,[c(" more "),p,s("ul",null,[s("li",null,[s("a",u,[a("gitee ssh配置页"),e(n)])]),s("li",null,[s("a",v,[a("github ssh配置页"),e(n)])])]),m,s("p",null,[s("a",g,[a("解决 Push rejected: Push to xxxx/master was rejected"),e(n)])]),b])}const _=t(d,[["render",h],["__file","git-setting.html.vue"]]);export{_ as default};
