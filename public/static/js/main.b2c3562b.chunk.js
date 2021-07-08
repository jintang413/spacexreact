(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,c,s){},58:function(e,c,s){},60:function(e,c,s){"use strict";s.r(c);var n,t=s(2),a=s.n(t),l=s(40),r=s.n(l),i=(s(49),s(74)),j=s(76),h=s(73),u=s(19),b=s(7),d=s(26),o=s(75),m=s(77),x=s(27),O=s.n(x),p=s(41),g=s.n(p),_=s(3);function N(e){var c=e.launch,s=c.flight_number,n=c.mission_name,t=c.launch_date_local,a=c.launch_success;return Object(_.jsx)("div",{className:"card card-body mb-3",children:Object(_.jsxs)("div",{className:"row",children:[Object(_.jsxs)("div",{className:"col-md-9",children:[Object(_.jsxs)("h4",{children:["Mission: ",Object(_.jsx)("span",{className:O()({"text-success":a,"text-danger":!a}),children:n})]}),Object(_.jsxs)("p",{children:["Date: ",Object(_.jsx)(g.a,{format:"YYYY-MM-DD HH:mm",children:t})]})]}),Object(_.jsx)("div",{className:"col-md-3",children:Object(_.jsx)(u.b,{to:"/launch/".concat(s),className:"btn btn-secondary",children:"Launch Details"})})]})})}function f(){return Object(_.jsxs)("div",{className:"my-3",children:[Object(_.jsxs)("p",{children:[Object(_.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(_.jsxs)("p",{children:[Object(_.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})}var y=Object(o.a)(n||(n=Object(d.a)(["\n    query LaunchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"])));var v,k=function(){var e=Object(m.a)(y),c=e.loading,s=e.error,n=e.data;return c?Object(_.jsx)("p",{children:"Loading..."}):s?Object(_.jsx)("p",{children:"Error :("}):Object(_.jsxs)(t.Fragment,{children:[Object(_.jsx)("div",{className:"display-4 my-3",children:"Launches"}),Object(_.jsx)(f,{}),n.launches.map((function(e){return Object(_.jsx)(N,{launch:e},e.flight_number)}))]})},L=Object(o.a)(v||(v=Object(d.a)(["\n    query LaunchQuery($flight_number: Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_date_local\n            launch_success\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }     \n        }\n    }\n"]))),D=Object(b.e)((function(e){var c=e.match.params.flight_number;c=parseInt(c);var s=Object(m.a)(L,{variables:{flight_number:c}}),n=s.loading,t=s.error,a=s.data;if(n)return Object(_.jsx)("p",{children:"Loading..."});if(t)return Object(_.jsx)("p",{children:"Error :("});var l=a.launch,r=l.mission_name,i=l.launch_year,j=l.launch_success,h=l.rocket,b=h.rocket_id,d=h.rocket_name,o=h.rocket_type;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"display-4 my-3",children:Object(_.jsxs)("span",{className:"text-dark",children:["Mission: ",r]})}),Object(_.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(_.jsxs)("ul",{className:"list-group",children:[Object(_.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",c]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",i]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Launch Successful: ",Object(_.jsx)("span",{className:O()({"text-success":j,"text-danger":!j}),children:j?"Yes":"No"})]})]}),Object(_.jsx)("h4",{className:"mb-3",children:"Rocket Details"}),Object(_.jsxs)("ul",{className:"list-group",children:[Object(_.jsxs)("li",{className:"list-group-item",children:["Rocket Id: ",b]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",d]}),Object(_.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",o]})]}),Object(_.jsx)("hr",{}),Object(_.jsx)(u.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})})),F=(s(58),s.p+"static/media/logo.2b64d6c2.png"),w=new i.a({uri:"http://localhost:5000/graphql",cache:new j.a});var Y=function(){return Object(_.jsx)(h.a,{client:w,children:Object(_.jsxs)(u.a,{children:[Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("img",{src:F,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}})}),Object(_.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(_.jsx)(b.a,{exact:!0,path:"/launch/:flight_number",component:D})]})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,79)).then((function(c){var s=c.getCLS,n=c.getFID,t=c.getFCP,a=c.getLCP,l=c.getTTFB;s(e),n(e),t(e),a(e),l(e)}))};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(Y,{})}),document.getElementById("root")),I()}},[[60,1,2]]]);
//# sourceMappingURL=main.b2c3562b.chunk.js.map