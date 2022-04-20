var $=Object.defineProperty,x=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var _=(t,a,e)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,n=(t,a)=>{for(var e in a||(a={}))P.call(a,e)&&_(t,e,a[e]);if(g)for(var e of g(a))C.call(a,e)&&_(t,e,a[e]);return t},r=(t,a)=>x(t,k(a));import{d as o,j as l,f as y}from"./index.a8d44ca5.js";import{B as u}from"./RadioToggle.98e1e7ec.js";import{C as L}from"./Blur.8490ecd2.js";import{C as S}from"./HtmlTagsEditor.4e112633.js";import{C as c}from"./SettingsRow.eb71f07b.js";import{n as i}from"./vueComponentNormalizer.87056a83.js";import{C as d}from"./Index.1acf3545.js";import{C as p}from"./Index.c3eb88e6.js";import{A as O,T as F}from"./TitleDescription.ae5c352b.js";import{C as E}from"./Card.40fd6ded.js";import{C as w}from"./Tabs.6bae0a8a.js";import{C as I,S as R}from"./Schema.01946f2d.js";import{A as U}from"./ToolsSettings.83ed8357.js";import"./Editor.587e3e29.js";import"./client.93f15631.js";import"./index.9b0095cc.js";import"./UnfilteredHtml.82b91700.js";import"./Row.13b6f3f1.js";import"./JsonValues.08065e69.js";import"./MaxCounts.3eed5286.js";import"./RobotsMeta.2bc11dc9.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./GoogleSearchPreview.a0ed0bbb.js";import"./Tooltip.674a9fb4.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.a520926e.js";import"./Information.f4b75b56.js";import"./Textarea.d161fc2e.js";var M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("core-blur",[e("core-settings-row",{attrs:{name:t.strings.titleAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","default-tags":["image_title","separator_sa","site_title","alt_tag"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesTitleTag)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationTitleAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{value:!1,name:"stripTitlePunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.altTagAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","default-tags":["image_title","separator_sa","site_title","alt_tag"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesAltTag)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationForAltAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{value:!1,name:"stripAltPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}])})],1)},G=[];const B={components:{BaseRadioToggle:u,CoreBlur:L,CoreHtmlTagsEditor:S,CoreSettingsRow:c},data(){return{strings:{titleAttributeFormat:"Title Attribute Format",stripPunctuationTitleAttribute:"Strip Punctuation for Title Attributes",clickToAddVariablesTitleTag:"Click on the tags below to insert variables into your title attribute.",altTagAttributeFormat:"Alt Tag Attribute Format",clickToAddVariablesAltTag:"Click on the tags below to insert variables into your alt tag attribute.",stripPunctuationForAltAttribute:"Strip Punctuation for Alt Attributes"}}}},f={};var D=i(B,M,G,!1,V,null,null,null);function V(t){for(let a in f)this[a]=f[a]}var m=function(){return D.exports}(),N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-image-seo"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":[t.strings.setTitleAttributes,t.strings.setAltTagAttributes,t.strings.stripPunctuationTitles,t.strings.stripPunctuationAltTags]},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.imageSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},j=[];const q={components:{Blur:m,CoreAlert:d,Cta:p},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:"Enable Advanced SEO for Images on your Site",ctaDescription:"The Image SEO module is a premium feature that enables you to globally control the Title Attribute and Alt Text for attachment pages and images that are embedded in your content. These can be set based on a specified format, similar to the Title Format settings in the Global Settings menu.",ctaButtonText:"Activate Image SEO",learnMoreText:"Learn more about Image SEO",setTitleAttributes:"Set title attributes",setAltTagAttributes:"Set alt tag attributes",stripPunctuationTitles:"Strip punctuation for titles",stripPunctuationAltTags:"Strip punctuation for alt tags",activateError:"An error occurred while activating the addon. Please upload it manually or contact support for more information.",permissionWarning:"You currently don't have permission to activate this addon. Please ask a site administrator to activate first."}}},computed:n({},o(["tags"])),methods:r(n(n({},l(["installPlugins","getTags"])),y(["updateAddon"])),{activateAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-image-seo");this.installPlugins([{plugin:t.basename}]).then(a=>{if(a.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}})},b={};var H=i(q,N,j,!1,W,null,null,null);function W(t){for(let a in b)this[a]=b[a]}var Y=function(){return H.exports}(),z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("core-settings-row",{attrs:{name:t.strings.titleAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":"imageSeoTitle","default-tags":["image_title","separator_sa","site_title"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesTitleTag)+" ")]},proxy:!0}]),model:{value:t.options.image.format.title,callback:function(s){t.$set(t.options.image.format,"title",s)},expression:"options.image.format.title"}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationTitleAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripTitlePunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.image.stripPunctuation.title,callback:function(s){t.$set(t.options.image.stripPunctuation,"title",s)},expression:"options.image.stripPunctuation.title"}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.altTagAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":"imageSeoAlt","default-tags":["alt_tag","separator_sa","site_title"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesAltTag)+" ")]},proxy:!0}]),model:{value:t.options.image.format.altTag,callback:function(s){t.$set(t.options.image.format,"altTag",s)},expression:"options.image.format.altTag"}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationForAltAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripAltPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.image.stripPunctuation.altTag,callback:function(s){t.$set(t.options.image.stripPunctuation,"altTag",s)},expression:"options.image.stripPunctuation.altTag"}})]},proxy:!0}])})],1)},J=[];const K={components:{BaseRadioToggle:u,CoreHtmlTagsEditor:S,CoreSettingsRow:c},data(){return{strings:{titleAttributeFormat:"Title Attribute Format",stripPunctuationTitleAttribute:"Strip Punctuation for Title Attributes",clickToAddVariablesTitleTag:"Click on the tags below to insert variables into your title attribute.",altTagAttributeFormat:"Alt Tag Attribute Format",clickToAddVariablesAltTag:"Click on the tags below to insert variables into your alt tag attribute.",stripPunctuationForAltAttribute:"Strip Punctuation for Alt Attributes"}}},computed:n({},o(["options"]))},h={};var Q=i(K,z,J,!1,X,null,null,null);function X(t){for(let a in h)this[a]=h[a]}var Z=function(){return Q.exports}(),tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":[t.strings.setTitleAttributes,t.strings.setAltTagAttributes,t.strings.stripPunctuationTitles,t.strings.stripPunctuationAltTags]},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.$addons.requiresUpgrade("aioseo-image-seo")&&t.$addons.currentPlans("aioseo-image-seo")?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.thisFeatureRequires)+" "),e("strong",[t._v(t._s(t.$addons.currentPlans("aioseo-image-seo")))])]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},et=[];const at={components:{Blur:m,CoreAlert:d,Cta:p},data(){return{strings:{titleAttributeFormat:"Title Attribute Format",thisFeatureRequires:"This feature requires one of the following plans:",ctaDescription:"The Image SEO module is a premium feature that enables you to globally control the Title Attribute and Alt Text for attachment pages and images that are embedded in your content. These can be set based on a specified format, similar to the Title Format settings in the Global Settings menu.",ctaButtonText:"Upgrade to Pro and Unlock Image SEO",ctaHeader:this.$t.sprintf("Image SEO is only available for licensed %1$s %2$s users.","AIOSEO","Pro"),setTitleAttributes:"Set title attributes",setAltTagAttributes:"Set alt tag attributes",stripPunctuationTitles:"Strip punctuation for titles",stripPunctuationAltTags:"Strip punctuation for alt tags"}}}},v={};var st=i(at,tt,et,!1,nt,null,null,null);function nt(t){for(let a in v)this[a]=v[a]}var it=function(){return st.exports}(),rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanUpdate("aioseo-image-seo"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":[t.strings.setTitleAttributes,t.strings.setAltTagAttributes,t.strings.stripPunctuationTitles,t.strings.stripPunctuationAltTags]},on:{"cta-button-click":t.upgradeAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.imageSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("core-alert",{attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.updateRequired)+" ")]),t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},ot=[];const lt={components:{Blur:m,CoreAlert:d,Cta:p},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:"Enable Advanced SEO for Images on your Site",ctaDescription:"The Image SEO module is a premium feature that enables you to globally control the Title Attribute and Alt Text for attachment pages and images that are embedded in your content. These can be set based on a specified format, similar to the Title Format settings in the Global Settings menu.",ctaButtonText:"Update Image SEO",learnMoreText:"Learn more about Image SEO",setTitleAttributes:"Set title attributes",setAltTagAttributes:"Set alt tag attributes",stripPunctuationTitles:"Strip punctuation for titles",stripPunctuationAltTags:"Strip punctuation for alt tags",activateError:"An error occurred while activating the addon. Please upload it manually or contact support for more information.",permissionWarning:"You currently don't have permission to update this addon. Please ask a site administrator to update.",updateRequired:this.$t.sprintf("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.","AIOSEO","Pro",this.$addons.getAddon("aioseo-image-seo").minimumVersion,"Image SEO",this.$addons.getAddon("aioseo-image-seo").installedVersion)}}},computed:n({},o(["tags"])),methods:r(n(n({},l(["upgradePlugins","getTags"])),y(["updateAddon"])),{upgradeAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-image-seo");this.upgradePlugins([{plugin:t.sku}]).then(a=>{if(a.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{const e=a.body.completed[t.sku];this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,t.installedVersion=e.installedVersion,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}})},A={};var ut=i(lt,rt,ot,!1,ct,null,null,null);function ct(t){for(let a in A)this[a]=A[a]}var dt=function(){return ut.exports}(),pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-search-appearance-content-types"},[e("core-card",{attrs:{slug:t.postType.name+"SA"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:""+(t.postType.icon||"dashicons-admin-post")}),e("div",{domProps:{innerHTML:t._s(t.postType.label)}})]},proxy:!0},{key:"before-tabs",fn:function(){return[e("core-settings-row",{attrs:{name:t.strings.redirectAttachmentUrls,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},model:{value:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,callback:function(s){t.$set(t.dynamicOptions.searchAppearance.postTypes.attachment,"redirectAttachmentUrls",s)},expression:"dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.attachmentUrlsDescription)+" ")])]},proxy:!0}])})]},proxy:!0},t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[t.postType.name+"SA"],internal:""},on:{changed:function(s){return t.processChangeTab(t.postType.name,s)}}})]},proxy:!0}:null],null,!0)},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[t.postType.name+"SA"],{tag:"component",attrs:{object:t.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[t.postType.name],type:"postTypes"}})],1):t._e()],1),e("core-card",{attrs:{slug:"imageSeo","header-text":t.strings.imageSeo,noSlide:!t.shouldShowMain}},[t.shouldShowMain?e("image-seo"):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)],1)},mt=[];const gt={mixins:[U],components:{Activate:Y,Advanced:O,BaseRadioToggle:u,CoreCard:E,CoreMainTabs:w,CoreSettingsRow:c,CustomFields:I,ImageSeo:Z,Lite:it,Schema:R,TitleDescription:F,Update:dt},data(){return{addonSlug:"aioseo-image-seo",internalDebounce:!1,strings:{redirectAttachmentUrls:"Redirect Attachment URLs",attachment:"Attachment",attachmentParent:"Attachment Parent",attachmentUrlsDescription:"We recommended redirecting attachment URL's back to the attachment since the default WordPress attachment pages have little SEO value.",imageSeo:"Image SEO"},tabs:[{slug:"title-description",name:"Title & Description",access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:"Schema Markup",access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:"Advanced",access:"aioseo_search_appearance_settings",pro:!1}]}},computed:r(n({},o(["options","dynamicOptions","settings"])),{postType(){return this.$aioseo.postData.postTypes.filter(t=>t.name==="attachment")[0]}}),methods:r(n({},l(["changeTab"])),{processChangeTab(t,a){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:a}),setTimeout(()=>{this.internalDebounce=!1},50))}})},T={};var _t=i(gt,pt,mt,!1,ft,null,null,null);function ft(t){for(let a in T)this[a]=T[a]}var zt=function(){return _t.exports}();export{zt as default};
