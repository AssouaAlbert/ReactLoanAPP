(this.webpackJsonploan=this.webpackJsonploan||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),r=n.n(o),c=n(1),u=n(2),s=n(5),i=n(4),m=n(6),h=(n(15),n(16),n(9)),d=n(3),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={amount:"",terms:""},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;console.log("value: ",l),console.log("name: ",a),n.setState(Object(h.a)({},a,parseInt(l)))},n.validateForm=function(e){var t=n.state,a=t.amount,l=t.terms,o=!(a>0&&l);return console.log("checkValues: ",o),o},n.handleSubmit=function(e){e.preventDefault(),console.log("this: ",Object(d.a)(n)),console.log("e.target: ",e.target);var t=n.state,a=t.amount,l=t.terms;n.props.loanInformation(a,l)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Amount"),l.a.createElement("input",{onChange:this.handleChange,id:"name",className:"u-full-width",name:"amount",type:"number",placeholder:"E.g. 3000"})),l.a.createElement("div",null,l.a.createElement("label",null,"Months to Replay"),l.a.createElement("select",{onChange:this.handleChange,name:"terms",className:"u-full-width"},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"3"},"3 Months"),l.a.createElement("option",{value:"6"},"6 Months "),l.a.createElement("option",{value:"12"},"12 Months"),l.a.createElement("option",{value:"24"},"24 Months"))),l.a.createElement("div",null,l.a.createElement("input",{disabled:this.validateForm(),type:"submit",value:"submit",className:"u-full-width button-primary"})))}}]),t}(a.Component);var f=function(e){return l.a.createElement("div",{class:"u-full-width result"},l.a.createElement("h2",null,"Results"),l.a.createElement("p",null,"Loan Amount= $",e.amount),l.a.createElement("p",null,"Months to Repay= ",e.terms," Months"),l.a.createElement("p",null,"Total= $",e.total),l.a.createElement("p",null,"Monthly Payment= $",(e.total/e.terms).toFixed(2)))},p=function(e){return l.a.createElement("p",null,"No Loan")},E=(n(17),function(e){return l.a.createElement("div",{class:"spinner"},l.a.createElement("div",{class:"double-bounce1"}),l.a.createElement("div",{class:"double-bounce2"}))}),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).loanInformation=function(e,t){console.log("amount,terms: ",e,t),console.log("I called the property");var a=function(e,t){var n;return n=e<=1e3?e+.25*e:e<=5e3?e+.2*e:e<=1e4?e+.15*e:e+.1*e,n+=3==t?.05*e:6==t?.1*e:12==t?.15*e:.2*e,console.log("totalAmount: ",n),n}(e,t);n.setState({loading:!0},(function(){setTimeout((function(){n.setState({amount:e,total:a,terms:t,loading:!1})}),3e3)}))},n.state={total:"",amount:"",terms:"",loading:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.total,n=e.amount,a=e.terms,o=e.loading,r=""!==t||o?o?l.a.createElement(E,null):l.a.createElement(f,{class:"messages",total:t,amount:n,terms:a}):l.a.createElement(p,null);return l.a.createElement("div",null,l.a.createElement("h1",null,"Loan Calculator "),l.a.createElement("div",{className:"container"},l.a.createElement(v,{loanInformation:this.loanInformation}),l.a.createElement("div",{className:"messages"},r)))}}]),t}(a.Component);n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2cb7c14e.chunk.js.map