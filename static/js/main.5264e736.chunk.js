(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(55)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),o=a(3),s=a(9),d=a(24),l=a(2),u=a(19),v=a.n(u);v.a.locale("ru",{week:{dow:1},weekdaysMin:"\u0412\u0441_\u041f\u043d_\u0412\u0442_\u0421\u0440_\u0427\u0442_\u041f\u0442_\u0421\u0431".split("_"),months:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),weekdays:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0412\u0442\u043e\u0440\u043d\u0438\u043a_\u0421\u0440\u0435\u0434\u0430_\u0427\u0435\u0442\u0432\u0435\u0440\u0433_\u041f\u044f\u0442\u043d\u0438\u0446\u0430_\u0421\u0443\u0431\u0431\u043e\u0442\u0430".split("_")});var p=v.a,m={activeDate:p()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.month,r=t.date;switch(a){case"MINUS_MONTH":return Object(l.a)({},e,{activeDate:p(e.activeDate).subtract(1,"months")});case"PLUS_MONTH":return Object(l.a)({},e,{activeDate:p(e.activeDate).add(1,"months")});case"MINUS_YEAR":return Object(l.a)({},e,{activeDate:p(e.activeDate).subtract(1,"years")});case"PLUS_YEAR":return Object(l.a)({},e,{activeDate:p(e.activeDate).add(1,"years")});case"MINUS_DAY":return Object(l.a)({},e,{activeDate:p(e.activeDate).subtract(1,"days")});case"PLUS_DAY":return Object(l.a)({},e,{activeDate:p(e.activeDate).add(1,"days")});case"SET_MONTH":return Object(l.a)({},e,{activeDate:p(e.activeDate).month(n)});case"SET_DATE":return Object(l.a)({},e,{activeDate:p(r)});default:return e}},f={activeMode:"CALENDAR_GRID",nextHandler:function(){},prevHandler:function(){}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.mode,r=t.nextHandler,i=t.prevHandler;switch(a){case"CHANGE_MODE":return Object(l.a)({},e,{activeMode:n});case"SET_SWIPE_HANDLERS":return Object(l.a)({},e,{nextHandler:r,prevHandler:i});default:return e}},E=a(21),M=localStorage.getItem("todoList"),_=M?JSON.parse(M):{},N=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0,r=n.type,i=n.date,c=n.note,o=n.ind;switch(r){case"ADD_TODO":return e=Object(l.a)({},a),a.hasOwnProperty(i)||(e[i]=[]),(t=Object(E.a)(e[i])).push(c),e[i]=t,localStorage.setItem("todoList",JSON.stringify(e)),e;case"DELETE_TODO":return e=Object(l.a)({},a),(t=Object(E.a)(e[i])).length&&(t.splice(o,1),e[i]=t),t.length||delete e[i],localStorage.setItem("todoList",JSON.stringify(e)),e;default:return a}},O=Object(s.combineReducers)({filter:D,mode:h,todo:N}),y=a(6),S=a(7),b=(a(40),{CALENDAR_GRID:"MONTHS_GRID",SINGLE_DAY:"CALENDAR_GRID",MONTHS_GRID:"CALENDAR_GRID"}),A=Object(o.b)(function(e){return{activeDate:e.filter.activeDate,activeMode:e.mode.activeMode,nextHandler:e.mode.nextHandler,prevHandler:e.mode.prevHandler}},function(e){return{handlePlus:function(t){switch(t){case"CALENDAR_GRID":e({type:"PLUS_MONTH"});break;case"MONTHS_GRID":e({type:"PLUS_YEAR"});break;case"SINGLE_DAY":e({type:"PLUS_DAY"})}},handleMinus:function(t){switch(t){case"CALENDAR_GRID":e({type:"MINUS_MONTH"});break;case"MONTHS_GRID":e({type:"MINUS_YEAR"});break;case"SINGLE_DAY":e({type:"MINUS_DAY"})}},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})}}})(function(e){var t,a=e.activeDate,n=(e.handlePlus,e.handleMinus,e.activeMode),i=e.changeMode,c=e.nextHandler,o=e.prevHandler;switch(n){case"MONTHS_GRID":t=a.format("YYYY");break;case"CALENDAR_GRID":t=a.format("MMMM YYYY");break;case"SINGLE_DAY":t=a.format("dddd, Do MMMM YYYY")}return r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"navigation-currMonth"},r.a.createElement("button",{className:"currMonth-button",key:t,onClick:function(){return i(b[n])}},t)),r.a.createElement("div",{className:"navigation-arrows"},r.a.createElement("button",{className:"navigation-nextSlide",onClick:function(){o()}},r.a.createElement(y.a,{icon:S.b,size:"2x"})),r.a.createElement("button",{className:"navigation-prevSlide",onClick:function(){c()}},r.a.createElement(y.a,{icon:S.a,size:"2x"}))))}),I=(a(41),Array.from({length:7},function(e,t){return p().weekday(t).format("dd")})),w=Array.from({length:12},function(e,t){return p().month(t).format("MMMM")}),g={CALENDAR_GRID:"months",SINGLE_DAY:"days",MONTHS_GRID:"years"},R=function(e,t){return e.subtract(16,g[t]),Array.from({length:31},function(){return p(e.add(1,g[t]))})},Y=function(e,t){var a=p(e);return a.subtract(3,g[t]),Array.from({length:5},function(){return p(a.add(1,g[t]))})},H=function(e,t,a){return p(e).add(t,g[a])},T=(a(42),function(e){var t=e.day,a=e.activeDate,n=e.setDate,i=e.changeMode,c=e.todo,o="dayCell";o+=p().isSame(t,"day")?" todayCell":"",o+=a.isSame(t,"month")?"":" inactiveCell";var s=r.a.createElement("span",{className:"dayCell-icon"},r.a.createElement(y.a,{icon:S.c,size:"1x"}));return r.a.createElement("div",{className:o},r.a.createElement("button",{className:"dayCell-wrapper",onClick:function(){n(t),i("SINGLE_DAY")}},r.a.createElement("div",{className:"dayCell-date"},p(t).date(),c.hasOwnProperty(t)&&s)))}),C=(a(43),Object(o.b)(function(e){return{activeMode:e.mode.activeMode,todo:e.todo}},function(e){return{setDate:function(t){e({type:"SET_DATE",date:t})},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})}}})(function(e){var t=e.activeDate,a=(e.activeMode,e.setDate),n=e.changeMode,i=e.todo,c=function(e){var t=p(e);t.set(Object(l.a)({},{date:1,hour:0})),t.weekday(0);for(var a=[],n=0;n<6;n++){for(var r=[],i=0;i<7;i++)r.push(t.weekday(i).format("YYYY MM DD")),t.add(1,"days");a.push(r)}return a}(t);return r.a.createElement("div",{className:"calendarGrid"},I.map(function(e){return r.a.createElement("div",{key:e,className:"dayOfWeek"},e)}),c.map(function(e){return e.map(function(e){return r.a.createElement(T,Object.assign({key:e},{day:e,activeDate:t,setDate:a,changeMode:n,todo:i}))})}))})),L=(a(44),function(e){var t=e.month,a=e.activeDate,n=e.ind,i=e.setActiveMonth,c=e.changeMode,o="monthCell";return o+=p().isSame(p(a).month(n),"month")?" todayCell":"",r.a.createElement("div",{className:o},r.a.createElement("button",{className:"monthCell-wrapper",onClick:function(){i(n),c("CALENDAR_GRID")}},r.a.createElement("div",null,t)))}),j=(a(45),Object(o.b)(function(e){return{activeMode:e.mode.activeMode}},function(e){return{setActiveMonth:function(t){e({type:"SET_MONTH",month:t})},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})}}})(function(e){var t=e.activeDate,a=(e.activeMode,e.setActiveMonth),n=e.changeMode;return r.a.createElement("div",{className:"monthsGrid"},w.map(function(e,i){return r.a.createElement(L,Object.assign({key:e},{month:e,activeDate:t,ind:i,setActiveMonth:a,changeMode:n}))}))})),k=a(4),G=a(8),x=a(5),P=a(10),U=a(11),z=(a(46),a(47),function(e){var t=e.note,a=e.deleteTodo,n=e.ind,i=e.currentDay;return r.a.createElement("div",{className:"todoItem"},r.a.createElement("div",{className:"todoItem-text"},t),r.a.createElement("div",{className:"todoItem-remove"},r.a.createElement("button",{onClick:function(){return a(i,n)}},r.a.createElement(y.a,{icon:S.e,size:"2x"}))))}),J=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(x.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.handleOnChange=function(e){a.setState({input:e.target.value})},a.handleAddnote=function(){a.state.input&&(a.props.addTodo(a.state.input,a.props.activeDate.format("YYYY MM DD")),a.setState({input:""}))},a}return Object(U.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this.props,t=e.activeDate,a=(e.activeMode,e.todo),n=e.deleteTodo,i=this.handleOnChange,c=this.handleAddnote,o=this.state,s=t.format("YYYY MM DD"),d=a.hasOwnProperty(s)?a[s]:[];return r.a.createElement("div",{className:"singleDay"},r.a.createElement("div",{className:"noteList"},d.map(function(e,t){return r.a.createElement(z,Object.assign({key:t},{note:e,deleteTodo:n,ind:t,currentDay:s}))})),r.a.createElement("div",{className:"addNote"},r.a.createElement("textarea",{onChange:i,value:o.input,placeholder:"Add a note..."}),r.a.createElement("button",{onClick:c},r.a.createElement(y.a,{icon:S.d,size:"2x"}))))}}]),t}(r.a.Component),W=Object(o.b)(function(e){return{activeMode:e.mode.activeMode,todo:e.todo}},function(e){return{addTodo:function(t,a){return e({type:"ADD_TODO",note:t,date:a})},deleteTodo:function(t,a){return e({type:"DELETE_TODO",date:t,ind:a})}}})(J),B=(a(48),a(49),a(25)),V=a.n(B),q=(a(52),a(53),function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("span",{className:"dot1"}),r.a.createElement("span",{className:"dot2"}),r.a.createElement("span",{className:"dot3"}))}),F=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(x.a)(this,Object(P.a)(t).call(this,e))).DOMswiper=r.a.createRef(),a.swiper=null,a.state={loading:!0,slides:[],index:15},a}return Object(U.a)(t,e),Object(G.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,a){return this.state.slides!==t.slides}},{key:"componentDidUpdate",value:function(e,t,a){this.DOMswiper.current.swiper.activeIndex=15,this.DOMswiper.current.swiper.update()}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.activeDate,n=t.activeMode;setTimeout(function(){e.setState({slides:R(p(a),n),loading:!1})},0);var r=this.DOMswiper.current.swiper;this.props.setHandlers(function(){r.slideNext()},function(){r.slidePrev()}),r.activeIndex=15}},{key:"render",value:function(){var e=this,t=this.props,a=(t.activeDate,t.activeMode),n=t.handlePlus,i=t.handleMinus,c=this,o={effect:"coverflow",grabCursor:!0,slidesPerView:1,coverflowEffect:{rotate:150,stretch:0,depth:-50,modifier:1,slideShadows:!0},direction:"vertical",height:365,width:300,speed:800,spaceBetween:30,initialSlide:15,on:{slideChange:function(){console.log(this.activeIndex),this.activeIndex>c.state.index?n(a):this.activeIndex<c.state.index&&i(a),c.setState({index:this.activeIndex})},transitionEnd:function(){var e=c.props,t=e.activeDate,a=e.activeMode;console.log("transition ended");var n=c.state.index;(n<2||n>28)&&(c.setState({slides:R(p(t),a),index:15}),this.activeIndex=15)}}},s=this.state.slides.map(function(t){return r.a.createElement("div",{key:+t,className:"swiper-slide"},e.props.render(t))});return r.a.createElement(V.a,Object.assign({ref:this.DOMswiper},o),this.state.loading?r.a.createElement("div",{className:"loading-wrapper"},r.a.createElement(q,null)):s)}}]),t}(n.Component),K=(Object(o.b)(function(e){return{activeDate:e.filter.activeDate,activeMode:e.mode.activeMode,todo:e.todo}},function(e){return{setDate:function(t){e({type:"SET_DATE",date:t})},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})},setHandlers:function(t,a){return e({type:"SET_SWIPE_HANDLERS",nextHandler:t,prevHandler:a})},handlePlus:function(t){switch(t){case"CALENDAR_GRID":e({type:"PLUS_MONTH"});break;case"MONTHS_GRID":e({type:"PLUS_YEAR"});break;case"SINGLE_DAY":e({type:"PLUS_DAY"})}},handleMinus:function(t){switch(t){case"CALENDAR_GRID":e({type:"MINUS_MONTH"});break;case"MONTHS_GRID":e({type:"MINUS_YEAR"});break;case"SINGLE_DAY":e({type:"MINUS_DAY"})}}}})(F),a(54),a(26)),Q=function(e){function t(e){var a;Object(k.a)(this,t);var n=(a=Object(x.a)(this,Object(P.a)(t).call(this,e))).props,r=n.activeDate,i=n.activeMode,c=n.render,o=Y(r,i);return a.state={slides:[c(o[0]),c(o[1]),c(o[2]),c(o[3]),c(o[4])],virtualData:{slides:[]},index:2},a.swiper=null,a}return Object(U.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this,a=this.props,n=a.render,r=a.activeMode,i=a.handlePlus,c=a.handleMinus;this.swiper=new K.a(".swiper-container",{initialSlide:2,direction:"vertical",height:365,width:300,speed:800,spaceBetween:10,simulateTouch:!1,virtual:{slides:t.state.slides,renderExternal:function(e){t.setState({virtualData:e})}},on:{slideChange:function(){t.setState({index:this.activeIndex})}}}),this.props.setHandlers(function(){if(e.state.index===e.state.slides.length-3){var a=H(t.props.activeDate,3,r),c=H(t.props.activeDate,4,r);e.swiper.virtual.appendSlide(n(a)),e.swiper.virtual.appendSlide(n(c))}e.swiper.slideNext(),i(r)},function(){if(2===e.state.index){var a=function(e,t,a){return p(e).subtract(t,g[a])}(t.props.activeDate,3,r);e.swiper.virtual.prependSlide(n(a))}e.swiper.slidePrev(),c(r)})}},{key:"componentDidUpdate",value:function(e,t,a){this.swiper.update()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"swiper-container"},r.a.createElement("div",{className:"swiper-wrapper"},this.state.virtualData.slides.map(function(t,a){return r.a.createElement("div",{className:"swiper-slide",key:a,style:{top:"".concat(e.state.virtualData.offset,"px")}},t)})))}}]),t}(n.Component),X=Object(o.b)(function(e){return{activeDate:e.filter.activeDate,activeMode:e.mode.activeMode,todo:e.todo}},function(e){return{setDate:function(t){e({type:"SET_DATE",date:t})},changeMode:function(t){return e({type:"CHANGE_MODE",mode:t})},setHandlers:function(t,a){return e({type:"SET_SWIPE_HANDLERS",nextHandler:t,prevHandler:a})},handlePlus:function(t){switch(t){case"CALENDAR_GRID":e({type:"PLUS_MONTH"});break;case"MONTHS_GRID":e({type:"PLUS_YEAR"});break;case"SINGLE_DAY":e({type:"PLUS_DAY"})}},handleMinus:function(t){switch(t){case"CALENDAR_GRID":e({type:"MINUS_MONTH"});break;case"MONTHS_GRID":e({type:"MINUS_YEAR"});break;case"SINGLE_DAY":e({type:"MINUS_DAY"})}}}})(Q),Z=Object(o.b)(function(e){return{activeMode:e.mode.activeMode}},null)(function(e){var t=e.activeMode;return r.a.createElement("div",{className:"mainSection"},"CALENDAR_GRID"===t&&r.a.createElement(X,{render:function(e){return r.a.createElement(C,{activeDate:e})}}),"MONTHS_GRID"===t&&r.a.createElement(X,{render:function(e){return r.a.createElement(j,{activeDate:e})}}),"SINGLE_DAY"===t&&r.a.createElement(X,{render:function(e){return r.a.createElement(W,{activeDate:e})}}))}),$=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement(A,null),r.a.createElement("hr",null),r.a.createElement(Z,null)))},ee=Object(s.createStore)(O,Object(d.composeWithDevTools)(Object(s.applyMiddleware)()));c.a.render(r.a.createElement(o.a,{store:ee},r.a.createElement($,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5264e736.chunk.js.map