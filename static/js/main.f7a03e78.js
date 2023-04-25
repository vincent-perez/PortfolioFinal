(()=>{"use strict";var e={54:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(9526),a=n(1921),i=n(814),o=n(2982),s=n(885),u=n(1133),l=n(9233),c=n(9566),d=n(6834),f=n(6085),x=n(7557);const h=function(e){var t=e.exercise,n=e.alternativeExercise,a=e.imageSource,i=(0,r.useState)(t),o=(0,s.default)(i,2),c=o[0],h=o[1];return(0,x.jsxs)(u.default,{children:[(0,x.jsx)(l.default,{children:c}),(0,x.jsx)(d.default,{source:a,style:{width:300,height:300,resizeMode:"contain"}}),(0,x.jsx)(f.default,{value:c===n,onValueChange:function(){h(c===t?n:t)}})]})};var j=n(3497),p=n(1553);const g=function(e){var t=e.onAddLog,n=e.selectedExercise,a=(0,r.useState)(""),i=(0,s.default)(a,2),o=i[0],l=i[1],c=(0,r.useState)(""),d=(0,s.default)(c,2),f=d[0],h=d[1];return(0,x.jsxs)(u.default,{children:[(0,x.jsx)(j.default,{placeholder:"Weight (lbs)",keyboardType:"numeric",value:o,onChangeText:l}),(0,x.jsx)(j.default,{placeholder:"Reps",keyboardType:"numeric",value:f,onChangeText:h}),(0,x.jsx)(p.default,{title:"Add Log",onPress:function(){t({exercise:n,weight:o,reps:f}),l(""),h("")}})]})};const v=function(e){var t=e.initialTime,n=(0,r.useState)(t),a=(0,s.default)(n,2),i=a[0],o=a[1],c=(0,r.useState)(!1),d=(0,s.default)(c,2),f=d[0],h=d[1];return(0,r.useEffect)((function(){var e;return f&&(e=setInterval((function(){o((function(e){return e-1}))}),1e3)),function(){return clearInterval(e)}}),[f]),(0,x.jsxs)(u.default,{children:[(0,x.jsxs)(l.default,{children:["Remaining Time: ",i,"s"]}),(0,x.jsx)(p.default,{title:f?"Pause":"Start",onPress:function(){return h(!f)}})]})};const b=function(){var e=(0,r.useState)([]),t=(0,s.default)(e,2),a=t[0],i=t[1];return(0,x.jsxs)(u.default,{children:[(0,x.jsx)(h,{exercise:"Deadlift",alternativeExercise:"Romanian Deadlift",imageSource:n(7634)}),(0,x.jsx)(d.default,{source:n(3568),style:{width:300,height:300,resizeMode:"contain"}}),(0,x.jsx)(g,{onAddLog:function(e){i((function(t){return[].concat((0,o.default)(t),[e])}))}}),(0,x.jsx)(c.default,{data:a,renderItem:function(e){var t=e.item;return(0,x.jsxs)(l.default,{children:[t.exercise,": ",t.weight," lbs - ",t.reps," reps"]})},keyExtractor:function(e,t){return t.toString()}}),(0,x.jsx)(v,{initialTime:60})]})};const m=function(){var e=(0,r.useState)([]),t=(0,s.default)(e,2),a=t[0],i=t[1];return(0,x.jsxs)(u.default,{children:[(0,x.jsx)(h,{exercise:"Bench Press",alternativeExercise:"Dumbbell Bench Press",imageSource:n(1603)}),(0,x.jsx)(g,{onAddLog:function(e){i((function(t){return[].concat((0,o.default)(t),[e])}))}}),(0,x.jsx)(c.default,{data:a,renderItem:function(e){var t=e.item;return(0,x.jsxs)(l.default,{children:[t.exercise,": ",t.weight," lbs - ",t.reps," reps"]})},keyExtractor:function(e,t){return t.toString()}}),(0,x.jsx)(v,{initialTime:60})]})};const y=function(){var e=(0,r.useState)([]),t=(0,s.default)(e,2),a=t[0],i=t[1];return(0,x.jsxs)(u.default,{children:[(0,x.jsx)(h,{exercise:"Squat",alternativeExercise:"Goblet Squat",imageSource:n(3515)}),(0,x.jsx)(g,{onAddLog:function(e){i((function(t){return[].concat((0,o.default)(t),[e])}))}}),(0,x.jsx)(c.default,{data:a,renderItem:function(e){var t=e.item;return(0,x.jsxs)(l.default,{children:[t.exercise,": ",t.weight," lbs - ",t.reps," reps"]})},keyExtractor:function(e,t){return t.toString()}}),(0,x.jsx)(v,{initialTime:60})]})};var S=n(1451),T=n(2645).default.create({container:{flex:1,justifyContent:"center",alignItems:"center"},title:{fontSize:32,fontWeight:"bold",marginBottom:40},button:{backgroundColor:"#3897f1",paddingVertical:10,paddingHorizontal:20,borderRadius:5,marginVertical:10},buttonText:{color:"#fff",fontSize:18}});const w=function(e){var t=e.navigation;return(0,x.jsxs)(u.default,{style:T.container,children:[(0,x.jsx)(l.default,{style:T.title,children:"Workout App"}),(0,x.jsx)(S.default,{style:T.button,onPress:function(){return t.navigate("Deadlift")},children:(0,x.jsx)(l.default,{style:T.buttonText,children:"Deadlift"})}),(0,x.jsx)(S.default,{style:T.button,onPress:function(){return t.navigate("BenchPress")},children:(0,x.jsx)(l.default,{style:T.buttonText,children:"Bench Press"})}),(0,x.jsx)(S.default,{style:T.button,onPress:function(){return t.navigate("Squat")},children:(0,x.jsx)(l.default,{style:T.buttonText,children:"Squat"})})]})};var P=(0,i.default)();const O=function(){return(0,x.jsx)(a.default,{children:(0,x.jsxs)(P.Navigator,{children:[(0,x.jsx)(P.Screen,{name:"Home",component:w}),(0,x.jsx)(P.Screen,{name:"Deadlift",component:b}),(0,x.jsx)(P.Screen,{name:"Bench Press",component:m}),(0,x.jsx)(P.Screen,{name:"Squat",component:y})]})})}},1603:(e,t,n)=>{e.exports=n.p+"static/media/bench_press.fd48f24de97faf5b0344.jpg"},7634:(e,t,n)=>{e.exports=n.p+"static/media/deadlift.1fba90650e746c9f90a3.jpg"},3568:(e,t,n)=>{e.exports=n.p+"static/media/rdl.e85830b27732a061fad1.jpg"},3515:(e,t,n)=>{e.exports=n.p+"static/media/squat.16838743f843d30283b6.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,i)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,a,i]=e[c],s=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(s=!1,i<o&&(o=i));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,a,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/PortfolioFinal/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[o,s,u]=r,l=0;if(o.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(t&&t(r);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[810],(()=>n(54)));r=n.O(r)})();
//# sourceMappingURL=main.f7a03e78.js.map