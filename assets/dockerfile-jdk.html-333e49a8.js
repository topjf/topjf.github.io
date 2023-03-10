import{_ as n,X as s,Y as a,Z as e,a1 as i}from"./framework-10d91a2c.js";const l={},c=i(`<h1>DockerFile 配置基于jdk</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加JAVA启动的必要镜像，推荐使用jre版本</span>
<span class="token comment"># openjdk:8-jre(295.16 MB)、openjdk:11-jre(328.63 MB)、openjdk:17-jdk|oracle(492.57 MB)</span>
FROM registry.cn-chengdu.aliyuncs.com/jinfang/openjdk:17-jdk

<span class="token comment">#声明镜像维护者信息</span>
MAINTAINER jinfang
<span class="token comment">#镜像描述元信息</span>
LABEL <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;model-web&quot;</span>

<span class="token comment">#添加JVM参数</span>
ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-server -Xmx1024M -Xms1024M -Xmn750M -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=512M -XX:GCTimeRatio=19 -XX:+ClassUnloading&quot;</span>

<span class="token comment"># 项目打包后的jar包名</span>
ENV <span class="token assign-left variable">JAR_FILE</span><span class="token operator">=</span>spring-boot-model-web-1.0.0.jar

<span class="token comment"># 项目根目录</span>
ENV <span class="token assign-left variable">ROOT_DIR</span><span class="token operator">=</span>/data/web
<span class="token comment">#动态加载配置文件</span>
ENV <span class="token assign-left variable">ROOT_DIR_CONFIG</span><span class="token operator">=</span>/data/web/config

RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR</span>
RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment">#在容器运行时声明一个 volume, 在容器中创建目录</span>
VOLUME <span class="token variable">$ROOT_DIR</span>

<span class="token comment">#设置终端默认登录进来的工作目录</span>
WORKDIR <span class="token variable">$ROOT_DIR</span>

<span class="token comment"># java项目的jar包</span>
COPY ./spring-boot-model-web/target/<span class="token variable">$JAR_FILE</span> <span class="token variable">$ROOT_DIR</span>
COPY ./spring-boot-model-web/src/main/resources <span class="token variable">$ROOT_DIR_CONFIG</span>

<span class="token comment"># Create a script 由于ENTRYPOINT无法使用dockerfile中定义的环境变量</span>
<span class="token comment"># 所以需要按照指定的环境变量生成运行脚本，并输出到文件，之后ENTRYPOINT运行脚本文件就行了</span>
<span class="token comment">#  --spring.config.location=\${ROOT_DIR_CONFIG}/application-\${PROFILES}.yml</span>
<span class="token comment">#  --spring.profiles.active=$PROFILES</span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;java -Djava.security.egd=file:/dev/./urandom <span class="token variable">\${JAVA_OPTS}</span> -jar <span class="token variable">$ROOT_DIR</span>/<span class="token variable">$JAR_FILE</span>&quot;</span> <span class="token operator">&gt;</span> /run_module.sh

<span class="token comment"># 当前容器对外暴露出的端口</span>
EXPOSE <span class="token number">51155</span>
EXPOSE <span class="token number">51156</span>
EXPOSE <span class="token number">51157</span>

<span class="token comment"># 指定容器启动时要运行的命令</span>
<span class="token comment">#ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/spring-boot-model-web-1.0.0.jar&quot;,&quot;--spring.profiles.active=prod&quot;]</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;/bin/bash&quot;</span>, <span class="token string">&quot;/run_module.sh&quot;</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function o(t,r){return s(),a("div",null,[e(" more "),c])}const d=n(l,[["render",o],["__file","dockerfile-jdk.html.vue"]]);export{d as default};
