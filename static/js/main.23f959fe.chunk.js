(this.webpackJsonpwator=this.webpackJsonpwator||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),i=a.n(o),h=(a(86),a(76)),s=a.n(h),c=a(8),l=a(9),u=a(12),d=a(10),m=a(13),g=a(77),p=a.n(g),M=a(23),f=a.n(M),v=a(32),b=a(18),E=a.n(b);function y(e){return"undefined"===typeof e.energy}function w(e){return e[Math.floor(Math.random()*e.length)]}function k(e,t,a){var n=a.boardSize,r=t.indexOf(","),o=Number(t.slice(0,r)),i=Number(t.slice(r+1,t.length)),h=o<=0?"".concat(n.width-1,",").concat(i):"".concat(o-1,",").concat(i),s=o>=n.width?"0,".concat(i):"".concat(o+1,",").concat(i),c=i<=0?"".concat(o,",").concat(n.height-1):"".concat(o,",").concat(i-1),l=i>=n.height?"".concat(o,",0"):"".concat(o,",").concat(i+1),u=[];if(e[h]||u.push(h),e[s]||u.push(s),e[c]||u.push(c),e[l]||u.push(l),u.length>0){var d=w(u);return e[d]=e[t],delete e[t],d}return t}function S(e,t,a,n,r){var o=r.evolutionParams,i=e[a],h=y(i)?o.fishReproducingRate:o.sharkReproducingRate;i.cyclesSinceReproduce>=h&&t!==a&&(e[t]=n(),i.cyclesSinceReproduce=0)}function C(e,t,a){var n=e[t],r=t.indexOf(","),o=Number(t.slice(0,r)),i=Number(t.slice(r+1,t.length)),h=o<=0?"".concat(a.boardSize.width-1,",").concat(i):"".concat(o-1,",").concat(i),s=o>=a.boardSize.width?"0,".concat(i):"".concat(o+1,",").concat(i),c=i<=0?"".concat(o,",").concat(a.boardSize.height-1):"".concat(o,",").concat(i-1),l=i>=a.boardSize.height?"".concat(o,",0"):"".concat(o,",").concat(i+1),u=[];if(e[h]&&y(e[h])&&u.push(h),e[s]&&y(e[s])&&u.push(s),e[c]&&y(e[c])&&u.push(c),e[l]&&y(e[l])&&u.push(l),u.length>0){var d=function(e,t,a){if(e.length>0){var n=w(e);return t[n]=t[a],delete t[a],n}return a}(u,e,t);return n.energy=a.evolutionParams.sharkMaxEnergy,d}if(n.energy>a.evolutionParams.sharkMaxEnergy)n.energy=a.evolutionParams.sharkMaxEnergy;else if(0===n.energy)return delete e[t],null;return n.energy--,k(e,t,a)}function x(e){for(var t=e.startParams,a=e.boardSize,n=e.evolutionParams,r={},o=t.startFishNumber+t.startSharkNumber,i=0;i<o;){var h=Math.floor(a.width*Math.random()),s=Math.floor(a.height*Math.random()),c="".concat(h,",").concat(s);r[c]||(r[c]=i<t.startSharkNumber?{cyclesSinceReproduce:0,energy:n.sharkMaxEnergy}:{cyclesSinceReproduce:0},i++)}return r}var _=function e(t,a){var n=this,r=t.boardSize,o=t.brickSize;Object(c.a)(this,e),this.canvas=a,this.ctx=void 0,this.fishImg=void 0,this.sharkImg=void 0,this.fishColor="#ffc107",this.sharkColor="#1565c0",this.drawPetImg=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;n.ctx.drawImage(r,e*a.width,t*a.height,a.width,a.height)},this.drawRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#0000ff";n.ctx.fillStyle=o,n.ctx.fillRect(e*a.width,t*a.height,a.width,a.height*r)},this.clear=function(){n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height)},this.drawRectPetMap=function(e,t){var a=t.boardSize,r=t.brickSize;n.clear();for(var o=0;o<a.width;o++){for(var i={y:0,type:void 0,height:0},h=0;h<a.height;h++){var s=e["".concat(o,",").concat(h)],c=s?y(s)?"fish":"shark":void 0;if(c===i.type)i.height++;else{if(i.type){var l="fish"===i.type?n.fishColor:n.sharkColor;n.drawRect(o,i.y,r,i.height,l)}i={type:c,y:h,height:1}}}if(i.type){var u="fish"===i.type?n.fishColor:n.sharkColor;n.drawRect(o,i.y,r,i.height,u)}}},this.drawPetMap=function(e,t){var a=t.boardSize,r=t.brickSize;n.clear();for(var o=0;o<a.width;o++)for(var i=0;i<a.height;i++){var h=e["".concat(o,",").concat(i)],s=h?y(h)?"fish":"shark":void 0;if(s){var c="fish"===s?n.fishImg:n.sharkImg;n.drawPetImg(o,i,r,c)}}},this.ctx=this.canvas.getContext("2d"),this.canvas.width=r.width*o.width,this.canvas.height=r.height*o.height,this.fishImg=new Image,this.fishImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABBUlEQVRIS+2UuxHCMAyGpSoFk7AALQUtRcZgCuZgixRMkBGosghNKnF+yNiO35dzFTW5JL/1Wb9sIXQI7MCAA0La5iInikRe34he6gs+1CPX16xAJ+CdQyFA6E1uH2Lb8E88D8HN4nUNVUI0D2D/syF0n0Z4jxMgIghhLgIQCYBldax0IERq8wayrADnNEyD5DoGiDWxSqTOiLmMApCpmLXJSmIWNYBCldD3dpEbOj0/21bsBJEuBUENgFjjmwG1jd82PXeGxUl070r2CHNKJbRDWOaFHinVl9FO44DYEh4pLEzMruRYcUDWC19aMxxlCTsPyBw82b3SKVxwBOKSA1JlXxe7fkbZeRqVRmsFAAAAAElFTkSuQmCC",this.sharkImg=new Image,this.sharkImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABI0lEQVRIS92VsRHCMAxF444FoIRRYBkYCpaBUaCEBejMycn3yUaS5RQ5jjQJVuSnL/2YMCxwhQUYw89AoqHWKhJ5oaUkro9XlfG6HCjG98gFUR7iZiUcQAlIrNcn0FdBLYipoJaGAqR1KkBS0gXAxu/HfVhtdwVHUzILoIFMCAVjHGe4Od3UwT/P+xQLIaR51WokSFYxBRPIgqAYQAgIEHdeYT+4BhBKclg4qcF73RALgB6iIA/E89EVs3EozF3CgwjhbYMRMGgQJVh9EqgQPnwabA2h37Quzc0F4QBUjk35natSjprR4pPsol3cmpICtAoKuYUp5lbC28GfaRMpNluJNGTJDLOVcL8aDsqveZSkLqiHVH+gON1b/4z92wsZ/wP5APhM3xrh3vlOAAAAAElFTkSuQmCC"},O=a(34),A=(a(142),{backgroundColor:"#5c86ff"}),N={borderColor:"#5c86ff"},R=Object(O.a)(O.b),P=function(e,t,a){var n=t-e;return Math.floor((100-a)*n/100)+e},j=function(e,t,a){return 100-100/(t-e)*(a-e)},B=function(e,t){return 100/(t-e)},F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).formatValue=function(e){return Math.round(e)},a.onSliderChange=function(e,t,n){return function(r){a.props.onChange(Object(v.a)({},e,P(t,n,r)))}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.className;return r.a.createElement("form",{className:a},r.a.createElement("div",null,r.a.createElement("label",null,"Fish reproducing rate"),r.a.createElement(R,{min:1,max:100,step:B(80,150),onChange:this.onSliderChange("fishReproducingRate",80,150),value:j(80,150,t.fishReproducingRate),trackStyle:A,handleStyle:N,tipFormatter:this.formatValue})),r.a.createElement("div",null,r.a.createElement("label",null,"Shark reproducing rate"),r.a.createElement(R,{min:1,max:100,step:B(80,130),onChange:this.onSliderChange("sharkReproducingRate",80,130),value:j(80,130,t.sharkReproducingRate),trackStyle:A,handleStyle:N,tipFormatter:this.formatValue})),r.a.createElement("div",null,r.a.createElement("label",null,"Shark hunger"),r.a.createElement(R,{min:1,max:100,step:B(5,105),onChange:this.onSliderChange("sharkMaxEnergy",5,105),value:j(5,105,t.sharkMaxEnergy),trackStyle:A,handleStyle:N,tipFormatter:this.formatValue})),r.a.createElement("div",null,r.a.createElement("label",null,"Game speed"),r.a.createElement(R,{min:1,max:100,step:B(5,105),onChange:this.onSliderChange("gameSpeed",5,105),value:j(5,105,t.gameSpeed),trackStyle:A,handleStyle:N,tipFormatter:this.formatValue})))}}]),t}(r.a.Component),z={backgroundColor:"#6d58ff"},D={borderColor:"#6d58ff"},I=Object(O.a)(O.b),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onSliderChange=function(e){return function(t){a.props.onChange(Object(v.a)({},e,t))}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.className;return r.a.createElement("form",{className:a},r.a.createElement("div",null,r.a.createElement("label",null,"Fish number at start"),r.a.createElement(I,{min:1,max:2500,value:t.startFishNumber,onChange:this.onSliderChange("startFishNumber"),trackStyle:z,handleStyle:D})),r.a.createElement("div",null,r.a.createElement("label",null,"Shark number at start"),r.a.createElement(I,{min:1,max:2500,value:t.startSharkNumber,onChange:this.onSliderChange("startSharkNumber"),trackStyle:z,handleStyle:D})))}}]),t}(r.a.Component),L=a(27),V=a.n(L),W={timeout:function(e){return e.stepsCounter>=20},overpopulation:function(e){var t=e.petMap,a=e.config;return Object.keys(t).length>=a.boardSize.height*a.boardSize.width},extinction:function(e){var t=e.petMap;return 0===Object.keys(t).length}};var U=a(47),Q=a.n(U),Y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isPlaying,a=e.onClick,r=Q.a.root+" ".concat(t?Q.a.playing:Q.a.paused);return n.createElement("button",{className:r,onClick:a},n.createElement("i",null,"P"),n.createElement("i",null,"l"),n.createElement("i",null,"a"),n.createElement("i",null,"y"),n.createElement("i",null,"use"))}}]),t}(n.Component),J=a(39),T=a.n(J),G=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.createElement("button",{className:T.a.root,onClick:this.props.onClick},n.createElement("span",{className:T.a.icon},n.createElement("span",{className:T.a.iconBorder}),n.createElement("span",{className:T.a.iconArrow})),"Reset")}}]),t}(n.Component);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z=160,X=255,$=1,ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).playground=void 0,a.setPlayground=function(e){return a.playground=e},a.petMap=void 0,a.gameLoop=void 0,a.stepsCounter=0,a.canvas=void 0,a.initCanvas=function(e){a.canvas=e},a.processExitConditions=function(){var e;a.props.onExit&&a.state.config.exitConditions&&!a.state.exitProcessed&&((e={stepsCounter:a.stepsCounter,petMap:a.petMap,config:a.state.config}).config.exitConditions&&e.config.exitConditions.find((function(t){return W[t](e)})))&&(a.props.onExit(),a.setState({exitProcessed:!0}))},a.step=function(){a.processExitConditions(),a.stepsCounter++,a.state.config.rectMode?a.playground.drawRectPetMap(a.petMap,a.state.config):a.playground.drawPetMap(a.petMap,a.state.config),function(e,t){var a=Object.keys(e),n=a.filter((function(t){return y(e[t])})),r=a.filter((function(t){return!y(e[t])}));n.forEach((function(a){var n=k(e,a,t);e[n].cyclesSinceReproduce++,S(e,a,n,(function(){return{cyclesSinceReproduce:0}}),t)})),r.forEach((function(a){var n=C(e,a,t);n&&(e[n].cyclesSinceReproduce++,S(e,a,n,(function(){return{cyclesSinceReproduce:0,energy:t.evolutionParams.sharkMaxEnergy}}),t))}))}(a.petMap,a.state.config)},a.onPlayButtonClick=function(){a.state.initialized?a.state.isRunning?a.pause():a.play():a.onStart()},a.onStart=function(){a.setState({exitProcessed:!1,initialized:!0}),a.stepsCounter=0,a.petMap=x(a.state.config),a.play()},a.setConfig=function(e){a.setState({config:K({},a.state.config,{},e)})},a.getFittableSize=function(){var e=a.state.config.brickSize,t=document.getElementsByClassName(V.a.root)[0],n=document.getElementsByClassName(f.a.content)[0].lastElementChild,r=t.getBoundingClientRect(),o=n.getBoundingClientRect(),i=Math.ceil(X/e.width);return{width:Math.floor(r.width/e.width)-i,height:Math.min(Z-e.height,Math.floor(o.height/e.height))-$}},a.pause=function(){a.setState({isRunning:!1}),clearInterval(a.gameLoop)},a.play=function(){a.setState({isRunning:!0}),a.gameLoop=setInterval((function(){return requestAnimationFrame(a.step)}),a.gameSpeed)},a.reset=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.startParams,n=e.evolutionParams;a.pause(),a.setState({initialized:!1}),a.setConfig({startParams:K({},a.state.config.startParams,{},t),evolutionParams:K({},a.state.config.evolutionParams,{},n)}),a.playground=new _(a.state.config,a.canvas),a.setState({exitProcessed:!1,initialized:!0}),a.stepsCounter=0,a.petMap=x(a.state.config),a.state.isRunning?(clearInterval(a.gameLoop),a.play()):a.step()},a.setEvolutionParams=function(e){a.setConfig({evolutionParams:K({},a.state.config.evolutionParams,{},e)}),a.state.isRunning&&(clearInterval(a.gameLoop),a.gameLoop=setInterval((function(){return requestAnimationFrame(a.step)}),a.gameSpeed))},a.setStartParams=function(e){a.setConfig({startParams:K({},a.state.config.startParams,{},e)})},a.state={isRunning:!1,exitProcessed:!1,initialized:!1,config:a.props.initialConfig},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"gameSpeed",get:function(){return this.state.config.evolutionParams.gameSpeed}}]),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.getFittableSize();this.setConfig({boardSize:e}),this.setPlayground(new _(this.state.config,this.canvas))}},{key:"componentDidUpdate",value:function(e){e.isActive&&!this.props.isActive&&this.state.isRunning&&this.pause()}},{key:"render",value:function(){var e=this.props,t=e.withControls,a=e.isActive,n=this.state,o=n.isRunning,i=n.config,h=n.exitProcessed;return r.a.createElement("div",{className:E.a.root},r.a.createElement("div",{className:E.a.oceanWrapper},r.a.createElement("canvas",{ref:this.initCanvas,width:i&&i.brickSize.width*i.boardSize.width,height:i&&i.brickSize.height*i.boardSize.height}),!o&&a&&!t&&r.a.createElement("div",{className:E.a.overlay},r.a.createElement(Y,{isPlaying:!1,onClick:this.onStart})),h&&r.a.createElement("div",{className:E.a.exitOverlay})),t&&r.a.createElement("div",{className:E.a.controls},r.a.createElement("div",{className:E.a.controlsButtons},r.a.createElement(Y,{isPlaying:o,onClick:this.onPlayButtonClick}),r.a.createElement(G,{onClick:this.reset})),r.a.createElement(H,{className:E.a.startControls,onChange:this.setStartParams,values:this.state.config.startParams}),r.a.createElement(F,{className:E.a.evolutionControls,values:this.state.config.evolutionParams,onChange:this.setEvolutionParams})))}}]),t}(r.a.Component),te={brickSize:{width:40,height:40},boardSize:{width:60,height:30},evolutionParams:{fishReproducingRate:1/0,sharkReproducingRate:0,sharkMaxEnergy:0,gameSpeed:120},startParams:{startFishNumber:1,startSharkNumber:0},exitConditions:["timeout"]},ae={brickSize:{width:20,height:20},boardSize:{width:60,height:30},evolutionParams:{fishReproducingRate:20,sharkReproducingRate:0,sharkMaxEnergy:0,gameSpeed:60},startParams:{startFishNumber:2,startSharkNumber:0},exitConditions:["overpopulation"]},ne={brickSize:{width:20,height:20},boardSize:{width:185,height:100},evolutionParams:{fishReproducingRate:80,sharkReproducingRate:40,sharkMaxEnergy:35,gameSpeed:80},startParams:{startFishNumber:200,startSharkNumber:200},exitConditions:["overpopulation","extinction"]},re={brickSize:{width:4,height:4},boardSize:{width:185,height:100},evolutionParams:{fishReproducingRate:100,sharkReproducingRate:135,sharkMaxEnergy:79,gameSpeed:50},startParams:{startFishNumber:2e3,startSharkNumber:2e3},rectMode:!0},oe=function(e){var t=e.children,a=e.isActive,n=e.ocean,o=e.nextStep,i=r.a.Children.map(t,(function(e){return e&&r.a.isValidElement(e)&&"string"!==typeof e.type?r.a.cloneElement(e,{isActive:a,nextStep:o}):e})),h=V.a.root+(a?"":" ".concat(V.a.inactive))+(n?" ".concat(V.a.ocean):"");return r.a.createElement("div",{className:h},r.a.createElement("div",{className:V.a.pageContent},i))},ie=a(35),he=a.n(ie),se=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.totalSteps,a=e.currentStep,n=e.goToStep,o=[],i=function(e){var t=a===e;o.push(r.a.createElement("div",{key:"step-".concat(e),className:"".concat(he.a.item," ").concat(t?he.a.active:""),onClick:function(){return n&&n(e)}}))},h=1;t&&h<=t;h+=1)i(h);return r.a.createElement("footer",{className:he.a.root},r.a.createElement("div",{className:he.a.navigation},o),r.a.createElement("div",{className:he.a.facebookBtn},r.a.createElement("div",{className:"fb-share-button","data-href":"https://developers.facebook.com/docs/plugins/","data-layout":"button","data-size":"large"})))}}]),t}(r.a.Component),ce=function(){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",shapeRendering:"crispEdges",width:"200px",height:"200px"},n.createElement("path",{stroke:"#000000",d:"M13 4h2M12 5h1M15 5h1M9 6h3M14 6h1M21 6h1M3 7h2M6 7h3M15 7h1M20 7h1M22 7h1M2 8h1M5 8h1M15 8h1M19 8h1M22 8h1M2 9h1M5 9h1M16 9h3M22 9h1M3 10h2M22 10h1M2 11h1M22 11h1M1 12h1M22 12h1M2 13h1M22 13h1M1 14h1M16 14h3M22 14h1M2 15h2M16 15h1M19 15h1M22 15h1M4 16h1M14 16h2M20 16h1M22 16h1M5 17h1M9 17h2M15 17h1M21 17h1M6 18h3M11 18h1M15 18h1M12 19h3"}),n.createElement("path",{stroke:"#ff9800",d:"M13 5h2M12 6h2M21 8h1M7 9h1M20 9h1M8 10h1M19 10h1M21 10h1M9 11h1M20 11h1M9 12h1M20 12h1M8 13h1M19 13h1M21 13h1M7 14h1M20 14h1M21 15h1M9 16h5M11 17h4M12 18h3"}),n.createElement("path",{stroke:"#ffc107",d:"M9 7h6M21 7h1M6 8h9M20 8h1M6 9h1M8 9h8M19 9h1M21 9h1M5 10h3M9 10h10M20 10h1M3 11h6M10 11h10M21 11h1M4 12h5M10 12h10M21 12h1M5 13h3M9 13h10M20 13h1M4 14h3M8 14h8M19 14h1M21 14h1M4 15h12M20 15h1M5 16h4M21 16h1M6 17h3"}),n.createElement("path",{stroke:"#4caf50",d:"M3 8h1"}),n.createElement("path",{stroke:"#ffffff",d:"M4 8h1M3 9h2"}),n.createElement("path",{stroke:"#f44336",d:"M2 12h2M3 13h2M2 14h2"}))},le=function(){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",shapeRendering:"crispEdges",height:"200px",width:"200px"},n.createElement("path",{stroke:"#000000",d:"M8 3h7M22 3h2M7 4h1M15 4h1M19 4h3M23 4h1M6 5h1M10 5h1M12 5h1M16 5h1M18 5h1M23 5h1M5 6h1M17 6h1M23 6h1M4 7h1M23 7h1M3 8h1M23 8h1M3 9h1M5 9h1M17 9h1M23 9h1M2 10h1M5 10h2M15 10h1M17 10h1M22 10h1M2 11h1M5 11h3M15 11h3M22 11h1M2 12h1M5 12h2M16 12h2M22 12h1M1 13h1M9 13h5M21 13h1M1 14h1M7 14h3M13 14h3M21 14h1M1 15h1M6 15h2M9 15h1M13 15h1M15 15h2M21 15h1M1 16h1M5 16h2M9 16h1M11 16h1M13 16h1M16 16h2M21 16h1M1 17h1M5 17h1M7 17h1M11 17h1M15 17h1M17 17h1M21 17h1M1 18h1M5 18h1M7 18h2M10 18h3M14 18h2M17 18h1M21 18h1M1 19h1M5 19h1M8 19h3M12 19h3M17 19h1M21 19h1M1 20h1M5 20h4M14 20h4M21 20h1M2 21h19"}),n.createElement("path",{stroke:"#1565c0",d:"M8 4h7M22 4h1M7 5h3M11 5h1M13 5h3M19 5h4M6 6h11M18 6h5M5 7h13M19 7h4M4 8h15M20 8h3M4 9h1M8 9h7M18 9h1M20 9h3M3 10h2M8 10h7M18 10h2M21 10h1M3 11h2M8 11h7M18 11h2M21 11h1M3 12h2M7 12h9M18 12h2M21 12h1M2 13h7M14 13h7M2 14h5M16 14h5M2 15h4M17 15h4M2 16h3M18 16h3M2 17h3M18 17h3M2 18h3M18 18h3M2 19h3M11 19h1M18 19h3M2 20h3M9 20h5M18 20h3"}),n.createElement("path",{stroke:"#0d47a1",d:"M18 7h1M19 8h1M19 9h1M20 10h1M20 11h1M20 12h1"}),n.createElement("path",{stroke:"#ffffff",d:"M6 9h2M15 9h2M7 10h1M16 10h1M10 14h3M8 15h1M10 15h3M14 15h1M7 16h2M10 16h1M12 16h1M14 16h2M6 17h1M8 17h3M12 17h3M16 17h1M6 18h1M9 18h1M13 18h1M16 18h1M6 19h2M15 19h2"}))},ue=a(40),de=a.n(ue),me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={hovered:!1},a.onMouseEnter=function(){a.setState({hovered:!0})},a.onMouseLeave=function(){a.setState({hovered:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.nextStep,a=e.forOcean,r=e.children,o=this.state.hovered,i=de.a.root+(a?" ".concat(de.a.forOcean):""),h=de.a.button+(o?" ".concat(de.a.in):"");return n.createElement("div",{className:i},n.createElement("button",{className:h,onClick:t,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},n.createElement("span",null,r)))}}]),t}(n.Component),ge=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).oneFishExit=function(){return a.setState({showOneFishNext:!0})},a.manyFishExit=function(){return a.setState({showManyFishNext:!0})},a.doomedExit=function(){return a.setState({showDoomedNext:!0})},a.cleanState=function(){return a.setState({showOneFishNext:!1,showManyFishNext:!1,showDoomedNext:!1})},a.state={showOneFishNext:!1,showManyFishNext:!1,showDoomedNext:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.showOneFishNext,a=e.showManyFishNext,n=e.showDoomedNext;return r.a.createElement("div",{className:f.a.root},r.a.createElement("header",{className:f.a.header},"Wator"),r.a.createElement(p.a,{className:f.a.content,nav:r.a.createElement(se,null),isLazyMount:!1,onStepChange:this.cleanState},r.a.createElement(oe,null,r.a.createElement("p",null,"It happened some time ago in a galaxy nearby. This galaxy was created and inhabited by a powerful space sprit. He looked like a giant misty pillow with stellar background shining through him. The spirit called himself God while other spirits from neighbour galaxies called him simply Josh."),r.a.createElement("p",null,"Josh has just returned home after visiting Earth. Heavily, like a rainy cloud he drifted through the void. He was thinking about life. The Earth was swarming with life, yet not a single planet in his own galaxy had even a spark of it. All the stars he created were shining in vane."),r.a.createElement("p",null,"He was passing a system with a small yellow star similar to the Sun when he started glowing with an idea. He ought to create the life of his own."),r.a.createElement(me,null,"And then...")),r.a.createElement(oe,null,r.a.createElement("p",null,"First he created a small planet on its orbit. He knew all life on Earth began in water so he filled his planet with a crystal blue ocean that covered every bit of the rocky land. The he filled his ocean with endless tiny weed so that no life ever dies from hunger. And then he created Dave, a fish."),r.a.createElement("div",{className:f.a.illustration},r.a.createElement(ce,null)),r.a.createElement(me,null,"Behold the Genesis")),r.a.createElement(oe,{ocean:!0},r.a.createElement(ee,{withControls:!1,initialConfig:te,onExit:this.oneFishExit}),t&&r.a.createElement(me,{forOcean:!0},"Proceed")),r.a.createElement(oe,null,r.a.createElement("p",null,"For a brief moment he was happy. But suddenly he understood that Dave lacks something very important for life. The purpose. He looked at Earth and right away he knew what he should do. He gave Dave an ability to give birth."),r.a.createElement(me,null,"How Dave is craving his purpose?")),r.a.createElement(oe,{ocean:!0},r.a.createElement(ee,{withControls:!1,initialConfig:ae,onExit:this.manyFishExit}),a&&r.a.createElement(me,{forOcean:!0},"Proceed")),r.a.createElement(oe,null,r.a.createElement("p",null,"Oh no, Dave went out of control and kept reproducing until the ocean became overcrowded. He wanted Dave to be happy but instead he condemned him and all his family to miserable existence in this uninhabitable world. Josh was furious. He had to fix this."),r.a.createElement("p",null,"Storming in rage he evaporated the ocean leaving the planet sterile. When his thoughts where clear again he made a new ocean and a new Dave. He decided to make life balance life."),r.a.createElement(me,null,"Seek for the balance")),r.a.createElement(oe,null,r.a.createElement("p",null,"He created Ed, a shark, a necessary evil. Ed would not eat weed like Dave, he would eat Dave."),r.a.createElement("div",{className:f.a.illustration},r.a.createElement(le,null)),r.a.createElement("p",null,"Josh knew he should be careful not to make old mistakes. He let sharks breed, but he also made them die if they don't eat. This way it was just."),r.a.createElement(me,null,"But is it really that simple?")),r.a.createElement(oe,{ocean:!0},r.a.createElement(ee,{withControls:!1,initialConfig:ne,onExit:this.doomedExit}),n&&r.a.createElement(me,{forOcean:!0},"Proceed")),r.a.createElement(oe,null,r.a.createElement("p",null,"Something was not quite right. This world was dead again. Sharks ate all the fish and died of hunger. He thought that he could fix it by making Ed breed slowly."),r.a.createElement("p",null,"Now Josh was faced with an ultimate challenge: how to strike the balance."),r.a.createElement(me,null,"Let's give a helping hand")),r.a.createElement(oe,{ocean:!0},r.a.createElement(ee,{withControls:!0,initialConfig:re}))))}}]),t}(r.a.Component),pe=function(){return r.a.createElement("div",{className:s.a.root},r.a.createElement(ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},18:function(e,t,a){e.exports={root:"Ocean_root__2vubK",oceanWrapper:"Ocean_oceanWrapper__pD5FV",overlay:"Ocean_overlay__WeTpR",exitOverlay:"Ocean_exitOverlay__2oCHC",controls:"Ocean_controls__1yAmT",controlsButtons:"Ocean_controlsButtons__1Dp2Z",startControls:"Ocean_startControls__exfp0",evolutionControls:"Ocean_evolutionControls__2dpEA"}},23:function(e,t,a){e.exports={root:"Wizard_root__3jBbf",header:"Wizard_header__3bqAQ",content:"Wizard_content__gbpAh",illustration:"Wizard_illustration__1KHTa"}},27:function(e,t,a){e.exports={root:"WizardPage_root__HAYob",ocean:"WizardPage_ocean__3djDl",inactive:"WizardPage_inactive__3s-pf",pageContent:"WizardPage_pageContent__12Fnz"}},35:function(e,t,a){e.exports={root:"Navigation_root__1HmIl",navigation:"Navigation_navigation__z7Rs0",item:"Navigation_item__1d4Is",active:"Navigation_active__12WqF",facebookBtn:"Navigation_facebookBtn__21RjW"}},39:function(e,t,a){e.exports={root:"ResetButton_root__m6DOe",icon:"ResetButton_icon__14wBL",spin:"ResetButton_spin__jM9yP",iconArrow:"ResetButton_iconArrow__1D1-r",iconBorder:"ResetButton_iconBorder__2wuP5"}},40:function(e,t,a){e.exports={root:"NextButton_root__3DBBR",forOcean:"NextButton_forOcean__1v6lH",button:"NextButton_button__3s9hr",in:"NextButton_in__3x1hg",out:"NextButton_out__231nm"}},47:function(e,t,a){e.exports={root:"PlayButton_root__34r0a",paused:"PlayButton_paused__4GVyH","background-paused":"PlayButton_background-paused__2YDbQ","to-play":"PlayButton_to-play__173FQ",playing:"PlayButton_playing__3p1xt","to-pause":"PlayButton_to-pause__1XVZv","background-playing":"PlayButton_background-playing__3OdDh"}},76:function(e,t,a){e.exports={root:"App_root__nWMuC"}},81:function(e,t,a){e.exports=a(143)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.23f959fe.chunk.js.map