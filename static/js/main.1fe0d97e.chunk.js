(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{22:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19),C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18),C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(32),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(38),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(39),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(24),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(3),Application=function(_React$Component){function Application(props){var _this;return Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Application),_this=Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Application).call(this,props)),_this.handleClick=function(buttonName){var currentNumber=_this.state.currentNumber,operatorFlag=_this.state.operatorFlag;switch(!0){case"0"===buttonName||"1"===buttonName||"2"===buttonName||"3"===buttonName||"4"===buttonName||"5"===buttonName||"6"===buttonName||"7"===buttonName||"8"===buttonName||"9"===buttonName:"0"!==_this.state.currentNumber?(currentNumber+=buttonName,operatorFlag=!1):currentNumber=buttonName;break;case"+"===buttonName||"-"===buttonName||"*"===buttonName||"/"===buttonName:"-"===buttonName&&"-"!==currentNumber[currentNumber.length-1]?(currentNumber+=buttonName,operatorFlag=!0,_this.setState({decimalFlag:!1})):_this.state.operatorFlag?"+"===currentNumber[currentNumber.length-2]||"*"===currentNumber[currentNumber.length-2]||"/"===currentNumber[currentNumber.length-2]?(currentNumber=currentNumber.slice(0,currentNumber.length-2),currentNumber+=buttonName):(currentNumber=currentNumber.slice(0,currentNumber.length-1),currentNumber+=buttonName):(currentNumber+=buttonName,operatorFlag=!0,_this.setState({decimalFlag:!1}));break;case"AC"===buttonName:currentNumber="0",operatorFlag=!1,_this.setState({decimalFlag:!1});break;case"="===buttonName:currentNumber=eval(currentNumber),operatorFlag=!1,_this.setState({decimalFlag:!0});break;case"."===buttonName:_this.state.decimalFlag||(currentNumber+=".",_this.setState({decimalFlag:!0}))}_this.setState({operatorFlag:operatorFlag}),_this.setState({currentNumber:currentNumber})},_this.state={currentNumber:"0",operatorFlag:!1,decimalFlag:!1},_this}return Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Application,_React$Component),Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Application,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null," ",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("code",{style:{color:"rgb(255, 51, 119)"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"Javascipt Calculator"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null,"by Vu Long"))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__.a,{maxWidth:"sm",style:{background:"rgb(255, 203, 179)",borderRadius:"5px",marginTop:"40px"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{container:!0,spacing:6,style:{padding:"10px"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Screen,{id:"display",currentNumber:this.state.currentNumber})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:9},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"clear",color:"secondary",name:"AC",handleClick:this.handleClick}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"divide",style:{background:"rgb(153, 153, 153) "},name:"/",handleClick:this.handleClick}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"seven",name:"7",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"eight",name:"8",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"nine",name:"9",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"multiply",style:{background:"rgb(153, 153, 153) "},name:"*",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"four",name:"4",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"five",name:"5",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"six",name:"6",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"subtract",style:{background:"rgb(153, 153, 153) "},name:"-",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"one",name:"1",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"two",name:"2",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"three",name:"3",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"add",name:"+",style:{background:"rgb(153, 153, 153) "},handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"zero",name:"0",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:3},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"decimal",name:".",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.a,{style:{padding:"1px"},item:!0,xs:6},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttonn,{id:"equals",color:"primary",name:"=",handleClick:this.handleClick})))))}}]),Application}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Screen=function(_){function e(){return Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).apply(this,arguments))}return Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:this.props.id},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,this.props.currentNumber))}}]),e}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),Buttonn=function(_){function e(){var _,t;Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_=Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e)).call.apply(_,[this].concat(r)))).runParentHandleClick=function(){t.props.handleClick(t.props.name)},t}return Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(C_Users_lenovo_Desktop_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__.a,{fullWidth:!0,style:this.props.style,variant:"contained",color:this.props.color,id:this.props.id,onClick:this.runParentHandleClick,className:"button"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2",null,this.props.name))}}]),e}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);function App(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Application,null))}__webpack_exports__.a=App},26:function(_,e,t){_.exports=t(37)},31:function(_,e,t){},32:function(_,e,t){},37:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(11),n=t.n(l),c=(t(31),t(22));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1fe0d97e.chunk.js.map