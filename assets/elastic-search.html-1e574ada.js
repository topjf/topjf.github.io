import{_ as i,X as l,Y as u,Z as c,$ as n,a0 as s,a2 as a,a3 as r,a1 as e,D as o}from"./framework-10d91a2c.js";const d="/assets/true-image-20210604131952296-11fdaa89.png",k="/assets/true-image-20210604132012980-e5e1feb9.png",v="/assets/true-image-20210908125845385-033bf4e3.png",m="/assets/true-image-20210908134637817-c0914e91.png",q="/assets/true-image-20210908140454119-cedcc55c.png",b="/assets/true-image-20210908140642855-b873a36f.png",g="/assets/true-image-20210908140522448-6e782efb.png",y="/assets/true-image-20210908141401665-62fc79c2.png",h="/assets/true-image-20210908144225635-924815c0.png",_="/assets/true-image-20210908144344775-7fab5aaf.png",f="/assets/true-image-20210908144359490-f1e7dcd2.png",x="/assets/true-image-20210908145026804-51551790.png",j="/assets/true-image-20210908145037058-84d99cea.png",w="/assets/true-image-20210908145215817-91563c1f.png",T="/assets/true-image-20210908152409088-fc9cb420.png",S="/assets/true-image-20210908153043492-fd9c498e.png",E="/assets/true-image-20210908155510529-46065d03.png",B="/assets/true-image-20210908215920528-3f961357.png",A="/assets/true-image-20210908231400256-348a70f6.png",z="/assets/true-image-20210908173825031-104b9835.png",R="/assets/true-image-20210908173957845-fd26978e.png",I="/assets/true-image-20210909151150060-1b96817a.png",P={},G=e('<h1>ElasticSearch</h1><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_1-elasticsearch概念" tabindex="-1"><a class="header-anchor" href="#_1-elasticsearch概念" aria-hidden="true">#</a> 1. ElasticSearch概念</h2><h3 id="_1-1-es介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-es介绍" aria-hidden="true">#</a> 1.1 ES介绍</h3><p>应用程序搜索 网站搜索 企业搜索 日志处理和分析</p><p>基础设施指标和容器监测 应用程序性能监测</p><p>地理空间数据分析和可视化 安全分析 业务分析</p>',8),N={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://es.xiaoleilu.com/index.html%E3%80%81http://doc.codingdict.com/elasticsearch/0/",target:"_blank",rel:"noopener noreferrer"},U=e(`<h3 id="_1-2-基本概念" tabindex="-1"><a class="header-anchor" href="#_1-2-基本概念" aria-hidden="true">#</a> 1.2 基本概念</h3><p>Elasticsearch也是基于Lucene的全文检索库，本质也是存储数据，很多概念与MySQL类似的。</p><p>对比关系：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>索引（indices）----------------------Databases 数据库

  类型（type）--------------------------Table 数据表

     文档（Document）----------------------Row 行

     字段（Field）-------------------------Columns 列 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index:索引</p><p>type: 数据类型</p><p>document</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>保存 在 某 个 索引 (Index) 下 ， 某 种 类 型 Type) 的 一 个 数据 (Document) ， 文 档 是 JSON 格
