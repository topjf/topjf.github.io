import{_ as t,X as p,Y as o,Z as c,$ as a,a0 as n,a2 as e,a1 as i,D as l}from"./framework-10d91a2c.js";const d={},u=i(`<h2 id="java14" tabindex="-1"><a class="header-anchor" href="#java14" aria-hidden="true">#</a> Java14</h2><h3 id="空指针异常精准提示" tabindex="-1"><a class="header-anchor" href="#空指针异常精准提示" aria-hidden="true">#</a> 空指针异常精准提示</h3><p>通过 JVM 参数中添加<code>-XX:+ShowCodeDetailsInExceptionMessages</code>，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">.</span>i <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span> <span class="token comment">// 假设这段代码会发生空指针</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Java 14 之前：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>NullPointerException</span>
    at <span class="token class-name">NullPointerExample</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">NullPointerExample</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 14 之后：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">// 增加参数后提示的异常中很明确的告知了哪里为空导致</span>
<span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>NullPointerException</span><span class="token operator">:</span>
        <span class="token class-name">Cannot</span> read field <span class="token char">&#39;c&#39;</span> because <span class="token char">&#39;a.b&#39;</span> is <span class="token keyword">null</span><span class="token punctuation">.</span>
    at <span class="token class-name">Prog</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">Prog</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch-的增强-转正" tabindex="-1"><a class="header-anchor" href="#switch-的增强-转正" aria-hidden="true">#</a> switch 的增强(转正)</h3><p>Java12 引入的 switch（预览特性）在 Java14 变为正式版本，不需要增加参数来启用，直接在 JDK14 中就能使用。</p><p>Java12 为 switch 表达式引入了类似 lambda 语法条件匹配成功后的执行块，不需要多写 break ，Java13 提供了 <code>yield</code> 来在 block 中返回值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;W&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F&quot;</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;MWF&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;T&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;TH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;S&quot;</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;TTS&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>day<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">yield</span> <span class="token string">&quot;Please insert a valid day.&quot;</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                    <span class="token keyword">yield</span> <span class="token string">&quot;Looks like a Sunday.&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览新特性" tabindex="-1"><a class="header-anchor" href="#预览新特性" aria-hidden="true">#</a> 预览新特性</h3><h4 id="record-关键字" tabindex="-1"><a class="header-anchor" href="#record-关键字" aria-hidden="true">#</a> record 关键字</h4><p><code>record</code> 关键字可以简化 <strong>数据类</strong>（一个 Java 类一旦实例化就不能再修改）的定义方式，使用 <code>record</code> 代替 <code>class</code> 定义的类，只需要声明属性，就可以在获得属性的访问方法，以及 <code>toString()</code>，<code>hashCode()</code>, <code>equals()</code>方法</p><p>类似于使用 <code>class</code> 定义类，同时使用了 lombok 插件，并打上了<code>@Getter,@ToString,@EqualsAndHashCode</code>注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 这个类具有两个特征
 * 1. 所有成员属性都是final
 * 2. 全部方法由构造方法，和两个成员属性访问器组成（共三个）
 * 那么这种类就很适合使用record来声明
 */</span>
<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">double</span> length<span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">double</span> width<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">double</span> length<span class="token punctuation">,</span> <span class="token keyword">double</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">double</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> length<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">double</span> <span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> width<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 1. 使用record声明的类会自动拥有上面类中的三个方法
 * 2. 在这基础上还附赠了equals()，hashCode()方法以及toString()方法
 * 3. toString方法中包括所有成员属性的字符串表示形式及其名称
 */</span>
<span class="token keyword">record</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">float</span> length<span class="token punctuation">,</span> <span class="token keyword">float</span> width<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文本块" tabindex="-1"><a class="header-anchor" href="#文本块" aria-hidden="true">#</a> 文本块</h4><p>Java14 中，文本块依然是预览特性，不过，其引入了两个新的转义字符：</p><ul><li><code>\\</code> : 表示行尾，不引入换行符</li><li><code>\\s</code> ：表示单个空格</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;凡心所向，素履所往，生如逆旅，一苇以航。&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>&quot;
        凡心所向，素履所往， \\
        生如逆旅，一苇以航。<span class="token string">&quot;&quot;</span>&quot;<span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 凡心所向，素履所往， 生如逆旅，一苇以航。</span>
<span class="token class-name">String</span> text <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
        java
        c++\\sphp
        &quot;&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出：</span>
java
c<span class="token operator">++</span> php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="instanceof-增强" tabindex="-1"><a class="header-anchor" href="#instanceof-增强" aria-hidden="true">#</a> instanceof 增强</h4><p>依然是<strong>预览特性</strong> ，Java 12 新特性中介绍过。</p><h3 id="java14-其他特性" tabindex="-1"><a class="header-anchor" href="#java14-其他特性" aria-hidden="true">#</a> Java14 其他特性</h3><ul><li>从 Java11 引入的 ZGC 作为继 G1 过后的下一代 GC 算法，从支持 Linux 平台到 Java14 开始支持 MacOS 和 Window（个人感觉是终于可以在日常开发工具中先体验下 ZGC 的效果了，虽然其实 G1 也够用）</li><li>移除了 CMS(Concurrent Mark Sweep) 垃圾收集器（功成而退）</li><li>新增了 jpackage 工具，标配将应用打成 jar 包外，还支持不同平台的特性包，比如 linux 下的<code>deb</code>和<code>rpm</code>，window 平台下的<code>msi</code>和<code>exe</code></li></ul><h2 id="java15" tabindex="-1"><a class="header-anchor" href="#java15" aria-hidden="true">#</a> Java15</h2><h3 id="charsequence" tabindex="-1"><a class="header-anchor" href="#charsequence" aria-hidden="true">#</a> CharSequence</h3><p><code>CharSequence</code> 接口添加了一个默认方法 <code>isEmpty()</code> 来判断字符序列为空，如果是则返回 true。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="treemap" tabindex="-1"><a class="header-anchor" href="#treemap" aria-hidden="true">#</a> TreeMap</h3><p><code>TreeMap</code> 新引入了下面这些方法：</p><ul><li><code>putIfAbsent()</code></li><li><code>computeIfAbsent()</code></li><li><code>computeIfPresent()</code></li><li><code>compute()</code></li><li><code>merge()</code></li></ul><h3 id="zgc-转正" tabindex="-1"><a class="header-anchor" href="#zgc-转正" aria-hidden="true">#</a> ZGC(转正)</h3><p>Java11 的时候 ，ZGC 还在试验阶段。</p><p>当时，ZGC 的出现让众多 Java 开发者看到了垃圾回收器的另外一种可能，因此备受关注。</p><p>经过多个版本的迭代，不断的完善和修复问题，ZGC 在 Java 15 已经可以正式使用了！</p><p>不过，默认的垃圾回收器依然是 G1。你可以通过下面的参数启动 ZGC：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-XX:+UseZGC</span> className
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="eddsa-数字签名算法" tabindex="-1"><a class="header-anchor" href="#eddsa-数字签名算法" aria-hidden="true">#</a> EdDSA(数字签名算法)</h3><p>新加入了一个安全性和性能都更强的基于 Edwards-Curve Digital Signature Algorithm （EdDSA）实现的数字签名算法。</p><p>虽然其性能优于现有的 ECDSA 实现，不过，它并不会完全取代 JDK 中现有的椭圆曲线数字签名算法( ECDSA)。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">KeyPairGenerator</span> kpg <span class="token operator">=</span> <span class="token class-name">KeyPairGenerator</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Ed25519&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">KeyPair</span> kp <span class="token operator">=</span> kpg<span class="token punctuation">.</span><span class="token function">generateKeyPair</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> msg <span class="token operator">=</span> <span class="token string">&quot;test_string&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Signature</span> sig <span class="token operator">=</span> <span class="token class-name">Signature</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Ed25519&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sig<span class="token punctuation">.</span><span class="token function">initSign</span><span class="token punctuation">(</span>kp<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sig<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s <span class="token operator">=</span> sig<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> encodedString <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encodeToString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>encodedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0Hc0lxxASZNvS52WsvnncJOH/mlFhnA8Tc6D/k5DtAX5BSsNVjtPF4R4+yMWXVjrvB2mxVXmChIbki6goFBgAg==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文本块-转正" tabindex="-1"><a class="header-anchor" href="#文本块-转正" aria-hidden="true">#</a> 文本块(转正)</h3><p>在 Java 15 ，文本块是正式的功能特性了。</p><h3 id="隐藏类-hidden-classes" tabindex="-1"><a class="header-anchor" href="#隐藏类-hidden-classes" aria-hidden="true">#</a> 隐藏类(Hidden Classes)</h3><p>隐藏类是为框架（frameworks）所设计的，隐藏类不能直接被其他类的字节码使用，只能在运行时生成类并通过反射间接使用它们。</p><h3 id="预览新特性-1" tabindex="-1"><a class="header-anchor" href="#预览新特性-1" aria-hidden="true">#</a> 预览新特性</h3><h4 id="密封类" tabindex="-1"><a class="header-anchor" href="#密封类" aria-hidden="true">#</a> 密封类</h4><p>Java 15 对 Java 14 中引入的预览新特性进行了增强，主要是引入了一个新的概念 <strong>密封类（Sealed Classes）。</strong></p><p>密封类可以对继承或者实现它们的类进行限制。</p><p>比如抽象类 <code>Person</code> 只允许 <code>Employee</code> 和 <code>Manager</code> 继承。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">Person</span>
    <span class="token keyword">permits</span> <span class="token class-name">Employee</span><span class="token punctuation">,</span> <span class="token class-name">Manager</span> <span class="token punctuation">{</span>

    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，任何扩展密封类的类本身都必须声明为 <code>sealed</code>、<code>non-sealed</code> 或 <code>final</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">non-sealed</span> <span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20210820153955587.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果允许扩展的子类和封闭类在同一个源代码文件里，封闭类可以不使用 permits 语句，Java 编译器将检索源文件，在编译期为封闭类添加上许可的子类。</p><h4 id="instanceof-模式匹配" tabindex="-1"><a class="header-anchor" href="#instanceof-模式匹配" aria-hidden="true">#</a> instanceof 模式匹配</h4><p>Java 15 并没有对此特性进行调整，继续预览特性，主要用于接受更多的使用反馈。</p><p>在未来的 Java 版本中，Java 的目标是继续完善 <code>instanceof</code> 模式匹配新特性。</p><h3 id="java15-其他新特性" tabindex="-1"><a class="header-anchor" href="#java15-其他新特性" aria-hidden="true">#</a> Java15 其他新特性</h3><ul><li><strong>Nashorn JavaScript 引擎彻底移除</strong> ：Nashorn 从 Java8 开始引入的 JavaScript 引擎，Java9 对 Nashorn 做了些增强，实现了一些 ES6 的新特性。在 Java 11 中就已经被弃用，到了 Java 15 就彻底被删除了。</li><li><strong>DatagramSocket API 重构</strong></li><li><strong>禁用和废弃偏向锁（Biased Locking）</strong> ： 偏向锁的引入增加了 JVM 的复杂性大于其带来的性能提升。不过，你仍然可以使用 <code>-XX:+UseBiasedLocking</code> 启用偏向锁定，但它会提示 这是一个已弃用的 API。</li><li>......</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="关于预览特性" tabindex="-1"><a class="header-anchor" href="#关于预览特性" aria-hidden="true">#</a> 关于预览特性</h3><p>先贴一段 oracle 官网原文：<code>This is a preview feature, which is a feature whose design, specification, and implementation are complete, but is not permanent, which means that the feature may exist in a different form or not at all in future JDK releases. To compile and run code that contains preview features, you must specify additional command-line options.</code></p><p>这是一个预览功能，该功能的设计，规格和实现是完整的，但不是永久性的，这意味着该功能可能以其他形式存在或在将来的 JDK 版本中根本不存在。 要编译和运行包含预览功能的代码，必须指定其他命令行选项。</p><p>就以<code>switch</code>的增强为例子，从 Java12 中推出，到 Java13 中将继续增强，直到 Java14 才正式转正进入 JDK 可以放心使用，不用考虑后续 JDK 版本对其的改动或修改</p><p>一方面可以看出 JDK 作为标准平台在增加新特性的严谨态度，另一方面个人认为是对于预览特性应该采取审慎使用的态度。特性的设计和实现容易，但是其实际价值依然需要在使用中去验证</p><h3 id="jvm-虚拟机优化" tabindex="-1"><a class="header-anchor" href="#jvm-虚拟机优化" aria-hidden="true">#</a> JVM 虚拟机优化</h3><p>每次 Java 版本的发布都伴随着对 JVM 虚拟机的优化，包括对现有垃圾回收算法的改进，引入新的垃圾回收算法，移除老旧的不再适用于今天的垃圾回收算法等</p><p>整体优化的方向是<strong>高效，低时延的垃圾回收表现</strong></p><p>对于日常的应用开发者可能比较关注新的语法特性，但是从一个公司角度来说，在考虑是否升级 Java 平台时更加考虑的是<strong>JVM 运行时的提升</strong></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,74),r={href:"https://docs.oracle.com/en/java/javase/14/language/records.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.techgeeknext.com/java/java14-features",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.journaldev.com/37273/java-14-features",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mkyong.com/java/what-is-new-in-java-15/",target:"_blank",rel:"noopener noreferrer"};function h(g,b){const s=l("ExternalLinkIcon");return p(),o("div",null,[c(" more "),u,a("ul",null,[a("li",null,[n("Oracle Java14 record "),a("a",r,[n("https://docs.oracle.com/en/java/javase/14/language/records.html"),e(s)])]),a("li",null,[n("java14-features "),a("a",k,[n("https://www.techgeeknext.com/java/java14-features"),e(s)])]),a("li",null,[n("Java 14 Features : "),a("a",v,[n("https://www.journaldev.com/37273/java-14-features"),e(s)])]),a("li",null,[n("What is new in Java 15: "),a("a",m,[n("https://mkyong.com/java/what-is-new-in-java-15/"),e(s)])])])])}const w=t(d,[["render",h],["__file","java14-15.html.vue"]]);export{w as default};
