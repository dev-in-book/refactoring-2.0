"use strict";(self.webpackChunkrefactoring=self.webpackChunkrefactoring||[]).push([[653],{4797:function(t,e,l){l.d(e,{Z:function(){return c}});var n=l(7294),i="title_aw9g",a="authors_D0Uc",u="author_wC7X",r="avatar__link_Mc9C",k="avatar__photo_y+NV",p="avatar__info_oz+C",d="bold_xdb6",o={positiveko:{name:"positiveko",title:"Front End Engineer",url:"https://github.com/positiveko",image_url:"https://github.com/positiveko.png"},saengmotmi:{name:"saengmotmi",title:"Front End Engineer",url:"https://github.com/saengmotmi",image_url:"https://github.com/saengmotmi.png"},"Woongjo-Yoo":{name:"Woongjo-Yoo",title:"Back End Engineer",url:"https://github.com/onikss793",image_url:"https://github.com/onikss793.png"},Mengkki:{name:"Mengkki",title:"Front End Engineer",url:"https://github.com/guswnl0610",image_url:"https://github.com/guswnl0610.png"}};function c(t){var e=t.bookLeader,l=t.authors,c=function(t){var l=t.author,i=o[l];return n.createElement("div",{className:u},n.createElement("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:r},n.createElement("img",{src:i.image_url,alt:l,className:k})),n.createElement("div",{className:p},n.createElement("span",{className:d},i.name," ",l===e&&" \ud83c\udfc6"),n.createElement("span",null,i.title)))},h=(0,n.useCallback)((function(){return n.createElement("div",{className:a},o[e]&&n.createElement(c,{author:e}),l&&l.map((function(t){if(o[t])return n.createElement(c,{author:t,key:t})})))}),[e,l]);return n.createElement("section",null,n.createElement("span",{className:i},"written by"),h())}},6326:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return k},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return o},default:function(){return h}});var n=l(7462),i=l(3366),a=(l(7294),l(3905)),u=l(4797),r=["components"],k={sidebar_position:1},p="3\uc7a5 \ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8 \u4e0a",d={unversionedId:"chapter_3-1",id:"chapter_3-1",isDocsHomePage:!1,title:"3\uc7a5 \ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8 \u4e0a",description:"\ub9ac\ud329\ud1a0\ub9c1\uc744 \uc5b8\uc81c \ud574\uc57c\ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\ub098?",source:"@site/docs/chapter_3-1.mdx",sourceDirName:".",slug:"/chapter_3-1",permalink:"/refactoring/docs/chapter_3-1",editUrl:"https://github.com/dev-in-book/refactoring/docs/chapter_3-1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"2\uc7a5 \ub9ac\ud329\ud130\ub9c1 \uc6d0\uce59",permalink:"/refactoring/docs/chapter_2"}},o=[{value:"3.1 \uae30\uc774\ud55c \uc774\ub984",id:"31-\uae30\uc774\ud55c-\uc774\ub984",children:[]},{value:"3.2 \uc911\ubcf5 \ucf54\ub4dc",id:"32-\uc911\ubcf5-\ucf54\ub4dc",children:[]},{value:"3.3 \uae34 \ud568\uc218",id:"33-\uae34-\ud568\uc218",children:[]},{value:"3.4 \uae34 \ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d",id:"34-\uae34-\ub9e4\uac1c\ubcc0\uc218-\ubaa9\ub85d",children:[{value:"\ub9e4\uac1c\ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30",id:"\ub9e4\uac1c\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30",children:[]},{value:"\uac1d\uccb4 \ud1b5\uc9f8\ub85c \ub118\uae30\uae30",id:"\uac1d\uccb4-\ud1b5\uc9f8\ub85c-\ub118\uae30\uae30",children:[]},{value:"\ub9e4\uac1c\ubcc0\uc218 \uac1d\uccb4 \ub9cc\ub4e4\uae30",id:"\ub9e4\uac1c\ubcc0\uc218-\uac1d\uccb4-\ub9cc\ub4e4\uae30",children:[]},{value:"\ud50c\ub798\uadf8 \uc778\uc218 \uc81c\uac70\ud558\uae30",id:"\ud50c\ub798\uadf8-\uc778\uc218-\uc81c\uac70\ud558\uae30",children:[]},{value:"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30",id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ud074\ub798\uc2a4\ub85c-\ubb36\uae30",children:[]}]},{value:"3.5 \uc804\uc5ed \ub370\uc774\ud130",id:"35-\uc804\uc5ed-\ub370\uc774\ud130",children:[]},{value:"3.6 \uac00\ubcc0 \ub370\uc774\ud130",id:"36-\uac00\ubcc0-\ub370\uc774\ud130",children:[{value:"\ubcc0\uc218 \ucea1\uc290\ud654\ud558\uae30",id:"\ubcc0\uc218-\ucea1\uc290\ud654\ud558\uae30",children:[]},{value:"\ubcc0\uc218 \ucabc\uac1c\uae30",id:"\ubcc0\uc218-\ucabc\uac1c\uae30",children:[]},{value:"\ubb38\uc7a5 \uc2ac\ub77c\uc774\ub4dc \ud558\uae30, \ud568\uc218 \ucd94\ucd9c\ud558\uae30",id:"\ubb38\uc7a5-\uc2ac\ub77c\uc774\ub4dc-\ud558\uae30-\ud568\uc218-\ucd94\ucd9c\ud558\uae30",children:[]},{value:"\uc9c8\uc758 \ud568\uc218\uc640 \ubcc0\uacbd \ud568\uc218 \ubd84\ub9ac\ud558\uae30",id:"\uc9c8\uc758-\ud568\uc218\uc640-\ubcc0\uacbd-\ud568\uc218-\ubd84\ub9ac\ud558\uae30",children:[]},{value:"\uc138\ud130 \uc81c\uac70\ud558\uae30",id:"\uc138\ud130-\uc81c\uac70\ud558\uae30",children:[]},{value:"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30, \uc5ec\ub7ec \ud568\uc218\ub97c \ubcc0\ud658 \ud568\uc218\ub85c \ubb36\uae30",id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ud074\ub798\uc2a4\ub85c-\ubb36\uae30-\uc5ec\ub7ec-\ud568\uc218\ub97c-\ubcc0\ud658-\ud568\uc218\ub85c-\ubb36\uae30",children:[]}]},{value:"3.7 \ub4a4\uc5c9\ud0a8 \ubcc0\uacbd",id:"37-\ub4a4\uc5c9\ud0a8-\ubcc0\uacbd",children:[{value:"\ub2e8\uacc4 \ucabc\uac1c\uae30",id:"\ub2e8\uacc4-\ucabc\uac1c\uae30",children:[]},{value:"\ud568\uc218 \uc62e\uae30\uae30",id:"\ud568\uc218-\uc62e\uae30\uae30",children:[]},{value:"\ud568\uc218 \ucd94\ucd9c\ud558\uae30",id:"\ud568\uc218-\ucd94\ucd9c\ud558\uae30",children:[]},{value:"\ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30",id:"\ud074\ub798\uc2a4-\ucd94\ucd9c\ud558\uae30",children:[]}]},{value:"3.8 \uc0b0\ud0c4\ucd1d \uc218\uc220",id:"38-\uc0b0\ud0c4\ucd1d-\uc218\uc220",children:[{value:"\ud568\uc218 \uc62e\uae30\uae30, \ud544\ub4dc \uc62e\uae30\uae30",id:"\ud568\uc218-\uc62e\uae30\uae30-\ud544\ub4dc-\uc62e\uae30\uae30",children:[]},{value:"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30",id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ud074\ub798\uc2a4\ub85c-\ubb36\uae30-1",children:[]},{value:"\uc5ec\ub7ec \ud568\uc218\ub97c \ubcc0\ud658 \ud568\uc218\ub85c \ubb36\uae30",id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ubcc0\ud658-\ud568\uc218\ub85c-\ubb36\uae30",children:[]},{value:"\ub2e8\uacc4 \ucabc\uac1c\uae30",id:"\ub2e8\uacc4-\ucabc\uac1c\uae30-1",children:[]}]},{value:"3.9 \uae30\ub2a5 \ud3b8\uc560",id:"39-\uae30\ub2a5-\ud3b8\uc560",children:[{value:"\ud568\uc218 \uc62e\uae30\uae30",id:"\ud568\uc218-\uc62e\uae30\uae30-1",children:[]}]},{value:"3.10 \ub370\uc774\ud130 \ubb49\uce58",id:"310-\ub370\uc774\ud130-\ubb49\uce58",children:[{value:"\ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30",id:"\ud074\ub798\uc2a4-\ucd94\ucd9c\ud558\uae30-1",children:[]},{value:"\ub9e4\uac1c\ubcc0\uc218 \uac1d\uccb4 \ub9cc\ub4e4\uae30, \uac1d\uccb4 \ud1b5\uc9f8\ub85c \ub118\uae30\uae30",id:"\ub9e4\uac1c\ubcc0\uc218-\uac1d\uccb4-\ub9cc\ub4e4\uae30-\uac1d\uccb4-\ud1b5\uc9f8\ub85c-\ub118\uae30\uae30",children:[]}]},{value:"3.11 \uae30\ubcf8\ud615 \uc9d1\ucc29",id:"311-\uae30\ubcf8\ud615-\uc9d1\ucc29",children:[]},{value:"3.12 \ubc18\ubcf5\ub418\ub294 switch\ubb38",id:"312-\ubc18\ubcf5\ub418\ub294-switch\ubb38",children:[]}],c={toc:o};function h(t){var e=t.components,l=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3\uc7a5-\ucf54\ub4dc\uc5d0\uc11c-\ub098\ub294-\uc545\ucde8-\u4e0a"},"3\uc7a5 \ucf54\ub4dc\uc5d0\uc11c \ub098\ub294 \uc545\ucde8 \u4e0a"),(0,a.kt)(u.Z,{bookLeader:"Mengkki",mdxType:"Authors"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ub9ac\ud329\ud1a0\ub9c1\uc744 \uc5b8\uc81c \ud574\uc57c\ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\ub098?\n\ucf54\ub4dc\uc5d0\uc11c \ub0c4\uc0c8\uac00 \ub0a0 \ub54c\ub2e4...!")),(0,a.kt)("p",null,"\uc219\ub828\ub41c \uac1c\ubc1c\uc790\uc758 \uac10\ub9cc\ud07c \uc815\ud655\ud55c \uae30\uc900\uc740 \uc5c6\ub2e4. ",(0,a.kt)("del",{parentName:"p"},"\uc2dc\ucf1c\uc918...\ube61\uc219 \uac1c\ubc1c\uc790")),(0,a.kt)("p",null,"\uc778\uc2a4\ud134\uc2a4 \ubcc0\uc218\ub294 \uba87 \uac1c\uac00 \uc801\ub2f9\ud55c\uc9c0, \uba54\uc11c\ub4dc\ub294 \uba87\uc904\uc744 \ub118\uc5b4\uac00\uba74 \uc548 \uc88b\uc740\uc9c0 \ub4f1\uc740 \uac01\uc790 \uacbd\ud5d8\uc744 \ud1b5\ud574 \uac10\uc744 \ud0a4\uc6cc\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"\uc6b0\uc120 \uc774\ubc88 \ucc55\ud130\ub97c \ud1b5\ud574 \ucf54\ub4dc\uac00 \ud48d\uae30\ub294 \ub0c4\uc0c8\uac00 \ubb34\uc5c7\uc778\uc9c0 \ucc3e\uace0, \ud574\ubc95\uc73c\ub85c \uc81c\uc2dc\ud55c \ub9ac\ud329\ud130\ub9c1 \uae30\ubc95\uc744 \ucc3e\uc544 \ub0c4\uc0c8\ub97c \uc5c6\uc560\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub420 \uc9c0 \uc0dd\uac01\ud574\ubcf4\ub3c4\ub85d \ud558\uc790"),(0,a.kt)("h2",{id:"31-\uae30\uc774\ud55c-\uc774\ub984"},"3.1 \uae30\uc774\ud55c \uc774\ub984"),(0,a.kt)("p",null,"\ucf54\ub4dc\ub97c \uba85\ub8cc\ud558\uac8c \ud45c\ud604\ud558\ub294 \ub370 \uac00\uc7a5 \uc911\uc694\ud55c \uc694\uc18c \ud558\ub098\ub294 \ubc14\ub85c \uc774\ub984\uc774\ub2e4. \ud568\uc218, \ubaa8\ub4c8, \ubcc0\uc218, \ud074\ub798\uc2a4 \ub4f1\uc740 \uadf8 \uc774\ub984\ub9cc \ubcf4\uace0\ub3c4 \uac01\uac01 \ubb34\uc2a8 \uc77c\uc744 \ud558\uace0 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\uc9c0 \uba85\ud655\ud788 \uc54c \uc218 \uc788\ub3c4\ub85d \uc2e0\uacbd\uc368\uc11c \uc774\ub984\uc744 \uc9c0\uc5b4\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774\ub984 \uc9d3\uae30\ub294 \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \uac00\uc7a5 \uc5b4\ub824\uc6b4 \ub450\uac00\uc9c0 \uc911 \ud558\ub098\ub2e4. \uadf8 \ub54c\ubb38\uc5d0 \uc6b0\ub9ac\uac00 \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ud558\ub294 \ub9ac\ud329\ud130\ub9c1\ub3c4 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud568\uc218 \uc120\uc5b8 \ubc14\uafb8\uae30"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubcc0\uc218 \uc774\ub984 \ubc14\uafb8\uae30"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud544\ub4dc \uc774\ub984 \ubc14\uafb8\uae30")," \ucc98\ub7fc \uc774\ub984\uc744 \ubc14\uafb8\ub294 \ub9ac\ud329\ud130\ub9c1\ub4e4\uc774\ub2e4."),(0,a.kt)("p",null,"\uc774\ub984 \ubc14\uafb8\uae30\ub294 \ub2e8\uc21c\ud788 \uc774\ub984\uc744 \ub2e4\ub974\uac8c \ud45c\ud604\ud558\ub294 \uc5f0\uc2b5\uc774 \uc544\ub2c8\ub2e4. \ub9c8\ub545\ud55c \uc774\ub984\uc774 \ub5a0\uc624\ub974\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc124\uacc4\uc5d0 \ub354 \uadfc\ubcf8\uc801\uc778 \ubb38\uc81c\uac00 \uc228\uc5b4 \uc788\uc744 \uac00\ub2a5\uc131\uc774 \ub192\ub2e4. \uadf8\ub798\uc11c \ud63c\ub780\uc2a4\ub7ec\uc6b4 \uc774\ub984\uc744 \uc798 \uc815\ub9ac\ud558\uba74 \ucf54\ub4dc\uac00 \ud6e8\uc52c \uac04\uacb0\ud574\uc9c8 \ub54c\uac00 \ub9ce\ub2e4."),(0,a.kt)("h2",{id:"32-\uc911\ubcf5-\ucf54\ub4dc"},"3.2 \uc911\ubcf5 \ucf54\ub4dc"),(0,a.kt)("p",null,"\ub611\uac19\uc740 \ucf54\ub4dc \uad6c\uc870\uac00 \uc5ec\ub7ec \uacf3\uc5d0\uc11c \ubc18\ubcf5\ub41c\ub2e4\uba74 \ud558\ub098\ub85c \ud1b5\ud569\ud558\uc5ec \ub354 \ub098\uc740 \ud504\ub85c\uadf8\ub7a8\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4. \ucf54\ub4dc\uac00 \uc911\ubcf5\ub418\uba74 \uac01\uac01\uc744 \ubcfc\ub54c\ub9c8\ub2e4 \uc11c\ub85c \ucc28\uc774\uc810\uc740 \uc5c6\ub294\uc9c0 \uc8fc\uc758 \uae4a\uac8c \uc0b4\ud3b4\ubd10\uc57c \ud558\ub294 \ubd80\ub2f4\uc774 \uc0dd\uae34\ub2e4."),(0,a.kt)("p",null,"\ud55c \ud074\ub798\uc2a4\uc5d0\uc11c \ub450 \uba54\uc11c\ub4dc\uac00 \ub611\uac19\uc740 \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\ub2e4. \uc774\ub7f4 \ub54c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30")," \ub97c \uc368\uc11c \uc591\ucabd \ubaa8\ub450 \ucd94\ucd9c\ud55c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uac8c \ubc14\uafb8\uba74 \ub41c\ub2e4."),(0,a.kt)("p",null,"\ucf54\ub4dc\uac00 \ube44\uc2b7\ud55c\ub370 \uc644\uc804\ud788 \ub611\uac19\uc9c0\ub294 \uc54a\ub2e4\uba74, \uba3c\uc800 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubb38\uc7a5 \uc2ac\ub77c\uc774\ub4dc\ud558\uae30")," \ub85c \ube44\uc2b7\ud55c \ubd80\ubd84\uc744 \ud55c \uacf3\uc5d0 \ubaa8\uc544 \ud568\uc218 \ucd94\ucd9c\ud558\uae30\ub97c \ub354 \uc27d\uac8c \uc801\uc6a9\ud560 \uc218 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubcf8\ub2e4. \uac19\uc740 \ubd80\ubaa8\ub85c\ubd80\ud130 \ud30c\uc0dd\ub41c \uc11c\ube0c\ud074\ub798\uc2a4\ub4e4\uc5d0 \ucf54\ub4dc\uac00 \uc911\ubcf5\ub418\uc5b4 \uc788\ub2e4\uba74, \uac01\uc790 \ub530\ub85c \ud638\ucd9c\ub418\uc9c0 \uc54a\ub3c4\ub85d ",(0,a.kt)("inlineCode",{parentName:"p"},"\uba54\uc11c\ub4dc \uc62c\ub9ac\uae30"),"\ub97c \uc801\uc6a9\ud574 \ubd80\ubaa8\ub85c \uc62e\uae34\ub2e4."),(0,a.kt)("h2",{id:"33-\uae34-\ud568\uc218"},"3.3 \uae34 \ud568\uc218"),(0,a.kt)("p",null,"\uc120\uc0dd\ub2d8\ub4e4\uc758 \uc624\ub79c \uacbd\ud5d8\uc5d0 \ube44\ucd94\uc5b4\ubcf4\uc558\uc744 \ub54c, \uc624\ub79c \uae30\uac04 \uc798 \ud65c\uc6a9\ub418\ub294 \ud504\ub85c\uadf8\ub7a8\ub4e4\uc740 \ud558\ub098\uac19\uc774 \uc9e7\uc740 \ud568\uc218\ub4e4\ub85c \uad6c\uc131\uc774 \ub418\uc5b4 \uc788\ub2e4."),(0,a.kt)("p",null,"Q. \ucf54\ub4dc \uc77d\ub294 \uc0ac\ub78c \uc785\uc7a5\uc5d0\uc11c\ub294 \uc9e7\uc740 \ud568\uc218 \uc5ec\ub7ec\uac1c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc73c\uba74 \uc77d\uc744\ub54c \uc654\ub2e4\uac14\ub2e4 \ud574\uc57c\ud574\uc11c \ubd80\ub2f4\uc2a4\ub7fd\uc9c0 \uc54a\ub098\uc694?"),(0,a.kt)("p",null,"A. \ud568\uc218 \uc774\ub984\uc744 \uc798 \uc9c0\uc73c\uba74 \ud568\uc218\uc758 \ubcf8\ubb38\uc744 \uc77d\uc744 \ud544\uc694\uac00 \uc5c6\uc5b4\uc694 ^^"),(0,a.kt)("p",null,"\ud568\uc218 \uc774\ub984\uc744 \uc798 \uc9d3\uae30 \uc704\ud574\uc11c\ub294 \ud6e8\uc52c \uc801\uadf9\uc801\uc73c\ub85c \ud568\uc218\ub97c \ucabc\uac1c\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"\uc8fc\uc11d\uc744 \ub2ec\uc544\uc57c \ud560 \ub9cc\ud55c \ubd80\ubd84\uc740 \ubb34\uc870\uac74 \ud568\uc218\ub85c \ub9cc\ub4e0\ub2e4. \ud568\uc218\uc758 \uc774\ub984\uc740 \ucf54\ub4dc\uc758 \ubaa9\uc801\uc774 \uc798 \ub4dc\ub7ec\ub098\uac8c \uc9d3\uace0, \ubcf8\ubb38\uc5d0\ub294 \uc8fc\uc11d\uc73c\ub85c \uc124\uba85\ud558\ub824\ub294 \ubd80\ubd84\uc744 \ub2f4\uc790"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 '\ubb34\uc5c7\uc744 \ud558\ub294\uc9c0'\ub97c \ucf54\ub4dc\uac00 \uc798 \uc124\uba85\ud574\uc8fc\uc9c0 \ubabb\ud560\uc218\ub85d \ud568\uc218\ub85c \ub9cc\ub4dc\ub294 \uac8c \uc720\ub9ac\ud558\ub2e4.")),(0,a.kt)("p",null,"\ud568\uc218\ub97c \uc9e7\uac8c \ub9cc\ub4dc\ub294 \uc791\uc5c5\uc758 99%\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30")," \uac00 \ucc28\uc9c0\ud55c\ub2e4. \ubcf8\ubb38\uc5d0\uc11c \ub530\ub85c \ubb36\uc5b4 \ube7c\ub0b4\uba74 \uc88b\uc740 \ucf54\ub4dc \ub369\uc5b4\ub9ac\ub97c \ucc3e\uc544 \uc0c8\ub85c\uc6b4 \ud568\uc218\ub85c \ub9cc\ub4dc\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\uadf8 \ub369\uc5b4\ub9ac\ub294 \uc5b4\ucf00 \ucc3e\ub098\uc694? \uc77c\ub2e8 \uc774\uce5c\uad6c\ub4e4\uc744 \uc758\uc2ec\ud574\ubcf4\uc138\uc694!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc8fc\uc11d\n\ud55c\uc904\uc758 \ucf54\ub4dc\ub354\ub77c\ub3c4 \ud568\uc218\ub85c \ucd94\ucd9c\ud558\ub294 \uac83\uc774 \ub0ab\ub2e4. \ud568\uc218 \uc774\ub984\uc740 \uc8fc\uc11d \ub0b4\uc6a9 \ud1a0\ub300\ub85c \uc9d3\uae30!"),(0,a.kt)("li",{parentName:"ul"},"\uc870\uac74\ubb38\n",(0,a.kt)("inlineCode",{parentName:"li"},"\uc870\uac74\ubb38 \ubd84\uc1c4\ud558\uae30"),"\ub098, \uac70\ub300\ud55c switch\ubb38\uc740 case\ub9c8\ub2e4 ",(0,a.kt)("inlineCode",{parentName:"li"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30,")," \uac19\uc740 \uc870\uac74\uc744 \uae30\uc900\uc73c\ub85c \ub098\ub258\ub294 switch\ubb38\uc774 \uc5ec\ub7ec\uac1c\ub77c\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"\uc870\uac74\ubb38\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30")),(0,a.kt)("li",{parentName:"ul"},"\ubc18\ubcf5\ubb38\n",(0,a.kt)("inlineCode",{parentName:"li"},"\ubc18\ubcf5\ubb38 \ucabc\uac1c\uae30"))),(0,a.kt)("h2",{id:"34-\uae34-\ub9e4\uac1c\ubcc0\uc218-\ubaa9\ub85d"},"3.4 \uae34 \ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d"),(0,a.kt)("p",null,"\ud568\uc218\uac00 \ubc30\uac1c\ubcc0\uc218\ub85c \ubc1b\ub294 \uac83\ub4e4\uc774 \ub9ce\uc544\uc9c4\ub2e4\uba74 \uadf8 \uc790\uccb4\ub85c \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6cc\uc9c8 \uc218 \uc788\ub2e4. \uc904\uc5ec\ubd05\uc2dc\ub2e4~"),(0,a.kt)("h3",{id:"\ub9e4\uac1c\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30"},"\ub9e4\uac1c\ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30"),(0,a.kt)("p",null,"\ub2e4\ub978 \ub9e4\uac1c\ubcc0\uc218\uc5d0\uc11c \uac12\uc744 \uc5bb\uc5b4\uc62c \uc218 \uc788\ub294 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc788\ub294 \uacbd\uc6b0"),(0,a.kt)("h3",{id:"\uac1d\uccb4-\ud1b5\uc9f8\ub85c-\ub118\uae30\uae30"},"\uac1d\uccb4 \ud1b5\uc9f8\ub85c \ub118\uae30\uae30"),(0,a.kt)("p",null,"\uc5b4\ub290 \ub370\uc774\ud130 \uad6c\uc870\uc5d0\uc11c \uac12\ub4e4\uc744 \ubf51\uc544 \uac01\uac01\uc744 \ubcc4\uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218\ub85c \uc4f0\uace0 \uc788\ub294 \uacbd\uc6b0"),(0,a.kt)("h3",{id:"\ub9e4\uac1c\ubcc0\uc218-\uac1d\uccb4-\ub9cc\ub4e4\uae30"},"\ub9e4\uac1c\ubcc0\uc218 \uac1d\uccb4 \ub9cc\ub4e4\uae30"),(0,a.kt)("p",null,"\ud56d\uc0c1 \ud568\uaed8 \uc804\ub2ec\ub418\ub294 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc788\ub294 \uacbd\uc6b0"),(0,a.kt)("h3",{id:"\ud50c\ub798\uadf8-\uc778\uc218-\uc81c\uac70\ud558\uae30"},"\ud50c\ub798\uadf8 \uc778\uc218 \uc81c\uac70\ud558\uae30"),(0,a.kt)("p",null,"\ud568\uc218\uc758 \ub3d9\uc791 \ubc29\uc2dd\uc744 \uc815\ud558\ub294 \ud50c\ub798\uadf8 \uc5ed\ud560\uc758 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc788\ub294 \uacbd\uc6b0"),(0,a.kt)("h3",{id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ud074\ub798\uc2a4\ub85c-\ubb36\uae30"},"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30"),(0,a.kt)("p",null,"\uc5ec\ub7ec \ud568\uc218\uac00 \ud2b9\uc815 \ub9e4\uac1c\ubcc0\uc218\ub4e4\uc758 \uac12\uc744 \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"),(0,a.kt)("h2",{id:"35-\uc804\uc5ed-\ub370\uc774\ud130"},"3.5 \uc804\uc5ed \ub370\uc774\ud130"),(0,a.kt)("p",null,"\uc774\ub140\uc11d\uc774 \ubfdc\ub294 \uc545\ucde8\ub294 \uc6b0\ub9ac\uac00 \uacaa\uc744 \uc218 \uc788\ub294 \uc545\ucde8 \uc911 \uac00\uc7a5 \uc9c0\ub3c5\ud55c \ud3b8\uc5d0 \uc18d\ud55c\ub2e4\uace0 \ud55c\ub2e4...."),(0,a.kt)("p",null,"\uc804\uc5ed \ub370\uc774\ud130\ub294 \ucf54\ub4dc\ubca0\uc774\uc2a4 \uc5b4\ub514\uc11c\ub4e0 \uac74\ub4dc\ub9b4 \uc218 \uc788\uace0 \uac12\uc744 \ub204\uac00 \ubc14\uafe8\ub294\uc9c0 \ucc3e\uc544\ub0bc \ub9e4\ucee4\ub2c8\uc998\uc774 \uc5c6\ub2e4\ub294 \uac8c \ubb38\uc81c\ub2e4."),(0,a.kt)("p",null,"\uc804\uc5ed \ub370\uc774\ud130\uc758 \ub300\ud45c\uc801\uc778 \ud615\ud0dc\ub294 \uc804\uc5ed \ubcc0\uc218\uc9c0\ub9cc \ud074\ub798\uc2a4 \ubcc0\uc218\uc640 \uc2f1\ud074\ud1a4\uc5d0\uc11c\ub3c4 \uac19\uc740 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("p",null,"\uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud558\ub294 \uac00\uc7a5 \ub300\ud45c\uc801\uc778 \ub9ac\ud329\ud130\ub9c1\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubcc0\uc218 \ucea1\uc290\ud654\ud558\uae30")," \ub2e4. \ub2e4\ub978 \ucf54\ub4dc\uc5d0\uc11c \uc624\uc5fc\uc2dc\ud0ac \uac00\ub2a5\uc131\uc774 \uc788\ub294 \ub370\uc774\ud130\ub97c \ubc1c\uacac\ud560 \ub54c\ub9c8\ub2e4 \uc774 \uae30\ubc95\uc744 \uac00\uc7a5 \uba3c\uc800 \uc801\uc6a9\ud55c\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7f0 \ub370\uc774\ud130\ub294 \ud568\uc218\ub85c \uac10\uc2f8\ub294 \uac83 \ub9cc\uc73c\ub85c\ub3c4 \ub370\uc774\ud130\ub97c \uc218\uc815\ud558\ub294 \ubd80\ubd84\uc744 \uc27d\uac8c \ucc3e\uc744 \uc218 \uc788\uace0 \uc811\uadfc\uc744 \ud1b5\uc81c\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4."),(0,a.kt)("h2",{id:"36-\uac00\ubcc0-\ub370\uc774\ud130"},"3.6 \uac00\ubcc0 \ub370\uc774\ud130"),(0,a.kt)("p",null,"mutable data \ub77c\ub294 \uc601\uc81c\uc5d0\uc11c \uc720\ucd94\ud574\ub0bc \uc218 \uc788\ub4ef\uc774...\uc720\ub0a8\uc0dd? \uc774\ub140\uc11d\ub3c4 \ub0c4\uc0c8\uac00 \uace0\uc57d\ud558\ub2e4."),(0,a.kt)("p",null,"\uac00\ubcc0 \ub370\uc774\ud130\uc758 \uc720\ud6a8\ubc94\uc704\uac00 \ub2e8 \uba87 \uc904\uc774\ub77c\uba74 \uac00\ubcc0 \ub370\uc774\ud130\ub77c \ud574\ub3c4 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc77c\uc774 \ubcc4\ub85c \uc5c6\ub2e4. \ud558\uc9c0\ub9cc \ub098\uc911\uc5d0 \uc720\ud6a8\ubc94\uc704\uac00 \ub113\uc5b4\uc9c8 \uc218 \uc788\uace0, \uadf8\ub7ec\uba74 \uc704\ud5d8\ub3c4 \ub369\ub2ec\uc544 \ucee4\uc9c4\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc... \ubb34\ubd84\ubcc4\ud55c \ub370\uc774\ud130 \uc218\uc815\uc5d0 \ub530\ub978 \uc704\ud5d8\uc744 \uc904\uc774\ub294 \ubc29\ubc95\uc740 \uc5bc\ub9c8\ub4e0\uc9c0 \uc788\ub2e4!"),(0,a.kt)("h3",{id:"\ubcc0\uc218-\ucea1\uc290\ud654\ud558\uae30"},"\ubcc0\uc218 \ucea1\uc290\ud654\ud558\uae30"),(0,a.kt)("p",null,"\uc815\ud574\ub193\uc740 \ud568\uc218\ub97c \uac70\uccd0\uc57c\ub9cc \uac12\uc744 \uc218\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4. \uac12\uc774 \uc5b4\ub5bb\uac8c \uc218\uc815\ub418\ub294\uc9c0 \uac10\uc2dc\ud558\uac70\ub098 \ucf54\ub4dc\ub97c \uac1c\uc120\ud558\uae30 \uc27d\ub2e4."),(0,a.kt)("h3",{id:"\ubcc0\uc218-\ucabc\uac1c\uae30"},"\ubcc0\uc218 \ucabc\uac1c\uae30"),(0,a.kt)("p",null,"\ud558\ub098\uc758 \ubcc0\uc218\uc5d0 \uc6a9\ub3c4\uac00 \ub2e4\ub978 \uac12\ub4e4\uc744 \uc800\uc7a5\ud558\ub290\ub77c \uac12\uc744 \uac31\uc2e0\ud558\ub294 \uacbd\uc6b0\ub77c\uba74 \uc774\uac83\uc744! \uc6a9\ub3c4\ubcc4\ub85c \ub3c5\ub9bd \ubcc0\uc218\uc5d0 \uc800\uc7a5\ud558\uac8c \ud558\uc5ec \uac12 \uac31\uc2e0\uc774 \ubb38\uc81c\ub97c \uc77c\uc73c\ud0ac \uc5ec\uc9c0\ub97c \uc5c6\uc564\ub2e4"),(0,a.kt)("h3",{id:"\ubb38\uc7a5-\uc2ac\ub77c\uc774\ub4dc-\ud558\uae30-\ud568\uc218-\ucd94\ucd9c\ud558\uae30"},"\ubb38\uc7a5 \uc2ac\ub77c\uc774\ub4dc \ud558\uae30, \ud568\uc218 \ucd94\ucd9c\ud558\uae30"),(0,a.kt)("p",null,"\uac31\uc2e0 \ub85c\uc9c1\uc740 \ub2e4\ub978 \ucf54\ub4dc\uc640 \ub5a8\uc5b4\ub728\ub824\ub193\ub294 \uac83\uc774 \uc88b\ub2e4. \ubb34\uc5b8\uac00\ub97c \uac31\uc2e0\ud558\ub294 \ucf54\ub4dc\ub85c\ubd80\ud130 \ubd80\uc791\uc6a9\uc774 \uc5c6\ub294 \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud55c\ub2e4"),(0,a.kt)("h3",{id:"\uc9c8\uc758-\ud568\uc218\uc640-\ubcc0\uacbd-\ud568\uc218-\ubd84\ub9ac\ud558\uae30"},"\uc9c8\uc758 \ud568\uc218\uc640 \ubcc0\uacbd \ud568\uc218 \ubd84\ub9ac\ud558\uae30"),(0,a.kt)("p",null,"API\ub97c \ub9cc\ub4e4\ub54c\ub294 \uc774\uac83\uc744 \ud65c\uc6a9\ud574 \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \uc544\ub2c8\ub77c\uba74 \ubd80\uc791\uc6a9\uc774 \uc788\ub294 \ucf54\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc5c6\uac8c \ud55c\ub2e4."),(0,a.kt)("h3",{id:"\uc138\ud130-\uc81c\uac70\ud558\uae30"},"\uc138\ud130 \uc81c\uac70\ud558\uae30"),(0,a.kt)("p",null,"\uac04\ud639 \uc138\ud130\ub97c \ud638\ucd9c\ud558\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ucc3e\ub294 \uac83\ub9cc\uc73c\ub85c\ub3c4 \ubcc0\uc218\uc758 \uc720\ud6a8\ubc94\uc704\ub97c \uc904\uc774\ub294 \ub370 \ub3c4\uc6c0\ub420 \ub54c\uac00 \uc788\ub2e4."),(0,a.kt)("h3",{id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ud074\ub798\uc2a4\ub85c-\ubb36\uae30-\uc5ec\ub7ec-\ud568\uc218\ub97c-\ubcc0\ud658-\ud568\uc218\ub85c-\ubb36\uae30"},"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30, \uc5ec\ub7ec \ud568\uc218\ub97c \ubcc0\ud658 \ud568\uc218\ub85c \ubb36\uae30"),(0,a.kt)("p",null,"\ubcc0\uc218\ub97c \uac31\uc2e0\ud558\ub294 \ucf54\ub4dc\ub4e4\uc758 \uc720\ud6a8\ubc94\uc704\ub97c \ud074\ub798\uc2a4 \ub0b4\ubd80\ub85c \uc81c\ud55c\ud55c\ub2e4."),(0,a.kt)("h2",{id:"37-\ub4a4\uc5c9\ud0a8-\ubcc0\uacbd"},"3.7 \ub4a4\uc5c9\ud0a8 \ubcc0\uacbd"),(0,a.kt)("p",null,"\uc6b0\ub9ac\ub294 \ucf54\ub4dc\ub97c \uc218\uc815\ud560 \ub54c\ub294 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uace0\uccd0\uc57c \ud560 \ub531 \ud55c\uad70\ub370\ub97c \ucc3e\uc544\uc11c \uadf8\ubd80\ubd84\ub9cc \uc218\uc815\ud560 \uc218 \uc788\uae30\ub97c \ubc14\ub780\ub2e4."),(0,a.kt)("p",null,"\ub9cc\uc57d \uadf8\ub807\uac8c \ud560 \uc218 \uc5c6\ub2e4\uba74... \ub0c4\uc0c8\uac00 \ub098\ub294\uac70\ub2e4. \ub4a4\uc5c9\ud0a8 \ubcc0\uacbd\uacfc ",(0,a.kt)("a",{href:"./chapter_3-1#38-\uc0b0\ud0c4\ucd1d-\uc218\uc220"},"\uc0b0\ud0c4\ucd1d \uc218\uc220")," \uc758 \ub0c4\uc0c8\uac00..."),(0,a.kt)("p",null,"\ub4a4\uc5c9\ud0a8 \ubcc0\uacbd\uc740 \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP)\uc774 \uc81c\ub300\ub85c \uc9c0\ucf1c\uc9c0\uc9c0 \uc54a\uc744 \ub54c \ub098\ud0c0\ub09c\ub2e4. \uc608\ub97c\ub4e4\uba74"),(0,a.kt)("p",null,"DB\uac00 \ucd94\uac00\ub420 \ub54c\ub9c8\ub2e4 \ud568\uc218 3\uac1c\ub97c \ubc14\uafd4\uc57c \ud558\uace0, \uae08\uc735\uc0c1\ud488\uc774 \ucd94\uac00\ub420\ub54c\ub9c8\ub2e4 \ub610\ub2e4\ub978 \ud568\uc218 4\uac1c\ub97c \ubc14\uafd4\uc57c \ud558\ub294 \ubaa8\ub4c8\uc774 \uc788\ub2e4\uba74 \ub4a4\uc5c9\ud0a8 \ubcc0\uacbd\uc774 \ubc1c\uc0dd\ud588\ub2e4\ub294 \ub73b\uc774\ub2e4!"),(0,a.kt)("p",null,"DB\uc640 \uae08\uc735 \uc0c1\ud488\uc740 \ub2e4\ub978 \ub9e5\ub77d\uc5d0\uc11c \uc774\ub904\uc9c0\ubbc0\ub85c \ub2e4\ub978 \ubaa8\ub4c8\ub85c \ubd84\ub9ac\ud574\uc57c \ud3b8\ud558\ub2e4."),(0,a.kt)("p",null,"\uac1c\ubc1c \ucd08\uae30\uc5d0\ub294 \ub9e5\ub77d \uac04\uc758 \uacbd\uacc4\ub97c \ub098\ub204\uae30 \uc5b4\ub835\uace0 \uae30\ub2a5\uc774 \ubcc0\uacbd\ub418\uba74\uc11c \uacbd\uacc4\ub3c4 \ub04a\uc784\uc5c6\uc774 \uc6c0\uc9c1\uc774\uae30 \ub54c\ubb38\uc5d0 \ub098\uc911\uc5d0\uc11c\uc57c \uc774 \uc545\ucde8\ub97c \ub290\ub07c\ub294 \uacbd\uc6b0\ub3c4 \ub9ce\ub2e4."),(0,a.kt)("h3",{id:"\ub2e8\uacc4-\ucabc\uac1c\uae30"},"\ub2e8\uacc4 \ucabc\uac1c\uae30"),(0,a.kt)("p",null,"DB\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc11c \uae08\uc735 \ub85c\uc9c1\uc744 \ucc98\ub9ac\ud574\uc57c \ud558\ub294 \uc77c\ucc98\ub7fc \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uac8c \uc790\uc5f0\uc2a4\ub7ec\uc6b4 \ub9e5\ub77d\uc774\ub77c\uba74, \ub2e4\uc74c \ub9e5\ub77d\uc5d0 \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \ud2b9\uc815\ud55c \ub370\uc774\ud130 \uad6c\uc870\uc5d0 \ub2f4\uc544 \uc804\ub2ec\ud558\uac8c \ud558\ub294 \uc2dd\uc73c\ub85c \ub2e8\uacc4\ub97c \ubd84\ub9ac\ud558\uc790"),(0,a.kt)("h3",{id:"\ud568\uc218-\uc62e\uae30\uae30"},"\ud568\uc218 \uc62e\uae30\uae30"),(0,a.kt)("p",null,"\uc804\uccb4 \ucc98\ub9ac \uacfc\uc815 \uacf3\uacf3\uc5d0\uc11c \uac01\uae30 \ub2e4\ub978 \ub9e5\ub77d\uc758 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ube48\ub3c4\uac00 \ub192\ub2e4\uba74, \uac01 \ub9e5\ub77d\uc5d0 \ud574\ub2f9\ud558\ub294 \uc801\ub2f9\ud55c \ubaa8\ub4c8\uc744 \ub9cc\ub4e4\uc5b4\uc11c \uad00\ub828 \ud568\uc218\ub4e4\uc744 \ubaa8\uc740\ub2e4. \uadf8\ub7ec\uba74 \ucc98\ub9ac \uacfc\uc815\uc774 \ub9e5\ub77d\ubcc4\ub85c \uad6c\ubd84\ub41c\ub2e4."),(0,a.kt)("h3",{id:"\ud568\uc218-\ucd94\ucd9c\ud558\uae30"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30"),(0,a.kt)("p",null,"\uc5ec\ub7ec \ub9e5\ub77d\uc758 \uc77c\uc5d0 \uad00\uc5ec\ud558\ub294 \ud568\uc218\uac00 \uc788\ub2e4\uba74 \ud568\uc218 \uc62e\uae30\uae30\ub97c \ud558\uae30 \uc804\uc5d0 \ud568\uc218 \ucd94\ucd9c\ud558\uae30\ubd80\ud130 \uc218\ud589\ud55c\ub2e4."),(0,a.kt)("h3",{id:"\ud074\ub798\uc2a4-\ucd94\ucd9c\ud558\uae30"},"\ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30"),(0,a.kt)("p",null,"\ubaa8\ub4c8\uc774 \ud074\ub798\uc2a4\ub77c\uba74 \ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30\uac00 \ub9e5\ub77d\ubcc4 \ubd84\ub9ac \ubc29\ubc95\uc744 \uc798 \uc548\ub0b4\ud574\uc904 \uac70\ub798\uc694..."),(0,a.kt)("h2",{id:"38-\uc0b0\ud0c4\ucd1d-\uc218\uc220"},"3.8 \uc0b0\ud0c4\ucd1d \uc218\uc220"),(0,a.kt)("p",null,"\uc0b0\ud0c4\ucd1d \uc218\uc220\uc740 \ub4a4\uc5c9\ud0a8 \ubcc0\uacbd\uacfc \ube44\uc2b7\ud558\uba74\uc11c \uc815\ubc18\ub300\ub2e4"),(0,a.kt)("p",null,"\uc774 \ub0c4\uc0c8\ub294 \ucf54\ub4dc\ub97c \ubcc0\uacbd\ud560 \ub54c\ub9c8\ub2e4 \uc790\uc798\ud558\uac8c \uc218\uc815\ud574\uc57c \ud558\ub294 \ud074\ub798\uc2a4\uac00 \ub9ce\uc744 \ub54c \ud48d\uae34\ub2e4."),(0,a.kt)("p",null,"\ubcc0\uacbd\ud560 \ubd80\ubd84\uc774 \ucf54\ub4dc \uc804\ubc18\uc5d0 \ud37c\uc838 \uc788\ub2e4\uba74 \ucc3e\uae30\ub3c4 \uc5b4\ub835\uace0 \uaf2d \uc218\uc815\ud574\uc57c \ud560 \uacf3\uc744 \uc9c0\ub098\uce58\uae30 \uc27d\ub2e4."),(0,a.kt)("h3",{id:"\ud568\uc218-\uc62e\uae30\uae30-\ud544\ub4dc-\uc62e\uae30\uae30"},"\ud568\uc218 \uc62e\uae30\uae30, \ud544\ub4dc \uc62e\uae30\uae30"),(0,a.kt)("p",null,"\ud568\uaed8 \ubcc0\uacbd\ub418\ub294 \ub300\uc0c1\ub4e4\uc744 \ubaa8\ub450 \ud55c \ubaa8\ub4c8\uc5d0 \ubb36\uc5b4\ub454\ub2e4"),(0,a.kt)("h3",{id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ud074\ub798\uc2a4\ub85c-\ubb36\uae30-1"},"\uc5ec\ub7ec \ud568\uc218\ub97c \ud074\ub798\uc2a4\ub85c \ubb36\uae30"),(0,a.kt)("p",null,"\ube44\uc2b7\ud55c \ub370\uc774\ud130\ub97c \ub2e4\ub8e8\ub294 \ud568\uc218\uac00 \ub9ce\ub2e4\uba74 \uc774\uac78 \uc801\uc6a9\ud558\uc790"),(0,a.kt)("h3",{id:"\uc5ec\ub7ec-\ud568\uc218\ub97c-\ubcc0\ud658-\ud568\uc218\ub85c-\ubb36\uae30"},"\uc5ec\ub7ec \ud568\uc218\ub97c \ubcc0\ud658 \ud568\uc218\ub85c \ubb36\uae30"),(0,a.kt)("p",null,"\ub370\uc774\ud130 \uad6c\uc870\ub97c \ubcc0\ud658\ud558\uac70\ub098 \ubcf4\uac15\ud558\ub294 \ud568\uc218\ub4e4\uc5d0\ub294 \uc774\uac78 \uc801\uc6a9\ud55c\ub2e4"),(0,a.kt)("h3",{id:"\ub2e8\uacc4-\ucabc\uac1c\uae30-1"},"\ub2e8\uacc4 \ucabc\uac1c\uae30"),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ubb36\uc740 \ud568\uc218\ub4e4\uc758 \ucd9c\ub825 \uacb0\uacfc\ub97c \ubb36\uc5b4\uc11c \ub2e4\uc74c \ub2e8\uacc4\uc758 \ub85c\uc9c1\uc73c\ub85c \uc804\ub2ec\ud560 \uc218 \uc788\ub2e4\uba74 \uc774\uac78 \uc801\uc6a9\ud55c\ub2e4"),(0,a.kt)("h2",{id:"39-\uae30\ub2a5-\ud3b8\uc560"},"3.9 \uae30\ub2a5 \ud3b8\uc560"),(0,a.kt)("p",null,"\ud504\ub85c\uadf8\ub7a8\uc744 \ubaa8\ub4c8\ud654\ud560 \ub54c\ub294 \ucf54\ub4dc\ub97c \uc5ec\ub7ec \uc601\uc5ed\uc73c\ub85c \ub098\ub208 \ub4a4 \ud55c \uc601\uc5ed \ub0b4\uc5d0\uc11c \uc774\ub904\uc9c0\ub294 \uc0c1\ud638\uc791\uc6a9\uc740 \ucd5c\ub300\ub85c, \uc601\uc5ed \uac04 \uc0c1\ud638\uc791\uc6a9\uc740 \ucd5c\uc18c\ub85c \uc904\uc774\ub294 \ub370 \uc8fc\ub825\ud55c\ub2e4."),(0,a.kt)("p",null,"\uae30\ub2a5 \ud3b8\uc560\ub294 \uc5b4\ub5a4 \ud568\uc218\uac00 \uc790\uae30\uac00 \uc18d\ud55c \ubaa8\ub4c8\uc758 \ud568\uc218\ub098 \ub370\uc774\ud130\ubcf4\ub2e4 \ub2e4\ub978 \ubaa8\ub4c8\uc758 \ud568\uc218\uc640 \ub370\uc774\ud130\uc640 \uc0c1\ud638\uc791\uc6a9\uc744 \ub354 \ub9ce\uc774 \ud560 \ub54c \ud48d\uae34\ub2e4."),(0,a.kt)("h3",{id:"\ud568\uc218-\uc62e\uae30\uae30-1"},"\ud568\uc218 \uc62e\uae30\uae30"),(0,a.kt)("p",null,"\uc6b0\ub9ac \ud568\uc218\uac00 \uc800 \ubaa8\ub4c8\uacfc \ub354 \uce5c\ud558\uac8c \uc9c0\ub0b4\ud558\uace0 \uc2f6\uc5b4\ud558\ub294 \uac83 \uac19\uc73c\ub2c8 \uadf8\ucabd\uc73c\ub85c \ubcf4\ub0b4\uc8fc\uc790... \uadf8 \ud568\uc218\uc758 \uc77c\ubd80\uc5d0\uc11c\ub9cc \uae30\ub2a5\uc744 \ud3b8\uc560\ud55c\ub2e4\uba74 \uadf8\ubd80\ubd84\ub9cc \ub3c5\ub9bd \ud568\uc218\ub85c \ub5bc\uc5b4\ub0b8 \ub2e4\uc74c\uc5d0 \ubcf4\ub0b4\uc8fc\uc790"),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774\ub7f0 \uae30\ub2a5 \ud3b8\uc560\ub97c \ubd80\ucd94\uae30\ub294 \ub514\uc790\uc778 \ud328\ud134\ub4e4\ub3c4 \uc788\ub2e4"),(0,a.kt)("p",null,"\ub514\uc790\uc778 \ud328\ud134 \uc911 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc804\ub7b5 \ud328\ud134")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"\ubc29\ubb38\uc790 \ud328\ud134"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc790\uae30 \uc704\uc784")," \ub4f1\ub3c4 \ub4a4\uc5c9\ud0a8 \ubcc0\uacbd \ub0c4\uc0c8\ub97c \uc5c6\uc568 \ub54c \ud65c\uc6a9\ud558\ub294 \ud328\ud134\uc778\ub370, \uc774\ub4e4\uc758 \uae30\ubcf8\uc774 \ub418\ub294 \uc6d0\uce59\uc740 \ud568\uaed8 \ubcc0\uacbd\ud560 \ub300\uc0c1\uc744 \ud55c\ub370 \ubaa8\uc73c\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7f0 \ud328\ud134\ub4e4\uc744 \uc801\uc6a9\ud558\uba74 \uc624\ubc84\ub77c\uc774\ub4dc \ud574\uc57c \ud560 \uc18c\ub7c9\uc758 \ub3d9\uc791 \ucf54\ub4dc\ub97c \uac01\uac01\uc758 \ud074\ub798\uc2a4\ub85c \uaca9\ub9ac\ud574\uc8fc\ubbc0\ub85c \uc218\uc815\ud558\uae30 \uc26c\uc6cc\uc9c0\uc9c0\ub9cc \uac04\uc811 \ud638\ucd9c\uc774 \ub298\uc5b4\ub09c\ub2e4"),(0,a.kt)("h2",{id:"310-\ub370\uc774\ud130-\ubb49\uce58"},"3.10 \ub370\uc774\ud130 \ubb49\uce58"),(0,a.kt)("p",null,"\ub370\uc774\ud130 \ud56d\ubaa9 \uc11c\ub108 \uac1c\uac00 \uc5ec\ub7ec \uacf3\uc5d0\uc11c \ud56d\uc0c1 \ubb49\uccd0 \ub2e4\ub2c8\ub294 \ubaa8\uc2b5\uc744 \ubcfc \uc218 \uc788\ub2e4. \uc774\ub807\uac8c \ubab0\ub824\ub2e4\ub2c8\ub294 \ub370\uc774\ud130 \ubb49\uce58\ub294 \ubcf4\uae08\uc790\ub9ac\ub97c \ub530\ub85c \ub9c8\ub828\ud574\uc918\uc57c \ud55c\ub2e4."),(0,a.kt)("p",null,"\ub370\uc774\ud130 \ubb49\uce58\uc778\uc9c0 \ud310\ubcc4\ud558\ub824\uba74 \uac12 \ud558\ub098\ub97c \uc0ad\uc81c\ud588\uc744 \ub54c \ub098\uba38\uc9c0 \ub370\uc774\ud130\ub9cc\uc73c\ub85c\ub294 \uc758\ubbf8\uac00 \uc5c6\ub2e4\uba74 \uac1d\uccb4\ub85c \ud658\uc0dd\ud558\uae38 \uac08\ub9dd\ud558\ub294 \ub370\uc774\ud130 \ubb49\uce58\ub77c\ub294 \ub73b\uc774\ub2e4!"),(0,a.kt)("h3",{id:"\ud074\ub798\uc2a4-\ucd94\ucd9c\ud558\uae30-1"},"\ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30"),(0,a.kt)("p",null,"\uc6b0\uc120 \ud544\ub4dc \ud615\ud0dc\uc758 \ub370\uc774\ud130 \ubb49\uce58\ub97c \ucc3e\uc544\uc11c \ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30\ub85c \ud558\ub098\uc758 \uac1d\uccb4\ub85c \ubb36\ub294\ub2e4."),(0,a.kt)("h3",{id:"\ub9e4\uac1c\ubcc0\uc218-\uac1d\uccb4-\ub9cc\ub4e4\uae30-\uac1d\uccb4-\ud1b5\uc9f8\ub85c-\ub118\uae30\uae30"},"\ub9e4\uac1c\ubcc0\uc218 \uac1d\uccb4 \ub9cc\ub4e4\uae30, \uac1d\uccb4 \ud1b5\uc9f8\ub85c \ub118\uae30\uae30"),(0,a.kt)("p",null,"\uba54\uc11c\ub4dc \uc2dc\uadf8\ub2c8\ucc98\uc5d0 \uc788\ub294 \ub370\uc774\ud130 \ubb49\uce58\ub294 \ub9e4\uac8c\ubcc0\uc218\ub294 \uc774 \ubc29\ubc95\ub4e4\uc744 \uc801\uc6a9\ud574\uc11c \ub9e4\uac1c\ubcc0\uc218 \uc218\ub97c \uc904\uc778\ub2e4. \uba54\uc11c\ub4dc \ud638\ucd9c \ucf54\ub4dc\uac00 \uac04\uacb0\ud574\uc9c8 \uac83\uc774\ub2e4."),(0,a.kt)("p",null,"\uae30\ub2a5 \ud3b8\uc560\ub97c \uc5c6\uc560\ub294 \uacfc\uc815\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5c8\ub2e4\uba74, \uc774\uc5b4\uc11c \uadf8 \ud074\ub798\uc2a4\ub85c \uc62e\uae30\uba74 \uc88b\uc744 \ub3d9\uc791\uc740 \uc5c6\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uc790."),(0,a.kt)("p",null,"\uc774\ub7f0 \uc5f0\uacc4 \uacfc\uc815\uc740 \uc0c1\ub2f9\ud55c \uc911\ubcf5\uc744 \uc5c6\uc560\uace0 \ud5a5\ud6c4 \uac1c\ubc1c\uc744 \uac00\uc18d\ud558\ub294 \uc720\uc6a9\ud55c \ud074\ub798\uc2a4\ub97c \ud0c4\uc0dd\uc2dc\ud0a4\ub294 \uacb0\uacfc\ub97c \ub0b3\ub294\ub2e4."),(0,a.kt)("h2",{id:"311-\uae30\ubcf8\ud615-\uc9d1\ucc29"},"3.11 \uae30\ubcf8\ud615 \uc9d1\ucc29"),(0,a.kt)("p",null,"\uae08\uc561\uc774\ub098 \uc804\ud654\ubc88\ud638\uac19\uc740 \ub370\uc774\ud130\ub97c \ub2e8\uc21c\ud788 number, string\uc73c\ub85c \ud45c\ud604\ud558\uc9c0 \ub9d0\uc790. \ub0c4\uc0c8\ub09c\ub2e4!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\uae30\ubcf8\ud615\uc744 \uac1d\uccb4\ub85c \ubc14\uafb8\uae30"),"\ub97c \uc801\uc6a9\ud574\uc11c \uc6b0\uac00\uc6b0\uac00 \uae30\ubcf8\ud615 \uc790\ub8cc\ud615\uc744 \ucd5c\uc2e0\ucf54\ub4dc\ub85c \ubc14\uafc0\uc218\uc788\ub2e4."),(0,a.kt)("p",null,"\uae30\ubcf8\ud615\uc73c\ub85c \ud45c\ud604\ub41c \ucf54\ub4dc\uac00 \uc870\uac74\ubd80 \ub3d9\uc791\uc744 \uc81c\uc5b4\ud558\ub294 \ud0c0\uc785 \ucf54\ub4dc\ub85c \uc4f0\uc600\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud0c0\uc785 \ucf54\ub4dc\ub97c \uc11c\ube0c\ud074\ub798\uc2a4\ub85c \ubc14\uafb8\uae30")," \uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc870\uac74\ubd80 \ub85c\uc9c1\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30")," \ub97c \ucc28\ub840\ub300\ub85c \uc801\uc6a9\ud558\uc790."),(0,a.kt)("p",null,"\uc790\uc8fc \ubab0\ub824\ub2e4\ub2c8\ub294 \uae30\ubcf8\ud615 \uadf8\ub8f9\ub3c4 \ub370\uc774\ud130 \ubb49\uce58\ub2e4. \ub530\ub77c\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"\ud074\ub798\uc2a4 \ucd94\ucd9c\ud558\uae30"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"\ub9e4\uac1c\ubcc0\uc218 \uac1d\uccb4 \ub9cc\ub4e4\uae30"),"\ub97c \uc774\uc6a9\ud574\uc11c \ubb38\uba85\uc73c\ub85c \uc774\ub04c\uc5b4\uc918\uc57c \ud55c\ub2e4"),(0,a.kt)("h2",{id:"312-\ubc18\ubcf5\ub418\ub294-switch\ubb38"},"3.12 \ubc18\ubcf5\ub418\ub294 switch\ubb38"),(0,a.kt)("p",null,"\uc911\ubcf5\ub41c switch\ubb38\uc774 \ubb38\uc81c\uac00 \ub418\ub294 \uc774\uc720\ub294 \uc870\uac74\uc808\uc744 \ud558\ub098 \ucd94\uac00\ud560 \ub54c\ub9c8\ub2e4 \ub2e4\ub978 switch\ubb38\ub4e4\ub3c4 \ubaa8\ub450 \ucc3e\uc544\uc11c \uc218\uc815\ud574\uc8fc\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7f4 \ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"\uc870\uac74\ubd80 \ub85c\uc9c1\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30"),"\ub294 \ubc18\ubcf5\ub41c switch\ubb38\uc774 \ub0b4\ubfdc\ub294 \uc0ac\uc545\ud55c \uae30\uc6b4\uc744 \uc81c\uc555\ud558\uc5ec \ucf54\ub4dc\ubca0\uc774\uc2a4\ub97c \ucd5c\uc2e0 \uc2a4\ud0c0\uc77c\ub85c \ubc14\uafd4\uc8fc\ub294 \uc138\ub828\ub41c \ubb34\uae30\uc778 \uc148\uc774\ub2e4."))}h.isMDXComponent=!0}}]);