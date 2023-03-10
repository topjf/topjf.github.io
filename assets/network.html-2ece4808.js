import{_ as e,X as a,Y as i,Z as d,a1 as c}from"./framework-10d91a2c.js";const o="/assets/true-tcp3-87f4bfd4.png",r="/assets/tcp5-f66ee7ce.webp",n="/assets/true-tcp4-9a45935a.png",t="/assets/true-tcp1-f5387fd7.png",p="/assets/true-tcp2-85c0ec41.png",s="/assets/true-tcp6-283b7b88.jpeg",l={},h=c('<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="网络4-5-7模型" tabindex="-1"><a class="header-anchor" href="#网络4-5-7模型" aria-hidden="true">#</a> 网络4-5-7模型</h3><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h2><p>TCP 在传输之前会进行三次沟通，一般称为“三次握手”，传完数据断开的时候要进行四次沟通，一般称为“四次挥手”。</p><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>客户端–发送带有 SYN 标志的数据包–⼀次握⼿–服务端</li><li>服务端–发送带有 SYN/ACK 标志的数据包–⼆次握⼿–客户端</li><li>客户端–发送带有带有 ACK 标志的数据包–三次握⼿–服务端</li></ul><h3 id="为什么要三次握手" tabindex="-1"><a class="header-anchor" href="#为什么要三次握手" aria-hidden="true">#</a> 为什么要三次握⼿？</h3><p>三次握⼿的⽬的是建⽴可靠的通信信道，说到通讯，简单来说就是数据的发送与接收，⽽三次握 ⼿最主要的⽬的就是双⽅确认⾃⼰与对⽅的发送与接收是正常的。</p><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h3><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>客户端-发送⼀个 FIN，⽤来关闭客户端到服务器的数据传送。</li><li>服务器-收到这个 FIN，它发回⼀个 ACK，确认序号为收到的序号加1，和 SYN ⼀样，⼀个 FIN 将占⽤⼀个序号</li><li>服务器-关闭与客户端的连接，发送⼀个FIN给客户端。</li><li>客户端-发回 ACK 报⽂确认，并将确认序号设置为收到序号加1。</li></ul><h2 id="a、b、c、d、e类ip地址划分依据" tabindex="-1"><a class="header-anchor" href="#a、b、c、d、e类ip地址划分依据" aria-hidden="true">#</a> A、B、C、D、E类IP地址划分依据</h2><h3 id="ip-地址的格式" tabindex="-1"><a class="header-anchor" href="#ip-地址的格式" aria-hidden="true">#</a> IP 地址的格式</h3><p>IP 地址的格式：<code>IP 地址 = 网络地址 + 主机地址</code></p><p>如果 IP 进行了子网划分：<code>则IP地址 = 网络地址 + 子网地址 + 主机地址</code></p><p>网络地址 是互联网上的节点在网络中具有的逻辑地址。 MAC 地址处于<code>数据链路层</code>，IP 地址处于<code>网络层</code>，端口号处于<code>传输层</code>。</p><p>例如 IP 地址 <code>192.168.54.4</code></p><p>显然属于一个 C 类地址，网络地址为：<code>192.168.54.0</code></p><p>主机地址为：<code>0.0.0.4</code>。</p><p>在设计互联网络时，为了便于寻址以及层次化构造网络，每个 IP 地址包括两个标示码（ID），即网络 ID 和主机 ID。 同一个物理网络上的所有主机都使用同一个网络 ID，网络上的一个主机（包括网络上的工作站，服务器和路由器等） 有一个主机 ID 与其对应。IP 地址根据网路 ID 的不同分为 5 种类型：<strong>A 类地址，B 类地址，C 类地址，D 类地址 和 E 类地址</strong>。</p><h3 id="a-类-ip-地址" tabindex="-1"><a class="header-anchor" href="#a-类-ip-地址" aria-hidden="true">#</a> A 类 IP 地址</h3><p>一个 A 类 IP 地址由一个字节的网路地址和 3 个字节主机地址组成，网络地址的最高位必须是 “0”，最高字节网络的地址范围从<code>00000000-01111111</code>。</p><p>地址范围为：<code>1.0.0.0</code>到<code>126.0.0.0</code>。默认的子网掩码为：<code>255.0.0.0</code>。</p><p>数量：可用的 A 类网络有126 个。每个网路可以容纳<code>2^24-2</code>个，约一亿多个主机。</p><p>应用：A 类地址分配给规模特别大的网络使用。A 类网络用第一个字节表示网络本身的地址，后面三个字节作为连接于网络上的主机地址。</p><p>例如 MS 和 IBM，阿里这样公司的网络。</p><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="b-类-ip-地址" tabindex="-1"><a class="header-anchor" href="#b-类-ip-地址" aria-hidden="true">#</a> B 类 IP 地址</h3><p>一个 B 类 IP 地址由 2 个字节的网路地址和 2 个字节的主机地址组成，网络地址的最高位必须是 10，</p><p>网络的地址范围从：<code>10000000.00000000-10111111.11111111</code>；</p><p>地址范围为：<code>128.0.0.0到191.255.255.255</code>，</p><p>默认的子网掩码为：<code>255.255.0.0</code>.</p><p>数量：可用的 B 类网络有：<code>2^8*64</code> 个，约有 1.6 万个，每个网络能容纳的主机有：<code>2^16</code>个，约 6 万多个。</p><p>应用：B 类地址一般分配给中性网络。</p><h3 id="c-类地址" tabindex="-1"><a class="header-anchor" href="#c-类地址" aria-hidden="true">#</a> C 类地址</h3><p>一个 C 类地址由 3 个字节的网络地址和 1 个字节的主机地址组成，网路地址的最高位必须是 “110”，</p><p>即网络地址的范围是：<code>11000000.00000000.00000000-11011111.11111111.11111111</code>，</p><p>转化为 10 进制为：<code>192.0.0.0</code>到<code>223.255.255.255</code>，</p><p>默认的子网掩码为：<code>255.255.255.0</code>.</p><p>数量：可用的 C 类网络有：<code>2^16*32</code> 个，约有 209 万个。每个网路能容纳的主机个数为：<code>254</code> 个。</p><p>应用：C 类地址一般分配给小型网路，如一般的局域网和校园网，它连接的主机数量比较少，把用户分为若干段进行管理。</p><h3 id="d-类地址" tabindex="-1"><a class="header-anchor" href="#d-类地址" aria-hidden="true">#</a> D 类地址</h3><p>D 类地址多用于多点广播（Multicast）。</p><p>D 类 IP 地址是以 <code>1110</code> 开始的，它是一个保留的地址。 它并不指向特定的网络，目前这一类地址被用在多点广播中。多点广播用来一次寻址一组计算机，它标识共享同一协议的一组计算机。</p><h3 id="e-类地址" tabindex="-1"><a class="header-anchor" href="#e-类地址" aria-hidden="true">#</a> E 类地址</h3><p>以 <code>11110</code> 开始，为将来使用保留。</p><p>注：全零 &quot;0.0.0.0&quot; 地址对应于当前的主机，全 1 地址（<code>255.255.255.255</code>）是当前子网的广播地址。</p><p>在 IP 地址 3 种主要类型里，各保留了 3 个区域作为私有地址，其地址范围如下：</p><p>IP 地址范围</p><p><code>0.0.0.0～255.255.255.255</code>，包括了 mask 地址。</p><h3 id="ip-地址划分" tabindex="-1"><a class="header-anchor" href="#ip-地址划分" aria-hidden="true">#</a> IP 地址划分</h3><ul><li>A 类地址：<code>1.0.0.1～126.255.255.254</code></li><li>B 类地址：<code>128.0.0.1～191.255.255.254</code></li><li>C 类地址：<code>192.168.0.0～192.168.255.255</code></li><li>D 类地址：<code>224.0.0.1～239.255.255.254</code></li><li>E 类地址：<code>240.0.0.1～255.255.255.254</code></li></ul><h3 id="判断两个ip地址是否是同一个网段中" tabindex="-1"><a class="header-anchor" href="#判断两个ip地址是否是同一个网段中" aria-hidden="true">#</a> 判断两个IP地址是否是同一个网段中</h3><blockquote><p>要判断两个 IP 地址是不是在同一个网段，就将它们的 IP 地址分别与子网掩码做与运算，得到的结果一网络号， 如果网络号相同，就在同一子网，否则，不在同一子网。</p></blockquote><p>例：假定选择了子网掩码255.255.254.0，现在分别将上述两个 IP 地址分别与掩码做与运算：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>211.95.165.24 11010011 01011111 10100101 00011000
255.255.254.0 11111111 11111111 111111110 00000000

与的结果是: 11010011 01011111 10100100 00000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>211.95.164.78 11010011 01011111 10100100 01001110
255.255.254.0 11111111 11111111 111111110 00000000

与的结果是: 11010011 01011111 10100100 00000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出, 得到的结果 (这个结果就是网络地址) 都是一样的，因此可以判断这两个 IP 地址在同一个子网。</p><h3 id="如果没有进行子网划分" tabindex="-1"><a class="header-anchor" href="#如果没有进行子网划分" aria-hidden="true">#</a> 如果没有进行子网划分</h3><ul><li>A 类网络的子网掩码为 <code>255.0.0.0</code></li><li>B 类网络的子网掩码为 <code>255.255.0.0</code></li><li>C 类网络的子网掩码为 <code>255.255.255.0</code></li><li>缺省情况子网掩码为 <code>255.255.255.0</code></li></ul>`,64);function u(f,g){return a(),i("div",null,[d(" more "),h])}const m=e(l,[["render",u],["__file","network.html.vue"]]);export{m as default};
