(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/screenshot-888432460db6bfcd7a207c15183adbc2.jpg"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(97)),i={id:"doc-getstarted",title:"Get started",sidebar_label:"Get started",slug:"/"},c={unversionedId:"doc-getstarted",id:"doc-getstarted",isDocsHomePage:!1,title:"Get started",description:"Introduction",source:"@site/docs/getstarted.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/ScriptWidget/scriptwidget.github.io/edit/master/website/docs/getstarted.md",version:"current",sidebar_label:"Get started",sidebar:"someSidebar",next:{title:"Join group",permalink:"/docs/group"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"Screenshots",id:"screenshots",children:[]},{value:"Templates",id:"templates",children:[]},{value:"Components",id:"components",children:[{value:"text",id:"text",children:[]},{value:"image",id:"image",children:[]},{value:"vstack",id:"vstack",children:[]},{value:"hstack",id:"hstack",children:[]},{value:"zstack",id:"zstack",children:[]},{value:"spacer",id:"spacer",children:[]},{value:"date",id:"date",children:[]}]},{value:"Component Attributes",id:"component-attributes",children:[{value:"background (#general attributes)",id:"background-general-attributes",children:[]},{value:"frame (#general attributes)",id:"frame-general-attributes",children:[]},{value:"padding (#general attributes)",id:"padding-general-attributes",children:[]},{value:"date (date)",id:"date-date",children:[]},{value:"style (date)",id:"style-date",children:[]},{value:"font (date|text)",id:"font-datetext",children:[]},{value:"color (date|text)",id:"color-datetext",children:[]}]},{value:"Color",id:"color",children:[]},{value:"APIs",id:"apis",children:[{value:"$render",id:"render",children:[]},{value:"console",id:"console",children:[]},{value:"fetch",id:"fetch",children:[]},{value:"$device",id:"device",children:[]},{value:"$gradient",id:"gradient",children:[]}]},{value:"Enjoy coding",id:"enjoy-coding",children:[]}],o={toc:b};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"ScriptWidget is an iOS app that we can create widgets for iOS using JSX label style in JavaScript."),Object(l.b)("h2",{id:"screenshots"},"Screenshots"),Object(l.b)("p",null,Object(l.b)("img",{alt:"img",src:n(140).default})),Object(l.b)("h2",{id:"templates"},"Templates"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Battery Percent: Display system battery percentage"),Object(l.b)("li",{parentName:"ul"},"Clock: Display Clock Time"),Object(l.b)("li",{parentName:"ul"},"Image: Display Image/Photo"),Object(l.b)("li",{parentName:"ul"},"Is Friday Today: Demo for how to check is friday today"),Object(l.b)("li",{parentName:"ul"},"Weather: Demo for how get current weather for city"),Object(l.b)("li",{parentName:"ul"},"Year Days Left: Demo for how to display how many days left this year")),Object(l.b)("h2",{id:"components"},"Components"),Object(l.b)("h3",{id:"text"},"text"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'    <text font="title">Hello ScriptWidget</text>\n    <text font="caption" color="red">\n      Hello ScriptWidget\n    </text>\n    <text font="caption" background="blue" color="white">\n      Hello ScriptWidget\n    </text>\n')),Object(l.b)("p",null,"Attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"font"),Object(l.b)("li",{parentName:"ul"},"color"),Object(l.b)("li",{parentName:"ul"},"#general attributes")),Object(l.b)("h3",{id:"image"},"image"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'    <vstack>\n        <image systemName="mosaic.fill" />\n        <image id="image0" />\n    </vstack>\n')),Object(l.b)("p",null,"Attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"systemName : SFSymbols"),Object(l.b)("li",{parentName:"ul"},"id : image id in ",Object(l.b)("inlineCode",{parentName:"li"},"Images")),Object(l.b)("li",{parentName:"ul"},"#general attributes")),Object(l.b)("h3",{id:"vstack"},"vstack"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"    <vstack>\n        <text>First</text>\n        <text>Second</text>\n    </vstack>\n")),Object(l.b)("p",null,"Attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"#general attributes")),Object(l.b)("h3",{id:"hstack"},"hstack"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"    <hstack>\n        <text>First</text>\n        <text>Second</text>\n    </hstack>\n")),Object(l.b)("p",null,"Attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"#general attributes")),Object(l.b)("h3",{id:"zstack"},"zstack"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"    <zstack>\n        <text>First</text>\n        <text>Second</text>\n    </zstack>\n")),Object(l.b)("p",null,"Attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"#general attributes")),Object(l.b)("h3",{id:"spacer"},"spacer"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"    <hstack>\n        <text>First</text>\n        <spacer/>\n        <text>Second</text>\n    </hstack>\n")),Object(l.b)("p",null,"Attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"#general attributes")),Object(l.b)("h3",{id:"date"},"date"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'    <date font="caption" date="now" style="time" />\n    <date font="caption" date="now" style="date" />\n    <date font="caption" date="start of today" style="timer" />\n    <date font="title" date={Date.now()} style="timer" />\n')),Object(l.b)("p",null,"Attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"date"),Object(l.b)("li",{parentName:"ul"},"style"),Object(l.b)("li",{parentName:"ul"},"font"),Object(l.b)("li",{parentName:"ul"},"color"),Object(l.b)("li",{parentName:"ul"},"#general attributes")),Object(l.b)("h2",{id:"component-attributes"},"Component Attributes"),Object(l.b)("h3",{id:"background-general-attributes"},"background (#general attributes)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'background="red"\n')),Object(l.b)("p",null,"ref Color"),Object(l.b)("h3",{id:"frame-general-attributes"},"frame (#general attributes)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"max"),Object(l.b)("li",{parentName:"ul"},"max,#alignment")),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"max\nmax,leading\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"#alignment")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"center"),Object(l.b)("li",{parentName:"ul"},"leading"),Object(l.b)("li",{parentName:"ul"},"trailing"),Object(l.b)("li",{parentName:"ul"},"top"),Object(l.b)("li",{parentName:"ul"},"bottom"),Object(l.b)("li",{parentName:"ul"},"topLeading"),Object(l.b)("li",{parentName:"ul"},"topTrailing"),Object(l.b)("li",{parentName:"ul"},"bottomLeading"),Object(l.b)("li",{parentName:"ul"},"bottomTrailing")),Object(l.b)("h3",{id:"padding-general-attributes"},"padding (#general attributes)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'// padding all\npadding="10"\n\n\n// padding edge\npadding="top,10"\n\n- top\n- leading\n- bottom\n- trailing\n- all\n- horizontal\n- vertical\n\n\n// padding top,trailing,bottom,leading\npadding="10,20,30,40"\n\n\n\n')),Object(l.b)("h3",{id:"date-date"},"date (date)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'// string date\ndate="now"\ndate="start of today"\n\n- now\n- tomorrow\n- yesterday\n- start of today\n\n\n\n// the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC\ndate={Date.now()}\ndate="1614870428904"\n\n\n')),Object(l.b)("h3",{id:"style-date"},"style (date)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'style="timer"\n\n- time\n- date\n- relative\n- offset\n- timer\n\n\n')),Object(l.b)("h3",{id:"font-datetext"},"font (date|text)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'// font string name\nfont="title"\n\n- largeTitle\n- title\n- title2\n- title3\n- headline\n- subheadline\n- body\n- callout\n- footnote\n- caption\n- caption2\n\n// font with size\nfont="20"\nfont="70"\n\n')),Object(l.b)("h3",{id:"color-datetext"},"color (date|text)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'color="red"\n')),Object(l.b)("p",null,"ref Color"),Object(l.b)("h2",{id:"color"},"Color"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'// color string name\ncolor="red"\n\n- clear\n- black\n- white\n- gray\n- red\n- green\n- blue\n- orange\n- yellow\n- pink\n- purple\n- primary\n- secondary\n\n\n\n// hex color string\ncolor="#ff00ff"\n\n\n// opacity\ncolor="red,0.5"\ncolor="#ff00ff,0.5"\n\n\n// gradient color\n\nref $gradient\n\n')),Object(l.b)("h2",{id:"apis"},"APIs"),Object(l.b)("h3",{id:"render"},"$render"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"$render")," is the most core api, it specified the ui structure."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'$render(\n  <vstack frame="max">\n    <text font="title">Hello ScriptWidget</text>\n    <text font="caption" color="red">\n      Hello ScriptWidget\n    </text>\n    <text font="caption" background="blue" color="white">\n      Hello ScriptWidget\n    </text>\n  </vstack>\n);\n\n')),Object(l.b)("h3",{id:"console"},"console"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'console.log("Hello ScriptWidget");\n\n')),Object(l.b)("h3",{id:"fetch"},"fetch"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'// fetch\nconst url = "https://jsonplaceholder.typicode.com/todos/1";\nconst result = await fetch(url);\nconst model = JSON.parse(result); // result is string , and model is object\n\n\n// fetch with header\nconst url = "https://api.github.com/users/everettjf/orgs";\nconst result = await fetch(url, {\n  headers: {\n    Accept: "application/vnd.github.inertia-preview+json",\n  },\n});\nconst models = JSON.parse(result);\n')),Object(l.b)("h3",{id:"device"},"$device"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"console.log($device.name());\nconsole.log($device.model());\nconsole.log($device.language());\nconsole.log($device.systemVersion());\nconsole.log(JSON.stringify($device.screen(), null, 2));\nconsole.log(JSON.stringify($device.battery(), null, 2));\nconsole.log($device.isdarkmode());\n\n")),Object(l.b)("h3",{id:"gradient"},"$gradient"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"$gradient")," works with ",Object(l.b)("inlineCode",{parentName:"p"},"background")," and ",Object(l.b)("inlineCode",{parentName:"p"},"color")," attributes."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'let linearGradient = {\n  type: "linear",\n  colors: ["blue", "white", "pink"],\n  startPoint: "topLeading",\n  endPoint: "bottomTrailing",\n};\n\nlet angularGradient = {\n  type: "angular",\n  colors: ["green", "blue", "black", "green", "blue", "black", "green"],\n  center: "center",\n};\n\nlet radialGradient = {\n  type: "radial",\n  colors: ["orange", "red", "white"],\n  center: "center",\n  startRadius: 100,\n  endRadius: 470,\n};\n\n$render(\n  <vstack background={$gradient(linearGradient)} frame="max">\n    <text font="title">LinearGradient</text>\n  </vstack>\n);\n\n')),Object(l.b)("h2",{id:"enjoy-coding"},"Enjoy coding"),Object(l.b)("p",null,":)"))}d.isMDXComponent=!0}}]);