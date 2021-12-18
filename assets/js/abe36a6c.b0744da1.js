"use strict";(self.webpackChunkism_docs=self.webpackChunkism_docs||[]).push([[60],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},p=Object.keys(t);for(i=0;i<p.length;i++)n=p[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(i=0;i<p.length;i++)n=p[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=i.createContext({}),l=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return i.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,o=t.parentName,s=r(t,["components","mdxType","originalType","parentName"]),f=l(n),d=a,h=f["".concat(o,".").concat(d)]||f[d]||u[d]||p;return n?i.createElement(h,c(c({ref:e},s),{},{components:n})):i.createElement(h,c({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,c=new Array(p);c[0]=f;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=t,r.mdxType="string"==typeof t?t:a,c[1]=r;for(var l=2;l<p;l++)c[l]=n[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5501:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var i=n(7462),a=n(3366),p=(n(7294),n(3905)),c=["components"],r={sidebar_position:1},o="Applicant List",l={unversionedId:"Web Application/applicantList",id:"Web Application/applicantList",isDocsHomePage:!1,title:"Applicant List",description:'Selecting "Applicants" on the left sidebar will bring up a view of a list of applicants that the agency is working on and monitoring.',source:"@site/docs/Web Application/applicantList.md",sourceDirName:"Web Application",slug:"/Web Application/applicantList",permalink:"/docs/Web Application/applicantList",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Applicant",permalink:"/docs/Web Application/applicant"}},s=[{value:"Actions",id:"actions",children:[{value:"Create a new applicant",id:"create-a-new-applicant",children:[]},{value:"Navigate to an existing applicant",id:"navigate-to-an-existing-applicant",children:[]},{value:"Search of an applicant by different fields",id:"search-of-an-applicant-by-different-fields",children:[]},{value:"Show inactive applicants",id:"show-inactive-applicants",children:[]}]}],u={toc:s};function f(t){var e=t.components,r=(0,a.Z)(t,c);return(0,p.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"applicant-list"},"Applicant List"),(0,p.kt)("p",null,'Selecting "Applicants" on the left sidebar will bring up a view of a list of applicants that the agency is working on and monitoring.'),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Applicant List",src:n(9780).Z})),(0,p.kt)("p",null,"Below is a description of the four actions that a user can take on this view."),(0,p.kt)("h2",{id:"actions"},"Actions"),(0,p.kt)("h3",{id:"create-a-new-applicant"},"Create a new applicant"),(0,p.kt)("p",null,'With the button named "New Applicant" you can create a new applicant. Clicking this button will bring up the ',(0,p.kt)("a",{parentName:"p",href:"/docs/Web%20Application/applicant"},"Applicant View"),"."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"New Applicant",src:n(1233).Z})),(0,p.kt)("h3",{id:"navigate-to-an-existing-applicant"},"Navigate to an existing applicant"),(0,p.kt)("p",null,"To view the information for an existing applicant, you can click on any of the Ids shown on the list. By clicking this link the ",(0,p.kt)("a",{parentName:"p",href:"/docs/Web%20Application/applicant"},"Applicant View")," will load with that applicant's data."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Existing Applicant",src:n(901).Z})),(0,p.kt)("h3",{id:"search-of-an-applicant-by-different-fields"},"Search of an applicant by different fields"),(0,p.kt)("p",null,"A quick search feature is shown on the top right of the applicant table. You can use this search to look up an applicant by various fields like: First Name, Last Name, Phone Number and Email."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Search Applicant",src:n(4362).Z})),(0,p.kt)("h3",{id:"show-inactive-applicants"},"Show inactive applicants"),(0,p.kt)("p",null,"Once an agency has completed all the work needed for an applicant, the applicant can hidden from the view. This helps the agency easily view only active records. To view inactive applicants you can click the link on the top right."),(0,p.kt)("p",null,"![Show Inactive]","(/img/applicants/applicants-show-inactive.png"))}f.isMDXComponent=!0},9780:function(t,e,n){e.Z=n.p+"assets/images/applicant-menu-414b73a7c68586a51488302690bb12df.png"},901:function(t,e,n){e.Z=n.p+"assets/images/applicants-existing-applicant-20775af545194ca175fdd75237d75d23.png"},1233:function(t,e,n){e.Z=n.p+"assets/images/applicants-new-applicant-8eed6d5fa91ccaf8d609bf371e268c3b.png"},4362:function(t,e,n){e.Z=n.p+"assets/images/applicants-search-50d6bc5007e8bd4286a205dc129baf55.png"}}]);