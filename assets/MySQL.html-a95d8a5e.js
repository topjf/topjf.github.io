const l=JSON.parse(`{"key":"v-ac90a302","path":"/database/mysql/MySQL.html","title":"MySQL内容整理","lang":"zh-CN","frontmatter":{"icon":"edit","title":"MySQL内容整理","category":["database"],"date":"2022-05-12T00:00:00.000Z","tag":["MySQL"],"description":"数据结构在线演示 二叉树在线演示 红黑树在线演示 B树在线演示 B+树在线演示","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/database/mysql/MySQL.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"MySQL内容整理"}],["meta",{"property":"og:description","content":"数据结构在线演示 二叉树在线演示 红黑树在线演示 B树在线演示 B+树在线演示"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://topjf.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-05T16:54:20.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MySQL内容整理"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2022-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-05T16:54:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL内容整理\\",\\"image\\":[\\"https://topjf.github.io/\\"],\\"datePublished\\":\\"2022-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-05T16:54:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.1、SQL概述","slug":"_1-1、sql概述","link":"#_1-1、sql概述","children":[]},{"level":2,"title":"1.2、什么是数据库","slug":"_1-2、什么是数据库","link":"#_1-2、什么是数据库","children":[]},{"level":2,"title":"1.3、MySql概述","slug":"_1-3、mysql概述","link":"#_1-3、mysql概述","children":[]},{"level":2,"title":"1.4、MySql的安装","slug":"_1-4、mysql的安装","link":"#_1-4、mysql的安装","children":[]},{"level":2,"title":"1.5、表","slug":"_1-5、表","link":"#_1-5、表","children":[]},{"level":2,"title":"1.6、SQL的分类","slug":"_1-6、sql的分类","link":"#_1-6、sql的分类","children":[]},{"level":2,"title":"1.7、导入演示数据","slug":"_1-7、导入演示数据","link":"#_1-7、导入演示数据","children":[]},{"level":2,"title":"1.8、表结构描述","slug":"_1-8、表结构描述","link":"#_1-8、表结构描述","children":[]},{"level":2,"title":"2.1、查看msyql版本","slug":"_2-1、查看msyql版本","link":"#_2-1、查看msyql版本","children":[]},{"level":2,"title":"2.2、创建数据库","slug":"_2-2、创建数据库","link":"#_2-2、创建数据库","children":[]},{"level":2,"title":"2.3、查询当前使用的数据库","slug":"_2-3、查询当前使用的数据库","link":"#_2-3、查询当前使用的数据库","children":[]},{"level":2,"title":"2.4、终止一条语句","slug":"_2-4、终止一条语句","link":"#_2-4、终止一条语句","children":[]},{"level":2,"title":"2.5、退出mysql","slug":"_2-5、退出mysql","link":"#_2-5、退出mysql","children":[]},{"level":2,"title":"3.1、查看和指定现有的数据库","slug":"_3-1、查看和指定现有的数据库","link":"#_3-1、查看和指定现有的数据库","children":[]},{"level":2,"title":"3.2、指定当前缺省数据库","slug":"_3-2、指定当前缺省数据库","link":"#_3-2、指定当前缺省数据库","children":[]},{"level":2,"title":"3.3、查看当前使用的库","slug":"_3-3、查看当前使用的库","link":"#_3-3、查看当前使用的库","children":[]},{"level":2,"title":"3.4、查看当前库中的表","slug":"_3-4、查看当前库中的表","link":"#_3-4、查看当前库中的表","children":[]},{"level":2,"title":"3.5、查看其他库中的表","slug":"_3-5、查看其他库中的表","link":"#_3-5、查看其他库中的表","children":[]},{"level":2,"title":"3.6、查看表的结构","slug":"_3-6、查看表的结构","link":"#_3-6、查看表的结构","children":[]},{"level":2,"title":"3.7、查看表的创建语句","slug":"_3-7、查看表的创建语句","link":"#_3-7、查看表的创建语句","children":[]},{"level":2,"title":"4.1、查询一个字段","slug":"_4-1、查询一个字段","link":"#_4-1、查询一个字段","children":[]},{"level":2,"title":"4.2、查询多个字段","slug":"_4-2、查询多个字段","link":"#_4-2、查询多个字段","children":[]},{"level":2,"title":"4.3、查询全部字段","slug":"_4-3、查询全部字段","link":"#_4-3、查询全部字段","children":[]},{"level":2,"title":"4.4、计算员工的年薪","slug":"_4-4、计算员工的年薪","link":"#_4-4、计算员工的年薪","children":[]},{"level":2,"title":"4.5、将查询出来的字段显示为中文","slug":"_4-5、将查询出来的字段显示为中文","link":"#_4-5、将查询出来的字段显示为中文","children":[]},{"level":2,"title":"5.1、等号操作符","slug":"_5-1、等号操作符","link":"#_5-1、等号操作符","children":[]},{"level":2,"title":"5.2、 <> 操作符","slug":"_5-2、-操作符","link":"#_5-2、-操作符","children":[]},{"level":2,"title":"5.3、between … and … 操作符","slug":"_5-3、between-and-操作符","link":"#_5-3、between-and-操作符","children":[]},{"level":2,"title":"5.4、is null","slug":"_5-4、is-null","link":"#_5-4、is-null","children":[]},{"level":2,"title":"5.5、 and","slug":"_5-5、-and","link":"#_5-5、-and","children":[]},{"level":2,"title":"5.6、or","slug":"_5-6、or","link":"#_5-6、or","children":[]},{"level":2,"title":"5.7、表达式的优先级","slug":"_5-7、表达式的优先级","link":"#_5-7、表达式的优先级","children":[]},{"level":2,"title":"5.8、in","slug":"_5-8、in","link":"#_5-8、in","children":[]},{"level":2,"title":"5.9、not","slug":"_5-9、not","link":"#_5-9、not","children":[]},{"level":2,"title":"5.10、like","slug":"_5-10、like","link":"#_5-10、like","children":[]},{"level":2,"title":"6.1、单一字段排序","slug":"_6-1、单一字段排序","link":"#_6-1、单一字段排序","children":[]},{"level":2,"title":"6.2、手动指定排序顺序","slug":"_6-2、手动指定排序顺序","link":"#_6-2、手动指定排序顺序","children":[]},{"level":2,"title":"6.3、多个字段排序","slug":"_6-3、多个字段排序","link":"#_6-3、多个字段排序","children":[]},{"level":2,"title":"6.4、使用字段的位置来排序","slug":"_6-4、使用字段的位置来排序","link":"#_6-4、使用字段的位置来排序","children":[]},{"level":2,"title":"7.1、lower","slug":"_7-1、lower","link":"#_7-1、lower","children":[]},{"level":2,"title":"7.2、upper","slug":"_7-2、upper","link":"#_7-2、upper","children":[]},{"level":2,"title":"7.3、substr","slug":"_7-3、substr","link":"#_7-3、substr","children":[]},{"level":2,"title":"7.4、length","slug":"_7-4、length","link":"#_7-4、length","children":[]},{"level":2,"title":"7.5、trim","slug":"_7-5、trim","link":"#_7-5、trim","children":[]},{"level":2,"title":"7.6、str_to_date (必须严格按照标准输出)","slug":"_7-6、str-to-date-必须严格按照标准输出","link":"#_7-6、str-to-date-必须严格按照标准输出","children":[]},{"level":2,"title":"7.7、date_format","slug":"_7-7、date-format","link":"#_7-7、date-format","children":[]},{"level":2,"title":"7.8、format","slug":"_7-8、format","link":"#_7-8、format","children":[]},{"level":2,"title":"7.9、round","slug":"_7-9、round","link":"#_7-9、round","children":[]},{"level":2,"title":"7.10、rand()","slug":"_7-10、rand","link":"#_7-10、rand","children":[]},{"level":2,"title":"7.11、case … when … then …..else …end","slug":"_7-11、case-when-then-else-end","link":"#_7-11、case-when-then-else-end","children":[]},{"level":2,"title":"7.12、ifnull","slug":"_7-12、ifnull","link":"#_7-12、ifnull","children":[]},{"level":2,"title":"8.1、count","slug":"_8-1、count","link":"#_8-1、count","children":[]},{"level":2,"title":"8.2、sum","slug":"_8-2、sum","link":"#_8-2、sum","children":[]},{"level":2,"title":"8.3、avg","slug":"_8-3、avg","link":"#_8-3、avg","children":[]},{"level":2,"title":"8.4、max","slug":"_8-4、max","link":"#_8-4、max","children":[]},{"level":2,"title":"8.5、min","slug":"_8-5、min","link":"#_8-5、min","children":[]},{"level":2,"title":"8.6、组合聚合函数","slug":"_8-6、组合聚合函数","link":"#_8-6、组合聚合函数","children":[]},{"level":2,"title":"9.1、group by","slug":"_9-1、group-by","link":"#_9-1、group-by","children":[]},{"level":2,"title":"9.2、having","slug":"_9-2、having","link":"#_9-2、having","children":[]},{"level":2,"title":"9.3、select语句总结","slug":"_9-3、select语句总结","link":"#_9-3、select语句总结","children":[]},{"level":2,"title":"10.1、SQL92语法","slug":"_10-1、sql92语法","link":"#_10-1、sql92语法","children":[]},{"level":2,"title":"10.2、SQL99语法","slug":"_10-2、sql99语法","link":"#_10-2、sql99语法","children":[]},{"level":2,"title":"10.3、连接分类","slug":"_10-3、连接分类","link":"#_10-3、连接分类","children":[{"level":3,"title":"内链接 inner join","slug":"内链接-inner-join","link":"#内链接-inner-join","children":[]},{"level":3,"title":"外连接 left join 、right join","slug":"外连接-left-join-、right-join","link":"#外连接-left-join-、right-join","children":[]},{"level":3,"title":"左外连接（左连接）和右外连接（右连接）的区别？","slug":"左外连接-左连接-和右外连接-右连接-的区别","link":"#左外连接-左连接-和右外连接-右连接-的区别","children":[]}]},{"level":2,"title":"11.1、在where语句中使用子查询，也就是在where语句中加入select语句","slug":"_11-1、在where语句中使用子查询-也就是在where语句中加入select语句","link":"#_11-1、在where语句中使用子查询-也就是在where语句中加入select语句","children":[]},{"level":2,"title":"11.2、在from语句中使用子查询，可以将该子查询看做一张表","slug":"_11-2、在from语句中使用子查询-可以将该子查询看做一张表","link":"#_11-2、在from语句中使用子查询-可以将该子查询看做一张表","children":[]},{"level":2,"title":"11.3、在select语句中使用子查询","slug":"_11-3、在select语句中使用子查询","link":"#_11-3、在select语句中使用子查询","children":[]},{"level":2,"title":"12.1、union可以合并集合（相加）","slug":"_12-1、union可以合并集合-相加","link":"#_12-1、union可以合并集合-相加","children":[]},{"level":2,"title":"13.1、取得前5条数据","slug":"_13-1、取得前5条数据","link":"#_13-1、取得前5条数据","children":[]},{"level":2,"title":"13.2、从第二条开始取两条数据","slug":"_13-2、从第二条开始取两条数据","link":"#_13-2、从第二条开始取两条数据","children":[]},{"level":2,"title":"13.3、取得薪水最高的前5名","slug":"_13-3、取得薪水最高的前5名","link":"#_13-3、取得薪水最高的前5名","children":[]},{"level":2,"title":"14.1、创建表","slug":"_14-1、创建表","link":"#_14-1、创建表","children":[]},{"level":2,"title":"14.2、增加/删除/修改表结构","slug":"_14-2、增加-删除-修改表结构","link":"#_14-2、增加-删除-修改表结构","children":[{"level":3,"title":"14.2.1、添加字段","slug":"_14-2-1、添加字段","link":"#_14-2-1、添加字段","children":[]},{"level":3,"title":"14.2.2、修改字段","slug":"_14-2-2、修改字段","link":"#_14-2-2、修改字段","children":[]},{"level":3,"title":"14.2.3、删除字段","slug":"_14-2-3、删除字段","link":"#_14-2-3、删除字段","children":[]}]},{"level":2,"title":"14.3、添加、修改和删除","slug":"_14-3、添加、修改和删除","link":"#_14-3、添加、修改和删除","children":[{"level":3,"title":"14.3.1、insert","slug":"_14-3-1、insert","link":"#_14-3-1、insert","children":[]},{"level":3,"title":"14.3.2、update","slug":"_14-3-2、update","link":"#_14-3-2、update","children":[]},{"level":3,"title":"14.3.3、delete","slug":"_14-3-3、delete","link":"#_14-3-3、delete","children":[]}]},{"level":2,"title":"14.4、创建表加入约束","slug":"_14-4、创建表加入约束","link":"#_14-4、创建表加入约束","children":[{"level":3,"title":"14.4.1、非空约束，not null","slug":"_14-4-1、非空约束-not-null","link":"#_14-4-1、非空约束-not-null","children":[]},{"level":3,"title":"14.4.2、唯一约束，unique","slug":"_14-4-2、唯一约束-unique","link":"#_14-4-2、唯一约束-unique","children":[]},{"level":3,"title":"14.4.3、主键约束，primary key","slug":"_14-4-3、主键约束-primary-key","link":"#_14-4-3、主键约束-primary-key","children":[]},{"level":3,"title":"14.4.4、外键约束，foreign key","slug":"_14-4-4、外键约束-foreign-key","link":"#_14-4-4、外键约束-foreign-key","children":[]}]},{"level":2,"title":"14.4.5、级联更新与级联删除","slug":"_14-4-5、级联更新与级联删除","link":"#_14-4-5、级联更新与级联删除","children":[{"level":3,"title":"14.4.5.1、on update cascade","slug":"_14-4-5-1、on-update-cascade","link":"#_14-4-5-1、on-update-cascade","children":[]},{"level":3,"title":"14.4.5.2、on delete cascade","slug":"_14-4-5-2、on-delete-cascade","link":"#_14-4-5-2、on-delete-cascade","children":[]}]},{"level":2,"title":"14.5、t_student和t_classes完整示例","slug":"_14-5、t-student和t-classes完整示例","link":"#_14-5、t-student和t-classes完整示例","children":[]},{"level":2,"title":"14.6、增加/删除/修改表约束","slug":"_14-6、增加-删除-修改表约束","link":"#_14-6、增加-删除-修改表约束","children":[{"level":3,"title":"14.6.1、删除约束","slug":"_14-6-1、删除约束","link":"#_14-6-1、删除约束","children":[]},{"level":3,"title":"14.6.2、添加约束","slug":"_14-6-2、添加约束","link":"#_14-6-2、添加约束","children":[]},{"level":3,"title":"14.6.3、修改约束，其实就是修改字段","slug":"_14-6-3、修改约束-其实就是修改字段","link":"#_14-6-3、修改约束-其实就是修改字段","children":[]}]},{"level":2,"title":"15.1、存储引擎的使用","slug":"_15-1、存储引擎的使用","link":"#_15-1、存储引擎的使用","children":[]},{"level":2,"title":"15.2、常用的存储引擎","slug":"_15-2、常用的存储引擎","link":"#_15-2、常用的存储引擎","children":[{"level":3,"title":"15.2.1、MyISAM存储引擎","slug":"_15-2-1、myisam存储引擎","link":"#_15-2-1、myisam存储引擎","children":[]},{"level":3,"title":"15.2.2、InnoDB存储引擎","slug":"_15-2-2、innodb存储引擎","link":"#_15-2-2、innodb存储引擎","children":[]},{"level":3,"title":"15.2.3、MEMORY存储引擎","slug":"_15-2-3、memory存储引擎","link":"#_15-2-3、memory存储引擎","children":[]}]},{"level":2,"title":"15.3、选择合适的存储引擎","slug":"_15-3、选择合适的存储引擎","link":"#_15-3、选择合适的存储引擎","children":[]},{"level":2,"title":"16.1、概述","slug":"_16-1、概述","link":"#_16-1、概述","children":[]},{"level":2,"title":"16.2、事务的提交与回滚演示","slug":"_16-2、事务的提交与回滚演示","link":"#_16-2、事务的提交与回滚演示","children":[]},{"level":2,"title":"16.3、自动提交模式","slug":"_16-3、自动提交模式","link":"#_16-3、自动提交模式","children":[]},{"level":2,"title":"16.4、事务的隔离级别","slug":"_16-4、事务的隔离级别","link":"#_16-4、事务的隔离级别","children":[{"level":3,"title":"16.4.1、隔离级别","slug":"_16-4-1、隔离级别","link":"#_16-4-1、隔离级别","children":[]},{"level":3,"title":"16.4.2、四个隔离级别","slug":"_16-4-2、四个隔离级别","link":"#_16-4-2、四个隔离级别","children":[]},{"level":3,"title":"16.4.3、隔离级别与一致性问题的关系","slug":"_16-4-3、隔离级别与一致性问题的关系","link":"#_16-4-3、隔离级别与一致性问题的关系","children":[]},{"level":3,"title":"16.4.4、设置服务器缺省隔离级别","slug":"_16-4-4、设置服务器缺省隔离级别","link":"#_16-4-4、设置服务器缺省隔离级别","children":[]},{"level":3,"title":"16.4.5、隔离级别的作用范围","slug":"_16-4-5、隔离级别的作用范围","link":"#_16-4-5、隔离级别的作用范围","children":[]},{"level":3,"title":"16.4.6、查看隔离级别","slug":"_16-4-6、查看隔离级别","link":"#_16-4-6、查看隔离级别","children":[]},{"level":3,"title":"16.4.7、并发事务与隔离级别示例","slug":"_16-4-7、并发事务与隔离级别示例","link":"#_16-4-7、并发事务与隔离级别示例","children":[]}]},{"level":2,"title":"17.1、索引原理","slug":"_17-1、索引原理","link":"#_17-1、索引原理","children":[]},{"level":2,"title":"17.2、索引的应用","slug":"_17-2、索引的应用","link":"#_17-2、索引的应用","children":[{"level":3,"title":"17.2.1、创建索引","slug":"_17-2-1、创建索引","link":"#_17-2-1、创建索引","children":[]},{"level":3,"title":"17.2.2、查看索引","slug":"_17-2-2、查看索引","link":"#_17-2-2、查看索引","children":[]},{"level":3,"title":"17.2.3、使用索引","slug":"_17-2-3、使用索引","link":"#_17-2-3、使用索引","children":[]},{"level":3,"title":"17.2.4、删除索引","slug":"_17-2-4、删除索引","link":"#_17-2-4、删除索引","children":[]}]},{"level":2,"title":"18.1、什么是视图","slug":"_18-1、什么是视图","link":"#_18-1、什么是视图","children":[]},{"level":2,"title":"18.2、创建视图","slug":"_18-2、创建视图","link":"#_18-2、创建视图","children":[]},{"level":2,"title":"18.3、修改视图","slug":"_18-3、修改视图","link":"#_18-3、修改视图","children":[]},{"level":2,"title":"18.4、删除视图","slug":"_18-4、删除视图","link":"#_18-4、删除视图","children":[]},{"level":2,"title":"19.1、基础介绍","slug":"_19-1、基础介绍","link":"#_19-1、基础介绍","children":[]},{"level":2,"title":"19.2、创建存储过程","slug":"_19-2、创建存储过程","link":"#_19-2、创建存储过程","children":[]},{"level":2,"title":"19.3、删除存储过程","slug":"_19-3、删除存储过程","link":"#_19-3、删除存储过程","children":[]},{"level":2,"title":"20.1、","slug":"_20-1、","link":"#_20-1、","children":[]},{"level":2,"title":"20.2、","slug":"_20-2、","link":"#_20-2、","children":[]},{"level":2,"title":"20.3、","slug":"_20-3、","link":"#_20-3、","children":[]},{"level":2,"title":"21.1、新建用户","slug":"_21-1、新建用户","link":"#_21-1、新建用户","children":[]},{"level":2,"title":"21.2、授权","slug":"_21-2、授权","link":"#_21-2、授权","children":[]},{"level":2,"title":"21.3、回收权限","slug":"_21-3、回收权限","link":"#_21-3、回收权限","children":[]},{"level":2,"title":"21.4、导出导入","slug":"_21-4、导出导入","link":"#_21-4、导出导入","children":[{"level":3,"title":"21.4.1、导出","slug":"_21-4-1、导出","link":"#_21-4-1、导出","children":[]},{"level":3,"title":"21.4.2、导入","slug":"_21-4-2、导入","link":"#_21-4-2、导入","children":[]}]},{"level":2,"title":"22.1、第一范式","slug":"_22-1、第一范式","link":"#_22-1、第一范式","children":[]},{"level":2,"title":"22.2、第二范式","slug":"_22-2、第二范式","link":"#_22-2、第二范式","children":[]},{"level":2,"title":"22.3、第三范式","slug":"_22-3、第三范式","link":"#_22-3、第三范式","children":[]},{"level":2,"title":"22.4、三范式总结","slug":"_22-4、三范式总结","link":"#_22-4、三范式总结","children":[]},{"level":2,"title":"1，请问，慢查询出现后如何调优？","slug":"_1-请问-慢查询出现后如何调优","link":"#_1-请问-慢查询出现后如何调优","children":[]},{"level":2,"title":"2，请问，应该使用哪种索引引擎？","slug":"_2-请问-应该使用哪种索引引擎","link":"#_2-请问-应该使用哪种索引引擎","children":[]},{"level":2,"title":"3，索引的常用形式是如何？","slug":"_3-索引的常用形式是如何","link":"#_3-索引的常用形式是如何","children":[]},{"level":2,"title":"4，id自增设定是否合理？","slug":"_4-id自增设定是否合理","link":"#_4-id自增设定是否合理","children":[]},{"level":2,"title":"5，应该推荐整型索引使用还是uuid唯一性字符索引使用？","slug":"_5-应该推荐整型索引使用还是uuid唯一性字符索引使用","link":"#_5-应该推荐整型索引使用还是uuid唯一性字符索引使用","children":[]},{"level":2,"title":"6，mysql的索引是什么？","slug":"_6-mysql的索引是什么","link":"#_6-mysql的索引是什么","children":[]},{"level":2,"title":"7，mysql的索引结构是什么？为什么？其他的参考结构差到哪里？","slug":"_7-mysql的索引结构是什么-为什么-其他的参考结构差到哪里","link":"#_7-mysql的索引结构是什么-为什么-其他的参考结构差到哪里","children":[]},{"level":2,"title":"1、取得每个部门最高薪水的人员名称","slug":"_1、取得每个部门最高薪水的人员名称","link":"#_1、取得每个部门最高薪水的人员名称","children":[]},{"level":2,"title":"2、哪些人的薪水在部门的平均薪水之上","slug":"_2、哪些人的薪水在部门的平均薪水之上","link":"#_2、哪些人的薪水在部门的平均薪水之上","children":[]},{"level":2,"title":"3、取得部门中（所有人的）平均的薪水等级，如下","slug":"_3、取得部门中-所有人的-平均的薪水等级-如下","link":"#_3、取得部门中-所有人的-平均的薪水等级-如下","children":[]},{"level":2,"title":"4、不准用组函数（Max），取得最高薪水（给出两种解决方案）","slug":"_4、不准用组函数-max-取得最高薪水-给出两种解决方案","link":"#_4、不准用组函数-max-取得最高薪水-给出两种解决方案","children":[]},{"level":2,"title":"5、取得平均薪水最高的部门的部门编号（至少给出两种解决方案）","slug":"_5、取得平均薪水最高的部门的部门编号-至少给出两种解决方案","link":"#_5、取得平均薪水最高的部门的部门编号-至少给出两种解决方案","children":[]},{"level":2,"title":"6、取得平均薪水最高的部门的部门名称","slug":"_6、取得平均薪水最高的部门的部门名称","link":"#_6、取得平均薪水最高的部门的部门名称","children":[]},{"level":2,"title":"7、求平均薪水的等级最低的部门的部门名称","slug":"_7、求平均薪水的等级最低的部门的部门名称","link":"#_7、求平均薪水的等级最低的部门的部门名称","children":[]},{"level":2,"title":"8、取得比普通员工的最高薪水还要高的领导人姓名","slug":"_8、取得比普通员工的最高薪水还要高的领导人姓名","link":"#_8、取得比普通员工的最高薪水还要高的领导人姓名","children":[]},{"level":2,"title":"9、取得薪水最高的前五名员工","slug":"_9、取得薪水最高的前五名员工","link":"#_9、取得薪水最高的前五名员工","children":[]},{"level":2,"title":"10、取得薪水最高的第六到第十名员工","slug":"_10、取得薪水最高的第六到第十名员工","link":"#_10、取得薪水最高的第六到第十名员工","children":[]},{"level":2,"title":"11、取得最后入职的5名员工","slug":"_11、取得最后入职的5名员工","link":"#_11、取得最后入职的5名员工","children":[]},{"level":2,"title":"12、取得每个薪水等级有多少员工","slug":"_12、取得每个薪水等级有多少员工","link":"#_12、取得每个薪水等级有多少员工","children":[]},{"level":2,"title":"13、学生面试题","slug":"_13、学生面试题","link":"#_13、学生面试题","children":[]},{"level":2,"title":"14、列出所有员工及领导的姓名","slug":"_14、列出所有员工及领导的姓名","link":"#_14、列出所有员工及领导的姓名","children":[]},{"level":2,"title":"15、列出受雇日期早于其直接上级的所有员工的编号,姓名,部门名称","slug":"_15、列出受雇日期早于其直接上级的所有员工的编号-姓名-部门名称","link":"#_15、列出受雇日期早于其直接上级的所有员工的编号-姓名-部门名称","children":[]},{"level":2,"title":"16、列出部门名称和这些部门的员工信息,同时列出那些没有员工的部门","slug":"_16、列出部门名称和这些部门的员工信息-同时列出那些没有员工的部门","link":"#_16、列出部门名称和这些部门的员工信息-同时列出那些没有员工的部门","children":[]},{"level":2,"title":"17、列出至少有5个员工的所有部门","slug":"_17、列出至少有5个员工的所有部门","link":"#_17、列出至少有5个员工的所有部门","children":[]},{"level":2,"title":"18、列出薪金比\\"SMITH\\"多的所有员工信息","slug":"_18、列出薪金比-smith-多的所有员工信息","link":"#_18、列出薪金比-smith-多的所有员工信息","children":[]},{"level":2,"title":"19、列出所有\\"CLERK\\"(办事员)的姓名及其部门名称,部门的人数","slug":"_19、列出所有-clerk-办事员-的姓名及其部门名称-部门的人数","link":"#_19、列出所有-clerk-办事员-的姓名及其部门名称-部门的人数","children":[]},{"level":2,"title":"20、列出最低薪金大于1500的各种工作及从事此工作的全部雇员人数","slug":"_20、列出最低薪金大于1500的各种工作及从事此工作的全部雇员人数","link":"#_20、列出最低薪金大于1500的各种工作及从事此工作的全部雇员人数","children":[]},{"level":2,"title":"21、列出在部门\\"SALES\\"<销售部>工作的员工的姓名,假定不知道销售部的部门编号","slug":"_21、列出在部门-sales-销售部-工作的员工的姓名-假定不知道销售部的部门编号","link":"#_21、列出在部门-sales-销售部-工作的员工的姓名-假定不知道销售部的部门编号","children":[]},{"level":2,"title":"22、列出薪金高于公司平均薪金的所有员工,所在部门,上级领导,雇员的工资等级","slug":"_22、列出薪金高于公司平均薪金的所有员工-所在部门-上级领导-雇员的工资等级","link":"#_22、列出薪金高于公司平均薪金的所有员工-所在部门-上级领导-雇员的工资等级","children":[]},{"level":2,"title":"23、列出与\\"SCOTT\\"从事相同工作的所有员工及部门名称","slug":"_23、列出与-scott-从事相同工作的所有员工及部门名称","link":"#_23、列出与-scott-从事相同工作的所有员工及部门名称","children":[]},{"level":2,"title":"24、列出薪金等于部门30中员工的薪金的其他员工的姓名和薪金","slug":"_24、列出薪金等于部门30中员工的薪金的其他员工的姓名和薪金","link":"#_24、列出薪金等于部门30中员工的薪金的其他员工的姓名和薪金","children":[]},{"level":2,"title":"25、列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金.部门名称","slug":"_25、列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金-部门名称","link":"#_25、列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金-部门名称","children":[]},{"level":2,"title":"26、列出在每个部门工作的员工数量,平均工资和平均服务期限","slug":"_26、列出在每个部门工作的员工数量-平均工资和平均服务期限","link":"#_26、列出在每个部门工作的员工数量-平均工资和平均服务期限","children":[]},{"level":2,"title":"27、列出所有员工的姓名、部门名称和工资","slug":"_27、列出所有员工的姓名、部门名称和工资","link":"#_27、列出所有员工的姓名、部门名称和工资","children":[]},{"level":2,"title":"28、列出所有部门的详细信息和人数","slug":"_28、列出所有部门的详细信息和人数","link":"#_28、列出所有部门的详细信息和人数","children":[]},{"level":2,"title":"29、列出各种工作的最低工资及从事此工作的雇员姓名","slug":"_29、列出各种工作的最低工资及从事此工作的雇员姓名","link":"#_29、列出各种工作的最低工资及从事此工作的雇员姓名","children":[]},{"level":2,"title":"30、列出各个部门的MANAGER(领导)的最低薪金","slug":"_30、列出各个部门的manager-领导-的最低薪金","link":"#_30、列出各个部门的manager-领导-的最低薪金","children":[]},{"level":2,"title":"31、列出所有员工的年工资,按年薪从低到高排序","slug":"_31、列出所有员工的年工资-按年薪从低到高排序","link":"#_31、列出所有员工的年工资-按年薪从低到高排序","children":[]},{"level":2,"title":"32、求出员工领导的薪水超过3000的员工名称与领导名称","slug":"_32、求出员工领导的薪水超过3000的员工名称与领导名称","link":"#_32、求出员工领导的薪水超过3000的员工名称与领导名称","children":[]},{"level":2,"title":"33、求出部门名称中,带'S'字符的部门员工的工资合计、部门人数","slug":"_33、求出部门名称中-带-s-字符的部门员工的工资合计、部门人数","link":"#_33、求出部门名称中-带-s-字符的部门员工的工资合计、部门人数","children":[]},{"level":2,"title":"34、给任职日期超过15年的员工加薪20%","slug":"_34、给任职日期超过15年的员工加薪20","link":"#_34、给任职日期超过15年的员工加薪20","children":[]}],"git":{"createdTime":1671170523000,"updatedTime":1678035260000,"contributors":[{"name":"jf","email":"iskong9@163.com","commits":3},{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":63.59,"words":19077},"filePathRelative":"database/mysql/MySQL.md","localizedDate":"2022年5月12日","excerpt":"<p><a target=\\"_blank\\" href=\\"https://www.cs.usfca.edu/~galles/visualization/Algorithms.html\\">数据结构在线演示</a></p>\\n<p><a target=\\"_blank\\" href=\\"https://www.cs.usfca.edu/~galles/visualization/BST.html\\">二叉树在线演示</a></p>\\n<p><a target=\\"_blank\\" href=\\"https://www.cs.usfca.edu/~galles/visualization/RedBlack.html\\">红黑树在线演示</a></p>\\n<p><a target=\\"_blank\\" href=\\"https://www.cs.usfca.edu/~galles/visualization/BTree.html\\">B树在线演示</a></p>\\n<p><a target=\\"_blank\\" href=\\"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html\\">B+树在线演示</a></p>\\n","autoDesc":true}`);export{l as data};
