(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9184)}])},6495:function(e,s,a){"use strict";var r=a(5893),n=a(7516),c=a(8604),l=a(1907);s.Z=function(e){var s=e.data,a=e.error,i=e.loading,t=e.className,d=e.errorMsg,o=(0,c.Mg)(s),m=i||!i&&!a&!s||!1;return m?(0,r.jsx)("div",{className:"_flex_center py-6 ".concat(t||""),children:(0,r.jsx)("div",{className:"w-[30px] h-[30px]",children:(0,r.jsx)(l.Z,{className:"text-primary-500"})})}):o||m||a?a&&!m?(0,r.jsxs)("div",{className:"_flex_center py-7 flex-col gap-3 ".concat(t||""),children:[(0,r.jsx)(n.I2T,{size:55}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h3",{className:"_h3 font-extrabold mb-1.5",children:"Opps"}),(0,r.jsx)("p",{className:"_body2",children:d||(0,c.FU)(a)})]})]}):null:(0,r.jsxs)("div",{className:"_flex_center py-7 flex-col gap-3 ".concat(t||""),children:[(0,r.jsx)(n.wTD,{size:55}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h3",{className:"_h3 font-extrabold mb-1.5",children:"Sorry"}),(0,r.jsx)("p",{className:"_body2",children:"We found nothing for you."})]})]})}},7737:function(e,s,a){"use strict";var r=a(5893),n=a(1664),c=a(8604);s.Z=function(e){var s=e.game,a=s.logo,l=s.name,i=s.id;return(0,r.jsx)("div",{className:"_product_wrapper",children:(0,r.jsx)(n.default,{href:"/topup/".concat(i),children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{src:(0,c.Lo)(a),className:"bg-gray-100 w-full h-auto object-cover",alt:l}),(0,r.jsx)("div",{className:"py-2 px-1",children:(0,r.jsx)("h6",{className:"_h6 text-center !text-sm",children:l})})]})})})}},9231:function(e,s,a){"use strict";var r=a(5893),n=a(1664),c=a(8604);s.Z=function(e){var s=e.title,a=e.product;return(0,r.jsx)("div",{className:"_product_wrapper",children:(0,r.jsx)(n.default,{href:"/product/".concat(a.id),children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{alt:s,src:(0,c.Lo)(a.image),className:"bg-gray-100 w-[60%] mx-auto h-auto object-cover"}),(0,r.jsxs)("div",{className:"py-2.5 px-3",children:[(0,r.jsx)("h6",{className:"_h6 font-semibold !text-sm line-clamp-2",children:s}),(0,r.jsxs)("p",{className:"_subtitle2 !text-primary-600 mt-1 font-semibold",children:["\u09f3 ",a.sale_price]})]})]})})})}},9184:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSP:function(){return f},default:function(){return v}});var r=a(5893),n=a(1911),c=a(2873),l=a(6495),i=(a(9231),a(7737)),t=a(8604),d=a(7294),o=a(155),m=a(8767),u=a(3513),x=a(4811),h=a(1367),p=a(4779);var j=function(){var e=(0,d.useState)(!1),s=e[0],a=e[1],n=(0,m.useQuery)("flat-notice",u.zy,h.Z).data;return(0,d.useEffect)((function(){var e=(0,p.Gg)(x.Dr)===(null===n||void 0===n?void 0:n.id);(0,t.Mg)(n)&&!e&&a(!0)}),[n]),s?(0,r.jsx)("div",{className:"container sm:mb-1 md:mb-0 mb-2 ",children:(0,r.jsx)("div",{className:"bg-[#9fc5bb] md:p-3 p-1",children:(0,r.jsxs)("div",{className:"flex _animate_slide_in",children:[(0,r.jsx)("div",{className:"rounded-md overflow-hidden mr-auto",children:(0,r.jsxs)("div",{className:"p-1",children:[(0,r.jsx)("b",{children:"Notice: "}),(null===n||void 0===n?void 0:n.notice)&&(0,r.jsx)("p",{className:"_subtitle1",children:null===n||void 0===n?void 0:n.notice})]})}),(0,r.jsx)("div",{onClick:function(){return e=null===n||void 0===n?void 0:n.id,(0,p.KY)(x.Dr,e),void a(!1);var e},className:"w-5 h-5 rounded-full",children:(0,r.jsx)(o.Lp2,{className:"w-full h-full"})})]})})}):null};var f=!0,v=function(e){var s=e.topup_products,a=(e.products,e.banners);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,t.Mg)(a)&&(0,r.jsx)("section",{className:"mb-6 md:my-8 home_slider_wrapper",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(c.t,{autoplay:{delay:3e3},loop:!0,modules:[n.W_,n.tl,n.pt],pagination:!0,navigation:!0,slidesPerView:1,children:a.map((function(e,s){return(0,r.jsx)(c.o,{children:(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:e.link,target:"#"===e.link?"_self":"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:(0,t.Lo)(e.banner),alt:e.note,className:"w-full h-auto object-cover"})})})},s)}))})})}),(0,r.jsxs)("section",{className:"container mt-5 mb-10",children:[(0,r.jsxs)("h3",{className:"_section_title text-center !capitalize !text-2xl md:!text-4xl !mb-8",children:["GAME ",(0,r.jsx)("span",{className:"text-primary-500",children:"TOP-UP"})]}),(0,r.jsx)(l.Z,{data:s,error:!s}),(0,r.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-6 md:justify-center mt-[40px] gap-3 md:gap-5 gap-y-6 md:gap-y-5",children:(0,t.Mg)(s)&&s.map((function(e,s){return(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{game:e})},s)}))})]})]})}}},function(e){e.O(0,[873,774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);