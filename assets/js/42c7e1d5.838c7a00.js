"use strict";(self.webpackChunkism_docs=self.webpackChunkism_docs||[]).push([[425],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1984:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:2},c="Applicant",p={unversionedId:"Web Application/applicant",id:"Web Application/applicant",isDocsHomePage:!1,title:"Applicant",description:"Let's translate docs/intro.md to French.",source:"@site/docs/Web Application/applicant.md",sourceDirName:"Web Application",slug:"/Web Application/applicant",permalink:"/docs/Web Application/applicant",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Applicant List",permalink:"/docs/Web Application/applicantList"},next:{title:"Case Tracker",permalink:"/docs/Web Application/caseTracker"}},s=[{value:"Configure i18n",id:"configure-i18n",children:[]},{value:"Translate a doc",id:"translate-a-doc",children:[]},{value:"Start your localized site",id:"start-your-localized-site",children:[]},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",children:[]},{value:"Build your localized site",id:"build-your-localized-site",children:[]}],u={toc:s};function d(e){var n=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"applicant"},"Applicant"),(0,o.kt)("p",null,"Let's translate ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,o.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,o.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,o.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,o.kt)("p",null,"Translate ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,o.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,o.kt)("p",null,"Start your site on the French locale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,o.kt)("p",null,"Your localized site is accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))),(0,o.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,o.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,o.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:t(322).Z})),(0,o.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,o.kt)("p",null,"Build your site for a specific locale:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,o.kt)("p",null,"Or build your site to include all the locales at once:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}d.isMDXComponent=!0},322:function(e,n,t){n.Z=t.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"}}]);