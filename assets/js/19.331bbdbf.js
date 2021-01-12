(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{537:function(t,s,a){t.exports=a.p+"assets/img/945531-20170422114107571-1922132507.7caafabf.png"},538:function(t,s,a){t.exports=a.p+"assets/img/945531-20170422114506899-1806573904.f9f15554.png"},571:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("在开发中难免会遇到windows的端口被占用，现在我们来查看端口的占用和结束占用端口的进程。")]),t._v(" "),e("p",[t._v("需要先按键"),e("code",[t._v("win+r")]),t._v(" 输入"),e("code",[t._v("cmd")]),t._v("进入命令提示符；")]),t._v(" "),e("h3",{attrs:{id:"根据端口号查进程pid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据端口号查进程pid"}},[t._v("#")]),t._v(" 根据端口号查进程PID")]),t._v(" "),e("p",[t._v("比如我们需要查看8080端口的占用情况，输入"),e("code",[t._v('netstat -aon | findstr "8080"')]),t._v("，可以看出当前8080端口被进程号(PID)为9948的程序占用。输入命令时"),e("strong",[t._v("注意空格")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[t._v("C:\\Users\\Administrator>netstat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("aon "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" findstr "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080"')]),t._v("\n　Proto   Local Address         Foreign Address        State           PID\n　====    ============          ==============        ==========     ======\n  TCP    0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0:8080           0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0:0              LISTENING       9948\n  TCP    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":8080              "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("::"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":0                 LISTENING       9948\n")])])]),e("h3",{attrs:{id:"可选-根据pid查询具体的进程任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可选-根据pid查询具体的进程任务"}},[t._v("#")]),t._v(" [可选]根据PID查询具体的进程任务")]),t._v(" "),e("p",[t._v("输入"),e("code",[t._v('tasklist | findstr "9948"')]),t._v("，来查看进程PID是9948的程序占用情况。如下所示，可以看出PID为9948的进程是javaw.exe。如果你很熟悉此进程，并确定可以终止，那么就直接进入下一步使用"),e("code",[t._v("taskkill /pid 9948 /F")]),t._v("命令把PID为9948的进程终止而无需每次都执行"),e("code",[t._v("tasklist")]),t._v("命令。")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[t._v("C:\\Users\\Administrator>tasklist "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" findstr "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12012"')]),t._v("\n  图像名                       PID   会话名                   会话     内存使用\n=======================      ====== ======                ========  ========\n javaw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe                    9948  Console                  1      329"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("652 K\n")])])]),e("h3",{attrs:{id:"根据pid结束进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据pid结束进程"}},[t._v("#")]),t._v(" 根据PID结束进程")]),t._v(" "),e("h4",{attrs:{id:"通过命令结束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过命令结束"}},[t._v("#")]),t._v(" 通过命令结束")]),t._v(" "),e("p",[t._v("通过输入"),e("code",[t._v("taskkill /pid 9948 /F")]),t._v("命令，来结束PID为9948的进程。")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[t._v("C:\\Users\\Administrator>taskkill "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pid 9948 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("F\n成功: 已终止 PID 为 9948 的进程。\n")])])]),e("h4",{attrs:{id:"通过任务管理器结束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过任务管理器结束"}},[t._v("#")]),t._v(" 通过任务管理器结束")]),t._v(" "),e("p",[t._v("这一步同样可以在任务管理器中执行，右击windows任务栏，选择任务管理器（快捷键："),e("code",[t._v("Ctrl+Shift+Esc")]),t._v("）选择详细信息找到PID为9948的条目，如下图所示。"),e("code",[t._v("javaw.exe")]),t._v("就是任务管理器中的映像名称，选中它并点击”结束进程”即可。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(537),alt:"通过任务管理器结束"}})]),t._v(" "),e("h3",{attrs:{id:"完整命令截图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整命令截图"}},[t._v("#")]),t._v(" 完整命令截图")]),t._v(" "),e("p",[e("img",{attrs:{src:a(538),alt:"完整命令截图"}})]),t._v(" "),e("blockquote",[e("p",[t._v("该篇文章转载自本人的博客园（不再更新）。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);