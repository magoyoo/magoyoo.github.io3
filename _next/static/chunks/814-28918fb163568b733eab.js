(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{42390:function(t,n,e){"use strict";e.d(n,{r:function(){return i},X:function(){return o}});var i=function(t){var n=new Date(t);n.setHours(n.getHours()-9);var e=n.getFullYear(),i=n.getMonth()+1,o=n.getDate(),a=r[n.getDay()];return"".concat(e,"\ub144 ").concat(i,"\uc6d4 ").concat(o,"\uc77c(").concat(a,")")},o=function(t){var n=new Date(t);n.setHours(n.getHours()-9);var e=n.getFullYear(),i=String(e).substring(2,4),o=n.getMonth()+1,r=n.getDate();return"".concat(i,".").concat(o,".").concat(r)},r=["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"]},65247:function(t,n,e){"use strict";e(67294);var i=e(8193),o=e(42390),r=e(1565),a=e(85893);n.Z=function(t){var n=t.data,e=t.style;return(0,a.jsxs)(c,{style:e,children:[(0,a.jsx)(s,{children:"".concat((0,o.X)(n.date))}),(0,a.jsx)(d,{children:(0,a.jsx)(i.QRz,{size:14})}),(0,a.jsx)(s,{children:n.readMin+"\ubd84"})]})};var c=r.ZP.div.withConfig({displayName:"BlogDescription__DescriptionBox",componentId:"sc-r4kzbj-0"})(["display:flex;flex-direction:row;align-items:center;margin-top:8px;"]),s=r.ZP.div.withConfig({displayName:"BlogDescription__Description",componentId:"sc-r4kzbj-1"})(["font-size:12px;font-family:SCDreamL;color:#2c2c2c;"]),d=r.ZP.div.withConfig({displayName:"BlogDescription__IconBox",componentId:"sc-r4kzbj-2"})(["margin-left:8px;margin-right:1px;display:flex;align-items:center;justify-content:center;height:14px;width:14px;padding-bottom:3px;"])},43873:function(t,n,e){"use strict";e(67294);var i=e(1565),o=e(85893);n.Z=function(t){var n=t.title;return(0,o.jsx)(r,{children:n})};var r=i.ZP.div.withConfig({displayName:"SectionTitleContainer__Cotainer",componentId:"sc-4o8k85-0"})(["width:100%;font-size:17px;padding-bottom:80px;font-size:18px;"])},81774:function(t,n,e){"use strict";e(67294);var i=e(1565),o=e(85893);n.Z=function(t){var n=t.tagLabel;return(0,o.jsx)(r,{children:(0,o.jsx)(a,{children:n})})};var r=i.ZP.div.withConfig({displayName:"PopularBlogTag__TagContainer",componentId:"sc-1fv7ypj-0"})(["display:flex;padding:5px 8px;border-radius:20px;color:#9a9a9a;background-color:#f2f2f2;justify-content:center;align-items:center;margin-bottom:4px;margin-right:4px;font-size:12px;"]),a=i.ZP.div.withConfig({displayName:"PopularBlogTag__TagLabel",componentId:"sc-1fv7ypj-1"})(["color:#9a9a9a;background-color:#f2f2f2;font-size:12px;"])},6653:function(t,n,e){"use strict";var i=e(92809),o=e(67294),r=e(42274),a=e(1565),c=e(85893);function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}n.Z=function(t){var n=t.children,e=t.style,i=(0,o.useState)({}),r=i[0],a=i[1],s=(0,o.useCallback)((function(t){for(var n={},e=0;e<t.length;e++)n=d(d({},n),t[e]);return n}),[]);return(0,o.useEffect)((function(){if(Array.isArray(e)){var t=s(e);a(t)}else e&&a(e)}),[e]),(0,c.jsx)(l,{style:r,children:n})};var l=a.ZP.div.withConfig({displayName:"HomeInner__Container",componentId:"sc-1po3kg4-0"})(["width:100%;height:100%;margin:0 auto;padding:0 2rem;"," @media ","{max-width:1200px;}@media ","{padding:0 1.2rem;}"],(function(t){return null!==t&&void 0!==t&&t.style?d({},t.style):{}}),(function(){return r.A.DESKTOP_INNER}),(function(){return r.A.MOBILE}))},76081:function(t,n,e){"use strict";e.d(n,{Z:function(){return B}});e(67294);var i=e(1565),o=e(6653),r=e(42274),a=e(41664),c=e(25675),s=e(70123),d=e(81774),l=e(4912),p=e(65247),f=e(85893);var m=function(t){var n=t.data,e=t.isLastItem;return(0,l.i)(),(0,f.jsx)(a.default,{href:"/".concat(n.category,"/").concat(n.pathName),children:(0,f.jsx)(u,{isLastItem:e,children:(0,f.jsxs)(g,{children:[(0,f.jsxs)(w,{children:[(0,f.jsx)(j,{children:n.title}),(0,f.jsx)(v,{children:n.description}),(0,f.jsx)(p.Z,{data:n}),(0,f.jsx)(C,{children:n.tags.map((function(t,e){return(0,f.jsx)(d.Z,{tagLabel:t},"".concat(n.category,"/").concat(n.pathName,"/tags/").concat(e))}))})]}),(0,f.jsxs)(y,{children:[(0,f.jsx)(x,{}),(0,f.jsx)(h,{src:n.img?n.img:s.Z,alt:"blog-image",width:"100%",height:"100%",objectFit:"cover",layout:"responsive"})]})]})})})},u=i.ZP.div.withConfig({displayName:"ArticleColunmCard__ArticleOuterContainer",componentId:"sc-nz0ajs-0"})(["font-size:24px;margin-bottom:",";@media ","{width:100%;}@media ","{width:100%;border-bottom:",";padding:16px 16px;margin-bottom:0;}"],(function(t){return t.isLastItem?"0":"40px"}),(function(){return r.A.TABLET}),(function(){return r.A.MOBILE}),(function(t){return t.isLastItem?"":"2px #E5E5E5 solid"})),g=i.ZP.div.withConfig({displayName:"ArticleColunmCard__Container",componentId:"sc-nz0ajs-1"})(["height:100%;width:100%;display:flex;position:relative;flex-direction:row;justify-content:flex-start;overflow:hidden;cursor:pointer;@media ","{width:100%;}@media ","{width:100%;padding:20px 0;}"],(function(){return r.A.TABLET}),(function(){return r.A.MOBILE})),x=i.ZP.div.withConfig({displayName:"ArticleColunmCard__DimContainer",componentId:"sc-nz0ajs-2"})(["width:100%;height:100%;background-color:rgb(110,110,122);position:absolute;opacity:0.3;z-index:999;"]),h=(0,i.ZP)(c.default).withConfig({displayName:"ArticleColunmCard__ImageContainer",componentId:"sc-nz0ajs-3"})(["object-position:center -38px;@media ","{object-position:center -16px;}"],(function(){return r.A.MOBILE})),y=i.ZP.div.withConfig({displayName:"ArticleColunmCard__ImageOuter",componentId:"sc-nz0ajs-4"})(["width:230px;height:150px;position:relative;overflow:hidden;margin-left:5%;border:1px solid black;@media ","{width:150px;height:70px;margin-left:5%;}"],(function(){return r.A.MOBILE})),w=i.ZP.div.withConfig({displayName:"ArticleColunmCard__TextBox",componentId:"sc-nz0ajs-5"})(["position:relative;width:65%;@media ","{width:100%;}"],(function(){return r.A.MOBILE})),j=i.ZP.div.withConfig({displayName:"ArticleColunmCard__Title",componentId:"sc-nz0ajs-6"})(["font-size:24px;font-family:SCDreamM;@media ","{font-size:16px;}"],(function(){return r.A.MOBILE})),v=i.ZP.div.withConfig({displayName:"ArticleColunmCard__Description",componentId:"sc-nz0ajs-7"})(["font-family:SCDreamL;margin-top:16px;font-size:12px;color:#2c2c2c;@media ","{font-size:12px;margin-top:10px;}"],(function(){return r.A.MOBILE})),C=i.ZP.div.withConfig({displayName:"ArticleColunmCard__TagsContainer",componentId:"sc-nz0ajs-8"})(["display:flex;width:100%;flex-wrap:wrap;flex-direction:row;justify-content:flex-start;margin-bottom:40px;margin-top:10px;@media ","{margin-bottom:0px;display:none;}"],(function(){return r.A.MOBILE})),_=e(43873),b=e(83789),I=(e(86998),e(59669)),P=(e(26145),e(9675),e(62520)),Z=e(34155);(0,P.join)(Z.cwd(),I.pm);var A=function(t){var n=[];t.map((function(t){if("article"!=t.category){var e=t.tags;n=[].concat((0,b.Z)(n),(0,b.Z)(e))}}));var e=new Set(n);return Array.from(e)};var k=function(t){var n=t.tagLabel;return(0,f.jsx)(a.default,{href:"/tags/".concat(n),children:(0,f.jsx)(O,{children:(0,f.jsx)(N,{children:n})})})},O=i.ZP.div.withConfig({displayName:"HomeBlogTag__TagContainer",componentId:"sc-1r73ihl-0"})(["display:flex;padding:12px 12px;border:1px solid #e6e6e6;justify-content:center;align-items:center;margin-bottom:12px;margin-right:12px;font-size:12px;cursor:pointer;"]),N=i.ZP.div.withConfig({displayName:"HomeBlogTag__TagLabel",componentId:"sc-1r73ihl-1"})(["color:black;font-size:12px;"]);var z=function(t){var n=t.title;return(0,f.jsx)(L,{children:n})},L=i.ZP.div.withConfig({displayName:"TagsTitleContainer__Cotainer",componentId:"sc-oz42wt-0"})(["width:100%;font-size:18px;padding-bottom:40px;"]);var B=function(t){var n=t.data,e=t.contentsTitle,i=t.hideTagSection,r=t.isShowArticle,a=(0,l.i)();return(0,f.jsx)(T,{children:(0,f.jsx)(o.Z,{style:a?{padding:0}:{},children:(0,f.jsx)(E,{children:(0,f.jsxs)(D,{children:[(0,f.jsxs)(S,{children:[!a&&(0,f.jsx)(_.Z,{title:e||"\ucd5c\uc2e0\uae00"}),(0,f.jsx)(M,{children:n.map((function(t,e){if(r&&"article"==t.category||!r&&"article"!=t.category)return(0,f.jsx)(m,{data:t,isLastItem:e==n.length-1},"HomeArticle/RecentlyPostSection/"+e)}))})]}),i?(0,f.jsx)(f.Fragment,{}):(0,f.jsxs)(R,{children:[(0,f.jsx)(z,{title:"\uad00\uc2ec"}),(0,f.jsx)(H,{children:A(n).map((function(t,n){return(0,f.jsx)(k,{tagLabel:t},"RecentlyPostSection/tags/".concat(n))}))})]})]})})})})},T=i.ZP.section.withConfig({displayName:"RecentlyPostSection__Container",componentId:"sc-rfkkte-0"})([""]),E=i.ZP.div.withConfig({displayName:"RecentlyPostSection__Inner",componentId:"sc-rfkkte-1"})([""]),S=i.ZP.section.withConfig({displayName:"RecentlyPostSection__RecentlyPostOuter",componentId:"sc-rfkkte-2"})(["padding:50px 0;width:68%;@media ","{width:100%;padding:0;}@media ","{width:100%;padding:0;}"],(function(){return r.A.TABLET}),(function(){return r.A.MOBILE})),D=i.ZP.div.withConfig({displayName:"RecentlyPostSection__ArticleSection",componentId:"sc-rfkkte-3"})(["display:flex;flex-direction:row;"]),M=i.ZP.article.withConfig({displayName:"RecentlyPostSection__ArticlesContainer",componentId:"sc-rfkkte-4"})(["display:flex;flex-direction:column;width:100%;@media ","{flex-wrap:nowrap;flex-direction:column;align-items:center;}"],(function(){return r.A.MOBILE})),R=i.ZP.div.withConfig({displayName:"RecentlyPostSection__TagsBox",componentId:"sc-rfkkte-5"})(["margin-top:20px;padding-top:30px;width:30%;margin-left:2%;height:200px;position:-webkit-sticky;position:sticky;top:70px;@media ","{display:none;}@media ","{display:none;}"],(function(){return r.A.TABLET}),(function(){return r.A.MOBILE})),H=i.ZP.div.withConfig({displayName:"RecentlyPostSection__TagsInnerBox",componentId:"sc-rfkkte-6"})(["width:100%;display:flex;flex-wrap:wrap;align-items:flex-start;flex-direction:row;"])},33596:function(){},26145:function(){}}]);