(this.webpackJsonptmfarewell=this.webpackJsonptmfarewell||[]).push([[0],{104:function(e,t,i){e.exports=i.p+"static/media/sath-1.eb242bb7.png"},105:function(e,t,i){e.exports=i.p+"static/media/sath-2.3880c594.png"},106:function(e,t,i){e.exports=i.p+"static/media/sath-3.c1dd3475.png"},107:function(e,t,i){e.exports=i.p+"static/media/sath-bck-1.1ca0a4f6.JPG"},108:function(e,t,i){e.exports=i.p+"static/media/sath-bck-2.85b5f5cc.JPG"},109:function(e,t,i){e.exports={maback:"mystyle_maback__22HNe",mback:"mystyle_mback__2i8Fe"}},110:function(e,t,i){e.exports=i.p+"static/media/shashank.ab25a04f.png"},114:function(e,t,i){e.exports=i(204)},119:function(e,t,i){},181:function(e,t){e.exports="\nprecision highp float;\n#define GLSLIFY 1\n\nattribute float pindex;\nattribute vec3 position;\nattribute vec3 offset;\nattribute vec2 uv;\nattribute float angle;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uTime;\nuniform float uRandom;\nuniform float uDepth;\nuniform float uSize;\nuniform vec2 uTextureSize;\nuniform sampler2D uTexture;\nuniform sampler2D uTouch;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1_0(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1_1(vec3 x) {\n  return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1_2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\nfloat random(float n) {\n\treturn fract(sin(n) * 43758.5453123);\n}\n\nvoid main() {\n\tvUv = uv;\n\n\t// particle uv\n\tvec2 puv = offset.xy / uTextureSize;\n\tvPUv = puv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\n\t// displacement\n\tvec3 displaced = offset;\n\t// randomise\n\tdisplaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;\n\tfloat rndz = (random(pindex) + snoise_1_2(vec2(pindex * 0.1, uTime * 0.1)));\n\tdisplaced.z += rndz * (random(pindex) * 2.0 * uDepth);\n\t// center\n\tdisplaced.xy -= uTextureSize * 0.5;\n\n\t// touch\n\tfloat t = texture2D(uTouch, puv).r;\n\tdisplaced.z += t * 20.0 * rndz;\n\tdisplaced.x += cos(angle) * t * 20.0 * rndz;\n\tdisplaced.y += sin(angle) * t * 20.0 * rndz;\n\n\t// particle size\n\tfloat psize = (snoise_1_2(vec2(uTime, pindex) * 0.5) + 2.0);\n\tpsize *= max(grey, 0.2);\n\tpsize *= uSize;\n\n\t// final position\n\tvec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);\n\tmvPosition.xyz += position * psize;\n\tvec4 finalPosition = projectionMatrix * mvPosition;\n\n\tgl_Position = finalPosition;\n}\n"},182:function(e,t){e.exports="\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D uTexture;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 color = vec4(0.0);\n\tvec2 uv = vUv;\n\tvec2 puv = vPUv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\n\t// greyscale\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\tvec4 colB = vec4(grey, grey, grey, 1.0);\n\n\t// circle\n\tfloat border = 0.3;\n\tfloat radius = 0.5;\n\tfloat dist = radius - distance(uv, vec2(0.5));\n\tfloat t = smoothstep(0.0, border, dist);\n\n\t// final color\n\tcolor = colB;\n\tcolor.a = t;\n\n\tgl_FragColor = color;\n}"},204:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(99),r=i.n(s),o=(i(119),i(61)),h=i.n(o),c=i(18),l=i(16),u=i(5),d=i(21),v=i(112),m=i(111),p=i(100),f=i.n(p),b=i(101),g=!1,w=!1,x=function(){return!!function(){if(g)return w;g=!0;var e=Object.defineProperty({},"passive",{get:function(){w=!0}});try{window.addEventListener("test",null,e)}catch(t){return w}return window.removeEventListener("test",null,e),w}()&&{passive:!0}},y=function(e){Object(v.a)(i,e);var t=Object(m.a)(i);function i(e,n){var a;return Object(c.a)(this,i),(a=t.call(this)).camera=e,a.el=n||window,a.plane=new u.j,a.raycaster=new u.n,a.mouse=new u.r,a.offset=new u.s,a.intersection=new u.s,a.objects=[],a.hovered=null,a.selected=null,a.isDown=!1,a.browser=Object(b.a)(),a.enable(),a}return Object(l.a)(i,[{key:"enabled",get:function(){return this._enabled}}]),Object(l.a)(i,[{key:"enable",value:function(){this.enabled||(this.addListeners(),this._enabled=!0)}},{key:"disable",value:function(){this.enabled&&(this.removeListeners(),this._enabled=!1)}},{key:"addListeners",value:function(){this.handlerDown=this.onDown.bind(this),this.handlerMove=this.onMove.bind(this),this.handlerUp=this.onUp.bind(this),this.handlerLeave=this.onLeave.bind(this),this.browser.mobile?(this.el.addEventListener("touchstart",this.handlerDown,x),this.el.addEventListener("touchmove",this.handlerMove,x),this.el.addEventListener("touchend",this.handlerUp,x)):(this.el.addEventListener("mousedown",this.handlerDown),this.el.addEventListener("mousemove",this.handlerMove),this.el.addEventListener("mouseup",this.handlerUp),this.el.addEventListener("mouseleave",this.handlerLeave))}},{key:"removeListeners",value:function(){this.browser.mobile?(this.el.removeEventListener("touchstart",this.handlerDown),this.el.removeEventListener("touchmove",this.handlerMove),this.el.removeEventListener("touchend",this.handlerUp)):(this.el.removeEventListener("mousedown",this.handlerDown),this.el.removeEventListener("mousemove",this.handlerMove),this.el.removeEventListener("mouseup",this.handlerUp),this.el.removeEventListener("mouseleave",this.handlerLeave))}},{key:"resize",value:function(e,t,i,n){e||t||i||n?this.rect={x:e,y:t,width:i,height:n}:this.el===window?this.rect={x:0,y:0,width:window.innerWidth,height:window.innerHeight}:this.rect=this.el.getBoundingClientRect()}},{key:"onMove",value:function(e){var t=e.touches?e.touches[0]:e,i=t.clientX,n=t.clientY;this.mouse.x=(i+this.rect.x)/this.rect.width*2-1,this.mouse.y=-(n+this.rect.y)/this.rect.height*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var a=this.raycaster.intersectObjects(this.objects);if(a.length>0){var s=a[0].object;this.intersectionData=a[0],this.plane.setFromNormalAndCoplanarPoint(this.camera.getWorldDirection(this.plane.normal),s.position),this.hovered!==s?(this.emit("interactive-out",{object:this.hovered}),this.emit("interactive-over",{object:s}),this.hovered=s):this.emit("interactive-move",{object:s,intersectionData:this.intersectionData})}else this.intersectionData=null,null!==this.hovered&&(this.emit("interactive-out",{object:this.hovered}),this.hovered=null)}},{key:"onDown",value:function(e){this.isDown=!0,this.onMove(e),this.emit("interactive-down",{object:this.hovered,previous:this.selected,intersectionData:this.intersectionData}),this.selected=this.hovered,this.selected&&this.raycaster.ray.intersectPlane(this.plane,this.intersection)&&this.offset.copy(this.intersection).sub(this.selected.position)}},{key:"onUp",value:function(e){this.isDown=!1,this.emit("interactive-up",{object:this.hovered})}},{key:"onLeave",value:function(e){this.onUp(e),this.emit("interactive-out",{object:this.hovered}),this.hovered=null}}]),i}(f.a),k=function(e,t,i,n){return i*Math.sin(e/n*(Math.PI/2))+t},j=function(){function e(t){Object(c.a)(this,e),this.parent=t,this.size=64,this.maxAge=120,this.radius=.15,this.trail=[],this.initTexture()}return Object(l.a)(e,[{key:"initTexture",value:function(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new u.p(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height="".concat(this.canvas.width,"px")}},{key:"update",value:function(e){var t=this;this.clear(),this.trail.forEach((function(e,i){e.age++,e.age>t.maxAge&&t.trail.splice(i,1)})),this.trail.forEach((function(e,i){t.drawTouch(e)})),this.texture.needsUpdate=!0}},{key:"clear",value:function(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"addTouch",value:function(e){var t=0,i=this.trail[this.trail.length-1];if(i){var n=i.x-e.x,a=i.y-e.y,s=n*n+a*a;t=Math.min(1e4*s,1)}this.trail.push({x:e.x,y:e.y,age:0,force:t})}},{key:"drawTouch",value:function(e){var t={x:e.x*this.size,y:(1-e.y)*this.size},i=1;i=e.age<.3*this.maxAge?k(e.age/(.3*this.maxAge),0,1,1):k(1-(e.age-.3*this.maxAge)/(.7*this.maxAge),0,1,1),i*=e.force;var n=this.size*this.radius*i,a=this.ctx.createRadialGradient(t.x,t.y,.25*n,t.x,t.y,n);a.addColorStop(0,"rgba(255, 255, 255, 0.2)"),a.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=a,this.ctx.arc(t.x,t.y,n,0,2*Math.PI),this.ctx.fill()}}]),e}(),D=i(102),z=(i(122),i(82)),A=function(){function e(t){Object(c.a)(this,e),this.webgl=t,this.container=new u.h}return Object(l.a)(e,[{key:"init",value:function(e){var t=this;(new u.q).load(e,(function(e){t.texture=e,t.texture.minFilter=u.e,t.texture.magFilter=u.e,t.texture.format=u.l,t.width=e.image.width,t.height=e.image.height,t.initPoints(!0),t.initHitArea(),t.initTouch(),t.resize(),t.show()}))}},{key:"initPoints",value:function(e){this.numPoints=this.width*this.height;var t,n=this.numPoints,a=0;if(e){n=0,a=34;var s=this.texture.image,r=document.createElement("canvas"),o=r.getContext("2d");r.width=this.width,r.height=this.height,o.scale(1,-1),o.drawImage(s,0,0,this.width,-1*this.height);var h=o.getImageData(0,0,r.width,r.height);t=Float32Array.from(h.data);for(var c=0;c<this.numPoints;c++)t[4*c+0]>a&&n++}var l={uTime:{value:0},uRandom:{value:1},uDepth:{value:2},uSize:{value:0},uTextureSize:{value:new u.r(this.width,this.height)},uTexture:{value:this.texture},uTouch:{value:null}},d=new u.m({uniforms:l,vertexShader:z(i(181)),fragmentShader:z(i(182)),depthTest:!1,transparent:!0}),v=new u.d,m=new u.a(new Float32Array(12),3);m.setXYZ(0,-.5,.5,0),m.setXYZ(1,.5,.5,0),m.setXYZ(2,-.5,-.5,0),m.setXYZ(3,.5,-.5,0),v.addAttribute("position",m);var p=new u.a(new Float32Array(8),2);p.setXYZ(0,0,0),p.setXYZ(1,1,0),p.setXYZ(2,0,1),p.setXYZ(3,1,1),v.addAttribute("uv",p),v.setIndex(new u.a(new Uint16Array([0,2,1,2,3,1]),1));for(var f=new Uint16Array(n),b=new Float32Array(3*n),g=new Float32Array(n),w=0,x=0;w<this.numPoints;w++)e&&t[4*w+0]<=a||(b[3*x+0]=w%this.width,b[3*x+1]=Math.floor(w/this.width),f[x]=w,g[x]=Math.random()*Math.PI,x++);v.addAttribute("pindex",new u.c(f,1,!1)),v.addAttribute("offset",new u.c(b,3,!1)),v.addAttribute("angle",new u.c(g,1,!1)),this.object3D=new u.f(v,d),this.container.add(this.object3D)}},{key:"initTouch",value:function(){this.touch||(this.touch=new j(this)),this.object3D.material.uniforms.uTouch.value=this.touch.texture}},{key:"initHitArea",value:function(){var e=new u.k(this.width,this.height,1,1),t=new u.g({color:16777215,wireframe:!0,depthTest:!1});t.visible=!1,this.hitArea=new u.f(e,t),this.container.add(this.hitArea)}},{key:"addListeners",value:function(){this.handlerInteractiveMove=this.onInteractiveMove.bind(this),this.webgl.interactive.addListener("interactive-move",this.handlerInteractiveMove),this.webgl.interactive.objects.push(this.hitArea),this.webgl.interactive.enable()}},{key:"removeListeners",value:function(){var e=this;this.webgl.interactive.removeListener("interactive-move",this.handlerInteractiveMove);var t=this.webgl.interactive.objects.findIndex((function(t){return t===e.hitArea}));this.webgl.interactive.objects.splice(t,1),this.webgl.interactive.disable()}},{key:"update",value:function(e){this.object3D&&(this.touch&&this.touch.update(),this.object3D.material.uniforms.uTime.value+=e)}},{key:"show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;d.a.fromTo(this.object3D.material.uniforms.uSize,e,{value:.5},{value:1.5}),d.a.to(this.object3D.material.uniforms.uRandom,e,{value:2}),d.a.fromTo(this.object3D.material.uniforms.uDepth,1.5*e,{value:40},{value:4}),this.addListeners()}},{key:"hide",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.8;return new Promise((function(n,a){d.a.to(t.object3D.material.uniforms.uRandom,i,{value:5,onComplete:function(){e&&t.destroy(),n()}}),d.a.to(t.object3D.material.uniforms.uDepth,i,{value:-20,ease:D.a.easeIn}),d.a.to(t.object3D.material.uniforms.uSize,.8*i,{value:0}),t.removeListeners()}))}},{key:"destroy",value:function(){this.object3D&&(this.object3D.parent.remove(this.object3D),this.object3D.geometry.dispose(),this.object3D.material.dispose(),this.object3D=null,this.hitArea&&(this.hitArea.parent.remove(this.hitArea),this.hitArea.geometry.dispose(),this.hitArea.material.dispose(),this.hitArea=null))}},{key:"resize",value:function(){if(this.object3D){var e=this.webgl.fovHeight/this.height;this.object3D.scale.set(e,e,1),this.hitArea.scale.set(e,e,1)}}},{key:"onInteractiveMove",value:function(e){var t=e.intersectionData.uv;this.touch&&this.touch.addTouch(t)}}]),e}(),_=(i(82),function(){function e(t,i){Object(c.a)(this,e),this.app=t,this.samples=void 0==i?[]:i,this.initThree(),this.initParticles(),this.initControls();this.goto(0)}return Object(l.a)(e,[{key:"initThree",value:function(){this.scene=new u.o,this.camera=new u.i(50,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.z=300,this.renderer=new u.t({antialias:!0,alpha:!0}),this.clock=new u.b(!0)}},{key:"clear",value:function(){this.renderer.clear()}},{key:"initControls",value:function(){this.interactive=new y(this.camera,this.renderer.domElement)}},{key:"initParticles",value:function(){this.particles=new A(this),this.scene.add(this.particles.container)}},{key:"update",value:function(){var e=this.clock.getDelta();this.particles&&this.particles.update(e)}},{key:"draw",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"goto",value:function(e){var t=this;null==this.currSample?this.particles.init(this.samples[e]):this.particles.hide(!0).then((function(){t.particles.init(t.samples[e])})),this.currSample=e}},{key:"next",value:function(){this.currSample<this.samples.length-1?this.goto(this.currSample+1):this.goto(0)}},{key:"resize",value:function(){this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.fovHeight=2*Math.tan(this.camera.fov*Math.PI/180/2)*this.camera.position.z,this.renderer.setSize(window.innerWidth,window.innerHeight),this.interactive&&this.interactive.resize(),this.particles&&this.particles.resize())}}]),e}()),L=(i(183),i(103)),E=i.n(L),C=function(){function e(t){Object(c.a)(this,e),this.app=t,this.particlesHitArea=!1,this.particlesRandom=2,this.particlesDepth=4,this.particlesSize=1.5,this.touchRadius=.15,this.range=[0,1],this.rangeRandom=[1,10],this.rangeSize=[0,3],this.rangeDepth=[1,10],this.rangeRadius=[0,.5],this.initControlKit()}return Object(l.a)(e,[{key:"initControlKit",value:function(){}},{key:"initStats",value:function(){this.stats=new E.a,document.body.appendChild(this.stats.dom)}},{key:"update",value:function(){if(this.touchCanvas){if(!this.app.webgl)return;if(!this.app.webgl.particles)return;if(!this.app.webgl.particles.touch)return;var e=this.app.webgl.particles.touch.canvas,t=Math.floor(.5*(this.touchCanvas.width-e.width));this.touchCtx.fillRect(0,0,this.touchCanvas.width,this.touchCanvas.height),this.touchCtx.drawImage(e,t,0)}}},{key:"enable",value:function(){this.controlKit.enable(),this.stats&&(this.stats.dom.style.display="")}},{key:"disable",value:function(){this.controlKit.disable(),this.stats&&(this.stats.dom.style.display="none")}},{key:"toggle",value:function(){this.controlKit._enabled?this.disable():this.enable()}},{key:"onTouchChange",value:function(){this.app.webgl&&this.app.webgl.particles&&(this.app.webgl.particles.touch.radius=this.touchRadius)}},{key:"onParticlesChange",value:function(){this.app.webgl&&this.app.webgl.particles&&(this.app.webgl.particles.object3D.material.uniforms.uRandom.value=this.particlesRandom,this.app.webgl.particles.object3D.material.uniforms.uDepth.value=this.particlesDepth,this.app.webgl.particles.object3D.material.uniforms.uSize.value=this.particlesSize,this.app.webgl.particles.hitArea.material.visible=this.particlesHitArea)}},{key:"onPostProcessingChange",value:function(){this.app.webgl.composer&&(this.app.webgl.composer.enabled=this.postProcessing)}}]),e}(),S=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"init",value:function(e){this.initWebGL(e),this.initGUI(),this.addListeners(),this.animate(),this.resize()}},{key:"clear",value:function(){this.webgl.clear()}},{key:"initWebGL",value:function(e){this.webgl=new _(this,e),document.querySelector(".container").appendChild(this.webgl.renderer.domElement)}},{key:"initGUI",value:function(){this.gui=new C(this)}},{key:"addListeners",value:function(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.keyup.bind(this)),this.webgl.renderer.domElement.addEventListener("click",this.click.bind(this))}},{key:"animate",value:function(){this.update(),this.draw(),this.raf=requestAnimationFrame(this.handlerAnimate)}},{key:"update",value:function(){this.gui.stats&&this.gui.stats.begin(),this.webgl&&this.webgl.update(),this.gui&&this.gui.update()}},{key:"draw",value:function(){this.webgl&&this.webgl.draw(),this.gui.stats&&this.gui.stats.end()}},{key:"resize",value:function(){this.webgl&&this.webgl.resize()}},{key:"keyup",value:function(e){71==e.keyCode&&this.gui&&this.gui.toggle()}},{key:"click",value:function(e){this.webgl.next()}}]),e}(),P=i(43),T=i(42),M=i.n(T),I=i(27),O=i.n(I),U=i(104),R=i.n(U),F=i(105),N=i.n(F),H=i(106),G=i.n(H),Y=i(50),X=i.n(Y),W=i(107),Z=i.n(W),q=i(108),B=i.n(q),J={imgs:[R.a,N.a,X.a,G.a],background:[Z.a,B.a]};var K=function(e){return Object(n.useEffect)((function(){document.getElementById("root");h()((function(){window.app=new S,window.app.init(e.obj.imgs)}))}),[]),a.a.createElement("div",{className:O.a.personback},e.obj.background.map((function(e){return a.a.createElement("img",{className:O.a.personbackimg,src:e})})))},V=i(109),$=i.n(V),Q=i(205),ee=i(206),te=i(110),ie={imgs:[i.n(te).a,X.a],background:[M.a,M.a,M.a]};var ne=function(e){var t=Object(n.useState)(""),i=Object(P.a)(t,2),s=i[0],r=i[1],o=function(){var t=null;switch(s){case"$ath@ppan":t=J;break;case"sample":t=ie}null!==t?(e.setName(t),e.setScene(!0)):alert("Invalid ID!")};return a.a.createElement("div",{className:O.a.maback},a.a.createElement(Q.a,{className:O.a.loginform,onSubmit:function(){return o()}},a.a.createElement(Q.a.Control,{className:O.a.login,onChange:function(e){return r(e.target.value)},placeholder:"Enter your ID"})),a.a.createElement(ee.a,{className:O.a.butto,variant:"warning",size:"lg",onClick:function(){return o()}},"Login"))};function ae(){var e=Object(n.useState)(!1),t=Object(P.a)(e,2),i=t[0],s=t[1],r=Object(n.useState)({}),o=Object(P.a)(r,2),h=o[0],c=o[1];return a.a.createElement("div",{className:$.a.maback},!0===i?a.a.createElement(K,{obj:h}):a.a.createElement(ne,{setName:c,setScene:s}))}r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ae,null)),document.getElementById("root"))},27:function(e,t,i){e.exports={personback:"scene_personback__1ma-o",personbackimg:"scene_personbackimg__2_6t_",maback:"scene_maback__3gj7U",login:"scene_login__WHJjC",loginform:"scene_loginform__1UaUe",butto:"scene_butto__1yEka"}},42:function(e,t,i){e.exports=i.p+"static/media/backsath.2aa0f5e0.png"},50:function(e,t,i){e.exports=i.p+"static/media/gp1_hq.f008c3ec.png"}},[[114,1,2]]]);
//# sourceMappingURL=main.d706ac8b.chunk.js.map