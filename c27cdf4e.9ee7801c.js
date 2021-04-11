(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(7),c=(n(0),n(97)),r={id:"develop",title:"Develop widget"},i={unversionedId:"develop",id:"develop",isDocsHomePage:!1,title:"Develop widget",description:"Components",source:"@site/docs/develop.md",slug:"/develop",permalink:"/docs/develop",editUrl:"https://github.com/ScriptWidget/scriptwidget.github.io/edit/master/website/docs/develop.md",version:"current",sidebar:"someSidebar",previous:{title:"Get started",permalink:"/docs/"},next:{title:"Join group",permalink:"/docs/group"}},o=[{value:"Components",id:"components",children:[{value:"text",id:"text",children:[]},{value:"image",id:"image",children:[]},{value:"vstack",id:"vstack",children:[]},{value:"hstack",id:"hstack",children:[]},{value:"zstack",id:"zstack",children:[]},{value:"spacer",id:"spacer",children:[]},{value:"date",id:"date",children:[]},{value:"rect",id:"rect",children:[]},{value:"circle",id:"circle",children:[]},{value:"ellipse",id:"ellipse",children:[]},{value:"capsule",id:"capsule",children:[]},{value:"guage",id:"guage",children:[]}]},{value:"Component Attributes",id:"component-attributes",children:[{value:"background (#general attributes)",id:"background-general-attributes",children:[]},{value:"frame (#general attributes)",id:"frame-general-attributes",children:[]},{value:"padding (#general attributes)",id:"padding-general-attributes",children:[]},{value:"date (date)",id:"date-date",children:[]},{value:"style (date)",id:"style-date",children:[]},{value:"font (date|text)",id:"font-datetext",children:[]},{value:"color (date|text)",id:"color-datetext",children:[]}]},{value:"Color",id:"color",children:[]},{value:"APIs",id:"apis",children:[{value:"$render",id:"render",children:[]},{value:"console",id:"console",children:[]},{value:"fetch",id:"fetch",children:[]},{value:"$device",id:"device",children:[]},{value:"$gradient",id:"gradient",children:[]},{value:"$getenv",id:"getenv",children:[]},{value:"$json",id:"json",children:[]}]},{value:"Animation",id:"animation",children:[]},{value:"Enjoy coding",id:"enjoy-coding",children:[]}],b={toc:o};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"components"},"Components"),Object(c.b)("h3",{id:"text"},"text"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'    <text font="title">Hello ScriptWidget</text>\n    <text font="caption" color="red">\n      Hello ScriptWidget\n    </text>\n    <text font="caption" background="blue" color="white">\n      Hello ScriptWidget\n    </text>\n')),Object(c.b)("p",null,"Attributes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"font"),Object(c.b)("li",{parentName:"ul"},"color"),Object(c.b)("li",{parentName:"ul"},"#general attributes")),Object(c.b)("h3",{id:"image"},"image"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'  <vstack>\n    <image />\n    <image systemName="mosaic.fill" />\n    <image id="image0" />\n    <image url="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" frame="20,20"/>\n  </vstack>\n')),Object(c.b)("p",null,"Attributes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"systemName : SFSymbols"),Object(c.b)("li",{parentName:"ul"},"id : image id in ",Object(c.b)("inlineCode",{parentName:"li"},"Images")),Object(c.b)("li",{parentName:"ul"},"#general attributes")),Object(c.b)("h3",{id:"vstack"},"vstack"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    <vstack>\n        <text>First</text>\n        <text>Second</text>\n    </vstack>\n")),Object(c.b)("p",null,"Attributes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"#general attributes")),Object(c.b)("h3",{id:"hstack"},"hstack"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    <hstack>\n        <text>First</text>\n        <text>Second</text>\n    </hstack>\n")),Object(c.b)("p",null,"Attributes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"#general attributes")),Object(c.b)("h3",{id:"zstack"},"zstack"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    <zstack>\n        <text>First</text>\n        <text>Second</text>\n    </zstack>\n")),Object(c.b)("p",null,"Attributes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"#general attributes")),Object(c.b)("h3",{id:"spacer"},"spacer"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"    <hstack>\n        <text>First</text>\n        <spacer/>\n        <text>Second</text>\n    </hstack>\n")),Object(c.b)("p",null,"Attributes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"#general attributes")),Object(c.b)("h3",{id:"date"},"date"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'    <date font="caption" date="now" style="time" />\n    <date font="caption" date="now" style="date" />\n    <date font="caption" date="start of today" style="timer" />\n    <date font="title" date={Date.now()} style="timer" />\n')),Object(c.b)("p",null,"Attributes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"date"),Object(c.b)("li",{parentName:"ul"},"style"),Object(c.b)("li",{parentName:"ul"},"font"),Object(c.b)("li",{parentName:"ul"},"color"),Object(c.b)("li",{parentName:"ul"},"#general attributes")),Object(c.b)("h3",{id:"rect"},"rect"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'$render(\n  <vstack frame="max">\n    <rect frame="50,30" color="blue"></rect>\n    <rect frame="50,30" color="blue" corner="5"></rect>\n  </vstack>\n);\n')),Object(c.b)("h3",{id:"circle"},"circle"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'  <vstack frame="max">\n    <circle frame="50,50" color="blue"></circle>\n  </vstack>\n')),Object(c.b)("h3",{id:"ellipse"},"ellipse"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'  <vstack frame="max">\n    <ellipse frame="50,30" color="blue"></ellipse>\n  </vstack>\n')),Object(c.b)("h3",{id:"capsule"},"capsule"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'  <vstack frame="max">\n    <capsule frame="50,30" color="blue"></capsule>\n  </vstack>\n\n')),Object(c.b)("h3",{id:"guage"},"guage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'\nvar percent = $device.battery().level * 100;\npercent = percent.toFixed(0);\n\nlet gaugeSections = [\n  {color: "yellow", value: 0.1},\n  {color: "blue", value: 0.2},\n  {color: "orange", value: 0.3},\n  {color: "green", value: 0.4},\n];\n\n$render(\n  <vstack frame="max">\n    <gauge \n      angle="260" \n      value={percent/100}\n      thickness="10" \n      label={percent + "%"} labelFont="caption"\n      title="BATTERY" titleFont="caption"\n      sections={$json(gaugeSections)}\n      >\n    </gauge>\n  </vstack>\n);\n\n')),Object(c.b)("h2",{id:"component-attributes"},"Component Attributes"),Object(c.b)("h3",{id:"background-general-attributes"},"background (#general attributes)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'background="red"\n')),Object(c.b)("p",null,"ref Color"),Object(c.b)("h3",{id:"frame-general-attributes"},"frame (#general attributes)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"max"),Object(c.b)("li",{parentName:"ul"},"max,#alignment"),Object(c.b)("li",{parentName:"ul"},"width,height"),Object(c.b)("li",{parentName:"ul"},"width,height,#alignment")),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"max\nmax,leading\n100,50\n100,50,leading\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"#alignment")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"center"),Object(c.b)("li",{parentName:"ul"},"leading"),Object(c.b)("li",{parentName:"ul"},"trailing"),Object(c.b)("li",{parentName:"ul"},"top"),Object(c.b)("li",{parentName:"ul"},"bottom"),Object(c.b)("li",{parentName:"ul"},"topLeading"),Object(c.b)("li",{parentName:"ul"},"topTrailing"),Object(c.b)("li",{parentName:"ul"},"bottomLeading"),Object(c.b)("li",{parentName:"ul"},"bottomTrailing")),Object(c.b)("h3",{id:"padding-general-attributes"},"padding (#general attributes)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'// padding all\npadding="10"\n\n\n// padding edge\npadding="top,10"\n\n- top\n- leading\n- bottom\n- trailing\n- all\n- horizontal\n- vertical\n\n\n// padding top,trailing,bottom,leading\npadding="10,20,30,40"\n\n\n\n')),Object(c.b)("h3",{id:"date-date"},"date (date)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'// string date\ndate="now"\ndate="start of today"\n\n- now\n- tomorrow\n- yesterday\n- start of today\n\n\n\n// the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC\ndate={Date.now()}\ndate="1614870428904"\n')),Object(c.b)("h3",{id:"style-date"},"style (date)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'style="timer"\n\n- time\n- date\n- relative\n- offset\n- timer\n\n\n')),Object(c.b)("h3",{id:"font-datetext"},"font (date|text)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'// font string name\nfont="title"\n\n- largeTitle\n- title\n- title2\n- title3\n- headline\n- subheadline\n- body\n- callout\n- footnote\n- caption\n- caption2\n\n// font with size\nfont="20"\nfont="70"\n\n')),Object(c.b)("h3",{id:"color-datetext"},"color (date|text)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'color="red"\n')),Object(c.b)("p",null,"ref Color"),Object(c.b)("h2",{id:"color"},"Color"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'// color string name\ncolor="red"\n\n- clear\n- black\n- white\n- gray\n- red\n- green\n- blue\n- orange\n- yellow\n- pink\n- purple\n- primary\n- secondary\n\n\n\n// hex color string\ncolor="#ff00ff"\n\n\n// opacity\ncolor="red,0.5"\ncolor="#ff00ff,0.5"\n\n\n// gradient color\n\nref $gradient\n\n')),Object(c.b)("h2",{id:"apis"},"APIs"),Object(c.b)("h3",{id:"render"},"$render"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"$render")," is the most core api, it specified the ui structure."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'$render(\n  <vstack frame="max">\n    <text font="title">Hello ScriptWidget</text>\n    <text font="caption" color="red">\n      Hello ScriptWidget\n    </text>\n    <text font="caption" background="blue" color="white">\n      Hello ScriptWidget\n    </text>\n  </vstack>\n);\n\n')),Object(c.b)("h3",{id:"console"},"console"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'console.log("Hello ScriptWidget");\n\n')),Object(c.b)("h3",{id:"fetch"},"fetch"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'// fetch\nconst url = "https://jsonplaceholder.typicode.com/todos/1";\nconst result = await fetch(url);\nconst model = JSON.parse(result); // result is string , and model is object\n\n\n// fetch with header\nconst url = "https://api.github.com/users/everettjf/orgs";\nconst result = await fetch(url, {\n  headers: {\n    Accept: "application/vnd.github.inertia-preview+json",\n  },\n});\nconst models = JSON.parse(result);\n')),Object(c.b)("h3",{id:"device"},"$device"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"console.log($device.name());\nconsole.log($device.model());\nconsole.log($device.language());\nconsole.log($device.systemVersion());\nconsole.log(JSON.stringify($device.screen(), null, 2));\nconsole.log(JSON.stringify($device.battery(), null, 2));\nconsole.log($device.isdarkmode());\n\n")),Object(c.b)("h3",{id:"gradient"},"$gradient"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"$gradient")," works with ",Object(c.b)("inlineCode",{parentName:"p"},"background")," and ",Object(c.b)("inlineCode",{parentName:"p"},"color")," attributes."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'let linearGradient = {\n  type: "linear",\n  colors: ["blue", "white", "pink"],\n  startPoint: "topLeading",\n  endPoint: "bottomTrailing",\n};\n\nlet angularGradient = {\n  type: "angular",\n  colors: ["green", "blue", "black", "green", "blue", "black", "green"],\n  center: "center",\n};\n\nlet radialGradient = {\n  type: "radial",\n  colors: ["orange", "red", "white"],\n  center: "center",\n  startRadius: 100,\n  endRadius: 470,\n};\n\n$render(\n  <vstack background={$gradient(linearGradient)} frame="max">\n    <text font="title">LinearGradient</text>\n  </vstack>\n);\n\n')),Object(c.b)("h3",{id:"getenv"},"$getenv"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"$getenv")," can get several environment state. But for now, getenv only support ",Object(c.b)("inlineCode",{parentName:"p"},"widget-size"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'/*\n widget-size\n - large\n - medium\n - small\n*/\nconst widget_size = $getenv("widget-size");\n\nif (widget_size == "small") {\n  //...\n}\n')),Object(c.b)("h3",{id:"json"},"$json"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"$json")," used for some complex attributes. It simply called ",Object(c.b)("inlineCode",{parentName:"p"},"JSON.stringfy")," internal."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'var percent = $device.battery().level * 100;\npercent = percent.toFixed(0);\n\nlet gaugeSections = [\n  {color: "yellow", value: 0.1},\n  {color: "blue", value: 0.2},\n  {color: "orange", value: 0.3},\n  {color: "green", value: 0.4},\n];\n\n$render(\n  <vstack frame="max">\n    <gauge \n      value={percent/100}\n      sections={$json(gaugeSections)}\n      >\n    </gauge>\n  </vstack>\n);\n\n')),Object(c.b)("h2",{id:"animation"},"Animation"),Object(c.b)("p",null,"support:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"animation can be applied to any components."),Object(c.b)("li",{parentName:"ul"},"only support rotation animation")),Object(c.b)("p",null,"animation type:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"clockSecond"),Object(c.b)("li",{parentName:"ul"},"clockMiniute"),Object(c.b)("li",{parentName:"ul"},"clockHour"),Object(c.b)("li",{parentName:"ul"},"clockCustom")),Object(c.b)("p",null,"We use json to config animations:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},' let animationSecond = {\n  type: "clockSecond",  // clockMinute , clockHour\n  timezone: "current",\n  anchor: "center"\n }\n \n \n let animationCustom = {\n  type: "clockCustom",\n  interval: 60, // 60 means 1 second , 30 means 0.5 second\n  timezone: "current",\n  anchor: "center"\n }\n\n $render(\n   <vstack frame="max" animation={$animation(animationSecond)}>\n     <rect frame="30,30" color="green"></rect>\n   </vstack>\n )\n')),Object(c.b)("p",null,"attributes:"),Object(c.b)("p",null,"timezone:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"current "),Object(c.b)("li",{parentName:"ul"},"timezone list , please ref ",Object(c.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/47494222/getting-the-city-country-list-in-ios-time-zone"},"https://stackoverflow.com/questions/47494222/getting-the-city-country-list-in-ios-time-zone"))),Object(c.b)("p",null,"anchor:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"zero"),Object(c.b)("li",{parentName:"ul"},"center"),Object(c.b)("li",{parentName:"ul"},"leading"),Object(c.b)("li",{parentName:"ul"},"trailing"),Object(c.b)("li",{parentName:"ul"},"top"),Object(c.b)("li",{parentName:"ul"},"bottom"),Object(c.b)("li",{parentName:"ul"},"topLeading"),Object(c.b)("li",{parentName:"ul"},"topTrailing"),Object(c.b)("li",{parentName:"ul"},"bottomLeading"),Object(c.b)("li",{parentName:"ul"},"bottomTrailing")),Object(c.b)("p",null,"Quick format for clockCustom:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'$render(\n  <vstack frame="max" animation="clockCustom,1">\n    <circle frame="30,30" color="green"></circle>\n    <circle frame="30,30" color="pink"></circle>\n    <circle frame="30,30" color="gray"></circle>\n    <circle frame="30,90" color="orange"></circle>\n  </vstack>\n);\n\n')),Object(c.b)("h2",{id:"enjoy-coding"},"Enjoy coding"),Object(c.b)("p",null,":)"))}d.isMDXComponent=!0}}]);