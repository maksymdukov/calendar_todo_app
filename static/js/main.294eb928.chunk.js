(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(47)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),i=a(3),l=a(6),d=a(19),u=a(2),s=a(12),m=a.n(s);m.a.locale("ru",{week:{dow:1},weekdaysMin:"\u0412\u0441_\u041f\u043d_\u0412\u0442_\u0421\u0440_\u0427\u0442_\u041f\u0442_\u0421\u0431".split("_"),months:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),weekdays:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0412\u0442\u043e\u0440\u043d\u0438\u043a_\u0421\u0440\u0435\u0434\u0430_\u0427\u0435\u0442\u0432\u0435\u0440\u0433_\u041f\u044f\u0442\u043d\u0438\u0446\u0430_\u0421\u0443\u0431\u0431\u043e\u0442\u0430".split("_")});var v=m.a,D={activeDate:v()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.month,c=t.date;switch(a){case"MINUS_MONTH":return Object(u.a)({},e,{activeDate:v(e.activeDate).subtract(1,"months")});case"PLUS_MONTH":return Object(u.a)({},e,{activeDate:v(e.activeDate).add(1,"months")});case"MINUS_YEAR":return Object(u.a)({},e,{activeDate:v(e.activeDate).subtract(1,"years")});case"PLUS_YEAR":return Object(u.a)({},e,{activeDate:v(e.activeDate).add(1,"years")});case"MINUS_DAY":return Object(u.a)({},e,{activeDate:v(e.activeDate).subtract(1,"days")});case"PLUS_DAY":return Object(u.a)({},e,{activeDate:v(e.activeDate).add(1,"days")});case"SET_MONTH":return Object(u.a)({},e,{activeDate:v(e.activeDate).month(n)});case"SET_DATE":return Object(u.a)({},e,{activeDate:v(c)});default:return e}},f={activeMode:"CALENDAR_GRID"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.mode;switch(a){case"CHANGE_MODE":return Object(u.a)({},e,{activeMode:n});default:return e}},M=a(14),_=localStorage.getItem("todoList"),p=_||{},O=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0,c=n.type,r=n.date,o=n.note,i=n.ind;switch(c){case"ADD_TODO":return e=Object(u.a)({},a),a.hasOwnProperty(r)||(e[r]=[]),(t=Object(M.a)(e[r])).push(o),e[r]=t,e;case"DELETE_TODO":return e=Object(u.a)({},a),(t=Object(M.a)(e[r])).length&&(t.splice(i,1),e[r]=t),t.length||delete e[r],e;default:return a}},N=Object(l.combineReducers)({filter:E,mode:h,todo:O}),b=a(4),y=a(5),A=(a(38),{CALENDAR_GRID:"MONTHS_GRID",SINGLE_DAY:"CALENDAR_GRID",MONTHS_GRID:"CALENDAR_GRID"}),Y=Object(i.b)(function(e){return{activeDate:e.filter.activeDate,activeMode:e.mode.activeMode}},function(e){return{handlePlus:function(t){switch(t){case"CALENDAR_GRID":e({type:"PLUS_MONTH"});break;case"MONTHS_GRID":e({type:"PLUS_YEAR"});break;case"SINGLE_DAY":e({type:"PLUS_DAY"})}},handleMinus:function(t){switch(t){case"CALENDAR_GRID":e({type:"MINUS_MONTH"});break;case"MONTHS_GRID":e({type:"MINUS_YEAR"});break;case"SINGLE_DAY":e({type:"MINUS_DAY"})}},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})}}})(function(e){var t,a=e.activeDate,n=e.handlePlus,r=e.handleMinus,o=e.activeMode,i=e.changeMode;switch(o){case"MONTHS_GRID":t=a.format("YYYY");break;case"CALENDAR_GRID":t=a.format("MMMM YYYY");break;case"SINGLE_DAY":t=a.format("dddd, Do MMMM YYYY")}return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"navigation-currMonth"},c.a.createElement("button",{onClick:function(){return i(A[o])}},t)),c.a.createElement("div",{className:"navigation-arrows"},c.a.createElement("button",{onClick:function(){return n(o)}},c.a.createElement(b.a,{icon:y.b,size:"2x"})),c.a.createElement("button",{onClick:function(){return r(o)}},c.a.createElement(b.a,{icon:y.a,size:"2x"}))))}),S=(a(39),a(40),function(e){var t=e.day,a=e.activeDate,n=e.setDate,r=e.changeMode,o=e.todo,i="dayCell";i+=v().isSame(t,"day")?" todayCell":"",i+=a.isSame(t,"month")?"":" inactiveCell";var l=c.a.createElement("span",{className:"dayCell-icon"},c.a.createElement(b.a,{icon:y.c,size:"1x"}));return c.a.createElement("div",{className:i},c.a.createElement("button",{className:"dayCell-wrapper",onClick:function(){n(t),r("SINGLE_DAY")}},c.a.createElement("div",{className:"dayCell-date"},v(t).date(),o.hasOwnProperty(t)&&l)))}),g=(a(41),Object(i.b)(function(e){return{activeDate:e.filter.activeDate,activeMode:e.mode.activeMode,todo:e.todo}},function(e){return{setDate:function(t){e({type:"SET_DATE",date:t})},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})}}})(function(e){var t=e.activeDate,a=e.activeMode,n=e.setDate,r=e.changeMode,o=e.todo,i=function(e){var t=new v(e);t.set(Object(u.a)({},{date:1,hour:0})),t.weekday(0);for(var a=[],n=0;n<6;n++){for(var c=[],r=0;r<7;r++)c.push(t.weekday(r).format("YYYY MM DD")),t.add(1,"days");a.push(c)}return a}(t),l=Array.from({length:7},function(e,t){return v().weekday(t).format("dd")});return"CALENDAR_GRID"===a?c.a.createElement("div",{className:"calendarGrid"},l.map(function(e){return c.a.createElement("div",{key:e,className:"dayOfWeek"},e)}),i.map(function(e){return e.map(function(e){return c.a.createElement(S,Object.assign({key:e},{day:e,activeDate:t,setDate:n,changeMode:r,todo:o}))})})):null})),C=(a(42),function(e){var t=e.month,a=e.activeDate,n=e.ind,r=e.setActiveMonth,o=e.changeMode,i="monthCell";return i+=v().isSame(a.month(n),"month")?" todayCell":"",c.a.createElement("div",{className:i},c.a.createElement("button",{className:"monthCell-wrapper",onClick:function(){r(n),o("CALENDAR_GRID")}},c.a.createElement("div",null,t)))}),I=(a(43),Object(i.b)(function(e){return{activeDate:e.filter.activeDate,activeMode:e.mode.activeMode}},function(e){return{setActiveMonth:function(t){e({type:"SET_MONTH",month:t})},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})}}})(function(e){var t=e.activeDate,a=e.activeMode,n=e.setActiveMonth,r=e.changeMode,o=Array.from({length:12},function(e,t){return v().month(t).format("MMMM")});return"MONTHS_GRID"===a?c.a.createElement("div",{className:"monthsGrid"},o.map(function(e,a){return c.a.createElement(C,Object.assign({key:e},{month:e,activeDate:t,ind:a,setActiveMonth:n,changeMode:r}))})):null})),T=a(20),j=a(21),R=a(23),w=a(22),k=a(24),G=(a(44),a(45),function(e){var t=e.note,a=e.deleteTodo,n=e.ind,r=e.currentDay;return c.a.createElement("div",{className:"todoItem"},c.a.createElement("div",{className:"todoItem-text"},t),c.a.createElement("div",{className:"todoItem-remove"},c.a.createElement("button",{onClick:function(){return a(r,n)}},c.a.createElement(b.a,{icon:y.e,size:"2x"}))))}),L=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(R.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(c)))).state={input:""},a.handleOnChange=function(e){a.setState({input:e.target.value})},a.handleAddnote=function(){a.state.input&&(a.props.addTodo(a.state.input,a.props.activeDate.format("YYYY MM DD")),a.setState({input:""}))},a}return Object(k.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props,t=e.activeDate,a=e.activeMode,n=e.todo,r=e.deleteTodo,o=this.handleOnChange,i=this.handleAddnote,l=this.state,d=t.format("YYYY MM DD"),u=n.hasOwnProperty(d)?n[d]:[];return"SINGLE_DAY"===a?c.a.createElement("div",{className:"singleDay"},c.a.createElement("div",{className:"noteList"},u.map(function(e,t){return c.a.createElement(G,Object.assign({key:t},{note:e,deleteTodo:r,ind:t,currentDay:d}))})),c.a.createElement("div",{className:"addNote"},c.a.createElement("textarea",{onChange:o,value:l.input,placeholder:"Add a note..."}),c.a.createElement("button",{onClick:i},c.a.createElement(b.a,{icon:y.d,size:"2x"})))):null}}]),t}(c.a.Component),H=Object(i.b)(function(e){return{activeDate:e.filter.activeDate,activeMode:e.mode.activeMode,todo:e.todo}},function(e){return{addTodo:function(t,a){return e({type:"ADD_TODO",note:t,date:a})},deleteTodo:function(t,a){return e({type:"DELETE_TODO",date:t,ind:a})}}})(L),U=(a(46),function(){return c.a.createElement("div",{className:"mainSection"},c.a.createElement(g,null),c.a.createElement(I,null),c.a.createElement(H,null))}),P=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(Y,null),c.a.createElement("hr",null),c.a.createElement(U,null))},x=Object(l.createStore)(N,Object(d.composeWithDevTools)(Object(l.applyMiddleware)()));o.a.render(c.a.createElement(i.a,{store:x},c.a.createElement(P,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.294eb928.chunk.js.map