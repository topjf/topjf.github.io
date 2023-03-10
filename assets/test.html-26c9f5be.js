import{_ as p}from"./true-image-20210601002120191-e83133f2.js";import{_ as d,X as u,Y as r,Z as v,$ as n,a2 as a,a3 as e,a1 as l,D as t,a0 as i}from"./framework-10d91a2c.js";const m="/assets/true-image-20220707221104478-ac2970b1.png",k={},h=n("p",null,"摘要生成位置，66666666",-1),b={class:"hint-container details"},g=n("summary",null,"内容目录",-1),f={class:"table-of-contents"},_=l('<h1>测试md h1</h1><h2 id="基础概-h2" tabindex="-1"><a class="header-anchor" href="#基础概-h2" aria-hidden="true">#</a> 基础概 h2</h2><h3 id="java-语言有哪些特点-h3" tabindex="-1"><a class="header-anchor" href="#java-语言有哪些特点-h3" aria-hidden="true">#</a> Java 语言有哪些特点? h3</h3><h4 id="有哪些特-h4" tabindex="-1"><a class="header-anchor" href="#有哪些特-h4" aria-hidden="true">#</a> 有哪些特 h4</h4><h5>有哪些特 h5</h5><p>引入B站视频</p><p>全 都 是 名 场 面 1</p>',7),x=l(`<hr><hr><hr><details class="hint-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;PDF url=&quot;/java/pdf/date.pdf&quot; :height=&quot;420&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),y=l('<hr><h2 id="导入文件测试" tabindex="-1"><a class="header-anchor" href="#导入文件测试" aria-hidden="true">#</a> 导入文件测试</h2><p>@include(./test-i.md{6-}) 导入第6行开始</p><p>能让你热闹热闹如</p><p>能让你热闹热闹如</p><p>能让你热闹热闹如</p><blockquote><p>哪些特哪 <em>些特</em> 哪些特哪 <strong>些特</strong> 哪些特</p><p>哪 <mark>些特</mark> 哪<code>些特哪些特哪些</code>特哪些特</p></blockquote><p>重中之重<code>走着走着</code>自作主张自增</p><ol><li>简单易学；</li><li>面向对象（<em>封装</em>，<em>继承</em>，<strong>多态</strong>）；</li><li>平台无关。</li></ol><ul><li>aaa</li><li>手动阀手动阀</li><li><ul><li>了了离开了</li></ul></li></ul><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><em>xxx</em>22</td></tr><tr><td>age</td><td><code>22</code></td></tr><tr><td>xx</td><td>xx <strong>xx</strong> xx实现<mark>平台无关</mark>性x<br><code>sdfsdf</code></td></tr><tr><td>xx</td><td>xx <strong>xx</strong> xx实现平台无关性x</td></tr></tbody></table><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token comment"># prod、 \`dev\`、test</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">shared-configs</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> application<span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">}</span>
            <span class="token key atrule">group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">}</span>
            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> jf
 * <span class="token keyword">@version</span> 1.0
 * @Description 描述
 * <span class="token keyword">@date</span> 2022/07/05 15:46
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;requestInterceptor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestInterceptor</span> <span class="token function">requestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RequestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function j(q,w){const s=t("router-link"),o=t("BiliBili"),c=t("PDF");return u(),r("div",null,[h,v(" more "),n("details",b,[g,n("nav",f,[n("ul",null,[n("li",null,[a(s,{to:"#基础概-h2"},{default:e(()=>[i("基础概 h2")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#java-语言有哪些特点-h3"},{default:e(()=>[i("Java 语言有哪些特点? h3")]),_:1})])])]),n("li",null,[a(s,{to:"#导入文件测试"},{default:e(()=>[i("导入文件测试")]),_:1})])])])]),_,a(o,{bvid:"BV1FR4y117iD"}),x,a(c,{url:"https://topjfk.oss-cn-chengdu.aliyuncs.com/docker/01.为什么要学习.pdf"}),y])}const D=d(k,[["render",j],["__file","test.html.vue"]]);export{D as default};