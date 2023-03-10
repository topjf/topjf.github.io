import{_ as i,X as o,Y as c,Z as r,$ as e,a0 as a,a2 as t,a1 as s,D as l}from"./framework-10d91a2c.js";const p="/assets/true-clip_image002-6bc4515e.png",d={},u=e("h1",null,"gitlab仓库管理",-1),h={href:"http://www.21yunwei.com/archives/4351",target:"_blank",rel:"noopener noreferrer"},b=s(`<h2 id="一、安装配置依赖项" tabindex="-1"><a class="header-anchor" href="#一、安装配置依赖项" aria-hidden="true">#</a> 一、安装配置依赖项</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">curl</span> openssh-server openssh-clients postfix cronie <span class="token parameter variable">-y</span>

<span class="token function">sudo</span> <span class="token function">service</span> postfix start

<span class="token function">sudo</span> <span class="token function">chkconfig</span> postfix on

<span class="token function">sudo</span> lokkit <span class="token parameter variable">-s</span> http <span class="token parameter variable">-s</span> <span class="token function">ssh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={id:"二、添加gitlab仓库-并安装到服务器上",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#二、添加gitlab仓库-并安装到服务器上","aria-hidden":"true"},"#",-1),_={href:"http://www.21yunwei.com/archives/category/ywtech/codemanage/gitlab",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el6/gitlab-ce-10.1.4-ce.0.el6.x86_64.rpm",target:"_blank",rel:"noopener noreferrer"},v=s('<p>rpm -ivh gitlab-ce-XXX.rpm</p><p>启动gitlab：<code>sudo gitlab-ctl reconfigure</code></p><p>如果访问 <code>http:127.0.0.1:80</code> 无法访问，然后用命令查看日志（ <code>gitlab-ctl tail</code> #查看所有日志）：gitlab-ctl tail 返现80端口被占用。</p><p>修改gitlab启动端口：</p><p>gitlab本身采用80端口，如安装前服务器有启用80，安装完访问会报错。需更改gitlab的默认端口。修改 <code>vim /etc/gitlab/gitlab.rb：external_url &#39;http://10.211.55.8:90&#39;</code></p><p>执行 <code>sudo gitlab-ctl reconfigure</code> 使之生效，访问如下：</p><p>管理员账户为root，密码首次登陆会让你自己更改。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>gitlab-ctl start|stop|status|restart</p>',9);function k(x,w){const n=l("ExternalLinkIcon");return o(),c("div",null,[r(" more "),u,e("p",null,[e("a",h,[a("CentOS服务器上搭建Gitlab安装步骤"),t(n)])]),b,e("h2",g,[m,a(" 二、添加"),e("a",_,[a("GitLab"),t(n)]),a("仓库,并安装到服务器上")]),e("p",null,[a("wget "),e("a",f,[a("https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el6/gitlab-ce-10.1.4-ce.0.el6.x86_64.rpm"),t(n)])]),v])}const N=i(d,[["render",k],["__file","gitlab.html.vue"]]);export{N as default};