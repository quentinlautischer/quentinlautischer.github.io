(this.webpackJsonpportleaf=this.webpackJsonpportleaf||[]).push([[0],{17:function(e,t,a){},21:function(e){e.exports=JSON.parse('[{"title":"QVision","location":"forge","date":"2020-01-01","imgSrc":"assets/bits.jpg","categories":["C++","Computer Vision","Automation"],"description":"This project is a toolbox that provides system automation through multiple means, most notably, computer vision. This project is a playground for me to explore and gain technical skills in C++. QVision is short for Control Vision.","extendedInfo":{}},{"title":"TaskT","location":"forge","date":"2020-01-01","imgSrc":"assets/taskt.png","categories":["React","UX","Full-stack","Authentication"],"description":"This project is an account-based tracking system for absolute and relative todos. Ideal for house maintenance. Setup relative recurrences for things like vacuuming and fridge cleaning. Setup absolute recurrences for things like taxes and furnace filter changes.","appSrc":"https://projektq-taskt.herokuapp.com/","extendedInfo":{}},{"title":"Tether","location":"forge","date":"2020-05-01","imgSrc":"assets/bits.jpg","categories":["Rust","Protocols","WebAssembly"],"description":"Dance of the Protocols. This project is for me to learn network protocols while producing an interactive app for learning protocols","extendedInfo":{}},{"title":"2D Side Scrolling Game","location":"vault","date":"2017-04-01","imgSrc":"assets/2dsidescroll.png","categories":["Python","OOP","Game"],"vidSrc":"http://www.youtube.com/embed/gw-JDEg3NL8","description":"This was a project made using PyGame and Python3. This project was intended to incorporate many programming techniques such as OOP design principles, graph theory, server/client communications, AI design, dynamic programming and scripted encounters."},{"title":"Item Trading Android App","location":"vault","date":"2017-04-01","imgSrc":"assets/itemtrade.png","categories":["Android","Java","Mobile","MVC"],"vidSrc":"http://www.youtube.com/embed/MbHIZUPE8Ck?start=28","description":"This was a group project consisting of six members. This project required lots of planning and design before implementation while also exercising the use of distributed version control among members. The App was designed using MVC as an architectural pattern, techniques such as threading (UI/Network), caching, and elastic-search databases were explored and utilized."},{"title":"3D Model Viewer","location":"vault","date":"2017-04-01","imgSrc":"assets/3dmodelviewer.png","categories":["C++","OpenGL","3D-Graphics"],"description":"This project was made using OpenGL and C++. It was a model viewer that allowed for the import and export of 3D obj files. They would be constructed and rendered in the application. Using linear algebra the program can perform matrix transformations to allow for translation and rotation of the model and the scene camera."},{"title":"Arduino Pocket Game","location":"vault","date":"2017-04-01","imgSrc":"assets/arduinogame.png","categories":["C","Arduino"],"vidSrc":"http://www.youtube.com/embed/KgV56NStx8Y","description":"This project was a 2D mini-game programmed on an Arduino in an intro to programming in C course."},{"title":"Computer Vision Bot","location":"vault","date":"2017-04-01","imgSrc":"assets/bits.jpg","categories":["Python","OpenCV","Bot"],"description":"This project was something I created while exploring computer vision. I created a bot capable of playing World of Warcraft through computer vision. The program identified and tracked in real-time player resources displayed on the screen. Using this information and the guidance of a script, the program was capable of reacting dynamically. In this case, I had created a bot capable of playing alongside four other real players."},{"title":"Encryption Project","location":"vault","date":"2017-04-01","imgSrc":"assets/bits.jpg","categories":["C","Security","Arduino"],"description":"This project involved implementing Diffie-Hellman Encryption methods for communications between two Arduinos"},{"title":"NoteDown","location":"vault","date":"2017-04-01","imgSrc":"assets/NoteDown.png","categories":["Javascript","ReactJS","Electron","Node","MongoDB"],"description":"This was my final year capstone project. We created a note-taking app that would interpret and render Markdown notes in real-time. We had multi-platform support for a Desktop Client(Windows/Mac) and a mobile client(iOS/Android). We built a custom Markdown parser and handled concurrent sessions on the same set of notes."},{"title":"Procnanny - Multi-System Task Monitor","location":"vault","date":"2017-04-01","imgSrc":"assets/bits.jpg","categories":["C","Unix","Client/Server"],"description":"This project, Procnanny, was a Unix task monitor implemented in C. Provided a list of programs to monitor the system would fork children tasked with monitoring the lifespan of a given process, ending them, and then recycling itself for use elsewhere. Phase 3 of the project had us expand the program to function with many host clients connected to one central Procnanny server."},{"title":"Restaurant Finder","location":"vault","date":"2017-04-01","imgSrc":"assets/bits.jpg","categories":["C","Python","Algorithms","Arduino"],"description":"This project used a python server to calculate the least cost path using Dijkstra\'s Algorithm on graph data. Start and endpoints were sent from the Arduino (client) to the Python server were the least cost path was calculated. The path data would be sent back to the Arduino client which would draw the path on a map printed to the LCD. This project later expanded to find the closest restaurants using a sorting Algorithm."},{"title":"Collaborative Ruby Projects","location":"vault","date":"2017-04-01","imgSrc":"assets/connectallRuby.png","categories":["Ruby","Games","Software-Eng"],"description":"A series of small programs to explore software design in Ruby. The programs explore functional code practices using contracts to describe program behaviour."},{"title":"SQL Airport Flight Booking","location":"vault","date":"2017-04-01","imgSrc":"assets/bits.jpg","categories":["SQL","Java","Databases"],"description":"SQL Database of Flights and Bookings. A user interface was created to search, lookup, and book flights using the SQL based system."}]')},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),s=(a(17),a(28),a(8)),c=a(7),l=a(4),u=a(5),p=a(13),m=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={paralaxLevels:3,paralaxOffset:[{x:0,y:0},{x:0,y:0},{x:0,y:0}]},e}return Object(u.a)(a,[{key:"setOffsetLevel",value:function(e,t){var a=this.state.paralaxOffset;a[e]=t,this.setState({paralaxOffset:a})}},{key:"setAllOffsetLevels",value:function(e){this.setState({paralaxLevels:e.length,paralaxOffset:e})}}]),a}(p.a),h=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.c,{to:[m]},(function(t){var a=t.state.paralaxOffset[e.props.level].x,n=t.state.paralaxOffset[e.props.level].y;return e.props.inversed&&(a*=-1,n*=-1),r.a.createElement("div",{className:"paralax-item",style:{right:"".concat(a,"px"),bottom:"".concat(n,"px")}},e.props.children)}))}}]),a}(r.a.Component),d=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).container=null,e.assignRef=function(t){e.container=t},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(h,{level:2},r.a.createElement("div",{className:"square-btn "+this.props.className},this.props.children))}}]),a}(r.a.Component);var f=function(e){return r.a.createElement("a",{target:"_blank",href:e.to,rel:"noopener noreferrer"},e.children)},g=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sub-nav-item "+this.props.className},this.props.children)}}]),a}(r.a.Component),v=a(50),b=a(36),j=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h,{level:2},r.a.createElement(v.a,null,r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(b.a,{className:"grey-box"},r.a.createElement("a",{onClick:function(){return e.props.routeTo("/projects")}},r.a.createElement("p",null,"Projects"))),r.a.createElement(g,{className:"grey-box align-self-end"},r.a.createElement("a",{onClick:function(){return e.props.routeTo("/projects/QVision")}},r.a.createElement("p",null,"QVision"))),r.a.createElement(g,{className:"grey-box align-self-end"},r.a.createElement("a",{onClick:function(){return e.props.routeTo("/projects/TaskT")}},r.a.createElement("p",null,"TaskT"))),r.a.createElement(g,{className:"grey-box align-self-end"},r.a.createElement("a",{onClick:function(){return e.props.routeTo("/projects/Tether")}},r.a.createElement("p",null,"Tether")))))))}}]),a}(r.a.Component),y=a(38),E=a(37),w=a(39),O=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex align-self-center align-self-center-offset"},r.a.createElement("div",{className:"flex-column"},r.a.createElement(h,{level:0,inversed:!0},r.a.createElement("h1",{className:"fullname-header"},"Quentin Lautischer")),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement(d,{className:"grey-box"},r.a.createElement(f,{to:"https://www.linkedin.com/in/quentinlautischer/"},r.a.createElement(E.a,{size:64,strokeWidth:1}))),r.a.createElement(d,{className:"grey-box"},r.a.createElement(f,{to:"https://github.com/quentinlautischer"},r.a.createElement(y.a,{size:64,strokeWidth:1}))),r.a.createElement(d,{className:"grey-box"},r.a.createElement(f,{to:"mailto:qlautischer@gmail.com"},r.a.createElement(w.a,{size:64,strokeWidth:1}))))),r.a.createElement(j,{routeTo:this.props.routeTo}))}}]),a}(r.a.Component),T=a(51),k=a(41),S=a(40),x=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(T.a,null,this.props.item.imgSrc&&r.a.createElement(T.a.Img,{variant:"top",src:this.props.item.imgSrc}),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,this.props.item.title,this.props.item.extendedInfo&&r.a.createElement("a",{onClick:function(){return e.props.routeTo("/projects/"+e.props.item.title)}},r.a.createElement(S.a,{className:"float-right",strokeWidth:1}))),this.props.item.categories.map((function(e){return r.a.createElement(k.a,{key:e,variant:"secondary"},e)})),r.a.createElement(T.a.Text,null,this.props.item.description),this.props.item.vidSrc&&r.a.createElement(k.a,{className:"youtube",variant:"secondary"},r.a.createElement("a",{href:this.props.item.vidSrc},"YouTube")),this.props.item.appSrc&&r.a.createElement(k.a,{className:"heroku",variant:"secondary"},r.a.createElement("a",{href:this.props.item.appSrc},"Web App"))))}}]),a}(r.a.Component),C=a(42),N=a(43),P=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).cards=function(){return e.props.items.map((function(t){var a=e.props.toCardItem(t);return r.a.createElement(x,{key:a.title,item:a,routeTo:e.props.routeTo})}))},e}return Object(u.a)(a,[{key:"render",value:function(){return this.props.columns?r.a.createElement(C.a,null,this.cards()):r.a.createElement(N.a,null,this.cards())}}]),a}(r.a.Component),I=a(44),A=a(52),W=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(I.a,{size:"sm",className:"mb-3 ".concat(this.props.className)},r.a.createElement(I.a.Prepend,null,r.a.createElement(I.a.Text,{id:"inputGroup-sizing-sm"},"Search")),r.a.createElement(A.a,{"aria-label":"Small","aria-describedby":"search",onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),a}(r.a.Component),D=a(21),Q=function e(){Object(l.a)(this,e)};Q.FORGE_DESCRIPTION="These are projects that I am actively working on.",Q.VAULT_DESCRIPTION="These are projects that I have archived.";var L,R=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).vaultItems=function(){var e=n.state.items.filter((function(e){return"vault"===e.location}));if(n.state.vaultSearchKeyword){var t=n.state.vaultSearchKeyword.toLowerCase();e=e.filter((function(e){return e.categories.flatMap((function(e){return e.toLowerCase()})).includes(t)||e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)}))}return e},n.forgeItems=function(){return n.state.items.filter((function(e){return"forge"===e.location}))},n.projectToCardItem=function(e){var t={title:e.title,date:e.date,categories:e.categories,imgSrc:e.imgSrc,vidSrc:e.vidSrc,appSrc:e.appSrc,description:e.description};return(e.extendedInfo||e.extendedInfo==={})&&(t.extendedInfo={}),t},n.onSearchChanged=function(e){n.setState({vaultSearchKeyword:e})},n.state={items:D,vaultSearchKeyword:null},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects-page"},r.a.createElement("div",{className:"projects-container"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-5"},"The Forge"),r.a.createElement("p",null,Q.FORGE_DESCRIPTION)),r.a.createElement(P,{items:this.forgeItems(),toCardItem:this.projectToCardItem,columns:!1,routeTo:this.props.routeTo}),r.a.createElement("h2",{className:"mt-5"},"The Vault"),r.a.createElement("div",{className:"d-flex flex-row flex-wrap"},r.a.createElement("p",null,Q.VAULT_DESCRIPTION),r.a.createElement(W,{className:"ml-auto w-35 d-lg",onChange:this.onSearchChanged})),r.a.createElement(P,{items:this.vaultItems(),toCardItem:this.projectToCardItem,columns:!0,routeTo:this.props.routeTo}),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("h2",{className:"m-5"},"The End"))))}}]),a}(r.a.Component),U=a(45),M=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"w-100 d-flex flex-row justify-content-center align-items-center"},r.a.createElement(U.a,{size:64,strokeWidth:1}),r.a.createElement("h1",{className:"ml-5 mr-5"},"Under Construction"),r.a.createElement(U.a,{className:"d-lg",size:64,strokeWidth:1}))}}]),a}(r.a.Component),V=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.condition&&r.a.createElement(r.a.Fragment,null,this.props.children))}}]),a}(r.a.Component),q=a(46),z=a(48),F=a(49),G=a(47);!function(e){e[e.None=0]="None",e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.Top=4]="Top"}(L||(L={}));var B=function(){function e(t){Object(l.a)(this,e),this.history=[],this.history.push(t)}return Object(u.a)(e,[{key:"push",value:function(e){this.history.push(e)}},{key:"pop",value:function(){this.history.pop()}},{key:"location",value:function(){return{pathname:this.history[this.history.length-1]}}}]),e}(),J=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).projectsPageRef=void 0,n.projectPageElement=void 0,n.stopPropagationFlag=!1,n.routeToBase=function(){n.state.history.push(""),n.forceUpdate()},n.routeTo=function(e){console.log("Routing to: "+e),n.state.history.push(e),n.forceUpdate()},n.onWheel=function(e){""===n.state.history.location().pathname?n.handleWheelOnHomePage(e):"/projects"===n.state.history.location().pathname?n.handleWheelOnProjectsPage(e):n.state.history.location().pathname.includes("/projects/")&&n.handleWheelOnProjectPage(e)},n.onScroll=function(e){"/projects"===n.state.history.location().pathname&&n.IsProjectPageAtTop()&&n.setState({navQueued:L.Top})},n.IsWheelUp=function(e){return e.nativeEvent.deltaY<0},n.IsWheelDown=function(e){return e.nativeEvent.deltaY>0},n.IsWheelLeft=function(e){return e.nativeEvent.deltaX<0},n.handleWheelOnHomePage=function(e){n.IsWheelDown(e)?n.state.navQueued===L.Down?(n.stopPropagationFlag=!0,n.setState({navQueued:L.Top}),n.state.history.push("/projects")):n.state.navQueued===L.None?n.setState({navQueued:L.Down}):n.setState({navQueued:L.None}):n.IsWheelUp(e)&&n.setState({navQueued:L.None})},n.handleWheelOnProjectsPage=function(e){if(n.IsWheelUp(e)){if(!n.IsProjectPageAtTop())return;n.state.navQueued===L.Up?n.state.history.push(""):n.state.navQueued===L.Top?n.setState({navQueued:L.Up}):n.setState({navQueued:L.Top})}else n.IsWheelDown(e)&&n.setState({navQueued:L.None})},n.handleWheelOnProjectPage=function(e){n.IsWheelLeft(e)&&n.state.history.push("/projects")},n.IsProjectPageAtTop=function(){return n.projectPageElement=i.a.findDOMNode(n.projectsPageRef.current),null!=n.projectPageElement&&0===n.projectPageElement.scrollTop},n.projectsPageRef=r.a.createRef(),n.state={navHovered:!1,pageChanged:!1,navQueued:L.Top,history:new B("")},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.projectPageElement=i.a.findDOMNode(this.projectsPageRef.current)}},{key:"render",value:function(){var e=this;console.log("Rendering: "+this.state.history.location().pathname);var t=this.state.navQueued===L.Down,a=this.state.navQueued===L.Up,n=this.state.navQueued===L.Left;return r.a.createElement(q.a,{className:"d-flex mt-5 h-100",onWheel:this.onWheel,onScroll:this.onScroll},r.a.createElement(V,{condition:"/projects/QVision"===this.state.history.location().pathname},r.a.createElement(G.a,{onClick:function(){return e.routeTo("/projects")},className:"page-button page-button-left"+(n?"nav-queued":""),size:n?48:24}),r.a.createElement(M,null)),r.a.createElement(V,{condition:"/projects/TaskT"===this.state.history.location().pathname},r.a.createElement(G.a,{onClick:function(){return e.routeTo("/projects")},className:"page-button page-button-left "+(n?"nav-queued":""),size:n?48:24}),r.a.createElement(M,null)),r.a.createElement(V,{condition:"/projects/Tether"===this.state.history.location().pathname},r.a.createElement(G.a,{onClick:function(){return e.routeTo("/projects")},className:"page-button page-button-left "+(n?"nav-queued":""),size:n?48:24}),r.a.createElement(M,null)),r.a.createElement(V,{condition:"/projects"===this.state.history.location().pathname},r.a.createElement(V,{condition:this.state.navQueued===L.Top||this.state.navQueued===L.Up},r.a.createElement(z.a,{onClick:function(){return e.routeTo("")},className:"page-button page-button-up "+(a?"nav-queued":""),size:a?48:24})),r.a.createElement(R,{ref:this.projectsPageRef,routeTo:this.routeTo})),r.a.createElement(V,{condition:""===this.state.history.location().pathname},r.a.createElement(O,{routeTo:this.routeTo}),r.a.createElement(F.a,{onClick:function(){return e.routeTo("/projects")},className:"page-button page-button-down "+(t?"nav-queued":""),size:t?48:24})))}}]),a}(r.a.Component),H=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).calculateParalaxOffset=function(e,t){var a=window.innerWidth/2,n=window.innerHeight/2,r=e.clientX,o=e.clientY;t.setOffsetLevel(0,{x:.01*(r-a),y:.01*(o-n)}),t.setOffsetLevel(1,{x:.02*(r-a),y:.02*(o-n)}),t.setOffsetLevel(2,{x:.06*(r-a),y:.03*(o-n)})},n.state={paralaxOffset:"0, 0, 0"},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.b,null,r.a.createElement(p.c,{to:[m]},(function(t){return r.a.createElement("div",{className:"paralax-container",onMouseMove:function(a){e.calculateParalaxOffset(a,t)}},e.props.children)})))}}]),a}(r.a.Component);var K=function(){return r.a.createElement(H,{className:"App"},r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.31c296f2.chunk.js.map