(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{11:function(e,t,i){e.exports={movie:"IvZ6eI8jRof9rY6KElg8t",movie__img:"yxSWjRXYqQQJ7hSOK0jwG",movie__title:"_23BjOEAA0kSkftihO3p003",movie__year:"_3mrxDAXigWA4oBgAcQ4eWm",movie__genres:"i7d_RH31gAPLWHvUTL6Uv"}},14:function(e,t,i){e.exports={container:"_26rnOZWEUGha6CAmdFktPx",loader:"D2Wxeyba9Cy8nJQ4fcwzx",movies:"_3uulb5NnTE2QKgkH8BcdKe"}},26:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),n=i(18),s=i.n(n),r=i(7),o=i(2),j=i(9),l=i.n(j),d=i(13),m=i(10),v=(i(26),i(0)),b=function(e){var t=e.target,i=t.parentNode;i.classList.replace("movie_detail_img_wrap","movie_detail_img_none"),t.remove(),i.innerHTML="<span>\uc774\ubbf8\uc9c0\uac00<br>\uc5c6\uc2b5\ub2c8\ub2e4</span>"};var _=function(e){var t=e.coverImg,i=e.title,c=e.description,a=e.genres,n=(e.id,e.rating),s=e.year,o=e.bgImg;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"movie_detail_bg",children:Object(v.jsx)("img",{src:o,alt:""})}),Object(v.jsxs)("div",{className:"movie_detail_card",children:[Object(v.jsx)("div",{className:"movie_detail_img_wrap",children:Object(v.jsx)("img",{src:t,alt:i,width:"100%",onError:b})}),Object(v.jsxs)("div",{className:"movie_detail_info_wrap",children:[Object(v.jsxs)("h2",{className:"movie_detail_title",children:["\ud83c\udfac ",i]}),Object(v.jsxs)("div",{className:"movie_detail_info",children:[Object(v.jsxs)("span",{className:"movie_year",children:["\ud83d\udcc6 ",s]}),Object(v.jsxs)("span",{className:"movie_rating",children:["\u2b50\ufe0f ",n]})]}),Object(v.jsx)("ul",{className:"movie_detail_genres_list",children:a.map((function(e,t){return Object(v.jsx)("li",{className:"movie_detail_genres_item",children:e},t)}))}),Object(v.jsx)("div",{className:"movie_detail_summary_wrap",children:c?Object(v.jsx)("p",{className:"movie_detail_description",children:c}):Object(v.jsx)("p",{className:"movie_detail_description_none",children:"\uc904\uac70\ub9ac \uc815\ubcf4\uac00 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})})]}),Object(v.jsx)(r.b,{to:"/",className:"movie_detail_btn_close",children:"\u2716\ufe0f"})]})]})};i(36);var u=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"header",role:"hader",children:Object(v.jsx)(r.b,{to:"/",className:"header_logo",children:"React Movie Rank \ud83c\udfac"})})})};i(37);var O=function(){return Object(v.jsx)("div",{className:"loading_wrap",children:Object(v.jsx)("div",{className:"loading_bar",children:Object(v.jsx)("span",{className:"blind",children:"loading..."})})})};var x=function(){var e=Object(c.useState)(!0),t=Object(m.a)(e,2),i=t[0],a=t[1],n=Object(c.useState)(),s=Object(m.a)(n,2),r=s[0],j=s[1],b=Object(o.f)().id,x=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(b));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movie),a(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(u,{}),i?Object(v.jsx)(O,{}):Object(v.jsxs)("div",{children:[" ",Object(v.jsx)(_,{id:r.id,coverImg:r.medium_cover_image,title:r.title,description:r.description_full,genres:r.genres,rating:r.rating,year:r.year,bgImg:r.background_image_original},r.id)]})]})},h=i(11),g=i.n(h);var p=function(e){var t=e.id,i=e.coverImg,c=e.title,a=e.year,n=e.summary,s=e.genres;return Object(v.jsxs)("div",{className:g.a.movie,children:[Object(v.jsx)("img",{src:i,alt:c,className:g.a.movie__img}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:g.a.movie__title,children:Object(v.jsx)(r.b,{to:"/movie/".concat(t),children:c})}),Object(v.jsx)("h3",{className:g.a.movie__year,children:a}),Object(v.jsx)("p",{children:n.length>235?"".concat(n.slice(0,235),"..."):n}),Object(v.jsx)("ul",{className:g.a.movie__genres,children:s.map((function(e){return Object(v.jsx)("li",{children:e},e)}))})]})]})},f=i(14),N=i.n(f);var y=function(){var e=Object(c.useState)(!0),t=Object(m.a)(e,2),i=t[0],a=t[1],n=Object(c.useState)([]),s=Object(m.a)(n,2),r=s[0],o=s[1],j=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),a(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(v.jsx)("div",{className:N.a.container,children:i?Object(v.jsx)("div",{className:N.a.loader,children:Object(v.jsx)("span",{children:"Loading..."})}):Object(v.jsx)("div",{className:N.a.movies,children:r.map((function(e){return Object(v.jsx)(p,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var w=function(){return Object(v.jsx)(r.a,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/movie/:id",children:Object(v.jsx)(x,{})}),Object(v.jsx)(o.a,{path:"/",children:Object(v.jsx)(y,{})})]})})};i(38);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.277b6f6d.chunk.js.map