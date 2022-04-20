var nt=Object.defineProperty;var D=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var U=(t,e,n)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))ot.call(e,n)&&U(t,n,e[n]);if(D)for(var n of D(e))it.call(e,n)&&U(t,n,e[n]);return t};import{i as H,t as z,b as at,s as B,c as st,d as rt,a as ct}from"./index.9b0095cc.js";import{V as w}from"./vueComponentNormalizer.87056a83.js";import{c as F,M as R,a as o}from"./index.a8d44ca5.js";import{a as p,i as m,b as T,c as S,d as A}from"./context.75d18064.js";var lt=/\s/;function ut(t){for(var e=t.length;e--&&lt.test(t.charAt(e)););return e}var dt=/^\s+/;function pt(t){return t&&t.slice(0,ut(t)+1).replace(dt,"")}function mt(t,e,n,i){for(var a=t.length,s=n+(i?1:-1);i?s--:++s<a;)if(e(t[s],s,t))return s;return-1}function gt(t){return t!==t}function ft(t,e,n){for(var i=n-1,a=t.length;++i<a;)if(t[i]===e)return i;return-1}function G(t,e,n){return e===e?ft(t,e,n):mt(t,gt,n)}var wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yt=/^\w*$/;function vt(t,e){if(F(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||H(t)?!0:yt.test(t)||!wt.test(t)||e!=null&&t in Object(e)}var ht="Expected a function";function q(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(ht);var n=function(){var i=arguments,a=e?e.apply(this,i):i[0],s=n.cache;if(s.has(a))return s.get(a);var c=t.apply(this,i);return n.cache=s.set(a,c)||s,c};return n.cache=new(q.Cache||R),n}q.Cache=R;var Et=500;function Tt(t){var e=q(t,function(i){return n.size===Et&&n.clear(),i}),n=e.cache;return e}var Pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xt=/\\(\\)?/g,St=Tt(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Pt,function(n,i,a,s){e.push(a?s.replace(xt,"$1"):i||n)}),e}),At=St;function Ct(t,e){return F(t)?t:vt(t,e)?[t]:At(z(t))}var kt=1/0;function _t(t){if(typeof t=="string"||H(t))return t;var e=t+"";return e=="0"&&1/t==-kt?"-0":e}function It(t,e){e=Ct(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[_t(e[n++])];return n&&n==i?t:void 0}function g(t,e,n){var i=t==null?void 0:It(t,e);return i===void 0?n:i}function $t(t,e){for(var n=t.length;n--&&G(e,t[n],0)>-1;);return n}function Mt(t,e){for(var n=-1,i=t.length;++n<i&&G(e,t[n],0)>-1;);return n}function bt(t,e,n){if(t=z(t),t&&(n||e===void 0))return pt(t);if(!t||!(e=at(e)))return t;var i=B(t),a=B(e),s=Mt(i,a),c=$t(i,a)+1;return st(i,s,c).join("")}const M=()=>{if(!window.aioseo.currentPost||!window.aioseo.currentPost.postType)return"";const t=window.aioseo.currentPost.postType,e=window.aioseo.dynamicOptions.searchAppearance.postTypes[t].customFields;if(!e||!ne)return"";const n=()=>{$(2e3)},i=e.replace(/\n/g," ").split(" "),a=[],s=["INPUT","TEXTAREA","IMG"];i.forEach(r=>{const l=document.querySelector(`#${r}`),I=document.querySelectorAll("#the-list > tr"),O=document.querySelectorAll(".acf-field");l&&s.indexOf(l.tagName)!==-1?l.closest(".acf-field")||a.push(l):I.length&&I.forEach(u=>{const f=u.querySelector(`#${u.id}-key`),P=u.querySelector(`#${u.id}-value`);P&&s.indexOf(P.tagName)!==-1&&i.indexOf(f.value)!==-1&&a.push(P)}),O.length&&O.forEach(u=>{if(r!==u.dataset.name)return"";let f=u.querySelector(`[id^="acf"][name$="[${u.dataset.key}]"]`);if(u.dataset.type==="image"&&(f=u.querySelector(".has-value img")),u.dataset.type==="gallery"&&(f=u.querySelector(".acf-gallery-attachment img")),!f||f.type&&f.type==="hidden")return"";if(u.dataset.type==="wysiwyg"){const P=window.setInterval(()=>{window.tinyMCE&&window.tinyMCE.activeEditor&&(window.clearInterval(P),window.tinyMCE.activeEditor.on("keyup",function(){!window.tinyMCE.activeEditor.acf||$(2e3)}))},50),K=function(tt){tt.forEach(et=>{if(et.attributeName==="class"){u.querySelector(".wp-editor-wrap.tmce-active")&&window.tinyMCE&&window.tinyMCE.activeEditor&&window.tinyMCE.activeEditor.on("keyup",function(){$(2e3)});const N=u.querySelector(`[name="acf[${u.dataset.key}]"]`);N&&N.addEventListener("keyup",()=>{$(2e3)})}})},Q=new MutationObserver(K),L=u.querySelector(".wp-editor-wrap");L&&Q.observe(L,{attributes:!0})}s.indexOf(f.tagName)!==-1&&a.push(f)})});let c="";return a.length&&a.forEach(r=>{let l="";if(r.tagName&&s.indexOf(r.tagName)!==-1&&r.addEventListener("keyup",n),r.value&&(l=r.value),r.tagName==="IMG"&&r.src){const I=r.alt?`alt="${r.alt}"`:"";l=`<img src="${r.src}" ${I}>`}r.value&&r.type&&r.type==="url"&&(l=`<a href="${l}">${l}</a>`),l&&(c+=`${l} `)}),c},ce=t=>{if(!t)return"";const e=document.querySelector(`#${t}`),n=document.querySelectorAll("#the-list > tr"),i=document.querySelectorAll(".acf-field"),a=["INPUT","TEXTAREA","IMG"];let s="";return e&&a.indexOf(e.tagName)!==-1&&(e.closest(".acf-field")||(s=e.tagName==="IMG"?e.getAttribute("src"):e.value)),n.length&&n.forEach(c=>{const r=c.querySelector(`#${c.id}-key`),l=c.querySelector(`#${c.id}-value`);l&&a.indexOf(l.tagName)!==-1&&r.value===t&&(s=l.tagName==="IMG"?l.getAttribute("src"):l.value)}),i.length&&i.forEach(c=>{if(t!==c.dataset.name)return;const r=c.querySelector(`[data-key="${c.dataset.key}"] img`);s=r.tagName==="IMG"?r.getAttribute("src"):r.value}),s};function x(t){return t?bt(rt(t).replace(/[\s./]+/g,"-").replace(/[^\w-]+/g,"").toLowerCase(),"-"):""}const qt=()=>{const t=window.elementor.documents.getCurrent(),e=[];return t.$element?(t.$element.find(".elementor-widget-container").each((n,i)=>{let a=i.innerHTML.trim();a=a.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),e.push(a)}),e.join(" ")):""},C=()=>({content:qt(),title:window.elementor.settings.page.model.get("post_title"),excerpt:window.elementor.settings.page.model.get("post_excerpt")||"",slug:x(window.elementor.settings.page.model.get("post_title")),permalink:window.elementor.config.document.urls.permalink||""}),Ot=()=>{const t=g(ET_Builder,"Frames.app.frameElement",document.querySelector("iframe#et-fb-app-frame"));if(!t)return document.createElement("div");const e=t.contentWindow.document.querySelector("#et-fb-app");return 1>e.length?document.createElement("div"):e},Lt=()=>{const t=[],e=Ot().querySelectorAll(".et_pb_section"),n=new RegExp(["<style.*?</style>","\\[object Object\\]"].join("|"),"gi");for(let i=0;i<e.length;i++){let a=e[i].innerHTML;a=e[i].innerHTML.replace(n,""),a=a.replaceAll(/<p.*>(<img.*>)<\/p>/g,"$1"),t.push(a)}return t.join(" ")},Nt=()=>{const t=new URL(g(ETBuilderBackendDynamic,"currentPage.permalink",""));return t.searchParams.delete("PageSpeed"),t.href},k=()=>({content:Lt(),title:g(ETBuilderBackendDynamic,"postTitle",""),excerpt:g(ETBuilderBackendDynamic,"postMeta.post_excerpt",""),slug:g(ETBuilderBackendDynamic,"postMeta.post_name",""),permalink:Nt()}),Dt=t=>{let e;switch(t.type){case"header":e=document.createElement(t.settings.tag),e.innerHTML=t.settings.headerTxt.trim();break;case"image":const n=document.createElement("img");t.settings.altTxt&&n.setAttribute("alt",t.settings.altTxt),t.settings.src&&n.setAttribute("src",t.settings.src),t.settings.noFollow&&n.setAttribute("rel","nofollow"),e=n,t.settings.link&&(e=document.createElement("a"),e.setAttribute("href",t.settings.link),e.innerHTML=n.outerHTML,t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank"));break;case"video":t.settings.type==="youtube"?(e=document.createElement("iframe"),e.setAttribute("src",t.settings.youtubeUrl)):(e=document.createElement("div"),e.innerHTML=t.settings.code);break;case"text":e=document.createElement("div"),e.innerHTML=t.settings.txt.trim();break;case"button":e=document.createElement("a"),e.appendChild(document.createTextNode(t.settings.btnTxt+" "+t.settings.btnSubTxt)),t.settings.link&&e.setAttribute("href",t.settings.link),t.settings.altTxt&&e.setAttribute("alt",t.settings.altTxt),t.settings.src&&e.setAttribute("src",t.settings.src),t.settings.noFollow&&e.setAttribute("rel","nofollow"),t.settings.openNewWindow&&e.setAttribute("target","_blank");break;case"bullet-list":e=document.createElement("ul"),t.settings.items.forEach(i=>{const a=document.createElement("li");a.innerHTML=i.txt,e.appendChild(a)});break;case"custom-html":e=document.createElement("div"),e.innerHTML=t.settings.code;break}return e},Ut=()=>{const t=[];return JSON.parse(JSON.stringify(g(seedprod_data,"settings.document.sections",[]))).forEach(n=>{n.rows.forEach(i=>{i.cols.forEach(a=>{a.blocks.forEach(s=>{const c=Dt(s);c&&t.push(c.outerHTML)})})})}),t.join(" ")},Bt=()=>{const t=g(seedprod_data,"home_url",""),e=g(seedprod_data,"settings.post_name","");return`${t}/${e}/`},_=()=>({content:Ut(),title:g(seedprod_data,"settings.post_title",""),excerpt:"",slug:g(seedprod_data,"settings.post_name",""),permalink:Bt()}),W=()=>{let t="";return T()&&(t=C().permalink),S()&&(t=k().permalink),A()&&(t=_().permalink),t},Ht=()=>{if(o.state["live-tags"].liveTags.permalink)return o.state["live-tags"].liveTags.permalink;let t;if(p()){const e=document.querySelector("#editable-post-name");e&&e.parentElement.href&&(t=e.parentElement.href)}return m()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=W()),t&&o.commit("live-tags/updatePermalink",t),t},h=()=>{let t;if(p()){const e=document.querySelector("#editable-post-name");e&&e.parentElement.href&&(t=e.parentElement.href)}return m()&&(t=window.wp.data.select("core/editor").getPermalink()),t||(t=W()),t},zt=async(t=!0)=>{let e=Ht();const n=h();e!==n&&(e=n,e&&(o.commit("live-tags/updatePermalink",e),t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id,postData:v({},o.state.currentPost),content:E(),slug:h()})))},j=/base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/g,Z=()=>{let t="";return T()&&(t=C().content),S()&&(t=k().content),A()&&(t=_().content),t},Ft=()=>{if(o.state["live-tags"].liveTags.post_content)return o.state["live-tags"].liveTags.post_content;let t="";if(p())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=b();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=b())},50)}return m()&&(t=window.wp.data.select("core/editor").getCurrentPost().content),t||(t=Z()),M()&&(t=t+M()),t=t.replace(j,""),t&&o.commit("live-tags/updatePostContent",t),t},E=()=>{let t="";if(p())if(window.tinyMCE||document.querySelector("#wp-content-wrap.html-active"))t=b();else{const e=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(e),t=b())},50)}return m()&&(t=window.wp.data.select("core/editor").getEditedPostContent()),t||(t=Z()),M()&&(t=t+M()),t=t.replace(j,""),t},Rt=async(t=!0)=>{let e=Ft();const n=E();e!==n&&(e=n,o.commit("live-tags/updatePostContent",e),t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id,postData:v({},o.state.currentPost),content:E(),slug:h()}))},b=()=>{let t="";const e=window.tinyMCE?window.tinyMCE.get("content"):"";if(document.querySelector("#wp-content-wrap.tmce-active")&&e)t=e.getContent({format:"raw"});else{const n=document.querySelector("textarea#content");t=n?n.value:""}return t},V=()=>{let t="";return T()&&(t=C().title),S()&&(t=k().title),A()&&(t=_().title),t},Gt=()=>{if(o.state["live-tags"].liveTags.post_title)return o.state["live-tags"].liveTags.post_title;let t;if(p()){const e=document.querySelector("#post input#title");t=e?e.value:""}return m()&&(t=window.wp.data.select("core/editor").getCurrentPost().title),t||(t=V()),t&&o.commit("live-tags/updatePostTitle",t),t},Wt=()=>{let t;if(p()){const e=document.querySelector("#post input#title");t=e?e.value:""}return m()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("title")),t||(t=V()),t},jt=async(t=!0)=>{let e=Gt();const n=Wt();e!==n&&(e=n,o.commit("live-tags/updatePostTitle",e),t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id,postData:v({},o.state.currentPost),content:E(),slug:h()}))},X=()=>{let t="";return T()&&(t=C().excerpt),S()&&(t=k().excerpt),A()&&(t=_().excerpt),t},Zt=()=>{if(o.state["live-tags"].liveTags.post_excerpt)return o.state["live-tags"].liveTags.post_excerpt;let t;if(p()){const e=document.querySelector("#postexcerpt textarea#excerpt");t=e?e.value:""}return m()&&(t=window.wp.data.select("core/editor").getCurrentPost().excerpt),t||(t=X()),t&&o.commit("live-tags/updatePostExcerpt",t),t},Vt=()=>{let t;if(p()){const e=document.querySelector("#postexcerpt textarea#excerpt");t=e?e.value:""}return m()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("excerpt")),t||(t=X()),t},Xt=async(t=!0)=>{let e=Zt();const n=Vt();e!==n&&(e=n,o.commit("live-tags/updatePostExcerpt",e),t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id,postData:v({},o.state.currentPost),content:E(),slug:h()}))},J=()=>{let t="";return T()&&(t=C().slug),S()&&(t=k().slug),A()&&(t=_().slug),t},Jt=()=>{if(o.state["live-tags"].permalinkSlug)return o.state["live-tags"].permalinkSlug;let t="";if(p()){const e=document.querySelector("#post_name");e&&(t=x(e.value))}return m()&&(t=window.wp.data.select("core/editor").getCurrentPost().slug),t||(t=J()),t&&o.commit("live-tags/updatePermalinkSlug",t),t},Yt=()=>{let t="";if(p()){const e=document.querySelector("#post_name");e&&(t=x(e.value))}if(m()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("slug")),T()){const e=window.elementor.settings.page.model.get("post_title");e&&(t=x(e))}return t||(t=J()),t},Kt=async(t=!0)=>{let e=Jt();const n=Yt();e!==n&&(e=n,o.commit("live-tags/updatePermalinkSlug",e),t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id,postData:v({},o.state.currentPost),content:E(),slug:h()}))};let d="",y="";const Qt=(t=!0)=>{if(p()){const e=document.querySelectorAll('#post input[name="post_category[]"]:checked');e.length?(d!==e[0].parentNode.innerText&&(d=e[0].parentNode.innerText,o.commit("live-tags/updateTaxonomyTitle",d)),y=Array.from(e).map(n=>n.parentNode.innerText).join(", "),o.commit("live-tags/updateCategories",y)):d!==""&&(d=y="",o.commit("live-tags/updateTaxonomyTitle",d),o.commit("live-tags/updateCategories",y))}if(m()){const e=window.wp.data.select("core").getEntityRecords("taxonomy","category"),n=window.wp.data.select("core/editor").getEditedPostAttribute("categories");if(n&&n.length&&e){const i=e.find(a=>a.id===n[0]);i&&d!==i.name&&(d=i.name,o.commit("live-tags/updateTaxonomyTitle",d)),y=e.filter(a=>n.includes(a.id)).map(a=>a.name).join(", "),o.commit("live-tags/updateCategories",y)}else d!==""&&(d=y="",o.commit("live-tags/updateTaxonomyTitle",d),o.commit("live-tags/updateCategories",y))}t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id})},te=(t=!1)=>{if(o.state.currentPost.context!=="term")return;const e=document.querySelector("#edittag input#name");e&&(o.commit("live-tags/updateTaxonomyTitle",e.value),e.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyTitle",e.value)}));const n=document.querySelector("#edittag textarea#description");n&&(o.commit("live-tags/updateTaxonomyDescription",n.value),n.addEventListener("input",()=>{o.commit("live-tags/updateTaxonomyDescription",n.value)}));const i=document.querySelector("#edittag input#slug");if(i){const a=x(i.value);o.commit("live-tags/updatePermalinkSlug",a),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${a.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`)),i.addEventListener("input",()=>{o.commit("live-tags/updatePermalinkSlug",a),o.commit("live-tags/updatePermalink",o.state.currentPost.permalink.replace(`/${o.state["live-tags"].permalinkSlug}`,`/${a.replace(/ /gi,"-").replace(/[^a-z0-9-]/gi,"").toLowerCase()}`))})}o.dispatch("savePostState"),t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id})},ee=(t=!1)=>{if(o.state.currentPost.postType!=="attachment")return;const e=document.querySelector("textarea#attachment_caption");e&&(o.commit("live-tags/updateAttachmentCaption",e.value),e.addEventListener("input",s=>{o.commit("live-tags/updateAttachmentCaption",s.target.value)}));const n=document.querySelector("textarea#attachment-details-caption");n&&(o.commit("live-tags/updateAttachmentCaption",n.value),n.addEventListener("input",s=>{o.commit("live-tags/updateAttachmentCaption",s.target.value)}));const i=document.querySelector("input#attachment_alt");i&&(o.commit("live-tags/updateAltTag",i.value),i.addEventListener("input",s=>{o.commit("live-tags/updateAltTag",s.target.value)}));const a=document.querySelector("input#attachment-details-alt-text");a&&(o.commit("live-tags/updateAltTag",i.value),a.addEventListener("input",s=>{o.commit("live-tags/updateAltTag",s.target.value)})),t&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id})},ne=()=>!window.aioseo.currentPost||!window.aioseo.currentPost.id?!1:window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&!window.aioseo.currentPost.isSpecialPage&&window.aioseo.currentPost.postType!=="attachment"&&Y(),le=()=>!window.aioseo.screen||!window.aioseo.screen.postType?!1:!!(window.aioseo.options.advanced&&window.aioseo.options.advanced.truSeo&&Y(window.aioseo.screen.postType)),Y=(t=null)=>{if(t)return!!(window.aioseo.dynamicOptions.searchAppearance.postTypes[t]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[t].advanced.showMetaBox);if(!window.aioseo.currentPost||!window.aioseo.currentPost.id)return!1;const e=window.aioseo.currentPost.postType,n=window.aioseo.currentPost.termType,i=!!(e&&window.aioseo.currentPost.context==="post"&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e]&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced&&window.aioseo.dynamicOptions.searchAppearance.postTypes[e].advanced.showMetaBox),a=!!(n&&window.aioseo.currentPost.context==="term"&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n]&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced&&window.aioseo.dynamicOptions.searchAppearance.taxonomies[n].advanced.showMetaBox);return i||a},$=async(t=900,e=!0)=>{ct(async()=>{await jt(!1),await Rt(!1),await Xt(!1),await Kt(!1),await zt(!1),Qt(!1),te(!1),ee(!1),e&&w.prototype.$truSEO.runAnalysis({postId:o.state.currentPost.id})},t)};export{le as a,pt as b,G as c,Ct as d,g as e,It as f,Yt as g,mt as h,vt as i,x as j,E as k,h as l,q as m,Wt as n,ne as o,$ as p,Qt as q,te as r,Y as s,_t as t,ee as u,ce as v,k as w,C as x};