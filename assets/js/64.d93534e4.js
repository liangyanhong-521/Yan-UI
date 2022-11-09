(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{441:function(t,n,l){},526:function(t,n,l){"use strict";l(441)},653:function(t,n,l){"use strict";l.r(n);l(526);var o=l(13),e=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"布局组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布局组件"}},[t._v("#")]),t._v(" 布局组件")]),t._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"基本布局",description:"使用单一分栏创建基础的栅格布局。"}},[n("layout-demo1"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<y-row>\n  <y-col :span="24"><div class="grid-content bg-purple"></div></y-col>\n</y-row>\n\n<y-row>\n  <y-col :span="12"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="12"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n\n<y-row>\n  <y-col :span="8"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="8"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :span="8"><div class="grid-content bg-purple"></div></y-col>\n</y-row>\n\n<y-row>\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="6"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="6"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n\n<y-row>\n  <y-col :span="4"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n\n<style lang="scss" scoped>\n    .bg-purple-dark {\n        background-color: rgb(172, 186, 199);\n    }\n    .bg-purple {\n        background-color: #d3dce6;\n    }\n    .bg-purple-light {\n        background-color: #e5e9f2;\n    }\n   .grid-content {\n      border-radius: 4px;\n      height: 36px;\n    }\n</style>\n')])])])])],1)],1),t._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"分栏间隔",description:"分栏之间存在间隔。提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。"}},[n("layout-demo2"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<y-row :gutter="20">\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="6"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="6"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n')])])])])],1)],1),t._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"混合布局",description:"通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"}},[n("layout-demo3"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<y-row :gutter="20">\n  <y-col :span="16"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="8"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n\n<y-row :gutter="20">\n  <y-col :span="8"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="8"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n\n<y-row :gutter="20">\n  <y-col :span="4"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="16"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple"></div></y-col>\n</y-row>\n')])])])])],1)],1),t._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"分栏偏移",description:"支持偏移指定的栏数。"}},[n("layout-demo4"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<y-row :gutter="20">\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="8" :offset="6"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n\n<y-row :gutter="20">\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="12" :offset="6"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n\n<y-row :gutter="20">\n  <y-col :span="4" :offset="12"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="4"><div class="grid-content bg-purple"></div></y-col>\n</y-row>\n')])])])])],1)],1),t._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"对齐方式",description:"通过 flex 布局来对分栏进行灵活的对齐。"}},[n("layout-demo5"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v(' <y-row :gutter="20" justify="center">\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="8" :offset="6"><div class="grid-content bg-purple-light"></div\n  ></y-col>\n</y-row>\n\n<y-row :gutter="20" justify="left">\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="8" :offset="6"><div class="grid-content bg-purple-light"></div\n  ></y-col>\n</y-row>\n\n<y-row :gutter="20" justify="right">\n  <y-col :span="6"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :span="8" :offset="6"><div class="grid-content bg-purple-light"></div\n  ></y-col>\n</y-row>\n')])])])])],1)],1),t._v(" "),n("ClientOnly",[n("code-demo",{attrs:{title:"响应式布局",description:"参照了Bootstrap的响应式设计，预设了五个响应尺寸：xs、sm、md、lg。"}},[n("layout-demo6"),t._v(" "),n("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('<y-row :gutter="10">\n  <y-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></y-col>\n  <y-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></y-col>\n  <y-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></y-col>\n</y-row>\n')])])])])],1)],1),t._v(" "),n("h3",{attrs:{id:"row-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#row-attributes"}},[t._v("#")]),t._v(" Row Attributes")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("gutter")]),t._v(" "),n("td",[t._v("栅格间隔")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("justify")]),t._v(" "),n("td",[t._v("flex 布局下的水平排列方式")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("left / center / right")]),t._v(" "),n("td",[t._v("left")])])])]),t._v(" "),n("h3",{attrs:{id:"col-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#col-attributes"}},[t._v("#")]),t._v(" Col Attributes")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("span")]),t._v(" "),n("td",[t._v("栅格占据的列数")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("24")])]),t._v(" "),n("tr",[n("td",[t._v("offset")]),t._v(" "),n("td",[t._v("栅格左侧的间隔格数")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("xs")]),t._v(" "),n("td",[t._v("<768px 响应式栅格数或者栅格属性对象")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("sm")]),t._v(" "),n("td",[t._v("≥768px 响应式栅格数或者栅格属性对象")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("md")]),t._v(" "),n("td",[t._v("≥992px 响应式栅格数或者栅格属性对象")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("lg")]),t._v(" "),n("td",[t._v("≥1200px 响应式栅格数或者栅格属性对象")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("0")])])])])],1)}),[],!1,null,"6ca00240",null);n.default=e.exports}}]);