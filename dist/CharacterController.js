!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i(require("babylonjs"));else if("function"==typeof define&&define.amd)define(["babylonjs"],i);else{var s="object"==typeof exports?i(require("babylonjs")):i(t.BABYLON);for(var h in s)("object"==typeof exports?exports:t)[h]=s[h]}}(window,(function(t){return function(t){var i={};function s(h){if(i[h])return i[h].exports;var n=i[h]={i:h,l:!1,exports:{}};return t[h].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=i,s.d=function(t,i,h){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:h})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"h",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.h)return t;var h=Object.create(null);if(s.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)s.d(h,n,function(i){return t[i]}.bind(null,n));return h},s.n=function(t){var i=t&&t.h?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=1)}([function(i,s){i.exports=t},function(t,i,s){"use strict";s.r(i),s.d(i,"CharacterController",(function(){return n})),s.d(i,"AnimData",(function(){return u})),s.d(i,"Action",(function(){return o}));var h=s(0),n=function(){function t(t,i,s,n,f){var e=this;this.u=3,this.v=2*this.u,this.j=this.u/2,this.M=2*this.u,this.k=this.u/2,this.O=this.u/2,this.g=Math.PI,this.S=9.8,this.A=30,this.q=45,this.B=Math.PI*this.A/180,this.C=Math.PI*this.q/180,this.D=.25,this.J=0,this.L=new h.Vector3(0,0,0),this.R=new u("walk"),this._=new u("walkBack"),this.W=new u("idle"),this.F=new u("idleJump"),this.G=new u("run"),this.H=new u("runJump"),this.I=new u("fall"),this.K=new u("turnLeft"),this.N=new u("turnRight"),this.P=new u("strafeLeft"),this.T=new u("strafeRight"),this.U=new u("slideBack"),this.V=[this.R,this._,this.W,this.F,this.G,this.H,this.I,this.K,this.N,this.P,this.T,this.U],this.X="W",this.Y="S",this.Z="A",this.$="D",this.tt="Q",this.it="E",this.st="32",this.ht=38,this.nt=40,this.ut=37,this.ot=39,this.ft=0,this.et=0,this.rt=32,this.ct=!0,this.lt=new h.Vector3(0,0,0),this.at=!1,this.mode=0,this.vt=0,this.wt=!1,this.dt=-1,this.yt=-1,this.bt=!1,this.pt=!1,this.jt=null,this.Mt=new h.Vector3(0,0,0),this.kt=!1,this.Ot=0,this.gt=50,this.St=0,this.xt=!1,this.At=!1,this.qt=!1,this.Bt=0,this.Ct=0,this.Dt=0,this.Jt=1,this.Lt=!1,this.Rt=!0,this._t=Math.PI/2*3,this.Et=0,this.Qt=0,this.Wt=10,this.zt=!0,this.Ft=!1,this.Gt=new h.Ray(h.Vector3.Zero(),h.Vector3.One(),1),this.Ht=h.Vector3.Zero(),this.It=.5,this.Kt=0,this.Nt=!1,this.Pt=!1,this.Tt=!1,this.Ut=t,this.Vt(t),this.setFaceForward(f),this.Xt=s,null!=n&&(this.Pt=!0,this.setAnimationGroups(n)),(this.Pt||null!==this.Yt)&&(this.Tt=!0),this.Pt||(this.Yt=t.skeleton),this.Pt||null==this.Yt||this.checkAnims(this.Yt),this.Zt=i,this.zt=this.Zt.checkCollisions,this.$t=new o,this.ti=function(){e.ii()},this.si=function(t){e.hi(t)},this.ni=function(t){e.ui(t)},window.addEventListener("keyup",this.si,!1),window.addEventListener("keydown",this.ni,!1)}return t.prototype.setAvatar=function(t){this.Ut=t},t.prototype.setAvatarSkeleton=function(t){this.Yt=t,this.checkAnims(t)},t.prototype.setSlopeLimit=function(t,i){this.A=t,this.q=i,this.B=Math.PI*t/180,this.C=Math.PI*this.q/180},t.prototype.setStepOffset=function(t){this.D=t},t.prototype.setWalkSpeed=function(t){this.u=t},t.prototype.setRunSpeed=function(t){this.v=t},t.prototype.setBackSpeed=function(t){this.j=t},t.prototype.setJumpSpeed=function(t){this.M=t},t.prototype.setLeftSpeed=function(t){this.k=t},t.prototype.setRightSpeed=function(t){this.O=t},t.prototype.setTurnSpeed=function(t){this.g=t*Math.PI/180},t.prototype.setGravity=function(t){this.S=t},t.prototype.setAnimationGroups=function(t){this.Pt=!0;for(var i=0,s=this.V;i<s.length;i++){var h=s[i];null!=t[h.name]&&(h.ag=t[h.name],h.exist=!0)}},t.prototype.setAnimationRanges=function(t){var i;this.Pt=!1;for(var s=0,h=this.V;s<h.length;s++){var n=h[s];null!=(i=t[n.name])&&(i instanceof Object?(i.name&&(n.name=i.name),i.loop&&(n.loop=i.loop),i.rate&&(n.loop=i.rate)):n.name=i,n.exist=!0)}},t.prototype.setAnim=function(t,i,s,h){(this.Pt||null!=this.Yt)&&(null!=h&&(t.loop=h),this.Pt?(null!=i&&(t.ag=i,t.exist=!0),null!=s&&t.exist&&(t.rate=s,t.ag.speedRatio=s)):(null!=i&&(t.name=i),null!=s&&(t.rate=s),null!=this.Yt.getAnimationRange(t.name)?t.exist=!0:t.exist=!1))},t.prototype.enableBlending=function(t){if(this.Pt)for(var i=0,s=this.V;i<s.length;i++){var h=s[i];if(h.exist)for(var n=0,u=h.ag.targetedAnimations;n<u.length;n++){var o=u[n];o.animation.enableBlending=!0,o.animation.blendingSpeed=t}}else this.Yt.enableBlending(t)},t.prototype.disableBlending=function(){if(this.Pt)for(var t=0,i=this.V;t<i.length;t++){var s=i[t];if(s.exist)for(var h=0,n=s.ag.targetedAnimations;h<n.length;h++){n[h].animation.enableBlending=!1}}},t.prototype.setWalkAnim=function(t,i,s){this.setAnim(this.R,t,i,s)},t.prototype.setRunAnim=function(t,i,s){this.setAnim(this.G,t,i,s)},t.prototype.setWalkBackAnim=function(t,i,s){this.setAnim(this._,t,i,s)},t.prototype.setSlideBackAnim=function(t,i,s){this.setAnim(this.U,t,i,s)},t.prototype.setIdleAnim=function(t,i,s){this.setAnim(this.W,t,i,s)},t.prototype.setTurnRightAnim=function(t,i,s){this.setAnim(this.N,t,i,s)},t.prototype.setTurnLeftAnim=function(t,i,s){this.setAnim(this.K,t,i,s)},t.prototype.setStrafeRightAnim=function(t,i,s){this.setAnim(this.T,t,i,s)},t.prototype.setSrafeLeftAnim=function(t,i,s){this.setAnim(this.P,t,i,s)},t.prototype.setIdleJumpAnim=function(t,i,s){this.setAnim(this.F,t,i,s)},t.prototype.setRunJumpAnim=function(t,i,s){this.setAnim(this.H,t,i,s)},t.prototype.setFallAnim=function(t,i,s){this.setAnim(this.I,t,i,s)},t.prototype.setWalkKey=function(t){this.X=t},t.prototype.setWalkBackKey=function(t){this.Y=t},t.prototype.setTurnLeftKey=function(t){this.Z=t},t.prototype.setTurnRightKey=function(t){this.$=t},t.prototype.setStrafeLeftKey=function(t){this.tt=t},t.prototype.setStrafeRightKey=function(t){this.it=t},t.prototype.setJumpKey=function(t){this.st=t},t.prototype.setWalkCode=function(t){this.ht=t},t.prototype.setWalkBackCode=function(t){this.nt=t},t.prototype.setTurnLeftCode=function(t){this.ut=t},t.prototype.setTurnRightCode=function(t){this.ot=t},t.prototype.setStrafeLeftCode=function(t){this.ft=t},t.prototype.setStrafeRightCode=function(t){this.et=t},t.prototype.setJumpCode=function(t){this.rt=t},t.prototype.setCameraElasticity=function(t){this.ct=t},t.prototype.setCameraTarget=function(t){this.lt.copyFrom(t)},t.prototype.cameraCollisionChanged=function(){this.zt=this.Zt.checkCollisions},t.prototype.setNoFirstPerson=function(t){this.at=t},t.prototype.checkAnims=function(t){for(var i=0,s=this.V;i<s.length;i++){var h=s[i];null!=t?null!=t.getAnimationRange(h.name)&&(h.exist=!0):h.exist=!1}},t.prototype.setMode=function(t){this.mode=t,this.vt=t},t.prototype.Vt=function(t){var i=t.getWorldMatrix(),s=h.Vector3.FromFloatArray(i.m,0),n=h.Vector3.FromFloatArray(i.m,4),u=h.Vector3.FromFloatArray(i.m,8),o=h.Vector3.Cross(s,n);h.Vector3.Dot(o,u)<0?(this.wt=!0,this.dt=1):(this.wt=!1,this.dt=-1)},t.prototype.setFaceForward=function(t){!t||(this.yt=-1),this.wt&&t&&(this._t=-this._t,this.yt=1)},t.prototype.checkAGs=function(t){for(var i=0,s=this.V;i<s.length;i++){var h=s[i];null!=t[h.name]&&(h.ag=t[h.name],h.exist=!0)}},t.prototype.start=function(){this.bt||(this.bt=!0,this.$t.reset(),this.Dt=0,this.Et=.001,this.kt=!1,this.oi(),window.addEventListener("keyup",this.si,!1),window.addEventListener("keydown",this.ni,!1),this.Xt.registerBeforeRender(this.ti),this.Xt)},t.prototype.stop=function(){this.bt&&(this.bt=!1,this.Xt.unregisterBeforeRender(this.ti),window.removeEventListener("keyup",this.si,!1),window.removeEventListener("keydown",this.ni,!1),this.jt=null)},t.prototype.pauseAnim=function(){this.pt=!0},t.prototype.resumeAnim=function(){this.pt=!1},t.prototype.fi=function(){return h.Vector3.Dot(this.Ut.forward,this.Ut.position.subtract(this.Zt.position))<0?1:-1},t.prototype.ii=function(){this.Mt.copyFrom(this.Ut.position);var t=null,i=this.Xt.getEngine().getDeltaTime()/1e3;this.$t.jump&&!this.xt?(this.kt=!1,this.Et=0,t=this.ei(i)):this.anyMovement()||this.xt?(this.kt=!1,this.Et=0,t=this.ri(i)):this.xt||(t=this.ci(i)),!this.pt&&this.Tt&&null!=t&&this.jt!==t&&(t.exist&&(this.Pt?(null!=this.jt&&this.jt.exist&&this.jt.ag.stop(),t.ag.play(t.loop)):this.Yt.beginAnimation(t.name,t.loop,t.rate)),this.jt=t),this.oi()},t.prototype.ei=function(t){var i=null;i=this.H,0===this.Ct&&(this.Bt=this.Ut.position.y);var s=(this.M-this.S*this.Ct)*t-.5*this.S*t*t;this.Ct=this.Ct+t;var n,u=0;if(1!=this.mode&&(this.Ut.rotation.y=this._t-this.Zt.alpha),this.qt||this.At?(this.qt?u=this.v*t:this.At&&(u=this.u*t),(n=this.li.clone()).y=0,(n=n.normalize()).scaleToRef(u,n),n.y=s):(n=new h.Vector3(0,s,0),i=this.F),this.Ut.moveWithCollisions(n),s<0)if(this.Ut.position.y>this.Mt.y||this.Ut.position.y===this.Mt.y&&n.length()>.001)this.ai();else if(this.Ut.position.y<this.Bt){var o=this.Ut.position.subtract(this.Mt);this.vi(o,n,.001)||this.wi(o)<=this.B&&this.ai()}return i},t.prototype.ai=function(){this.$t.jump=!1,this.Ct=0,this.At=!1,this.qt=!1},t.prototype.vi=function(t,i,s){return Math.abs(t.x-i.x)<s&&Math.abs(t.y-i.y)<s&&Math.abs(t.z-i.z)<s},t.prototype.wi=function(t){return Math.atan(Math.abs(t.y/Math.sqrt(t.x*t.x+t.z*t.z)))},t.prototype.ri=function(t){var i=this.Dt*this.S;this.Ot=i*t+this.S*t*t/2,this.Dt=this.Dt+t;var s=!1,h=null;if(this.xt)this.li.y=-this.Ot,s=!0;else if(this.At=!1,this.qt=!1,this.$t.forward){var n=0;this.$t.shift?(this.qt=!0,n=this.v*t,h=this.G):(this.At=!0,n=this.u*t,h=this.R),1!=this.mode?this.Ut.rotation.y=this._t-this.Zt.alpha:this.Rt||(this.Rt=!0,this.Lt=!1),this.li=this.Ut.calcMovePOV(0,-this.Ot,this.yt*n),s=!0}else this.$t.backward?(this.li=this.Ut.calcMovePOV(0,-this.Ot,-this.yt*(this.j*t)),h=this._,s=!0):this.$t.stepLeft?(h=this.P,this.li=this.Ut.calcMovePOV(this.dt*(this.k*t)*this.fi(),-this.Ot,0),s=!0):this.$t.stepRight&&(h=this.T,this.li=this.Ut.calcMovePOV(-this.dt*(this.O*t)*this.fi(),-this.Ot,0),s=!0);if(this.$t.stepLeft||this.$t.stepRight||!this.$t.turnLeft&&!this.$t.turnRight||(1==this.mode?(this.$t.name!=this.$t.prevName&&(this.$t.prevName=this.$t.name,this.Jt=this.fi()),this.$t.turnLeft?this.$t.forward?this.Ut.rotation.y+=this.g*t*this.Jt:this.$t.backward?this.Ut.rotation.y-=this.g*t*this.Jt:(this.Ut.rotation.y+=this.g*t*this.Jt,h=this.K):this.$t.forward?this.Ut.rotation.y-=this.g*t*this.Jt:this.$t.backward?this.Ut.rotation.y+=this.g*t*this.Jt:(this.Ut.rotation.y-=this.g*t*this.Jt,h=this.N)):this.$t.turnLeft?(this.Zt.alpha=this.Zt.alpha+this.g*t,s||(h=this.K)):(this.Zt.alpha=this.Zt.alpha-this.g*t,s||(h=this.N))),s&&(1!=this.mode&&(this.Ut.rotation.y=this._t-this.Zt.alpha),this.li.length()>.001))if(this.Ut.moveWithCollisions(this.li),this.Ut.position.y>this.Mt.y){var u=this.Ut.position.subtract(this.Mt),o=this.wi(u);o>=this.C?this.D>0?(0==this.J&&this.L.copyFrom(this.Mt),this.J=this.J+(this.Ut.position.y-this.Mt.y),this.J>this.D&&(this.J=0,this.Ut.position.copyFrom(this.L),this.di())):(this.Ut.position.copyFrom(this.Mt),this.di()):(this.J=0,o>this.B?(this.St=0,this.xt=!1):this.di())}else if(this.Ut.position.y<this.Mt.y){u=this.Ut.position.subtract(this.Mt);this.vi(u,this.li,.001)?(this.xt=!0,this.St++,this.St>this.gt&&(h=this.I)):this.wi(u)<=this.B?this.di():(this.St=0,this.xt=!1)}else this.di();return h},t.prototype.di=function(){this.Dt=0,this.St=0,this.xt=!1},t.prototype.ci=function(t){if(this.kt)return this.W;this.At=!1,this.qt=!1,this.Dt=0;var i=this.W;if(this.St=0,0===t)this.Ot=5;else{var s=this.Et*this.S;this.Ot=s*t+this.S*t*t/2,this.Et=this.Et+t}if(this.Ot<.01)return i;var n=new h.Vector3(0,-this.Ot,0);if(1!=this.mode&&(this.Ut.rotation.y=this._t-this.Zt.alpha),this.Ut.moveWithCollisions(n),this.Ut.position.y>this.Mt.y||this.Ut.position.y===this.Mt.y)this.yi();else if(this.Ut.position.y<this.Mt.y){var u=this.Ut.position.subtract(this.Mt);this.vi(u,n,.001)||(this.wi(u)<=this.B?(this.yi(),this.Ut.position.copyFrom(this.Mt)):(this.bi(),i=this.U))}return i},t.prototype.yi=function(){this.Qt++,this.Qt>this.Wt&&(this.kt=!0,this.Et=0)},t.prototype.bi=function(){this.kt=!1,this.Qt=0},t.prototype.oi=function(){0==this.J&&this.Ut.position.addToRef(this.lt,this.Zt.target),this.Zt.radius>this.Zt.lowerRadiusLimit&&this.ct&&this.pi(),this.Zt.radius<=this.Zt.lowerRadiusLimit?this.at||this.Ft||(this.Ut.visibility=0,this.Zt.checkCollisions=!1,this.vt=this.mode,this.mode=0,this.Ft=!0):(this.Ft=!1,this.mode=this.vt,this.Ut.visibility=1,this.Zt.checkCollisions=this.zt)},t.prototype.pi=function(){var t=this;this.Zt.position.subtractToRef(this.Zt.target,this.Ht),this.Gt.origin=this.Zt.target,this.Gt.length=this.Ht.length(),this.Gt.direction=this.Ht.normalize();var i=this.Xt.pickWithRay(this.Gt,(function(i){return!(i==t.Ut||!i.checkCollisions)}),!0);if(i.hit)if(this.Zt.checkCollisions){var s=this.Zt.target.subtract(i.pickedPoint).normalize().scale(this.It);i.pickedPoint.addToRef(s,this.Zt.position)}else{var h=i.pickedPoint.subtract(this.Zt.target).length();this.Zt.radius=h-this.It}},t.prototype.anyMovement=function(){return this.$t.forward||this.$t.backward||this.$t.turnLeft||this.$t.turnRight||this.$t.stepLeft||this.$t.stepRight},t.prototype.ui=function(t){var i=t.keyCode,s=String.fromCharCode(i);s===this.st||i===this.rt?this.$t.jump=!0:16===i?this.$t.shift=!0:s===this.X||i===this.ht?this.$t.forward=!0:s===this.Z||i===this.ut?(this.$t.turnLeft=!0,this.$t.name="tl"):s===this.$||i===this.ot?(this.$t.turnRight=!0,this.$t.name="tr"):s===this.Y||i===this.nt?this.$t.backward=!0:s===this.tt||i===this.ft?this.$t.stepLeft=!0:s!==this.it&&i!==this.et||(this.$t.stepRight=!0),this.Nt=this.anyMovement()},t.prototype.hi=function(t){var i=t.keyCode,s=String.fromCharCode(i);16===i?this.$t.shift=!1:s===this.X||i===this.ht?this.$t.forward=!1:s===this.Z||i===this.ut?(this.$t.turnLeft=!1,this.$t.name="",this.$t.prevName=""):s===this.$||i===this.ot?(this.$t.turnRight=!1,this.$t.name="",this.$t.prevName=""):s===this.Y||i===this.nt?this.$t.backward=!1:s===this.tt||i===this.ft?this.$t.stepLeft=!1:s!==this.it&&i!==this.et||(this.$t.stepRight=!1),this.Nt=this.anyMovement()},t.prototype.disableKeyBoard=function(){window.removeEventListener("keyup",this.si,!1),window.removeEventListener("keydown",this.ni,!1)},t.prototype.enableKeyBoard=function(){window.addEventListener("keyup",this.si,!1),window.addEventListener("keydown",this.ni,!1)},t.prototype.walk=function(t){this.$t.forward=t},t.prototype.walkBack=function(t){this.$t.backward=t},t.prototype.run=function(t){this.$t.forward=t,this.$t.shift=t},t.prototype.turnLeft=function(t){this.$t.turnLeft=t},t.prototype.turnRight=function(t){this.$t.turnRight=t},t.prototype.strafeLeft=function(t){this.$t.stepLeft=t},t.prototype.strafeRight=function(t){this.$t.stepRight=t},t.prototype.jump=function(t){this.$t.jump=t},t.prototype.idle=function(){this.$t.reset()},t}(),u=function(t){this.loop=!0,this.rate=1,this.exist=!1,this.name=t},o=function(){function t(){this.prevName="",this.reset()}return t.prototype.reset=function(){this.forward=!1,this.backward=!1,this.turnRight=!1,this.turnLeft=!1,this.stepRight=!1,this.stepLeft=!1,this.jump=!1,this.shift=!1},t}()}])}));
//# sourceMappingURL=CharacterController.js.map