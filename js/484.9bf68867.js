"use strict";(self["webpackChunkshengyue"]=self["webpackChunkshengyue"]||[]).push([[484],{1484:function(t,e,n){n.r(e),n.d(e,{default:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"writ-add"},[e("div",{staticClass:"head"},[e("el-button",{attrs:{type:"danger"}},[t._v("删除")]),e("el-button",{attrs:{type:"success"}},[t._v("发布")]),e("el-button",{attrs:{type:"primary",plain:""}},[t._v("保存")])],1),e("div",{staticClass:"content-writ"},[e("el-input",{staticClass:"name",attrs:{type:"text",placeholder:"请输入章节号与章节名. 示例: 第六章 xxxxxx"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e("el-input",{staticClass:"content",attrs:{type:"textarea",resize:"none",placeholder:"在此输入正文"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])},s=[],c={props:{contentDidChange:Function},data(){return{name:"",content:""}},watch:{content:function(t){console.log(this.$parent),this.contentDidChange&&this.contentDidChange(t),this.$parent.writContentDidChange(t)}}},i=c,l=n(3736),o=(0,l.Z)(i,a,s,!1,null,"031e3276",null),r=o.exports}}]);
//# sourceMappingURL=484.9bf68867.js.map