import{_ as i,c as a,m as t,a as s,a5 as Q,o as e}from"./chunks/framework.DLTOeEcZ.js";const _1=JSON.parse('{"title":"Open3D 计算点云平均密度（版本一）","description":"","frontmatter":{},"headers":[],"relativePath":"point-cloud/Open3D 计算点云平均密度（版本一）.md","filePath":"point-cloud/Open3D 计算点云平均密度（版本一）.md"}'),l={name:"point-cloud/Open3D 计算点云平均密度（版本一）.md"},n=t("h1",{id:"open3d-计算点云平均密度-版本一",tabindex:"-1"},[s("Open3D 计算点云平均密度（版本一） "),t("a",{class:"header-anchor",href:"#open3d-计算点云平均密度-版本一","aria-label":'Permalink to "Open3D 计算点云平均密度（版本一）"'},"​")],-1),T=t("p",null,"博客长期更新，本文最近一次更新时间为：2023年7月11日。① 代码重构使书写更加规范；② 新增测试数据网盘链接。",-1),o=t("h2",{id:"一、算法原理",tabindex:"-1"},[s("一、算法原理 "),t("a",{class:"header-anchor",href:"#一、算法原理","aria-label":'Permalink to "一、算法原理"'},"​")],-1),h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.138ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 503 636","aria-hidden":"true"},r=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45D",d:"M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",style:{"stroke-width":"3"}})])])],-1),p=[r],m=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p")])],-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.009ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 888 683","aria-hidden":"true"},g=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])],-1),x=[g],u=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"N")])],-1),w={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.719ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 760 727","aria-hidden":"true"},y=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z",style:{"stroke-width":"3"}})])])],-1),H=[y],E=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"C")])],-1),f={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.963ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3519.7 1000","aria-hidden":"true"},M=Q("",1),b=[M],v=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"d"),t("mi",null,"i"),t("mi",null,"s"),t("mo",{stretchy:"false"},"("),t("mi",null,"p"),t("mo",null,","),t("mi",null,"q"),t("mo",{stretchy:"false"},")")])],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.041ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 460 636","aria-hidden":"true"},C=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45E",d:"M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",style:{"stroke-width":"3"}})])])],-1),V=[C],A=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"q")])],-1),F={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.169ex",height:"2.22ex",role:"img",focusable:"false",viewBox:"0 -694 958.7 981.2","aria-hidden":"true"},S=Q("",1),B=[S],P=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"d"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"p")])])])],-1),q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.138ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 503 636","aria-hidden":"true"},O=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45D",d:"M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",style:{"stroke-width":"3"}})])])],-1),z=[O],I=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p")])],-1),J={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},G={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.618ex",height:"2.347ex",role:"img",focusable:"false",viewBox:"0 -750 17953 1037.2","aria-hidden":"true"},R=Q("",1),$=[R],K=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msub",null,[t("mi",null,"d"),t("mi",null,"p")]),t("mo",null,"="),t("mi",null,"m"),t("mi",null,"i"),t("mi",null,"n"),t("mo",{stretchy:"false"},"("),t("mi",null,"d"),t("mi",null,"i"),t("mi",null,"s"),t("mo",{stretchy:"false"},"("),t("mi",null,"p"),t("mo",null,","),t("mi",null,"q"),t("mo",{stretchy:"false"},")"),t("mo",{stretchy:"false"},")"),t("mo",null,","),t("mi",null,"q"),t("mo",null,"="),t("mn",null,"1"),t("mo",null,","),t("mn",null,"2"),t("mo",null,","),t("mo",null,"⋯"),t("mo",null,","),t("mi",null,"N"),t("mo",null,","),t("mi",null,"p"),t("mo",null,"≠"),t("mi",null,"q")])],-1),U=t("p",null,"则点云的平均距离密度为：",-1),X={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},W={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.998ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.388ex",height:"6.919ex",role:"img",focusable:"false",viewBox:"0 -1733 5917.6 3058.1","aria-hidden":"true"},Y=Q("",1),t1=[Y],s1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mover",null,[t("mi",null,"d"),t("mo",{accent:"true"},"―")]),t("mo",null,"="),t("mfrac",null,[t("mn",null,"1"),t("mi",null,"N")]),t("munderover",null,[t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"p"),t("mo",null,"="),t("mn",null,"1")]),t("mi",null,"N")]),t("msub",null,[t("mi",null,"d"),t("mi",null,"p")])])],-1),a1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},e1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.176ex",height:"2.31ex",role:"img",focusable:"false",viewBox:"0 -1011 520 1021","aria-hidden":"true"},Q1=Q("",1),i1=[Q1],l1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mover",null,[t("mi",null,"d"),t("mo",{accent:"true"},"―")])])],-1),n1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},T1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.176ex",height:"2.31ex",role:"img",focusable:"false",viewBox:"0 -1011 520 1021","aria-hidden":"true"},o1=Q("",1),h1=[o1],d1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mover",null,[t("mi",null,"d"),t("mo",{accent:"true"},"―")])])],-1),r1=Q("",6);function p1(m1,c1,k1,g1,x1,u1){return e(),a("div",null,[n,T,o,t("p",null,[s("采样设备不同、设备距离场景远近不同，会使点云密度产生差异。现有的对点云密度的估算方法有基于距离的方法和基于分块的方法。基于距离的平均距离密度密度表示法是通过计算点云各点的距离平均值来估算点云分布疏密程度，点的距离一般点云某一点"),t("mjx-container",h,[(e(),a("svg",d,p)),m]),s("最近的点的距离。在点数为"),t("mjx-container",c,[(e(),a("svg",k,x)),u]),s("的点云"),t("mjx-container",w,[(e(),a("svg",_,H)),E]),s("中，用"),t("mjx-container",f,[(e(),a("svg",L,b)),v]),s("表示点"),t("mjx-container",D,[(e(),a("svg",Z,V)),A]),s("之间的距离，用"),t("mjx-container",F,[(e(),a("svg",j,B)),P]),s("表示点"),t("mjx-container",q,[(e(),a("svg",N,z)),I]),s("与其他点的最小距离，则有：")]),t("mjx-container",J,[(e(),a("svg",G,$)),K]),U,t("mjx-container",X,[(e(),a("svg",W,t1)),s1]),t("p",null,[s("平均距离 "),t("mjx-container",a1,[(e(),a("svg",e1,i1)),l1]),s(" 越小，点云分布越密集，密度则越大；"),t("mjx-container",n1,[(e(),a("svg",T1,h1)),d1]),s(" 越大，点云分布越稀疏，密度则越小。因此通过平均距离来估算点云密度可行。")]),r1])}const y1=i(l,[["render",p1]]);export{_1 as __pageData,y1 as default};