式 的 ，Document 就 像 是 MySQL 中 的 某 个 Table 里 面 的 内 容 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要注意的是：Elasticsearch本身就是分布式的，因此即便你只有一个节点，Elasticsearch默认也会对你的数据进行分片和副本操作， 当你向集群添加新数据时，数据也会在新加入的节点中进行平衡。</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2 安装</h2>`,10),C={href:"https://www.elastic.co/cn/downloads/elasticsearch#ga-release",target:"_blank",rel:"noopener noreferrer"},L=n("blockquote",null,[n("p",null,"docker pull elasticsearch:7.14.0 存储和检索数据"),n("p",null,"docker pull kibana:7.14.0 可视化数据")],-1),H={href:"https://blog.csdn.net/qq_42476834/article/details/112675953",target:"_blank",rel:"noopener noreferrer"},M=e('<h3 id="查看-elasticsearch" tabindex="-1"><a class="header-anchor" href="#查看-elasticsearch" aria-hidden="true">#</a> 查看 elasticsearch</h3><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="查看-kibana" tabindex="-1"><a class="header-anchor" href="#查看-kibana" aria-hidden="true">#</a> 查看 kibana</h3><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-索引操作-indices" tabindex="-1"><a class="header-anchor" href="#_3-索引操作-indices" aria-hidden="true">#</a> 3 索引操作（indices）</h2><h3 id="_3-1-查询索引" tabindex="-1"><a class="header-anchor" href="#_3-1-查询索引" aria-hidden="true">#</a> 3.1 查询索引</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/_cat/indices?v 有哪些索引库
/_cat/nodes 查看节点信息
/_cat/health 查看es健康状态
/_cat/master 查看主节点
/_cat/indices 查看所有索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>es 中会默认存在一个名为.kibana和.kibana_task_manager的索引</p><p>表头的含义</p><table><thead><tr><th style="text-align:center;">字段名</th><th style="text-align:left;">含义说明</th></tr></thead><tbody><tr><td style="text-align:center;">health</td><td style="text-align:left;">green(集群完整) yellow(单点正常、集群不完整) red(单点不正常)</td></tr><tr><td style="text-align:center;">status</td><td style="text-align:left;">是否能使用</td></tr><tr><td style="text-align:center;">index</td><td style="text-align:left;">索引名</td></tr><tr><td style="text-align:center;">uuid</td><td style="text-align:left;">索引统一编号</td></tr><tr><td style="text-align:center;">pri</td><td style="text-align:left;">主节点几个</td></tr><tr><td style="text-align:center;">rep</td><td style="text-align:left;">从节点几个</td></tr><tr><td style="text-align:center;">docs.count</td><td style="text-align:left;">文档数</td></tr><tr><td style="text-align:center;">docs.deleted</td><td style="text-align:left;">文档被删了多少</td></tr><tr><td style="text-align:center;">store.size</td><td style="text-align:left;">整体占空间大小</td></tr><tr><td style="text-align:center;">pri.store.size</td><td style="text-align:left;">主节点占</td></tr></tbody></table><h3 id="_3-2-创建索引" tabindex="-1"><a class="header-anchor" href="#_3-2-创建索引" aria-hidden="true">#</a> 3.2 创建索引</h3><p>保存: PUT /index/type/标识id</p><p>如: PUT /customer/demo/1</p><p><strong>PUT 和 POST都可以.</strong></p><p><em>POST</em> 新增。如果不指定id，会自动生成id。指定id就会修改这个数据，并新增版本号</p><p><em>PUT</em> 可以新增&amp;修改。PUT必须指定id,由于PUT需要指定id，我们一般都用来做修改操作，不指定id会报错 。</p><h4 id="响应结果" tabindex="-1"><a class="header-anchor" href="#响应结果" aria-hidden="true">#</a> 响应结果 <a name="响应结果"></a></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;_index&quot;: &quot;customer&quot;, #索引
    &quot;_type&quot;: &quot;demo&quot;, #类型
    &quot;_id&quot;: &quot;1&quot;, #id
    &quot;_version&quot;: 5, #版本
    &quot;result&quot;: &quot;updated&quot;, #状态
    &quot;_shards&quot;: {
        &quot;total&quot;: 2,
        &quot;successful&quot;: 1,
        &quot;failed&quot;: 0
    },
    &quot;_seq_no&quot;: 5, #并发控制字段，每次更新就会+1，用来做乐观锁
    &quot;_primary_term&quot;: 1 #同上,主分片重新分配，如重启，就会变化
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> PUT</h4><figure><img src="`+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不指定ID报错</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h4><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-3-get-查询文档-乐观锁" tabindex="-1"><a class="header-anchor" href="#_3-3-get-查询文档-乐观锁" aria-hidden="true">#</a> 3.3 get 查询文档&amp;乐观锁</h3><p><a href="#%E5%93%8D%E5%BA%94%E7%BB%93%E6%9E%9C">响应结果</a></p>',27),F={href:"http://192.168.101.5:9200/customer/demo/1",target:"_blank",rel:"noopener noreferrer"},Q=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;customer&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;found&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小鱼666&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>更新携带 ?if_seq_no=14&amp;if_primary_term=1</p></blockquote><h4 id="并发修改测试-多个人同时修改一个数据" tabindex="-1"><a class="header-anchor" href="#并发修改测试-多个人同时修改一个数据" aria-hidden="true">#</a> 并发修改测试:多个人同时修改一个数据</h4><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>读取</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果想要修改成功,就需要获取最新的_seq_no</p><h3 id="_3-4-post-更新文档" tabindex="-1"><a class="header-anchor" href="#_3-4-post-更新文档" aria-hidden="true">#</a> 3.4 post 更新文档</h3><p>更新1</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>读取</p><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>更新2</p><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-5-删除文档-索引" tabindex="-1"><a class="header-anchor" href="#_3-5-删除文档-索引" aria-hidden="true">#</a> 3.5 删除文档&amp;索引</h3>',16),J={href:"http://192.168.101.5:9200/customer/demo/id/",target:"_blank",rel:"noopener noreferrer"},V=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;customer&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8v8NxHsBlSgdobgg7YRN&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),W={href:"http://192.168.101.5:9200/customer/",target:"_blank",rel:"noopener noreferrer"},K=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Y={href:"http://192.168.101.5:9200/_cat/indices",target:"_blank",rel:"noopener noreferrer"},X=e(`<h3 id="_3-6-post-bulk批量导入-api" tabindex="-1"><a class="header-anchor" href="#_3-6-post-bulk批量导入-api" aria-hidden="true">#</a> 3.6 post bulk批量导入 API</h3><h4 id="使用postman请求" tabindex="-1"><a class="header-anchor" href="#使用postman请求" aria-hidden="true">#</a> 使用postman请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;index&quot;:{&quot;_id&quot;:&quot;1&quot;}}
{&quot;name&quot;: &quot;小霞&quot;}
{&quot;index&quot;:{&quot;_id&quot;: &quot;2&quot;}}
{&quot;name&quot;: &quot;小花&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Z={href:"http://192.168.101.5:9200/customer/demo/_bulk",target:"_blank",rel:"noopener noreferrer"},$=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;customer&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;customer&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),nn={href:"http://192.168.101.5:9200/customer/demo/1",target:"_blank",rel:"noopener noreferrer"},sn=e('<h4 id="可视化操作" tabindex="-1"><a class="header-anchor" href="#可视化操作" aria-hidden="true">#</a> 可视化操作</h4><figure><img src="'+T+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>POST /_bulk</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;create&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My first blog post&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My second blog post&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;website&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My updated blog post&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="样本测试数据" tabindex="-1"><a class="header-anchor" href="#样本测试数据" aria-hidden="true">#</a> 样本测试数据</h4>',6),an={href:"https://download.elastic.co/demos/kibana/gettingstarted/accounts.zip",target:"_blank",rel:"noopener noreferrer"},tn=e('<figure><img src="'+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-映射配置-mapping" tabindex="-1"><a class="header-anchor" href="#_4-映射配置-mapping" aria-hidden="true">#</a> 4 映射配置（_mapping）</h2><p>索引有了，接下来肯定是添加数据。但是，在添加数据之前必须定义映射。</p><p>什么是映射？</p><p>映射是定义文档的过程，文档包含哪些字段，这些字段是否保存，是否索引，是否分词等</p><p>只有配置清楚，Elasticsearch才会帮我们进行索引库的创建（不一定）</p><h3 id="_4-1-put-创建映射字段" tabindex="-1"><a class="header-anchor" href="#_4-1-put-创建映射字段" aria-hidden="true">#</a> 4.1 PUT 创建映射字段</h3><p>PUT /索引库名/_mapping/类型名称</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;字段名&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;类型&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分词器&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型名称：就是前面将的type的概念，类似于数据库中的不同表</p><p>字段名：类似于列名，properties下可以指定许多字段。</p><p>每个字段可以有很多属性。例如：</p><ul><li>type：类型，可以是text、long、short、date、integer、object等</li><li>index：是否索引，默认为true</li><li>store：是否存储，默认为false</li><li>analyzer：分词器，这里使用ik分词器：<code>ik_max_word</code>或者<code>ik_smart</code></li></ul><p><strong>示例</strong></p><p>发起请求：</p><p><strong>示例1</strong></p><p>PUT atguigu/_mapping/goods</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例2</strong></p><p>PUT /my_index</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;integer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应结果：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-2-get-查看映射关系" tabindex="-1"><a class="header-anchor" href="#_4-2-get-查看映射关系" aria-hidden="true">#</a> 4.2 GET 查看映射关系</h3><p>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /索引库名/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /atguigu/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>响应：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;atguigu&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;goods&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;images&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;analyzer&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type：字段类型。String（text keyword） Numeric（long integer float double） date boolean</p><p>index：是否创建索引</p><p>analyzer：分词器（ik_max_word）</p><h3 id="_4-3-put-添加索引字段" tabindex="-1"><a class="header-anchor" href="#_4-3-put-添加索引字段" aria-hidden="true">#</a> 4.3 PUT 添加索引字段</h3><p>PUT /my_index/_mapping</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;properties&quot;: {
    &quot;employee-id&quot;:{ #字段
      &quot;type&quot;:&quot;keyword&quot;,  #类型
      &quot;index&quot;:false   #可检索
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于已经存在的映射字段，我们不能更新。更新必须创建新的索引进行数据迁移</p><h3 id="_4-4-映射-put-数据迁移" tabindex="-1"><a class="header-anchor" href="#_4-4-映射-put-数据迁移" aria-hidden="true">#</a> 4.4 映射 PUT 数据迁移</h3><p>_type=&quot;account&quot; 变为&gt;_type: &quot;_doc&quot;,，取消了type，6.0之后取消了type</p><p>GET /bank/_mapping</p><p>PUT /newbank</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;employer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;firstname&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;lastname&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GET /newbank</p><p>POST _reindex</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token string">&quot;bank&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;account&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token string">&quot;newbank&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>GET /newbank/_search #_type=&quot;account&quot; 变为&gt; _type: &quot;_doc&quot;,，取消了type，6.0之后取消了type</p></blockquote><h2 id="_5-新增文档-document" tabindex="-1"><a class="header-anchor" href="#_5-新增文档-document" aria-hidden="true">#</a> 5 新增文档（document）</h2><p>有了索引、类型和映射，就可以对文档做增删改查操作了。</p><h3 id="_5-1-基本玩法" tabindex="-1"><a class="header-anchor" href="#_5-1-基本玩法" aria-hidden="true">#</a> 5.1 基本玩法</h3><p>如果我们想要自己新增的时候指定id，可以这么做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /索引库名/类型/id值
{
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>演示：</p><p>查询得到两条数据：小米手机的id是我们指定的id</p><ul><li><code>_source</code>：源文档信息，所有的数据都在里面。</li><li><code>_id</code>：这条文档的唯一标示，与文档自己的id字段没有关联</li></ul><h3 id="_5-2-智能判断" tabindex="-1"><a class="header-anchor" href="#_5-2-智能判断" aria-hidden="true">#</a> 5.2 智能判断</h3><p>事实上Elasticsearch非常智能，你不需要给索引库设置任何mapping映射，它也可以根据你输入的数据来判断类型，动态添加数据映射。</p><p>测试一下：</p><p>POST /atguigu/goods/2</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://image.jd.com/12479122.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">2899</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stock&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;saleable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;attr&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们额外添加了stock库存，saleable是否上架，attr其他属性几个字段。</p><p>来看结果：<code>GET /atguigu/_search</code></p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;goods&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;http://image.jd.com/12479122.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">4288</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;goods&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;http://image.jd.com/12479122.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">2899</span><span class="token punctuation">,</span>
          <span class="token property">&quot;stock&quot;</span> <span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token property">&quot;saleable&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token property">&quot;attr&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;brand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再看下索引库的映射关系: <code>GET /atguigu/_mapping</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;atguigu&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;goods&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;attr&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;properties&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;brand&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;fields&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;keyword&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;saleable&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;stock&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;analyzer&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stock，saleable，attr都被成功映射了。</p><p>如果是字符串类型的数据，会添加两种类型：text + keyword。如上例中的category 和 brand</p><h2 id="_6-删除数据" tabindex="-1"><a class="header-anchor" href="#_6-删除数据" aria-hidden="true">#</a> 6 删除数据</h2><p>删除使用DELETE请求，同样，需要根据id进行删除：</p><p><strong>语法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /索引库名/类型名/id值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DELETE /atguigu/goods/3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>结果：</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;goods&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-分词" tabindex="-1"><a class="header-anchor" href="#_7-分词" aria-hidden="true">#</a> 7 分词</h2><h3 id="_7-1-默认分词器-对中文不友好" tabindex="-1"><a class="header-anchor" href="#_7-1-默认分词器-对中文不友好" aria-hidden="true">#</a> 7.1 默认分词器，对中文不友好</h3><p>POST _analyze</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: &quot;Bucket aggregations don’t calculate metrics over fields like&quot;
}

结果:

 {
      &quot;tokens&quot; : [
        {
          &quot;token&quot; : &quot;bucket&quot;,
          &quot;start_offset&quot; : 0,
          &quot;end_offset&quot; : 6,
          &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
          &quot;position&quot; : 0
        },
        {
          &quot;token&quot; : &quot;aggregations&quot;,
          &quot;start_offset&quot; : 7,
          &quot;end_offset&quot; : 19,
          &quot;type&quot; : &quot;&lt;ALPHANUM&gt;&quot;,
          &quot;position&quot; : 1
        },
--------------------
POST _analyze

{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: &quot;我爱你java&quot;
}

结果：

    {
      &quot;tokens&quot; : [
        {
          &quot;token&quot; : &quot;学&quot;,
          &quot;start_offset&quot; : 0,
          &quot;end_offset&quot; : 1,
          &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
          &quot;position&quot; : 0
        },
        {
          &quot;token&quot; : &quot;校&quot;,
          &quot;start_offset&quot; : 1,
          &quot;end_offset&quot; : 2,
          &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
          &quot;position&quot; : 1
        },
        {
          &quot;token&quot; : &quot;我&quot;,
          &quot;start_offset&quot; : 2,
          &quot;end_offset&quot; : 3,
          &quot;type&quot; : &quot;&lt;IDEOGRAPHIC&gt;&quot;,
          &quot;position&quot; : 2
        },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-ik-分词器" tabindex="-1"><a class="header-anchor" href="#_7-2-ik-分词器" aria-hidden="true">#</a> 7.2 ik 分词器</h3>`,81),en={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},on=e(`<p>解压到es：plugins</p><p>重启es</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 分词失败
POST _analyze
{
  &quot;analyzer&quot;: &quot;standard&quot;,
  &quot;text&quot;: &quot;我爱你中国&quot;
}

# 分词ok
POST _analyze
{
  &quot;analyzer&quot;: &quot;ik_smart&quot;,
  &quot;text&quot;: &quot;我爱你中国&quot;
}

# 多词组合【如下图】
POST _analyze
{
  &quot;analyzer&quot;: &quot;ik_max_word&quot;,
  &quot;text&quot;: &quot;我爱你中国&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_7-3-自定义分词" tabindex="-1"><a class="header-anchor" href="#_7-3-自定义分词" aria-hidden="true">#</a> 7.3 自定义分词</h3><p><strong>nginx 配置</strong></p>',6),pn={href:"http://localhost:50005/es/fenci.txt",target:"_blank",rel:"noopener noreferrer"},ln=e(`<p>ik/config/IKAnalyzer.cfg.xml:</p><p><code>&lt;entry key=&quot;remote_ext_dict&quot;&gt;http://localhost:50005/es/fenci.txt&lt;/entry&gt;</code></p><p>重启es</p><h2 id="_8-查询" tabindex="-1"><a class="header-anchor" href="#_8-查询" aria-hidden="true">#</a> 8 查询</h2><h3 id="_8-1-2种查询" tabindex="-1"><a class="header-anchor" href="#_8-1-2种查询" aria-hidden="true">#</a> 8.1 2种查询 <a name="2种查询"></a></h3><table><thead><tr><th>took</th><th>Elasticsearch执行搜索的时间(毫秒)</th></tr></thead><tbody><tr><td>time_out</td><td>告诉我们搜索是否超时</td></tr><tr><td>_shards</td><td>告诉我们多少个分片被搜索了，以及统计了成功/失败的搜索分片</td></tr><tr><td>hits</td><td>搜索结果</td></tr><tr><td>hits.total</td><td>搜索结果</td></tr><tr><td>hits.hits</td><td>实际的搜索结果数组(默认为前10的文档)</td></tr><tr><td>sort</td><td>结果的排序key (键) (没有则按score排序)</td></tr><tr><td>score和max_score</td><td>相关性得分和最高分</td></tr></tbody></table><p>GET bank/_search?q=*&amp;sort=account_number:asc</p><p>GET bank/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询所有：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /{index}/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据id查询：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /{index}/{type}/{id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了上述简单查询之外。elasticsearch作为搜索引擎，最复杂最强大的功能就是搜索查询功能。包括：匹配查询、词条查询、模糊查询、组合查询、范围查询、高亮、排序、分页等等查询功能。</p><p>基本查询语法如下：</p><p>GET /索引库名/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;查询类型&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;查询条件&quot;</span><span class="token operator">:</span><span class="token string">&quot;查询条件值&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的query代表一个查询对象，里面可以有不同的查询属性</p><ul><li>查询类型： <ul><li>例如：<code>match_all</code>， <code>match</code>，<code>term</code> ， <code>range</code> 等等</li></ul></li><li>查询条件：查询条件会根据类型的不同，写法也有差异，后面详细讲解</li></ul><p>查询结果：</p><ul><li>took：查询花费时间，单位是毫秒</li><li>time_out：是否超时</li><li>_shards：分片信息</li><li>hits：搜索结果总览对象 <ul><li>total：搜索到的总条数</li><li>max_score：所有结果中文档得分的最高分</li><li>hits：搜索结果的文档对象数组，每个元素是一条搜索到的文档信息 <ul><li>_index：索引库</li><li>_type：文档类型</li><li>_id：文档id</li><li>_score：文档得分</li><li>_source：文档的源数据</li></ul></li></ul></li></ul><h3 id="_8-2-数据准备" tabindex="-1"><a class="header-anchor" href="#_8-2-数据准备" aria-hidden="true">#</a> 8.2 数据准备</h3><p>POST /atguigu/goods/_bulk</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;index&quot;:{&quot;_id&quot;:1}}
{ &quot;title&quot;:&quot;小米手机&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:1999, &quot;stock&quot;: 200, &quot;attr&quot;: { &quot;category&quot;: &quot;手机&quot;, &quot;brand&quot;: &quot;小米&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:2}}
{&quot;title&quot;:&quot;超米手机&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:2999, &quot;stock&quot;: 300, &quot;attr&quot;: { &quot;category&quot;: &quot;手机&quot;, &quot;brand&quot;: &quot;小米&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:3}}
{ &quot;title&quot;:&quot;小米电视&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:3999, &quot;stock&quot;: 400, &quot;attr&quot;: { &quot;category&quot;: &quot;电视&quot;, &quot;brand&quot;: &quot;小米&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:4}}
{ &quot;title&quot;:&quot;小米笔记本&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:4999, &quot;stock&quot;: 200, &quot;attr&quot;: { &quot;category&quot;: &quot;笔记本&quot;, &quot;brand&quot;: &quot;小米&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:5}}
{ &quot;title&quot;:&quot;华为手机&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:3999, &quot;stock&quot;: 400, &quot;attr&quot;: { &quot;category&quot;: &quot;手机&quot;, &quot;brand&quot;: &quot;华为&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:6}}
{ &quot;title&quot;:&quot;华为笔记本&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:5999, &quot;stock&quot;: 200, &quot;attr&quot;: { &quot;category&quot;: &quot;笔记本&quot;, &quot;brand&quot;: &quot;华为&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:7}}
{ &quot;title&quot;:&quot;荣耀手机&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:2999, &quot;stock&quot;: 300, &quot;attr&quot;: { &quot;category&quot;: &quot;手机&quot;, &quot;brand&quot;: &quot;华为&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:8}}
{ &quot;title&quot;:&quot;oppo手机&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:2799, &quot;stock&quot;: 400, &quot;attr&quot;: { &quot;category&quot;: &quot;手机&quot;, &quot;brand&quot;: &quot;oppo&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:9}}
{ &quot;title&quot;:&quot;vivo手机&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:2699, &quot;stock&quot;: 300, &quot;attr&quot;: { &quot;category&quot;: &quot;手机&quot;, &quot;brand&quot;: &quot;vivo&quot; } }
{&quot;index&quot;:{&quot;_id&quot;:10}}
{ &quot;title&quot;:&quot;华为nova手机&quot;, &quot;images&quot;:&quot;http://image.jd.com/12479122.jpg&quot;, &quot;price&quot;:2999, &quot;stock&quot;: 300, &quot;attr&quot;: { &quot;category&quot;: &quot;手机&quot;, &quot;brand&quot;: &quot;华为&quot; } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对非文本数据检索用 trem，对文本|全文检索就用 match</p><h3 id="_8-3-匹配查询-match-match-all" tabindex="-1"><a class="header-anchor" href="#_8-3-匹配查询-match-match-all" aria-hidden="true">#</a> 8.3 匹配查询（match &amp;&amp; match_all）</h3><h4 id="_8-3-1-查询所有-match-all" tabindex="-1"><a class="header-anchor" href="#_8-3-1-查询所有-match-all" aria-hidden="true">#</a> 8.3.1 查询所有（match_all ）</h4><p>GET /atguigu/_search</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;query&quot;:{ #查询规则
    &quot;match_all&quot;: {} #查询所有
  },
  &quot;from&quot;: 0, #开始位置
  &quot;size&quot;: 4, #选取条数
  &quot;sort&quot;: [ #排序
    {
      &quot;balance&quot;:{ #处理的字段
        &quot;order&quot;: &quot;desc&quot; # 排序规则
      }
    }
  ],
  &quot;_source&quot;: [&quot;balance&quot;,&quot;lastname&quot;] #显示字段
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>query</code>：代表查询对象</li><li><code>match_all</code>：代表查询所有</li></ul><h4 id="_8-3-2-条件匹配-match" tabindex="-1"><a class="header-anchor" href="#_8-3-2-条件匹配-match" aria-hidden="true">#</a> 8.3.2 条件匹配（match ）</h4><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询出很多数据，不仅包括<code>小米手机</code>，而且与<code>小米</code>或者<code>手机</code>相关的都会查询到，说明多个词之间是<code>or</code>的关系。</p><p>某些情况下，我们需要更精确查找，我们希望这个关系变成<code>and</code>，可以这样做：</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;and&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.7037868</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;goods&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.7037868</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;http://image.jd.com/12479122.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">1999</span><span class="token punctuation">,</span>
          <span class="token property">&quot;stock&quot;</span> <span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token property">&quot;attr&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;brand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-3-短语匹配-match-phrase" tabindex="-1"><a class="header-anchor" href="#_8-3-3-短语匹配-match-phrase" aria-hidden="true">#</a> 8.3.3 短语匹配 （match phrase） <a name="短语匹配"></a></h4><p>GET bank/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill lane&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只会包含 address=mill lane 记录</p><h4 id="_8-3-4-子属性匹配-字段-xx" tabindex="-1"><a class="header-anchor" href="#_8-3-4-子属性匹配-字段-xx" aria-hidden="true">#</a> 8.3.4 子属性匹配（字段.xx） <a name="子属性匹配"></a></h4><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;attr.brand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-5-多字段匹配-multi-match" tabindex="-1"><a class="header-anchor" href="#_8-3-5-多字段匹配-multi-match" aria-hidden="true">#</a> 8.3.5 多字段匹配（multi_match） <a name="多字段匹配"></a></h4><p><code>match</code>只能根据一个字段匹配查询，如果要根据多个字段匹配查询可以使用<code>multi_match</code></p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;attr.brand.keyword&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fields值匹配到query</p><h3 id="_8-4-词条查询-精确值匹配-term" tabindex="-1"><a class="header-anchor" href="#_8-4-词条查询-精确值匹配-term" aria-hidden="true">#</a> 8.4 词条查询，精确值匹配（term）</h3><p><code>term</code> 查询被用于精确值 匹配，这些精确值可能是数字、时间、布尔或者那些<strong>未分词</strong>的字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /atguigu/_search

{
    &quot;query&quot;:{
        &quot;term&quot;:{
            &quot;price&quot;: 4999
        }
    }
}

# 对非文本数据检索用trem，对文本|全文检索就用match
GET bank/_search

{
  &quot;query&quot;: {
    &quot;term&quot;: {
        &quot;age&quot;: &quot;28&quot;
    }
  }
}

GET bank/_search

{
  &quot;query&quot;: {
    &quot;term&quot;: {
        &quot;address&quot;: &quot;mill&quot; ########会取不到数据
    }
  }
}

GET bank/_search

{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address&quot;: &quot;990 mill&quot;
    }
  }
}

GET bank/_search

{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;address.keyword&quot;: &quot;990 mill&quot; # 精确匹配
    }
  }
}

GET bank/_search

{
  &quot;query&quot;: {
    &quot;match_phrase&quot;: {
      &quot;address&quot;: &quot;990 mill&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-范围查询-range" tabindex="-1"><a class="header-anchor" href="#_8-5-范围查询-range" aria-hidden="true">#</a> 8.5 范围查询（range）</h3><p><code>range</code> 查询找出那些落在指定区间内的数字或者时间</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span>  <span class="token number">1000</span><span class="token punctuation">,</span>
                <span class="token property">&quot;lt&quot;</span><span class="token operator">:</span>   <span class="token number">3000</span>
            <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="range查询允许以下字符-gt、gte、lt、lte" tabindex="-1"><a class="header-anchor" href="#range查询允许以下字符-gt、gte、lt、lte" aria-hidden="true">#</a> range查询允许以下字符：gt、gte、lt、lte</h4><table><thead><tr><th style="text-align:center;">操作符</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">gt</td><td style="text-align:center;">大于</td></tr><tr><td style="text-align:center;">gte</td><td style="text-align:center;">大于等于</td></tr><tr><td style="text-align:center;">lt</td><td style="text-align:center;">小于</td></tr><tr><td style="text-align:center;">lte</td><td style="text-align:center;">小于等于</td></tr></tbody></table><h3 id="_8-6-布尔组合-bool" tabindex="-1"><a class="header-anchor" href="#_8-6-布尔组合-bool" aria-hidden="true">#</a> 8.6 布尔组合（bool)</h3><p>布尔查询又叫 <strong>组合查询、复合查询</strong></p><p><code>bool</code>把各种其它查询通过<code>must</code>（与）、<code>must_not</code>（非）、<code>should</code>（或）的方式进行组合</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
         <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           <span class="token punctuation">{</span>
             <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
               <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                 <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
                 <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">3000</span>
               <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token punctuation">{</span>
             <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
               <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                 <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
                 <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">4000</span>
               <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
         <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GET bank/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mill&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询gender=M并且address=Mill</p><p>GET bank/_search</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [ #必须是什么
        {
          &quot;match&quot;: {
            &quot;gender&quot;: &quot;M&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;address&quot;: &quot;Mill&quot;
          }
        }
      ],
      &quot;must_not&quot;: [ #必须不是什么
        {
          &quot;match&quot;: {
            &quot;age&quot;: 38
          }
        }
      ],
   &quot;should&quot;: [ #应该，能匹配到最好，没匹配到也不伤大雅，满足的话max_score会更高
        {
          &quot;match&quot;: {
            &quot;lastname&quot;: &quot;Wallace&quot;
          }
        }
      ]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查询gender=F &amp; address=Mill &amp; age!=38 ，lastname能匹配到最好，没匹配到也不伤大雅</p></blockquote><p>注意：一个组合查询里面只能出现一种组合，不能混用</p><h3 id="_8-7-过滤-filter" tabindex="-1"><a class="header-anchor" href="#_8-7-过滤-filter" aria-hidden="true">#</a> 8.7 过滤（filter）</h3><p>所有的查询都会影响到文档的评分及排名。如果我们需要在查询结果中进行过滤，并且不希望过滤条件影响评分，那么就不要把过滤条件作为查询条件来用。而是使用<code>filter</code>方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /atguigu/_search

{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: {
        &quot;match&quot;: { &quot;title&quot;: &quot;小米手机&quot; }
      },
      &quot;filter&quot;: {
        &quot;range&quot;: {
          &quot;price&quot;: { &quot;gt&quot;: 2000, &quot;lt&quot;: 3000 }
        }
      }
    }
  }
}

# filter不会计算相关性得分_score，must反之

GET bank/_search

{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;range&quot;: {
            &quot;age&quot;: {
              &quot;gte&quot;: 18,
              &quot;lte&quot;: 30
            }
          }
        }
      ]
    }
  }
}

--------------
GET bank/_search

{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;filter&quot;: {
          &quot;range&quot;: {
            &quot;age&quot;: {
              &quot;gte&quot;: 18,
              &quot;lte&quot;: 30
            }
          }
      }
    }
  }
}

