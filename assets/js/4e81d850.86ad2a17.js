"use strict";(self.webpackChunkrefactoring=self.webpackChunkrefactoring||[]).push([[865],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(t),m=l,h=g["".concat(s,".").concat(m)]||g[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4797:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(7294),l="title_aw9g",a="authors_D0Uc",i="author_wC7X",o="avatar__link_Mc9C",s="avatar__photo_y+NV",c="avatar__info_oz+C",p="bold_xdb6",u={positiveko:{name:"positiveko",title:"Front End Engineer",url:"https://github.com/positiveko",image_url:"https://github.com/positiveko.png"},saengmotmi:{name:"saengmotmi",title:"Front End Engineer",url:"https://github.com/saengmotmi",image_url:"https://github.com/saengmotmi.png"},"Woongjo-Yoo":{name:"Woongjo-Yoo",title:"Back End Engineer",url:"https://github.com/onikss793",image_url:"https://github.com/onikss793.png"},Mengkki:{name:"Mengkki",title:"Front End Engineer",url:"https://github.com/guswnl0610",image_url:"https://github.com/guswnl0610.png"},Danbi:{name:"Danbi",title:"Android Engineer",url:"https://github.com/itssweetrain",image_url:"https://github.com/itssweetrain.png"}};function g(e){var n=e.bookLeader,t=e.authors,g=function(e){var t=e.author,l=u[t];return r.createElement("div",{className:i},r.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:o},r.createElement("img",{src:l.image_url,alt:t,className:s})),r.createElement("div",{className:c},r.createElement("span",{className:p},l.name," ",t===n&&" \ud83c\udfc6"),r.createElement("span",null,l.title)))},m=(0,r.useCallback)((function(){return r.createElement("div",{className:a},u[n]&&r.createElement(g,{author:n}),t&&t.map((function(e){if(u[e])return r.createElement(g,{author:e,key:e})})))}),[n,t]);return r.createElement("section",null,r.createElement("span",{className:l},"written by"),m())}},23:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),i=t(4797),o=["components"],s={sidebar_position:1},c="8\uc7a5 \uae30\ub2a5 \uc774\ub3d9 \u4e0b",p={unversionedId:"chapter_8-2",id:"chapter_8-2",isDocsHomePage:!1,title:"8\uc7a5 \uae30\ub2a5 \uc774\ub3d9 \u4e0b",description:"8-5 \uc778\ub77c\uc778 \ucf54\ub4dc\ub97c \ud568\uc218 \ud638\ucd9c\ub85c \ubc14\uafb8\uae30",source:"@site/docs/13_chapter_8-2.mdx",sourceDirName:".",slug:"/chapter_8-2",permalink:"/refactoring/docs/chapter_8-2",editUrl:"https://github.dev/dev-in-book/refactoring/blob/main/docs/13_chapter_8-2.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"8\uc7a5 \uae30\ub2a5 \uc774\ub3d9 \u4e0a",permalink:"/refactoring/docs/chapter_8-1"}},u=[{value:"8-5 \uc778\ub77c\uc778 \ucf54\ub4dc\ub97c \ud568\uc218 \ud638\ucd9c\ub85c \ubc14\uafb8\uae30",id:"8-5-\uc778\ub77c\uc778-\ucf54\ub4dc\ub97c-\ud568\uc218-\ud638\ucd9c\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28",children:[]}]},{value:"8-6 \ubb38\uc7a5 \uc2ac\ub77c\uc774\ub4dc\ud558\uae30",id:"8-6-\ubb38\uc7a5-\uc2ac\ub77c\uc774\ub4dc\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-1",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-1",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",children:[]}]},{value:"8-7 \ubc18\ubcf5\ubb38 \ucabc\uac1c\uae30",id:"8-7-\ubc18\ubcf5\ubb38-\ucabc\uac1c\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-2",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-2",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-2",children:[]}]},{value:"8.8 \ubc18\ubcf5\ubb38\uc744 \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \ubc14\uafb8\uae30",id:"88-\ubc18\ubcf5\ubb38\uc744-\ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c-\ubc14\uafb8\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-3",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-3",children:[]},{value:"\uc608\uc2dc",id:"\uc608\uc2dc-3",children:[]}]},{value:"8-9 \uc8fd\uc740 \ucf54\ub4dc \uc81c\uac70\ud558\uae30",id:"8-9-\uc8fd\uc740-\ucf54\ub4dc-\uc81c\uac70\ud558\uae30",children:[{value:"\ubc30\uacbd",id:"\ubc30\uacbd-4",children:[]},{value:"\uc808\ucc28",id:"\uc808\ucc28-4",children:[]}]}],g={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"8\uc7a5-\uae30\ub2a5-\uc774\ub3d9-\u4e0b"},"8\uc7a5 \uae30\ub2a5 \uc774\ub3d9 \u4e0b"),(0,a.kt)(i.Z,{bookLeader:"positiveko",mdxType:"Authors"}),(0,a.kt)("h2",{id:"8-5-\uc778\ub77c\uc778-\ucf54\ub4dc\ub97c-\ud568\uc218-\ud638\ucd9c\ub85c-\ubc14\uafb8\uae30"},"8-5 \uc778\ub77c\uc778 \ucf54\ub4dc\ub97c \ud568\uc218 \ud638\ucd9c\ub85c \ubc14\uafb8\uae30"),(0,a.kt)("p",null,"Replace Inline code with Function Call"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let appliesToMass = false;\nfor (const s of states) {\n  if (s === 'MA') appliesToMass = true;\n}\n")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"appliesToMass = states.includes('MA');\n"))),(0,a.kt)("h3",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218\ub294 \uc5ec\ub7ec \ub3d9\uc791\uc744 \ud558\ub098\ub85c \ubb36\uc5b4\uc900\ub2e4. \uadf8\ub9ac\uace0 \ud568\uc218\uc758 \uc774\ub984\uc774 \ucf54\ub4dc\uc758 \ub3d9\uc791 \ubc29\uc2dd\ubcf4\ub2e4\ub294 \ubaa9\uc801\uc744 \ub9d0\ud574\uc8fc\uae30 \ub54c\ubb38\uc5d0 \ud568\uc218\ub97c \ud65c\uc6a9\ud558\uba74 \ucf54\ub4dc\ub97c \uc774\ud574\ud558\uae30\uac00 \uc26c\uc6cc\uc9c4\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub611\uac19\uc740 \ucf54\ub4dc\ub97c \ubc18\ubcf5\ud558\ub294 \ub300\uc2e0 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub3c4\ub85d \uc218\uc815\ud558\uba74 \uc911\ubcf5\uc744 \uc5c6\uc560\ub294 \ub370\uc5d0 \ud6a8\uacfc\uc801\uc774\ub2e4. \ub3d9\uc791\uc744 \ubcc0\uacbd\ud560 \uc77c\uc774 \uc0dd\uacbc\uc744 \ub54c \ud574\ub2f9 \ud568\uc218\ub9cc \uc218\uc815\ud558\uba74 \ub418\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub984\uc744 \uc798 \uc9c0\uc5c8\ub2e4\uba74 \uc778\ub77c\uc778 \ucf54\ub4dc \ub300\uc2e0 \ud568\uc218 \uc774\ub984\uc744 \ub123\uc5b4\ub3c4 \ub9d0\uc774 \ub41c\ub2e4. \ub9cc\uc57d \ub9d0\uc774 \ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 \ud568\uc218 \uc774\ub984\uc774 \uc801\uc808\ud558\uc9c0 \uc54a\uac70\ub098 \ud568\uc218\uc758 \ubaa9\uc801\uc774 \uc778\ub77c\uc778 \ucf54\ub4dc\uc758 \ubaa9\uc801\uacfc \ub2e4\ub978 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \ub300\uccb4\ud558\uba74 \uc548 \ub41c\ub2e4.")),(0,a.kt)("h3",{id:"\uc808\ucc28"},"\uc808\ucc28"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc778\ub77c\uc778 \ucf54\ub4dc\ub97c \ud568\uc218 \ud638\ucd9c\ub85c \ub300\uccb4\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"8-6-\ubb38\uc7a5-\uc2ac\ub77c\uc774\ub4dc\ud558\uae30"},"8-6 \ubb38\uc7a5 \uc2ac\ub77c\uc774\ub4dc\ud558\uae30"),(0,a.kt)("p",null,"Slide Statements"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const pricingPlan = retrievPricingPlan();\nconst order = retreiveOrder();\nlet charge;\nconst chargePerUnit = pricingPlan.unit;\n")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const pricingPlan = retrievPricingPlan();\nconst chargePerUnit = pricingPlan.unit;\nconst order = retreiveOrder();\n// highlight-next-line\nlet charge;\n"))),(0,a.kt)("h3",{id:"\ubc30\uacbd-1"},"\ubc30\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uad00\ub828\ub41c \ucf54\ub4dc\ub4e4\uc774 \uac00\uae4c\uc774 \ubaa8\uc5ec \uc788\ub2e4\uba74 \uc774\ud574\ud558\uae30 \ub354 \uc88b\ub2e4. \ud558\ub098\uc758 \ub370\uc774\ud130 \uad6c\uc870\ub97c \uc774\uc6a9\ud558\ub294 \ubb38\uc7a5\ub4e4\uc740 \ud55c \ub370 \ubaa8\uc5ec \uc788\uc5b4\uc57c \uc88b\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uad00\ub828\ub41c \ucf54\ub4dc\ub07c\ub9ac \ubaa8\uc73c\uba74 \ud568\uc218 \ucd94\ucd9c\ud558\uae30\uc640 \uac19\uc740 \ub2e4\ub978 \ub9ac\ud329\ud130\ub9c1\uc744 \ud558\uae30\uc5d0\ub3c4 \uc218\uc6d4\ud574\uc9c0\uae30 \ub54c\ubb38\uc774\ub2e4.")),(0,a.kt)("h3",{id:"\uc808\ucc28-1"},"\uc808\ucc28"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ucf54\ub4dc \uc870\uac01\uc744 \uc774\ub3d9\ud560 \ubaa9\ud45c \uc704\uce58\ub97c \ucc3e\ub294\ub2e4. \ucf54\ub4dc \uc870\uac01\uc758 \uc6d0\ub798 \uc704\uce58\uc640 \ubaa9\ud45c \uc704\uce58 \uc0ac\uc774\uc758 \ucf54\ub4dc\ub4e4\uc744 \ud6d1\uc5b4\ubcf4\uba74\uc11c, \uc870\uac01\uc744 \ubaa8\uc73c\uace0 \ub098\uba74 \ub3d9\uc791\uc774 \ub2ec\ub77c\uc9c0\ub294 \ucf54\ub4dc\uac00 \uc788\ub294\uc9c0 \uc0b4\ud540\ub2e4. \ub2e4\uc74c\uacfc \uac19\uc740 \uac04\uc12d\uc774 \uc788\ub2e4\uba74 \uc774 \ub9ac\ud329\ud130\ub9c1\uc744 \ud3ec\uae30\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ucf54\ub4dc \uc870\uac01\uc744 \uc6d0\ub798 \uc704\uce58\uc5d0\uc11c \uc798\ub77c\ub0b4\uc5b4 \ubaa9\ud45c \uc704\uce58\uc5d0 \ubd99\uc5ec \ub123\ub294\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud55c\ub2e4.")),(0,a.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("h4",{id:"\uc608\uc2dc-1"},"\uc608\uc2dc 1)"),(0,a.kt)("p",null,"\ucf54\ub4dc \uc870\uac01\uc744 \uc2ac\ub77c\uc774\ub4dc\ud560 \ub54c\ub294 \ub450 \uac00\uc9c0\ub97c \ud655\uc778\ud558\uc790."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ubb34\uc5c7\uc744 \uc2ac\ub77c\uc774\ub4dc\ud560\uc9c0\uc640 2) \uc2ac\ub77c\uc774\ub4dc\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// highlight-start\nconst pricingPlan = retrievePricingPlan();\nconst order = retreiveOrder();\nconst baseCharge = pricingPlan.base;\nlet charge;\nconst chargePerUnit = pricingPlan.unit;\nconst units = order.units;\nlet discount; // \uc5ec\uae30\uae4c\uc9c0\ub294 \uc120\uc5b8\ubb38\uc774\ubbc0\ub85c \uc774\ub3d9\ud558\uae30 \uc27d\ub2e4.\n// highlight-end\ncharge = baseCharge + units * chargePerUnit;\nlet discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);\ndiscount = discountableUnits * pricingPlan.discountFactor;\nif (order.isRepeat) discount += 20;\ncharge = charge - discount;\nchargeOrder(charge);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const pricingPlan = retrievePricingPlan();\nconst baseCharge = pricingPlan.base;\nlet charge;\nconst chargePerUnit = pricingPlan.unit;\n// highlight-next-line\nconst order = retreiveOrder(); // \uc120\uc5b8\uc740 \ubd80\uc218\ud6a8\uacfc\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc62e\uaca8\ub3c4 \ubb34\ubc29\ud558\ub2e4.\nconst units = order.units;\nlet discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);\n// highlight-next-line\nlet discount; // \uc120\uc5b8\uc740 \ubd80\uc218\ud6a8\uacfc\uac00 \uc5c6\uace0 \ub2e4\ub978 \ubcc0\uc218\ub97c \ucc38\uc870\ud558\uc9c0\ub3c4 \uc54a\uc73c\ubbc0\ub85c \ub2e4\uc74c \ucf54\ub4dc \uc804\uae4c\uc9c0\ub294 \uc5b4\ub514\ub85c\ub4e0 \uc62e\uaca8\ub3c4 \uc88b\ub2e4.\ndiscount = discountableUnits * pricingPlan.discountFactor;\n\n// highlight-next-line\nif (order.isRepeat) discount += 20; // \ub2e4\uc74c \ucf54\ub4dc\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uc218\uc815\ud55c \ubcc0\uc218 discount\ub97c \ucc38\uc870\ud558\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798\ub85c \uc774\ub3d9\ud560 \uc218 \uc5c6\ub2e4.\n// highlight-next-line\ncharge = baseCharge + units * chargePerUnit; // \uacf5\ud1b5\ub41c \uc0c1\ud0dc\ub97c \uc218\uc815\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \uc5ec\uae30\uae4c\uc9c0 \uc774\ub3d9\ud560 \uc218 \uc788\ub2e4.\ncharge = charge - discount; // \ub2e4\uc74c \ucf54\ub4dc\uc5d0\uc11c \ub9c8\ucc2c\uac00\uc9c0\ub85c \ucc38\uc870\ud558\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798\ub85c \uc774\ub3d9\ud560 \uc218 \uc5c6\ub2e4.\nchargeOrder(charge);\n")),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c \ubd80\uc218\ud6a8\uacfc\uac00 \uc5c6\ub2e4\ub294 \uac78 \uc54c\uae30 \uc704\ud574\uc11c\ub294 \uc2e4\uc81c\ub85c \ub0b4\ubd80\ub97c \uc0b4\ud3b4\uc11c \ubd80\uc218\ud6a8\uacfc\uac00 \uc5c6\uc74c\uc744 \ud655\uc778\ud574\uc57c \ud55c\ub2e4.\n\ud558\uc9c0\ub9cc \uc800\uc790\uc758 \uacbd\uc6b0 \uac70\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uba85\ub839-\uc9c8\uc758 \ubd84\ub9ac \uc6d0\uce59"),"\uc744 \uc9c0\ucf1c \ucf54\ub529\ud558\uae30 \ub54c\ubb38\uc5d0 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\ub294 \ubaa8\ub450 \ubd80\uc218\ud6a8\uacfc\uac00 \uc5c6\uc74c\uc744 \uc54c\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \uac00\ub2a5\ud55c \uc77c\uc774\ub77c\uace0 \uc124\uba85\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc2ac\ub77c\uc774\ub4dc\ud560 \ucf54\ub4dc \uc870\uac01\uacfc \uac74\ub108\ub6f8 \ucf54\ub4dc \uc911 \uc5b4\ub290 \ud55c\ucabd\uc774 \ub2e4\ub978 \ucabd\uc5d0\uc11c \ucc38\uc870\ud558\ub294 \ub370\uc774\ud130\ub97c \uc218\uc815\ud55c\ub2e4\uba74 \uc2ac\ub77c\uc774\ub4dc\ub97c \ud560 \uc218 \uc5c6\ub2e4.\n\uc774\uac83\uc774 \uac00\uc7a5 \uc9c1\uad00\uc801\uc778 \uaddc\uce59\uc774\ub2e4. \ud558\uc9c0\ub9cc \uc644\ubcbd\ud55c \uaddc\uce59\uc740 \uc544\ub2cc \uac83\uc774, \ub2e4\uc74c \ub450 \uc904\uc740 \uc21c\uc11c\ub97c \ubc14\uafd4\ub3c4 \uc548\uc804\ud558\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"a = 1 + 10;\na = a + 5;\n")),(0,a.kt)("p",null,"\uc2ac\ub77c\uc774\ub4dc\uac00 \uc548\uc804\ud55c \uc9c0\ub97c \ud310\ub2e8\ud558\ub824\uba74 \uad00\ub828\ub41c \uc5f0\uc0b0\uc774 \ubb34\uc5c7\uc774\uace0 \uad6c\uc131\uc774 \uc5b4\ub5bb\uac8c \ub418\uc5c8\ub294\uc9c0\ub97c \uc644\ubcbd\ud788 \uc774\ud574\ud574\uc57c \ud55c\ub2e4. \uc0c1\ud0dc \uac31\uc2e0\uc774 \uc911\uc694\ud558\ubbc0\ub85c \uc0c1\ud0dc \uac31\uc2e0\ud558\ub294 \ucf54\ub4dc \uc790\uccb4\ub97c \ucd5c\ub300\ud55c \uc81c\uac70\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.\n\ub530\ub77c\uc11c \uc2ac\ub77c\uc774\ub4dc\ub97c \ud558\uae30 \uc804\uc5d0 \ubcc0\uc218\ub97c \ucabc\uac1c\uc5b4\uc11c \uc2dc\ub3c4\ud558\ub294 \uac83\uc774 \uc88b\ub2e4."),(0,a.kt)("h4",{id:"\uc608\uc2dc-2-\uc870\uac74\ubb38\uc774-\uc788\uc744-\ub54c\uc758-\uc2ac\ub77c\uc774\ub4dc"},"\uc608\uc2dc 2) \uc870\uac74\ubb38\uc774 \uc788\uc744 \ub54c\uc758 \uc2ac\ub77c\uc774\ub4dc"),(0,a.kt)("p",null,"\uc870\uac74\ubb38\uc758 \uc548\ud30e\uc73c\ub85c \uc2ac\ub77c\uc774\ub4dc\ud574\uc57c \ud560 \ub54c\uc5d0\ub294 \uc5b4\ub5bb\uac8c \ud560 \uc218 \uc788\uc744\uae4c?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (availableResources.length === 0) {\n  result = createResource();\n  // highlight-next-line\n  allocatedResources.push(result);\n} else {\n  result = availableResources.pop();\n  // highlight-next-line\n  allocatedResources.push(result);\n}\nreturn result;\n")),(0,a.kt)("p",null,"\uc544\ub798\ucc98\ub7fc \uc911\ubcf5\ub41c \ubb38\uc7a5\uc744 \uc870\uac74\ubb38 \ubc16\uc73c\ub85c \uc2ac\ub77c\uc774\ub4dc\ud574\uc11c \ud55c \ubb38\uc7a5\uc73c\ub85c \ud569\uce5c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let result;\nif (availableResources.length === 0) {\n  result = createResource();\n} else {\n  result = availableResources.pop();\n}\n// highlight-next-line\nallocatedResources.push(result);\nreturn result;\n")),(0,a.kt)("h2",{id:"8-7-\ubc18\ubcf5\ubb38-\ucabc\uac1c\uae30"},"8-7 \ubc18\ubcf5\ubb38 \ucabc\uac1c\uae30"),(0,a.kt)("p",null,"Split Loop"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let averageAge = 0;\nlet totalSalary = 0;\nfor (const p of people) {\n  average += p.age;\n  totalSalary += p.salary;\n}\naverageAge = averageAge / people.length;\n")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let totalSalary = 0;\nfor (const p of people) {\n  // highlight-next-line\n  totalSalary += p.salary;\n}\n\nlet averageAge = 0;\nfor (const p of people) {\n  // highlight-next-line\n  averageAge += p.age;\n}\naverageAge = averageAge / people.length;\n"))),(0,a.kt)("h3",{id:"\ubc30\uacbd-2"},"\ubc30\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubc18\ubcf5\ubb38 \ud558\ub098\uc5d0\uc11c \ub450 \uac00\uc9c0 \uc77c\uc744 \uc218\ud589\ud560 \ub54c \ubc18\ubcf5\ubb38\uc744 \uc218\uc815\ud574\uc57c \ud560 \ub54c\ub9c8\ub2e4 \ub450 \uac00\uc9c0 \uc77c \ubaa8\ub450\ub97c \uc798 \uc774\ud574\ud574\uc57c \ud55c\ub2e4. \ud558\uc9c0\ub9cc \ucabc\uac1c\uc5b4 \ubd84\ub9ac\ud558\uba74 \uc218\uc815\ud560 \ub3d9\uc791 \ud558\ub098\ub9cc \uc774\ud574\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ubc18\ubcf5\ubb38\uc744 \ub450 \ubc88 \uc2e4\ud589\ud574\uc57c \ud558\ubbc0\ub85c \uc774 \ub9ac\ud329\ud130\ub9c1\uc774 \ubd88\ud3b8\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc, \ub9ac\ud329\ud130\ub9c1\uacfc \ucd5c\uc801\ud654\ub97c \uad6c\ubd84\ud558\uc790. \ucd5c\uc801\ud654\ub294 \ucf54\ub4dc\ub97c \uae54\ub054\ud788 \uc815\ub9ac\ud55c \uc774\ud6c4\uc5d0 \uc218\ud589\ud558\uc790. \uc624\ud788\ub824 \ubc18\ubcf5\ubb38 \ucabc\uac1c\uae30\uac00 \ub354 \uac15\ub825\ud55c \ucd5c\uc801\ud654\ub97c \ud558\ub3c4\ub85d \ub3c4\uc640\uc8fc\uae30\ub3c4 \ud55c\ub2e4.")),(0,a.kt)("h3",{id:"\uc808\ucc28-2"},"\uc808\ucc28"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ubc18\ubcf5\ubb38\uc744 \ubcf5\uc81c\ud574 \ub450 \uac1c\ub85c \ub9cc\ub4e0\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ubc18\ubcf5\ubb38\uc774 \uc911\ubcf5\ub418\uc5b4 \uc0dd\uae30\ub294 \ubd80\uc218\ud6a8\uacfc\ub97c \ud30c\uc545\ud574\uc11c \uc81c\uac70\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc644\ub8cc\ub410\uc73c\uba74, \uac01 \ubc18\ubcf5\ubb38\uc744 \ud568\uc218\ub85c \ucd94\ucd9c\ud560\uc9c0 \uace0\ubbfc\ud574\ubcf8\ub2e4.")),(0,a.kt)("h3",{id:"\uc608\uc2dc-2"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let youngest = people[0] ? people[0].age : Infinity;\nlet totalSalary = 0;\nfor (const p of people) {\n  if (p.age < youngest) youngest = p.age;\n  totalSalary += p.salary;\n}\n\nreturn `\ucd5c\uc5f0\uc18c: ${youngest}, \ucd1d \uae09\uc5ec: ${totalSalary}`;\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uba3c\uc800 \ub2e8\uc21c\ud788 \ubc18\ubcf5\ubb38\uc744 \ubcf5\uc81c\ud55c\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let youngest = people[0] ? people[0].age : Infinity;\nlet totalSalary = 0;\nfor (const p of people) {\n  if (p.age < youngest) youngest = p.age;\n  totalSalary += p.salary;\n}\n// highlight-start\nfor (const p of people) {\n  if (p.age < youngest) youngest = p.age;\n  totalSalary += p.salary;\n}\n// highlight-end\n\nreturn `\ucd5c\uc5f0\uc18c: ${youngest}, \ucd1d \uae09\uc5ec: ${totalSalary}`;\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\ubc18\ubcf5\ubb38\uc744 \ubcf5\uc81c\ud588\ub2e4\uba74 \uc911\ubcf5\uc744 \uc81c\uac70\ud55c\ub2e4.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let youngest = people[0] ? people[0].age : Infinity;\nlet totalSalary = 0;\nfor (const p of people) {\n  // highlight-next-line\n  totalSalary += p.salary;\n}\nfor (const p of people) {\n  // highlight-next-line\n  if (p.age < youngest) youngest = p.age;\n}\n\nreturn `\ucd5c\uc5f0\uc18c: ${youngest}, \ucd1d \uae09\uc5ec: ${totalSalary}`;\n")),(0,a.kt)("p",null,"\uacf5\uc2dd\uc801\uc778 \ubc18\ubcf5\ubb38 \ucabc\uac1c\uae30 \ub9ac\ud329\ud130\ub9c1\uc740 \ub05d\uc774\uc9c0\ub9cc \ub354 \uc9c4\ud589\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='\ubb38\uc7a5 \uc2ac\ub77c\uc774\ub4dc \ud558\uae30'",title:"'\ubb38\uc7a5","\uc2ac\ub77c\uc774\ub4dc":!0,"\ud558\uae30'":!0},"let totalSalary = 0;\nfor (const p of people) {\n  totalSalary += p.salary;\n}\n// highlight-next-line\nlet youngest = people[0] ? people[0].age : Infinity;\nfor (const p of people) {\n  if (p.age < youngest) youngest = p.age;\n}\n\nreturn `\ucd5c\uc5f0\uc18c: ${youngest}, \ucd1d \uae09\uc5ec: ${totalSalary}`;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='\ubc18\ubcf5\ubb38\uc744 \ud568\uc218\ub85c \ucd94\ucd9c'",title:"'\ubc18\ubcf5\ubb38\uc744","\ud568\uc218\ub85c":!0,"\ucd94\ucd9c'":!0},"// highlight-next-line\nreturn `\ucd5c\uc5f0\uc18c: ${youngestAge()}, \ucd1d \uae09\uc5ec: ${totalSalary()}`;\n\nfunction totalSalary() {\n  let totalSalary = 0;\n  for (const p of people) {\n    totalSalary += p.salary;\n  }\n  return totalSalary;\n}\n\nfunction youngestAge() {\n  let youngest = people[0] ? people[0].age : Infinity;\n  for (const p of people) {\n    if (p.age < youngest) youngest = p.age;\n  }\n  return youngest;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='\uae09\uc5ec \uacc4\uc0b0 \ud568\uc218\uc758 \ubc18\ubcf5\ubb38\uc744 \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \ubc14\uafb8\uace0, \ucd5c\uc5f0\uc18c \uacc4\uc0b0 \ucf54\ub4dc\uc5d0\ub294 \uc54c\uace0\ub9ac\uc998 \uad50\uccb4\ud558\uae30 \uc801\uc6a9'",title:"'\uae09\uc5ec","\uacc4\uc0b0":!0,"\ud568\uc218\uc758":!0,"\ubc18\ubcf5\ubb38\uc744":!0,"\ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c":!0,"\ubc14\uafb8\uace0,":!0,"\ucd5c\uc5f0\uc18c":!0,"\ucf54\ub4dc\uc5d0\ub294":!0,"\uc54c\uace0\ub9ac\uc998":!0,"\uad50\uccb4\ud558\uae30":!0,"\uc801\uc6a9'":!0},"return `\ucd5c\uc5f0\uc18c: ${youngestAge()}, \ucd1d \uae09\uc5ec: ${totalSalary()}`;\n\nfunction totalSalary() {\n  // highlight-next-line\n  return people.reduce((total, p) => total + p.salary, 0);\n}\n\nfunction youngestAge() {\n  // highlight-next-line\n  return Math.min(...people.map((p) => p.age));\n}\n")),(0,a.kt)("h2",{id:"88-\ubc18\ubcf5\ubb38\uc744-\ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c-\ubc14\uafb8\uae30"},"8.8 \ubc18\ubcf5\ubb38\uc744 \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \ubc14\uafb8\uae30"),(0,a.kt)("p",null,"Replace Loop with Pipeline"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const names = [];\nfor (const i of input) {\n  if (i.job === 'programmer') {\n    names.push(i.name);\n  }\n}\n")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const names = input.filter((i) => i.job === 'programmer').map((i) => i.name);\n"))),(0,a.kt)("h3",{id:"\ubc30\uacbd-3"},"\ubc30\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc774\uc6a9\ud558\uba74 \ucc98\ub9ac \uacfc\uc815\uc744 \uc77c\ub828\uc758 \uc5f0\uc0b0\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub300\ud45c\uc801\uc778 \uc5f0\uc0b0\uc740 map\uacfc filter\ub2e4. map\uc740 \ud568\uc218\ub97c \uc0ac\uc6a9\ud574 \uc785\ub825 \uceec\ub809\uc158\uc758 \uac01 \uc6d0\uc18c\ub97c \ubcc0\ud658\ud558\uace0, filter\ub294 \ub610 \ub2e4\ub978 \ud568\uc218\ub97c \uc0ac\uc6a9\ud574 \uc785\ub825 \uceec\ub809\uc158\uc744 \ud544\ud130\ub9c1\ud574 \ubd80\ubd84\uc9d1\ud569\uc744 \ub9cc\ub4e0\ub2e4. \uc774 \ubd80\ubd84\uc9d1\ud569\uc740 \ud30c\uc774\ud504\ub77c\uc778\uc758 \ub2e4\uc74c \ub2e8\uacc4\ub97c \uc704\ud55c \uceec\ub809\uc158\uc73c\ub85c \uc4f0\uc778\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub17c\ub9ac\ub97c \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \ud45c\ud604\ud558\uba74 \uc774\ud574\ud558\uae30 \ud6e8\uc52c \uc26c\uc6cc\uc9c4\ub2e4. \uac1d\uccb4\uac00 \ud30c\uc774\ud504\ub77c\uc778\uc744 \ub530\ub77c \ud750\ub974\uba70 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ub418\ub294\uc9c0\ub97c \uc77d\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4.")),(0,a.kt)("h3",{id:"\uc808\ucc28-3"},"\uc808\ucc28"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ubc18\ubcf5\ubb38\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uceec\ub809\uc158\uc744 \uac00\ub9ac\ud0a4\ub294 \ubcc0\uc218\ub97c \ud558\ub098 \ub9cc\ub4e0\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ubc18\ubcf5\ubb38\uc758 \uccab \uc904\ubd80\ud130 \uc2dc\uc791\ud574\uc11c, \uac01\uac01\uc758 \ub2e8\uc704 \ud589\uc704\ub97c \uc801\uc808\ud55c \uceec\ub809\uc158 \ud30c\uc774\ud504\ub77c\uc778 \uc5f0\uc0b0\uc73c\ub85c \ub300\uccb4\ud55c\ub2e4. \uc774 \ub54c \uceec\ub809\uc158 \ud30c\uc774\ud504\ub77c\uc778 \uc5f0\uc0b0\uc740 1\uc5d0\uc11c \ub9cc\ub4e0 \ubc18\ubcf5\ubb38 \uceec\ub809\uc158 \ubcc0\uc218\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec, \uc774\uc804 \uc5f0\uc0b0\uc758 \uacb0\uacfc\ub97c \uae30\ucd08\ub85c \uc5f0\uc1c4\uc801\uc73c\ub85c \uc218\ud589\ub41c\ub2e4. \ud558\ub098\ub97c \ub300\uccb4\ud560 \ub54c\ub9c8\ub2e4 \ud14c\uc2a4\ud2b8\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ubc18\ubcf5\ubb38\uc758 \ubaa8\ub4e0 \ub3d9\uc791\uc744 \ub300\uccb4\ud588\ub2e4\uba74 \ubc18\ubcf5\ubb38 \uc790\uccb4\ub97c \uc9c0\uc6b4\ub2e4.")),(0,a.kt)("h3",{id:"\uc608\uc2dc-3"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function acquireData(input) {\n  const lines = input.split('\\n');\n  let firstList = true;\n  const result = [];\n  for (const line of lines) {\n    if (firstLine) {\n      firstLine = false;\n      continue;\n    }\n    if (line.trim() === '') continue;\n    const record = line.split(',');\n    if (record[1].trim() === india) {\n      result.push({ city: record[0].trim(), phone: record[2].trim() });\n    }\n  }\n  return result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='\ub8e8\ud504 \ubcc0\uc218loop variable \uc0dd\uc131'",title:"'\ub8e8\ud504","\ubcc0\uc218loop":!0,variable:!0,"\uc0dd\uc131'":!0},"function acquireData(input) {\n  const lines = input.split('\\n');\n  let firstList = true;\n  const result = [];\n  // highlight-next-line\n  const loopItems = lines;\n  for (const line of loopItems) {\n    if (firstLine) {\n      firstLine = false;\n      continue;\n    }\n    if (line.trim() === '') continue;\n    const record = line.split(',');\n    if (record[1].trim() === india) {\n      result.push({ city: record[0].trim(), phone: record[2].trim() });\n    }\n  }\n  return result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='slice() \uc5f0\uc0b0 \uc218\ud589 \ud6c4 \ubc18\ubcf5\ubb38 \uc548\uc758 if\ubb38 \uc81c\uac70'",title:"'slice()","\uc5f0\uc0b0":!0,"\uc218\ud589":!0,"\ud6c4":!0,"\ubc18\ubcf5\ubb38":!0,"\uc548\uc758":!0,"if\ubb38":!0,"\uc81c\uac70'":!0},"function acquireData(input) {\n  const lines = input.split('\\n');\n  const result = [];\n  // highlight-next-line\n  const loopItems = lines.slice(1);\n  for (const line of loopItems) {\n    if (line.trim() === '') continue;\n    const record = line.split(',');\n    if (record[1].trim() === india) {\n      result.push({ city: record[0].trim(), phone: record[2].trim() });\n    }\n  }\n  return result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='\ube48 \uc904 \uc9c0\uc6b0\uace0 filter() \uc5f0\uc0b0\uc73c\ub85c \ub300\uccb4\ud558\uae30'",title:"'\ube48","\uc904":!0,"\uc9c0\uc6b0\uace0":!0,"filter()":!0,"\uc5f0\uc0b0\uc73c\ub85c":!0,"\ub300\uccb4\ud558\uae30'":!0},"function acquireData(input) {\n  const lines = input.split('\\n');\n  const result = [];\n  // highlight-next-line\n  const loopItems = lines.slice(1).filter((line) => line.trim() !== '');\n  for (const line of loopItems) {\n    const record = line.split(',');\n    if (record[1].trim() === india) {\n      result.push({ city: record[0].trim(), phone: record[2].trim() });\n    }\n  }\n  return result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='map() \uc5f0\uc0b0\uc744 \uc0ac\uc6a9\ud574\uc11c \ubd84\uc790\uc5f4 \ubc30\uc5f4\ub85c \ubcc0\ud658\ud558\uace0 filter() \uc5f0\uc0b0 \uc218\ud589'",title:"'map()","\uc5f0\uc0b0\uc744":!0,"\uc0ac\uc6a9\ud574\uc11c":!0,"\ubd84\uc790\uc5f4":!0,"\ubc30\uc5f4\ub85c":!0,"\ubcc0\ud658\ud558\uace0":!0,"filter()":!0,"\uc5f0\uc0b0":!0,"\uc218\ud589'":!0},"function acquireData(input) {\n  const lines = input.split('\\n');\n  const result = [];\n  // highlight-start\n  const loopItems = lines\n    .slice(1)\n    .filter((line) => line.trim() !== '')\n    .map((line) => line.split(','))\n    .filter((record) => record[1].trim() === india);\n  // highlight-end\n\n  for (const line of loopItems) {\n    // highlight-next-line\n    const record = line;\n    // highlight-next-line\n    result.push({ city: record[0].trim(), phone: record[2].trim() });\n  }\n  return result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='map() \uc5f0\uc0b0\uc744 \uc0ac\uc6a9\ud574\uc11c \uacb0\uacfc \ub808\ucf54\ub4dc \uc0dd\uc131'",title:"'map()","\uc5f0\uc0b0\uc744":!0,"\uc0ac\uc6a9\ud574\uc11c":!0,"\uacb0\uacfc":!0,"\ub808\ucf54\ub4dc":!0,"\uc0dd\uc131'":!0},"function acquireData(input) {\n  const lines = input.split('\\n');\n  const result = [];\n  const loopItems = lines\n    .slice(1)\n    .filter((line) => line.trim() !== '')\n    .map((line) => line.split(','))\n    .filter((record) => record[1].trim() === india)\n    // highlight-next-line\n    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));\n\n  for (const line of loopItems) {\n    const record = line;\n    result.push(line);\n  }\n  return result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='\uacb0\uacfc\ub97c \ub204\uc801 \ubcc0\uc218\uc5d0 \ucd94\uac00'",title:"'\uacb0\uacfc\ub97c","\ub204\uc801":!0,"\ubcc0\uc218\uc5d0":!0,"\ucd94\uac00'":!0},"function acquireData(input) {\n  const lines = input.split('\\n');\n  // highlight-next-line\n  const result = lines\n    .slice(1)\n    .filter((line) => line.trim() !== '')\n    .map((line) => line.split(','))\n    .filter((record) => record[1].trim() === india)\n    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));\n\n  return result;\n}\n")),(0,a.kt)("p",null,"\uc5ec\uae30\uae4c\uc9c0\uac00 \uc774\ubc88 \ub9ac\ud329\ud130\ub9c1\uc758 \ud575\uc2ec\uc774\uc9c0\ub9cc \uc880 \ub354 \uc815\ub9ac\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function acquireData(input) {\n  const lines = input.split('\\n');\n  // highlight-next-line\n  return lines\n    .slice(1)\n    .filter((line) => line.trim() !== '')\n    .map((line) => line.split(','))\n    .filter((record) => record[1].trim() === india)\n    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));\n}\n")),(0,a.kt)("h2",{id:"8-9-\uc8fd\uc740-\ucf54\ub4dc-\uc81c\uac70\ud558\uae30"},"8-9 \uc8fd\uc740 \ucf54\ub4dc \uc81c\uac70\ud558\uae30"),(0,a.kt)("p",null,"Remove Dead Code"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (false) {\n  doSomethingThatUsedToMatter();\n}\n")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \uc5c6\uc564\ub2e4..\n"))),(0,a.kt)("h3",{id:"\ubc30\uacbd-4"},"\ubc30\uacbd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc4f0\uc774\uc9c0 \uc54a\ub294 \ucf54\ub4dc\uac00 \uba87 \uc904 \uc788\ub2e4\uace0 \ud574\uc11c \uc2dc\uc2a4\ud15c\uc774 \ub290\ub824\uc9c0\ub294 \uac83\ub3c4 \uc544\ub2c8\uace0 \uba54\ubaa8\ub9ac\ub97c \ub9ce\uc774 \uc7a1\uc544\uba39\uc9c0\ub3c4 \uc54a\ub294\ub2e4. \uc0ac\uc2e4 \ucd5c\uc2e0 \ucef4\ud30c\uc77c\ub7ec\ub4e4\uc740 \uc774\ub7f0 \ucf54\ub4dc\ub97c \uc54c\uc544\uc11c \uc81c\uac70\ud574\uc900\ub2e4.\n\ud558\uc9c0\ub9cc \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ucf54\ub4dc\uac00 \uc788\ub2e4\uba74 \uadf8 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc758 \ub3d9\uc791\uc744 \uc774\ud574\ud558\ub294 \ub370 \ucee4\ub2e4\ub780 \uac78\ub9bc\ub3cc\uc774 \ub420 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \ucf54\ub4dc\ub97c \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc9c0\uc6cc\uc57c \ud55c\ub2e4. \ubc84\uc804 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc744 \ubbff\uc790.")),(0,a.kt)("h3",{id:"\uc808\ucc28-4"},"\uc808\ucc28"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc8fd\uc740 \ucf54\ub4dc\ub97c \uc678\ubd80\uc5d0\uc11c \ucc38\uc870\ud560 \uc218 \uc788\ub294 \uacbd\uc6b0\ub77c\uba74 \ud639\uc2dc\ub77c\ub3c4 \ud638\ucd9c\ud558\ub294 \uacf3\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc5c6\ub2e4\uba74 \uc8fd\uc740 \ucf54\ub4dc\ub97c \uc81c\uac70\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\ud14c\uc2a4\ud2b8\ud55c\ub2e4.")))}m.isMDXComponent=!0}}]);