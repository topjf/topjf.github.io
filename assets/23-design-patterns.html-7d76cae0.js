const l=JSON.parse('{"key":"v-536d749f","path":"/java/23-design-patterns.html","title":"23种设计模式整理","lang":"zh-CN","frontmatter":{"icon":"edit","title":"23种设计模式整理","category":["设计模式"],"date":"2019-08-06T00:00:00.000Z","tag":["设计模式"],"description":"六大设计原则，23种设计模式","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/java/23-design-patterns.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"23种设计模式整理"}],["meta",{"property":"og:description","content":"六大设计原则，23种设计模式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-05T16:54:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"23种设计模式整理"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2019-08-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-05T16:54:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"23种设计模式整理\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2019-08-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-05T16:54:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"6大设计原则","slug":"_6大设计原则","link":"#_6大设计原则","children":[]},{"level":2,"title":"1).单一职责原则","slug":"_1-单一职责原则","link":"#_1-单一职责原则","children":[]},{"level":2,"title":"2).里氏替换原则（通俗的讲就是：子类可以去扩展父类的功能，但是不能改变父类原有的功能）","slug":"_2-里氏替换原则-通俗的讲就是-子类可以去扩展父类的功能-但是不能改变父类原有的功能","link":"#_2-里氏替换原则-通俗的讲就是-子类可以去扩展父类的功能-但是不能改变父类原有的功能","children":[]},{"level":2,"title":"3).依赖倒置原则（面向接口编程）","slug":"_3-依赖倒置原则-面向接口编程","link":"#_3-依赖倒置原则-面向接口编程","children":[]},{"level":2,"title":"4).接口隔离原则","slug":"_4-接口隔离原则","link":"#_4-接口隔离原则","children":[]},{"level":2,"title":"5).迪米特法则（说白了，就是一种中介的方式）","slug":"_5-迪米特法则-说白了-就是一种中介的方式","link":"#_5-迪米特法则-说白了-就是一种中介的方式","children":[]},{"level":2,"title":"6).开闭原则","slug":"_6-开闭原则","link":"#_6-开闭原则","children":[]},{"level":2,"title":"1.单例模式 （Singleton Pattern）","slug":"_1-单例模式-singleton-pattern","link":"#_1-单例模式-singleton-pattern","children":[{"level":3,"title":"单态定义","slug":"单态定义","link":"#单态定义","children":[]},{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"Singleton 模式几种形式","slug":"singleton-模式几种形式","link":"#singleton-模式几种形式","children":[]}]},{"level":2,"title":"2.工厂方法模式（Factory Method Pattern）","slug":"_2-工厂方法模式-factory-method-pattern","link":"#_2-工厂方法模式-factory-method-pattern","children":[{"level":3,"title":"简单工厂模式","slug":"简单工厂模式","link":"#简单工厂模式","children":[]},{"level":3,"title":"工厂方法模式","slug":"工厂方法模式","link":"#工厂方法模式","children":[]},{"level":3,"title":"升级为多个工厂类（推荐）","slug":"升级为多个工厂类-推荐","link":"#升级为多个工厂类-推荐","children":[]},{"level":3,"title":"多工厂类问题？","slug":"多工厂类问题","link":"#多工厂类问题","children":[]},{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"为何使用 ?","slug":"为何使用","link":"#为何使用","children":[]}]},{"level":2,"title":"3.抽象工厂模式（Abstract Factory Pattern）","slug":"_3-抽象工厂模式-abstract-factory-pattern","link":"#_3-抽象工厂模式-abstract-factory-pattern","children":[{"level":3,"title":"什么是抽象？","slug":"什么是抽象","link":"#什么是抽象","children":[]},{"level":3,"title":"创造人示例","slug":"创造人示例","link":"#创造人示例","children":[]},{"level":3,"title":"优点","slug":"优点-1","link":"#优点-1","children":[]},{"level":3,"title":"缺点","slug":"缺点-1","link":"#缺点-1","children":[]},{"level":3,"title":"定义","slug":"定义-1","link":"#定义-1","children":[]},{"level":3,"title":"使用场景","slug":"使用场景-1","link":"#使用场景-1","children":[]},{"level":3,"title":"举例：","slug":"举例","link":"#举例","children":[]}]},{"level":2,"title":"4.建造者模式（Builder Pattern）","slug":"_4-建造者模式-builder-pattern","link":"#_4-建造者模式-builder-pattern","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"优点","slug":"优点-2","link":"#优点-2","children":[]},{"level":3,"title":"使用场景","slug":"使用场景-2","link":"#使用场景-2","children":[]},{"level":3,"title":"定义","slug":"定义-2","link":"#定义-2","children":[]},{"level":3,"title":"为何使用?","slug":"为何使用-1","link":"#为何使用-1","children":[]},{"level":3,"title":"如何使用?","slug":"如何使用","link":"#如何使用","children":[]}]},{"level":2,"title":"5.原型模式（Prototype Pattern）核心：clone()方法","slug":"_5-原型模式-prototype-pattern-核心-clone-方法","link":"#_5-原型模式-prototype-pattern-核心-clone-方法","children":[{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]},{"level":3,"title":"定义","slug":"定义-3","link":"#定义-3","children":[]},{"level":3,"title":"优点","slug":"优点-3","link":"#优点-3","children":[]},{"level":3,"title":"使用场景","slug":"使用场景-3","link":"#使用场景-3","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]},{"level":3,"title":"浅拷贝和深拷贝","slug":"浅拷贝和深拷贝","link":"#浅拷贝和深拷贝","children":[]},{"level":3,"title":"clone与final两个冤家","slug":"clone与final两个冤家","link":"#clone与final两个冤家","children":[]}]},{"level":2,"title":"6.适配器模式（Adapter Pattern）","slug":"_6-适配器模式-adapter-pattern","link":"#_6-适配器模式-adapter-pattern","children":[{"level":3,"title":"定义","slug":"定义-4","link":"#定义-4","children":[]},{"level":3,"title":"为何使用?","slug":"为何使用-2","link":"#为何使用-2","children":[]},{"level":3,"title":"如何使用?","slug":"如何使用-1","link":"#如何使用-1","children":[]}]},{"level":2,"title":"7.代理模式（Proxy Pattern）","slug":"_7-代理模式-proxy-pattern","link":"#_7-代理模式-proxy-pattern","children":[{"level":3,"title":"示例","slug":"示例-2","link":"#示例-2","children":[]},{"level":3,"title":"普通代理","slug":"普通代理","link":"#普通代理","children":[]},{"level":3,"title":"强制代理","slug":"强制代理","link":"#强制代理","children":[]},{"level":3,"title":"动态代理 AOP","slug":"动态代理-aop","link":"#动态代理-aop","children":[]},{"level":3,"title":"定义","slug":"定义-5","link":"#定义-5","children":[]},{"level":3,"title":"优点","slug":"优点-4","link":"#优点-4","children":[]},{"level":3,"title":"使用场景","slug":"使用场景-5","link":"#使用场景-5","children":[]},{"level":3,"title":"为什么要使用 Proxy?","slug":"为什么要使用-proxy","link":"#为什么要使用-proxy","children":[]},{"level":3,"title":"如何使用 Proxy?","slug":"如何使用-proxy","link":"#如何使用-proxy","children":[]}]},{"level":2,"title":"8.外观模式（Facade Pattern）","slug":"_8-外观模式-facade-pattern","link":"#_8-外观模式-facade-pattern","children":[{"level":3,"title":"定义","slug":"定义-6","link":"#定义-6","children":[]}]},{"level":2,"title":"9.组合模式（Composite Pattern）","slug":"_9-组合模式-composite-pattern","link":"#_9-组合模式-composite-pattern","children":[{"level":3,"title":"定义","slug":"定义-7","link":"#定义-7","children":[]},{"level":3,"title":"好处","slug":"好处","link":"#好处","children":[]},{"level":3,"title":"如何使用 Composite?","slug":"如何使用-composite","link":"#如何使用-composite","children":[]}]},{"level":2,"title":"10.装饰器模式（Decorator Pattern）","slug":"_10-装饰器模式-decorator-pattern","link":"#_10-装饰器模式-decorator-pattern","children":[{"level":3,"title":"示例","slug":"示例-3","link":"#示例-3","children":[]},{"level":3,"title":"定义","slug":"定义-8","link":"#定义-8","children":[]},{"level":3,"title":"为什么使用 Decorator?","slug":"为什么使用-decorator","link":"#为什么使用-decorator","children":[]},{"level":3,"title":"如何使用?","slug":"如何使用-2","link":"#如何使用-2","children":[]}]},{"level":2,"title":"11.桥接模式（Bridge Pattern）","slug":"_11-桥接模式-bridge-pattern","link":"#_11-桥接模式-bridge-pattern","children":[{"level":3,"title":"定义","slug":"定义-9","link":"#定义-9","children":[]},{"level":3,"title":"为什么使用?","slug":"为什么使用","link":"#为什么使用","children":[]},{"level":3,"title":"如何实现?","slug":"如何实现","link":"#如何实现","children":[]}]},{"level":2,"title":"12.享元模式（Flyweight Pattern）","slug":"_12-享元模式-flyweight-pattern","link":"#_12-享元模式-flyweight-pattern","children":[{"level":3,"title":"定义","slug":"定义-10","link":"#定义-10","children":[]},{"level":3,"title":"为什么使用?","slug":"为什么使用-1","link":"#为什么使用-1","children":[]},{"level":3,"title":"如何使用?","slug":"如何使用-3","link":"#如何使用-3","children":[]},{"level":3,"title":"Flyweight 模式在 XML 等数据源中应用","slug":"flyweight-模式在-xml-等数据源中应用","link":"#flyweight-模式在-xml-等数据源中应用","children":[]}]},{"level":2,"title":"13.命令模式（Command Pattern）","slug":"_13-命令模式-command-pattern","link":"#_13-命令模式-command-pattern","children":[{"level":3,"title":"示例","slug":"示例-4","link":"#示例-4","children":[]},{"level":3,"title":"定义","slug":"定义-11","link":"#定义-11","children":[]},{"level":3,"title":"优点","slug":"优点-5","link":"#优点-5","children":[]},{"level":3,"title":"缺点","slug":"缺点-2","link":"#缺点-2","children":[]},{"level":3,"title":"使用场景","slug":"使用场景-6","link":"#使用场景-6","children":[]},{"level":3,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}]},{"level":2,"title":"14.观察者模式（Observer Pattern）","slug":"_14-观察者模式-observer-pattern","link":"#_14-观察者模式-observer-pattern","children":[]},{"level":2,"title":"15.模板模式（Template Pattern）","slug":"_15-模板模式-template-pattern","link":"#_15-模板模式-template-pattern","children":[{"level":3,"title":"示例","slug":"示例-5","link":"#示例-5","children":[]},{"level":3,"title":"定义","slug":"定义-12","link":"#定义-12","children":[]},{"level":3,"title":"优点","slug":"优点-6","link":"#优点-6","children":[]},{"level":3,"title":"缺点","slug":"缺点-3","link":"#缺点-3","children":[]},{"level":3,"title":"使用场景","slug":"使用场景-7","link":"#使用场景-7","children":[]},{"level":3,"title":"扩展","slug":"扩展-1","link":"#扩展-1","children":[]}]},{"level":2,"title":"16.策略模式（Strategy Pattern）","slug":"_16-策略模式-strategy-pattern","link":"#_16-策略模式-strategy-pattern","children":[{"level":3,"title":"Strategy 适合下列场合","slug":"strategy-适合下列场合","link":"#strategy-适合下列场合","children":[]}]},{"level":2,"title":"17.责任链模式（Chain of Responsibility Pattern）","slug":"_17-责任链模式-chain-of-responsibility-pattern","link":"#_17-责任链模式-chain-of-responsibility-pattern","children":[{"level":3,"title":"示例","slug":"示例-6","link":"#示例-6","children":[]},{"level":3,"title":"定义","slug":"定义-13","link":"#定义-13","children":[]},{"level":3,"title":"优点","slug":"优点-7","link":"#优点-7","children":[]},{"level":3,"title":"缺点","slug":"缺点-4","link":"#缺点-4","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"如何使用?","slug":"如何使用-4","link":"#如何使用-4","children":[]},{"level":3,"title":"CoR 优点","slug":"cor-优点","link":"#cor-优点","children":[]},{"level":3,"title":"CoR 缺点","slug":"cor-缺点","link":"#cor-缺点","children":[]},{"level":3,"title":"与 Command 模式区别","slug":"与-command-模式区别","link":"#与-command-模式区别","children":[]}]},{"level":2,"title":"18.中介者模式（Mediator Pattern）","slug":"_18-中介者模式-mediator-pattern","link":"#_18-中介者模式-mediator-pattern","children":[{"level":3,"title":"基于结构图 示例1","slug":"基于结构图-示例1","link":"#基于结构图-示例1","children":[]},{"level":3,"title":"进销存 示例","slug":"进销存-示例","link":"#进销存-示例","children":[]},{"level":3,"title":"定义","slug":"定义-14","link":"#定义-14","children":[]},{"level":3,"title":"优点","slug":"优点-8","link":"#优点-8","children":[]},{"level":3,"title":"缺点","slug":"缺点-5","link":"#缺点-5","children":[]},{"level":3,"title":"使用场景","slug":"使用场景-8","link":"#使用场景-8","children":[]},{"level":3,"title":"在如下的情况下尝试使用中介者模式","slug":"在如下的情况下尝试使用中介者模式","link":"#在如下的情况下尝试使用中介者模式","children":[]},{"level":3,"title":"实际应用","slug":"实际应用","link":"#实际应用","children":[]},{"level":3,"title":"为何使用 Mediator","slug":"为何使用-mediator","link":"#为何使用-mediator","children":[]}]},{"level":2,"title":"19.状态模式（State Pattern）","slug":"_19-状态模式-state-pattern","link":"#_19-状态模式-state-pattern","children":[{"level":3,"title":"定义","slug":"定义-15","link":"#定义-15","children":[]},{"level":3,"title":"何时使用 ?","slug":"何时使用","link":"#何时使用","children":[]},{"level":3,"title":"是否使用 ?","slug":"是否使用","link":"#是否使用","children":[]},{"level":3,"title":"如何使用?","slug":"如何使用-5","link":"#如何使用-5","children":[]},{"level":3,"title":"优点","slug":"优点-9","link":"#优点-9","children":[]},{"level":3,"title":"实质","slug":"实质","link":"#实质","children":[]}]},{"level":2,"title":"20.备忘录模式 (Memento Pattern）","slug":"_20-备忘录模式-memento-pattern","link":"#_20-备忘录模式-memento-pattern","children":[{"level":3,"title":"定义","slug":"定义-16","link":"#定义-16","children":[]},{"level":3,"title":"Memento 模式在 Jsp+Javabean 中的应用","slug":"memento-模式在-jsp-javabean-中的应用","link":"#memento-模式在-jsp-javabean-中的应用","children":[]}]},{"level":2,"title":"21.解释器模式（Interpreter Pattern）","slug":"_21-解释器模式-interpreter-pattern","link":"#_21-解释器模式-interpreter-pattern","children":[{"level":3,"title":"定义","slug":"定义-17","link":"#定义-17","children":[]}]},{"level":2,"title":"22.迭代器模式（Iterator Pattern）","slug":"_22-迭代器模式-iterator-pattern","link":"#_22-迭代器模式-iterator-pattern","children":[{"level":3,"title":"定义：？？？","slug":"定义-18","link":"#定义-18","children":[]}]},{"level":2,"title":"23.访问者模式（Visitor Pattern）","slug":"_23-访问者模式-visitor-pattern","link":"#_23-访问者模式-visitor-pattern","children":[{"level":3,"title":"定义","slug":"定义-19","link":"#定义-19","children":[]},{"level":3,"title":"为何使用 Visitor?","slug":"为何使用-visitor","link":"#为何使用-visitor","children":[]},{"level":3,"title":"如何使用 Visitor?","slug":"如何使用-visitor","link":"#如何使用-visitor","children":[]},{"level":3,"title":"使用 Visitor 模式的前提","slug":"使用-visitor-模式的前提","link":"#使用-visitor-模式的前提","children":[]}]}],"git":{"createdTime":1671170523000,"updatedTime":1678035260000,"contributors":[{"name":"jf","email":"iskong9@163.com","commits":4},{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":119.31,"words":35794},"filePathRelative":"java/23-design-patterns.md","localizedDate":"2019年8月6日","excerpt":"<p>六大设计原则，23种设计模式</p>\\n","autoDesc":true}');export{l as data};
