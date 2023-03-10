import{_ as p,X as i,Y as l,Z as c,$ as n,a0 as s,a2 as e,a1 as t,D as o}from"./framework-10d91a2c.js";const u="/assets/true-image-20220821183537378-60d3875f.png",r="/assets/true-image-20220821183700208-a4e45782.png",d="/assets/true-image-20220821183425533-40e1a00b.png",k="/assets/true-deplay-10cb1c0b.png",v="/assets/true-image-20220821184250742-36cbfe80.png",m="/assets/true-image-20220821184418884-09a226fb.png",b="/assets/true-image-20220821184447307-769ba67e.png",h="/assets/true-image-20220821184611359-78c9bfca.png",g={},y=n("h1",null,"Github 自动部署WEB项目",-1),f=n("h2",{id:"创建仓库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建仓库","aria-hidden":"true"},"#"),s(" 创建仓库")],-1),_=n("p",null,"...... 忽略 ......",-1),x=n("h2",{id:"配置-token",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-token","aria-hidden":"true"},"#"),s(" 配置 TOKEN")],-1),w={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},j=t('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>配置好权限</strong></p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>在项目仓库里配置：</strong> 快捷地址，在仓库地址后面加上： <code>/settings/secrets/actions</code></p><p>nane为 ACCESS_TOKEN，值为刚才的 token</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="创建-vuepress-theme-hope-项目" tabindex="-1"><a class="header-anchor" href="#创建-vuepress-theme-hope-项目" aria-hidden="true">#</a> 创建 vuepress-theme-hope 项目</h2><p>命令行执行：npm create vuepress-theme-hope@next docs</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> demo
<span class="token builtin class-name">cd</span> demo
<span class="token function">npm</span> create vuepress-theme-hope@next docs
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 <span class="token function">npm</span>
获取依赖的最新版本<span class="token punctuation">..</span>.
生成 package.json<span class="token punctuation">..</span>.
? 设置应用名称 demo
? 设置应用版本号 <span class="token number">2.0</span>.0
? 设置应用描述 自动部署测试
? 设置协议 MIT
? 项目需要用到多语言么? No
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
生成模板<span class="token punctuation">..</span>.
? 选择你想使用的源 国内镜像源
安装依赖<span class="token punctuation">..</span>.
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应

added <span class="token number">595</span> packages <span class="token keyword">in</span> 22s
模板已成功生成<span class="token operator">!</span>
? 是否想要现在启动 Demo 查看? No
提示: 请使用 <span class="token string">&quot;npm run docs:dev&quot;</span> 命令启动开发服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑-github-workflows-deploy-docs-yml" tabindex="-1"><a class="header-anchor" href="#编辑-github-workflows-deploy-docs-yml" aria-hidden="true">#</a> 编辑 <code>.github/workflows/deploy-docs.yml</code></h2>`,10),E={href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},C=n("p",null,[n("code",null,"main"),s("分支为触发"),n("code",null,"CI/CD"),s("，完整项目分支代码")],-1),S=n("p",null,[n("code",null,"gh-pages（可自定义）"),s("分支为"),n("code",null,"GITHUB"),s("自动打包后需要存放的分支")],-1),I=n("hr",null,null,-1),O=n("li",null,[n("p",null,[n("code",null,"JamesIves/github-pages-deploy-action"),s(" 作者的")])],-1),z={href:"https://github.com/topsjf/topsjf/blob/main/.github/workflows/docs-v1.yml.old",target:"_blank",rel:"noopener noreferrer"},T=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档（v1）

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 将文档部署到 v1
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">16</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 npm
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> build 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=4096
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run docs<span class="token punctuation">:</span>build

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy 部署
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> v1
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist
          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">single-commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$={href:"https://github.com/topsjf/topsjf/blob/main/.github/workflows/docs.yml",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token comment">#tags:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
    <span class="token key atrule">paths-ignore</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> img/<span class="token important">**</span>
      <span class="token punctuation">-</span> README.md
      <span class="token punctuation">-</span> LICENSE

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token comment"># submodules: true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">16</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 Deps
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># BASE: /v2/</span>
          <span class="token comment"># HOSTNAME: https://topsjf.github.io/</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
          pnpm run build<span class="token punctuation">:</span>vite
          <span class="token punctuation">&gt;</span> docs/.vuepress/dist/.nojekyll

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># repository-name: topsjf/v2</span>
          <span class="token comment"># 这是文档部署到的分支名称</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> page<span class="token punctuation">-</span>dev
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist
          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">single-commit</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 pnpm 步骤可以替换为：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm
        <span class="token key atrule">run</span><span class="token punctuation">:</span> corepack enable <span class="token important">&amp;&amp;</span> corepack prepare pnpm@7.15.0 <span class="token punctuation">-</span><span class="token punctuation">-</span>activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li><code>peaceiris/actions-gh-pages</code> 作者的</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">22.04</span>
    <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
      <span class="token key atrule">contents</span><span class="token punctuation">:</span> write
    <span class="token key atrule">concurrency</span><span class="token punctuation">:</span>
      <span class="token key atrule">group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.workflow <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;16&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-node-</span>

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm test
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run generate

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy 部署
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">if</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref == &#39;refs/heads/main&#39; <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="保留需要的文件-没有就创建" tabindex="-1"><a class="header-anchor" href="#保留需要的文件-没有就创建" aria-hidden="true">#</a> 保留需要的文件，没有就创建</h2><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>npm模式使用 package-lock.json</strong></p><p><strong>pnpm模式使用 pnpm-lock.yaml，也可以不用这个文件，上面的示例2中（ <code>pnpm/action-setup@v2</code> ）会自动生成该文件</strong></p>',11),D={href:"https://docs.npmjs.com/cli/v7/configuring-npm/npm-shrinkwrap-json",target:"_blank",rel:"noopener noreferrer"},B=t('<p><code>npm-shrinkwrap.json</code> 级别大于 <code>package-lock.json</code> 大于 <code>yarn.lock</code></p><h2 id="配置pages" tabindex="-1"><a class="header-anchor" href="#配置pages" aria-hidden="true">#</a> 配置Pages</h2><p>/settings/pages</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="提交项目后-查看触发效果" tabindex="-1"><a class="header-anchor" href="#提交项目后-查看触发效果" aria-hidden="true">#</a> 提交项目后，查看触发效果</h2><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查看具体执行过程</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="根据page配置-自动部署代码" tabindex="-1"><a class="header-anchor" href="#根据page配置-自动部署代码" aria-hidden="true">#</a> 根据page配置，自动部署代码</h2><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h2>',11),G={href:"https://xn--5mq618a6na897e2um.github.io/",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const a=o("ExternalLinkIcon");return i(),l("div",null,[c(" more "),y,f,_,x,n("p",null,[n("a",w,[s("创建token地址"),e(a)]),s("，记得保存好token，等一下需要用到")]),j,n("ul",null,[n("li",null,[n("p",null,[n("a",E,[s("https://github.com/peaceiris/actions-gh-pages"),e(a)])])]),n("li",null,[n("p",null,[n("a",N,[s("https://github.com/JamesIves/github-pages-deploy-action"),e(a)])])])]),C,S,I,n("ul",null,[O,n("li",null,[n("ul",null,[n("li",null,[s("示例1：npm模式（"),n("a",z,[s("docs-v1.yml"),e(a)]),s("）")])])])]),T,n("ul",null,[n("li",null,[n("ul",null,[n("li",null,[s("示例2：pnpm模式（"),n("a",$,[s("docs.yml"),e(a)]),s("）")])])])]),A,n("p",null,[n("a",D,[s("docs.npmjs.com/cli/v7/configuring-npm/npm-shrinkwrap-json"),e(a)])]),B,n("p",null,[n("a",G,[s("https://自己的仓库.github.io/"),e(a)])])])}const q=p(g,[["render",J],["__file","deploy-gh-pages.html.vue"]]);export{q as default};
