(this.webpackJsonppj1=this.webpackJsonppj1||[]).push([[0],{31:function(e,t,c){},47:function(e,t,c){},69:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),s=c.n(a),r=c(21),i=c.n(r),j=(c(31),c(16)),d=c(10),h=c(93),l=c(94),b=c(95),o=c(96),x=c(97),O=c(101),p=c(98),m=c(99),u=c(100),g=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),s=c[0],r=c[1];return Object(n.jsx)(h.a,{light:!0,expand:"md",className:"mb-4",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d.b,{to:"/",className:"navbar-brand",children:"BookStore"}),Object(n.jsx)(b.a,{onClick:function(){return r(!s)}}),Object(n.jsx)(o.a,{isOpen:s,navbar:!0,children:Object(n.jsxs)(x.a,{className:"ml-auto",navbar:!0,children:[Object(n.jsxs)(p.a,{inline:!0,children:[Object(n.jsx)(m.a,{type:"type",name:"search",placeholder:"Nh\u1eadp th\u1ee9 c\u1ea7n t\xecm ki\u1ebfm",className:"mr-2 input--search"}),Object(n.jsx)(u.a,{outline:!0,color:"primary",children:"Search"})]}),Object(n.jsx)(O.a,{className:"header__link ml-2",children:Object(n.jsx)(d.b,{to:"/login",children:"\u0110\u0103ng nh\u1eadp"})}),Object(n.jsx)(O.a,{className:"header__link ml-2",children:Object(n.jsx)(d.b,{to:"/register",children:"\u0110\u0103ng k\xed"})})]})})]})})},f=c(118),y=[{src:c.p+"static/media/bf1.93eb2e96.jpg"},{src:c.p+"static/media/bf2.5b1b7802.jpg"},{src:c.p+"static/media/bf3.d500bdd1.jpg"}],v=function(){return Object(n.jsx)(f.a,{items:y})},C=c(102),N=c(30),k=c(49),S=c(50),T=c(18),w=c(52),B=c(51),I=s.a.createContext(),H=function(e){Object(w.a)(c,e);var t=Object(B.a)(c);function c(e){var n;return Object(k.a)(this,c),(n=t.call(this,e)).state={Cart:[]},n.addToCart=n.addToCart.bind(Object(T.a)(n)),n.deleteItem=n.deleteItem.bind(Object(T.a)(n)),n}return Object(S.a)(c,[{key:"addToCart",value:function(e){this.setState({Cart:this.state.Cart.concat(e)})}},{key:"deleteItem",value:function(e){console.log("index: ",e),0===e?this.setState({Cart:this.state.Cart.slice(e+1)}):this.setState({Cart:[].concat(Object(N.a)(this.state.Cart.slice(0,e)),Object(N.a)(this.state.Cart.slice(e+1)))}),console.log(this.state.Cart)}},{key:"render",value:function(){return Object(n.jsx)(I.Provider,{value:{Cart:this.state.Cart,addToCart:this.addToCart,deleteItem:this.deleteItem},children:this.props.children})}}]),c}(a.Component),M=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(h.a,{className:"Nav-product",children:[Object(n.jsxs)(x.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(C.a,{disabled:!0,href:"#",children:"Xin ch\xe0o"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(C.a,{href:"#",children:"Gi\u1edbi thi\u1ec7u"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(C.a,{href:"#",children:"S\u1ea3n ph\u1ea9m"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(C.a,{href:"#",children:"Khuy\u1ebfn m\u1ea1i"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(C.a,{href:"#",children:"Tin t\u1ee9c"})})]}),Object(n.jsx)(x.a,{className:"ml-auto",navbar:!0,children:Object(n.jsx)(I.Consumer,{children:function(e){var t=e.Cart;return Object(n.jsx)(O.a,{children:Object(n.jsx)(C.a,{className:"Nav-cart__cart",href:"#",children:Object(n.jsxs)(d.b,{to:"/cart",children:["Gi\u1ecf h\xe0ng (",t.length,")"]})})})}})})]})})},_=c(103),G=function(e){return Object(n.jsx)(_.a,{md:"3",children:Object(n.jsxs)("div",{className:"Category",children:[Object(n.jsx)("p",{children:"Danh m\u1ee5c s\u1ea3n ph\u1ea9m"}),Object(n.jsxs)(x.a,{vertical:!0,children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(d.b,{to:"/sbc",children:"S\xe1ch b\xe1n ch\u1ea1y"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(d.b,{to:"/svh",children:"S\xe1ch v\u0103n h\u1ecdc"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(d.b,{to:"/skn",children:"S\xe1ch k\u0129 n\u0103ng"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(d.b,{to:"/skt",children:"S\xe1ng kinh t\u1ebf"})}),Object(n.jsx)(O.a,{children:Object(n.jsx)(d.b,{to:"/sta",children:"S\xe1ch ti\u1ebfng anh"})})]})]})})},K=c(104),P=c(105),R=c(106),X=c(107),$=c(108);var q=function(e){return Object(n.jsxs)(K.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(P.a,{children:Object(n.jsxs)(R.a,{children:[Object(n.jsx)(X.a,{tag:"h5",children:"Mi\u1ec5n ph\xed giao h\xe0ng"}),Object(n.jsxs)($.a,{children:["Ch\u1ec9 c\u1ea7n \u0111\u01a1n h\xe0ng ",">"," 300k "]})]})})}),Object(n.jsx)(_.a,{children:Object(n.jsx)(P.a,{children:Object(n.jsxs)(R.a,{children:[Object(n.jsx)(X.a,{tag:"h5",children:"30 ng\xe0y ho\xe0n h\xe0ng"}),Object(n.jsx)($.a,{children:"We stand behind our goods and services and want you to be satisfied with them. We offer you a 30 day return policy"})]})})}),Object(n.jsx)(_.a,{children:Object(n.jsx)(P.a,{children:Object(n.jsxs)(R.a,{children:[Object(n.jsx)(X.a,{tag:"h5",children:"H\u1ed7 tr\u1ee3 h\xe0ng \u0111\u1ea7u"}),Object(n.jsx)($.a,{children:"Call our specialists for help with an order. Our customer service team is here to assist you."})]})})}),Object(n.jsx)(_.a,{children:Object(n.jsx)(P.a,{children:Object(n.jsxs)(R.a,{children:[Object(n.jsx)(X.a,{tag:"h5",children:"Thanh to\xe1n an to\xe0n"}),Object(n.jsx)($.a,{children:"All Payments are secured using latest SSL Encryption."})]})})})]})},E=c(109);function F(e){return Object(n.jsx)(_.a,{children:Object(n.jsx)(E.a,{fluid:!0,children:Object(n.jsxs)(l.a,{fluid:!0,children:[Object(n.jsx)("i",{className:"fab fa-react"}),Object(n.jsx)("h1",{className:"display-4",children:"Lorem"}),Object(n.jsx)("p",{className:"lead",children:"This is a modified jumbotron that occupies the entire horizontal space of its parent."}),Object(n.jsxs)(p.a,{inline:!0,children:[Object(n.jsx)(m.a,{type:"type",name:"search",placeholder:"",className:"mr-2"}),Object(n.jsx)(u.a,{outline:!0,color:"primary",children:"Search"})]})]})})})}var L=c(110),A=c(111);function D(e){return Object(n.jsx)(L.a,{children:Object(n.jsx)(A.a,{active:!0,children:"Trang Ch\u1ee7"})})}c(69),c(37);var J=c(28),W=c(29),z=c(112),Q=c(113),U=c(114),V=function(e){var t=e.type,c=Object(a.useState)([{id:1,name:"\u0110\xe0n \xd4ng Sao H\u1ecfa \u0110\xe0n B\xe0 Sao Kim",type:"1",author:"Bao",price:3e5,description:"Ng\xe0y x\u1eeda ng\xe0y x\u01b0a, nh\u1eefng ng\u01b0\u1eddi sao H\u1ecfa v\xe0 sao Kim \u0111\xe3 g\u1eb7p g\u1ee1, y\xeau nhau v\xe0 s\u1ed1ng h\u1ea1nh ph\xfac b\u1edfi h\u1ecd t\xf4n tr\u1ecdng v\xe0 ch\u1ea5p nh\u1eadn m\u1ecdi \u0111i\u1ec1u kh\xe1c bi\u1ec7t. R\u1ed3i h\u1ecd \u0111\u1ebfn Tr\xe1i \u0110\u1ea5t v\xe0 ch\u1ee9ng l\xe3ng qu\xean \u0111\xe3 x\u1ea3y ra: H\u1ecd qu\xean r\u1eb1ng h\u1ecd \u0111\u1ebfn t\u1eeb nh\u1eefng h\xe0nh tinh kh\xe1c",img:"https://salt.tikicdn.com/cache/400x400/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg"},{id:2,name:"C\xe2y Cam Ng\u1ecdt C\u1ee7a T\xf4i",type:"2",author:"Bao",price:104e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg"},{id:3,name:"B\u1eaft Tr\u1ebb \u0110\u1ed3ng Xanh (T\xe1i B\u1ea3n 2020)",type:"3",author:"Bao",price:59e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/65/74/fb/1e6ca7a2fa28d83667a8e50144e43d0d.jpg"},{id:4,name:"M\xd9I HO\xc0NG KIM",type:"1",author:"Bao",price:92e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/1f/bb/74/db16b2b5e39950680cfd4dca6e0e0faf.jpg"},{id:5,name:"S\xf3ng \u1edf \u0111\xe1y s\xf4ng",type:"1",author:"Bao",price:69e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/77/55/5a/8dce4cda3cf978a27c73a9bf95919405.jpg"}]),s=Object(j.a)(c,2),r=s[0];s[1];return Object(a.useEffect)((function(){})),Object(n.jsxs)(z.a,{children:["all"===t&&r.map((function(e){return Object(n.jsx)(_.a,{xs:"6",md:"4",children:Object(n.jsxs)(P.a,{className:"mb-2 card-product",children:[Object(n.jsx)(Q.a,{top:!0,src:e.img,alt:"Card image cap"}),Object(n.jsxs)(R.a,{children:[Object(n.jsx)(X.a,{children:e.name}),Object(n.jsx)(U.a,{className:"mb-2 text-muted",children:Object(n.jsxs)("span",{children:[e.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),"\u0111"]})}),Object(n.jsx)(I.Consumer,{children:function(t){var c=t.addToCart;return Object(n.jsxs)("div",{className:"button-product",children:[Object(n.jsx)(u.a,{onClick:function(){return c(e)},color:"success",children:"Th\xeam v\xe0o gi\u1ecf"}),Object(n.jsx)(d.b,{to:"".concat(e._id),children:Object(n.jsxs)(u.a,{color:"danger",children:[Object(n.jsx)(J.a,{icon:W.a}),"Chi ti\u1ebft"]})})]})}})]})]})})})),"all"!==t&&r.filter((function(e){return e.type===t})).map((function(e){return Object(n.jsx)(_.a,{xs:"6",md:"4",children:Object(n.jsxs)(P.a,{className:"mb-2 card-product",children:[Object(n.jsx)(Q.a,{top:!0,src:e.img,alt:"Card image cap"}),Object(n.jsxs)(R.a,{children:[Object(n.jsx)(X.a,{children:e.name}),Object(n.jsx)(U.a,{className:"mb-2 text-muted",children:Object(n.jsxs)("span",{children:[e.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),"\u0111"]})}),Object(n.jsx)(I.Consumer,{children:function(t){var c=t.addToCart;return Object(n.jsxs)("div",{className:"button-product",children:[Object(n.jsx)(u.a,{onClick:function(){return c(e)},color:"success",children:"Th\xeam v\xe0o gi\u1ecf"}),Object(n.jsx)(d.b,{to:"".concat(e.id),children:Object(n.jsxs)(u.a,{color:"danger",children:[Object(n.jsx)(J.a,{icon:W.a}),"Chi ti\u1ebft"]})})]})}})]})]})})})),"all"!==t&&0===r.filter((function(e){return e.type===t})).length&&Object(n.jsx)(_.a,{xs:"6",md:"4",children:"Ch\u01b0a c\xf3 s\u1ea3n ph\u1ea9m"})]})},Y=function(){return Object(n.jsxs)(_.a,{md:"9",children:[Object(n.jsx)(D,{}),Object(n.jsx)(V,{type:"all"}),Object(n.jsx)(z.a,{className:"Row-More",children:Object(n.jsx)(_.a,{children:Object(n.jsx)(u.a,{outline:!0,color:"primary",children:"Xem th\xeam"})})})]})},Z=c(115),ee=(c(89),function(){return Object(n.jsxs)(_.a,{md:"9",children:[Object(n.jsx)(D,{}),Object(n.jsx)(z.a,{children:Object(n.jsxs)(_.a,{children:[Object(n.jsxs)(Z.a,{bordered:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"S\u1ea3n ph\u1ea9m"}),Object(n.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(n.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(n.jsx)("th",{children:"Gi\xe1"}),Object(n.jsx)("th",{})]})}),Object(n.jsx)(I.Consumer,{children:function(e){var t=e.Cart,c=e.deleteItem;return Object(n.jsxs)("tbody",{children:[0===t.length&&Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:"5",children:"Gi\u1ecf ch\u01b0a c\xf3 h\xe0ng"})}),t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.img,width:"100",alt:e.author})}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:"1"}),Object(n.jsx)("td",{children:e.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}),Object(n.jsx)("td",{children:Object(n.jsx)(u.a,{color:"danger",onClick:function(){return c(t)},children:"X"})})]})})),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{colSpan:"3",children:"Th\xe0nh ti\u1ec1n"}),Object(n.jsx)("td",{children:t.reduce((function(e,t){return e=t.price+e}),0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}),Object(n.jsx)("td",{})]})]})}})]}),Object(n.jsx)(u.a,{color:"info",children:"Thanh to\xe1n"})]})})]})}),te=function(e){var t=e.type;return Object(n.jsxs)(_.a,{md:"9",children:[Object(n.jsx)(D,{}),Object(n.jsx)(V,{type:t})]})},ce=c(9),ne=(c(90),function(){var e=Object(ce.f)().id,t=Object(a.useState)([{id:1,name:"\u0110\xe0n \xd4ng Sao H\u1ecfa \u0110\xe0n B\xe0 Sao Kim",type:"1",author:"Bao",price:3e5,description:"Ng\xe0y x\u1eeda ng\xe0y x\u01b0a, nh\u1eefng ng\u01b0\u1eddi sao H\u1ecfa v\xe0 sao Kim \u0111\xe3 g\u1eb7p g\u1ee1, y\xeau nhau v\xe0 s\u1ed1ng h\u1ea1nh ph\xfac b\u1edfi h\u1ecd t\xf4n tr\u1ecdng v\xe0 ch\u1ea5p nh\u1eadn m\u1ecdi \u0111i\u1ec1u kh\xe1c bi\u1ec7t. R\u1ed3i h\u1ecd \u0111\u1ebfn Tr\xe1i \u0110\u1ea5t v\xe0 ch\u1ee9ng l\xe3ng qu\xean \u0111\xe3 x\u1ea3y ra: H\u1ecd qu\xean r\u1eb1ng h\u1ecd \u0111\u1ebfn t\u1eeb nh\u1eefng h\xe0nh tinh kh\xe1c",img:"https://salt.tikicdn.com/cache/400x400/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg"},{id:2,name:"C\xe2y Cam Ng\u1ecdt C\u1ee7a T\xf4i",type:"2",author:"Bao",price:104e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg"},{id:3,name:"B\u1eaft Tr\u1ebb \u0110\u1ed3ng Xanh (T\xe1i B\u1ea3n 2020)",type:"3",author:"Bao",price:59e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/65/74/fb/1e6ca7a2fa28d83667a8e50144e43d0d.jpg"},{id:4,name:"M\xd9I HO\xc0NG KIM",type:"1",author:"Bao",price:92e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/1f/bb/74/db16b2b5e39950680cfd4dca6e0e0faf.jpg"},{id:5,name:"S\xf3ng \u1edf \u0111\xe1y s\xf4ng",type:"1",author:"Bao",price:69e3,description:"String",img:"https://salt.tikicdn.com/cache/400x400/ts/product/77/55/5a/8dce4cda3cf978a27c73a9bf95919405.jpg"}]),c=Object(j.a)(t,2),s=c[0];c[1];return Object(a.useEffect)((function(){})),Object(n.jsxs)(_.a,{md:"9",children:[Object(n.jsx)(D,{}),s.filter((function(t){return t._id===e})).map((function(e){return Object(n.jsxs)("div",{className:"ItemProduct mb-3",children:[Object(n.jsxs)(z.a,{className:"pt-3",children:[Object(n.jsx)(_.a,{md:"4",children:Object(n.jsx)("img",{className:"m-auto",src:e.img,alt:e.id})}),Object(n.jsxs)(_.a,{md:"8",children:[Object(n.jsx)("h3",{children:e.name}),Object(n.jsxs)("p",{children:["Gi\xe1 b\xe1n: ",e.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")]}),Object(n.jsx)("p",{children:"Tr\u1ea1ng th\xe1i: C\xf2n h\xe0ng"}),Object(n.jsx)(I.Consumer,{children:function(t){var c=t.addToCart;return Object(n.jsx)(u.a,{onClick:function(){return c(e)},color:"info",children:"Th\xeam v\xe0o gi\u1ecf h\xe0ng"})}})]})]}),Object(n.jsx)(z.a,{className:"pt-3",children:Object(n.jsx)(_.a,{children:Object(n.jsxs)("div",{className:"ItemProduct-description",children:[Object(n.jsx)("h4",{children:"M\xf4 t\u1ea3"}),Object(n.jsx)("p",{children:e.description})]})})})]})}))]})}),ae=c.p+"static/media/banner.082f1109.jpg",se=(c(47),c(116)),re=c(117),ie=function(){return Object(n.jsxs)(_.a,{md:"9",children:[Object(n.jsx)(D,{}),Object(n.jsxs)(p.a,{className:"form-login",children:[Object(n.jsxs)(se.a,{children:[Object(n.jsx)(re.a,{for:"username",children:"T\xe0i kho\u1ea3n"}),Object(n.jsx)(m.a,{type:"username",name:"username",id:"username",placeholder:"Nh\u1eadp t\xean t\xe0i kho\u1ea3n"})]}),Object(n.jsxs)(se.a,{children:[Object(n.jsx)(re.a,{for:"password",children:"Password"}),Object(n.jsx)(m.a,{type:"password",name:"password",id:"password",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u"})]}),Object(n.jsx)(u.a,{children:"\u0110\u0103ng nh\u1eadp"})]})]})},je=function(){return Object(n.jsxs)(_.a,{md:"9",children:[Object(n.jsx)(D,{}),Object(n.jsxs)(p.a,{className:"form-register",children:[Object(n.jsxs)(se.a,{children:[Object(n.jsx)(re.a,{for:"username",children:"T\xe0i kho\u1ea3n"}),Object(n.jsx)(m.a,{type:"username",name:"username",id:"username",placeholder:"Nh\u1eadp t\xean t\xe0i kho\u1ea3n"})]}),Object(n.jsxs)(se.a,{children:[Object(n.jsx)(re.a,{for:"password",children:"M\u1eadt kh\u1ea9u"}),Object(n.jsx)(m.a,{type:"password",name:"password",id:"password",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u"})]}),Object(n.jsxs)(se.a,{children:[Object(n.jsx)(re.a,{for:"password2",children:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u"}),Object(n.jsx)(m.a,{type:"password2",name:"password2",id:"password2",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u"})]}),Object(n.jsx)(u.a,{children:"\u0110\u0103ng k\xed"})]})]})};var de=function(){return Object(n.jsx)(d.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(H,{children:[Object(n.jsx)(g,{}),Object(n.jsxs)(l.a,{children:[Object(n.jsxs)(z.a,{className:"mb-3",children:[Object(n.jsx)(_.a,{xs:"12",sm:"12",md:"12",lg:"8",children:Object(n.jsx)(v,{})}),Object(n.jsxs)(_.a,{sm:"12",lg:"4",xl:"4",children:[Object(n.jsx)("img",{className:"slide-banner img-fluid",src:ae,alt:"banner"}),Object(n.jsx)("img",{className:"slide-banner img-fluid",src:ae,alt:"banner"})]})]}),Object(n.jsx)(M,{}),Object(n.jsxs)(z.a,{className:"mt-3",children:[Object(n.jsx)(G,{}),Object(n.jsxs)(ce.c,{children:[Object(n.jsx)(ce.a,{path:"/",exact:!0,component:Y}),Object(n.jsx)(ce.a,{path:"/login",component:ie}),Object(n.jsx)(ce.a,{path:"/register",component:je}),Object(n.jsx)(ce.a,{path:"/cart",component:ee}),Object(n.jsx)(ce.a,{path:"/sbc",children:Object(n.jsx)(te,{type:"1"})}),Object(n.jsx)(ce.a,{path:"/svh",children:Object(n.jsx)(te,{type:"2"})}),Object(n.jsx)(ce.a,{path:"/skn",children:Object(n.jsx)(te,{type:"3"})}),Object(n.jsx)(ce.a,{path:"/skt",children:Object(n.jsx)(te,{type:"4"})}),Object(n.jsx)(ce.a,{path:"/sta",children:Object(n.jsx)(te,{type:"5"})}),Object(n.jsx)(ce.a,{path:"/:id",children:Object(n.jsx)(ne,{})})]})]}),Object(n.jsx)(z.a,{className:"Row-News mb-3 mt-3",children:Object(n.jsx)(q,{})}),Object(n.jsx)(z.a,{className:"Row-footer",children:Object(n.jsx)(F,{})})]})]})})})},he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(91);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(de,{})}),document.getElementById("root")),he()}},[[92,1,2]]]);
//# sourceMappingURL=main.4a8a58d6.chunk.js.map