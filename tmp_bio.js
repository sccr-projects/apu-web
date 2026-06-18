function mt(u){
if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return u}
function Fi(u,t){
u.prototype=Object.create(t.prototype),u.prototype.constructor=u,u.__proto__=t}
var nt={
autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{
lineHeight:""}
}
,oe={
duration:.5,overwrite:!1,delay:0}
,Ze,W,R,ft=1e8,M=1/ft,Ie=Math.PI*2,Ar=Ie/4,Er=0,Li=Math.sqrt,zr=Math.cos,Fr=Math.sin,q=function(t){
return typeof t=="string"}
,I=function(t){
return typeof t=="function"}
,yt=function(t){
return typeof t=="number"}
,je=function(t){
return typeof t>"u"}
,dt=function(t){
return typeof t=="object"}
,$=function(t){
return t!==!1}
,Je=function(){
return typeof window<"u"}
,pe=function(t){
return I(t)||q(t)}
,Ii=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){
}
,K=Array.isArray,Lr=/random\([^)]+\)/g,Ir=/,\s*/g,mi=/(?:-?\.?\d|\.)+/gi,Bi=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ut=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Me=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ni=/[+-]=-?[.\d]+/,Br=/[^,'"\[\]\s]+/gi,Nr=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,E,lt,Be,ti,st={
}
,ve={
}
,Vi,Yi=function(t){
return(ve=Kt(t,st))&&J}
,ei=function(t,e){
return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}
,ae=function(t,e){
return!e&&console.warn(t)}
,Ui=function(t,e){
return t&&(st[t]=e)&&ve&&(ve[t]=e)||st}
,ue=function(){
return 0}
,Vr={
suppressEvents:!0,isStart:!0,kill:!1}
,me={
suppressEvents:!0,kill:!1}
,Yr={
suppressEvents:!0}
,ii={
}
,bt=[],Ne={
}
,Xi,tt={
}
,De={
}
,gi=30,ge=[],ri="",ni=function(t){
var e=t[0],i,r;
if(dt(e)||I(e)||(t=[t]),!(i=(e._gsap||{
}
).harness)){
for(r=ge.length;
r--&&!ge[r].targetTest(e);
);
i=ge[r]}
for(r=t.length;
r--;
)t[r]&&(t[r]._gsap||(t[r]._gsap=new lr(t[r],i)))||t.splice(r,1);
return t}
,Ft=function(t){
return t._gsap||ni(ht(t))[0]._gsap}
,qi=function(t,e,i){
return(i=t[e])&&I(i)?t[e]():je(i)&&t.getAttribute&&t.getAttribute(e)||i}
,Q=function(t,e){
return(t=t.split(",")).forEach(e)||t}
,V=function(t){
return Math.round(t*1e5)/1e5||0}
,A=function(t){
return Math.round(t*1e7)/1e7||0}
,qt=function(t,e){
var i=e.charAt(0),r=parseFloat(e.substr(2));
return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r}
,Ur=function(t,e){
for(var i=e.length,r=0;
t.indexOf(e[r])<0&&++r<i;
);
return r<i}
,xe=function(){
var t=bt.length,e=bt.slice(0),i,r;
for(Ne={
}
,bt.length=0,i=0;
i<t;
i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)}
,si=function(t){
return!!(t._initted||t._startAt||t.add)}
,Wi=function(t,e,i,r){
bt.length&&!W&&xe(),t.render(e,i,!!(W&&e<0&&si(t))),bt.length&&!W&&xe()}
,Gi=function(t){
var e=parseFloat(t);
return(e||e===0)&&(t+"").match(Br).length<2?e:q(t)?t.trim():t}
,Ki=function(t){
return t}
,ot=function(t,e){
for(var i in e)i in t||(t[i]=e[i]);
return t}
,Xr=function(t){
return function(e,i){
for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}
}
,Kt=function(t,e){
for(var i in e)t[i]=e[i];
return t}
,yi=function u(t,e){
for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=dt(e[i])?u(t[i]||(t[i]={
}
),e[i]):e[i]);
return t}
,Te=function(t,e){
var i={
}
,r;
for(r in t)r in e||(i[r]=t[r]);
return i}
,re=function(t){
var e=t.parent||E,i=t.keyframes?Xr(K(t.keyframes)):ot;
if($(t.inherit))for(;
e;
)i(t,e.vars.defaults),e=e.parent||e._dp;
return t}
,qr=function(t,e){
for(var i=t.length,r=i===e.length;
r&&i--&&t[i]===e[i];
);
return i<0}
,Hi=function(t,e,i,r,n){
var s=t[r],o;
if(n)for(o=e[n];
s&&s[n]>o;
)s=s._prev;
return s?(e._next=s._next,s._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=s,e.parent=e._dp=t,e}
,Oe=function(t,e,i,r){
i===void 0&&(i="_first"),r===void 0&&(r="_last");
var n=e._prev,s=e._next;
n?n._next=s:t[i]===e&&(t[i]=s),s?s._prev=n:t[r]===e&&(t[r]=n),e._next=e._prev=e.parent=null}
,Pt=function(t,e){
t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}
,Lt=function(t,e){
if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;
i;
)i._dirty=1,i=i.parent;
return t}
,Wr=function(t){
for(var e=t.parent;
e&&e.parent;
)e._dirty=1,e.totalDuration(),e=e.parent;
return t}
,Ve=function(t,e,i,r){
return t._startAt&&(W?t._startAt.revert(me):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))}
,Gr=function u(t){
return!t||t._ts&&u(t.parent)}
,vi=function(t){
return t._repeat?Ht(t._tTime,t=t.duration()+t._rDelay)*t:0}
,Ht=function(t,e){
var i=Math.floor(t=A(t/e));
return t&&i===t?i-1:i}
,we=function(t,e){
return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)}
,ke=function(t){
return t._end=A(t._start+(t._tDur/Math.abs(t._ts||t._rts||M)||0))}
,Ce=function(t,e){
var i=t._dp;
return i&&i.smoothChildTiming&&t._ts&&(t._start=A(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ke(t),i._dirty||Lt(i,t)),t}
,$i=function(t,e){
var i;
if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=we(t.rawTime(),e),(!e._dur||de(0,e.totalDuration(),i)-e._tTime>M)&&e.render(i,!0)),Lt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){
if(t._dur<t.duration())for(i=t;
i._dp;
)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;
t._zTime=-M}
}
,_t=function(t,e,i,r){
return e.parent&&Pt(e),e._start=A((yt(i)?i:i||t!==E?ut(t,i,e):t._time)+e._delay),e._end=A(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hi(t,e,"_first","_last",t._sort?"_start":0),Ye(e)||(t._recent=e),r||$i(t,e),t._ts<0&&Ce(t,t._tTime),t}
,Qi=function(t,e){
return(st.ScrollTrigger||ei("scrollTrigger",e))&&st.ScrollTrigger.create(e,t)}
,Zi=function(t,e,i,r,n){
if(ai(t,e,n),!t._initted)return 1;
if(!i&&t._pt&&!W&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xi!==et.frame)return bt.push(t),t._lazy=[n,r],1}
,Kr=function u(t){
var e=t.parent;
return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||u(e))}
,Ye=function(t){
var e=t.data;
return e==="isFromStart"||e==="isStart"}
,Hr=function(t,e,i,r){
var n=t.ratio,s=e<0||!e&&(!t._start&&Kr(t)&&!(!t._initted&&Ye(t))||(t._ts<0||t._dp._ts<0)&&!Ye(t))?0:1,o=t._rDelay,a=0,f,h,_;
if(o&&t._repeat&&(a=de(0,t._tDur,e),h=Ht(a,o),t._yoyo&&h&1&&(s=1-s),h!==Ht(t._tTime,o)&&(n=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==n||W||r||t._zTime===M||!e&&t._zTime){
if(!t._initted&&Zi(t,e,r,i,a))return;
for(_=t._zTime,t._zTime=e||(i?M:0),i||(i=e&&!_),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=a,f=t._pt;
f;
)f.r(s,f.d),f=f._next;
e<0&&Ve(t,e,i,!0),t._onUpdate&&!i&&it(t,"onUpdate"),a&&t._repeat&&!i&&t.parent&&it(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&Pt(t,1),!i&&!W&&(it(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}
else t._zTime||(t._zTime=e)}
,$r=function(t,e,i){
var r;
if(i>e)for(r=t._first;
r&&r._start<=i;
){
if(r.data==="isPause"&&r._start>e)return r;
r=r._next}
else for(r=t._last;
r&&r._start>=i;
){
if(r.data==="isPause"&&r._start<e)return r;
r=r._prev}
}
,$t=function(t,e,i,r){
var n=t._repeat,s=A(e)||0,o=t._tTime/t._tDur;
return o&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=n?n<0?1e10:A(s*(n+1)+t._rDelay*n):s,o>0&&!r&&Ce(t,t._tTime=t._tDur*o),t.parent&&ke(t),i||Lt(t.parent,t),t}
,xi=function(t){
return t instanceof H?Lt(t):$t(t,t._dur)}
,Qr={
_start:0,endTime:ue,totalDuration:ue}
,ut=function u(t,e,i){
var r=t.labels,n=t._recent||Qr,s=t.duration()>=ft?n.endTime(!1):t._dur,o,a,f;
return q(e)&&(isNaN(e)||e in r)?(a=e.charAt(0),f=e.substr(-1)==="%",o=e.indexOf("="),a==="<"||a===">"?(o>=0&&(e=e.replace(/=/,"")),(a==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(e.substr(1))||0)*(f?(o<0?n:i).totalDuration()/100:1)):o<0?(e in r||(r[e]=s),r[e]):(a=parseFloat(e.charAt(o-1)+e.substr(o+1)),f&&i&&(a=a/100*(K(i)?i[0]:i).totalDuration()),o>1?u(t,e.substr(0,o-1),i)+a:s+a)):e==null?s:+e}
,ne=function(t,e,i){
var r=yt(e[1]),n=(r?2:1)+(t<2?0:1),s=e[n],o,a;
if(r&&(s.duration=e[1]),s.parent=i,t){
for(o=s,a=i;
a&&!("immediateRender"in o);
)o=a.vars.defaults||{
}
,a=$(a.vars.inherit)&&a.parent;
s.immediateRender=$(o.immediateRender),t<2?s.runBackwards=1:s.startAt=e[n-1]}
return new Y(e[0],s,e[n+1])}
,Ct=function(t,e){
return t||t===0?e(t):e}
,de=function(t,e,i){
return i<t?t:i>e?e:i}
,G=function(t,e){
return!q(t)||!(e=Nr.exec(t))?"":e[1]}
,Zr=function(t,e,i){
return Ct(i,function(r){
return de(t,e,r)}
)}
,Ue=[].slice,ji=function(t,e){
return t&&dt(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&dt(t[0]))&&!t.nodeType&&t!==lt}
,jr=function(t,e,i){
return i===void 0&&(i=[]),t.forEach(function(r){
var n;
return q(r)&&!e||ji(r,1)?(n=i).push.apply(n,ht(r)):i.push(r)}
)||i}
,ht=function(t,e,i){
return R&&!e&&R.selector?R.selector(t):q(t)&&!i&&(Be||!Qt())?Ue.call((e||ti).querySelectorAll(t),0):K(t)?jr(t,i):ji(t)?Ue.call(t,0):t?[t]:[]}
,Xe=function(t){
return t=ht(t)[0]||ae("Invalid scope")||{
}
,function(e){
var i=t.current||t.nativeElement||t;
return ht(e,i.querySelectorAll?i:i===t?ae("Invalid scope")||ti.createElement("div"):t)}
}
,Ji=function(t){
return t.sort(function(){
return .5-Math.random()}
)}
,tr=function(t){
if(I(t))return t;
var e=dt(t)?t:{
each:t}
,i=It(e.ease),r=e.from||0,n=parseFloat(e.base)||0,s={
}
,o=r>0&&r<1,a=isNaN(r)||o,f=e.axis,h=r,_=r;
return q(r)?h=_={
center:.5,edges:.5,end:1}
[r]||0:!o&&a&&(h=r[0],_=r[1]),function(c,d,p){
var l=(p||e).length,m=s[l],v,y,x,T,g,P,w,S,b;
if(!m){
if(b=e.grid==="auto"?0:(e.grid||[1,ft])[1],!b){
for(w=-ft;
w<(w=p[b++].getBoundingClientRect().left)&&b<l;
);
b<l&&b--}
for(m=s[l]=[],v=a?Math.min(b,l)*h-.5:r%b,y=b===ft?0:a?l*_/b-.5:r/b|0,w=0,S=ft,P=0;
P<l;
P++)x=P%b-v,T=y-(P/b|0),m[P]=g=f?Math.abs(f==="y"?T:x):Li(x*x+T*T),g>w&&(w=g),g<S&&(S=g);
r==="random"&&Ji(m),m.max=w-S,m.min=S,m.v=l=(parseFloat(e.amount)||parseFloat(e.each)*(b>l?l-1:f?f==="y"?l/b:b:Math.max(b,l/b))||0)*(r==="edges"?-1:1),m.b=l<0?n-l:n,m.u=G(e.amount||e.each)||0,i=i&&l<0?_n(i):i}
return l=(m[c]-m.min)/m.max||0,A(m.b+(i?i(l):l)*m.v)+m.u}
}
,qe=function(t){
var e=Math.pow(10,((t+"").split(".")[1]||"").length);
return function(i){
var r=A(Math.round(parseFloat(i)/t)*t*e);
return(r-r%1)/e+(yt(i)?0:G(i))}
}
,er=function(t,e){
var i=K(t),r,n;
return!i&&dt(t)&&(r=i=t.radius||ft,t.values?(t=ht(t.values),(n=!yt(t[0]))&&(r*=r)):t=qe(t.increment)),Ct(e,i?I(t)?function(s){
return n=t(s),Math.abs(n-s)<=r?n:s}
:function(s){
for(var o=parseFloat(n?s.x:s),a=parseFloat(n?s.y:0),f=ft,h=0,_=t.length,c,d;
_--;
)n?(c=t[_].x-o,d=t[_].y-a,c=c*c+d*d):c=Math.abs(t[_]-o),c<f&&(f=c,h=_);
return h=!r||f<=r?t[h]:s,n||h===s||yt(s)?h:h+G(s)}
:qe(t))}
,ir=function(t,e,i,r){
return Ct(K(t)?!e:i===!0?!!(i=0):!r,function(){
return K(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r}
)}
,Jr=function(){
for(var t=arguments.length,e=new Array(t),i=0;
i<t;
i++)e[i]=arguments[i];
return function(r){
return e.reduce(function(n,s){
return s(n)}
,r)}
}
,tn=function(t,e){
return function(i){
return t(parseFloat(i))+(e||G(i))}
}
,en=function(t,e,i){
return nr(t,e,0,1,i)}
,rr=function(t,e,i){
return Ct(i,function(r){
return t[~~e(r)]}
)}
,rn=function u(t,e,i){
var r=e-t;
return K(t)?rr(t,u(0,t.length),e):Ct(i,function(n){
return(r+(n-t)%r)%r+t}
)}
,nn=function u(t,e,i){
var r=e-t,n=r*2;
return K(t)?rr(t,u(0,t.length-1),e):Ct(i,function(s){
return s=(n+(s-t)%n)%n||0,t+(s>r?n-s:s)}
)}
,fe=function(t){
return t.replace(Lr,function(e){
var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Ir);
return ir(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)}
)}
,nr=function(t,e,i,r,n){
var s=e-t,o=r-i;
return Ct(n,function(a){
return i+((a-t)/s*o||0)}
)}
,sn=function u(t,e,i,r){
var n=isNaN(t+e)?0:function(d){
return(1-d)*t+d*e}
;
if(!n){
var s=q(t),o={
}
,a,f,h,_,c;
if(i===!0&&(r=1)&&(i=null),s)t={
p:t}
,e={
p:e}
;
else if(K(t)&&!K(e)){
for(h=[],_=t.length,c=_-2,f=1;
f<_;
f++)h.push(u(t[f-1],t[f]));
_--,n=function(p){
p*=_;
var l=Math.min(c,~~p);
return h[l](p-l)}
,i=e}
else r||(t=Kt(K(t)?[]:{
}
,t));
if(!h){
for(a in e)oi.call(o,t,a,"get",e[a]);
n=function(p){
return hi(p,o)||(s?t.p:t)}
}
}
return Ct(i,n)}
,Ti=function(t,e,i){
var r=t.labels,n=ft,s,o,a;
for(s in r)o=r[s]-e,o<0==!!i&&o&&n>(o=Math.abs(o))&&(a=s,n=o);
return a}
,it=function(t,e,i){
var r=t.vars,n=r[e],s=R,o=t._ctx,a,f,h;
if(n)return a=r[e+"Params"],f=r.callbackScope||t,i&&bt.length&&xe(),o&&(R=o),h=a?n.apply(f,a):n.call(f),R=s,h}
,ee=function(t){
return Pt(t),t.scrollTrigger&&t.scrollTrigger.kill(!!W),t.progress()<1&&it(t,"onInterrupt"),t}
,Xt,sr=[],or=function(t){
if(t)if(t=!t.name&&t.default||t,Je()||t.headless){
var e=t.name,i=I(t),r=e&&!i&&t.init?function(){
this._props=[]}
:t,n={
init:ue,render:hi,add:oi,kill:wn,modifier:Tn,rawVars:0}
,s={
targetTest:0,get:0,getSetter:fi,aliases:{
}
,register:0}
;
if(Qt(),t!==r){
if(tt[e])return;
ot(r,ot(Te(t,n),s)),Kt(r.prototype,Kt(n,Te(t,s))),tt[r.prop=e]=r,t.targetTest&&(ge.push(r),ii[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}
Ui(e,r),t.register&&t.register(J,r,Z)}
else sr.push(t)}
,C=255,ie={
aqua:[0,C,C],lime:[0,C,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,C],navy:[0,0,128],white:[C,C,C],olive:[128,128,0],yellow:[C,C,0],orange:[C,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[C,0,0],pink:[C,192,203],cyan:[0,C,C],transparent:[C,C,C,0]}
,Re=function(t,e,i){
return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*C+.5|0}
,ar=function(t,e,i){
var r=t?yt(t)?[t>>16,t>>8&C,t&C]:0:ie.black,n,s,o,a,f,h,_,c,d,p;
if(!r){
if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ie[t])r=ie[t];
else if(t.charAt(0)==="#"){
if(t.length<6&&(n=t.charAt(1),s=t.charAt(2),o=t.charAt(3),t="#"+n+n+s+s+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&C,r&C,parseInt(t.substr(7),16)/255];
t=parseInt(t.substr(1),16),r=[t>>16,t>>8&C,t&C]}
else if(t.substr(0,3)==="hsl"){
if(r=p=t.match(mi),!e)a=+r[0]%360/360,f=+r[1]/100,h=+r[2]/100,s=h<=.5?h*(f+1):h+f-h*f,n=h*2-s,r.length>3&&(r[3]*=1),r[0]=Re(a+1/3,n,s),r[1]=Re(a,n,s),r[2]=Re(a-1/3,n,s);
else if(~t.indexOf("="))return r=t.match(Bi),i&&r.length<4&&(r[3]=1),r}
else r=t.match(mi)||ie.transparent;
r=r.map(Number)}
return e&&!p&&(n=r[0]/C,s=r[1]/C,o=r[2]/C,_=Math.max(n,s,o),c=Math.min(n,s,o),h=(_+c)/2,_===c?a=f=0:(d=_-c,f=h>.5?d/(2-_-c):d/(_+c),a=_===n?(s-o)/d+(s<o?6:0):_===s?(o-n)/d+2:(n-s)/d+4,a*=60),r[0]=~~(a+.5),r[1]=~~(f*100+.5),r[2]=~~(h*100+.5)),i&&r.length<4&&(r[3]=1),r}
,ur=function(t){
var e=[],i=[],r=-1;
return t.split(St).forEach(function(n){
var s=n.match(Ut)||[];
e.push.apply(e,s),i.push(r+=s.length+1)}
),e.c=i,e}
,wi=function(t,e,i){
var r="",n=(t+r).match(St),s=e?"hsla(":"rgba(",o=0,a,f,h,_;
if(!n)return t;
if(n=n.map(function(c){
return(c=ar(c,e,1))&&s+(e?c[0]+","+c[1]+"%,"+c[2]+"%,"+c[3]:c.join(","))+")"}
),i&&(h=ur(t),a=i.c,a.join(r)!==h.c.join(r)))for(f=t.replace(St,"1").split(Ut),_=f.length-1;
o<_;
o++)r+=f[o]+(~a.indexOf(o)?n.shift()||s+"0,0,0,0)":(h.length?h:n.length?n:i).shift());
if(!f)for(f=t.split(St),_=f.length-1;
o<_;
o++)r+=f[o]+n[o];
return r+f[_]}
,St=(function(){
var u="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{
3,4}
){
1,2}
\\b",t;
for(t in ie)u+="|"+t+"\\b";
return new RegExp(u+")","gi")}
)(),on=/hsl[a]?\(/,fr=function(t){
var e=t.join(" "),i;
if(St.lastIndex=0,St.test(e))return i=on.test(e),t[1]=wi(t[1],i),t[0]=wi(t[0],i,ur(t[1])),!0}
,he,et=(function(){
var u=Date.now,t=500,e=33,i=u(),r=i,n=1e3/240,s=n,o=[],a,f,h,_,c,d,p=function l(m){
var v=u()-r,y=m===!0,x,T,g,P;
if((v>t||v<0)&&(i+=v-e),r+=v,g=r-i,x=g-s,(x>0||y)&&(P=++_.frame,c=g-_.time*1e3,_.time=g=g/1e3,s+=x+(x>=n?4:n-x),T=1),y||(a=f(l)),T)for(d=0;
d<o.length;
d++)o[d](g,c,P,m)}
;
return _={
time:0,frame:0,tick:function(){
p(!0)}
,deltaRatio:function(m){
return c/(1e3/(m||60))}
,wake:function(){
Vi&&(!Be&&Je()&&(lt=Be=window,ti=lt.document||{
}
,st.gsap=J,(lt.gsapVersions||(lt.gsapVersions=[])).push(J.version),Yi(ve||lt.GreenSockGlobals||!lt.gsap&&lt||{
}
),sr.forEach(or)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,a&&_.sleep(),f=h||function(m){
return setTimeout(m,s-_.time*1e3+1|0)}
,he=1,p(2))}
,sleep:function(){
(h?cancelAnimationFrame:clearTimeout)(a),he=0,f=ue}
,lagSmoothing:function(m,v){
t=m||1/0,e=Math.min(v||33,t)}
,fps:function(m){
n=1e3/(m||240),s=_.time*1e3+n}
,add:function(m,v,y){
var x=v?function(T,g,P,w){
m(T,g,P,w),_.remove(x)}
:m;
return _.remove(m),o[y?"unshift":"push"](x),Qt(),x}
,remove:function(m,v){
~(v=o.indexOf(m))&&o.splice(v,1)&&d>=v&&d--}
,_listeners:o}
,_}
)(),Qt=function(){
return!he&&et.wake()}
,k={
}
,an=/^[\d.\-M][\d.\-,\s]/,un=/["']/g,fn=function(t){
for(var e={
}
,i=t.substr(1,t.length-3).split(":"),r=i[0],n=1,s=i.length,o,a,f;
n<s;
n++)a=i[n],o=n!==s-1?a.lastIndexOf(","):a.length,f=a.substr(0,o),e[r]=isNaN(f)?f.replace(un,"").trim():+f,r=a.substr(o+1).trim();
return e}
,hn=function(t){
var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);
return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)}
,ln=function(t){
var e=(t+"").split("("),i=k[e[0]];
return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{
")?[fn(e[1])]:hn(t).split(",").map(Gi)):k._CE&&an.test(t)?k._CE("",t):i}
,_n=function(t){
return function(e){
return 1-t(1-e)}
}
,It=function(t,e){
return t&&(I(t)?t:k[t]||ln(t))||e}
,Nt=function(t,e,i,r){
i===void 0&&(i=function(a){
return 1-e(1-a)}
),r===void 0&&(r=function(a){
return a<.5?e(a*2)/2:1-e((1-a)*2)/2}
);
var n={
easeIn:e,easeOut:i,easeInOut:r}
,s;
return Q(t,function(o){
k[o]=st[o]=n,k[s=o.toLowerCase()]=i;
for(var a in n)k[s+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=k[o+"."+a]=n[a]}
),n}
,hr=function(t){
return function(e){
return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}
}
,Ae=function u(t,e,i){
var r=e>=1?e:1,n=(i||(t?.3:.45))/(e<1?e:1),s=n/Ie*(Math.asin(1/r)||0),o=function(h){
return h===1?1:r*Math.pow(2,-10*h)*Fr((h-s)*n)+1}
,a=t==="out"?o:t==="in"?function(f){
return 1-o(1-f)}
:hr(o);
return n=Ie/n,a.config=function(f,h){
return u(t,f,h)}
,a}
,Ee=function u(t,e){
e===void 0&&(e=1.70158);
var i=function(s){
return s?--s*s*((e+1)*s+e)+1:0}
,r=t==="out"?i:t==="in"?function(n){
return 1-i(1-n)}
:hr(i);
return r.config=function(n){
return u(t,n)}
,r}
;
Q("Linear,Quad,Cubic,Quart,Quint,Strong",function(u,t){
var e=t<5?t+1:t;
Nt(u+",Power"+(e-1),t?function(i){
return Math.pow(i,e)}
:function(i){
return i}
,function(i){
return 1-Math.pow(1-i,e)}
,function(i){
return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2}
)}
);
k.Linear.easeNone=k.none=k.Linear.easeIn;
Nt("Elastic",Ae("in"),Ae("out"),Ae());
(function(u,t){
var e=1/t,i=2*e,r=2.5*e,n=function(o){
return o<e?u*o*o:o<i?u*Math.pow(o-1.5/t,2)+.75:o<r?u*(o-=2.25/t)*o+.9375:u*Math.pow(o-2.625/t,2)+.984375}
;
Nt("Bounce",function(s){
return 1-n(1-s)}
,n)}
)(7.5625,2.75);
Nt("Expo",function(u){
return Math.pow(2,10*(u-1))*u+u*u*u*u*u*u*(1-u)}
);
Nt("Circ",function(u){
return-(Li(1-u*u)-1)}
);
Nt("Sine",function(u){
return u===1?1:-zr(u*Ar)+1}
);
Nt("Back",Ee("in"),Ee("out"),Ee());
k.SteppedEase=k.steps=st.SteppedEase={
config:function(t,e){
t===void 0&&(t=1);
var i=1/t,r=t+(e?0:1),n=e?1:0,s=1-M;
return function(o){
return((r*de(0,s,o)|0)+n)*i}
}
}
;
oe.ease=k["quad.out"];
Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(u){
return ri+=u+","+u+"Params,"}
);
var lr=function(t,e){
this.id=Er++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qi,this.set=e?e.getSetter:fi}
,le=(function(){
function u(e){
this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,$t(this,+e.duration,1,1),this.data=e.data,R&&(this._ctx=R,R.data.push(this)),he||et.wake()}
var t=u.prototype;
return t.delay=function(i){
return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay}
,t.duration=function(i){
return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur}
,t.totalDuration=function(i){
return arguments.length?(this._dirty=0,$t(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur}
,t.totalTime=function(i,r){
if(Qt(),!arguments.length)return this._tTime;
var n=this._dp;
if(n&&n.smoothChildTiming&&this._ts){
for(Ce(this,i),!n._dp||n.parent||$i(n,this);
n&&n.parent;
)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;
!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_t(this._dp,this,this._start-this._delay)}
return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===M||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Wi(this,i,r)),this}
,t.time=function(i,r){
return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+vi(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time}
,t.totalProgress=function(i,r){
return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0}
,t.progress=function(i,r){
return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+vi(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0}
,t.iteration=function(i,r){
var n=this.duration()+this._rDelay;
return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Ht(this._tTime,n)+1:1}
,t.timeScale=function(i,r){
if(!arguments.length)return this._rts===-M?0:this._rts;
if(this._rts===i)return this;
var n=this.parent&&this._ts?we(this.parent._time,this):this._tTime;
return this._rts=+i||0,this._ts=this._ps||i===-M?0:this._rts,this.totalTime(de(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),ke(this),Wr(this)}
,t.paused=function(i){
return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==M&&(this._tTime-=M)))),this):this._ps}
,t.startTime=function(i){
if(arguments.length){
this._start=A(i);
var r=this.parent||this._dp;
return r&&(r._sort||!this.parent)&&_t(r,this,this._start-this._delay),this}
return this._start}
,t.endTime=function(i){
return this._start+($(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)}
,t.rawTime=function(i){
var r=this.parent||this._dp;
return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?we(r.rawTime(i),this):this._tTime:this._tTime}
,t.revert=function(i){
i===void 0&&(i=Yr);
var r=W;
return W=i,si(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),W=r,this}
,t.globalTime=function(i){
for(var r=this,n=arguments.length?i:r.rawTime();
r;
)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;
return!this.parent&&this._sat?this._sat.globalTime(i):n}
,t.repeat=function(i){
return arguments.length?(this._repeat=i===1/0?-2:i,xi(this)):this._repeat===-2?1/0:this._repeat}
,t.repeatDelay=function(i){
if(arguments.length){
var r=this._time;
return this._rDelay=i,xi(this),r?this.time(r):this}
return this._rDelay}
,t.yoyo=function(i){
return arguments.length?(this._yoyo=i,this):this._yoyo}
,t.seek=function(i,r){
return this.totalTime(ut(this,i),$(r))}
,t.restart=function(i,r){
return this.play().totalTime(i?-this._delay:0,$(r)),this._dur||(this._zTime=-M),this}
,t.play=function(i,r){
return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)}
,t.reverse=function(i,r){
return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)}
,t.pause=function(i,r){
return i!=null&&this.seek(i,r),this.paused(!0)}
,t.resume=function(){
return this.paused(!1)}
,t.reversed=function(i){
return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-M:0)),this):this._rts<0}
,t.invalidate=function(){
return this._initted=this._act=0,this._zTime=-M,this}
,t.isActive=function(){
var i=this.parent||this._dp,r=this._start,n;
return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-M)}
,t.eventCallback=function(i,r,n){
var s=this.vars;
return arguments.length>1?(r?(s[i]=r,n&&(s[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]}
,t.then=function(i){
var r=this,n=r._prom;
return new Promise(function(s){
var o=I(i)?i:Ki,a=function(){
var h=r.then;
r.then=null,n&&n(),I(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=h),s(o),r.then=h}
;
r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a}
)}
,t.kill=function(){
ee(this)}
,u}
)();
ot(le.prototype,{
_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-M,_prom:0,_ps:!1,_rts:1}
);
var H=(function(u){
Fi(t,u);
function t(i,r){
var n;
return i===void 0&&(i={
}
),n=u.call(this,i)||this,n.labels={
}
,n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=$(i.sortChildren),E&&_t(i.parent||E,mt(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&Qi(mt(n),i.scrollTrigger),n}
var e=t.prototype;
return e.to=function(r,n,s){
return ne(0,arguments,this),this}
,e.from=function(r,n,s){
return ne(1,arguments,this),this}
,e.fromTo=function(r,n,s,o){
return ne(2,arguments,this),this}
,e.set=function(r,n,s){
return n.duration=0,n.parent=this,re(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new Y(r,n,ut(this,s),1),this}
,e.call=function(r,n,s){
return _t(this,Y.delayedCall(0,r,n),s)}
,e.staggerTo=function(r,n,s,o,a,f,h){
return s.duration=n,s.stagger=s.stagger||o,s.onComplete=f,s.onCompleteParams=h,s.parent=this,new Y(r,s,ut(this,a)),this}
,e.staggerFrom=function(r,n,s,o,a,f,h){
return s.runBackwards=1,re(s).immediateRender=$(s.immediateRender),this.staggerTo(r,n,s,o,a,f,h)}
,e.staggerFromTo=function(r,n,s,o,a,f,h,_){
return o.startAt=s,re(o).immediateRender=$(o.immediateRender),this.staggerTo(r,n,o,a,f,h,_)}
,e.render=function(r,n,s){
var o=this._time,a=this._dirty?this.totalDuration():this._tDur,f=this._dur,h=r<=0?0:A(r),_=this._zTime<0!=r<0&&(this._initted||!f),c,d,p,l,m,v,y,x,T,g,P,w;
if(this!==E&&h>a&&r>=0&&(h=a),h!==this._tTime||s||_){
if(o!==this._time&&f&&(h+=this._time-o,r+=this._time-o),c=h,T=this._start,x=this._ts,v=!x,_&&(f||(o=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){
if(P=this._yoyo,m=f+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,n,s);
if(c=A(h%m),h===a?(l=this._repeat,c=f):(g=A(h/m),l=~~g,l&&l===g&&(c=f,l--),c>f&&(c=f)),g=Ht(this._tTime,m),!o&&this._tTime&&g!==l&&this._tTime-g*m-this._dur<=0&&(g=l),P&&l&1&&(c=f-c,w=1),l!==g&&!this._lock){
var S=P&&g&1,b=S===(P&&l&1);
if(l<g&&(S=!S),o=S?0:h%f?f:h,this._lock=1,this.render(o||(w?0:A(l*m)),n,!f)._lock=0,this._tTime=h,!n&&this.parent&&it(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,g=l),o&&o!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;
if(f=this._dur,a=this._tDur,b&&(this._lock=2,o=S?f:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}
}
if(this._hasPause&&!this._forcing&&this._lock<2&&(y=$r(this,A(o),A(c)),y&&(h-=c-(c=y._start))),this._tTime=h,this._time=c,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&f&&!n&&!g&&(it(this,"onStart"),this._tTime!==h))return this;
if(c>=o&&r>=0)for(d=this._first;
d;
){
if(p=d._next,(d._act||c>=d._start)&&d._ts&&y!==d){
if(d.parent!==this)return this.render(r,n,s);
if(d.render(d._ts>0?(c-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(c-d._start)*d._ts,n,s),c!==this._time||!this._ts&&!v){
y=0,p&&(h+=this._zTime=-M);
break}
}
d=p}
else{
d=this._last;
for(var O=r<0?r:c;
d;
){
if(p=d._prev,(d._act||O<=d._end)&&d._ts&&y!==d){
if(d.parent!==this)return this.render(r,n,s);
if(d.render(d._ts>0?(O-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(O-d._start)*d._ts,n,s||W&&si(d)),c!==this._time||!this._ts&&!v){
y=0,p&&(h+=this._zTime=O?-M:M);
break}
}
d=p}
}
if(y&&!n&&(this.pause(),y.render(c>=o?0:-M)._zTime=c>=o?1:-1,this._ts))return this._start=T,ke(this),this.render(r,n,s);
this._onUpdate&&!n&&it(this,"onUpdate",!0),(h===a&&this._tTime>=this.totalDuration()||!h&&o)&&(T===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!f)&&(h===a&&this._ts>0||!h&&this._ts<0)&&Pt(this,1),!n&&!(r<0&&!o)&&(h||o||!a)&&(it(this,h===a&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<a&&this.timeScale()>0)&&this._prom())))}
return this}
,e.add=function(r,n){
var s=this;
if(yt(n)||(n=ut(this,n,r)),!(r instanceof le)){
if(K(r))return r.forEach(function(o){
return s.add(o,n)}
),this;
if(q(r))return this.addLabel(r,n);
if(I(r))r=Y.delayedCall(0,r);
else return this}
return this!==r?_t(this,r,n):this}
,e.getChildren=function(r,n,s,o){
r===void 0&&(r=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=-ft);
for(var a=[],f=this._first;
f;
)f._start>=o&&(f instanceof Y?n&&a.push(f):(s&&a.push(f),r&&a.push.apply(a,f.getChildren(!0,n,s)))),f=f._next;
return a}
,e.getById=function(r){
for(var n=this.getChildren(1,1,1),s=n.length;
s--;
)if(n[s].vars.id===r)return n[s]}
,e.remove=function(r){
return q(r)?this.removeLabel(r):I(r)?this.killTweensOf(r):(r.parent===this&&Oe(this,r),r===this._recent&&(this._recent=this._last),Lt(this))}
,e.totalTime=function(r,n){
return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=A(et.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),u.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime}
,e.addLabel=function(r,n){
return this.labels[r]=ut(this,n),this}
,e.removeLabel=function(r){
return delete this.labels[r],this}
,e.addPause=function(r,n,s){
var o=Y.delayedCall(0,n||ue,s);
return o.data="isPause",this._hasPause=1,_t(this,o,ut(this,r))}
,e.removePause=function(r){
var n=this._first;
for(r=ut(this,r);
n;
)n._start===r&&n.data==="isPause"&&Pt(n),n=n._next}
,e.killTweensOf=function(r,n,s){
for(var o=this.getTweensOf(r,s),a=o.length;
a--;
)xt!==o[a]&&o[a].kill(r,n);
return this}
,e.getTweensOf=function(r,n){
for(var s=[],o=ht(r),a=this._first,f=yt(n),h;
a;
)a instanceof Y?Ur(a._targets,o)&&(f?(!xt||a._initted&&a._ts)&&a.globalTime(0)<=n&&a.globalTime(a.totalDuration())>n:!n||a.isActive())&&s.push(a):(h=a.getTweensOf(o,n)).length&&s.push.apply(s,h),a=a._next;
return s}
,e.tweenTo=function(r,n){
n=n||{
}
;
var s=this,o=ut(s,r),a=n,f=a.startAt,h=a.onStart,_=a.onStartParams,c=a.immediateRender,d,p=Y.to(s,ot({
ease:n.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:n.duration||Math.abs((o-(f&&"time"in f?f.time:s._time))/s.timeScale())||M,onStart:function(){
if(s.pause(),!d){
var m=n.duration||Math.abs((o-(f&&"time"in f?f.time:s._time))/s.timeScale());
p._dur!==m&&$t(p,m,0,1).render(p._time,!0,!0),d=1}
h&&h.apply(p,_||[])}
}
,n));
return c?p.render(0):p}
,e.tweenFromTo=function(r,n,s){
return this.tweenTo(n,ot({
startAt:{
time:ut(this,r)}
}
,s))}
,e.recent=function(){
return this._recent}
,e.nextLabel=function(r){
return r===void 0&&(r=this._time),Ti(this,ut(this,r))}
,e.previousLabel=function(r){
return r===void 0&&(r=this._time),Ti(this,ut(this,r),1)}
,e.currentLabel=function(r){
return arguments.length?this.seek(r,!0):this.previousLabel(this._time+M)}
,e.shiftChildren=function(r,n,s){
s===void 0&&(s=0);
var o=this._first,a=this.labels,f;
for(r=A(r);
o;
)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;
if(n)for(f in a)a[f]>=s&&(a[f]+=r);
return Lt(this)}
,e.invalidate=function(r){
var n=this._first;
for(this._lock=0;
n;
)n.invalidate(r),n=n._next;
return u.prototype.invalidate.call(this,r)}
,e.clear=function(r){
r===void 0&&(r=!0);
for(var n=this._first,s;
n;
)s=n._next,this.remove(n),n=s;
return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={
}
),Lt(this)}
,e.totalDuration=function(r){
var n=0,s=this,o=s._last,a=ft,f,h,_;
if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));
if(s._dirty){
for(_=s.parent;
o;
)f=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>a&&s._sort&&o._ts&&!s._lock?(s._lock=1,_t(s,o,h-o._delay,1)._lock=0):a=h,h<0&&o._ts&&(n-=h,(!_&&!s._dp||_&&_.smoothChildTiming)&&(s._start+=A(h/s._ts),s._time-=h,s._tTime-=h),s.shiftChildren(-h,!1,-1/0),a=0),o._end>n&&o._ts&&(n=o._end),o=f;
$t(s,s===E&&s._time>n?s._time:n,1,1),s._dirty=0}
return s._tDur}
,t.updateRoot=function(r){
if(E._ts&&(Wi(E,we(r,E)),Xi=et.frame),et.frame>=gi){
gi+=nt.autoSleep||120;
var n=E._first;
if((!n||!n._ts)&&nt.autoSleep&&et._listeners.length<2){
for(;
n&&!n._ts;
)n=n._next;
n||et.sleep()}
}
}
,t}
)(le);
ot(H.prototype,{
_lock:0,_hasPause:0,_forcing:0}
);
var cn=function(t,e,i,r,n,s,o){
var a=new Z(this._pt,t,e,0,1,gr,null,n),f=0,h=0,_,c,d,p,l,m,v,y;
for(a.b=i,a.e=r,i+="",r+="",(v=~r.indexOf("random("))&&(r=fe(r)),s&&(y=[i,r],s(y,t,e),i=y[0],r=y[1]),c=i.match(Me)||[];
_=Me.exec(r);
)p=_[0],l=r.substring(f,_.index),d?d=(d+1)%5:l.substr(-5)==="rgba("&&(d=1),p!==c[h++]&&(m=parseFloat(c[h-1])||0,a._pt={
_next:a._pt,p:l||h===1?l:",",s:m,c:p.charAt(1)==="="?qt(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0}
,f=Me.lastIndex);
return a.c=f<r.length?r.substring(f,r.length):"",a.fp=o,(Ni.test(r)||v)&&(a.e=0),this._pt=a,a}
,oi=function(t,e,i,r,n,s,o,a,f,h){
I(r)&&(r=r(n||0,t,s));
var _=t[e],c=i!=="get"?i:I(_)?f?t[e.indexOf("set")||!I(t["get"+e.substr(3)])?e:"get"+e.substr(3)](f):t[e]():_,d=I(_)?f?yn:pr:ui,p;
if(q(r)&&(~r.indexOf("random(")&&(r=fe(r)),r.charAt(1)==="="&&(p=qt(c,r)+(G(c)||0),(p||p===0)&&(r=p))),!h||c!==r||We)return!isNaN(c*r)&&r!==""?(p=new Z(this._pt,t,e,+c||0,r-(c||0),typeof _=="boolean"?xn:mr,0,d),f&&(p.fp=f),o&&p.modifier(o,this,t),this._pt=p):(!_&&!(e in t)&&ei(e,r),cn.call(this,t,e,c,r,d,a||nt.stringFilter,f))}
,dn=function(t,e,i,r,n){
if(I(t)&&(t=se(t,n,e,i,r)),!dt(t)||t.style&&t.nodeType||K(t)||Ii(t))return q(t)?se(t,n,e,i,r):t;
var s={
}
,o;
for(o in t)s[o]=se(t[o],n,e,i,r);
return s}
,_r=function(t,e,i,r,n,s){
var o,a,f,h;
if(tt[t]&&(o=new tt[t]).init(n,o.rawVars?e[t]:dn(e[t],r,n,s,i),i,r,s)!==!1&&(i._pt=a=new Z(i._pt,n,t,0,1,o.render,o,0,o.priority),i!==Xt))for(f=i._ptLookup[i._targets.indexOf(n)],h=o._props.length;
h--;
)f[o._props[h]]=a;
return o}
,xt,We,ai=function u(t,e,i){
var r=t.vars,n=r.ease,s=r.startAt,o=r.immediateRender,a=r.lazy,f=r.onUpdate,h=r.runBackwards,_=r.yoyoEase,c=r.keyframes,d=r.autoRevert,p=t._dur,l=t._startAt,m=t._targets,v=t.parent,y=v&&v.data==="nested"?v.vars.targets:m,x=t._overwrite==="auto"&&!Ze,T=t.timeline,g=r.easeReverse||_,P,w,S,b,O,B,F,D,L,X,U,N,at;
if(T&&(!c||!n)&&(n="none"),t._ease=It(n,oe.ease),t._rEase=g&&(It(g)||t._ease),t._from=!T&&!!r.runBackwards,t._from&&(t.ratio=1),!T||c&&!r.stagger){
if(D=m[0]?Ft(m[0]).harness:0,N=D&&r[D.prop],P=Te(r,ii),l&&(l._zTime<0&&l.progress(1),e<0&&h&&o&&!d?l.render(-1,!0):l.revert(h&&p?me:Vr),l._lazy=0),s){
if(Pt(t._startAt=Y.set(m,ot({
data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!l&&$(a),startAt:null,delay:0,onUpdate:f&&function(){
return it(t,"onUpdate")}
,stagger:0}
,s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(W||!o&&!d)&&t._startAt.revert(me),o&&p&&e<=0&&i<=0){
e&&(t._zTime=e);
return}
}
else if(h&&p&&!l){
if(e&&(o=!1),S=ot({
overwrite:!1,data:"isFromStart",lazy:o&&!l&&$(a),immediateRender:o,stagger:0,parent:v}
,P),N&&(S[D.prop]=N),Pt(t._startAt=Y.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(W?t._startAt.revert(me):t._startAt.render(-1,!0)),t._zTime=e,!o)u(t._startAt,M,M);
else if(!e)return}
for(t._pt=t._ptCache=0,a=p&&$(a)||a&&!p,w=0;
w<m.length;
w++){
if(O=m[w],F=O._gsap||ni(m)[w]._gsap,t._ptLookup[w]=X={
}
,Ne[F.id]&&bt.length&&xe(),U=y===m?w:y.indexOf(O),D&&(L=new D).init(O,N||P,t,U,y)!==!1&&(t._pt=b=new Z(t._pt,O,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Vt){
X[Vt]=b}
),L.priority&&(B=1)),!D||N)for(S in P)tt[S]&&(L=_r(S,P,t,U,O,y))?L.priority&&(B=1):X[S]=b=oi.call(t,O,S,"get",P[S],U,y,0,r.stringFilter);
t._op&&t._op[w]&&t.kill(O,t._op[w]),x&&t._pt&&(xt=t,E.killTweensOf(O,X,t.globalTime(e)),at=!t.parent,xt=0),t._pt&&a&&(Ne[F.id]=1)}
B&&yr(t),t._onInit&&t._onInit(t)}
t._onUpdate=f,t._initted=(!t._op||t._pt)&&!at,c&&e<=0&&T.render(ft,!0,!0)}
,pn=function(t,e,i,r,n,s,o,a){
var f=(t._pt&&t._ptCache||(t._ptCache={
}
))[e],h,_,c,d;
if(!f)for(f=t._ptCache[e]=[],c=t._ptLookup,d=t._targets.length;
d--;
){
if(h=c[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;
h&&h.p!==e&&h.fp!==e;
)h=h._next;
if(!h)return We=1,t.vars[e]="+=0",ai(t,o),We=0,a?ae(e+" not eligible for reset. Try splitting into individual properties"):1;
f.push(h)}
for(d=f.length;
d--;
)_=f[d],h=_._pt||_,h.s=(r||r===0)&&!n?r:h.s+(r||0)+s*h.c,h.c=i-h.s,_.e&&(_.e=V(i)+G(_.e)),_.b&&(_.b=h.s+G(_.b))}
,mn=function(t,e){
var i=t[0]?Ft(t[0]).harness:0,r=i&&i.aliases,n,s,o,a;
if(!r)return e;
n=Kt({
}
,e);
for(s in r)if(s in n)for(a=r[s].split(","),o=a.length;
o--;
)n[a[o]]=n[s];
return n}
,gn=function(t,e,i,r){
var n=e.ease||r||"power1.inOut",s,o;
if(K(e))o=i[t]||(i[t]=[]),e.forEach(function(a,f){
return o.push({
t:f/(e.length-1)*100,v:a,e:n}
)}
);
else for(s in e)o=i[s]||(i[s]=[]),s==="ease"||o.push({
t:parseFloat(t),v:e[s],e:n}
)}
,se=function(t,e,i,r,n){
return I(t)?t.call(e,i,r,n):q(t)&&~t.indexOf("random(")?fe(t):t}
,cr=ri+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dr={
}
;
Q(cr+",id,stagger,delay,duration,paused,scrollTrigger",function(u){
return dr[u]=1}
);
var Y=(function(u){
Fi(t,u);
function t(i,r,n,s){
var o;
typeof r=="number"&&(n.duration=r,r=n,n=null),o=u.call(this,s?r:re(r))||this;
var a=o.vars,f=a.duration,h=a.delay,_=a.immediateRender,c=a.stagger,d=a.overwrite,p=a.keyframes,l=a.defaults,m=a.scrollTrigger,v=r.parent||E,y=(K(i)||Ii(i)?yt(i[0]):"length"in r)?[i]:ht(i),x,T,g,P,w,S,b,O;
if(o._targets=y.length?ni(y):ae("GSAP target "+i+" not found. https://gsap.com",!nt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||c||pe(f)||pe(h)){
r=o.vars;
var B=r.easeReverse||r.yoyoEase;
if(x=o.timeline=new H({
data:"nested",defaults:l||{
}
,targets:v&&v.data==="nested"?v.vars.targets:y}
),x.kill(),x.parent=x._dp=mt(o),x._start=0,c||pe(f)||pe(h)){
if(P=y.length,b=c&&tr(c),dt(c))for(w in c)~cr.indexOf(w)&&(O||(O={
}
),O[w]=c[w]);
for(T=0;
T<P;
T++)g=Te(r,dr),g.stagger=0,B&&(g.easeReverse=B),O&&Kt(g,O),S=y[T],g.duration=+se(f,mt(o),T,S,y),g.delay=(+se(h,mt(o),T,S,y)||0)-o._delay,!c&&P===1&&g.delay&&(o._delay=h=g.delay,o._start+=h,g.delay=0),x.to(S,g,b?b(T,S,y):0),x._ease=k.none;
x.duration()?f=h=0:o.timeline=0}
else if(p){
re(ot(x.vars.defaults,{
ease:"none"}
)),x._ease=It(p.ease||r.ease||"none");
var F=0,D,L,X;
if(K(p))p.forEach(function(U){
return x.to(y,U,">")}
),x.duration();
else{
g={
}
;
for(w in p)w==="ease"||w==="easeEach"||gn(w,p[w],g,p.easeEach);
for(w in g)for(D=g[w].sort(function(U,N){
return U.t-N.t}
),F=0,T=0;
T<D.length;
T++)L=D[T],X={
ease:L.e,duration:(L.t-(T?D[T-1].t:0))/100*f}
,X[w]=L.v,x.to(y,X,F),F+=X.duration;
x.duration()<f&&x.to({
}
,{
duration:f-x.duration()}
)}
}
f||o.duration(f=x.duration())}
else o.timeline=0;
return d===!0&&!Ze&&(xt=mt(o),E.killTweensOf(y),xt=0),_t(v,mt(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(_||!f&&!p&&o._start===A(v._time)&&$(_)&&Gr(mt(o))&&v.data!=="nested")&&(o._tTime=-M,o.render(Math.max(0,-h)||0)),m&&Qi(mt(o),m),o}
var e=t.prototype;
return e.render=function(r,n,s){
var o=this._time,a=this._tDur,f=this._dur,h=r<0,_=r>a-M&&!h?a:r<M?0:r,c,d,p,l,m,v,y,x;
if(!f)Hr(this,r,n,s);
else if(_!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){
if(c=_,x=this.timeline,this._repeat){
if(l=f+this._rDelay,this._repeat<-1&&h)return this.totalTime(l*100+r,n,s);
if(c=A(_%l),_===a?(p=this._repeat,c=f):(m=A(_/l),p=~~m,p&&p===m?(c=f,p--):c>f&&(c=f)),v=this._yoyo&&p&1,v&&(c=f-c),m=Ht(this._tTime,l),c===o&&!s&&this._initted&&p===m)return this._tTime=_,this;
p!==m&&this.vars.repeatRefresh&&!v&&!this._lock&&c!==l&&this._initted&&(this._lock=s=1,this.render(A(l*p),!0).invalidate()._lock=0)}
if(!this._initted){
if(Zi(this,h?r:c,s,n,_))return this._tTime=0,this;
if(o!==this._time&&!(s&&this.vars.repeatRefresh&&p!==m))return this;
if(f!==this._dur)return this.render(r,n,s)}
if(this._rEase){
var T=c<o;
if(T!==this._inv){
var g=T?o:f-o;
this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=g?(T?-1:1)/g:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}
this.ratio=y=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}
else this.ratio=y=this._ease(c/f);
if(this._from&&(this.ratio=y=1-y),this._tTime=_,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&_&&!n&&!m&&(it(this,"onStart"),this._tTime!==_))return this;
for(d=this._pt;
d;
)d.r(y,d.d),d=d._next;
x&&x.render(r<0?r:x._dur*x._ease(c/this._dur),n,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(h&&Ve(this,r,n,s),it(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!n&&this.parent&&it(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(h&&!this._onUpdate&&Ve(this,r,!0,!0),(r||!f)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&Pt(this,1),!n&&!(h&&!o)&&(_||o||v)&&(it(this,_===a?"onComplete":"onReverseComplete",!0),this._prom&&!(_<a&&this.timeScale()>0)&&this._prom()))}
return this}
,e.targets=function(){
return this._targets}
,e.invalidate=function(r){
return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),u.prototype.invalidate.call(this,r)}
,e.resetTo=function(r,n,s,o,a){
he||et.wake(),this._ts||this.play();
var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;
return this._initted||ai(this,f),h=this._ease(f/this._dur),pn(this,r,n,s,o,h,f,a)?this.resetTo(r,n,s,o,1):(Ce(this,0),this.parent||Hi(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))}
,e.kill=function(r,n){
if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?ee(this):this.scrollTrigger&&this.scrollTrigger.kill(!!W),this;
if(this.timeline){
var s=this.timeline.totalDuration();
return this.timeline.killTweensOf(r,n,xt&&xt.vars.overwrite!==!0)._first||ee(this),this.parent&&s!==this.timeline.totalDuration()&&$t(this,this._dur*this.timeline._tDur/s,0,1),this}
var o=this._targets,a=r?ht(r):o,f=this._ptLookup,h=this._pt,_,c,d,p,l,m,v;
if((!n||n==="all")&&qr(o,a))return n==="all"&&(this._pt=0),ee(this);
for(_=this._op=this._op||[],n!=="all"&&(q(n)&&(l={
}
,Q(n,function(y){
return l[y]=1}
),n=l),n=mn(o,n)),v=o.length;
v--;
)if(~a.indexOf(o[v])){
c=f[v],n==="all"?(_[v]=n,p=c,d={
}
):(d=_[v]=_[v]||{
}
,p=n);
for(l in p)m=c&&c[l],m&&((!("kill"in m.d)||m.d.kill(l)===!0)&&Oe(this,m,"_pt"),delete c[l]),d!=="all"&&(d[l]=1)}
return this._initted&&!this._pt&&h&&ee(this),this}
,t.to=function(r,n){
return new t(r,n,arguments[2])}
,t.from=function(r,n){
return ne(1,arguments)}
,t.delayedCall=function(r,n,s,o){
return new t(n,0,{
immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o}
)}
,t.fromTo=function(r,n,s){
return ne(2,arguments)}
,t.set=function(r,n){
return n.duration=0,n.repeatDelay||(n.repeat=0),new t(r,n)}
,t.killTweensOf=function(r,n,s){
return E.killTweensOf(r,n,s)}
,t}
)(le);
ot(Y.prototype,{
_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}
);
Q("staggerTo,staggerFrom,staggerFromTo",function(u){
Y[u]=function(){
var t=new H,e=Ue.call(arguments,0);
return e.splice(u==="staggerFromTo"?5:4,0,0),t[u].apply(t,e)}
}
);
var ui=function(t,e,i){
return t[e]=i}
,pr=function(t,e,i){
return t[e](i)}
,yn=function(t,e,i,r){
return t[e](r.fp,i)}
,vn=function(t,e,i){
return t.setAttribute(e,i)}
,fi=function(t,e){
return I(t[e])?pr:je(t[e])&&t.setAttribute?vn:ui}
,mr=function(t,e){
return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)}
,xn=function(t,e){
return e.set(e.t,e.p,!!(e.s+e.c*t),e)}
,gr=function(t,e){
var i=e._pt,r="";
if(!t&&e.b)r=e.b;
else if(t===1&&e.e)r=e.e;
else{
for(;
i;
)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;
r+=e.c}
e.set(e.t,e.p,r,e)}
,hi=function(t,e){
for(var i=e._pt;
i;
)i.r(t,i.d),i=i._next}
,Tn=function(t,e,i,r){
for(var n=this._pt,s;
n;
)s=n._next,n.p===r&&n.modifier(t,e,i),n=s}
,wn=function(t){
for(var e=this._pt,i,r;
e;
)r=e._next,e.p===t&&!e.op||e.op===t?Oe(this,e,"_pt"):e.dep||(i=1),e=r;
return!i}
,bn=function(t,e,i,r){
r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)}
,yr=function(t){
for(var e=t._pt,i,r,n,s;
e;
){
for(i=e._next,r=n;
r&&r.pr>e.pr;
)r=r._next;
(e._prev=r?r._prev:s)?e._prev._next=e:n=e,(e._next=r)?r._prev=e:s=e,e=i}
t._pt=n}
,Z=(function(){
function u(e,i,r,n,s,o,a,f,h){
this.t=i,this.s=n,this.c=s,this.p=r,this.r=o||mr,this.d=a||this,this.set=f||ui,this.pr=h||0,this._next=e,e&&(e._prev=this)}
var t=u.prototype;
return t.modifier=function(i,r,n){
this.mSet=this.mSet||this.set,this.set=bn,this.m=i,this.mt=n,this.tween=r}
,u}
)();
Q(ri+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(u){
return ii[u]=1}
);
st.TweenMax=st.TweenLite=Y;
st.TimelineLite=st.TimelineMax=H;
E=new H({
sortChildren:!1,defaults:oe,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}
);
nt.stringFilter=fr;
var Bt=[],ye={
}
,Sn=[],bi=0,Pn=0,ze=function(t){
return(ye[t]||Sn).map(function(e){
return e()}
)}
,Ge=function(){
var t=Date.now(),e=[];
t-bi>2&&(ze("matchMediaInit"),Bt.forEach(function(i){
var r=i.queries,n=i.conditions,s,o,a,f;
for(o in r)s=lt.matchMedia(r[o]).matches,s&&(a=1),s!==n[o]&&(n[o]=s,f=1);
f&&(i.revert(),a&&e.push(i))}
),ze("matchMediaRevert"),e.forEach(function(i){
return i.onMatch(i,function(r){
return i.add(null,r)}
)}
),bi=t,ze("matchMedia"))}
,vr=(function(){
function u(e,i){
this.selector=i&&Xe(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Pn++,e&&this.add(e)}
var t=u.prototype;
return t.add=function(i,r,n){
I(i)&&(n=r,r=i,i=I);
var s=this,o=function(){
var f=R,h=s.selector,_;
return f&&f!==s&&f.data.push(s),n&&(s.selector=Xe(n)),R=s,_=r.apply(s,arguments),I(_)&&s._r.push(_),R=f,s.selector=h,s.isReverted=!1,_}
;
return s.last=o,i===I?o(s,function(a){
return s.add(null,a)}
):i?s[i]=o:o}
,t.ignore=function(i){
var r=R;
R=null,i(this),R=r}
,t.getTweens=function(){
var i=[];
return this.data.forEach(function(r){
return r instanceof u?i.push.apply(i,r.getTweens()):r instanceof Y&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}
),i}
,t.clear=function(){
this._r.length=this.data.length=0}
,t.kill=function(i,r){
var n=this;
if(i?(function(){
for(var o=n.getTweens(),a=n.data.length,f;
a--;
)f=n.data[a],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(h){
return o.splice(o.indexOf(h),1)}
));
for(o.map(function(h){
return{
g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}
}
).sort(function(h,_){
return _.g-h.g||-1/0}
).forEach(function(h){
return h.t.revert(i)}
),a=n.data.length;
a--;
)f=n.data[a],f instanceof H?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof Y)&&f.revert&&f.revert(i);
n._r.forEach(function(h){
return h(i,n)}
),n.isReverted=!0}
)():this.data.forEach(function(o){
return o.kill&&o.kill()}
),this.clear(),r)for(var s=Bt.length;
s--;
)Bt[s].id===this.id&&Bt.splice(s,1)}
,t.revert=function(i){
this.kill(i||{
}
)}
,u}
)(),On=(function(){
function u(e){
this.contexts=[],this.scope=e,R&&R.data.push(this)}
var t=u.prototype;
return t.add=function(i,r,n){
dt(i)||(i={
matches:i}
);
var s=new vr(0,n||this.scope),o=s.conditions={
}
,a,f,h;
R&&!s.selector&&(s.selector=R.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;
for(f in i)f==="all"?h=1:(a=lt.matchMedia(i[f]),a&&(Bt.indexOf(s)<0&&Bt.push(s),(o[f]=a.matches)&&(h=1),a.addListener?a.addListener(Ge):a.addEventListener("change",Ge)));
return h&&r(s,function(_){
return s.add(null,_)}
),this}
,t.revert=function(i){
this.kill(i||{
}
)}
,t.kill=function(i){
this.contexts.forEach(function(r){
return r.kill(i,!0)}
)}
,u}
)(),be={
registerPlugin:function(){
for(var t=arguments.length,e=new Array(t),i=0;
i<t;
i++)e[i]=arguments[i];
e.forEach(function(r){
return or(r)}
)}
,timeline:function(t){
return new H(t)}
,getTweensOf:function(t,e){
return E.getTweensOf(t,e)}
,getProperty:function(t,e,i,r){
q(t)&&(t=ht(t)[0]);
var n=Ft(t||{
}
).get,s=i?Ki:Gi;
return i==="native"&&(i=""),t&&(e?s((tt[e]&&tt[e].get||n)(t,e,i,r)):function(o,a,f){
return s((tt[o]&&tt[o].get||n)(t,o,a,f))}
)}
,quickSetter:function(t,e,i){
if(t=ht(t),t.length>1){
var r=t.map(function(h){
return J.quickSetter(h,e,i)}
),n=r.length;
return function(h){
for(var _=n;
_--;
)r[_](h)}
}
t=t[0]||{
}
;
var s=tt[e],o=Ft(t),a=o.harness&&(o.harness.aliases||{
}
)[e]||e,f=s?function(h){
var _=new s;
Xt._pt=0,_.init(t,i?h+i:h,Xt,0,[t]),_.render(1,_),Xt._pt&&hi(1,Xt)}
:o.set(t,a);
return s?f:function(h){
return f(t,a,i?h+i:h,o,1)}
}
,quickTo:function(t,e,i){
var r,n=J.to(t,ot((r={
}
,r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{
}
)),s=function(a,f,h){
return n.resetTo(e,a,f,h)}
;
return s.tween=n,s}
,isTweening:function(t){
return E.getTweensOf(t,!0).length>0}
,defaults:function(t){
return t&&t.ease&&(t.ease=It(t.ease,oe.ease)),yi(oe,t||{
}
)}
,config:function(t){
return yi(nt,t||{
}
)}
,registerEffect:function(t){
var e=t.name,i=t.effect,r=t.plugins,n=t.defaults,s=t.extendTimeline;
(r||"").split(",").forEach(function(o){
return o&&!tt[o]&&!st[o]&&ae(e+" effect requires "+o+" plugin.")}
),De[e]=function(o,a,f){
return i(ht(o),ot(a||{
}
,n),f)}
,s&&(H.prototype[e]=function(o,a,f){
return this.add(De[e](o,dt(a)?a:(f=a)&&{
}
,this),f)}
)}
,registerEase:function(t,e){
k[t]=It(e)}
,parseEase:function(t,e){
return arguments.length?It(t,e):k}
,getById:function(t){
return E.getById(t)}
,exportRoot:function(t,e){
t===void 0&&(t={
}
);
var i=new H(t),r,n;
for(i.smoothChildTiming=$(t.smoothChildTiming),E.remove(i),i._dp=0,i._time=i._tTime=E._time,r=E._first;
r;
)n=r._next,(e||!(!r._dur&&r instanceof Y&&r.vars.onComplete===r._targets[0]))&&_t(i,r,r._start-r._delay),r=n;
return _t(E,i,0),i}
,context:function(t,e){
return t?new vr(t,e):R}
,matchMedia:function(t){
return new On(t)}
,matchMediaRefresh:function(){
return Bt.forEach(function(t){
var e=t.conditions,i,r;
for(r in e)e[r]&&(e[r]=!1,i=1);
i&&t.revert()}
)||Ge()}
,addEventListener:function(t,e){
var i=ye[t]||(ye[t]=[]);
~i.indexOf(e)||i.push(e)}
,removeEventListener:function(t,e){
var i=ye[t],r=i&&i.indexOf(e);
r>=0&&i.splice(r,1)}
,utils:{
wrap:rn,wrapYoyo:nn,distribute:tr,random:ir,snap:er,normalize:en,getUnit:G,clamp:Zr,splitColor:ar,toArray:ht,selector:Xe,mapRange:nr,pipe:Jr,unitize:tn,interpolate:sn,shuffle:Ji}
,install:Yi,effects:De,ticker:et,updateRoot:H.updateRoot,plugins:tt,globalTimeline:E,core:{
PropTween:Z,globals:Ui,Tween:Y,Timeline:H,Animation:le,getCache:Ft,_removeLinkedListItem:Oe,reverting:function(){
return W}
,context:function(t){
return t&&R&&(R.data.push(t),t._ctx=R),R}
,suppressOverwrites:function(t){
return Ze=t}
}
}
;
Q("to,from,fromTo,delayedCall,set,killTweensOf",function(u){
return be[u]=Y[u]}
);
et.add(H.updateRoot);
Xt=be.to({
}
,{
duration:0}
);
var kn=function(t,e){
for(var i=t._pt;
i&&i.p!==e&&i.op!==e&&i.fp!==e;
)i=i._next;
return i}
,Cn=function(t,e){
var i=t._targets,r,n,s;
for(r in e)for(n=i.length;
n--;
)s=t._ptLookup[n][r],s&&(s=s.d)&&(s._pt&&(s=kn(s,r)),s&&s.modifier&&s.modifier(e[r],t,i[n],r))}
,Fe=function(t,e){
return{
name:t,headless:1,rawVars:1,init:function(r,n,s){
s._onInit=function(o){
var a,f;
if(q(n)&&(a={
}
,Q(n,function(h){
return a[h]=1}
),n=a),e){
a={
}
;
for(f in n)a[f]=e(n[f]);
n=a}
Cn(o,n)}
}
}
}
,J=be.registerPlugin({
name:"attr",init:function(t,e,i,r,n){
var s,o,a;
this.tween=i;
for(s in e)a=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(a||0)+"",e[s],r,n,0,0,s),o.op=s,o.b=a,this._props.push(s)}
,render:function(t,e){
for(var i=e._pt;
i;
)W?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}
}
,{
name:"endArray",headless:1,init:function(t,e){
for(var i=e.length;
i--;
)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}
}
,Fe("roundProps",qe),Fe("modifiers"),Fe("snap",er))||be;
Y.version=H.version=J.version="3.15.0";
Vi=1;
Je()&&Qt();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
var Si,Tt,Wt,li,zt,Pi,_i,Mn=function(){
return typeof window<"u"}
,vt={
}
,Et=180/Math.PI,Gt=Math.PI/180,Yt=Math.atan2,Oi=1e8,ci=/([A-Z])/g,Dn=/(left|right|width|margin|padding|x)/i,Rn=/[\s,\(]\S/,ct={
autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"}
,Ke=function(t,e){
return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)}
,An=function(t,e){
return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)}
,En=function(t,e){
return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)}
,zn=function(t,e){
return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)}
,Fn=function(t,e){
var i=e.s+e.c*t;
e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)}
,xr=function(t,e){
return e.set(e.t,e.p,t?e.e:e.b,e)}
,Tr=function(t,e){
return e.set(e.t,e.p,t!==1?e.b:e.e,e)}
,Ln=function(t,e,i){
return t.style[e]=i}
,In=function(t,e,i){
return t.style.setProperty(e,i)}
,Bn=function(t,e,i){
return t._gsap[e]=i}
,Nn=function(t,e,i){
return t._gsap.scaleX=t._gsap.scaleY=i}
,Vn=function(t,e,i,r,n){
var s=t._gsap;
s.scaleX=s.scaleY=i,s.renderTransform(n,s)}
,Yn=function(t,e,i,r,n){
var s=t._gsap;
s[e]=i,s.renderTransform(n,s)}
,z="transform",j=z+"Origin",Un=function u(t,e){
var i=this,r=this.target,n=r.style,s=r._gsap;
if(t in vt&&n){
if(this.tfm=this.tfm||{
}
,t!=="transform")t=ct[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){
return i.tfm[o]=gt(r,o)}
):this.tfm[t]=s.x?s[t]:gt(r,t),t===j&&(this.tfm.zOrigin=s.zOrigin);
else return ct.transform.split(",").forEach(function(o){
return u.call(i,o,e)}
);
if(this.props.indexOf(z)>=0)return;
s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(j,e,"")),t=z}
(n||e)&&this.props.push(t,e,n[t])}
,wr=function(t){
t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}
,Xn=function(){
var t=this.props,e=this.target,i=e.style,r=e._gsap,n,s;
for(n=0;
n<t.length;
n+=3)t[n+1]?t[n+1]===2?e[t[n]](t[n+2]):e[t[n]]=t[n+2]:t[n+2]?i[t[n]]=t[n+2]:i.removeProperty(t[n].substr(0,2)==="--"?t[n]:t[n].replace(ci,"-$1").toLowerCase());
if(this.tfm){
for(s in this.tfm)r[s]=this.tfm[s];
r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=_i(),(!n||!n.isStart)&&!i[z]&&(wr(i),r.zOrigin&&i[j]&&(i[j]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}
}
,br=function(t,e){
var i={
target:t,props:[],revert:Xn,save:Un}
;
return t._gsap||J.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){
return i.save(r)}
),i}
,Sr,He=function(t,e){
var i=Tt.createElementNS?Tt.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Tt.createElement(t);
return i&&i.style?i:Tt.createElement(t)}
,rt=function u(t,e,i){
var r=getComputedStyle(t);
return r[e]||r.getPropertyValue(e.replace(ci,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&u(t,Zt(e)||e,1)||""}
,ki="O,Moz,ms,Ms,Webkit".split(","),Zt=function(t,e,i){
var r=e||zt,n=r.style,s=5;
if(t in n&&!i)return t;
for(t=t.charAt(0).toUpperCase()+t.substr(1);
s--&&!(ki[s]+t in n);
);
return s<0?null:(s===3?"ms":s>=0?ki[s]:"")+t}
,$e=function(){
Mn()&&window.document&&(Si=window,Tt=Si.document,Wt=Tt.documentElement,zt=He("div")||{
style:{
}
}
,He("div"),z=Zt(z),j=z+"Origin",zt.style.cssText="border-width:0;
line-height:0;
position:absolute;
padding:0",Sr=!!Zt("perspective"),_i=J.core.reverting,li=1)}
,Ci=function(t){
var e=t.ownerSVGElement,i=He("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),n;
r.style.display="block",i.appendChild(r),Wt.appendChild(i);
try{
n=r.getBBox()}
catch{
}
return i.removeChild(r),Wt.removeChild(i),n}
,Mi=function(t,e){
for(var i=e.length;
i--;
)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])}
,Pr=function(t){
var e,i;
try{
e=t.getBBox()}
catch{
e=Ci(t),i=1}
return e&&(e.width||e.height)||i||(e=Ci(t)),e&&!e.width&&!e.x&&!e.y?{
x:+Mi(t,["x","cx","x1"])||0,y:+Mi(t,["y","cy","y1"])||0,width:0,height:0}
:e}
,Or=function(t){
return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Pr(t))}
,Ot=function(t,e){
if(e){
var i=t.style,r;
e in vt&&e!==j&&(e=z),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(ci,"-$1").toLowerCase())):i.removeAttribute(e)}
}
,wt=function(t,e,i,r,n,s){
var o=new Z(t._pt,e,i,0,1,s?Tr:xr);
return t._pt=o,o.b=r,o.e=n,t._props.push(i),o}
,Di={
deg:1,rad:1,turn:1}
,qn={
grid:1,flex:1}
,kt=function u(t,e,i,r){
var n=parseFloat(i)||0,s=(i+"").trim().substr((n+"").length)||"px",o=zt.style,a=Dn.test(e),f=t.tagName.toLowerCase()==="svg",h=(f?"client":"offset")+(a?"Width":"Height"),_=100,c=r==="px",d=r==="%",p,l,m,v;
if(r===s||!n||Di[r]||Di[s])return n;
if(s!=="px"&&!c&&(n=u(t,e,i,"px")),v=t.getCTM&&Or(t),(d||s==="%")&&(vt[e]||~e.indexOf("adius")))return p=v?t.getBBox()[a?"width":"height"]:t[h],V(d?n/p*_:n/100*p);
if(o[a?"width":"height"]=_+(c?s:r),l=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!f?t:t.parentNode,v&&(l=(t.ownerSVGElement||{
}
).parentNode),(!l||l===Tt||!l.appendChild)&&(l=Tt.body),m=l._gsap,m&&d&&m.width&&a&&m.time===et.time&&!m.uncache)return V(n/m.width*_);
if(d&&(e==="height"||e==="width")){
var y=t.style[e];
t.style[e]=_+r,p=t[h],y?t.style[e]=y:Ot(t,e)}
else(d||s==="%")&&!qn[rt(l,"display")]&&(o.position=rt(t,"position")),l===t&&(o.position="static"),l.appendChild(zt),p=zt[h],l.removeChild(zt),o.position="absolute";
return a&&d&&(m=Ft(l),m.time=et.time,m.width=l[h]),V(c?p*n/_:p&&n?_/p*n:0)}
,gt=function(t,e,i,r){
var n;
return li||$e(),e in ct&&e!=="transform"&&(e=ct[e],~e.indexOf(",")&&(e=e.split(",")[0])),vt[e]&&e!=="transform"?(n=ce(t,r),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Pe(rt(t,j))+" "+n.zOrigin+"px"):(n=t.style[e],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Se[e]&&Se[e](t,e,i)||rt(t,e)||qi(t,e)||(e==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?kt(t,e,n,i)+i:n}
,Wn=function(t,e,i,r){
if(!i||i==="none"){
var n=Zt(e,t,1),s=n&&rt(t,n,1);
s&&s!==i?(e=n,i=s):e==="borderColor"&&(i=rt(t,"borderTopColor"))}
var o=new Z(this._pt,t.style,e,0,1,gr),a=0,f=0,h,_,c,d,p,l,m,v,y,x,T,g;
if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=rt(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(l=t.style[e],t.style[e]=r,r=rt(t,e)||r,l?t.style[e]=l:Ot(t,e)),h=[i,r],fr(h),i=h[0],r=h[1],c=i.match(Ut)||[],g=r.match(Ut)||[],g.length){
for(;
_=Ut.exec(r);
)m=_[0],y=r.substring(a,_.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(l=c[f++]||"")&&(d=parseFloat(l)||0,T=l.substr((d+"").length),m.charAt(1)==="="&&(m=qt(d,m)+T),v=parseFloat(m),x=m.substr((v+"").length),a=Ut.lastIndex-x.length,x||(x=x||nt.units[e]||T,a===r.length&&(r+=x,o.e+=x)),T!==x&&(d=kt(t,e,l,x)||0),o._pt={
_next:o._pt,p:y||f===1?y:",",s:d,c:v-d,m:p&&p<4||e==="zIndex"?Math.round:0}
);
o.c=a<r.length?r.substring(a,r.length):""}
else o.r=e==="display"&&r==="none"?Tr:xr;
return Ni.test(r)&&(o.e=0),this._pt=o,o}
,Ri={
top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"}
,Gn=function(t){
var e=t.split(" "),i=e[0],r=e[1]||"50%";
return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=Ri[i]||i,e[1]=Ri[r]||r,e.join(" ")}
,Kn=function(t,e){
if(e.tween&&e.tween._time===e.tween._dur){
var i=e.t,r=i.style,n=e.u,s=i._gsap,o,a,f;
if(n==="all"||n===!0)r.cssText="",a=1;
else for(n=n.split(","),f=n.length;
--f>-1;
)o=n[f],vt[o]&&(a=1,o=o==="transformOrigin"?j:z),Ot(i,o);
a&&(Ot(i,z),s&&(s.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ce(i,1),s.uncache=1,wr(r)))}
}
,Se={
clearProps:function(t,e,i,r,n){
if(n.data!=="isFromStart"){
var s=t._pt=new Z(t._pt,e,i,0,0,Kn);
return s.u=r,s.pr=-10,s.tween=n,t._props.push(i),1}
}
}
,_e=[1,0,0,1,0,0],kr={
}
,Cr=function(t){
return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t}
,Ai=function(t){
var e=rt(t,z);
return Cr(e)?_e:e.substr(7).match(Bi).map(V)}
,di=function(t,e){
var i=t._gsap||Ft(t),r=t.style,n=Ai(t),s,o,a,f;
return i.svg&&t.getAttribute("transform")?(a=t.transform.baseVal.consolidate().matrix,n=[a.a,a.b,a.c,a.d,a.e,a.f],n.join(",")==="1,0,0,1,0,0"?_e:n):(n===_e&&!t.offsetParent&&t!==Wt&&!i.svg&&(a=r.display,r.display="block",s=t.parentNode,(!s||!t.offsetParent&&!t.getBoundingClientRect().width)&&(f=1,o=t.nextElementSibling,Wt.appendChild(t)),n=Ai(t),a?r.display=a:Ot(t,"display"),f&&(o?s.insertBefore(t,o):s?s.appendChild(t):Wt.removeChild(t))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)}
,Qe=function(t,e,i,r,n,s){
var o=t._gsap,a=n||di(t,!0),f=o.xOrigin||0,h=o.yOrigin||0,_=o.xOffset||0,c=o.yOffset||0,d=a[0],p=a[1],l=a[2],m=a[3],v=a[4],y=a[5],x=e.split(" "),T=parseFloat(x[0])||0,g=parseFloat(x[1])||0,P,w,S,b;
i?a!==_e&&(w=d*m-p*l)&&(S=T*(m/w)+g*(-l/w)+(l*y-m*v)/w,b=T*(-p/w)+g*(d/w)-(d*y-p*v)/w,T=S,g=b):(P=Pr(t),T=P.x+(~x[0].indexOf("%")?T/100*P.width:T),g=P.y+(~(x[1]||x[0]).indexOf("%")?g/100*P.height:g)),r||r!==!1&&o.smooth?(v=T-f,y=g-h,o.xOffset=_+(v*d+y*l)-v,o.yOffset=c+(v*p+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=g,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!i,t.style[j]="0px 0px",s&&(wt(s,o,"xOrigin",f,T),wt(s,o,"yOrigin",h,g),wt(s,o,"xOffset",_,o.xOffset),wt(s,o,"yOffset",c,o.yOffset)),t.setAttribute("data-svg-origin",T+" "+g)}
,ce=function(t,e){
var i=t._gsap||new lr(t);
if("x"in i&&!e&&!i.uncache)return i;
var r=t.style,n=i.scaleX<0,s="px",o="deg",a=getComputedStyle(t),f=rt(t,j)||"0",h,_,c,d,p,l,m,v,y,x,T,g,P,w,S,b,O,B,F,D,L,X,U,N,at,Vt,jt,Jt,Mt,pi,pt,Dt;
return h=_=c=l=m=v=y=x=T=0,d=p=1,i.svg=!!(t.getCTM&&Or(t)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(r[z]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[z]!=="none"?a[z]:"")),r.scale=r.rotate=r.translate="none"),w=di(t,i.svg),i.svg&&(i.uncache?(at=t.getBBox(),f=i.xOrigin-at.x+"px "+(i.yOrigin-at.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),Qe(t,N||f,!!N||i.originIsAbsolute,i.smooth!==!1,w)),g=i.xOrigin||0,P=i.yOrigin||0,w!==_e&&(B=w[0],F=w[1],D=w[2],L=w[3],h=X=w[4],_=U=w[5],w.length===6?(d=Math.sqrt(B*B+F*F),p=Math.sqrt(L*L+D*D),l=B||F?Yt(F,B)*Et:0,y=D||L?Yt(D,L)*Et+l:0,y&&(p*=Math.abs(Math.cos(y*Gt))),i.svg&&(h-=g-(g*B+P*D),_-=P-(g*F+P*L))):(Dt=w[6],pi=w[7],jt=w[8],Jt=w[9],Mt=w[10],pt=w[11],h=w[12],_=w[13],c=w[14],S=Yt(Dt,Mt),m=S*Et,S&&(b=Math.cos(-S),O=Math.sin(-S),N=X*b+jt*O,at=U*b+Jt*O,Vt=Dt*b+Mt*O,jt=X*-O+jt*b,Jt=U*-O+Jt*b,Mt=Dt*-O+Mt*b,pt=pi*-O+pt*b,X=N,U=at,Dt=Vt),S=Yt(-D,Mt),v=S*Et,S&&(b=Math.cos(-S),O=Math.sin(-S),N=B*b-jt*O,at=F*b-Jt*O,Vt=D*b-Mt*O,pt=L*O+pt*b,B=N,F=at,D=Vt),S=Yt(F,B),l=S*Et,S&&(b=Math.cos(S),O=Math.sin(S),N=B*b+F*O,at=X*b+U*O,F=F*b-B*O,U=U*b-X*O,B=N,X=at),m&&Math.abs(m)+Math.abs(l)>359.9&&(m=l=0,v=180-v),d=V(Math.sqrt(B*B+F*F+D*D)),p=V(Math.sqrt(U*U+Dt*Dt)),S=Yt(X,U),y=Math.abs(S)>2e-4?S*Et:0,T=pt?1/(pt<0?-pt:pt):0),i.svg&&(N=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Cr(rt(t,z)),N&&t.setAttribute("transform",N))),Math.abs(y)>90&&Math.abs(y)<270&&(n?(d*=-1,y+=l<=0?180:-180,l+=l<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+s,i.y=_-((i.yPercent=_&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-_)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+s,i.z=c+s,i.scaleX=V(d),i.scaleY=V(p),i.rotation=V(l)+o,i.rotationX=V(m)+o,i.rotationY=V(v)+o,i.skewX=y+o,i.skewY=x+o,i.transformPerspective=T+s,(i.zOrigin=parseFloat(f.split(" ")[2])||!e&&i.zOrigin||0)&&(r[j]=Pe(f)),i.xOffset=i.yOffset=0,i.force3D=nt.force3D,i.renderTransform=i.svg?$n:Sr?Mr:Hn,i.uncache=0,i}
,Pe=function(t){
return(t=t.split(" "))[0]+" "+t[1]}
,Le=function(t,e,i){
var r=G(e);
return V(parseFloat(e)+parseFloat(kt(t,"x",i+"px",r)))+r}
,Hn=function(t,e){
e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Mr(t,e)}
,Rt="0deg",te="0px",At=") ",Mr=function(t,e){
var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,o=i.y,a=i.z,f=i.rotation,h=i.rotationY,_=i.rotationX,c=i.skewX,d=i.skewY,p=i.scaleX,l=i.scaleY,m=i.transformPerspective,v=i.force3D,y=i.target,x=i.zOrigin,T="",g=v==="auto"&&t&&t!==1||v===!0;
if(x&&(_!==Rt||h!==Rt)){
var P=parseFloat(h)*Gt,w=Math.sin(P),S=Math.cos(P),b;
P=parseFloat(_)*Gt,b=Math.cos(P),s=Le(y,s,w*b*-x),o=Le(y,o,-Math.sin(P)*-x),a=Le(y,a,S*b*-x+x)}
m!==te&&(T+="perspective("+m+At),(r||n)&&(T+="translate("+r+"%, "+n+"%) "),(g||s!==te||o!==te||a!==te)&&(T+=a!==te||g?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+At),f!==Rt&&(T+="rotate("+f+At),h!==Rt&&(T+="rotateY("+h+At),_!==Rt&&(T+="rotateX("+_+At),(c!==Rt||d!==Rt)&&(T+="skew("+c+", "+d+At),(p!==1||l!==1)&&(T+="scale("+p+", "+l+At),y.style[z]=T||"translate(0, 0)"}
,$n=function(t,e){
var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,o=i.y,a=i.rotation,f=i.skewX,h=i.skewY,_=i.scaleX,c=i.scaleY,d=i.target,p=i.xOrigin,l=i.yOrigin,m=i.xOffset,v=i.yOffset,y=i.forceCSS,x=parseFloat(s),T=parseFloat(o),g,P,w,S,b;
a=parseFloat(a),f=parseFloat(f),h=parseFloat(h),h&&(h=parseFloat(h),f+=h,a+=h),a||f?(a*=Gt,f*=Gt,g=Math.cos(a)*_,P=Math.sin(a)*_,w=Math.sin(a-f)*-c,S=Math.cos(a-f)*c,f&&(h*=Gt,b=Math.tan(f-h),b=Math.sqrt(1+b*b),w*=b,S*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),g*=b,P*=b)),g=V(g),P=V(P),w=V(w),S=V(S)):(g=_,S=c,P=w=0),(x&&!~(s+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(x=kt(d,"x",s,"px"),T=kt(d,"y",o,"px")),(p||l||m||v)&&(x=V(x+p-(p*g+l*w)+m),T=V(T+l-(p*P+l*S)+v)),(r||n)&&(b=d.getBBox(),x=V(x+r/100*b.width),T=V(T+n/100*b.height)),b="matrix("+g+","+P+","+w+","+S+","+x+","+T+")",d.setAttribute("transform",b),y&&(d.style[z]=b)}
,Qn=function(t,e,i,r,n){
var s=360,o=q(n),a=parseFloat(n)*(o&&~n.indexOf("rad")?Et:1),f=a-r,h=r+f+"deg",_,c;
return o&&(_=n.split("_")[1],_==="short"&&(f%=s,f!==f%(s/2)&&(f+=f<0?s:-s)),_==="cw"&&f<0?f=(f+s*Oi)%s-~~(f/s)*s:_==="ccw"&&f>0&&(f=(f-s*Oi)%s-~~(f/s)*s)),t._pt=c=new Z(t._pt,e,i,r,f,An),c.e=h,c.u="deg",t._props.push(i),c}
,Ei=function(t,e){
for(var i in e)t[i]=e[i];
return t}
,Zn=function(t,e,i){
var r=Ei({
}
,i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,a,f,h,_,c,d,p;
r.svg?(f=i.getAttribute("transform"),i.setAttribute("transform",""),s[z]=e,o=ce(i,1),Ot(i,z),i.setAttribute("transform",f)):(f=getComputedStyle(i)[z],s[z]=e,o=ce(i,1),s[z]=f);
for(a in vt)f=r[a],h=o[a],f!==h&&n.indexOf(a)<0&&(d=G(f),p=G(h),_=d!==p?kt(i,a,f,p):parseFloat(f),c=parseFloat(h),t._pt=new Z(t._pt,o,a,_,c-_,Ke),t._pt.u=p||0,t._props.push(a));
Ei(o,r)}
;
Q("padding,margin,Width,Radius",function(u,t){
var e="Top",i="Right",r="Bottom",n="Left",s=(t<3?[e,i,r,n]:[e+n,e+i,r+i,r+n]).map(function(o){
return t<2?u+o:"border"+o+u}
);
Se[t>1?"border"+u:u]=function(o,a,f,h,_){
var c,d;
if(arguments.length<4)return c=s.map(function(p){
return gt(o,p,f)}
),d=c.join(" "),d.split(c[0]).length===5?c[0]:d;
c=(h+"").split(" "),d={
}
,s.forEach(function(p,l){
return d[p]=c[l]=c[l]||c[(l-1)/2|0]}
),o.init(a,d,_)}
}
);
var Dr={
name:"css",register:$e,targetTest:function(t){
return t.style&&t.nodeType}
,init:function(t,e,i,r,n){
var s=this._props,o=t.style,a=i.vars.startAt,f,h,_,c,d,p,l,m,v,y,x,T,g,P,w,S,b;
li||$e(),this.styles=this.styles||br(t),S=this.styles.props,this.tween=i;
for(l in e)if(l!=="autoRound"&&(h=e[l],!(tt[l]&&_r(l,e,i,r,t,n)))){
if(d=typeof h,p=Se[l],d==="function"&&(h=h.call(i,r,t,n),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=fe(h)),p)p(this,t,l,h,i)&&(w=1);
else if(l.substr(0,2)==="--")f=(getComputedStyle(t).getPropertyValue(l)+"").trim(),h+="",St.lastIndex=0,St.test(f)||(m=G(f),v=G(h),v?m!==v&&(f=kt(t,l,f,v)+v):m&&(h+=m)),this.add(o,"setProperty",f,h,r,n,0,0,l),s.push(l),S.push(l,0,o[l]);
else if(d!=="undefined"){
if(a&&l in a?(f=typeof a[l]=="function"?a[l].call(i,r,t,n):a[l],q(f)&&~f.indexOf("random(")&&(f=fe(f)),G(f+"")||f==="auto"||(f+=nt.units[l]||G(gt(t,l))||""),(f+"").charAt(1)==="="&&(f=gt(t,l))):f=gt(t,l),c=parseFloat(f),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),_=parseFloat(h),l in ct&&(l==="autoAlpha"&&(c===1&&gt(t,"visibility")==="hidden"&&_&&(c=0),S.push("visibility",0,o.visibility),wt(this,o,"visibility",c?"inherit":"hidden",_?"inherit":"hidden",!_)),l!=="scale"&&l!=="transform"&&(l=ct[l],~l.indexOf(",")&&(l=l.split(",")[0]))),x=l in vt,x){
if(this.styles.save(l),b=h,d==="string"&&h.substring(0,6)==="var(--"){
if(h=rt(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){
var O=t.style.perspective;
t.style.perspective=h,h=rt(t,"perspective"),O?t.style.perspective=O:Ot(t,"perspective")}
_=parseFloat(h)}
if(T||(g=t._gsap,g.renderTransform&&!e.parseTransform||ce(t,e.parseTransform),P=e.smoothOrigin!==!1&&g.smooth,T=this._pt=new Z(this._pt,o,z,0,1,g.renderTransform,g,0,-1),T.dep=1),l==="scale")this._pt=new Z(this._pt,g,"scaleY",g.scaleY,(y?qt(g.scaleY,y+_):_)-g.scaleY||0,Ke),this._pt.u=0,s.push("scaleY",l),l+="X";
else if(l==="transformOrigin"){
S.push(j,0,o[j]),h=Gn(h),g.svg?Qe(t,h,0,P,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==g.zOrigin&&wt(this,g,"zOrigin",g.zOrigin,v),wt(this,o,l,Pe(f),Pe(h)));
continue}
else if(l==="svgOrigin"){
Qe(t,h,1,P,0,this);
continue}
else if(l in kr){
Qn(this,g,l,c,y?qt(c,y+h):h);
continue}
else if(l==="smoothOrigin"){
wt(this,g,"smooth",g.smooth,h);
continue}
else if(l==="force3D"){
g[l]=h;
continue}
else if(l==="transform"){
Zn(this,h,t);
continue}
}
else l in o||(l=Zt(l)||l);
if(x||(_||_===0)&&(c||c===0)&&!Rn.test(h)&&l in o)m=(f+"").substr((c+"").length),_||(_=0),v=G(h)||(l in nt.units?nt.units[l]:m),m!==v&&(c=kt(t,l,f,v)),this._pt=new Z(this._pt,x?g:o,l,c,(y?qt(c,y+_):_)-c,!x&&(v==="px"||l==="zIndex")&&e.autoRound!==!1?Fn:Ke),this._pt.u=v||0,x&&b!==h?(this._pt.b=f,this._pt.e=b,this._pt.r=zn):m!==v&&v!=="%"&&(this._pt.b=f,this._pt.r=En);
else if(l in o)Wn.call(this,t,l,f,y?y+h:h);
else if(l in t)this.add(t,l,f||t[l],y?y+h:h,r,n);
else if(l!=="parseTransform"){
ei(l,h);
continue}
x||(l in o?S.push(l,0,o[l]):typeof t[l]=="function"?S.push(l,2,t[l]()):S.push(l,1,f||t[l])),s.push(l)}
}
w&&yr(this)}
,render:function(t,e){
if(e.tween._time||!_i())for(var i=e._pt;
i;
)i.r(t,i.d),i=i._next;
else e.styles.revert()}
,get:gt,aliases:ct,getSetter:function(t,e,i){
var r=ct[e];
return r&&r.indexOf(",")<0&&(e=r),e in vt&&e!==j&&(t._gsap.x||gt(t,"x"))?i&&Pi===i?e==="scale"?Nn:Bn:(Pi=i||{
}
)&&(e==="scale"?Vn:Yn):t.style&&!je(t.style[e])?Ln:~e.indexOf("-")?In:fi(t,e)}
,core:{
_removeProperty:Ot,_getMatrix:di}
}
;
J.utils.checkPrefix=Zt;
J.core.getStyleSaver=br;
(function(u,t,e,i){
var r=Q(u+","+t+","+e,function(n){
vt[n]=1}
);
Q(t,function(n){
nt.units[n]="deg",kr[n]=1}
),ct[r[13]]=u+","+t,Q(i,function(n){
var s=n.split(":");
ct[s[1]]=r[s[0]]}
)}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(u){
nt.units[u]="px"}
);
J.registerPlugin(Dr);
var Rr=J.registerPlugin(Dr)||J;
Rr.core.Tween;
class jn{
elements;
isTransitioning=!1;
onTransitionComplete;
boundStartTransition;
boundHandlePetriKeydown;
constructor(t,e){
this.elements=t,this.onTransitionComplete=e,this.boundStartTransition=i=>{
i.preventDefault(),i.stopPropagation(),this.startTransition()}
,this.boundHandlePetriKeydown=i=>{
(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.startTransition())}
,this.setupEventListeners()}
setupEventListeners(){
const{
clickButton:t,petriDish:e}
=this.elements;
t.addEventListener("click",this.boundStartTransition),e.addEventListener("click",this.boundStartTransition),e.addEventListener("keydown",this.boundHandlePetriKeydown)}
destroy(){
const{
clickButton:t,petriDish:e}
=this.elements;
t.removeEventListener("click",this.boundStartTransition),e.removeEventListener("click",this.boundStartTransition),e.removeEventListener("keydown",this.boundHandlePetriKeydown)}
startTransition(){
if(this.isTransitioning)return;
this.isTransitioning=!0;
const{
heroView:t,gameContainer:e,petriDish:i,clickButton:r,heroTitle:n,heroSubtitle:s}
=this.elements;
i.style.animation="none";
const o=Rr.timeline({
onComplete:()=>{
this.onTransitionComplete?.()}
}
);
o.to(r,{
scale:.8,opacity:0,duration:.3,ease:"power2.in"}
).to([n,s],{
opacity:0,y:-30,duration:.4,ease:"power2.in",stagger:.1}
,"-=0.2");
const a=i.getBoundingClientRect(),f=a.left+a.width/2,h=a.top+a.height/2,_=window.innerWidth/2,c=window.innerHeight/2,d=_-f,p=c-h,l=Math.max(window.innerWidth/a.width,window.innerHeight/a.height)*1.5;
o.to(i,{
x:d,y:p,scale:l,duration:1.2,ease:"power3.inOut"}
,"-=0.2"),o.to(t,{
opacity:0,duration:.3,ease:"power2.in",onComplete:()=>{
t.classList.add("is-hidden"),e.classList.add("is-visible")}
}
,"-=0.4"),o.to(e,{
opacity:1,duration:.5,ease:"power2.out"}
,"-=0.2");
const m=e.querySelector(".hud");
m&&o.from(m.children,{
opacity:0,y:-20,duration:.4,stagger:.1,ease:"power2.out"}
,"-=0.2")}
isActive(){
return this.isTransitioning}
}
function zi(){
const u=document.getElementById("hero-view"),t=document.getElementById("game-container"),e=document.querySelector(".petri-dish-container"),i=document.getElementById("click-me-button"),r=document.querySelector(".hero-title"),n=document.querySelector(".hero-subtitle");
if(!u||!t||!e||!i||!r||!n){
console.error("Missing required elements for transition");
return}
const s=new jn({
heroView:u,gameContainer:t,petriDish:e,clickButton:i,heroTitle:r,heroSubtitle:n}
,()=>{
console.log("Transition complete - game should start"),window.dispatchEvent(new CustomEvent("biomedical-transition-complete"))}
);
return window.biomedicalTransition=s,s}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zi):zi();

