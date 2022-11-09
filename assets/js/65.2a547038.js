(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{440:function(t,e,n){},525:function(t,e,n){"use strict";n(440)},652:function(t,e,n){"use strict";n.r(e);n(525);var m=n(13),v=Object(m.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"导航菜单组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航菜单组件"}},[t._v("#")]),t._v(" 导航菜单组件")]),t._v(" "),e("ClientOnly",[e("code-demo",{attrs:{title:"顶栏",description:"适用广泛的基础用法。"}},[e("menu-demo1"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<y-menu :selected.sync="selected">\n  <y-menu-item name="handle">处理中心</y-menu-item>\n  <y-menu-item name="workTop" disabled>我的工作台</y-menu-item>\n  <y-sub-menu name="about">\n    <template slot="title">关于</template>\n    <y-menu-item name="2-1">选项1</y-menu-item>\n    <y-sub-menu name="2-2">\n      <template slot="title">选项2</template>\n      <y-menu-item name="2-2-1">选项1</y-menu-item>\n      <y-menu-item name="2-2-2">选项2</y-menu-item>\n    </y-sub-menu>\n    <y-menu-item name="2-3">选项3</y-menu-item>\n    <y-menu-item name="2-4">选项4</y-menu-item>\n  </y-sub-menu>\n  <y-menu-item name="center">消息中心</y-menu-item>\n  <y-menu-item name="order">订单管理</y-menu-item>\n</y-menu>\n')])])])])],1)],1),t._v(" "),e("ClientOnly",[e("code-demo",{attrs:{title:"侧栏",description:"垂直菜单，可内嵌子菜单。"}},[e("menu-demo2"),t._v(" "),e("highlight-code",{attrs:{slot:"codeText"},slot:"codeText"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(' <y-menu :selected.sync="selected" vertical>\n  <y-menu-item name="handle">处理中心</y-menu-item>\n  <y-menu-item name="workTop" disabled>我的工作台</y-menu-item>\n  <y-sub-menu name="about">\n    <template slot="title">关于</template>\n    <y-menu-item name="2-1">选项1</y-menu-item>\n    <y-sub-menu name="2-2">\n      <template slot="title">选项2</template>\n      <y-menu-item name="2-2-1">选项1</y-menu-item>\n      <y-menu-item name="2-2-2">选项2</y-menu-item>\n    </y-sub-menu>\n    <y-menu-item name="2-3">选项3</y-menu-item>\n    <y-menu-item name="2-4">选项4</y-menu-item>\n  </y-sub-menu>\n  <y-menu-item name="center">消息中心</y-menu-item>\n  <y-menu-item name="order">订单管理</y-menu-item>\n</y-menu>\n')])])])])],1)],1),t._v(" "),e("h3",{attrs:{id:"menu-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menu-attributes"}},[t._v("#")]),t._v(" Menu Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("vertical")]),t._v(" "),e("td",[t._v("是否垂直显示")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("menuTrigger")]),t._v(" "),e("td",[t._v("触发方式")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("hover/click")]),t._v(" "),e("td",[t._v("hover")])]),t._v(" "),e("tr",[e("td",[t._v("selected")]),t._v(" "),e("td",[t._v("被选中的菜单(值为item的name)")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("——")]),t._v(" "),e("td",[t._v("——")])])])]),t._v(" "),e("h3",{attrs:{id:"menuitem-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#menuitem-attributes"}},[t._v("#")]),t._v(" MenuItem Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("是否禁用")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("与选项卡绑定值 selected 对应的标识符，表示选项卡别名")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])])])]),t._v(" "),e("h3",{attrs:{id:"submenu-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#submenu-attributes"}},[t._v("#")]),t._v(" SubMenu Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("与选项卡绑定值 selected 对应的标识符，表示选项卡别名")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("y-menu-item 和 对应的 y-sub-menu 的 name 要相同")])])],1)}),[],!1,null,"32a07321",null);e.default=v.exports}}]);