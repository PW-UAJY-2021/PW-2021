(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/line.277791c7.png"},function(e,t,a){e.exports=a.p+"static/media/ig.f92ffa5d.svg"},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},,,,,,,,,,,function(e,t,a){e.exports=a(68)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/uajy.593d8ade.png"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/imagepost.02e1a124.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},function(e,t,a){e.exports=a.p+"static/media/kevin.ff3716b0.png"},function(e,t,a){e.exports=a.p+"static/media/arkin.eff75141.png"},function(e,t,a){e.exports=a.p+"static/media/gerar.24376a96.png"},function(e,t,a){e.exports=a.p+"static/media/ezra.8df4a3ec.png"},function(e,t,a){e.exports=a.p+"static/media/aji.6a7b0720.png"},function(e,t,a){e.exports=a.p+"static/media/mili.f652358e.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(18),l=a.n(r),s=a(12),m=a(5),c=a(3),o=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(s.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(10),u=a(2),v=a.n(u),p=a(29),h=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),l=r[0],s=r[1],m=Object(i.useState)([]),c=Object(d.a)(m,2),o=c[0],u=c[1],v=function(){return o.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!v())for(var e=function(e){var t=o[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<o.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof o&&o.length>0&&(v()||(window.addEventListener("scroll",g),window.addEventListener("resize",b)),h())}),[o]);var E=function(){v()&&(window.removeEventListener("scroll",g),window.removeEventListener("resize",b))},g=Object(p.throttle)((function(){E(),h()}),30),b=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){E(),h()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var E=h,g=a(19),b=a(1),f=a.n(b),N=a(8),w=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,s=e.alt,m=Object(c.a)(e,["className","src","width","height","alt"]),o=Object(i.useState)(!1),u=Object(d.a)(o,2),v=u[0],p=u[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){E(h.current)}),[]);var E=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},m,{ref:h,className:t,src:a,width:r,height:l,alt:s,onLoad:function(){p(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var k=w,y=function(e){var t=e.className,i=Object(c.a)(e,["className"]),r=f()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0",style:{display:"flex",alignItems:"center"}},n.a.createElement(N.a,{to:"/"},n.a.createElement(k,{src:a(47),alt:"Open",width:45,height:45})),n.a.createElement("p",{style:{margin:"0 10px",fontSize:"26px"}},"UAJY")))},O=a(11),j=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,l=(e.hideSignin,e.bottomOuterDivider),s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),o=Object(i.useState)(!1),u=Object(d.a)(o,2),v=u[0],p=u[1],h=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return v&&g(),document.addEventListener("keydown",N),document.addEventListener("click",w),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",w),b()}}));var g=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",p(!0)},b=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),p(!1)},N=function(e){v&&27===e.keyCode&&b()},w=function(e){h.current&&v&&!h.current.contains(e.target)&&e.target!==E.current&&b()},k=f()("site-header",l&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},m,{className:k}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f()("site-header-inner",s&&"has-bottom-divider")},n.a.createElement(y,{onClick:function(){return O.animateScroll.scrollToTop({smooth:!0,duration:1500})}}),!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:v?b:g},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:h,className:f()("header-nav",v&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:f()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(O.Link,{to:"aturan",onClick:b,smooth:!0,duration:1e3,offset:-50},"Peraturan"))),n.a.createElement("ul",{className:f()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(O.Link,{to:"asisten",onClick:b,smooth:!0,duration:1e3,offset:-50},"Asisten")))))))))};j.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=j,D=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=f()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(y,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement("div",{className:"footer-copyright"},"Made by ASISTEN PW 2021. All right reserved")))))};D.defaultProps={topOuterDivider:!1,topDivider:!1};var A=D,C=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(A,null))},P=a(6),L={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},F={types:Object(P.a)({},L.types),defaults:Object(P.a)({},L.defaults)},S={types:Object(P.a)({},L.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(P.a)({},L.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},R={types:Object(P.a)({},L.types,{pushLeft:v.a.bool}),defaults:Object(P.a)({},L.defaults,{pushLeft:!1})},M=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=f()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},T=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,l=e.loading,s=e.wide,m=e.wideMobile,o=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=f()("button",i&&"button-".concat(i),r&&"button-".concat(r),l&&"is-loading",s&&"button-block",m&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},d,{className:u,disabled:o}))};T.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=T,I=function(e){var t=e.className,a=e.children,r=e.handleClose,l=e.show,s=e.closeHidden,m=e.video,o=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},h=f()("modal",l&&"is-active",m&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("div",Object.assign({},d,{className:h,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},m?n.a.createElement("div",{className:"responsive-video"},"iframe"===o?n.a.createElement("iframe",{title:"video",src:m,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:m})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};I.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var W=I,H=Object(P.a)({},F.defaults),U=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,m=e.bottomDivider,o=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),h=Object(d.a)(p,2),E=h[0],g=h[1],b=f()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",o&&"has-bg-color",u&&"invert-color",t),N=f()("hero-inner section-inner",s&&"has-top-divider",m&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:b}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:N},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Pemrograman Web ",n.a.createElement("span",{className:"text-color-primary"},"2021")),n.a.createElement("div",{className:"container-sm"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Pada mata kuliah ini, mahasiswa akan mempelajari konsep dasar World Wide Web dan pemrograman Web menggunakan HTML, CSS, Java Script, dan PHP, pengembangan aplikasi menggunakan framework, serta penggunaan teknologi terkini dalam membangun suatu website."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(M,null,n.a.createElement(B,{tag:"a",color:"primary",wideMobile:!0},n.a.createElement(O.Link,{to:"aturan",smooth:!0,duration:1e3,offset:-50},"Memulai")))))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement(k,{className:"has-shadow",src:a(55),alt:"Hero",width:896,height:504})),n.a.createElement(W,{id:"video-modal",show:E,handleClose:function(e){e.preventDefault(),g(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};U.defaultProps=H;var _=U,z=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),s=f()("section-header",t),m=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(m,{className:f()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};z.defaultProps={children:null,tag:"h2"};var K=z,V=Object(P.a)({},R.defaults),J=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,o=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=f()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",m&&"has-bg-color",o&&"invert-color",t),p=f()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),h=f()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({id:"aturan"},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement(K,{data:{title:"PERATURAN PRAKTIKUM",paragraph:"Berikut adalah peraturan praktikum untuk mata kuliah Pengembangan Web 2021."},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(56),alt:"Features tile icon 01",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 1"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Praktikan harus mengikuti semua acara praktikum secara urut.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(57),alt:"Features tile icon 02",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 2"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Pergunakan waktu praktikum sebaik-baiknya.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(58),alt:"Features tile icon 03",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 3"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Segala pemberitahuan ataupun pengumuman tambahan dapat dilihat di grup teams masing-masing kelas.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(59),alt:"Features tile icon 04",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 4"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Praktikan baru boleh mengikuti praktikum setelah memenuhi persyaratan yang berlaku dan diijinkan oleh Asisten Praktikum.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(60),alt:"Features tile icon 05",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 5"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Praktikan harus sudah mengerjakan guided dan tugas praktikum sebelumnya sebagai syarat untuk mengikuti praktikum selanjutnya.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(26),alt:"Features tile icon 06",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 6"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Batas keterlambatan maksimal 15 menit. Jika terlambat lebih dari 15 menit, praktikan tidak diijinkan mengikuti praktikum.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(26),alt:"Features tile icon 06",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 7"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Jika praktikan tidak dapat mengikuti praktikum sesuai kelasnya, praktikan diijinkan pindah kelas dengan menggunakan surat ijin yang ditandatangani oleh Dosen Praktikum. Pindah kelas hanya bisa dilakukan pada minggu yang sama dengan seijin Dosen Praktikum.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(k,{src:a(26),alt:"Features tile icon 06",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Peraturan 8"),n.a.createElement("p",{className:"m-0 text-sm",style:{textAlign:"justify"}},"Batas waktu untuk protes nilai adalah seminggu (7 hari) setelah nilai muncul. Untuk protes nilai bisa menghubungi pemegang modul melalui line atau teams dengan mencantumkan langsung Nama, NPM, Kelas, dan Keluhan."))))))))};J.defaultProps=V;var q=J,Z=Object(P.a)({},S.defaults),G=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,o=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),E=f()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",m&&"has-bg-color",o&&"invert-color",t),g=f()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),b=f()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({id:"asisten"},h,{className:E}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g},n.a.createElement(K,{data:{title:"ASISTEN PRAKTIKUM",paragraph:"Berikut adalah asisten praktikum yang akan membantu kalian selama mata kuliah Pengembangan Web 2021."},className:"center-content"}),n.a.createElement("div",{className:b},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"JAVASCRIPT & VUE FIREBASE"),n.a.createElement("h3",{className:"mt-0 mb-12"},"KEVIN GHEBRE"),n.a.createElement("p",{className:"m-0"},n.a.createElement(M,null,n.a.createElement(B,{tag:"a",wideMobile:!0,href:"http://line.me/ti/p/~kevin_ghebre",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(14),alt:"Features split 01"})),n.a.createElement(B,{tag:"a",wideMobile:!0,href:"#",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(15),alt:"Features split 01",width:25,height:40}))))),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(k,{src:a(61),alt:"Features split 02"}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"HTML & REST WEB SERVICE"),n.a.createElement("h3",{className:"mt-0 mb-12"},"ARKIN ELIEZER JULIJANTO"),n.a.createElement("p",{className:"m-0"},n.a.createElement(M,null,n.a.createElement(B,{tag:"a",wideMobile:!0,href:"http://line.me/ti/p/~arkin.julianto",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(14),alt:"Features split 01"})),n.a.createElement(B,{tag:"a",wideMobile:!0,href:"https://www.instagram.com/arkinjulianto",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(15),alt:"Features split 01",width:25,height:40}))))),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(k,{src:a(62),alt:"Features split 02"}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"CSS & VUE CLI"),n.a.createElement("h3",{className:"mt-0 mb-12"},"GERARDO LEONEL BLESLY"),n.a.createElement("p",{className:"m-0"},n.a.createElement(M,null,n.a.createElement(B,{tag:"a",wideMobile:!0,href:"http://line.me/ti/p/~rexion21",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(14),alt:"Features split 01"})),n.a.createElement(B,{tag:"a",wideMobile:!0,href:"https://www.instagram.com/gerardoblesly",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(15),alt:"Features split 01",width:25,height:40}))))),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(k,{src:a(63),alt:"Features split 02"}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"PHP & VUE JS BASIC"),n.a.createElement("h3",{className:"mt-0 mb-12"},"EZRA AUDIVANO DIRFA"),n.a.createElement("p",{className:"m-0"},n.a.createElement(M,null,n.a.createElement(B,{tag:"a",blank:!0,wideMobile:!0,href:"http://line.me/ti/p/~ezradio3",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(14),alt:"Features split 01"})),n.a.createElement(B,{tag:"a",wideMobile:!0,href:"https://www.instagram.com/ezradio1",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(15),alt:"Features split 01",width:25,height:40}))))),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(k,{src:a(64),alt:"Features split 03",width:400,height:200}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"LARAVEL MVC & LARAVEL CRUD"),n.a.createElement("h3",{className:"mt-0 mb-12"},"ARNAWA JUAN IBNU AJI"),n.a.createElement("p",{className:"m-0"},n.a.createElement(M,null,n.a.createElement(B,{tag:"a",wideMobile:!0,href:"http://line.me/ti/p/~arnawa21",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(14),alt:"Features split 01"})),n.a.createElement(B,{tag:"a",wideMobile:!0,href:"https://www.instagram.com/arnawaji09",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(15),alt:"Features split 01",width:25,height:40}))))),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(k,{src:a(65),alt:"Features split 02"}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"PWA VUE & SERVICE WORKER"),n.a.createElement("h3",{className:"mt-0 mb-12"},"MILIARWAN DOANKZZ"),n.a.createElement("p",{className:"m-0"},n.a.createElement(M,null,n.a.createElement(B,{tag:"a",wideMobile:!0,href:"http://line.me/ti/p/~miliarwan_doankzz",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(14),alt:"Features split 01"})),n.a.createElement(B,{tag:"a",wideMobile:!0,href:"https://www.instagram.com/miliarwan_doankz",style:{backgroundColor:"transparent",width:"auto",padding:"0"}},n.a.createElement(k,{style:{width:"100%"},src:a(15),alt:"Features split 01",width:25,height:40}))))),n.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(k,{src:a(66),alt:"Features split 02"})))))))};G.defaultProps=Z;var Y=G,$=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(_,{className:"illustration-section-01"}),n.a.createElement(q,null),n.a.createElement(Y,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/PW-2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Q=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),n.a.createElement(E,{ref:e,children:function(){return n.a.createElement(s.c,null,n.a.createElement(o,{exact:!0,path:"/",component:$,layout:C}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);var X=Object(m.a)();l.a.render(n.a.createElement(s.b,{history:X},n.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[37,1,2]]]);
//# sourceMappingURL=main.c864ab90.chunk.js.map