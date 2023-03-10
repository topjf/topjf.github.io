const e=JSON.parse('{"key":"v-2cf76a5d","path":"/middleware/mq/mq-rabbit.html","title":"RabbitMQ","lang":"zh-CN","frontmatter":{"icon":"edit","title":"RabbitMQ","category":["MQ中间件"],"date":"2022-06-06T00:00:00.000Z","tag":["RabbitMQ"],"description":"1、简介、安装配置 1.1、简介 2.消息服务中两个重要概念: 消息代理(message broker)和目的地(destination)：当消息发送者发送消息以后，将由消息代理接管，消息代理保证消息传递到指定目的地。 3.消息队列主要有两种形式的目的地: 队列(queue) : 点对点消息通信(point-to-point) 主题(topic) : ...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/middleware/mq/mq-rabbit.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"RabbitMQ"}],["meta",{"property":"og:description","content":"1、简介、安装配置 1.1、简介 2.消息服务中两个重要概念: 消息代理(message broker)和目的地(destination)：当消息发送者发送消息以后，将由消息代理接管，消息代理保证消息传递到指定目的地。 3.消息队列主要有两种形式的目的地: 队列(queue) : 点对点消息通信(point-to-point) 主题(topic) : ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-05T16:15:05.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"RabbitMQ"}],["meta",{"property":"article:tag","content":"RabbitMQ"}],["meta",{"property":"article:published_time","content":"2022-06-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-05T16:15:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RabbitMQ\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2022-06-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-05T16:15:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1、简介、安装配置","slug":"_1、简介、安装配置","link":"#_1、简介、安装配置","children":[{"level":3,"title":"1.1、简介","slug":"_1-1、简介","link":"#_1-1、简介","children":[]},{"level":3,"title":"1.2、概念","slug":"_1-2、概念","link":"#_1-2、概念","children":[]},{"level":3,"title":"1.3、docker 安装","slug":"_1-3、docker-安装","link":"#_1-3、docker-安装","children":[]},{"level":3,"title":"1.4、运行机制","slug":"_1-4、运行机制","link":"#_1-4、运行机制","children":[]},{"level":3,"title":"1.5、Exchange类型：点对点（direct、header）、订阅（fanout、topic）","slug":"_1-5、exchange类型-点对点-direct、header-、订阅-fanout、topic","link":"#_1-5、exchange类型-点对点-direct、header-、订阅-fanout、topic","children":[]},{"level":3,"title":"1.6、测试：创建交换机、队列、绑定 binding","slug":"_1-6、测试-创建交换机、队列、绑定-binding","link":"#_1-6、测试-创建交换机、队列、绑定-binding","children":[]},{"level":3,"title":"1.7、实例","slug":"_1-7、实例","link":"#_1-7、实例","children":[]}]},{"level":2,"title":"2、整合java","slug":"_2、整合java","link":"#_2、整合java","children":[{"level":3,"title":"2.1、配置 <a name=\\"配置\\">","slug":"_2-1、配置-a-name-配置","link":"#_2-1、配置-a-name-配置","children":[]},{"level":3,"title":"2.2 amqpAdmin 管理组件","slug":"_2-2-amqpadmin-管理组件","link":"#_2-2-amqpadmin-管理组件","children":[]},{"level":3,"title":"2.3 RabbitTemplate 消息","slug":"_2-3-rabbittemplate-消息","link":"#_2-3-rabbittemplate-消息","children":[]}]},{"level":2,"title":"3、投递消息-安全到达","slug":"_3、投递消息-安全到达","link":"#_3、投递消息-安全到达","children":[{"level":3,"title":"3.1、发送端确认","slug":"_3-1、发送端确认","link":"#_3-1、发送端确认","children":[]},{"level":3,"title":"3.2、消费端确认","slug":"_3-2、消费端确认","link":"#_3-2、消费端确认","children":[]}]},{"level":2,"title":"4、MQ延迟队列","slug":"_4、mq延迟队列","link":"#_4、mq延迟队列","children":[{"level":3,"title":"4.1、使用场景","slug":"_4-1、使用场景","link":"#_4-1、使用场景","children":[]},{"level":3,"title":"4.2、时效性问题","slug":"_4-2、时效性问题","link":"#_4-2、时效性问题","children":[]},{"level":3,"title":"4.3、TTL（消息的存活时间）和死信 Exchange","slug":"_4-3、ttl-消息的存活时间-和死信-exchange","link":"#_4-3、ttl-消息的存活时间-和死信-exchange","children":[]},{"level":3,"title":"4.4、延迟队列实现","slug":"_4-4、延迟队列实现","link":"#_4-4、延迟队列实现","children":[]}]},{"level":2,"title":"5、模拟订单超时自动关闭订单及释放库存","slug":"_5、模拟订单超时自动关闭订单及释放库存","link":"#_5、模拟订单超时自动关闭订单及释放库存","children":[{"level":3,"title":"springBean自动创建交换机、队列（订单超时-死信队列）、绑定","slug":"springbean自动创建交换机、队列-订单超时-死信队列-、绑定","link":"#springbean自动创建交换机、队列-订单超时-死信队列-、绑定","children":[]},{"level":3,"title":"模拟创建订单","slug":"模拟创建订单","link":"#模拟创建订单","children":[]},{"level":3,"title":"监听到订单超时了，开始业务处理，并通知释放库存队列","slug":"监听到订单超时了-开始业务处理-并通知释放库存队列","link":"#监听到订单超时了-开始业务处理-并通知释放库存队列","children":[]},{"level":3,"title":"监听释放库存队列，自动释放库存","slug":"监听释放库存队列-自动释放库存","link":"#监听释放库存队列-自动释放库存","children":[]}]}],"git":{"createdTime":1671170523000,"updatedTime":1678032905000,"contributors":[{"name":"jf","email":"iskong9@163.com","commits":3},{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":14.27,"words":4282},"filePathRelative":"middleware/mq/mq-rabbit.md","localizedDate":"2022年6月6日","excerpt":"","autoDesc":true}');export{e as data};