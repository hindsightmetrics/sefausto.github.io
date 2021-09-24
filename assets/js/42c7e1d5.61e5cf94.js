"use strict";(self.webpackChunkism_docs=self.webpackChunkism_docs||[]).push([[425],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1984:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={sidebar_position:2},s="Applicant",p={unversionedId:"Web Application/applicant",id:"Web Application/applicant",isDocsHomePage:!1,title:"Applicant",description:"This is the main view for an applicant. This view has four sections: Applicant Information, Documents, Case and Court Date Check. Below is a description of each section.",source:"@site/docs/Web Application/applicant.md",sourceDirName:"Web Application",slug:"/Web Application/applicant",permalink:"/docs/Web Application/applicant",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Applicants",permalink:"/docs/Web Application/applicantList"},next:{title:"More Details",permalink:"/docs/Web Application/more-applicant-details"}},c=[{value:"Applicant Information",id:"applicant-information",children:[]},{value:"Documents",id:"documents",children:[]},{value:"Cases",id:"cases",children:[]}],u={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"applicant"},"Applicant"),(0,r.kt)("p",null,"This is the main view for an applicant. This view has four sections: Applicant Information, Documents, Case and Court Date Check. Below is a description of each section."),(0,r.kt)("h2",{id:"applicant-information"},"Applicant Information"),(0,r.kt)("p",null,"Here we can see the information corresponding to the applicant. This form is divided into sections containing name and identity, contact information, main address and ISM Settings:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Applicant Information",src:a(9763).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the very top there is a toggle to set if the applicant is active or not for the agency")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Here we see fields for name and indentity regarding the applicant. Required fields are:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"First Name"),(0,r.kt)("li",{parentName:"ol"},"Last Name"),(0,r.kt)("li",{parentName:"ol"},"Gender"),(0,r.kt)("li",{parentName:"ol"},"Date of birth "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Contact Information. Phone Number is a required field")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Primary Address. If the country is USA or United States of America, the fields for State and Zip code should be used. For any other country Province and Postal Code are used.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'"A-" represents the applicants A-Number if they have one.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"[Case Tracker]",' When "Send SMS Upate" is toggled on, text messages will be sent to the applicant whenever there is an update to a case status.'),(0,r.kt)("li",{parentName:"ol"},"[Automated Call]",' When "Run Check Court Date" is on, ISM will trigger automated calls to Los Angeles Court to obtain information on any upcoming court dates.'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Family Members and Address History will bring up another view ",(0,r.kt)("a",{parentName:"p",href:"/docs/Web%20Application/more-applicant-details"},"More Applicant Details")))),(0,r.kt)("p",null,"Any required fields are validate, and an error message will show when they are empty:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Validation",src:a(4312).Z})),(0,r.kt)("h2",{id:"documents"},"Documents"),(0,r.kt)("p",null,'The documents area shows for agencies that have the "Auto Fill" feature enabled. This section allows the download of any USCIS document with default information already completed.'),(0,r.kt)("p",null,"This feature also allows for an agency to upload any files and auto fill those too."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Documents",src:a(4267).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To download a document, click on the arrow button."),(0,r.kt)("li",{parentName:"ol"},"This table has more then one page, navigate to other pages here."),(0,r.kt)("li",{parentName:"ol"},"There is a quick search here.")),(0,r.kt)("h2",{id:"cases"},"Cases"),(0,r.kt)("p",null,'This area shows for agencies that have "Case Tracker" feature enabled.'),(0,r.kt)("p",null,"Here, an agency can link Case Numbers to an applicant, and have ISM automatically check for upates."),(0,r.kt)("p",null,"On the case table, double clicking allows the Case Id and Case Type to be edited."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Case Table",src:a(4671).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a new case to the applicant. When this button is clicked, a pop-up will display to input Case Number and Case Id")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Case Input",src:a(8607).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Manually get the latest status"),(0,r.kt)("li",{parentName:"ol"},"Get the status for all cases")))}d.isMDXComponent=!0},9763:function(e,t,a){t.Z=a.p+"assets/images/applicant-information-151ec84347d5c311a82ff3c6f335278f.png"},8607:function(e,t,a){t.Z=a.p+"assets/images/case-input-bee3dd7e38e7f7f2f396103c5d10e86f.png"},4671:function(e,t,a){t.Z=a.p+"assets/images/case-table-7984c93656b4dae6c3dcb6446a64fe3c.png"},4267:function(e,t,a){t.Z=a.p+"assets/images/documents-4fcbedf222cdb49f03f63b7d333418d0.png"},4312:function(e,t,a){t.Z=a.p+"assets/images/validation-98d072a4c707586b6639253fa34e0b3e.png"}}]);