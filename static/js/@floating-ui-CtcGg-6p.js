const z=Math.min,V=Math.max,Q=Math.round,J=Math.floor,N=t=>({x:t,y:t}),Tt={left:"right",right:"left",bottom:"top",top:"bottom"},Lt={start:"end",end:"start"};function it(t,e,o){return V(t,z(e,o))}function U(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function K(t){return t.split("-")[1]}function pt(t){return t==="x"?"y":"x"}function rt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(W(t))?"y":"x"}function ct(t){return pt(et(t))}function St(t,e,o){o===void 0&&(o=!1);const n=K(t),i=ct(t),r=rt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Z(s)),[s,Z(s)]}function Pt(t){const e=Z(t);return[st(t),e,st(e)]}function st(t){return t.replace(/start|end/g,e=>Lt[e])}function Dt(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function kt(t,e,o,n){const i=K(t);let r=Dt(W(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(st)))),r}function Z(t){return t.replace(/left|right|bottom|top/g,e=>Tt[e])}function Ft(t){return{top:0,right:0,bottom:0,left:0,...t}}function ht(t){return typeof t!="number"?Ft(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ut(t,e,o){let{reference:n,floating:i}=t;const r=et(e),s=ct(e),c=rt(s),l=W(e),f=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,g=n[c]/2-i[c]/2;let a;switch(l){case"top":a={x:d,y:n.y-i.height};break;case"bottom":a={x:d,y:n.y+n.height};break;case"right":a={x:n.x+n.width,y:u};break;case"left":a={x:n.x-i.width,y:u};break;default:a={x:n.x,y:n.y}}switch(K(e)){case"start":a[s]-=g*(o&&f?-1:1);break;case"end":a[s]+=g*(o&&f?-1:1);break}return a}const Nt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=ut(f,n,l),g=n,a={},m=0;for(let p=0;p<c.length;p++){const{name:w,fn:h}=c[p],{x,y,data:b,reset:v}=await h({x:d,y:u,initialPlacement:n,placement:g,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&m<=50&&(m++,typeof v=="object"&&(v.placement&&(g=v.placement),v.rects&&(f=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=ut(f,g,l)),p=-1)}return{x:d,y:u,placement:g,strategy:i,middlewareData:a}};async function wt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:a=0}=U(e,t),m=ht(a),w=c[g?u==="floating"?"reference":"floating":u],h=tt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(w)))==null||o?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:l})),x=u==="floating"?{...s.floating,x:n,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=tt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(h.top-v.top+m.top)/b.y,bottom:(v.bottom-h.bottom+m.bottom)/b.y,left:(h.left-v.left+m.left)/b.x,right:(v.right-h.right+m.right)/b.x}}const Bt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:f,padding:d=0}=U(t,e)||{};if(f==null)return{};const u=ht(d),g={x:o,y:n},a=ct(i),m=rt(a),p=await s.getDimensions(f),w=a==="y",h=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[m]+r.reference[a]-g[a]-r.floating[m],v=g[a]-r.reference[a],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let T=E?E[y]:0;(!T||!await(s.isElement==null?void 0:s.isElement(E)))&&(T=c.floating[y]||r.floating[m]);const M=b/2-v/2,I=T/2-p[m]/2-1,j=z(u[h],I),X=z(u[x],I),O=j,Y=T-p[m]-X,A=T/2-p[m]/2+M,L=it(O,A,Y),S=!l.arrow&&K(i)!=null&&A!==L&&r.reference[m]/2-(A<O?j:X)-p[m]/2<0,D=S?A<O?A-O:A-Y:0;return{[a]:g[a]+D,data:{[a]:L,centerOffset:A-L-D,...S&&{alignmentOffset:D}},reset:S}}}),Mt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0,...w}=U(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const h=W(i),x=W(c)===c,y=await(l.isRTL==null?void 0:l.isRTL(f.floating)),b=g||(x||!p?[Z(c)]:Pt(c));!g&&m!=="none"&&b.push(...kt(c,p,m,y));const v=[c,...b],E=await wt(e,w),T=[];let M=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&T.push(E[h]),u){const O=St(i,s,y);T.push(E[O[0]],E[O[1]])}if(M=[...M,{placement:i,overflows:T}],!T.every(O=>O<=0)){var I,j;const O=(((I=r.flip)==null?void 0:I.index)||0)+1,Y=v[O];if(Y)return{data:{index:O,overflows:M},reset:{placement:Y}};let A=(j=M.filter(L=>L.overflows[0]<=0).sort((L,S)=>L.overflows[1]-S.overflows[1])[0])==null?void 0:j.placement;if(!A)switch(a){case"bestFit":{var X;const L=(X=M.map(S=>[S.placement,S.overflows.filter(D=>D>0).reduce((D,Et)=>D+Et,0)]).sort((S,D)=>S[1]-D[1])[0])==null?void 0:X[0];L&&(A=L);break}case"initialPlacement":A=c;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function Vt(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=W(o),c=K(o),l=et(o)==="y",f=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,u=U(e,t);let{mainAxis:g,crossAxis:a,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof m=="number"&&(a=c==="end"?m*-1:m),l?{x:a*d,y:g*f}:{x:g*f,y:a*d}}const oe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await Vt(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},Wt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:h,y:x}=w;return{x:h,y:x}}},...l}=U(t,e),f={x:o,y:n},d=await wt(e,l),u=et(W(i)),g=pt(u);let a=f[g],m=f[u];if(r){const w=g==="y"?"top":"left",h=g==="y"?"bottom":"right",x=a+d[w],y=a-d[h];a=it(x,a,y)}if(s){const w=u==="y"?"top":"left",h=u==="y"?"bottom":"right",x=m+d[w],y=m-d[h];m=it(x,m,y)}const p=c.fn({...e,[g]:a,[u]:m});return{...p,data:{x:p.x-o,y:p.y-n}}}}};function B(t){return xt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(xt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function xt(t){return t instanceof Node||t instanceof R(t).Node}function k(t){return t instanceof Element||t instanceof R(t).Element}function P(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function dt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function G(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Ht(t){return["table","td","th"].includes(B(t))}function lt(t){const e=ft(),o=C(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function $t(t){let e=_(t);for(;P(e)&&!nt(e);){if(lt(e))return e;e=_(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function nt(t){return["html","body","#document"].includes(B(t))}function C(t){return R(t).getComputedStyle(t)}function ot(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(B(t)==="html")return t;const e=t.assignedSlot||t.parentNode||dt(t)&&t.host||F(t);return dt(e)?e.host:e}function yt(t){const e=_(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:P(e)&&G(e)?e:yt(e)}function q(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=yt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=R(i);return r?e.concat(s,s.visualViewport||[],G(i)?i:[],s.frameElement&&o?q(s.frameElement):[]):e.concat(i,q(i,[],o))}function vt(t){const e=C(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=P(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=Q(o)!==r||Q(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function at(t){return k(t)?t:t.contextElement}function $(t){const e=at(t);if(!P(e))return N(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=vt(e);let s=(r?Q(o.width):o.width)/n,c=(r?Q(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const zt=N(0);function bt(t){const e=R(t);return!ft()||!e.visualViewport?zt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function _t(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==R(t)?!1:e}function H(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=at(t);let s=N(1);e&&(n?k(n)&&(s=$(n)):s=$(t));const c=_t(r,o,n)?bt(r):N(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const g=R(r),a=n&&k(n)?R(n):n;let m=g,p=m.frameElement;for(;p&&n&&a!==m;){const w=$(p),h=p.getBoundingClientRect(),x=C(p),y=h.left+(p.clientLeft+parseFloat(x.paddingLeft))*w.x,b=h.top+(p.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,f*=w.y,d*=w.x,u*=w.y,l+=y,f+=b,m=R(p),p=m.frameElement}}return tt({width:d,height:u,x:l,y:f})}const It=[":popover-open",":modal"];function At(t){return It.some(e=>{try{return t.matches(e)}catch{return!1}})}function jt(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=F(n),c=e?At(e.floating):!1;if(n===s||c&&r)return o;let l={scrollLeft:0,scrollTop:0},f=N(1);const d=N(0),u=P(n);if((u||!u&&!r)&&((B(n)!=="body"||G(s))&&(l=ot(n)),P(n))){const g=H(n);f=$(n),d.x=g.x+n.clientLeft,d.y=g.y+n.clientTop}return{width:o.width*f.x,height:o.height*f.y,x:o.x*f.x-l.scrollLeft*f.x+d.x,y:o.y*f.y-l.scrollTop*f.y+d.y}}function Xt(t){return Array.from(t.getClientRects())}function Rt(t){return H(F(t)).left+ot(t).scrollLeft}function Yt(t){const e=F(t),o=ot(t),n=t.ownerDocument.body,i=V(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=V(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Rt(t);const c=-o.scrollTop;return C(n).direction==="rtl"&&(s+=V(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function qt(t,e){const o=R(t),n=F(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=ft();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function Ut(t,e){const o=H(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=P(t)?$(t):N(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=n*r.y;return{width:s,height:c,x:l,y:f}}function mt(t,e,o){let n;if(e==="viewport")n=qt(t,o);else if(e==="document")n=Yt(F(t));else if(k(e))n=Ut(e,o);else{const i=bt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return tt(n)}function Ot(t,e){const o=_(t);return o===e||!k(o)||nt(o)?!1:C(o).position==="fixed"||Ot(o,e)}function Kt(t,e){const o=e.get(t);if(o)return o;let n=q(t,[],!1).filter(c=>k(c)&&B(c)!=="body"),i=null;const r=C(t).position==="fixed";let s=r?_(t):t;for(;k(s)&&!nt(s);){const c=C(s),l=lt(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(s)&&!l&&Ot(t,s))?n=n.filter(d=>d!==s):i=c,s=_(s)}return e.set(t,n),n}function Gt(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?Kt(e,this._c):[].concat(o),n],c=s[0],l=s.reduce((f,d)=>{const u=mt(e,d,i);return f.top=V(u.top,f.top),f.right=z(u.right,f.right),f.bottom=z(u.bottom,f.bottom),f.left=V(u.left,f.left),f},mt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Jt(t){const{width:e,height:o}=vt(t);return{width:e,height:o}}function Qt(t,e,o){const n=P(e),i=F(e),r=o==="fixed",s=H(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=N(0);if(n||!n&&!r)if((B(e)!=="body"||G(i))&&(c=ot(e)),n){const u=H(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=Rt(i));const f=s.left+c.scrollLeft-l.x,d=s.top+c.scrollTop-l.y;return{x:f,y:d,width:s.width,height:s.height}}function gt(t,e){return!P(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ct(t,e){const o=R(t);if(!P(t)||At(t))return o;let n=gt(t,e);for(;n&&Ht(n)&&C(n).position==="static";)n=gt(n,e);return n&&(B(n)==="html"||B(n)==="body"&&C(n).position==="static"&&!lt(n))?o:n||$t(t)||o}const Zt=async function(t){const e=this.getOffsetParent||Ct,o=this.getDimensions;return{reference:Qt(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await o(t.floating)}}};function te(t){return C(t).direction==="rtl"}const ee={convertOffsetParentRelativeRectToViewportRelativeRect:jt,getDocumentElement:F,getClippingRect:Gt,getOffsetParent:Ct,getElementRects:Zt,getClientRects:Xt,getDimensions:Jt,getScale:$,isElement:k,isRTL:te};function ne(t,e){let o=null,n;const i=F(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:d,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const a=J(d),m=J(i.clientWidth-(f+u)),p=J(i.clientHeight-(d+g)),w=J(f),x={rootMargin:-a+"px "+-m+"px "+-p+"px "+-w+"px",threshold:V(0,z(1,l))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==l){if(!y)return s();E?s(!1,E):n=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{o=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(b,x)}o.observe(t)}return s(!0),r}function ie(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,f=at(t),d=i||r?[...f?q(f):[],...q(e)]:[];d.forEach(h=>{i&&h.addEventListener("scroll",o,{passive:!0}),r&&h.addEventListener("resize",o)});const u=f&&c?ne(f,o):null;let g=-1,a=null;s&&(a=new ResizeObserver(h=>{let[x]=h;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),o()}),f&&!l&&a.observe(f),a.observe(e));let m,p=l?H(t):null;l&&w();function w(){const h=H(t);p&&(h.x!==p.x||h.y!==p.y||h.width!==p.width||h.height!==p.height)&&o(),p=h,m=requestAnimationFrame(w)}return o(),()=>{var h;d.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),u==null||u(),(h=a)==null||h.disconnect(),a=null,l&&cancelAnimationFrame(m)}}const se=Wt,re=Mt,ce=Bt,le=(t,e,o)=>{const n=new Map,i={platform:ee,...o},r={...i.platform,_c:n};return Nt(t,e,{...i,platform:r})};export{ce as a,ie as b,le as c,wt as d,re as f,oe as o,se as s};
