import{_ as p,X as i,Y as l,Z as o,$ as n,a0 as s,a2 as e,a1 as t,D as c}from"./framework-10d91a2c.js";const r="/assets/true-image-20190316184154726-ee8d7ece.png",u="/assets/true-image-20211208221411991-7f0e5476.png",d="/assets/true-nginx-666-53098ffd.png",k="/assets/true-nginx-888-bc46c8b3.png",v="/assets/true-1620-e56e912e.png",m="/assets/true-2839691-20220422220407496-1098118652-73c85e73.png",b="/assets/true-image-20211208223555795-7a7a004c.png",g="/assets/true-image-20211208223713227-e3390e36.png",h="/assets/true-image-20211208223732243-da282496.png",y="/assets/true-image-20220506042516462-250bc7b1.png",x="/assets/true-image-20220506042632204-514a5d1a.png",f={},_=t('<h1>Ingress</h1><h2 id="ingress-基于域名访问-不需要通过ip-port访问服务" tabindex="-1"><a class="header-anchor" href="#ingress-基于域名访问-不需要通过ip-port访问服务" aria-hidden="true">#</a> Ingress 基于域名访问，不需要通过ip：port访问服务</h2><p>ingress：通过域名、负载均衡</p><p>ingress 底层是nginx</p><blockquote><p>通过Service 发现Pod进行关联。基于域名访问。</p><p>通过Ingress Controller 实现Pod负载均衡。</p><p>支持TCP/UDP 4层负载均衡和HTTP 7层负载均衡。</p></blockquote><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h2><blockquote><p>ingress-nginx-controller 对外提供80（NodePort）端口，外部访问80转到内部service的pod【k8s内部端口（ClusterIP）】</p><p>web -》 ingress -》node：service -》 pod -》 具体程序app</p></blockquote><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="ingress-是什么" tabindex="-1"><a class="header-anchor" href="#ingress-是什么" aria-hidden="true">#</a> Ingress 是什么？</h2>',16),E={href:"https://kubernetes.io/zh/docs/concepts/services-networking/ingress/",target:"_blank",rel:"noopener noreferrer"},w=t('<figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>wildcard<span class="token punctuation">-</span>host
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;foo.bar.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/bar&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service1
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;*.foo.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/foo&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service2
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> simple<span class="token punctuation">-</span>fanout<span class="token punctuation">-</span>example
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> foo.bar.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /foo
        <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service1
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">4200</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /bar
        <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service2
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你使用 <code>kubectl apply -f</code> 创建 Ingress 时：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl describe ingress simple-fanout-example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> name<span class="token punctuation">-</span>virtual<span class="token punctuation">-</span>host<span class="token punctuation">-</span>ingress
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> foo.bar.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service1
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> bar.foo.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service2
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> name<span class="token punctuation">-</span>virtual<span class="token punctuation">-</span>host<span class="token punctuation">-</span>ingress<span class="token punctuation">-</span>no<span class="token punctuation">-</span>third<span class="token punctuation">-</span>host
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> first.bar.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service1
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> second.bar.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service2
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token punctuation">-</span> <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> service3
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本关系" tabindex="-1"><a class="header-anchor" href="#版本关系" aria-hidden="true">#</a> 版本关系</h2>`,10),N={href:"https://kubernetes.github.io/ingress-nginx/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/kubernetes/ingress-nginx/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://gitee.com/k8s_s/ingress-nginx/",target:"_blank",rel:"noopener noreferrer"},q=t("<table><thead><tr><th>Ingress-NGINX version</th><th>k8s supported version</th><th>Alpine Version</th><th>Nginx Version</th></tr></thead><tbody><tr><td>v1.3.0</td><td>1.24, 1.23, 1.22, 1.21, 1.20</td><td>3.14.6</td><td>1.19.10†</td></tr><tr><td>v1.2.1</td><td>1.23, 1.22, 1.21, 1.20, 1.19</td><td>3.14.6</td><td>1.19.10†</td></tr><tr><td>v1.2.0</td><td>1.23, 1.22, 1.21, 1.20, 1.19</td><td>3.14.6</td><td>1.19.10†</td></tr><tr><td>v1.1.3</td><td>1.23, 1.22, 1.21, 1.20, 1.19</td><td>3.14.4</td><td>1.19.10†</td></tr><tr><td>v1.1.2</td><td>1.23, 1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.1.1</td><td>1.23, 1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.1.0</td><td>1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.0.5</td><td>1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.0.4</td><td>1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.0.3</td><td>1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.0.2</td><td>1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.0.1</td><td>1.22, 1.21, 1.20, 1.19</td><td>3.14.2</td><td>1.19.9†</td></tr><tr><td>v1.0.0</td><td>1.22, 1.21, 1.20, 1.19</td><td>3.13.5</td><td>1.20.1</td></tr></tbody></table><p><strong>Ingress-nginx 版本选择</strong></p>",2),A={href:"https://gitee.com/k8s_s/ingress-nginx/blob/controller-v1.1.3/deploy/static/provider/baremetal/1.22/deploy.yaml",target:"_blank",rel:"noopener noreferrer"},I={href:"https://gitee.com/k8s_s/ingress-nginx/blob/controller-v1.2.0/deploy/static/provider/baremetal/1.22/deploy.yaml",target:"_blank",rel:"noopener noreferrer"},S={href:"https://gitee.com/k8s_s/ingress-nginx/blob/controller-v1.3.0/deploy/static/provider/baremetal/1.22/deploy.yaml",target:"_blank",rel:"noopener noreferrer"},R=t(`<p><strong>V1.2.0-yaml 文件需要的版本镜像2个</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### V1.2.0</span>
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/kube-webhook-certgen:v1.5.2
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/nginx-ingress-controller:1.2.0
--------------------------------------------------------------------------
<span class="token comment">### V1.3.0</span>
<span class="token function">docker</span> pull wangshun1024/kube-webhook-certgen:v1.1.1
<span class="token function">docker</span> pull liangjw/kube-webhook-certgen:v1.1.1  （使用）
<span class="token function">docker</span> pull dyrnq/kube-webhook-certgen:v1.3.0
-------------
<span class="token function">docker</span> pull bitnami/nginx-ingress-controller:1.3.0
-------------------------------------
<span class="token function">docker</span> tag liangjw/kube-webhook-certgen:v1.1.1 registry.cn-chengdu.aliyuncs.com/jinfang/kube-webhook-certgen:v1.1.1
<span class="token function">docker</span> tag bitnami/nginx-ingress-controller:1.3.0 registry.cn-chengdu.aliyuncs.com/jinfang/nginx-ingress-controller:1.3.0
-------------------------------------
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/kube-webhook-certgen:v1.1.1
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/nginx-ingress-controller:1.3.0
-------------------------------------
<span class="token function">docker</span> rmi liangjw/kube-webhook-certgen:v1.1.1
<span class="token function">docker</span> rmi bitnami/nginx-ingress-controller:1.3.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C={href:"https://hub.docker.com/r/bitnami/nginx-ingress-controller/tags",target:"_blank",rel:"noopener noreferrer"},D={href:"https://hub.docker.com/search?q=kube-webhook-certgen",target:"_blank",rel:"noopener noreferrer"},z=t(`<h2 id="ingress注意事项" tabindex="-1"><a class="header-anchor" href="#ingress注意事项" aria-hidden="true">#</a> Ingress注意事项</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiVersion: networking.k8s.io/v1
import &quot;k8s.io/api/networking/v1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文档教程" tabindex="-1"><a class="header-anchor" href="#文档教程" aria-hidden="true">#</a> 文档教程</h2>`,3),V={href:"https://kubesphere.io/zh/learn/level_2/lesson_9/content/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.yuque.com/leifengyang/oncloud/ctiwgo#JEtqN",target:"_blank",rel:"noopener noreferrer"},$=t(`<h2 id="_1、部署-删除-ingress-服务" tabindex="-1"><a class="header-anchor" href="#_1、部署-删除-ingress-服务" aria-hidden="true">#</a> 1、部署&amp;删除 ingress 服务</h2><p>kubectl apply -f ingress-controller-1.2.0.yaml</p><p>kubectl delete -f ingress-controller-1.2.0.yaml</p><h2 id="_2、创建-svc、deploy-nginx、tomcat" tabindex="-1"><a class="header-anchor" href="#_2、创建-svc、deploy-nginx、tomcat" aria-hidden="true">#</a> 2、创建 svc、deploy（nginx、tomcat）</h2><h3 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat" aria-hidden="true">#</a> tomcat</h3><p>kapp tomcat6-deploy.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/jinfang/tomcat<span class="token punctuation">:</span>9.0.62<span class="token punctuation">-</span>jre11<span class="token punctuation">-</span>temurin<span class="token punctuation">-</span>focal<span class="token punctuation">-</span>final
        <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8002</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>kapp nginx-deploy.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>chengdu.aliyuncs.com/jinfang/nginx<span class="token punctuation">:</span>1.21.6<span class="token punctuation">-</span>alpine
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
<span class="token punctuation">---</span>        
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8001</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、创建-ingress-规则" tabindex="-1"><a class="header-anchor" href="#_3、创建-ingress-规则" aria-hidden="true">#</a> 3、创建 ingress 规则</h2>`,11),G={href:"https://v1-22.docs.kubernetes.io/zh/docs/concepts/services-networking/ingress/",target:"_blank",rel:"noopener noreferrer"},j=t(`<h3 id="tomcat-1" tabindex="-1"><a class="header-anchor" href="#tomcat-1" aria-hidden="true">#</a> tomcat</h3><p>kapp ingress-tomcat.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>tomcat
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token comment"># 重写配置</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/rewrite-target</span><span class="token punctuation">:</span> /$2
    <span class="token comment"># 限流</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/limit-rps</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
    <span class="token comment"># 跨域</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/enable-cors</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>    
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;tomcat.k8s.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8002</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;tomcat.k8s.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/nginx(/|$)(.*)&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-限流-跨域" tabindex="-1"><a class="header-anchor" href="#nginx-限流-跨域" aria-hidden="true">#</a> nginx + 限流+跨域</h3><p>kapp ingress-nginx.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token comment"># 重写配置 # </span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/rewrite-target</span><span class="token punctuation">:</span> /$2
    <span class="token comment"># 限流</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/limit-rps</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
    <span class="token comment"># 跨域</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/enable-cors</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx.k8s.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8001</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx.k8s.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/tomcat(/|$)(.*)&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),L={href:"http://test.nginx.com",target:"_blank",rel:"noopener noreferrer"},M=n("h2",{id:"报错validate-nginx-ingress-kubernetes-io",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#报错validate-nginx-ingress-kubernetes-io","aria-hidden":"true"},"#"),s(" 报错"),n("code",null,"validate.nginx.ingress.kubernetes.io")],-1),U={href:"http://validate.nginx.ingress.kubernetes.io",target:"_blank",rel:"noopener noreferrer"},B={href:"https://ingress-nginx-controller",target:"_blank",rel:"noopener noreferrer"},Y=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kg validatingwebhookconfigurations     --》  ingress-nginx-admission

删除：kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><p>补充：另外需要在 ingress-controller-1.2.0.yaml 部署配置中</p><ul><li>将 <code>rbac.authorization.k8s.io/v1beta1</code> 改为 <code>rbac.authorization.k8s.io/v1</code></li><li>将 <code>image: quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.29.0</code> 改为 <code>image: docker.io/bitnami/nginx-ingress-controller:latest</code></li></ul><p>4、更新 Ingress</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl describe ingress <span class="token variable">$Name</span>
kubectl edit ingress <span class="token variable">$Name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="n、查看状态" tabindex="-1"><a class="header-anchor" href="#n、查看状态" aria-hidden="true">#</a> n、查看状态</h2><p>更多命令：<a href="#k8s-alias">k8s-alias</a></p><p>空间名称：kg pods --all-namespaces -o wide</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span>$ kg pods --all-namespaces <span class="token parameter variable">-o</span> wide
NAMESPACE       NAME                                        READY   STATUS      RESTARTS   AGE     IP                NODE         NOMINATED NODE   READINESS GATES
default         nginx-689b55fcd-6dp5r                       <span class="token number">1</span>/1     Running     <span class="token number">0</span>          30m     <span class="token number">10.244</span>.2.4        node-122     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default         nginx-689b55fcd-n7fg4                       <span class="token number">1</span>/1     Running     <span class="token number">0</span>          30m     <span class="token number">10.244</span>.1.4        node-123     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default         nginx-689b55fcd-r7bxt                       <span class="token number">1</span>/1     Running     <span class="token number">0</span>          30m     <span class="token number">10.244</span>.3.4        node-121     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default         tomcat-549f8d66bc-fcjfp                     <span class="token number">1</span>/1     Running     <span class="token number">0</span>          30m     <span class="token number">10.244</span>.1.5        node-123     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default         tomcat-549f8d66bc-msfvd                     <span class="token number">1</span>/1     Running     <span class="token number">0</span>          30m     <span class="token number">10.244</span>.2.5        node-122     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
default         tomcat-549f8d66bc-w85zm                     <span class="token number">1</span>/1     Running     <span class="token number">0</span>          30m     <span class="token number">10.244</span>.3.5        node-121     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
ingress-nginx   ingress-nginx-admission-create--1-hbsxj     <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          33m     <span class="token number">10.244</span>.2.3        node-122     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
ingress-nginx   ingress-nginx-controller-5898458b5c-5wwxs   <span class="token number">1</span>/1     Running     <span class="token number">0</span>          33m     <span class="token number">10.244</span>.1.3        node-123     <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kg pod -n ingress-nginx -o wide</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kg pod <span class="token parameter variable">-n</span> ingress-nginx <span class="token parameter variable">-o</span> wide
NAME                                        READY   STATUS      RESTARTS   AGE   IP            NODE    NOMINATED NODE   READINESS GATES
ingress-nginx-admission-create-h6wmw        <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          47m   <span class="token number">10.244</span>.3.22   node3   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
ingress-nginx-admission-patch-27bm2         <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          47m   <span class="token number">10.244</span>.1.21   node2   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
ingress-nginx-controller-5898458b5c-x98tl   <span class="token number">1</span>/1     Running     <span class="token number">0</span>          47m   <span class="token number">10.244</span>.3.23   node3   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-查看ingress-nginx所有服务-kg-all-n-ingress-nginx-o-wide" tabindex="-1"><a class="header-anchor" href="#用-查看ingress-nginx所有服务-kg-all-n-ingress-nginx-o-wide" aria-hidden="true">#</a> （用）查看ingress-nginx所有服务：kg all -n ingress-nginx -o wide</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@master ~]# kg all -n ingress-nginx -o wide
NAME                                            READY   STATUS      RESTARTS   AGE   IP           NODE    NOMINATED NODE   READINESS GATES
pod/ingress-nginx-admission-create--1-xnxc7     0/1     Completed   0          20m   10.244.2.6   node2   &lt;none&gt;           &lt;none&gt;
pod/ingress-nginx-controller-86d779b9cc-zrqd7   1/1     Running     0          20m   10.244.1.6   node1   &lt;none&gt;           &lt;none&gt;

NAME                                         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE   SELECTOR
service/ingress-nginx-controller             NodePort    10.96.187.118   &lt;none&gt;        80:31487/TCP,443:31201/TCP   20m   app.kubernetes.io/component=controller,app.kubernetes.io/instance=ingress-nginx,app.kubernetes.io/name=ingress-nginx
service/ingress-nginx-controller-admission   ClusterIP   10.96.203.101   &lt;none&gt;        443/TCP                      20m   app.kubernetes.io/component=controller,app.kubernetes.io/instance=ingress-nginx,app.kubernetes.io/name=ingress-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-kg-ingress-owide、kg-pod-show-labels" tabindex="-1"><a class="header-anchor" href="#用-kg-ingress-owide、kg-pod-show-labels" aria-hidden="true">#</a> （用）kg ingress -owide、kg pod --show-labels</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span><span class="token comment"># kg ingress -owide</span>
NAME            CLASS   HOSTS                           ADDRESS           PORTS   AGE
ingress-nginx   nginx   test.nginx.com,test.nginx.com   <span class="token number">192.168</span>.101.122   <span class="token number">80</span>      20h
<span class="token punctuation">[</span>root@master-120 ~<span class="token punctuation">]</span><span class="token comment"># kg pod --show-labels</span>
NAME                      READY   STATUS    RESTARTS      AGE   LABELS
nginx-689b55fcd-2c8v8     <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   20h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,pod-template-hash<span class="token operator">=</span>689b55fcd
nginx-689b55fcd-5qpkp     <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   20h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,pod-template-hash<span class="token operator">=</span>689b55fcd
nginx-689b55fcd-gpdqz     <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   20h   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx,pod-template-hash<span class="token operator">=</span>689b55fcd
tomcat-549f8d66bc-bln66   <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   20h   <span class="token assign-left variable">app</span><span class="token operator">=</span>tomcat,pod-template-hash<span class="token operator">=</span>549f8d66bc
tomcat-549f8d66bc-rqhvm   <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   20h   <span class="token assign-left variable">app</span><span class="token operator">=</span>tomcat,pod-template-hash<span class="token operator">=</span>549f8d66bc
tomcat-549f8d66bc-zkc94   <span class="token number">1</span>/1     Running   <span class="token number">1</span> <span class="token punctuation">(</span>19h ago<span class="token punctuation">)</span>   20h   <span class="token assign-left variable">app</span><span class="token operator">=</span>tomcat,pod-template-hash<span class="token operator">=</span>549f8d66bc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-查看svc服务-kg-svc-n-ingress-nginx" tabindex="-1"><a class="header-anchor" href="#用-查看svc服务-kg-svc-n-ingress-nginx" aria-hidden="true">#</a> （用）查看svc服务：kg svc -n ingress-nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kg svc <span class="token parameter variable">-n</span> ingress-nginx
NAME                                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
ingress-nginx-controller             NodePort    <span class="token number">10.96</span>.123.65    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:31861/TCP,443:31236/TCP   48m
ingress-nginx-controller-admission   ClusterIP   <span class="token number">10.96</span>.166.101   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP                      48m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看-pod-描述-k-describe-pod-n-ingress-nginx" tabindex="-1"><a class="header-anchor" href="#查看-pod-描述-k-describe-pod-n-ingress-nginx" aria-hidden="true">#</a> 查看 pod 描述：k describe pod -n ingress-nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ k describe pod  <span class="token parameter variable">-n</span> ingress-nginx
Name:         ingress-nginx-admission-create-h6wmw
Namespace:    ingress-nginx
Priority:     <span class="token number">0</span>
Node:         node3/192.168.101.123
Start Time:   Fri, 06 May <span class="token number">2022</span> 03:30:55 +0800
IP:           <span class="token number">10.244</span>.3.22
IPs:
  IP:           <span class="token number">10.244</span>.3.22
Name:         ingress-nginx-admission-patch-27bm2
Namespace:    ingress-nginx
Priority:     <span class="token number">0</span>
Node:         node2/192.168.101.122
IP:           <span class="token number">10.244</span>.1.21
IPs:
  IP:           <span class="token number">10.244</span>.1.21
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用-查看-ingress-描述-kubectl-describe-ingress" tabindex="-1"><a class="header-anchor" href="#用-查看-ingress-描述-kubectl-describe-ingress" aria-hidden="true">#</a> （用）查看 ingress 描述：kubectl describe ingress</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kubectl describe ingress ingress-nginx
Name:             ingress-nginx
Namespace:        default
Address:          <span class="token number">192.168</span>.101.123
Default backend:  default-http-backend:80 <span class="token punctuation">(</span><span class="token operator">&lt;</span>error: endpoints <span class="token string">&quot;default-http-backend&quot;</span> not found<span class="token operator">&gt;</span><span class="token punctuation">)</span>
Rules:
  Host            Path  Backends
  ----            ----  --------
  test.nginx.com
                  /   nginx:8000 <span class="token punctuation">(</span><span class="token number">10.244</span>.1.30:80,10.244.1.31:80,10.244.3.28:80<span class="token punctuation">)</span>
  test.nginx.com
                  /nginx<span class="token punctuation">(</span>/<span class="token operator">|</span>$<span class="token punctuation">)</span><span class="token punctuation">(</span>.*<span class="token punctuation">)</span>   nginx:8000 <span class="token punctuation">(</span><span class="token number">10.244</span>.1.30:80,10.244.1.31:80,10.244.3.28:80<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kubectl describe ingress ingress-tomcat
Name:             ingress-tomcat
Namespace:        default
Address:          <span class="token number">192.168</span>.101.123
Default backend:  default-http-backend:80 <span class="token punctuation">(</span><span class="token operator">&lt;</span>error: endpoints <span class="token string">&quot;default-http-backend&quot;</span> not found<span class="token operator">&gt;</span><span class="token punctuation">)</span>
Rules:
  Host             Path  Backends
  ----             ----  --------
  test.tomcat.com
                      tomcat:8001 <span class="token punctuation">(</span><span class="token number">10.244</span>.1.32:8080,10.244.1.33:8080,10.244.3.30:8080<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="k-logs-ingress-nginx" tabindex="-1"><a class="header-anchor" href="#k-logs-ingress-nginx" aria-hidden="true">#</a> k logs ingress-nginx</h3><h2 id="_5、访问" tabindex="-1"><a class="header-anchor" href="#_5、访问" aria-hidden="true">#</a> 5、访问</h2>`,25),H={href:"http://tomcat.k8s.com:31839",target:"_blank",rel:"noopener noreferrer"},X={href:"http://nginx.k8s.com:31839",target:"_blank",rel:"noopener noreferrer"},J=t(`<h2 id="处理tomcat-404" tabindex="-1"><a class="header-anchor" href="#处理tomcat-404" aria-hidden="true">#</a> 处理tomcat 404</h2><p>查看日志： kubectl logs tomcat-xx</p><p>进入容器中查看:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kg pod <span class="token parameter variable">-o</span> wide
NAME                     READY   STATUS    RESTARTS   AGE   IP            NODE    NOMINATED NODE   READINESS GATES
tomcat-b8cdc6f6b-7ngdx   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          8m    <span class="token number">10.244</span>.3.12   node3   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
tomcat-b8cdc6f6b-97g7f   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          8m    <span class="token number">10.244</span>.1.14   node2   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
tomcat-b8cdc6f6b-r2w26   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          8m    <span class="token number">10.244</span>.1.13   node2   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

<span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kubectl <span class="token builtin class-name">exec</span> xx <span class="token parameter variable">-it</span> -- /bin/bash
<span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kubectl <span class="token builtin class-name">exec</span> xx <span class="token parameter variable">-it</span> -- /bin/bash
<span class="token punctuation">[</span>a@master ~<span class="token punctuation">]</span>$ kubectl <span class="token builtin class-name">exec</span> xx <span class="token parameter variable">-it</span> -- /bin/bash

root@tomcat-xx-8sdxp:/usr/local/tomcat<span class="token comment"># ls</span>
    BUILDING.txt  LICENSE  README.md  RUNNING.txt  conf  logs     temp     webapps.dist
    CONTRIBUTING.md  NOTICE   RELEASE-NOTES  bin       lib   native-jni-lib  webapps  work
root@tomcat-xx-8sdxp:/usr/local/tomcat<span class="token comment"># cp -R webapps.dist/. webapps/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr>',7);function F(W,Z){const a=c("ExternalLinkIcon");return i(),l("div",null,[o(" more "),_,n("p",null,[n("a",E,[s("Ingress文档"),e(a)])]),w,n("p",null,[n("a",N,[s("kubernetes.github.io/ingress-nginx"),e(a)])]),n("p",null,[n("a",P,[s("github.com/kubernetes/ingress-nginx"),e(a)])]),n("p",null,[n("a",T,[s("gitee.com/k8s_s/ingress-nginx"),e(a)])]),q,n("blockquote",null,[n("p",null,[n("a",A,[s("https://gitee.com/k8s_s/ingress-nginx/blob/controller-v1.1.3/deploy/static/provider/baremetal/1.22/deploy.yaml"),e(a)])]),n("p",null,[n("a",I,[s("https://gitee.com/k8s_s/ingress-nginx/blob/controller-v1.2.0/deploy/static/provider/baremetal/1.22/deploy.yaml"),e(a)])]),n("p",null,[n("a",S,[s("https://gitee.com/k8s_s/ingress-nginx/blob/controller-v1.3.0/deploy/static/provider/baremetal/1.22/deploy.yaml"),e(a)])])]),R,n("p",null,[n("a",C,[s("nginx-ingress-controller"),e(a)]),s("、"),n("a",D,[s("kube-webhook-certgen:1.5.2"),e(a)])]),z,n("p",null,[n("a",V,[s("kubesphere.io/zh/learn/level_2/lesson_9/content"),e(a)])]),n("p",null,[n("a",O,[s("www.yuque.com/leifengyang/oncloud/ctiwgo#JEtqN"),e(a)])]),$,n("p",null,[n("a",G,[s("v1-22.docs.kubernetes.io/zh/docs/concepts/services-networking/ingress/"),e(a)])]),j,n("p",null,[n("a",L,[s("http://test.nginx.com"),e(a)]),s(":")]),M,n("p",null,[s('error when creating "ingress-nginx.yaml": Internal error occurred: failed calling webhook "'),n("a",U,[s("validate.nginx.ingress.kubernetes.io"),e(a)]),s('": Post "'),n("a",B,[s("https://ingress-nginx-controller"),e(a)]),s(' -admission.ingress-nginx.svc:443/networking/v1/ingresses?timeout=10s": x509: certificate signed by unknown authority')]),Y,n("p",null,[n("a",H,[s("http://tomcat.k8s.com:31839"),e(a)])]),n("p",null,[n("a",X,[s("http://nginx.k8s.com:31839"),e(a)])]),J])}const Q=p(f,[["render",F],["__file","ingress.html.vue"]]);export{Q as default};
