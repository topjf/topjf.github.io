const l=JSON.parse('{"key":"v-44a9c28c","path":"/java/spring-cloud-alibaba-note-high-level.html","title":"SpringCloud-Alibaba项目笔记-高级篇","lang":"zh-CN","frontmatter":{"icon":"edit","title":"SpringCloud-Alibaba项目笔记-高级篇","category":["Cloud"],"date":"2020-01-01T00:00:00.000Z","tag":["Cloud"],"description":"ES集群 image-20210604131952296 image-20210604132012980 商品上架 ：把数据保存到es ：spu -- 构造sku检索属性 1、上架 product/spuinfo/list/{spuId}/up -- 发送远程调用，库存系统查询是否有库存 /ware/waresku/hasstock 创建 WareFe...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/java/spring-cloud-alibaba-note-high-level.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"SpringCloud-Alibaba项目笔记-高级篇"}],["meta",{"property":"og:description","content":"ES集群 image-20210604131952296 image-20210604132012980 商品上架 ：把数据保存到es ：spu -- 构造sku检索属性 1、上架 product/spuinfo/list/{spuId}/up -- 发送远程调用，库存系统查询是否有库存 /ware/waresku/hasstock 创建 WareFe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-05T16:54:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringCloud-Alibaba项目笔记-高级篇"}],["meta",{"property":"article:tag","content":"Cloud"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-05T16:54:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud-Alibaba项目笔记-高级篇\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-05T16:54:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ES集群","slug":"es集群","link":"#es集群","children":[]},{"level":2,"title":"-- 构造sku检索属性","slug":"构造sku检索属性","link":"#构造sku检索属性","children":[{"level":3,"title":"1、上架 product/spuinfo/list/{spuId}/up","slug":"_1、上架-product-spuinfo-list-spuid-up","link":"#_1、上架-product-spuinfo-list-spuid-up","children":[]}]},{"level":2,"title":"-- 发送远程调用，库存系统查询是否有库存","slug":"发送远程调用-库存系统查询是否有库存","link":"#发送远程调用-库存系统查询是否有库存","children":[]},{"level":2,"title":"-- 将数据发送给es进行保存;yumall-search","slug":"将数据发送给es进行保存-yumall-search","link":"#将数据发送给es进行保存-yumall-search","children":[]},{"level":2,"title":"-- 优化库存","slug":"优化库存","link":"#优化库存","children":[]},{"level":2,"title":"-- 商品：product","slug":"商品-product","link":"#商品-product","children":[{"level":3,"title":"--- 导入thymeleaf","slug":"导入thymeleaf","link":"#导入thymeleaf","children":[]},{"level":3,"title":"--- 导入首页","slug":"导入首页","link":"#导入首页","children":[]},{"level":3,"title":"--- 查出所有的1级分类","slug":"查出所有的1级分类","link":"#查出所有的1级分类","children":[]},{"level":3,"title":"--- 显示二级&三级分类","slug":"显示二级-三级分类","link":"#显示二级-三级分类","children":[]}]},{"level":2,"title":"-- nginx","slug":"nginx","link":"#nginx","children":[{"level":3,"title":"--- 静态配置","slug":"静态配置","link":"#静态配置","children":[]},{"level":3,"title":"--- 分布式网关配置","slug":"分布式网关配置","link":"#分布式网关配置","children":[]}]},{"level":2,"title":"- - 模型分析","slug":"模型分析","link":"#模型分析","children":[]},{"level":2,"title":"- - es检索简单测试","slug":"es检索简单测试","link":"#es检索简单测试","children":[]},{"level":2,"title":"- - 聚合查询","slug":"聚合查询","link":"#聚合查询","children":[{"level":3,"title":"--- 构建请求","slug":"构建请求","link":"#构建请求","children":[]},{"level":3,"title":"--- 数据响应封装","slug":"数据响应封装","link":"#数据响应封装","children":[]}]},{"level":2,"title":"- - 页面处理","slug":"页面处理","link":"#页面处理","children":[{"level":3,"title":"--- 点击跳转","slug":"点击跳转","link":"#点击跳转","children":[]},{"level":3,"title":"--- 综合排序、销量、价格、评分、上架时间、分页、排序内容、仅显示有货","slug":"综合排序、销量、价格、评分、上架时间、分页、排序内容、仅显示有货","link":"#综合排序、销量、价格、评分、上架时间、分页、排序内容、仅显示有货","children":[]},{"level":3,"title":"--- 面包屑导航","slug":"面包屑导航","link":"#面包屑导航","children":[]}]},{"level":2,"title":"0、线程池配置","slug":"_0、线程池配置","link":"#_0、线程池配置","children":[{"level":3,"title":"--- MyThreadConfig","slug":"mythreadconfig","link":"#mythreadconfig","children":[]},{"level":3,"title":"--- ThreadPoolConfigProperties","slug":"threadpoolconfigproperties","link":"#threadpoolconfigproperties","children":[]},{"level":3,"title":"--- Properties","slug":"properties","link":"#properties","children":[]}]},{"level":2,"title":"1、sku基本信息的获取  pms_sku_info","slug":"_1、sku基本信息的获取-pms-sku-info","link":"#_1、sku基本信息的获取-pms-sku-info","children":[]},{"level":2,"title":"2、sku的图片信息","slug":"_2、sku的图片信息","link":"#_2、sku的图片信息","children":[]},{"level":2,"title":"3、获取spu的销售属性组合","slug":"_3、获取spu的销售属性组合","link":"#_3、获取spu的销售属性组合","children":[]},{"level":2,"title":"4、获取spu的介绍","slug":"_4、获取spu的介绍","link":"#_4、获取spu的介绍","children":[]},{"level":2,"title":"5、获取spu的规格参数信息","slug":"_5、获取spu的规格参数信息","link":"#_5、获取spu的规格参数信息","children":[]},{"level":2,"title":"//TODO 6、远程调用查询当前sku是否参与秒杀优惠活动","slug":"todo-6、远程调用查询当前sku是否参与秒杀优惠活动","link":"#todo-6、远程调用查询当前sku是否参与秒杀优惠活动","children":[]},{"level":2,"title":"1、初始化","slug":"_1、初始化","link":"#_1、初始化","children":[]},{"level":2,"title":"2、网关","slug":"_2、网关","link":"#_2、网关","children":[]},{"level":2,"title":"3、首页","slug":"_3、首页","link":"#_3、首页","children":[]},{"level":2,"title":"4、注册-获取手机验证码，倒计时","slug":"_4、注册-获取手机验证码-倒计时","link":"#_4、注册-获取手机验证码-倒计时","children":[{"level":3,"title":"4.1 html","slug":"_4-1-html","link":"#_4-1-html","children":[]},{"level":3,"title":"4.2 后端","slug":"_4-2-后端","link":"#_4-2-后端","children":[]}]},{"level":2,"title":"5、用户注册","slug":"_5、用户注册","link":"#_5、用户注册","children":[{"level":3,"title":"5.1、用户实体类","slug":"_5-1、用户实体类","link":"#_5-1、用户实体类","children":[]},{"level":3,"title":"5.2、注册流程","slug":"_5-2、注册流程","link":"#_5-2、注册流程","children":[]},{"level":3,"title":"5.3、远程调用会员服务实现注册","slug":"_5-3、远程调用会员服务实现注册","link":"#_5-3、远程调用会员服务实现注册","children":[]}]},{"level":2,"title":"6、登录","slug":"_6、登录","link":"#_6、登录","children":[{"level":3,"title":"6.1、远程-用户登录","slug":"_6-1、远程-用户登录","link":"#_6-1、远程-用户登录","children":[]},{"level":3,"title":"6.2、远程-社交用户的登录（微信）","slug":"_6-2、远程-社交用户的登录-微信","link":"#_6-2、远程-社交用户的登录-微信","children":[]},{"level":3,"title":"6.3、远程-社交用户的登录（微博）","slug":"_6-3、远程-社交用户的登录-微博","link":"#_6-3、远程-社交用户的登录-微博","children":[]}]},{"level":2,"title":"7、分布式 session","slug":"_7、分布式-session","link":"#_7、分布式-session","children":[]},{"level":2,"title":"8、单点登录：多系统","slug":"_8、单点登录-多系统","link":"#_8、单点登录-多系统","children":[{"level":3,"title":"8.1、分析","slug":"_8-1、分析","link":"#_8-1、分析","children":[]}]},{"level":2,"title":"1、购物车项目 cart 准备config，web、nginx、nacos、redis","slug":"_1、购物车项目-cart-准备config-web、nginx、nacos、redis","link":"#_1、购物车项目-cart-准备config-web、nginx、nacos、redis","children":[]},{"level":2,"title":"2、分析、Vo模型","slug":"_2、分析、vo模型","link":"#_2、分析、vo模型","children":[]},{"level":2,"title":"3、去购物车页面","slug":"_3、去购物车页面","link":"#_3、去购物车页面","children":[{"level":3,"title":"web拦截器,在执行目标方法之前，判断用户的登录状态.并封装传递给controller目标请求，业务执行之后，分配临时用户来浏览器保存","slug":"web拦截器-在执行目标方法之前-判断用户的登录状态-并封装传递给controller目标请求-业务执行之后-分配临时用户来浏览器保存","link":"#web拦截器-在执行目标方法之前-判断用户的登录状态-并封装传递给controller目标请求-业务执行之后-分配临时用户来浏览器保存","children":[]},{"level":3,"title":"3.1、首页","slug":"_3-1、首页","link":"#_3-1、首页","children":[]},{"level":3,"title":"3.2 获取购物车里面的信息-获取用户登录或者未登录购物车里所有的数据","slug":"_3-2-获取购物车里面的信息-获取用户登录或者未登录购物车里所有的数据","link":"#_3-2-获取购物车里面的信息-获取用户登录或者未登录购物车里所有的数据","children":[]},{"level":3,"title":"3.3、获取购物车里面的数据getCartItems、删除","slug":"_3-3、获取购物车里面的数据getcartitems、删除","link":"#_3-3、获取购物车里面的数据getcartitems、删除","children":[]}]},{"level":2,"title":"4、添加商品到购物车","slug":"_4、添加商品到购物车","link":"#_4、添加商品到购物车","children":[{"level":3,"title":"获取到我们要操作的购物车，是哪个账号 getCartOps","slug":"获取到我们要操作的购物车-是哪个账号-getcartops","link":"#获取到我们要操作的购物车-是哪个账号-getcartops","children":[]},{"level":3,"title":"4.1、添加商品到购物车 addCartItem","slug":"_4-1、添加商品到购物车-addcartitem","link":"#_4-1、添加商品到购物车-addcartitem","children":[]},{"level":3,"title":"4.2、远程查询当前要添加商品的信息getInfo(skuId);，远程查询skuAttrValues组合信息getSkuSaleAttrValues(skuId)","slug":"_4-2、远程查询当前要添加商品的信息getinfo-skuid-远程查询skuattrvalues组合信息getskusaleattrvalues-skuid","link":"#_4-2、远程查询当前要添加商品的信息getinfo-skuid-远程查询skuattrvalues组合信息getskusaleattrvalues-skuid","children":[]}]},{"level":2,"title":"5、跳转到添加购物车成功页面","slug":"_5、跳转到添加购物车成功页面","link":"#_5、跳转到添加购物车成功页面","children":[]},{"level":2,"title":"6、商品是否选中","slug":"_6、商品是否选中","link":"#_6、商品是否选中","children":[]},{"level":2,"title":"7、修改购物项数量","slug":"_7、修改购物项数量","link":"#_7、修改购物项数量","children":[]},{"level":2,"title":"8、删除商品信息","slug":"_8、删除商品信息","link":"#_8、删除商品信息","children":[]},{"level":2,"title":"9、获取当前用户的购物车商品项","slug":"_9、获取当前用户的购物车商品项","link":"#_9、获取当前用户的购物车商品项","children":[]},{"level":2,"title":"1、配置web、nginx、springSession、配置线程池","slug":"_1、配置web、nginx、springsession、配置线程池","link":"#_1、配置web、nginx、springsession、配置线程池","children":[]},{"level":2,"title":"2、订单概念、分析","slug":"_2、订单概念、分析","link":"#_2、订单概念、分析","children":[{"level":3,"title":"订单中心","slug":"订单中心","link":"#订单中心","children":[]},{"level":3,"title":"订单流程","slug":"订单流程","link":"#订单流程","children":[]},{"level":3,"title":"幂等性处理","slug":"幂等性处理","link":"#幂等性处理","children":[]},{"level":3,"title":"订单业务","slug":"订单业务","link":"#订单业务","children":[]}]},{"level":2,"title":"3、登录拦截","slug":"_3、登录拦截","link":"#_3、登录拦截","children":[]},{"level":2,"title":"4、由购物车 cart 去结算确认页 confirm","slug":"_4、由购物车-cart-去结算确认页-confirm","link":"#_4、由购物车-cart-去结算确认页-confirm","children":[{"level":3,"title":"解决Feign异步调用 丢失请求头|上下文 问题","slug":"解决feign异步调用-丢失请求头-上下文-问题","link":"#解决feign异步调用-丢失请求头-上下文-问题","children":[]},{"level":3,"title":"4.1、Controller、构建OrderConfirmVo","slug":"_4-1、controller、构建orderconfirmvo","link":"#_4-1、controller、构建orderconfirmvo","children":[]},{"level":3,"title":"4.2、memberFeignService 远程查询所有的收获地址列表","slug":"_4-2、memberfeignservice-远程查询所有的收获地址列表","link":"#_4-2、memberfeignservice-远程查询所有的收获地址列表","children":[]},{"level":3,"title":"4.3、cartFeignService 远程查询购物车所有选中的购物项","slug":"_4-3、cartfeignservice-远程查询购物车所有选中的购物项","link":"#_4-3、cartfeignservice-远程查询购物车所有选中的购物项","children":[]},{"level":3,"title":"4.4、wmsFeignService 远程查询商品库存信息","slug":"_4-4、wmsfeignservice-远程查询商品库存信息","link":"#_4-4、wmsfeignservice-远程查询商品库存信息","children":[]},{"level":3,"title":"4.5、memberResponseVo 查询用户积分","slug":"_4-5、memberresponsevo-查询用户积分","link":"#_4-5、memberresponsevo-查询用户积分","children":[]},{"level":3,"title":"4.6、为用户设置一个token，三十分钟过期时间（存在redis）防重令牌(防止表单重复提交)","slug":"_4-6、为用户设置一个token-三十分钟过期时间-存在redis-防重令牌-防止表单重复提交","link":"#_4-6、为用户设置一个token-三十分钟过期时间-存在redis-防重令牌-防止表单重复提交","children":[]},{"level":3,"title":"4.7、结算确认页渲染","slug":"_4-7、结算确认页渲染","link":"#_4-7、结算确认页渲染","children":[]}]},{"level":2,"title":"5、确认页模拟运费信息","slug":"_5、确认页模拟运费信息","link":"#_5、确认页模拟运费信息","children":[]},{"level":2,"title":"6、幂等性","slug":"_6、幂等性","link":"#_6、幂等性","children":[{"level":3,"title":"6.1、概念","slug":"_6-1、概念","link":"#_6-1、概念","children":[]},{"level":3,"title":"6.2、使用场景","slug":"_6-2、使用场景","link":"#_6-2、使用场景","children":[]},{"level":3,"title":"6.3、解决方案","slug":"_6-3、解决方案","link":"#_6-3、解决方案","children":[]}]},{"level":2,"title":"7、订单提交 submitOrder","slug":"_7、订单提交-submitorder","link":"#_7、订单提交-submitorder","children":[{"level":3,"title":"备注：redis原子验证令牌、构造订单数据、订单验证价格、保存订单数据、库存锁定，只要有异常，回滚订单数据、订单创建成功，发送消息给MQ、删除购物车里的数据","slug":"备注-redis原子验证令牌、构造订单数据、订单验证价格、保存订单数据、库存锁定-只要有异常-回滚订单数据、订单创建成功-发送消息给mq、删除购物车里的数据","link":"#备注-redis原子验证令牌、构造订单数据、订单验证价格、保存订单数据、库存锁定-只要有异常-回滚订单数据、订单创建成功-发送消息给mq、删除购物车里的数据","children":[]},{"level":3,"title":"7.1、提交流程 createOrder、saveOrder","slug":"_7-1、提交流程-createorder、saveorder","link":"#_7-1、提交流程-createorder、saveorder","children":[]},{"level":3,"title":"7.2、库存锁","slug":"_7-2、库存锁","link":"#_7-2、库存锁","children":[]},{"level":3,"title":"7.3、使用 MQ 延迟队列","slug":"_7-3、使用-mq-延迟队列","link":"#_7-3、使用-mq-延迟队列","children":[]},{"level":3,"title":"- - 订单释放&库存解锁","slug":"订单释放-库存解锁","link":"#订单释放-库存解锁","children":[]},{"level":3,"title":"7.4、自动解锁库存","slug":"_7-4、自动解锁库存","link":"#_7-4、自动解锁库存","children":[]},{"level":3,"title":"7.5、自动解锁订单","slug":"_7-5、自动解锁订单","link":"#_7-5、自动解锁订单","children":[]},{"level":3,"title":"7.6、定时关闭订单","slug":"_7-6、定时关闭订单","link":"#_7-6、定时关闭订单","children":[]}]},{"level":2,"title":"1、支付宝沙箱","slug":"_1、支付宝沙箱","link":"#_1、支付宝沙箱","children":[]},{"level":2,"title":"2、加密-对称加密","slug":"_2、加密-对称加密","link":"#_2、加密-对称加密","children":[]},{"level":2,"title":"3、加密-非对称加密","slug":"_3、加密-非对称加密","link":"#_3、加密-非对称加密","children":[]},{"level":2,"title":"4、签名","slug":"_4、签名","link":"#_4、签名","children":[]},{"level":2,"title":"5、内网穿透","slug":"_5、内网穿透","link":"#_5、内网穿透","children":[]},{"level":2,"title":"6、整合支付宝-订单支付","slug":"_6、整合支付宝-订单支付","link":"#_6、整合支付宝-订单支付","children":[]},{"level":2,"title":"7、订单支付成功监听器（通知）","slug":"_7、订单支付成功监听器-通知","link":"#_7、订单支付成功监听器-通知","children":[]},{"level":2,"title":"8、微信支付","slug":"_8、微信支付","link":"#_8、微信支付","children":[]},{"level":2,"title":"1、定时任务 cron","slug":"_1、定时任务-cron","link":"#_1、定时任务-cron","children":[]},{"level":2,"title":"2、上架秒杀商品","slug":"_2、上架秒杀商品","link":"#_2、上架秒杀商品","children":[{"level":3,"title":"定时任务 SeckillScheduled","slug":"定时任务-seckillscheduled","link":"#定时任务-seckillscheduled","children":[]},{"level":3,"title":"要参加三天的商品秒杀活动 uploadSeckillSkuLatest3Days","slug":"要参加三天的商品秒杀活动-uploadseckillskulatest3days","link":"#要参加三天的商品秒杀活动-uploadseckillskulatest3days","children":[]},{"level":3,"title":"查询最近三天需要参加秒杀商品的信息 getLates3DaySession","slug":"查询最近三天需要参加秒杀商品的信息-getlates3daysession","link":"#查询最近三天需要参加秒杀商品的信息-getlates3daysession","children":[]}]},{"level":2,"title":"3、获取到当前可以参加秒杀商品的信息 getCurrentSeckillSkus","slug":"_3、获取到当前可以参加秒杀商品的信息-getcurrentseckillskus","link":"#_3、获取到当前可以参加秒杀商品的信息-getcurrentseckillskus","children":[]},{"level":2,"title":"4、根据skuId查询商品是否参加秒杀活动","slug":"_4、根据skuid查询商品是否参加秒杀活动","link":"#_4、根据skuid查询商品是否参加秒杀活动","children":[]},{"level":2,"title":"5、当前商品进行秒杀（秒杀开始）","slug":"_5、当前商品进行秒杀-秒杀开始","link":"#_5、当前商品进行秒杀-秒杀开始","children":[]},{"level":2,"title":"6、MQ 秒杀监听","slug":"_6、mq-秒杀监听","link":"#_6、mq-秒杀监听","children":[]},{"level":2,"title":"7、秒杀（高并发）关注问题","slug":"_7、秒杀-高并发-关注问题","link":"#_7、秒杀-高并发-关注问题","children":[]}],"git":{"createdTime":1671170523000,"updatedTime":1678035260000,"contributors":[{"name":"jf","email":"iskong9@163.com","commits":3},{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":47.59,"words":14278},"filePathRelative":"java/spring-cloud-alibaba-note-high-level.md","localizedDate":"2020年1月1日","excerpt":"","autoDesc":true}');export{l as data};
