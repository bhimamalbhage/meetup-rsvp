(this["webpackJsonpmeetup-rsvp"]=this["webpackJsonpmeetup-rsvp"]||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),c=(a(31),a(8),a(6)),s=a(1);function u(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-glass-cheers"}),"Meetup RSVP")),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/register"},"Register")),r.a.createElement("span",{className:"sm-hide"}),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/users"},"Users")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/report"},"Report"))))}var m=a(18),i=a.n(m),p=a(24),d=a(10),E=a(19),f=a(25),h=function(){var e=Object(n.useState)({name:"",age:"",dob:"",profession:"",locality:"",noofguests:"",address:""}),t=Object(f.a)(e,2),a=t[0],l=t[1],o=a.name,c=a.age,s=a.dob,u=a.profession,m=a.locality,h=a.noofguests,v=a.address,g=function(e){l(Object(E.a)(Object(E.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(p.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,age:c,dob:s,profession:u,locality:m,noofguests:h,address:v})},fetch("https://userrsvp.free.beeceptor.com/adduser",a).then((function(e){return alert("User Registered")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-container"},r.a.createElement("h1",{className:"large text-primary"},"Sign Up"),r.a.createElement("form",{className:"form",onSubmit:function(e){return b(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",value:o,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",name:"age",placeholder:"Enter your age",value:c,onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"date",name:"dob",value:s,placeholder:"Enter DOB",onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"profession",required:!0},r.a.createElement("option",null,"Choose your profession"),r.a.createElement("option",null,"Employed"),r.a.createElement("option",null,"Student"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"locality",value:m,placeholder:"Enter location",onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",name:"noofguests",value:h,placeholder:"Enter no. of guests",onChange:function(e){return g(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",placeholder:"Enter address",name:"address",rows:"4",value:v,onChange:function(e){return g(e)},required:!0})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Register"})))},v=a(11),g=a(12),b=a(14),y=a(13),N=function(e){Object(b.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,users:[],error:null},e.fetchUsers=function(){fetch("https://my.api.mockaroo.com/users.json?key=09e9b680").then((function(e){return e.json()})).then((function(t){return e.setState({users:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))},e.componentDidMount=function(){e.fetchUsers()},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.users,n=e.error;return r.a.createElement("div",{className:"users-page"},r.a.createElement("div",{className:"users-data"},n?r.a.createElement("p",null,n.message):null,t?r.a.createElement("h3",null,"Loading..."):a.map((function(e){var t=e.id,a=e.name,n=e.locality,l={pathname:"/user/".concat(t),param1:e};return r.a.createElement("div",{key:t,className:"users-block"},r.a.createElement("p",null,"Name: ",a),r.a.createElement("p",null,"Locality: ",n),r.a.createElement("div",{className:"buttons m-1"},r.a.createElement(c.b,{to:l,className:"btn-primary"},"View Profile")),r.a.createElement("hr",null))}))))}}]),a}(r.a.Component);var O=function(e){e.match.params.id;var t=e.location.param1;return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/users",className:"btn btn-primary backtoprofile"},"Back to profiles"),r.a.createElement("div",{className:"user-block"},r.a.createElement("p",null,"Name: ",t.name),r.a.createElement("p",null,"Age: ",t.age),r.a.createElement("p",null,"DOB: ",t.dob),r.a.createElement("p",null,"Profession: ",t.profession),r.a.createElement("p",null,"Locality: ",t.locality),r.a.createElement("p",null,"No. Of Guests: ",t.noofguests),r.a.createElement("p",null,"Address: ",t.address)))},j=function(e){Object(b.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"report-block"},r.a.createElement("div",null,r.a.createElement("h4",null,"Number of people in a given age range")),r.a.createElement("div",null,r.a.createElement("h4",null,"Number of people by localities.")),r.a.createElement("div",null,r.a.createElement("h4",null,"Average group size of people attending the event")),r.a.createElement("div",null,r.a.createElement("h4",null,"Professionals and students count.")))}}]),a}(r.a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(u,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/register",component:h}),r.a.createElement(s.a,{exact:!0,path:"/users",component:N}),r.a.createElement(s.a,{exact:!0,path:"/user/:id",component:O}),r.a.createElement(s.a,{exact:!0,path:"/report",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[26,1,2]]]);
//# sourceMappingURL=main.1a7bf82a.chunk.js.map