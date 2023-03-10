const t=JSON.parse('{"key":"v-0f63ae0b","path":"/linux/exception-analysis.html","title":"Linux常见异常分析","lang":"zh-CN","frontmatter":{"icon":"linux","title":"Linux常见异常分析","category":["Linux"],"date":"2022-11-09T00:00:00.000Z","star":true,"tag":["exception-analysis"],"description":"1 常用的 Load 分析方法 CPU高、Load高 通过 top 命令查找占用CPU最高的进程PID；; 通过 top -Hp PID 查找占用CPU最高的线程TID;; 对于java程序，使用 jstack 打印线程堆栈信息；; 通过 printf %x tid 打印出最消耗CPU线程的十六进制；; CPU低、Load高 产生的原因一句话总结就是：...","head":[["meta",{"property":"og:url","content":"https://topjf.github.io/linux/exception-analysis.html"}],["meta",{"property":"og:site_name","content":"topjf"}],["meta",{"property":"og:title","content":"Linux常见异常分析"}],["meta",{"property":"og:description","content":"1 常用的 Load 分析方法 CPU高、Load高 通过 top 命令查找占用CPU最高的进程PID；; 通过 top -Hp PID 查找占用CPU最高的线程TID;; 对于java程序，使用 jstack 打印线程堆栈信息；; 通过 printf %x tid 打印出最消耗CPU线程的十六进制；; CPU低、Load高 产生的原因一句话总结就是：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-01T14:06:04.000Z"}],["meta",{"property":"article:tag","content":"exception-analysis"}],["meta",{"property":"article:published_time","content":"2022-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-01T14:06:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux常见异常分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-01T14:06:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 常用的 Load 分析方法","slug":"_1-常用的-load-分析方法","link":"#_1-常用的-load-分析方法","children":[{"level":3,"title":"CPU高、Load高","slug":"cpu高、load高","link":"#cpu高、load高","children":[]},{"level":3,"title":"CPU低、Load高","slug":"cpu低、load高","link":"#cpu低、load高","children":[]}]},{"level":2,"title":"2 CPU高、Load高情况分析","slug":"_2-cpu高、load高情况分析","link":"#_2-cpu高、load高情况分析","children":[{"level":3,"title":"2.1 使用 vmstat 查看系统纬度的 CPU 负载","slug":"_2-1-使用-vmstat-查看系统纬度的-cpu-负载","link":"#_2-1-使用-vmstat-查看系统纬度的-cpu-负载","children":[]},{"level":3,"title":"2.2 使用 top 查看进程纬度的 CPU 负载","slug":"_2-2-使用-top-查看进程纬度的-cpu-负载","link":"#_2-2-使用-top-查看进程纬度的-cpu-负载","children":[]}]},{"level":2,"title":"3 CPU低、Load高","slug":"_3-cpu低、load高","link":"#_3-cpu低、load高","children":[{"level":3,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]},{"level":3,"title":"处理办法","slug":"处理办法","link":"#处理办法","children":[]}]}],"git":{"createdTime":1671170523000,"updatedTime":1677679564000,"contributors":[{"name":"jf","email":"iskong9@163.com","commits":2},{"name":"jinfang","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":6.39,"words":1918},"filePathRelative":"linux/exception-analysis.md","localizedDate":"2022年11月9日","excerpt":"","autoDesc":true}');export{t as data};