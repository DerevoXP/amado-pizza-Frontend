(this["webpackJsonptest-heroku"]=this["webpackJsonptest-heroku"]||[]).push([[6],{183:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t(6);var m=l.a.memo((function(e){var a,t,n,m,u,s,i=e.cart,o=e.catalog,d=e.onChange;function E(e){var a=e.currentTarget.getAttribute("operator"),t=e.currentTarget.getAttribute("ident");d(a,t)}return i.map((function(e){m=e.amount;for(var i=0;i<o.length;i++)o[i][0]===e.item&&(a=o[i][2],t=o[i][1],n=o[i][3],u=o[i][0],s=o[i][0]);return l.a.createElement("tr",{key:s},l.a.createElement("td",{className:"cart_product_img"},l.a.createElement(c.b,{to:"".concat(r.d,"/").concat(u)},l.a.createElement("img",{src:"http://a0438483.xsph.ru/img/".concat(a),alt:"Product"}))),l.a.createElement("td",{className:"cart_product_desc"},l.a.createElement("h5",null,t)),l.a.createElement("td",{className:"price"},l.a.createElement("span",null,"$",n)),l.a.createElement("td",{className:"qty"},l.a.createElement("div",{className:"qty-btn d-flex"},l.a.createElement("div",{className:"quantity"},l.a.createElement("span",{className:"qty-minus",onClick:E,operator:"minus",ident:u,style:{marginRight:"10px"}},l.a.createElement("i",{className:"fa fa-minus","aria-hidden":"true"})),l.a.createElement("input",{type:"number",className:"qty-text",value:m,style:{userSelect:"none"},readOnly:!0}),l.a.createElement("span",{className:"qty-plus",onClick:E,operator:"plus",ident:u},l.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))))}))})),u=t(19),s=t(12),i=t(25);a.default=l.a.memo(Object(s.b)((function(e){return{cart:e.app.cart,catalog:e.app.catalog.data,catalogLoading:e.app.isLoading.catalog||!1,fuckingCrutch:e.app.fuckingCrutch}}),(function(e){return{updateCart:function(a){return e(Object(u.e)(a))},engineLoaderMazaFucker:function(a){return e(Object(u.c)(a))},updateFuckingCrutch:function(a){return e(Object(u.f)(a))}}}))((function(e){var a,t=e.cart,n=e.catalog,u=e.catalogLoading,s=e.engineLoaderMazaFucker,o=e.fuckingCrutch,d=e.updateCart,E=e.updateFuckingCrutch;if(o&&(s("catalog"),E(!1)),u)return l.a.createElement(i.a,null);function p(){a=0;for(var e=0;e<t.length;e++){var n=t[e].price*t[e].amount;a+=n}}p();var g=a<189&&t.length?a+10:a,f=g<200&&t.length?"$10":"Free!",h=0!==g?(1.0842*g).toFixed(1):0,v=t.length?"":"none";return l.a.createElement("div",{className:"cart-table-area section-padding-100"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-8"},l.a.createElement("div",{className:"cart-title mt-50"},l.a.createElement("h2",null,"Your order:")),l.a.createElement("div",{className:"cart-table clearfix"},l.a.createElement("table",{className:"table table-responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Quantity"))),l.a.createElement("tbody",null,l.a.createElement(m,{cart:t,catalog:n,onChange:function(e,a){if("plus"===e)for(var n=0;n<t.length;n++)t[n].item===a&&(t[n].amount++,d(t));else for(var l=0;l<t.length;l++)t[l].item===a&&(t[l].amount>1?(t[l].amount--,d(t)):(t.splice(l,1),d(t)));localStorage.setItem("cartInfo",JSON.stringify(t)),p()}}))))),l.a.createElement("div",{className:"col-12 col-lg-4"},l.a.createElement("div",{className:"cart-summary"},l.a.createElement("h5",null,"Cart total"),l.a.createElement("ul",{className:"summary-table"},l.a.createElement("li",{style:{display:"".concat(v)}},l.a.createElement("span",null,"delivery:")," ",l.a.createElement("span",null,f)),l.a.createElement("li",null,l.a.createElement("span",null,"all:")," ",l.a.createElement("span",null,"$",g," / \u20ac",h))),l.a.createElement("div",{className:"cart-btn mt-100"},l.a.createElement(c.b,{to:r.b,className:"btn amado-btn w-100"},"CHECKOUT")))))))})))}}]);
//# sourceMappingURL=6.50278b82.chunk.js.map