# filter 最好是放在最后过滤，这样不会影响查询条件和相关性得分
GET bank/_search

{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;gender&quot;: &quot;M&quot;
          }
        },
        {
          &quot;match&quot;: {
            &quot;address&quot;: &quot;Mill&quot;
          }
        }
      ],
      &quot;must_not&quot;: [
        {
          &quot;match&quot;: {
            &quot;age&quot;: 18
          }
        }
      ],
      &quot;should&quot;: [
        {
          &quot;match&quot;: {
            &quot;lastname&quot;: &quot;Holland&quot;
          }
        }
      ],
      &quot;filter&quot;: {
          &quot;range&quot;: {
            &quot;age&quot;: {
              &quot;gte&quot;: 18,
              &quot;lte&quot;: 30
            }
          }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：filter 最好是放在最后过滤，这样不会影响查询条件和相关性得分。<code>filter</code>中还可以再次进行<code>bool</code>组合条件过滤。</p><figure><img src="`+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+R+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_8-8-排序-sort" tabindex="-1"><a class="header-anchor" href="#_8-8-排序-sort" aria-hidden="true">#</a> 8.8 排序（sort）</h3><p><code>sort</code> 可以让我们按照不同的字段进行排序，并且通过<code>order</code>指定排序的方式</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-9-分页-from-size" tabindex="-1"><a class="header-anchor" href="#_8-9-分页-from-size" aria-hidden="true">#</a> 8.9 分页（from/size）</h3><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>from：从那一条开始</p><p>size：取多少条</p><h3 id="_8-10-高亮-highlight" tabindex="-1"><a class="header-anchor" href="#_8-10-高亮-highlight" aria-hidden="true">#</a> 8.10 高亮（highlight）</h3><p>发现：高亮的本质是给关键字添加了 <code>&lt;em&gt;</code> 标签，在前端再给该标签添加样式即可。</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;em&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/em&gt;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fields：高亮字段</p><p>pre_tags：前置标签</p><p>post_tags：后置标签</p><p>查询结果如下：</p><h3 id="_8-11-结果过滤-source" tabindex="-1"><a class="header-anchor" href="#_8-11-结果过滤-source" aria-hidden="true">#</a> 8.11 结果过滤（_source）</h3><p>默认情况下，elasticsearch在搜索的结果中，会把文档中保存在<code>_source</code>的所有字段都返回。</p><p>如果我们只想获取其中的部分字段，可以添加<code>_source</code>的过滤</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;price&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2699</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果，只有两个字段：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;goods&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;9&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;price&quot;</span> <span class="token operator">:</span> <span class="token number">2699</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;vivo手机&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-聚合-aggregations" tabindex="-1"><a class="header-anchor" href="#_9-聚合-aggregations" aria-hidden="true">#</a> 9 聚合（aggregations）</h2><p><em>搜索address中包含mill的所有人的年龄分布以及平均年龄，但不显示这些人的详情</em></p><p>GET bank/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ageAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ageAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;balanceAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>按照年龄聚合，并且请求这些年龄段的这些人的平均薪资</em></p><p>GET bank/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ageAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ageAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>查出所有年龄分布，并且这些年隆段中M的平均薪资和F的平均薪资以及这个年龄段的总体平均薪资</em></p><p>GET bank/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ageAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;genderAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender.keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> 
          <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;balanceAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ageAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>聚合可以让我们极其方便的实现对数据的统计、分析。例如：</p><ul><li>什么品牌的手机最受欢迎？</li><li>这些手机的平均价格、最高价格、最低价格？</li><li>这些手机每月的销售情况如何？</li></ul><p>实现这些统计功能的比数据库的sql要方便的多，而且查询速度非常快，可以实现实时搜索效果。</p><h3 id="_9-1-基本概念" tabindex="-1"><a class="header-anchor" href="#_9-1-基本概念" aria-hidden="true">#</a> 9.1 基本概念</h3><p>Elasticsearch中的聚合，包含多种类型，最常用的两种，一个叫<code>桶</code>，一个叫<code>度量</code>：</p><p><strong>桶（bucket）</strong></p><p>桶的作用，是按照某种方式对数据进行分组，每一组数据在ES中称为一个<code>桶</code>，例如我们根据国籍对人划分，可以得到<code>中国桶</code>、<code>英国桶</code>，<code>日本桶</code> 或者我们按照年龄段对人进行划分：<code>0~10,10~20,20~30,30~40</code>等。</p><p>Elasticsearch中提供的划分桶的方式有很多：</p><ul><li>Date Histogram Aggregation：根据日期阶梯分组，例如给定阶梯为周，会自动每周分为一组</li><li>Histogram Aggregation：根据数值阶梯分组，与日期类似</li><li>Terms Aggregation：根据词条内容分组，词条内容完全匹配的为一组</li><li>Range Aggregation：数值和日期的范围分组，指定开始和结束，然后按段分组</li></ul><p>bucket aggregations 只负责对数据进行分组，并不进行计算，因此往往bucket中往往会嵌套另一种聚合：metrics aggregations即度量</p><p><strong>度量（metrics）</strong></p><p>分组完成以后，我们一般会对组中的数据进行聚合运算，例如求平均值、最大、最小、求和等，这些在ES中称为<code>度量</code></p><p>比较常用的一些度量聚合方式：</p><ul><li>Avg Aggregation：求平均值</li><li>Max Aggregation：求最大值</li><li>Min Aggregation：求最小值</li><li>Percentiles Aggregation：求百分比</li><li>Stats Aggregation：同时返回avg、max、min、sum、count等</li><li>Sum Aggregation：求和</li><li>Top hits Aggregation：求前几</li><li>Value Count Aggregation：求总数</li></ul><h3 id="_9-2-聚合为桶" tabindex="-1"><a class="header-anchor" href="#_9-2-聚合为桶" aria-hidden="true">#</a> 9.2 聚合为桶</h3><p>首先，我们按照手机的品牌<code>attr.brand.keyword</code>来划分<code>桶</code></p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;brands&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token property">&quot;terms&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
              <span class="token property">&quot;field&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;attr.brand.keyword&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>size： 查询条数，这里设置为0，因为我们不关心搜索到的数据，只关心聚合结果，提高效率</li><li>aggs：声明这是一个聚合查询，是aggregations的缩写 <ul><li>brands：给这次聚合起一个名字，任意。 <ul><li>terms：划分桶的方式，这里是根据词条划分 <ul><li>field：划分桶的字段</li></ul></li></ul></li></ul></li></ul><p>结果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brands&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;oppo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>hits：查询结果为空，因为我们设置了size为0</li><li>aggregations：聚合的结果</li><li>brands：我们定义的聚合名称</li><li>buckets：查找到的桶，每个不同的品牌字段值都会形成一个桶 <ul><li>key：这个桶对应的品牌字段的值</li><li>doc_count：这个桶中的文档数量</li></ul></li></ul><h3 id="_9-3-桶内度量" tabindex="-1"><a class="header-anchor" href="#_9-3-桶内度量" aria-hidden="true">#</a> 9.3 桶内度量</h3><p>前面的例子告诉我们每个桶里面的文档数量，这很有用。 但通常，我们的应用需要提供更复杂的文档度量。 例如，每种品牌手机的平均价格是多少？</p><p>因此，我们需要告诉Elasticsearch<code>使用哪个字段</code>，<code>使用何种度量方式</code>进行运算，这些信息要嵌套在<code>桶</code>内，<code>度量</code>的运算会基于<code>桶</code>内的文档进行</p><p>现在，我们为刚刚的聚合结果添加 求价格平均值的度量：</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;brands&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token property">&quot;terms&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
              <span class="token property">&quot;field&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;attr.brand.keyword&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                   <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span> 
                   <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>aggs：我们在上一个aggs(brands)中添加新的aggs。可见<code>度量</code>也是一个聚合</li><li>avg_price：聚合的名称</li><li>avg：度量的类型，这里是求平均值</li><li>field：度量运算的字段</li></ul><p>结果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">41</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brands&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3999.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3499.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;oppo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">2799.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">2699.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到每个桶中都有自己的<code>avg_price</code>字段，这是度量聚合的结果</p><h3 id="_9-4-桶内嵌套桶" tabindex="-1"><a class="header-anchor" href="#_9-4-桶内嵌套桶" aria-hidden="true">#</a> 9.4 桶内嵌套桶</h3><p>刚刚的案例中，我们在桶内嵌套度量运算。事实上桶不仅可以嵌套运算， 还可以再嵌套其它桶。也就是说在每个分组中，再分更多组。</p><p>比如：我们想统计每个品牌都生产了那些产品，按照<code>attr.category.keyword</code>字段再进行分桶</p><p>GET /atguigu/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;size&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aggs&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;brands&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token property">&quot;terms&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> 
              <span class="token property">&quot;field&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;attr.brand.keyword&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                   <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span> 
                   <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;categorys&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;attr.category.keyword&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部分结果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;brands&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categorys&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">3</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;笔记本&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3999.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categorys&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">2</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;电视&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;笔记本&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">3499.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;oppo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categorys&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">2799.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;vivo&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;categorys&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;手机&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avg_price&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">2699.0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>我们可以看到，新的聚合<code>categorys</code>被嵌套在原来每一个<code>brands</code>的桶中。</li><li>每个品牌下面都根据 <code>attr.category.keyword</code>字段进行了分组</li><li>我们能读取到的信息： <ul><li>华为有4中产品</li><li>华为产品的平均售价是 3999.0美元。</li><li>其中3种手机产品，1种笔记本产品</li></ul></li></ul><h2 id="_10-springdata-elasticsearch" tabindex="-1"><a class="header-anchor" href="#_10-springdata-elasticsearch" aria-hidden="true">#</a> 10 SpringData-Elasticsearch</h2><h3 id="_10-1-介绍" tabindex="-1"><a class="header-anchor" href="#_10-1-介绍" aria-hidden="true">#</a> 10.1 介绍</h3><p>目前市面上有两类客户端</p><p>一类是TransportClient 为代表的ES原生客户端，不能执行原生dsl语句必须使用它的Java api方法。</p><p>另外一种是以Rest Api为主的missing client，最典型的就是jest。 这种客户端可以直接使用dsl语句拼成的字符串，直接传给服务端，然后返回json字符串再解析。</p><p>两种方式各有优劣，但是最近elasticsearch官网，宣布计划在7.0以后的版本中废除TransportClient。以RestClient为主。</p><p>由于原生的Elasticsearch客户端API非常麻烦。所以这里直接学习Spring提供的套件：Spring Data Elasticsearch。</p><p><strong>spring-data-Elasticsearch 使用之前,必须先确定版本,elasticsearch 对版本的要求比较高。</strong></p>`,162),un={href:"https://www.elastic.co/guide/en/elasticsearch/client/index.html",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/index.html",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high.html",target:"_blank",rel:"noopener noreferrer"},dn=e(`<h3 id="_10-2-创建springboot-项目" tabindex="-1"><a class="header-anchor" href="#_10-2-创建springboot-项目" aria-hidden="true">#</a> 10.2 创建springboot 项目</h3><p>创建单独项目 yumall-search</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;properties&gt;
    &lt;elasticsearch.version&gt;7.14.0&lt;/elasticsearch.version&gt;
&lt;/properties&gt;  

&lt;dependency&gt;
     &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
     &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt;
     &lt;version&gt;7.14.0&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-elasticsearch&lt;/artifactId&gt;
    &lt;exclusions&gt;
        &lt;exclusion&gt;
            &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
            &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt;
        &lt;/exclusion&gt;
        &lt;exclusion&gt;
            &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
            &lt;artifactId&gt;transport&lt;/artifactId&gt;
        &lt;/exclusion&gt;
    &lt;/exclusions&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
    &lt;artifactId&gt;elasticsearch-rest-high-level-client&lt;/artifactId&gt;
    &lt;version&gt;6.8.1&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.elasticsearch.client&lt;/groupId&gt;
    &lt;artifactId&gt;transport&lt;/artifactId&gt;
    &lt;version&gt;6.8.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加入nacos、common、@EnableDiscoveryClient</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#开启服务发现</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-ban测试" tabindex="-1"><a class="header-anchor" href="#_10-3-ban测试" aria-hidden="true">#</a> 10.3 ban测试</h3><p>创建配置类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">//   RestClient builder = RestClient.builder(new HttpHost(&quot;192.168.101.5&quot;, 9200, &quot;http&quot;));</span>
 <span class="token comment">//   new RestHighLevelClient(builder);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">RestHighLevelClient</span> client<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getClientBan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">///Junit4 测试类加上注解，在运行：org.elasticsearch.client.RestHighLevelClient@6f6f65a4</span>
<span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoTesst</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-测试保存" tabindex="-1"><a class="header-anchor" href="#_10-4-测试保存" aria-hidden="true">#</a> 10.4 测试保存</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoTest</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">indexData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">IndexRequest</span> indexRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexRequest</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    indexRequest<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        indexRequest.source(&quot;name&quot;,&quot;xiaoyu&quot;,&quot;age&quot;,&quot;19&quot;);</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;小华&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setGender</span><span class="token punctuation">(</span><span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> jsonString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    indexRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">,</span> <span class="token class-name">XContentType</span><span class="token punctuation">.</span><span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//要保存的数据json</span>
    <span class="token comment">//开始保存</span>
    <span class="token class-name">IndexResponse</span> indexResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>indexRequest<span class="token punctuation">,</span> <span class="token class-name">ElasticSearchConfig</span><span class="token punctuation">.</span><span class="token constant">COMMON_OPTIONS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;indexResponse = &quot;</span> <span class="token operator">+</span> indexResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-5-测试检索" tabindex="-1"><a class="header-anchor" href="#_10-5-测试检索" aria-hidden="true">#</a> 10.5 测试检索</h3><h4 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//1、创建检索请求 SearchRequest &gt; sourceBuilder[添加聚合？] &gt; searchRequest.source(sourceBuilder);
//2、执行结果 SearchResponse=client.search(searchRequest,自定义OPTIONS);
//3、分析结果 searchResponse:getHits获取数据,getAggregations获取聚合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">serachData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">//1、创建检索请求</span>
    <span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//指定索引</span>
    searchRequest<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token string">&quot;bank&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//指定DSL，检索条件</span>
    <span class="token comment">//SearchSourceBuilder sourceBuilde 封装的条件</span>
    <span class="token class-name">SearchSourceBuilder</span> sourceBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SearchSourceBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//1.1)、构造检索条件</span>
    <span class="token comment">//sourceBuilder.query();</span>
    <span class="token comment">//sourceBuilder.from();</span>
    <span class="token comment">//sourceBuilder.size();</span>
    <span class="token comment">//sourceBuilder.aggregatipn()</span>
    sourceBuilder<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mill&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.2)、按照年龄的值分布进行聚合</span>
    <span class="token class-name">TermsAggregationBuilder</span> ageAgg <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span><span class="token string">&quot;ageAgg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>ageAgg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.3)、平均薪资</span>
    <span class="token class-name">AvgAggregationBuilder</span> balanceAvg <span class="token operator">=</span> <span class="token class-name">AggregationBuilders</span><span class="token punctuation">.</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string">&quot;balanceAvg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;balance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sourceBuilder<span class="token punctuation">.</span><span class="token function">aggregation</span><span class="token punctuation">(</span>balanceAvg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;检索条件：&quot;</span> <span class="token operator">+</span> sourceBuilder<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//要检索内容</span>
    searchRequest<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>sourceBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//2、执行结果        SearchResponse</span>
    <span class="token class-name">SearchResponse</span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">,</span> <span class="token class-name">ElasticSearchConfig</span><span class="token punctuation">.</span><span class="token constant">COMMON_OPTIONS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//3、分析结果</span>
