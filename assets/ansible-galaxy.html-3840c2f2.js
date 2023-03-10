import{_ as a,X as s,Y as o,Z as r,$ as e,a0 as l,a2 as n,a1 as t,D as c}from"./framework-10d91a2c.js";const d={},v=e("h1",null,"ansible-galaxy",-1),u={href:"http://ansible.com.cn/docs/intro.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://pan.baidu.com/s/1fkosURl4HaYZALtSjKvcKg",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"语法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#语法","aria-hidden":"true"},"#"),l(" 语法")],-1),_={href:"https://galaxy.ansible.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.ansible.com/ansible/latest/cli/ansible-galaxy.html",target:"_blank",rel:"noopener noreferrer"},p=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: ansible-galaxy [-h] [--version] [-v] TYPE ...

执行各种与角色和集合相关的操作。

positional arguments:
  TYPE
    collection   管理Ansible Galaxy收藏。
    role         管理Ansible Galaxy角色。

optional arguments:
  -v, --verbose  详细模式（-vvv了解更多信息，-vvv启用连接调试）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>collection</p><ul><li>collection init 初始化集合</li><li>collection build 构建集合</li><li>collection publish 发布集合</li><li>collection install 安装</li></ul></li><li><p>role</p><ul><li>role init 初始化角色</li><li>role remove 删除</li><li>role delete 删除</li><li>role list 角色列表</li><li>role search 搜索</li><li>role import 导入</li><li>role setup 设置</li><li>role info 信息</li><li>role install 安装</li></ul></li></ul>`,2);function x(g,f){const i=c("ExternalLinkIcon");return s(),o("div",null,[r(" more "),v,e("p",null,[e("a",u,[l("ansible 中文指南"),n(i)])]),e("p",null,[e("a",b,[l("本节示例文件 提取码：1234"),n(i)])]),m,e("p",null,[e("a",_,[l("ansible-galaxy"),n(i)]),l(" ：是一个免费的用于查找，下载，评论各种社区开发的 Ansible 角色")]),e("p",null,[e("a",h,[l("ansible-galax语法"),n(i)])]),p])}const y=a(d,[["render",x],["__file","ansible-galaxy.html.vue"]]);export{y as default};
