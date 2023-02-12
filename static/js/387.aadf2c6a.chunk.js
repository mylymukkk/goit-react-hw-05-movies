"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c,i,s=e(439),u=e(689),o=e(791),p=e(168),d=e(444),f=d.ZP.ul(r||(r=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  padding: 10px;\n  margin: 0 auto;\n  max-width: calc(100vw - 48px);\n  list-style: none;\n"]))),h=d.ZP.img(a||(a=(0,p.Z)(["\n  margin: 0 auto 10px;\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 5px;\n"]))),l=d.ZP.li(c||(c=(0,p.Z)(["\n  padding: 10px;\n  border: 1px solid orangered;\n  border-radius: 5px;\n  text-align: center;\n\n  & p {\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n\n  & span {\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n"]))),x=d.ZP.p(i||(i=(0,p.Z)(["\n  padding: 10px;\n  border: 1px solid orangered;\n  border-radius: 5px;\n  text-align: justify;\n  line-height: 1.4;\n  font-size: 14px;\n"]))),m=e(933),g=e(184),v=function(){var n=(0,u.UO)().movieId,t=(0,o.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,o.useEffect)((function(){(0,m.Ku)(n).then((function(n){a(n)})).catch((function(n){console.error(n)}))}),[n]),(0,g.jsxs)(g.Fragment,{children:[0!==r.length&&(0,g.jsx)(f,{children:r.map((function(n){var t=n.id,e=n.character,r=n.name,a=n.profile_path;return(0,g.jsxs)(l,{children:[a?(0,g.jsx)(h,{src:"https://image.tmdb.org/t/p/w500"+a,alt:r}):(0,g.jsx)(h,{src:"https://via.placeholder.com/200x300.png?text=no%20image",alt:"Not found"}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{children:"Character: "}),e]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{children:"Name:"})," ",r]})]},t)}))}),0===r.length&&(0,g.jsx)(x,{children:"We don`t have information for this movie"})]})}},933:function(n,t,e){e.d(t,{Df:function(){return u},Ku:function(){return l},Pg:function(){return p},W_:function(){return m},Wf:function(){return f}});var r=e(861),a=e(757),c=e.n(a),i=e(912),s="84c0cdd7fd9e4d5f8788ea3746d1dc48";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:s}),n.next=3,i.Z.get("/trending/movie/day?".concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:s}),n.next=3,i.Z.get("/movie/".concat(t,"?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:s,query:t}),n.next=3,i.Z.get("/search/movie?".concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:s}),n.next=3,i.Z.get("/movie/".concat(t,"/credits?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:s,language:"en-US"}),n.next=3,i.Z.get("/movie/".concat(t,"/reviews?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=387.aadf2c6a.chunk.js.map