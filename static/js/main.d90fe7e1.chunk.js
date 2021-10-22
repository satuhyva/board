(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{46:function(n,t,e){"use strict";e.r(t);var r,o,c,i,a,s,l,d,u,b,j,f,O=e(0),h=e.n(O),x=e(26),p=e.n(x),m=e(4),g=e(3),k=g.b.div(r||(r=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: ",";\n    width: 100%;\n    height: 100%;\n"])),(function(n){return n.theme.colors.color4})),v=g.b.div(o||(o=Object(m.a)(["\n    display: flex;\n    flex-direction: ",";\n    align-items: flex-start;\n    justify-content: center;\n"])),window.innerWidth<550?"column":"row"),w=g.b.h2(c||(c=Object(m.a)(["\n    color: ",";\n    font-family: Arial, Helvetica, sans-serif;\n    margin-bottom: 0;\n"])),(function(n){return n.theme.colors.color1})),y=e(6),A=e(8),E=g.b.div(i||(i=Object(m.a)(["\n    background-color: ",";\n    width: ",";\n    flex: 1;\n    margin: 10px;\n    padding: 10px;\n    border-radius: 5px;\n"])),(function(n){return n.color?n.color:n.theme.colors.color3}),function(){var n=window.innerWidth;return n<550?(.7*n).toString()+"px":(window.innerWidth/3.75).toString()+"px"}()),T=g.b.h3(a||(a=Object(m.a)(["\n    color: ",";\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n"])),(function(n){return n.theme.colors.color1})),D=e(54),S="task",C=g.b.div(s||(s=Object(m.a)(["\n    background-color: ",";\n    border-radius: 5px;\n"])),(function(n){return n.theme.colors.color4})),N=g.b.p(l||(l=Object(m.a)(["\n    background-color: ",";\n    border-radius: 5px;\n    border: none;\n    color: ",";\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 10px;\n    overflow: hidden;\n"])),(function(n){return n.theme.colors.color4}),(function(n){return n.theme.colors.color2})),W=e(53),K=e(2),R=function(n){var t=n.title,e=n.id,r=Object(W.a)((function(){return{type:S,item:{id:e},collect:function(n){return{isDragging:!!n.isDragging()}}}})),o=Object(A.a)(r,2),c=o[0].isDragging,i=o[1];return Object(K.jsx)(C,{ref:i,style:{opacity:c?.25:1},"data-testid":"card-".concat(e),children:Object(K.jsx)(N,{children:t})})},_={tasks:[]},M=Object(O.createContext)({state:_,dispatch:function(){return null}}),H=function(){var n=Object(O.useContext)(M),t=n.state,e=n.dispatch;return{tasks:t.tasks,createNewTask:function(n){e({type:"ADD_NEW",data:n})},moveTask:function(n,t){e({type:"MOVE_TASK",data:{id:n,to:t}})},removeTask:function(n){e({type:"REMOVE_TASK",data:n})}}},I={colors:{color1:"#132C33",color2:"#126E82",color3:"#51C4D3",color4:"#D8E3E7"}},V=function(n){var t=n.title,e=n.mode,r=n.tasks,o=H().moveTask,c=Object(D.a)((function(){return{accept:S,drop:function(n){return o(n.id,e)},collect:function(n){return{isActive:n.canDrop()&&n.isOver()}}}}),[]),i=Object(A.a)(c,2),a=i[0].isActive,s=i[1],l=a?{color:I.colors.color2}:{};return Object(K.jsxs)(E,Object(y.a)(Object(y.a)({ref:s},l),{},{"data-testid":"column-".concat(t),children:[Object(K.jsx)(T,{children:t}),r.map((function(n){return Object(K.jsx)(R,{title:n.description,id:n.id},n.id)}))]}))},z=g.b.button(d||(d=Object(m.a)(["\n    background-color: ",";\n    color: ",";\n    font-size: 1em;\n    border-radius: 3px;\n    border: none;\n    padding: 10px;\n    margin: 20px;\n\n    &:hover {\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.color2}),(function(n){return n.theme.colors.color4}),(function(n){return n.theme.colors.color1}),(function(n){return n.theme.colors.color4})),G=g.b.div(u||(u=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10px;\n"]))),B=g.b.input(b||(b=Object(m.a)(["\n    background-color: ",";\n    color: ",";\n    font-size: 1em;\n    width: 100%;\n    border-radius: 3px;\n    border-width: 1px;\n    border: solid;\n    padding: 10px;\n"])),(function(n){return n.theme.colors.color4}),(function(n){return n.theme.colors.color2})),J=function(n){var t=n.createNewTask,e=Object(O.useState)(!1),r=Object(A.a)(e,2),o=r[0],c=r[1],i=Object(O.useState)(""),a=Object(A.a)(i,2),s=a[0],l=a[1],d=function(){""!==s&&(t(s),c(!1),l(""))};return o?Object(K.jsxs)(G,{children:[Object(K.jsx)(B,{value:s,onChange:function(n){return l(n.target.value)},onKeyPress:function(n){n&&"Enter"===n.key&&d()},placeholder:"Type the task here ..."}),Object(K.jsxs)("div",{children:[Object(K.jsx)(z,{onClick:function(){return c(!1)},children:"CANCEL"}),Object(K.jsx)(z,{onClick:d,children:"CREATE"})]})]}):Object(K.jsx)(z,{onClick:function(){return c(!0)},children:"CREATE NEW TASK"})},P=g.b.div(j||(j=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    width: ",";\n    height: ",";\n    max-height: 40px;\n    border-radius: 5px;\n    margin: 10px;\n    padding: 10px;\n"])),(function(n){return n.color?n.color:n.theme.colors.color1}),(window.innerWidth/3.75).toString()+"px",(window.innerWidth/15).toString()+"px"),L=e(55),q=function(){var n=H().removeTask,t=Object(D.a)((function(){return{accept:S,drop:function(t){return n(t.id)},collect:function(n){return{isActive:n.canDrop()&&n.isOver()}}}}),[]),e=Object(A.a)(t,2),r=e[0].isActive,o=e[1],c=r?{color:I.colors.color2}:{};return Object(K.jsx)(P,Object(y.a)(Object(y.a)({ref:o},c),{},{"data-testid":"trash-bin",children:Object(K.jsx)(L.a,{color:I.colors.color4,size:"100%"})}))},F=g.b.h5(f||(f=Object(m.a)(["\n    color: ",";\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n"])),(function(n){return n.theme.colors.color1}));var Q=function(){var n=H(),t=n.tasks,e=n.createNewTask;return Object(K.jsxs)(k,{children:[Object(K.jsx)(w,{children:"TASK BOARD"}),Object(K.jsx)(F,{children:"a wannabe trello app"}),Object(K.jsx)(F,{children:"just drag'n'drop your tasks around"}),Object(K.jsx)(J,{createNewTask:e}),Object(K.jsxs)(v,{children:[Object(K.jsx)(V,{title:"WAITING",mode:"waiting",tasks:t.filter((function(n){return"waiting"===n.mode}))}),Object(K.jsx)(V,{title:"ONGOING",mode:"ongoing",tasks:t.filter((function(n){return"ongoing"===n.mode}))}),Object(K.jsx)(V,{title:"DONE",mode:"done",tasks:t.filter((function(n){return"done"===n.mode}))})]}),Object(K.jsx)(q,{})]})},U=e(34),X=function(n){if(0===n.tasks.length)return 1;return n.tasks.reduce((function(n,t){return t.id>n.id?t:n})).id+1},Y=function(n,t){switch(t.type){case"ADD_NEW":return Object(y.a)(Object(y.a)({},n),{},{tasks:[].concat(Object(U.a)(n.tasks),[{id:X(n),mode:"waiting",description:t.data}])});case"REMOVE_TASK":return Object(y.a)(Object(y.a)({},n),{},{tasks:n.tasks.filter((function(n){return n.id!==t.data}))});case"MOVE_TASK":return Object(y.a)(Object(y.a)({},n),{},{tasks:n.tasks.map((function(n){return n.id===t.data.id&&(n.mode=t.data.to),n}))});default:throw new Error("Action ".concat(t," not implemented!"))}},Z=function(n){var t=n.children,e=Object(O.useReducer)(Y,_),r=Object(A.a)(e,2),o=r[0],c=r[1];return Object(K.jsx)(M.Provider,{value:{state:o,dispatch:c},children:t})},$=e(52),nn=e(33);p.a.render(Object(K.jsx)(h.a.StrictMode,{children:Object(K.jsx)($.a,{backend:nn.a,children:Object(K.jsx)(g.a,{theme:I,children:Object(K.jsx)(Z,{children:Object(K.jsx)(Q,{})})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d90fe7e1.chunk.js.map