<span class="token comment">//        System.out.println(&quot;检索结果：&quot; + searchResponse.toString());</span>
<span class="token comment">//        Map map = JSON.parseObject(searchResponse.toString(), Map.class);</span>
    <span class="token comment">//3.1)、获取所有数据;</span>
    <span class="token class-name">SearchHits</span> hits <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SearchHit</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchHits <span class="token operator">=</span> hits<span class="token punctuation">.</span><span class="token function">getHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span> hit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/*
                &quot;_index&quot;:&quot;bank&quot;,
                &quot;_type&quot;:&quot;account&quot;,
                &quot;_id&quot;:&quot;970&quot;,
                &quot;_score&quot;:5.4032025,
                &quot;_source&quot;:{数据
             */</span>
<span class="token comment">//            hit.getIndex();hit.getType();hit.getId();</span>
      <span class="token class-name">String</span> string <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">getSourceAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">Account</span> account <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token class-name">Account</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;account = &quot;</span> <span class="token operator">+</span> account<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//3.2)、获取这次检索到的分析信息;</span>
    <span class="token class-name">Aggregations</span> aggregations <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">getAggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Aggregation</span> aggregation <span class="token operator">:</span> aggregations<span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前聚合&quot;</span> <span class="token operator">+</span> aggregation<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Terms</span> ageAgg1 <span class="token operator">=</span> aggregations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ageAgg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Terms<span class="token punctuation">.</span>Bucket</span> bucket <span class="token operator">:</span> ageAgg1<span class="token punctuation">.</span><span class="token function">getBuckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> keyAsString <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">getKeyAsString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年龄: &quot;</span> <span class="token operator">+</span> keyAsString <span class="token operator">+</span> <span class="token string">&quot;==&gt;&quot;</span> <span class="token operator">+</span> bucket<span class="token punctuation">.</span><span class="token function">getDocCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+I+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_10-6-创建module" tabindex="-1"><a class="header-anchor" href="#_10-6-创建module" aria-hidden="true">#</a> 10.6 创建module</h3><p>在application.properties中添加配置</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.elasticsearch.rest.uris</span><span class="token punctuation">=</span><span class="token value attr-value">http://172.16.116.100:9200</span>
