(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{592:function(a,e,t){"use strict";t.r(e);var n=t(4),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"问题重现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题重现"}},[a._v("#")]),a._v(" 问题重现")]),a._v(" "),t("p",[a._v("后台接口定义：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@POST")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/finishOrder"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Produces")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application/json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Consumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"application/json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Result")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("finishOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@HeaderParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Const")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("TOKEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" orderlist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@QueryParam")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hasSix"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" hasSix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("前端请求(简写)：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('url: http://test.com/finishOrder\nheader:token:123456\nmethod:post\nrequest Body:\n{"orderList":[{"num":"202103192374","CustomerIndex":0,"RemarkIndex":"","RemarkName":"","RemarkValue":"","Rid":"0"}],"hasSix":"N"}\n')])])]),t("p",[a._v("报错：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("org.jboss.resteasy.spi.ReaderException: org.codehaus.jackson.map.JsonMappingException: Can not deserialize instance of java.util.ArrayList out of START_OBJECT token\n at [Source: java.io.ByteArrayInputStream@730d5810; line: 1, column: 1]\n        at org.jboss.resteasy.core.MessageBodyParameterInjector.inject(MessageBodyParameterInjector.java:202)\n        at org.jboss.resteasy.core.MethodInjectorImpl.injectArguments(MethodInjectorImpl.java:136)\n        at org.jboss.resteasy.core.MethodInjectorImpl.invoke(MethodInjectorImpl.java:159)\n        at org.jboss.resteasy.core.ResourceMethod.invokeOnTarget(ResourceMethod.java:257)\n        at org.jboss.resteasy.core.ResourceMethod.invoke(ResourceMethod.java:222)\n        at org.jboss.resteasy.core.ResourceMethod.invoke(ResourceMethod.java:211)\n        at org.jboss.resteasy.core.SynchronousDispatcher.getResponse(SynchronousDispatcher.java:542)\n        at org.jboss.resteasy.core.SynchronousDispatcher.invoke(SynchronousDispatcher.java:524)\n        at org.jboss.resteasy.core.SynchronousDispatcher.invoke(SynchronousDispatcher.java:126)\n        at org.jboss.resteasy.plugins.server.servlet.ServletContainerDispatcher.service(ServletContainerDispatcher.java:208)\n        at org.jboss.resteasy.plugins.server.servlet.HttpServletDispatcher.service(HttpServletDispatcher.java:55)\n        at org.jboss.resteasy.plugins.server.servlet.HttpServletDispatcher.service(HttpServletDispatcher.java:50)\n        at javax.servlet.http.HttpServlet.service(HttpServlet.java:717)\n        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:290)\n        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n        at com.test.server.filter.UrlFilter.doFilter(UrlFilter.java:91)\n        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)\n        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n        at com.test.server.filter.gzip.CompressionFilter.doFilter(CompressionFilter.java:56)\n        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)\n        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n        at org.jboss.web.tomcat.filters.ReplyHeaderFilter.doFilter(ReplyHeaderFilter.java:96)\n        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:235)\n        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:206)\n        at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:235)\n        at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:191)\n        at org.jboss.web.tomcat.security.SecurityAssociationValve.invoke(SecurityAssociationValve.java:190)\n        at org.jboss.web.tomcat.security.JaccContextValve.invoke(JaccContextValve.java:92)\n        at org.jboss.web.tomcat.security.SecurityContextEstablishmentValve.process(SecurityContextEstablishmentValve.java:126)\n        at org.jboss.web.tomcat.security.SecurityContextEstablishmentValve.invoke(SecurityContextEstablishmentValve.java:70)\n        at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:127)\n        at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)\n        at org.jboss.web.tomcat.service.jca.CachedConnectionValve.invoke(CachedConnectionValve.java:158)\n        at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:109)\n        at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:330)\n        at org.apache.coyote.http11.Http11Processor.process(Http11Processor.java:829)\n        at org.apache.coyote.http11.Http11Protocol$Http11ConnectionHandler.process(Http11Protocol.java:598)\n        at org.apache.tomcat.util.net.JIoEndpoint$Worker.run(JIoEndpoint.java:447)\n        at java.lang.Thread.run(Thread.java:662)\nCaused by: org.codehaus.jackson.map.JsonMappingException: Can not deserialize instance of java.util.ArrayList out of START_OBJECT token\n at [Source: java.io.ByteArrayInputStream@730d5810; line: 1, column: 1]\n        at org.codehaus.jackson.map.JsonMappingException.from(JsonMappingException.java:163)\n        at org.codehaus.jackson.map.deser.StdDeserializationContext.mappingException(StdDeserializationContext.java:219)\n        at org.codehaus.jackson.map.deser.StdDeserializationContext.mappingException(StdDeserializationContext.java:212)\n        at org.codehaus.jackson.map.deser.std.CollectionDeserializer.handleNonArray(CollectionDeserializer.java:246)\n        at org.codehaus.jackson.map.deser.std.CollectionDeserializer.deserialize(CollectionDeserializer.java:204)\n        at org.codehaus.jackson.map.deser.std.CollectionDeserializer.deserialize(CollectionDeserializer.java:194)\n        at org.codehaus.jackson.map.deser.std.CollectionDeserializer.deserialize(CollectionDeserializer.java:30)\n        at org.codehaus.jackson.map.ObjectMapper._readValue(ObjectMapper.java:2704)\n        at org.codehaus.jackson.map.ObjectMapper.readValue(ObjectMapper.java:1315)\n        at org.codehaus.jackson.jaxrs.JacksonJsonProvider.readFrom(JacksonJsonProvider.java:419)\n        at org.jboss.resteasy.core.interception.MessageBodyReaderContextImpl.proceed(MessageBodyReaderContextImpl.java:105)\n        at org.jboss.resteasy.plugins.interceptors.encoding.GZIPDecodingInterceptor.read(GZIPDecodingInterceptor.java:63)\n        at org.jboss.resteasy.core.interception.MessageBodyReaderContextImpl.proceed(MessageBodyReaderContextImpl.java:108)\n        at org.jboss.resteasy.core.MessageBodyParameterInjector.inject(MessageBodyParameterInjector.java:169)\n        ... 38 more\n")])])]),t("h2",{attrs:{id:"问题解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[a._v("#")]),a._v(" 问题解决")]),a._v(" "),t("p",[a._v("主要问题出在前端请求参数有问题，当参数为List时直接传数组，而"),t("code",[a._v("@QueryParam")]),a._v("的参数需要带在Url参数后面。")]),a._v(" "),t("p",[a._v("前端请求(简写)：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('url: http://test.com/finishOrder?hasSix=N\nheaders:token:123456\nmethod:post\nrequest Body:\n[{"num":"202103192374","CustomerIndex":0,"RemarkIndex":"","RemarkName":"","RemarkValue":"","Rid":"0"}]\n')])])]),t("p",[a._v("此时，问题解决。")])])}),[],!1,null,null,null);e.default=s.exports}}]);