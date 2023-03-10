const e=JSON.parse('{"key":"v-442e01d7","path":"/linux/jenkins.html","title":"Jenkins自动化部署","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Jenkins自动化部署","category":["Linux"],"date":"2022-08-09T00:00:00.000Z","star":true,"tag":["Linux","Jebkins"],"description":"开发push代码到git，触发jenkins自动pull代码，通过maven编译、打包，然后通过执行shell脚本使docker构建镜像并push到私服（或者阿里云）仓库，此操作完成后jenkins服务器上再执行SSH命令登录到部署服务器，docker从仓库（私服）拉取镜像，启动容器。整个操作流程完成。 通过 war 安装 2.372（推荐使用） 下载...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/linux/jenkins.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"Jenkins自动化部署"}],["meta",{"property":"og:description","content":"开发push代码到git，触发jenkins自动pull代码，通过maven编译、打包，然后通过执行shell脚本使docker构建镜像并push到私服（或者阿里云）仓库，此操作完成后jenkins服务器上再执行SSH命令登录到部署服务器，docker从仓库（私服）拉取镜像，启动容器。整个操作流程完成。 通过 war 安装 2.372（推荐使用） 下载..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-05T16:54:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Jenkins自动化部署"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Jebkins"}],["meta",{"property":"article:published_time","content":"2022-08-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-05T16:54:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins自动化部署\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2022-08-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-05T16:54:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"通过 war 安装 2.372（推荐使用）","slug":"通过-war-安装-2-372-推荐使用","link":"#通过-war-安装-2-372-推荐使用","children":[{"level":3,"title":"安装 JDK","slug":"安装-jdk","link":"#安装-jdk","children":[]},{"level":3,"title":"安装 tomcat","slug":"安装-tomcat","link":"#安装-tomcat","children":[]},{"level":3,"title":"安装 maven","slug":"安装-maven","link":"#安装-maven","children":[]},{"level":3,"title":"tomcat 启动 jenkins","slug":"tomcat-启动-jenkins","link":"#tomcat-启动-jenkins","children":[]}]},{"level":2,"title":"通过 yum 安装","slug":"通过-yum-安装","link":"#通过-yum-安装","children":[]},{"level":2,"title":"通过 docker 安装 2.363","slug":"通过-docker-安装-2-363","link":"#通过-docker-安装-2-363","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"查看管理员密码","slug":"查看管理员密码","link":"#查看管理员密码","children":[]},{"level":3,"title":"配置国内站点加速","slug":"配置国内站点加速","link":"#配置国内站点加速","children":[]},{"level":3,"title":"安装插件","slug":"安装插件","link":"#安装插件","children":[]},{"level":3,"title":"安装自动化构建和部署所需的插件","slug":"安装自动化构建和部署所需的插件","link":"#安装自动化构建和部署所需的插件","children":[]},{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]}]},{"level":2,"title":"自动部署项目（springBoot+maven+gitee）","slug":"自动部署项目-springboot-maven-gitee","link":"#自动部署项目-springboot-maven-gitee","children":[{"level":3,"title":"添加凭证","slug":"添加凭证","link":"#添加凭证","children":[]}]},{"level":2,"title":"基础介绍","slug":"基础介绍","link":"#基础介绍","children":[{"level":3,"title":"什么是流水线","slug":"什么是流水线","link":"#什么是流水线","children":[]},{"level":3,"title":"声明式流水线","slug":"声明式流水线","link":"#声明式流水线","children":[]},{"level":3,"title":"Jenkinsfile 的使用","slug":"jenkinsfile-的使用","link":"#jenkinsfile-的使用","children":[]}]}],"git":{"createdTime":1671170523000,"updatedTime":1678035260000,"contributors":[{"name":"jf","email":"iskong9@163.com","commits":4},{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":24.4,"words":7319},"filePathRelative":"linux/jenkins.md","localizedDate":"2022年8月9日","excerpt":"","autoDesc":true}');export{e as data};