<span class="token comment"># 集群情况下</span>
<span class="token key attr-name">spring.elasticsearch.rest.uris[0]</span><span class="token punctuation">=</span><span class="token value attr-value">http://172.16.116.100:9200</span>
<span class="token key attr-name">spring.elasticsearch.rest.uris[1]</span><span class="token punctuation">=</span><span class="token value attr-value">http://172.16.116.100:9200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-7-实体类" tabindex="-1"><a class="header-anchor" href="#_10-7-实体类" aria-hidden="true">#</a> 10.7 实体类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Document</span><span class="token punctuation">(</span>indexName <span class="token operator">=</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> shards <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> replicas <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Text</span><span class="token punctuation">,</span> analyzer <span class="token operator">=</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Integer</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Keyword</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring Data通过注解来声明字段的映射属性，有下面的三个注解：</p><ul><li><code>@Document</code> 作用在类，标记实体类为文档对象，一般有四个属性 <ul><li>indexName：对应索引库名称</li><li>type：对应在索引库中的类型</li><li>shards：分片数量，默认5</li><li>replicas：副本数量，默认1</li></ul></li><li><code>@Id</code> 作用在成员变量，标记一个字段作为id主键</li><li><code>@Field</code> 作用在成员变量，标记为文档的字段，并指定字段映射属性： <ul><li>type：字段类型，取值是枚举：FieldType</li><li>index：是否索引，布尔类型，默认是true</li><li>store：是否存储，布尔类型，默认是false</li><li>analyzer：分词器名称：ik_max_word</li></ul></li></ul><h3 id="_10-8-创建索引及映射" tabindex="-1"><a class="header-anchor" href="#_10-8-创建索引及映射" aria-hidden="true">#</a> 10.8 创建索引及映射</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">EsDemoApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token comment">// ElasticsearchTemplate 是 TransportClient 客户端</span>
    <span class="token comment">// ElasticsearchRestTemplate 是 RestHighLevel 客户端</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">ElasticsearchRestTemplate</span> restTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建索引</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>restTemplate<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建映射</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>restTemplate<span class="token punctuation">.</span><span class="token function">putMapping</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 删除索引</span>
        <span class="token comment">// this.restTemplate.deleteIndex(&quot;user&quot;);</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-9-repository文档操作" tabindex="-1"><a class="header-anchor" href="#_10-9-repository文档操作" aria-hidden="true">#</a> 10.9 Repository文档操作</h3><p>Spring Data 的强大之处，就在于你不用写任何DAO处理，自动根据方法名或类的信息进行CRUD操作。只要你定义一个接口，然后继承Repository提供的一些子接口，就能具备各种基本的CRUD功能。</p><p>其中ElasticsearchRepository接口功能最强大。该接口的方法包括：</p><h4 id="_10-9-1-新增" tabindex="-1"><a class="header-anchor" href="#_10-9-1-新增" aria-hidden="true">#</a> 10.9.1 新增</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">UserRepository</span> userRepository<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">1l</span><span class="token punctuation">,</span> <span class="token string">&quot;zhang3&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改和新增是同一个接口，区分的依据就是id，这一点跟我们在页面发起PUT请求是类似的。</p><h4 id="_10-9-2-删除" tabindex="-1"><a class="header-anchor" href="#_10-9-2-删除" aria-hidden="true">#</a> 10.9.2 删除</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">1l</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-10-查询" tabindex="-1"><a class="header-anchor" href="#_10-10-查询" aria-hidden="true">#</a> 10.10 查询</h3><h4 id="_10-10-1-基本查询" tabindex="-1"><a class="header-anchor" href="#_10-10-1-基本查询" aria-hidden="true">#</a> 10.10.1 基本查询</h4><p>查询一个：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testFind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token number">1l</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-10-2-条件查询" tabindex="-1"><a class="header-anchor" href="#_10-10-2-条件查询" aria-hidden="true">#</a> 10.10.2 条件查询</h4><p>Spring Data 的另一个强大功能，是根据方法名称自动实现功能。</p><p>比如：你的方法名叫做：findByTitle，那么它就知道你是根据title查询，然后自动帮你完成，无需写实现类。</p><p>当然，方法名称要符合一定的约定：</p><table><thead><tr><th>Keyword</th><th>Sample</th><th>Elasticsearch Query String</th></tr></thead><tbody><tr><td><code>And</code></td><td><code>findByNameAndPrice</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : [ {&quot;field&quot; : {&quot;name&quot; : &quot;?&quot;}}, {&quot;field&quot; : {&quot;price&quot; : &quot;?&quot;}} ]}}</code></td></tr><tr><td><code>Or</code></td><td><code>findByNameOrPrice</code></td><td><code>{&quot;bool&quot; : {&quot;should&quot; : [ {&quot;field&quot; : {&quot;name&quot; : &quot;?&quot;}}, {&quot;field&quot; : {&quot;price&quot; : &quot;?&quot;}} ]}}</code></td></tr><tr><td><code>Is</code></td><td><code>findByName</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;name&quot; : &quot;?&quot;}}}}</code></td></tr><tr><td><code>Not</code></td><td><code>findByNameNot</code></td><td><code>{&quot;bool&quot; : {&quot;must_not&quot; : {&quot;field&quot; : {&quot;name&quot; : &quot;?&quot;}}}}</code></td></tr><tr><td><code>Between</code></td><td><code>findByPriceBetween</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : ?,&quot;to&quot; : ?,&quot;include_lower&quot; : true,&quot;include_upper&quot; : true}}}}}</code></td></tr><tr><td><code>LessThanEqual</code></td><td><code>findByPriceLessThan</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : null,&quot;to&quot; : ?,&quot;include_lower&quot; : true,&quot;include_upper&quot; : true}}}}}</code></td></tr><tr><td><code>GreaterThanEqual</code></td><td><code>findByPriceGreaterThan</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : ?,&quot;to&quot; : null,&quot;include_lower&quot; : true,&quot;include_upper&quot; : true}}}}}</code></td></tr><tr><td><code>Before</code></td><td><code>findByPriceBefore</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : null,&quot;to&quot; : ?,&quot;include_lower&quot; : true,&quot;include_upper&quot; : true}}}}}</code></td></tr><tr><td><code>After</code></td><td><code>findByPriceAfter</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;range&quot; : {&quot;price&quot; : {&quot;from&quot; : ?,&quot;to&quot; : null,&quot;include_lower&quot; : true,&quot;include_upper&quot; : true}}}}}</code></td></tr><tr><td><code>Like</code></td><td><code>findByNameLike</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;name&quot; : {&quot;query&quot; : &quot;?*&quot;,&quot;analyze_wildcard&quot; : true}}}}}</code></td></tr><tr><td><code>StartingWith</code></td><td><code>findByNameStartingWith</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;name&quot; : {&quot;query&quot; : &quot;?*&quot;,&quot;analyze_wildcard&quot; : true}}}}}</code></td></tr><tr><td><code>EndingWith</code></td><td><code>findByNameEndingWith</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;name&quot; : {&quot;query&quot; : &quot;*?&quot;,&quot;analyze_wildcard&quot; : true}}}}}</code></td></tr><tr><td><code>Contains/Containing</code></td><td><code>findByNameContaining</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;name&quot; : {&quot;query&quot; : &quot;**?**&quot;,&quot;analyze_wildcard&quot; : true}}}}}</code></td></tr><tr><td><code>In</code></td><td><code>findByNameIn(Collection&lt;String&gt;names)</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;bool&quot; : {&quot;should&quot; : [ {&quot;field&quot; : {&quot;name&quot; : &quot;?&quot;}}, {&quot;field&quot; : {&quot;name&quot; : &quot;?&quot;}} ]}}}}</code></td></tr><tr><td><code>NotIn</code></td><td><code>findByNameNotIn(Collection&lt;String&gt;names)</code></td><td><code>{&quot;bool&quot; : {&quot;must_not&quot; : {&quot;bool&quot; : {&quot;should&quot; : {&quot;field&quot; : {&quot;name&quot; : &quot;?&quot;}}}}}}</code></td></tr><tr><td><code>Near</code></td><td><code>findByStoreNear</code></td><td><code>Not Supported Yet !</code></td></tr><tr><td><code>True</code></td><td><code>findByAvailableTrue</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;available&quot; : true}}}}</code></td></tr><tr><td><code>False</code></td><td><code>findByAvailableFalse</code></td><td><code>{&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;available&quot; : false}}}}</code></td></tr><tr><td><code>OrderBy</code></td><td><code>findByAvailableTrueOrderByNameDesc</code></td><td><code>{&quot;sort&quot; : [{ &quot;name&quot; : {&quot;order&quot; : &quot;desc&quot;} }],&quot;bool&quot; : {&quot;must&quot; : {&quot;field&quot; : {&quot;available&quot; : true}}}}</code></td></tr></tbody></table><p>准备一组数据：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testAddAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">1l</span><span class="token punctuation">,</span> <span class="token string">&quot;柳岩&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">2l</span><span class="token punctuation">,</span> <span class="token string">&quot;范冰冰&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">3l</span><span class="token punctuation">,</span> <span class="token string">&quot;李冰冰&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">4l</span><span class="token punctuation">,</span> <span class="token string">&quot;锋哥&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">5l</span><span class="token punctuation">,</span> <span class="token string">&quot;小鹿&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    users<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">6l</span><span class="token punctuation">,</span> <span class="token string">&quot;韩红&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userRepository<span class="token punctuation">.</span><span class="token function">saveAll</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在UserRepository中定义一个方法：</p><p>第一种写法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">ElasticsearchRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 根据年龄区间查询
     * <span class="token keyword">@param</span> <span class="token parameter">age1</span>
     * <span class="token keyword">@param</span> <span class="token parameter">age2</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByAgeBetween</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testFindByAgeBetween</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userRepository<span class="token punctuation">.</span><span class="token function">findByAgeBetween</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种写法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;{\\n&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;    \\&quot;range\\&quot;: {\\n&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;      \\&quot;age\\&quot;: {\\n&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;        \\&quot;gte\\&quot;: \\&quot;?0\\&quot;,\\n&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;        \\&quot;lte\\&quot;: \\&quot;?1\\&quot;\\n&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;      }\\n&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;    }\\n&quot;</span> <span class="token operator">+</span>
          <span class="token string">&quot;  }&quot;</span><span class="token punctuation">)</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByQuery</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testFindByQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userRepository<span class="token punctuation">.</span><span class="token function">findByQuery</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-10-3-自定义查询" tabindex="-1"><a class="header-anchor" href="#_10-10-3-自定义查询" aria-hidden="true">#</a> 10.10.3 自定义查询</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testNative</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化自定义查询对象</span>
    <span class="token class-name">NativeSearchQueryBuilder</span> queryBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 构建查询</span>
    queryBuilder<span class="token punctuation">.</span><span class="token function">withQuery</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;冰冰&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 排序</span>
    queryBuilder<span class="token punctuation">.</span><span class="token function">withSort</span><span class="token punctuation">(</span><span class="token class-name">SortBuilders</span><span class="token punctuation">.</span><span class="token function">fieldSort</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">SortOrder</span><span class="token punctuation">.</span><span class="token constant">ASC</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 分页</span>
    queryBuilder<span class="token punctuation">.</span><span class="token function">withPageable</span><span class="token punctuation">(</span><span class="token class-name">PageRequest</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 高亮</span>
    queryBuilder<span class="token punctuation">.</span><span class="token function">withHighlightBuilder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HighlightBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">preTags</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;em&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">postTags</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/em&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 执行查询，获取分页结果集</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userPage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userRepository<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>queryBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 总页数</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userPage<span class="token punctuation">.</span><span class="token function">getTotalPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 总记录数</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userPage<span class="token punctuation">.</span><span class="token function">getTotalElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 当前页数据</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userPage<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NativeSearchQueryBuilder：Spring提供的一个查询条件构建器，帮助构建json格式的请求体</p><p><code>Page&lt;item&gt;</code>：默认是分页查询，因此返回的是一个分页的结果对象，包含属性：</p><ul><li>totalElements：总条数</li><li>totalPages：总页数</li><li>Iterator：迭代器，本身实现了Iterator接口，因此可直接迭代得到当前页的数据</li></ul>`,60);function kn(vn,mn){const t=o("ExternalLinkIcon"),p=o("RouterLink");return l(),u("div",null,[c(" more "),G,n("p",null,[s("官方文档 : "),n("a",N,[s("https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"),a(t)])]),n("p",null,[s("官方中文 : "),n("a",D,[s("https://www.elastic.co/guide/cn/elasticsearch/guide/current/foreword_id.html"),a(t)])]),n("p",null,[s("社区中文: "),n("a",O,[s("https://es.xiaoleilu.com/index.html、http://doc.codingdict.com/elasticsearch/0/"),a(t)])]),U,n("p",null,[n("a",C,[s("downloads"),a(t)])]),L,n("p",null,[n("a",H,[s("教程"),a(t)])]),n("p",null,[a(p,{to:"/tools/docker/docker-install-mysql-redis-nginx-nacos-mq-es.html#elasticsearch-kibana"},{default:r(()=>[s("具体 Docker 安装配置-站内跳转")]),_:1})]),M,n("p",null,[s("get "),n("a",F,[s("http://192.168.101.5:9200/customer/demo/1"),a(t)])]),Q,n("p",null,[s("删除ID: "),n("a",J,[s("http://192.168.101.5:9200/customer/demo/id/"),a(t)])]),V,n("p",null,[s("删除索引: "),n("a",W,[s("http://192.168.101.5:9200/customer/"),a(t)])]),K,n("p",null,[s("查看索引: "),n("a",Y,[s("http://192.168.101.5:9200/_cat/indices"),a(t)])]),X,n("p",null,[s("post "),n("a",Z,[s("http://192.168.101.5:9200/customer/demo/_bulk"),a(t)])]),$,n("p",null,[n("a",nn,[s("http://192.168.101.5:9200/customer/demo/1"),a(t)])]),sn,n("p",null,[n("a",an,[s("accounts.zip"),a(t)])]),tn,n("p",null,[n("a",en,[s("github 下载"),a(t)])]),on,n("p",null,[n("a",pn,[s("http://localhost:50005/es/fenci.txt"),a(t)])]),ln,n("p",null,[s("java-API选择："),n("a",un,[s("https://www.elastic.co/guide/en/elasticsearch/client/index.html"),a(t)])]),n("p",null,[s("选择：Java REST Client "),n("a",cn,[s("7.14]"),a(t)]),s(" => JavaHighLevelRESTClient "),n("a",rn,[s("文档"),a(t)])]),dn])}const bn=i(P,[["render",kn],["__file","elastic-search.html.vue"]]);export{bn as default};
