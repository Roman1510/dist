(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="148",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,go=1,Cu=2,jl=1,Pu=2,gr=3,hi=0,Je=1,Ha=2,Br=3,Nn=0,Gi=1,_o=2,xo=3,vo=4,Lu=5,zi=100,Du=101,Ru=102,Mo=103,yo=104,Iu=200,Fu=201,Ou=202,Nu=203,Zl=204,$l=205,zu=206,Uu=207,Bu=208,ku=209,Gu=210,Vu=0,Wu=1,Hu=2,Ma=3,Xu=4,qu=5,Yu=6,ju=7,Kl=0,Zu=1,$u=2,En=0,Ku=1,Ju=2,Qu=3,th=4,eh=5,Jl=300,qi=301,Yi=302,ya=303,Sa=304,ys=306,ba=1e3,rn=1001,wa=1002,ye=1003,So=1004,Ls=1005,je=1006,nh=1007,br=1008,fi=1009,ih=1010,rh=1011,Ql=1012,sh=1013,ii=1014,ri=1015,wr=1016,ah=1017,oh=1018,Vi=1020,lh=1021,ch=1022,sn=1023,uh=1024,hh=1025,ai=1026,ji=1027,fh=1028,dh=1029,ph=1030,mh=1031,gh=1033,Ds=33776,Rs=33777,Is=33778,Fs=33779,bo=35840,wo=35841,To=35842,Eo=35843,_h=36196,Ao=37492,Co=37496,Po=37808,Lo=37809,Do=37810,Ro=37811,Io=37812,Fo=37813,Oo=37814,No=37815,zo=37816,Uo=37817,Bo=37818,ko=37819,Go=37820,Vo=37821,Wo=36492,di=3e3,Gt=3001,xh=3200,vh=3201,tc=0,Mh=1,on="srgb",Tr="srgb-linear",Os=7680,yh=519,Ho=35044,Xo="300 es",Ta=1035;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,qo=180/Math.PI;function Rr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[o&255]+de[o>>8&255]+de[o>>16&255]+de[o>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function we(o,t,e){return Math.max(t,Math.min(e,o))}function Sh(o,t){return(o%t+t)%t}function zs(o,t,e){return(1-e)*o+e*t}function Yo(o){return(o&o-1)===0&&o!==0}function Ea(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function kr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Re(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],y=i[1],M=i[4],S=i[7],v=i[2],A=i[5],P=i[8];return r[0]=a*d+s*y+l*v,r[3]=a*p+s*M+l*A,r[6]=a*_+s*S+l*P,r[1]=c*d+u*y+f*v,r[4]=c*p+u*M+f*A,r[7]=c*_+u*S+f*P,r[2]=h*d+m*y+g*v,r[5]=h*p+m*M+g*A,r[8]=h*_+m*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],f=u*a-s*c,h=s*l-u*r,m=c*r-a*l,g=e*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=f*d,t[1]=(i*c-u*n)*d,t[2]=(s*n-i*a)*d,t[3]=h*d,t[4]=(u*e-i*l)*d,t[5]=(i*r-s*e)*d,t[6]=m*d,t[7]=(n*l-c*e)*d,t[8]=(a*e-n*r)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+t,-i*c,i*l,-i*(-c*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Us.makeScale(t,e)),this}rotate(t){return this.premultiply(Us.makeRotation(-t)),this}translate(t,e){return this.premultiply(Us.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Ue;function ec(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function fs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function os(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Bs={[on]:{[Tr]:oi},[Tr]:{[on]:os}},ve={legacyMode:!0,get workingColorSpace(){return Tr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(Bs[t]&&Bs[t][e]!==void 0){const n=Bs[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ne={r:0,g:0,b:0},tn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ks(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Vr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ve.workingColorSpace){if(t=Sh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ks(a,r,t+1/3),this.g=ks(a,r,t),this.b=ks(a,r,t-1/3)}return ve.toWorkingColorSpace(this,i),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ve.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ve.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ve.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ve.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=on){const n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ve.fromWorkingColorSpace(Vr(this,ne),t),we(ne.r*255,0,255)<<16^we(ne.g*255,0,255)<<8^we(ne.b*255,0,255)<<0}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(Vr(this,ne),e);const n=ne.r,i=ne.g,r=ne.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(Vr(this,ne),e),t.r=ne.r,t.g=ne.g,t.b=ne.b,t}getStyle(t=on){return ve.fromWorkingColorSpace(Vr(this,ne),t),t!==on?`color(${t} ${ne.r} ${ne.g} ${ne.b})`:`rgb(${ne.r*255|0},${ne.g*255|0},${ne.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(tn),tn.h+=t,tn.s+=e,tn.l+=n,this.setHSL(tn.h,tn.s,tn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(tn),t.getHSL(Gr);const n=zs(tn.h,Gr.h,e),i=zs(tn.s,Gr.s,e),r=zs(tn.l,Gr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}kt.NAMES=nc;let Si;class ic{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=fs("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class rc{constructor(t=null){this.isSource=!0,this.uuid=Rr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Gs(i[a].image)):r.push(Gs(i[a]))}else r=Gs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ic.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bh=0;class Be extends xi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=rn,i=rn,r=je,a=br,s=sn,l=fi,c=Be.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Rr(),this.name="",this.source=new rc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Jl;Be.DEFAULT_ANISOTROPY=1;class Wt{constructor(t=0,e=0,n=0,i=1){Wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(m+1)/2,v=(_+1)/2,A=(u+h)/4,P=(f+d)/4,x=(g+p)/4;return M>S&&M>v?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=P/n):S>v?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=P/r,i=x/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-d)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pi extends xi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sc extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wh extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(s===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(f!==d||l!==h||c!==m||u!==g){let p=1-s;const _=l*h+c*m+u*g+f*d,y=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const v=Math.sqrt(M),A=Math.atan2(v,_*y);p=Math.sin(p*A)/v,s=Math.sin(s*A)/v}const S=s*y;if(l=l*p+h*S,c=c*p+m*S,u=u*p+g*S,f=f*p+d*S,p===1-s){const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return t[e]=s*g+u*f+l*m-c*h,t[e+1]=l*g+u*h+c*f-s*m,t[e+2]=c*g+u*m+s*h-l*f,t[e+3]=u*g-s*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),f=s(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,l=t.w,c=l*e+a*i-s*n,u=l*n+s*e-r*i,f=l*i+r*n-a*e,h=-r*e-a*n-s*i;return this.x=c*l+h*-r+u*-s-f*-a,this.y=u*l+h*-a+f*-r-c*-s,this.z=f*l+h*-s+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,l=e.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new O,jo=new mi;class Ir{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],f=t[l+1],h=t[l+2];u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),f=t.getY(l),h=t.getZ(l);u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)jn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(jn)}else n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox),Ws.applyMatrix4(t.matrixWorld),this.union(Ws);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Wr.subVectors(this.max,or),bi.subVectors(t.a,or),wi.subVectors(t.b,or),Ti.subVectors(t.c,or),Pn.subVectors(wi,bi),Ln.subVectors(Ti,wi),Zn.subVectors(bi,Ti);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Zn.y,Zn.x,0];return!Hs(e,bi,wi,Ti,Wr)||(e=[1,0,0,0,1,0,0,0,1],!Hs(e,bi,wi,Ti,Wr))?!1:(Hr.crossVectors(Pn,Ln),e=[Hr.x,Hr.y,Hr.z],Hs(e,bi,wi,Ti,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return jn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new O,new O,new O,new O,new O,new O,new O,new O],jn=new O,Ws=new Ir,bi=new O,wi=new O,Ti=new O,Pn=new O,Ln=new O,Zn=new O,or=new O,Wr=new O,Hr=new O,$n=new O;function Hs(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){$n.fromArray(o,r);const s=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Th=new Ir,lr=new O,Xs=new O;class Xa{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Th.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(Xs)),this.expandByPoint(lr.copy(t.center).sub(Xs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new O,qs=new O,Xr=new O,Dn=new O,Ys=new O,qr=new O,js=new O;class Eh{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.direction).multiplyScalar(e).add(this.origin),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qs.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xr),s=Dn.dot(this.direction),l=-Dn.dot(Xr),c=Dn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-s,h=a*s-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+a*h+2*s)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+s)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+s)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Xr).multiplyScalar(h).add(qs),m}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(s=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(s=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,i,r){Ys.subVectors(e,t),qr.subVectors(n,t),js.crossVectors(Ys,qr);let a=this.direction.dot(js),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const l=s*this.direction.dot(qr.crossVectors(Dn,qr));if(l<0)return null;const c=s*this.direction.dot(Ys.cross(Dn));if(c<0||l+c>a)return null;const u=-s*Dn.dot(js);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,l,c,u,f,h,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,m=a*f,g=s*u,d=s*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=h-d*c,e[9]=-s*l,e[2]=d-h*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*f,g=c*u,d=c*f;e[0]=h+d*s,e[4]=g*s-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-s,e[2]=m*s-g,e[6]=d+h*s,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*f,g=c*u,d=c*f;e[0]=h-d*s,e[4]=-a*f,e[8]=g+m*s,e[1]=m+g*s,e[5]=a*u,e[9]=d-h*s,e[2]=-a*c,e[6]=s,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*f,g=s*u,d=s*f;e[0]=l*u,e[4]=g*c-m,e[8]=h*c+d,e[1]=l*f,e[5]=d*c+h,e[9]=m*c-g,e[2]=-c,e[6]=s*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,g=s*l,d=s*c;e[0]=l*u,e[4]=d-h*f,e[8]=g*f+m,e[1]=f,e[5]=a*u,e[9]=-s*u,e[2]=-c*u,e[6]=m*f+g,e[10]=h-d*f}else if(t.order==="XZY"){const h=a*l,m=a*c,g=s*l,d=s*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+d,e[5]=a*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=s*u,e[10]=d*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ah,t,Ch)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Rn.crossVectors(n,Ie),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Rn.crossVectors(n,Ie)),Rn.normalize(),Yr.crossVectors(Ie,Rn),i[0]=Rn.x,i[4]=Yr.x,i[8]=Ie.x,i[1]=Rn.y,i[5]=Yr.y,i[9]=Ie.y,i[2]=Rn.z,i[6]=Yr.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],y=n[3],M=n[7],S=n[11],v=n[15],A=i[0],P=i[4],x=i[8],w=i[12],L=i[1],U=i[5],$=i[9],I=i[13],R=i[2],B=i[6],Z=i[10],j=i[14],G=i[3],tt=i[7],K=i[11],k=i[15];return r[0]=a*A+s*L+l*R+c*G,r[4]=a*P+s*U+l*B+c*tt,r[8]=a*x+s*$+l*Z+c*K,r[12]=a*w+s*I+l*j+c*k,r[1]=u*A+f*L+h*R+m*G,r[5]=u*P+f*U+h*B+m*tt,r[9]=u*x+f*$+h*Z+m*K,r[13]=u*w+f*I+h*j+m*k,r[2]=g*A+d*L+p*R+_*G,r[6]=g*P+d*U+p*B+_*tt,r[10]=g*x+d*$+p*Z+_*K,r[14]=g*w+d*I+p*j+_*k,r[3]=y*A+M*L+S*R+v*G,r[7]=y*P+M*U+S*B+v*tt,r[11]=y*x+M*$+S*Z+v*K,r[15]=y*w+M*I+S*j+v*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+r*l*f-i*c*f-r*s*h+n*c*h+i*s*m-n*l*m)+d*(+e*l*m-e*c*h+r*a*h-i*a*m+i*c*u-r*l*u)+p*(+e*c*f-e*s*m-r*a*f+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-e*l*f+e*s*h+i*a*f-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],y=f*p*c-d*h*c+d*l*m-s*p*m-f*l*_+s*h*_,M=g*h*c-u*p*c-g*l*m+a*p*m+u*l*_-a*h*_,S=u*d*c-g*f*c+g*s*m-a*d*m-u*s*_+a*f*_,v=g*f*l-u*d*l-g*s*h+a*d*h+u*s*p-a*f*p,A=e*y+n*M+i*S+r*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=y*P,t[1]=(d*h*r-f*p*r-d*i*m+n*p*m+f*i*_-n*h*_)*P,t[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*P,t[3]=(f*l*r-s*h*r-f*i*c+n*h*c+s*i*m-n*l*m)*P,t[4]=M*P,t[5]=(u*p*r-g*h*r+g*i*m-e*p*m-u*i*_+e*h*_)*P,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*_-e*l*_)*P,t[7]=(a*h*r-u*l*r+u*i*c-e*h*c-a*i*m+e*l*m)*P,t[8]=S*P,t[9]=(g*f*r-u*d*r-g*n*m+e*d*m+u*n*_-e*f*_)*P,t[10]=(a*d*r-g*s*r+g*n*c-e*d*c-a*n*_+e*s*_)*P,t[11]=(u*s*r-a*f*r-u*n*c+e*f*c+a*n*m-e*s*m)*P,t[12]=v*P,t[13]=(u*d*i-g*f*i+g*n*h-e*d*h-u*n*p+e*f*p)*P,t[14]=(g*s*i-a*d*i-g*n*l+e*d*l+a*n*p-e*s*p)*P,t[15]=(a*f*i-u*s*i+u*n*l-e*f*l-a*n*h+e*s*h)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,l=t.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,l=e._w,c=r+r,u=a+a,f=s+s,h=r*c,m=r*u,g=r*f,d=a*u,p=a*f,_=s*f,y=l*c,M=l*u,S=l*f,v=n.x,A=n.y,P=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+S)*v,i[2]=(g-M)*v,i[3]=0,i[4]=(m-S)*A,i[5]=(1-(h+_))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+M)*P,i[9]=(p-y)*P,i[10]=(1-(h+d))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),s=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);const c=1/r,u=1/a,f=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,e.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),f=(e+t)*l,h=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new O,en=new Qt,Ah=new O(0,0,0),Ch=new O(1,1,1),Rn=new O,Yr=new O,Ie=new O,Zo=new Qt,$o=new mi;class Fr{constructor(t=0,e=0,n=0,i=Fr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(we(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Fr.DefaultOrder="XYZ";Fr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ac{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ph=0;const Ko=new O,Ai=new mi,xn=new Qt,jr=new O,cr=new O,Lh=new O,Dh=new mi,Jo=new O(1,0,0),Qo=new O(0,1,0),tl=new O(0,0,1),Rh={type:"added"},el={type:"removed"};class Ee extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DefaultUp.clone();const t=new O,e=new Fr,n=new mi,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ue}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Ee.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ee.DefaultMatrixWorldAutoUpdate,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Jo,t)}rotateY(t){return this.rotateOnAxis(Qo,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Ko.copy(t).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jo,t)}translateY(t){return this.translateOnAxis(Qo,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(cr,jr,this.up):xn.lookAt(jr,cr,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(xn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Rh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(el)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(el)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(t.materials,this.material[l]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(t.animations,l))}}if(e){const s=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),m=a(t.animations),g=a(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DefaultUp=new O(0,1,0);Ee.DefaultMatrixAutoUpdate=!0;Ee.DefaultMatrixWorldAutoUpdate=!0;const nn=new O,vn=new O,Zs=new O,Mn=new O,Ci=new O,Pi=new O,nl=new O,$s=new O,Ks=new O,Js=new O;class bn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){nn.subVectors(i,e),vn.subVectors(n,e),Zs.subVectors(t,e);const a=nn.dot(nn),s=nn.dot(vn),l=nn.dot(Zs),c=vn.dot(vn),u=vn.dot(Zs),f=a*c-s*s;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(c*l-s*u)*h,g=(a*u-s*l)*h;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,r,a,s,l){return this.getBarycoord(t,e,n,i,Mn),l.set(0,0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(s,Mn.z),l}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),vn.subVectors(t,e),nn.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return bn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Ci.subVectors(i,n),Pi.subVectors(r,n),$s.subVectors(t,n);const l=Ci.dot($s),c=Pi.dot($s);if(l<=0&&c<=0)return e.copy(n);Ks.subVectors(t,i);const u=Ci.dot(Ks),f=Pi.dot(Ks);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ci,a);Js.subVectors(t,r);const m=Ci.dot(Js),g=Pi.dot(Js);if(g>=0&&m<=g)return e.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),e.copy(n).addScaledVector(Pi,s);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return nl.subVectors(r,i),s=(f-u)/(f-u+(m-g)),e.copy(i).addScaledVector(nl,s);const _=1/(p+d+h);return a=d*_,s=h*_,e.copy(n).addScaledVector(Ci,a).addScaledVector(Pi,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ih=0;class Or extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=Gi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zl,this.blendDst=$l,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oc extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new O,Zr=new St;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ho,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ho&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lc extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cc extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class hn extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fh=0;const Xe=new Qt,Qs=new Ee,Li=new O,Fe=new Ir,ur=new Ir,ce=new O;class Vn extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?cc:lc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];ur.setFromBufferAttribute(s),this.morphTargetsRelative?(ce.addVectors(Fe.min,ur.min),Fe.expandByPoint(ce),ce.addVectors(Fe.max,ur.max),Fe.expandByPoint(ce)):(Fe.expandByPoint(ur.min),Fe.expandByPoint(ur.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ce));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ce.fromBufferAttribute(s,c),l&&(Li.fromBufferAttribute(t,c),ce.add(Li)),i=Math.max(i,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new O,u[L]=new O;const f=new O,h=new O,m=new O,g=new St,d=new St,p=new St,_=new O,y=new O;function M(L,U,$){f.fromArray(i,L*3),h.fromArray(i,U*3),m.fromArray(i,$*3),g.fromArray(a,L*2),d.fromArray(a,U*2),p.fromArray(a,$*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(I),y.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),c[L].add(_),c[U].add(_),c[$].add(_),u[L].add(y),u[U].add(y),u[$].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let L=0,U=S.length;L<U;++L){const $=S[L],I=$.start,R=$.count;for(let B=I,Z=I+R;B<Z;B+=3)M(n[B+0],n[B+1],n[B+2])}const v=new O,A=new O,P=new O,x=new O;function w(L){P.fromArray(r,L*3),x.copy(P);const U=c[L];v.copy(U),v.sub(P.multiplyScalar(P.dot(U))).normalize(),A.crossVectors(x,U);const I=A.dot(u[L])<0?-1:1;l[L*4]=v.x,l[L*4+1]=v.y,l[L*4+2]=v.z,l[L*4+3]=I}for(let L=0,U=S.length;L<U;++L){const $=S[L],I=$.start,R=$.count;for(let B=I,Z=I+R;B<Z;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new O,r=new O,a=new O,s=new O,l=new O,c=new O,u=new O,f=new O;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),d=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new un(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Vn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=t(l,n);e.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[s]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new Qt,Di=new Eh,ta=new Xa,hr=new O,fr=new O,dr=new O,ea=new O,$r=new O,Kr=new St,Jr=new St,Qr=new St,na=new O,ts=new O;class wn extends Ee{constructor(t=new Vn,e=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const s=this.morphTargetInfluences;if(r&&s){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],f=r[l];u!==0&&(ea.fromBufferAttribute(f,t),a?$r.addScaledVector(ea,u):$r.addScaledVector(ea.sub(e),u))}e.add($r)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),t.ray.intersectsSphere(ta)===!1)||(il.copy(r).invert(),Di.copy(t.ray).applyMatrix4(il),n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),y=Math.min(s.count,Math.min(d.start+d.count,h.start+h.count));for(let M=_,S=y;M<S;M+=3){const v=s.getX(M),A=s.getX(M+1),P=s.getX(M+2);a=es(this,p,t,Di,c,u,v,A,P),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=d.materialIndex,e.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=s.getX(d),y=s.getX(d+1),M=s.getX(d+2);a=es(this,i,t,Di,c,u,_,y,M),a&&(a.faceIndex=Math.floor(d/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),y=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let M=_,S=y;M<S;M+=3){const v=M,A=M+1,P=M+2;a=es(this,p,t,Di,c,u,v,A,P),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=d.materialIndex,e.push(a))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=d,y=d+1,M=d+2;a=es(this,i,t,Di,c,u,_,y,M),a&&(a.faceIndex=Math.floor(d/3),e.push(a))}}}}function Oh(o,t,e,n,i,r,a,s){let l;if(t.side===Je?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,t.side===hi,s),l===null)return null;ts.copy(s),ts.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(ts);return c<e.near||c>e.far?null:{distance:c,point:ts.clone(),object:o}}function es(o,t,e,n,i,r,a,s,l){o.getVertexPosition(a,hr),o.getVertexPosition(s,fr),o.getVertexPosition(l,dr);const c=Oh(o,t,e,n,hr,fr,dr,na);if(c){i&&(Kr.fromBufferAttribute(i,a),Jr.fromBufferAttribute(i,s),Qr.fromBufferAttribute(i,l),c.uv=bn.getUV(na,hr,fr,dr,Kr,Jr,Qr,new St)),r&&(Kr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,s),Qr.fromBufferAttribute(r,l),c.uv2=bn.getUV(na,hr,fr,dr,Kr,Jr,Qr,new St));const u={a,b:s,c:l,normal:new O,materialIndex:0};bn.getNormal(hr,fr,dr,u.normal),c.face=u}return c}class Nr extends Vn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(f,2));function g(d,p,_,y,M,S,v,A,P,x,w){const L=S/P,U=v/x,$=S/2,I=v/2,R=A/2,B=P+1,Z=x+1;let j=0,G=0;const tt=new O;for(let K=0;K<Z;K++){const k=K*U-I;for(let V=0;V<B;V++){const Q=V*L-$;tt[d]=Q*y,tt[p]=k*M,tt[_]=R,c.push(tt.x,tt.y,tt.z),tt[d]=0,tt[p]=0,tt[_]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),f.push(V/P),f.push(1-K/x),j+=1}}for(let K=0;K<x;K++)for(let k=0;k<P;k++){const V=h+k+B*K,Q=h+k+B*(K+1),J=h+(k+1)+B*(K+1),rt=h+(k+1)+B*K;l.push(V,Q,rt),l.push(Q,J,rt),G+=6}s.addGroup(m,G,w),m+=G,h+=j}}static fromJSON(t){return new Nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Me(o){const t={};for(let e=0;e<o.length;e++){const n=Zi(o[e]);for(const i in n)t[i]=n[i]}return t}function Nh(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function uc(o){return o.getRenderTarget()===null&&o.outputEncoding===Gt?on:Tr}const zh={clone:Zi,merge:Me};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Nh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ne extends hc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ii=1;class kh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ne(Ri,Ii,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ne(Ri,Ii,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ne(Ri,Ii,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Ne(Ri,Ii,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Ne(Ri,Ii,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ne(Ri,Ii,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=En,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class fc extends Be{constructor(t,e,n,i,r,a,s,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gh extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nr(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Nn});r.uniforms.tEquirect.value=e;const a=new wn(i,r),s=e.minFilter;return e.minFilter===br&&(e.minFilter=je),new kh(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const ia=new O,Vh=new O,Wh=new Ue;class Qn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ia.subVectors(n,e).cross(Vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wh.getNormalMatrix(t),i=this.coplanarPoint(ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Xa,ns=new O;class qa{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,a=new Qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],y=n[14],M=n[15];return e[0].setComponents(s-i,f-l,d-h,M-p).normalize(),e[1].setComponents(s+i,f+l,d+h,M+p).normalize(),e[2].setComponents(s+r,f+c,d+m,M+_).normalize(),e[3].setComponents(s-r,f-c,d-m,M-_).normalize(),e[4].setComponents(s-a,f-u,d-g,M-y).normalize(),e[5].setComponents(s+a,f+u,d+g,M+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ns.x=i.normal.x>0?t.max.x:t.min.x,ns.y=i.normal.y>0?t.max.y:t.min.y,ns.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function Hh(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,m=u.updateRange;o.bindBuffer(f,c),m.count===-1?o.bufferSubData(f,0,h):(e?o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:s,update:l}}class Ya extends Vn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,f=t/s,h=e/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const y=_*h-a;for(let M=0;M<c;M++){const S=M*f-r;g.push(S,-y,0),d.push(0,0,1),p.push(M/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<s;y++){const M=y+c*_,S=y+c*(_+1),v=y+1+c*(_+1),A=y+1+c*_;m.push(M,S,A),m.push(S,v,A)}this.setIndex(m),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(p,2))}static fromJSON(t){return new Ya(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh="vec3 transformed = vec3( position );",Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,df=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Of=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,id=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ad=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Td=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Nd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ud=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$d=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bt={alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:Yh,alphatest_pars_fragment:jh,aomap_fragment:Zh,aomap_pars_fragment:$h,begin_vertex:Kh,beginnormal_vertex:Jh,bsdfs:Qh,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:af,color_fragment:of,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:hf,cube_uv_reflection_fragment:ff,defaultnormal_vertex:df,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,encodings_fragment:xf,encodings_pars_fragment:vf,envmap_fragment:Mf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Sf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Of,envmap_vertex:wf,fog_vertex:Tf,fog_pars_vertex:Ef,fog_fragment:Af,fog_pars_fragment:Cf,gradientmap_pars_fragment:Pf,lightmap_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:If,lights_pars_begin:Ff,lights_toon_fragment:Nf,lights_toon_pars_fragment:zf,lights_phong_fragment:Uf,lights_phong_pars_fragment:Bf,lights_physical_fragment:kf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Vf,lights_fragment_maps:Wf,lights_fragment_end:Hf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:jf,map_fragment:Zf,map_pars_fragment:$f,map_particle_fragment:Kf,map_particle_pars_fragment:Jf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:td,morphcolor_vertex:ed,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:rd,normal_fragment_begin:sd,normal_fragment_maps:ad,normal_pars_fragment:od,normal_pars_vertex:ld,normal_vertex:cd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:hd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:dd,iridescence_pars_fragment:pd,output_fragment:md,packing:gd,premultiplied_alpha_fragment:_d,project_vertex:xd,dithering_fragment:vd,dithering_pars_fragment:Md,roughnessmap_fragment:yd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:wd,shadowmap_vertex:Td,shadowmask_pars_fragment:Ed,skinbase_vertex:Ad,skinning_pars_vertex:Cd,skinning_vertex:Pd,skinnormal_vertex:Ld,specularmap_fragment:Dd,specularmap_pars_fragment:Rd,tonemapping_fragment:Id,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:Nd,uv_pars_fragment:zd,uv_pars_vertex:Ud,uv_vertex:Bd,uv2_pars_fragment:kd,uv2_pars_vertex:Gd,uv2_vertex:Vd,worldpos_vertex:Wd,background_vert:Hd,background_frag:Xd,backgroundCube_vert:qd,backgroundCube_frag:Yd,cube_vert:jd,cube_frag:Zd,depth_vert:$d,depth_frag:Kd,distanceRGBA_vert:Jd,distanceRGBA_frag:Qd,equirect_vert:tp,equirect_frag:ep,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:rp,meshbasic_frag:sp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:up,meshnormal_frag:hp,meshphong_vert:fp,meshphong_frag:dp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:xp,points_frag:vp,shadow_vert:Mp,shadow_frag:yp,sprite_vert:Sp,sprite_frag:bp},st={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ue},uv2Transform:{value:new Ue},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ue}}},ln={basic:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Me([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Me([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Me([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Me([st.points,st.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Me([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Me([st.common,st.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Me([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Me([st.sprite,st.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:Me([st.common,st.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:Me([st.lights,st.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};ln.physical={uniforms:Me([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new St(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const is={r:0,b:0,g:0};function wp(o,t,e,n,i,r,a){const s=new kt(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function g(p,_){let y=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M));const S=o.xr,v=S.getSession&&S.getSession();v&&v.environmentBlendMode==="additive"&&(M=null),M===null?d(s,l):M&&M.isColor&&(d(M,1),y=!0),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ys)?(u===void 0&&(u=new wn(new Nr(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Zi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=M.encoding!==Gt,(f!==M||h!==M.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wn(new Ya(2,2),new gi({name:"BackgroundMaterial",uniforms:Zi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=M.encoding!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(is,uc(o)),n.buffers.color.setClear(is.r,is.g,is.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:g}}function Tp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function f(R,B,Z,j,G){let tt=!1;if(a){const K=d(j,Z,B);c!==K&&(c=K,m(c.object)),tt=_(R,j,Z,G),tt&&y(R,j,Z,G)}else{const K=B.wireframe===!0;(c.geometry!==j.id||c.program!==Z.id||c.wireframe!==K)&&(c.geometry=j.id,c.program=Z.id,c.wireframe=K,tt=!0)}G!==null&&e.update(G,34963),(tt||u)&&(u=!1,x(R,B,Z,j),G!==null&&o.bindBuffer(34963,e.get(G).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,B,Z){const j=Z.wireframe===!0;let G=s[R.id];G===void 0&&(G={},s[R.id]=G);let tt=G[B.id];tt===void 0&&(tt={},G[B.id]=tt);let K=tt[j];return K===void 0&&(K=p(h()),tt[j]=K),K}function p(R){const B=[],Z=[],j=[];for(let G=0;G<i;G++)B[G]=0,Z[G]=0,j[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:j,object:R,attributes:{},index:null}}function _(R,B,Z,j){const G=c.attributes,tt=B.attributes;let K=0;const k=Z.getAttributes();for(const V in k)if(k[V].location>=0){const J=G[V];let rt=tt[V];if(rt===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;K++}return c.attributesNum!==K||c.index!==j}function y(R,B,Z,j){const G={},tt=B.attributes;let K=0;const k=Z.getAttributes();for(const V in k)if(k[V].location>=0){let J=tt[V];J===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(J=R.instanceColor));const rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),G[V]=rt,K++}c.attributes=G,c.attributesNum=K,c.index=j}function M(){const R=c.newAttributes;for(let B=0,Z=R.length;B<Z;B++)R[B]=0}function S(R){v(R,0)}function v(R,B){const Z=c.newAttributes,j=c.enabledAttributes,G=c.attributeDivisors;Z[R]=1,j[R]===0&&(o.enableVertexAttribArray(R),j[R]=1),G[R]!==B&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),G[R]=B)}function A(){const R=c.newAttributes,B=c.enabledAttributes;for(let Z=0,j=B.length;Z<j;Z++)B[Z]!==R[Z]&&(o.disableVertexAttribArray(Z),B[Z]=0)}function P(R,B,Z,j,G,tt){n.isWebGL2===!0&&(Z===5124||Z===5125)?o.vertexAttribIPointer(R,B,Z,G,tt):o.vertexAttribPointer(R,B,Z,j,G,tt)}function x(R,B,Z,j){if(n.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const G=j.attributes,tt=Z.getAttributes(),K=B.defaultAttributeValues;for(const k in tt){const V=tt[k];if(V.location>=0){let Q=G[k];if(Q===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const J=Q.normalized,rt=Q.itemSize,q=e.get(Q);if(q===void 0)continue;const Et=q.buffer,ft=q.type,_t=q.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ht=Q.data,Ft=ht.stride,yt=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let xt=0;xt<V.locationSize;xt++)v(V.location+xt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let xt=0;xt<V.locationSize;xt++)S(V.location+xt);o.bindBuffer(34962,Et);for(let xt=0;xt<V.locationSize;xt++)P(V.location+xt,rt/V.locationSize,ft,J,Ft*_t,(yt+rt/V.locationSize*xt)*_t)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)v(V.location+ht,Q.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<V.locationSize;ht++)S(V.location+ht);o.bindBuffer(34962,Et);for(let ht=0;ht<V.locationSize;ht++)P(V.location+ht,rt/V.locationSize,ft,J,rt*_t,rt/V.locationSize*ht*_t)}}else if(K!==void 0){const J=K[k];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(V.location,J);break;case 3:o.vertexAttrib3fv(V.location,J);break;case 4:o.vertexAttrib4fv(V.location,J);break;default:o.vertexAttrib1fv(V.location,J)}}}}A()}function w(){$();for(const R in s){const B=s[R];for(const Z in B){const j=B[Z];for(const G in j)g(j[G].object),delete j[G];delete B[Z]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const Z in B){const j=B[Z];for(const G in j)g(j[G].object),delete j[G];delete B[Z]}delete s[R.id]}function U(R){for(const B in s){const Z=s[B];if(Z[R.id]===void 0)continue;const j=Z[R.id];for(const G in j)g(j[G].object),delete j[G];delete Z[R.id]}}function $(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:S,disableUnusedAttributes:A}}function Ep(o,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,f),e.update(u,r,f)}this.setMode=a,this.render=s,this.renderInstances=l}function Ap(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),y=o.getParameter(36349),M=h>0,S=a||t.has("OES_texture_float"),v=M&&S,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:A}}function Cp(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Qn,s=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||i;return i=h,e=u(f,m,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=o.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,M=y*4;let S=_.clippingState||null;l.value=S,S=u(g,h,M,m);for(let v=0;v!==M;++v)S[v]=e[v];_.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,y=h.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let M=0,S=m;M!==d;++M,S+=4)a.copy(f[M]).applyMatrix4(y,s),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Pp(o){let t=new WeakMap;function e(a,s){return s===ya?a.mapping=qi:s===Sa&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===ya||s===Sa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gh(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lp extends hc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=4,rl=[.125,.215,.35,.446,.526,.582],ni=20,ra=new Lp,sl=new kt;let sa=null;const ti=(1+Math.sqrt(5))/2,Oi=1/ti,al=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ti,Oi),new O(0,ti,-Oi),new O(Oi,0,ti),new O(-Oi,0,ti),new O(ti,Oi,0),new O(-ti,Oi,0)];class ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa),t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:wr,format:sn,encoding:di,depthBuffer:!1},i=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dp(r)),this._blurMaterial=Rp(r,t,e)}return i}_compileMaterial(t){const e=new wn(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,i){const s=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(sl),u.toneMapping=En,u.autoClear=!1;const m=new oc({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new wn(new Nr,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(sl),d=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):y===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const M=this._cubeSize;rs(i,y*M,_>2?M:0,M,M),u.setRenderTarget(i),d&&u.render(g,s),u.render(t,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qi||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new wn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const l=this._cubeSize;rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=al[(i-1)%al.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const _=[];let y=0;for(let P=0;P<ni;++P){const x=P/d,w=Math.exp(-x*x/2);_.push(w),P===0?y+=w:P<p&&(y+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const S=this._sizeLods[i],v=3*S*(i>M-Ui?i-M+Ui:0),A=4*(this._cubeSize-S);rs(e,v,A,3*S,2*S),l.setRenderTarget(e),l.render(f,ra)}}function Dp(o){const t=[],e=[],n=[];let i=o;const r=o-Ui+1+rl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let l=1/s;a>o-Ui?l=rl[a-o+Ui-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,y=new Float32Array(d*g*m),M=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,x=A>2?0:-1,w=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];y.set(w,d*g*A),M.set(h,p*g*A);const L=[A,A,A,A,A,A];S.set(L,_*g*A)}const v=new Vn;v.setAttribute("position",new un(y,d)),v.setAttribute("uv",new un(M,p)),v.setAttribute("faceIndex",new un(S,_)),t.push(v),i>Ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(o,t,e){const n=new pi(o,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Rp(o,t,e){const n=new Float32Array(ni),i=new O(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function cl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ul(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ip(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ya||l===Sa,u=l===qi||l===Yi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=t.get(s);return e===null&&(e=new ol(o)),f=c?e.fromEquirectangular(s,f):e.fromCubemap(s,f),t.set(s,f),f.texture}else{if(t.has(s))return t.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new ol(o));const h=c?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Op(o,t,e,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(t.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const y=m.array;d=m.version;for(let M=0,S=y.length;M<S;M+=3){const v=y[M+0],A=y[M+1],P=y[M+2];h.push(v,A,A,P,P,v)}}else{const y=g.array;d=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const v=M+0,A=M+1,P=M+2;h.push(v,A,A,P,P,v)}}const p=new(ec(h)?cc:lc)(h,1);p.version=d;const _=r.get(f);_&&t.remove(_),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Np(o,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,m){o.drawElements(r,m,s,h*l),e.update(m,r,1)}function f(h,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,h*l,g),e.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function zp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Up(o,t){return o[0]-t[0]}function Bp(o,t){return Math.abs(t[1])-Math.abs(o[1])}function kp(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new Wt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let Z=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",Z)};var g=Z;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),v===!0&&(L=2),A===!0&&(L=3);let U=u.attributes.position.count*L,$=1;U>t.maxTextureSize&&($=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const I=new Float32Array(U*$*4*p),R=new sc(I,U,$,p);R.type=ri,R.needsUpdate=!0;const B=L*4;for(let j=0;j<p;j++){const G=P[j],tt=x[j],K=w[j],k=U*$*4*j;for(let V=0;V<G.count;V++){const Q=V*B;S===!0&&(a.fromBufferAttribute(G,V),I[k+Q+0]=a.x,I[k+Q+1]=a.y,I[k+Q+2]=a.z,I[k+Q+3]=0),v===!0&&(a.fromBufferAttribute(tt,V),I[k+Q+4]=a.x,I[k+Q+5]=a.y,I[k+Q+6]=a.z,I[k+Q+7]=0),A===!0&&(a.fromBufferAttribute(K,V),I[k+Q+8]=a.x,I[k+Q+9]=a.y,I[k+Q+10]=a.z,I[k+Q+11]=K.itemSize===4?a.w:1)}}_={count:p,texture:R,size:new St(U,$)},r.set(u,_),u.addEventListener("dispose",Z)}let y=0;for(let S=0;S<m.length;S++)y+=m[S];const M=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(o,"morphTargetBaseInfluence",M),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const A=p[v];A[0]=v,A[1]=m[v]}p.sort(Bp);for(let v=0;v<8;v++)v<d&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Up);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let M=0;for(let v=0;v<8;v++){const A=s[v],P=A[0],x=A[1];P!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[P]&&u.setAttribute("morphTarget"+v,_[P]),y&&u.getAttribute("morphNormal"+v)!==y[P]&&u.setAttribute("morphNormal"+v,y[P]),i[v]=x,M+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",S),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Gp(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);return i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const pc=new Be,mc=new sc,gc=new wh,_c=new fc,hl=[],fl=[],dl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function rr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=hl[i];if(r===void 0&&(r=new Float32Array(i),hl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function re(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function se(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ss(o,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Vp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Wp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;o.uniform2fv(this.addr,t),se(e,t)}}function Hp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;o.uniform3fv(this.addr,t),se(e,t)}}function Xp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;o.uniform4fv(this.addr,t),se(e,t)}}function qp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;ml.set(n),o.uniformMatrix2fv(this.addr,!1,ml),se(e,n)}}function Yp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;pl.set(n),o.uniformMatrix3fv(this.addr,!1,pl),se(e,n)}}function jp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;dl.set(n),o.uniformMatrix4fv(this.addr,!1,dl),se(e,n)}}function Zp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function $p(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;o.uniform2iv(this.addr,t),se(e,t)}}function Kp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;o.uniform3iv(this.addr,t),se(e,t)}}function Jp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;o.uniform4iv(this.addr,t),se(e,t)}}function Qp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function tm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;o.uniform2uiv(this.addr,t),se(e,t)}}function em(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;o.uniform3uiv(this.addr,t),se(e,t)}}function nm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;o.uniform4uiv(this.addr,t),se(e,t)}}function im(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||pc,i)}function rm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gc,i)}function sm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_c,i)}function am(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mc,i)}function om(o){switch(o){case 5126:return Vp;case 35664:return Wp;case 35665:return Hp;case 35666:return Xp;case 35674:return qp;case 35675:return Yp;case 35676:return jp;case 5124:case 35670:return Zp;case 35667:case 35671:return $p;case 35668:case 35672:return Kp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return am}}function lm(o,t){o.uniform1fv(this.addr,t)}function cm(o,t){const e=rr(t,this.size,2);o.uniform2fv(this.addr,e)}function um(o,t){const e=rr(t,this.size,3);o.uniform3fv(this.addr,e)}function hm(o,t){const e=rr(t,this.size,4);o.uniform4fv(this.addr,e)}function fm(o,t){const e=rr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function dm(o,t){const e=rr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function pm(o,t){const e=rr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function mm(o,t){o.uniform1iv(this.addr,t)}function gm(o,t){o.uniform2iv(this.addr,t)}function _m(o,t){o.uniform3iv(this.addr,t)}function xm(o,t){o.uniform4iv(this.addr,t)}function vm(o,t){o.uniform1uiv(this.addr,t)}function Mm(o,t){o.uniform2uiv(this.addr,t)}function ym(o,t){o.uniform3uiv(this.addr,t)}function Sm(o,t){o.uniform4uiv(this.addr,t)}function bm(o,t,e){const n=this.cache,i=t.length,r=Ss(e,i);re(n,r)||(o.uniform1iv(this.addr,r),se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||pc,r[a])}function wm(o,t,e){const n=this.cache,i=t.length,r=Ss(e,i);re(n,r)||(o.uniform1iv(this.addr,r),se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||gc,r[a])}function Tm(o,t,e){const n=this.cache,i=t.length,r=Ss(e,i);re(n,r)||(o.uniform1iv(this.addr,r),se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_c,r[a])}function Em(o,t,e){const n=this.cache,i=t.length,r=Ss(e,i);re(n,r)||(o.uniform1iv(this.addr,r),se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||mc,r[a])}function Am(o){switch(o){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return hm;case 35674:return fm;case 35675:return dm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return xm;case 5125:return vm;case 36294:return Mm;case 36295:return ym;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Em}}class Cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=om(e.type)}}class Pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Am(e.type)}}class Lm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function gl(o,t){o.seq.push(t),o.map[t.id]=t}function Dm(o,t,e){const n=o.name,i=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){gl(e,c===void 0?new Cm(s,o,t):new Pm(s,o,t));break}else{let f=e.map[s];f===void 0&&(f=new Lm(s),gl(e,f)),e=f}}}class ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Dm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _l(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Rm=0;function Im(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function Fm(o){switch(o){case di:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function xl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Im(o.getShaderSource(t),a)}else return i}function Om(o,t){const e=Fm(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Nm(o,t){let e;switch(t){case Ku:e="Linear";break;case Ju:e="Reinhard";break;case Qu:e="OptimizedCineon";break;case th:e="ACESFilmic";break;case eh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function zm(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Um(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bm(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function _r(o){return o!==""}function vl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(o){return o.replace(km,Gm)}function Gm(o,t){const e=bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Aa(e)}const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(o){return o.replace(Vm,Wm)}function Wm(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===gr&&(t="SHADOWMAP_TYPE_VSM"),t}function Xm(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qm(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ym(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function jm(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zm(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const l=Hm(e),c=Xm(e),u=qm(e),f=Ym(e),h=jm(e),m=e.isWebGL2?"":zm(e),g=Um(r),d=i.createProgram();let p,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(_r).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(_r).join(`
`),_.length>0&&(_+=`
`)):(p=[Sl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),_=[m,Sl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?bt.tonemapping_pars_fragment:"",e.toneMapping!==En?Nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",bt.encodings_pars_fragment,Om("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=Aa(a),a=vl(a,e),a=Ml(a,e),s=Aa(s),s=vl(s,e),s=Ml(s,e),a=yl(a),s=yl(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=y+p+a,S=y+_+s,v=_l(i,35633,M),A=_l(i,35632,S);if(i.attachShader(d,v),i.attachShader(d,A),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(v).trim(),U=i.getShaderInfoLog(A).trim();let $=!0,I=!0;if(i.getProgramParameter(d,35714)===!1){$=!1;const R=xl(i,v,"vertex"),B=xl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+R+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||U==="")&&(I=!1);I&&(this.diagnostics={runnable:$,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:_}})}i.deleteShader(v),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new ls(i,d)),P};let x;return this.getAttributes=function(){return x===void 0&&(x=Bm(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=A,this}let $m=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jm(t),e.set(t,n)),n}}class Jm{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}}function Qm(o,t,e,n,i,r,a){const s=new ac,l=new Km,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,L,U,$){const I=U.fog,R=$.geometry,B=x.isMeshStandardMaterial?U.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),j=Z&&Z.mapping===ys?Z.image.height:null,G=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const tt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=tt!==void 0?tt.length:0;let k=0;R.morphAttributes.position!==void 0&&(k=1),R.morphAttributes.normal!==void 0&&(k=2),R.morphAttributes.color!==void 0&&(k=3);let V,Q,J,rt;if(G){const Ft=ln[G];V=Ft.vertexShader,Q=Ft.fragmentShader}else V=x.vertexShader,Q=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),rt=l.getFragmentShaderID(x);const q=o.getRenderTarget(),Et=x.alphaTest>0,ft=x.clearcoat>0,_t=x.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:x.type,vertexShader:V,fragmentShader:Q,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:h,outputEncoding:q===null?o.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:di,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:j,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Mh,tangentSpaceNormalMap:x.normalMapType===tc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Gt,clearcoat:ft,clearcoatMap:ft&&!!x.clearcoatMap,clearcoatRoughnessMap:ft&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!x.clearcoatNormalMap,iridescence:_t,iridescenceMap:_t&&!!x.iridescenceMap,iridescenceThicknessMap:_t&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Gi,alphaMap:!!x.alphaMap,alphaTest:Et,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:En,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ha,flipSided:x.side===Je,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(w,x),y(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function M(x){const w=g[x.type];let L;if(w){const U=ln[w];L=zh.clone(U.uniforms)}else L=x.uniforms;return L}function S(x,w){let L;for(let U=0,$=c.length;U<$;U++){const I=c[U];if(I.cacheKey===w){L=I,++L.usedTimes;break}}return L===void 0&&(L=new Zm(o,w,x,r),c.push(L)),L}function v(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:P}}function tg(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function eg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function bl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function wl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,h,m,g,d,p){let _=o[t];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},o[t]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),t++,_}function s(f,h,m,g,d,p){const _=a(f,h,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(f,h,m,g,d,p){const _=a(f,h,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(f,h){e.length>1&&e.sort(f||eg),n.length>1&&n.sort(h||bl),i.length>1&&i.sort(h||bl)}function u(){for(let f=t,h=o.length;f<h;f++){const m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function ng(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new wl,o.set(n,[a])):i>=r.length?(a=new wl,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function ig(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return o[t.id]=e,e}}}function rg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let sg=0;function ag(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function og(o,t){const e=new ig,n=rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,a=new Qt,s=new Qt;function l(u,f){let h=0,m=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,p=0,_=0,y=0,M=0,S=0,v=0,A=0,P=0,x=0;u.sort(ag);const w=f!==!0?Math.PI:1;for(let U=0,$=u.length;U<$;U++){const I=u[U],R=I.color,B=I.intensity,Z=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=R.r*B*w,m+=R.g*B*w,g+=R.b*B*w;else if(I.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],B);else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const tt=I.shadow,K=n.get(I);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=G,d++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(R).multiplyScalar(B*w),G.distance=Z,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[_]=G;const tt=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,tt.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[_]=tt.matrix,I.castShadow){const K=n.get(I);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=j,A++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(R).multiplyScalar(B),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=G,y++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*w),G.distance=I.distance,G.decay=I.decay,I.castShadow){const tt=I.shadow,K=n.get(I);K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,K.shadowCameraNear=tt.camera.near,K.shadowCameraFar=tt.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=G,p++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(B*w),G.groundColor.copy(I.groundColor).multiplyScalar(B*w),i.hemi[M]=G,M++}}y>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==y||L.hemiLength!==M||L.numDirectionalShadows!==S||L.numPointShadows!==v||L.numSpotShadows!==A||L.numSpotMaps!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=y,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=A+P-x,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=x,L.directionalLength=d,L.pointLength=p,L.spotLength=_,L.rectAreaLength=y,L.hemiLength=M,L.numDirectionalShadows=S,L.numPointShadows=v,L.numSpotShadows=A,L.numSpotMaps=P,i.version=sg++)}function c(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let y=0,M=u.length;y<M;y++){const S=u[y];if(S.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),h++}else if(S.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),s.identity(),a.copy(S.matrixWorld),a.premultiply(_),s.extractRotation(a),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(S.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Tl(o,t){const e=new og(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function s(f){i.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function lg(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let l;return s===void 0?(l=new Tl(o,t),e.set(r,[l])):a>=s.length?(l=new Tl(o,t),s.push(l)):l=s[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class cg extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ug extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dg(o,t,e){let n=new qa;const i=new St,r=new St,a=new Wt,s=new cg({depthPacking:vh}),l=new ug,c={},u=e.maxTextureSize,f={0:Je,1:hi,2:Ha},h=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:hg,fragmentShader:fg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new wn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl,this.render=function(S,v,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Nn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let U=0,$=S.length;U<$;U++){const I=S[U],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const j=this.type!==gr?{minFilter:ye,magFilter:ye}:{};R.map=new pi(i.x,i.y,j),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const Z=R.getViewportCount();for(let j=0;j<Z;j++){const G=R.getViewport(j);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),L.viewport(a),R.updateMatrices(I,j),n=R.getFrustum(),M(v,A,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===gr&&_(R,A),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(P,x,w)};function _(S,v){const A=t.update(d);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new pi(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(v,null,A,h,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(v,null,A,m,d,null)}function y(S,v,A,P,x,w){let L=null;const U=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)L=U;else if(L=A.isPointLight===!0?l:s,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const $=L.uuid,I=v.uuid;let R=c[$];R===void 0&&(R={},c[$]=R);let B=R[I];B===void 0&&(B=L.clone(),R[I]=B),L=B}return L.visible=v.visible,L.wireframe=v.wireframe,w===gr?L.side=v.shadowSide!==null?v.shadowSide:v.side:L.side=v.shadowSide!==null?v.shadowSide:f[v.side],L.alphaMap=v.alphaMap,L.alphaTest=v.alphaTest,L.map=v.map,L.clipShadows=v.clipShadows,L.clippingPlanes=v.clippingPlanes,L.clipIntersection=v.clipIntersection,L.displacementMap=v.displacementMap,L.displacementScale=v.displacementScale,L.displacementBias=v.displacementBias,L.wireframeLinewidth=v.wireframeLinewidth,L.linewidth=v.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=P,L.farDistance=x),L}function M(S,v,A,P,x){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===gr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const U=t.update(S),$=S.material;if(Array.isArray($)){const I=U.groups;for(let R=0,B=I.length;R<B;R++){const Z=I[R],j=$[Z.materialIndex];if(j&&j.visible){const G=y(S,j,P,A.near,A.far,x);o.renderBufferDirect(A,null,U,G,S,Z)}}}else if($.visible){const I=y(S,$,P,A.near,A.far,x);o.renderBufferDirect(A,null,U,I,S,null)}}const L=S.children;for(let U=0,$=L.length;U<$;U++)M(L[U],v,A,P,x)}}function pg(o,t,e){const n=e.isWebGL2;function i(){let D=!1;const H=new Wt;let et=null;const ct=new Wt(0,0,0,0);return{setMask:function(mt){et!==mt&&!D&&(o.colorMask(mt,mt,mt,mt),et=mt)},setLocked:function(mt){D=mt},setClear:function(mt,Ot,oe,fe,Hn){Hn===!0&&(mt*=fe,Ot*=fe,oe*=fe),H.set(mt,Ot,oe,fe),ct.equals(H)===!1&&(o.clearColor(mt,Ot,oe,fe),ct.copy(H))},reset:function(){D=!1,et=null,ct.set(-1,0,0,0)}}}function r(){let D=!1,H=null,et=null,ct=null;return{setTest:function(mt){mt?Et(2929):ft(2929)},setMask:function(mt){H!==mt&&!D&&(o.depthMask(mt),H=mt)},setFunc:function(mt){if(et!==mt){switch(mt){case Vu:o.depthFunc(512);break;case Wu:o.depthFunc(519);break;case Hu:o.depthFunc(513);break;case Ma:o.depthFunc(515);break;case Xu:o.depthFunc(514);break;case qu:o.depthFunc(518);break;case Yu:o.depthFunc(516);break;case ju:o.depthFunc(517);break;default:o.depthFunc(515)}et=mt}},setLocked:function(mt){D=mt},setClear:function(mt){ct!==mt&&(o.clearDepth(mt),ct=mt)},reset:function(){D=!1,H=null,et=null,ct=null}}}function a(){let D=!1,H=null,et=null,ct=null,mt=null,Ot=null,oe=null,fe=null,Hn=null;return{setTest:function(Vt){D||(Vt?Et(2960):ft(2960))},setMask:function(Vt){H!==Vt&&!D&&(o.stencilMask(Vt),H=Vt)},setFunc:function(Vt,pn,He){(et!==Vt||ct!==pn||mt!==He)&&(o.stencilFunc(Vt,pn,He),et=Vt,ct=pn,mt=He)},setOp:function(Vt,pn,He){(Ot!==Vt||oe!==pn||fe!==He)&&(o.stencilOp(Vt,pn,He),Ot=Vt,oe=pn,fe=He)},setLocked:function(Vt){D=Vt},setClear:function(Vt){Hn!==Vt&&(o.clearStencil(Vt),Hn=Vt)},reset:function(){D=!1,H=null,et=null,ct=null,mt=null,Ot=null,oe=null,fe=null,Hn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,_=!1,y=null,M=null,S=null,v=null,A=null,P=null,x=null,w=!1,L=null,U=null,$=null,I=null,R=null;const B=o.getParameter(35661);let Z=!1,j=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=j>=2);let tt=null,K={};const k=o.getParameter(3088),V=o.getParameter(2978),Q=new Wt().fromArray(k),J=new Wt().fromArray(V);function rt(D,H,et){const ct=new Uint8Array(4),mt=o.createTexture();o.bindTexture(D,mt),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Ot=0;Ot<et;Ot++)o.texImage2D(H+Ot,0,6408,1,1,0,6408,5121,ct);return mt}const q={};q[3553]=rt(3553,3553,1),q[34067]=rt(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Et(2929),l.setFunc(Ma),ee(!1),_e(go),Et(2884),ae(Nn);function Et(D){h[D]!==!0&&(o.enable(D),h[D]=!0)}function ft(D){h[D]!==!1&&(o.disable(D),h[D]=!1)}function _t(D,H){return m[D]!==H?(o.bindFramebuffer(D,H),m[D]=H,n&&(D===36009&&(m[36160]=H),D===36160&&(m[36009]=H)),!0):!1}function ht(D,H){let et=d,ct=!1;if(D)if(et=g.get(H),et===void 0&&(et=[],g.set(H,et)),D.isWebGLMultipleRenderTargets){const mt=D.texture;if(et.length!==mt.length||et[0]!==36064){for(let Ot=0,oe=mt.length;Ot<oe;Ot++)et[Ot]=36064+Ot;et.length=mt.length,ct=!0}}else et[0]!==36064&&(et[0]=36064,ct=!0);else et[0]!==1029&&(et[0]=1029,ct=!0);ct&&(e.isWebGL2?o.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Ft(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const yt={[zi]:32774,[Du]:32778,[Ru]:32779};if(n)yt[Mo]=32775,yt[yo]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(yt[Mo]=D.MIN_EXT,yt[yo]=D.MAX_EXT)}const xt={[Iu]:0,[Fu]:1,[Ou]:768,[Zl]:770,[Gu]:776,[Bu]:774,[zu]:772,[Nu]:769,[$l]:771,[ku]:775,[Uu]:773};function ae(D,H,et,ct,mt,Ot,oe,fe){if(D===Nn){_===!0&&(ft(3042),_=!1);return}if(_===!1&&(Et(3042),_=!0),D!==Lu){if(D!==y||fe!==w){if((M!==zi||A!==zi)&&(o.blendEquation(32774),M=zi,A=zi),fe)switch(D){case Gi:o.blendFuncSeparate(1,771,1,771);break;case _o:o.blendFunc(1,1);break;case xo:o.blendFuncSeparate(0,769,0,1);break;case vo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gi:o.blendFuncSeparate(770,771,1,771);break;case _o:o.blendFunc(770,1);break;case xo:o.blendFuncSeparate(0,769,0,1);break;case vo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,v=null,P=null,x=null,y=D,w=fe}return}mt=mt||H,Ot=Ot||et,oe=oe||ct,(H!==M||mt!==A)&&(o.blendEquationSeparate(yt[H],yt[mt]),M=H,A=mt),(et!==S||ct!==v||Ot!==P||oe!==x)&&(o.blendFuncSeparate(xt[et],xt[ct],xt[Ot],xt[oe]),S=et,v=ct,P=Ot,x=oe),y=D,w=!1}function te(D,H){D.side===Ha?ft(2884):Et(2884);let et=D.side===Je;H&&(et=!et),ee(et),D.blending===Gi&&D.transparent===!1?ae(Nn):ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const ct=D.stencilWrite;c.setTest(ct),ct&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(32926):ft(32926)}function ee(D){L!==D&&(D?o.frontFace(2304):o.frontFace(2305),L=D)}function _e(D){D!==Au?(Et(2884),D!==U&&(D===go?o.cullFace(1029):D===Cu?o.cullFace(1028):o.cullFace(1032))):ft(2884),U=D}function Yt(D){D!==$&&(Z&&o.lineWidth(D),$=D)}function Nt(D,H,et){D?(Et(32823),(I!==H||R!==et)&&(o.polygonOffset(H,et),I=H,R=et)):ft(32823)}function We(D){D?Et(3089):ft(3089)}function Se(D){D===void 0&&(D=33984+B-1),tt!==D&&(o.activeTexture(D),tt=D)}function E(D,H,et){et===void 0&&(tt===null?et=33984+B-1:et=tt);let ct=K[et];ct===void 0&&(ct={type:void 0,texture:void 0},K[et]=ct),(ct.type!==D||ct.texture!==H)&&(tt!==et&&(o.activeTexture(et),tt=et),o.bindTexture(D,H||q[D]),ct.type=D,ct.texture=H)}function b(){const D=K[tt];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(D){Q.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function dt(D){J.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function At(D,H){let et=f.get(H);et===void 0&&(et=new WeakMap,f.set(H,et));let ct=et.get(D);ct===void 0&&(ct=o.getUniformBlockIndex(H,D.name),et.set(D,ct))}function Pt(D,H){const ct=f.get(H).get(D);u.get(H)!==ct&&(o.uniformBlockBinding(H,ct,D.__bindingPointIndex),u.set(H,ct))}function zt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},tt=null,K={},m={},g=new WeakMap,d=[],p=null,_=!1,y=null,M=null,S=null,v=null,A=null,P=null,x=null,w=!1,L=null,U=null,$=null,I=null,R=null,Q.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Et,disable:ft,bindFramebuffer:_t,drawBuffers:ht,useProgram:Ft,setBlending:ae,setMaterial:te,setFlipSided:ee,setCullFace:_e,setLineWidth:Yt,setPolygonOffset:Nt,setScissorTest:We,activeTexture:Se,bindTexture:E,unbindTexture:b,compressedTexImage2D:W,compressedTexImage3D:nt,texImage2D:ut,texImage3D:ot,updateUBOMapping:At,uniformBlockBinding:Pt,texStorage2D:F,texStorage3D:lt,texSubImage2D:it,texSubImage3D:at,compressedTexSubImage2D:vt,compressedTexSubImage3D:C,scissor:pt,viewport:dt,reset:zt}}function mg(o,t,e,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,b){return _?new OffscreenCanvas(E,b):fs("canvas")}function M(E,b,W,nt){let it=1;if((E.width>nt||E.height>nt)&&(it=nt/Math.max(E.width,E.height)),it<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const at=b?Ea:Math.floor,vt=at(it*E.width),C=at(it*E.height);d===void 0&&(d=y(vt,C));const F=W?y(vt,C):d;return F.width=vt,F.height=C,F.getContext("2d").drawImage(E,0,0,vt,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+vt+"x"+C+")."),F}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return Yo(E.width)&&Yo(E.height)}function v(E){return s?!1:E.wrapS!==rn||E.wrapT!==rn||E.minFilter!==ye&&E.minFilter!==je}function A(E,b){return E.generateMipmaps&&b&&E.minFilter!==ye&&E.minFilter!==je}function P(E){o.generateMipmap(E)}function x(E,b,W,nt,it=!1){if(s===!1)return b;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let at=b;return b===6403&&(W===5126&&(at=33326),W===5131&&(at=33325),W===5121&&(at=33321)),b===33319&&(W===5126&&(at=33328),W===5131&&(at=33327),W===5121&&(at=33323)),b===6408&&(W===5126&&(at=34836),W===5131&&(at=34842),W===5121&&(at=nt===Gt&&it===!1?35907:32856),W===32819&&(at=32854),W===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function w(E,b,W){return A(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==ye&&E.minFilter!==je?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function L(E){return E===ye||E===So||E===Ls?9728:9729}function U(E){const b=E.target;b.removeEventListener("dispose",U),I(b),b.isVideoTexture&&g.delete(b)}function $(E){const b=E.target;b.removeEventListener("dispose",$),B(b)}function I(E){const b=n.get(E);if(b.__webglInit===void 0)return;const W=E.source,nt=p.get(W);if(nt){const it=nt[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(E),Object.keys(nt).length===0&&p.delete(W)}n.remove(E)}function R(E){const b=n.get(E);o.deleteTexture(b.__webglTexture);const W=E.source,nt=p.get(W);delete nt[b.__cacheKey],a.memory.textures--}function B(E){const b=E.texture,W=n.get(E),nt=n.get(b);if(nt.__webglTexture!==void 0&&(o.deleteTexture(nt.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)o.deleteFramebuffer(W.__webglFramebuffer[it]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[it]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let it=0;it<W.__webglColorRenderbuffer.length;it++)W.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[it]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let it=0,at=b.length;it<at;it++){const vt=n.get(b[it]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(b[it])}n.remove(b),n.remove(E)}let Z=0;function j(){Z=0}function G(){const E=Z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Z+=1,E}function tt(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function K(E,b){const W=n.get(E);if(E.isVideoTexture&&We(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const nt=E.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(W,E,b);return}}e.bindTexture(3553,W.__webglTexture,33984+b)}function k(E,b){const W=n.get(E);if(E.version>0&&W.__version!==E.version){ft(W,E,b);return}e.bindTexture(35866,W.__webglTexture,33984+b)}function V(E,b){const W=n.get(E);if(E.version>0&&W.__version!==E.version){ft(W,E,b);return}e.bindTexture(32879,W.__webglTexture,33984+b)}function Q(E,b){const W=n.get(E);if(E.version>0&&W.__version!==E.version){_t(W,E,b);return}e.bindTexture(34067,W.__webglTexture,33984+b)}const J={[ba]:10497,[rn]:33071,[wa]:33648},rt={[ye]:9728,[So]:9984,[Ls]:9986,[je]:9729,[nh]:9985,[br]:9987};function q(E,b,W){if(W?(o.texParameteri(E,10242,J[b.wrapS]),o.texParameteri(E,10243,J[b.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,J[b.wrapR]),o.texParameteri(E,10240,rt[b.magFilter]),o.texParameteri(E,10241,rt[b.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(b.wrapS!==rn||b.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,L(b.magFilter)),o.texParameteri(E,10241,L(b.minFilter)),b.minFilter!==ye&&b.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===ye||b.minFilter!==Ls&&b.minFilter!==br||b.type===ri&&t.has("OES_texture_float_linear")===!1||s===!1&&b.type===wr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(E,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Et(E,b){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",U));const nt=b.source;let it=p.get(nt);it===void 0&&(it={},p.set(nt,it));const at=tt(b);if(at!==E.__cacheKey){it[at]===void 0&&(it[at]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),it[at].usedTimes++;const vt=it[E.__cacheKey];vt!==void 0&&(it[E.__cacheKey].usedTimes--,vt.usedTimes===0&&R(b)),E.__cacheKey=at,E.__webglTexture=it[at].texture}return W}function ft(E,b,W){let nt=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=35866),b.isData3DTexture&&(nt=32879);const it=Et(E,b),at=b.source;e.bindTexture(nt,E.__webglTexture,33984+W);const vt=n.get(at);if(at.version!==vt.__version||it===!0){e.activeTexture(33984+W),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const C=v(b)&&S(b.image)===!1;let F=M(b.image,C,!1,u);F=Se(b,F);const lt=S(F)||s,ut=r.convert(b.format,b.encoding);let ot=r.convert(b.type),pt=x(b.internalFormat,ut,ot,b.encoding,b.isVideoTexture);q(nt,b,lt);let dt;const At=b.mipmaps,Pt=s&&b.isVideoTexture!==!0,zt=vt.__version===void 0||it===!0,D=w(b,F,lt);if(b.isDepthTexture)pt=6402,s?b.type===ri?pt=36012:b.type===ii?pt=33190:b.type===Vi?pt=35056:pt=33189:b.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ai&&pt===6402&&b.type!==Ql&&b.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ii,ot=r.convert(b.type)),b.format===ji&&pt===6402&&(pt=34041,b.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Vi,ot=r.convert(b.type))),zt&&(Pt?e.texStorage2D(3553,1,pt,F.width,F.height):e.texImage2D(3553,0,pt,F.width,F.height,0,ut,ot,null));else if(b.isDataTexture)if(At.length>0&&lt){Pt&&zt&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,et=At.length;H<et;H++)dt=At[H],Pt?e.texSubImage2D(3553,H,0,0,dt.width,dt.height,ut,ot,dt.data):e.texImage2D(3553,H,pt,dt.width,dt.height,0,ut,ot,dt.data);b.generateMipmaps=!1}else Pt?(zt&&e.texStorage2D(3553,D,pt,F.width,F.height),e.texSubImage2D(3553,0,0,0,F.width,F.height,ut,ot,F.data)):e.texImage2D(3553,0,pt,F.width,F.height,0,ut,ot,F.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pt&&zt&&e.texStorage3D(35866,D,pt,At[0].width,At[0].height,F.depth);for(let H=0,et=At.length;H<et;H++)dt=At[H],b.format!==sn?ut!==null?Pt?e.compressedTexSubImage3D(35866,H,0,0,0,dt.width,dt.height,F.depth,ut,dt.data,0,0):e.compressedTexImage3D(35866,H,pt,dt.width,dt.height,F.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?e.texSubImage3D(35866,H,0,0,0,dt.width,dt.height,F.depth,ut,ot,dt.data):e.texImage3D(35866,H,pt,dt.width,dt.height,F.depth,0,ut,ot,dt.data)}else{Pt&&zt&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,et=At.length;H<et;H++)dt=At[H],b.format!==sn?ut!==null?Pt?e.compressedTexSubImage2D(3553,H,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(3553,H,pt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?e.texSubImage2D(3553,H,0,0,dt.width,dt.height,ut,ot,dt.data):e.texImage2D(3553,H,pt,dt.width,dt.height,0,ut,ot,dt.data)}else if(b.isDataArrayTexture)Pt?(zt&&e.texStorage3D(35866,D,pt,F.width,F.height,F.depth),e.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,ut,ot,F.data)):e.texImage3D(35866,0,pt,F.width,F.height,F.depth,0,ut,ot,F.data);else if(b.isData3DTexture)Pt?(zt&&e.texStorage3D(32879,D,pt,F.width,F.height,F.depth),e.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,ut,ot,F.data)):e.texImage3D(32879,0,pt,F.width,F.height,F.depth,0,ut,ot,F.data);else if(b.isFramebufferTexture){if(zt)if(Pt)e.texStorage2D(3553,D,pt,F.width,F.height);else{let H=F.width,et=F.height;for(let ct=0;ct<D;ct++)e.texImage2D(3553,ct,pt,H,et,0,ut,ot,null),H>>=1,et>>=1}}else if(At.length>0&&lt){Pt&&zt&&e.texStorage2D(3553,D,pt,At[0].width,At[0].height);for(let H=0,et=At.length;H<et;H++)dt=At[H],Pt?e.texSubImage2D(3553,H,0,0,ut,ot,dt):e.texImage2D(3553,H,pt,ut,ot,dt);b.generateMipmaps=!1}else Pt?(zt&&e.texStorage2D(3553,D,pt,F.width,F.height),e.texSubImage2D(3553,0,0,0,ut,ot,F)):e.texImage2D(3553,0,pt,ut,ot,F);A(b,lt)&&P(nt),vt.__version=at.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function _t(E,b,W){if(b.image.length!==6)return;const nt=Et(E,b),it=b.source;e.bindTexture(34067,E.__webglTexture,33984+W);const at=n.get(it);if(it.version!==at.__version||nt===!0){e.activeTexture(33984+W),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const vt=b.isCompressedTexture||b.image[0].isCompressedTexture,C=b.image[0]&&b.image[0].isDataTexture,F=[];for(let H=0;H<6;H++)!vt&&!C?F[H]=M(b.image[H],!1,!0,c):F[H]=C?b.image[H].image:b.image[H],F[H]=Se(b,F[H]);const lt=F[0],ut=S(lt)||s,ot=r.convert(b.format,b.encoding),pt=r.convert(b.type),dt=x(b.internalFormat,ot,pt,b.encoding),At=s&&b.isVideoTexture!==!0,Pt=at.__version===void 0||nt===!0;let zt=w(b,lt,ut);q(34067,b,ut);let D;if(vt){At&&Pt&&e.texStorage2D(34067,zt,dt,lt.width,lt.height);for(let H=0;H<6;H++){D=F[H].mipmaps;for(let et=0;et<D.length;et++){const ct=D[et];b.format!==sn?ot!==null?At?e.compressedTexSubImage2D(34069+H,et,0,0,ct.width,ct.height,ot,ct.data):e.compressedTexImage2D(34069+H,et,dt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+H,et,0,0,ct.width,ct.height,ot,pt,ct.data):e.texImage2D(34069+H,et,dt,ct.width,ct.height,0,ot,pt,ct.data)}}}else{D=b.mipmaps,At&&Pt&&(D.length>0&&zt++,e.texStorage2D(34067,zt,dt,F[0].width,F[0].height));for(let H=0;H<6;H++)if(C){At?e.texSubImage2D(34069+H,0,0,0,F[H].width,F[H].height,ot,pt,F[H].data):e.texImage2D(34069+H,0,dt,F[H].width,F[H].height,0,ot,pt,F[H].data);for(let et=0;et<D.length;et++){const mt=D[et].image[H].image;At?e.texSubImage2D(34069+H,et+1,0,0,mt.width,mt.height,ot,pt,mt.data):e.texImage2D(34069+H,et+1,dt,mt.width,mt.height,0,ot,pt,mt.data)}}else{At?e.texSubImage2D(34069+H,0,0,0,ot,pt,F[H]):e.texImage2D(34069+H,0,dt,ot,pt,F[H]);for(let et=0;et<D.length;et++){const ct=D[et];At?e.texSubImage2D(34069+H,et+1,0,0,ot,pt,ct.image[H]):e.texImage2D(34069+H,et+1,dt,ot,pt,ct.image[H])}}}A(b,ut)&&P(34067),at.__version=it.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ht(E,b,W,nt,it){const at=r.convert(W.format,W.encoding),vt=r.convert(W.type),C=x(W.internalFormat,at,vt,W.encoding);n.get(b).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,C,b.width,b.height,b.depth,0,at,vt,null):e.texImage2D(it,0,C,b.width,b.height,0,at,vt,null)),e.bindFramebuffer(36160,E),Nt(b)?h.framebufferTexture2DMultisampleEXT(36160,nt,it,n.get(W).__webglTexture,0,Yt(b)):(it===3553||it>=34069&&it<=34074)&&o.framebufferTexture2D(36160,nt,it,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ft(E,b,W){if(o.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let nt=33189;if(W||Nt(b)){const it=b.depthTexture;it&&it.isDepthTexture&&(it.type===ri?nt=36012:it.type===ii&&(nt=33190));const at=Yt(b);Nt(b)?h.renderbufferStorageMultisampleEXT(36161,at,nt,b.width,b.height):o.renderbufferStorageMultisample(36161,at,nt,b.width,b.height)}else o.renderbufferStorage(36161,nt,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const nt=Yt(b);W&&Nt(b)===!1?o.renderbufferStorageMultisample(36161,nt,35056,b.width,b.height):Nt(b)?h.renderbufferStorageMultisampleEXT(36161,nt,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const nt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let it=0;it<nt.length;it++){const at=nt[it],vt=r.convert(at.format,at.encoding),C=r.convert(at.type),F=x(at.internalFormat,vt,C,at.encoding),lt=Yt(b);W&&Nt(b)===!1?o.renderbufferStorageMultisample(36161,lt,F,b.width,b.height):Nt(b)?h.renderbufferStorageMultisampleEXT(36161,lt,F,b.width,b.height):o.renderbufferStorage(36161,F,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function yt(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const nt=n.get(b.depthTexture).__webglTexture,it=Yt(b);if(b.depthTexture.format===ai)Nt(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,nt,0,it):o.framebufferTexture2D(36160,36096,3553,nt,0);else if(b.depthTexture.format===ji)Nt(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,nt,0,it):o.framebufferTexture2D(36160,33306,3553,nt,0);else throw new Error("Unknown depthTexture format")}function xt(E){const b=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");yt(b.__webglFramebuffer,E)}else if(W){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(36160,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]=o.createRenderbuffer(),Ft(b.__webglDepthbuffer[nt],E,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Ft(b.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function ae(E,b,W){const nt=n.get(E);b!==void 0&&ht(nt.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&xt(E)}function te(E){const b=E.texture,W=n.get(E),nt=n.get(b);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=b.version,a.memory.textures++);const it=E.isWebGLCubeRenderTarget===!0,at=E.isWebGLMultipleRenderTargets===!0,vt=S(E)||s;if(it){W.__webglFramebuffer=[];for(let C=0;C<6;C++)W.__webglFramebuffer[C]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),at)if(i.drawBuffers){const C=E.texture;for(let F=0,lt=C.length;F<lt;F++){const ut=n.get(C[F]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Nt(E)===!1){const C=at?b:[b];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let F=0;F<C.length;F++){const lt=C[F];W.__webglColorRenderbuffer[F]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[F]);const ut=r.convert(lt.format,lt.encoding),ot=r.convert(lt.type),pt=x(lt.internalFormat,ut,ot,lt.encoding,E.isXRRenderTarget===!0),dt=Yt(E);o.renderbufferStorageMultisample(36161,dt,pt,E.width,E.height),o.framebufferRenderbuffer(36160,36064+F,36161,W.__webglColorRenderbuffer[F])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,nt.__webglTexture),q(34067,b,vt);for(let C=0;C<6;C++)ht(W.__webglFramebuffer[C],E,b,36064,34069+C);A(b,vt)&&P(34067),e.unbindTexture()}else if(at){const C=E.texture;for(let F=0,lt=C.length;F<lt;F++){const ut=C[F],ot=n.get(ut);e.bindTexture(3553,ot.__webglTexture),q(3553,ut,vt),ht(W.__webglFramebuffer,E,ut,36064+F,3553),A(ut,vt)&&P(3553)}e.unbindTexture()}else{let C=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?C=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(C,nt.__webglTexture),q(C,b,vt),ht(W.__webglFramebuffer,E,b,36064,C),A(b,vt)&&P(C),e.unbindTexture()}E.depthBuffer&&xt(E)}function ee(E){const b=S(E)||s,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let nt=0,it=W.length;nt<it;nt++){const at=W[nt];if(A(at,b)){const vt=E.isWebGLCubeRenderTarget?34067:3553,C=n.get(at).__webglTexture;e.bindTexture(vt,C),P(vt),e.unbindTexture()}}}function _e(E){if(s&&E.samples>0&&Nt(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,nt=E.height;let it=16384;const at=[],vt=E.stencilBuffer?33306:36096,C=n.get(E),F=E.isWebGLMultipleRenderTargets===!0;if(F)for(let lt=0;lt<b.length;lt++)e.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,null),e.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,null,0);e.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,C.__webglFramebuffer);for(let lt=0;lt<b.length;lt++){at.push(36064+lt),E.depthBuffer&&at.push(vt);const ut=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ut===!1&&(E.depthBuffer&&(it|=256),E.stencilBuffer&&(it|=1024)),F&&o.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[lt]),ut===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),F){const ot=n.get(b[lt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ot,0)}o.blitFramebuffer(0,0,W,nt,0,0,W,nt,it,9728),m&&o.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),F)for(let lt=0;lt<b.length;lt++){e.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,C.__webglColorRenderbuffer[lt]);const ut=n.get(b[lt]).__webglTexture;e.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,ut,0)}e.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function Yt(E){return Math.min(f,E.samples)}function Nt(E){const b=n.get(E);return s&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(E){const b=a.render.frame;g.get(E)!==b&&(g.set(E,b),E.update())}function Se(E,b){const W=E.encoding,nt=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ta||W!==di&&(W===Gt?s===!1?t.has("EXT_sRGB")===!0&&nt===sn?(E.format=Ta,E.minFilter=je,E.generateMipmaps=!1):b=ic.sRGBToLinear(b):(nt!==sn||it!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),b}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=ae,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Nt}function gg(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===fi)return 5121;if(r===ah)return 32819;if(r===oh)return 32820;if(r===ih)return 5120;if(r===rh)return 5122;if(r===Ql)return 5123;if(r===sh)return 5124;if(r===ii)return 5125;if(r===ri)return 5126;if(r===wr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===lh)return 6406;if(r===sn)return 6408;if(r===uh)return 6409;if(r===hh)return 6410;if(r===ai)return 6402;if(r===ji)return 34041;if(r===ch)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ta)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===fh)return 6403;if(r===dh)return 36244;if(r===ph)return 33319;if(r===mh)return 33320;if(r===gh)return 36249;if(r===Ds||r===Rs||r===Is||r===Fs)if(a===Gt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ds)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ds)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bo||r===wo||r===To||r===Eo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_h)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ao||r===Co)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Ao)return a===Gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Co)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Po||r===Lo||r===Do||r===Ro||r===Io||r===Fo||r===Oo||r===No||r===zo||r===Uo||r===Bo||r===ko||r===Go||r===Vo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Po)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Do)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ro)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Io)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===No)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ko)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Go)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vo)return a===Gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Wo)return a===Gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Vi?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class _g extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ss extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xg={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vg extends Be{constructor(t,e,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ai&&(n=ii),n===void 0&&u===ji&&(n=Vi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:ye,this.minFilter=l!==void 0?l:ye,this.flipY=!1,this.generateMipmaps=!1}}class Mg extends xi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=e.getContextAttributes();let d=null,p=null;const _=[],y=[],M=new Set,S=new Map,v=new Ne;v.layers.enable(1),v.viewport=new Wt;const A=new Ne;A.layers.enable(2),A.viewport=new Wt;const P=[v,A],x=new _g;x.layers.enable(1),x.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=_[k];return V===void 0&&(V=new oa,_[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=_[k];return V===void 0&&(V=new oa,_[k]=V),V.getGripSpace()},this.getHand=function(k){let V=_[k];return V===void 0&&(V=new oa,_[k]=V),V.getHandSpace()};function U(k){const V=y.indexOf(k.inputSource);if(V===-1)return;const Q=_[V];Q!==void 0&&Q.dispatchEvent({type:k.type,data:k.inputSource})}function $(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",I);for(let k=0;k<_.length;k++){const V=y[k];V!==null&&(y[k]=null,_[k].disconnect(V))}w=null,L=null,t.setRenderTarget(d),h=null,f=null,u=null,i=null,p=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",$),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,V),i.updateRenderState({baseLayer:h}),p=new pi(h.framebufferWidth,h.framebufferHeight,{format:sn,type:fi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,Q=null,J=null;g.depth&&(J=g.stencil?35056:33190,V=g.stencil?ji:ai,Q=g.stencil?Vi:ii);const rt={colorFormat:32856,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(rt),i.updateRenderState({layers:[f]}),p=new pi(f.textureWidth,f.textureHeight,{format:sn,type:fi,depthTexture:new vg(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const q=t.properties.get(p);q.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(k){for(let V=0;V<k.removed.length;V++){const Q=k.removed[V],J=y.indexOf(Q);J>=0&&(y[J]=null,_[J].disconnect(Q))}for(let V=0;V<k.added.length;V++){const Q=k.added[V];let J=y.indexOf(Q);if(J===-1){for(let q=0;q<_.length;q++)if(q>=y.length){y.push(Q),J=q;break}else if(y[q]===null){y[q]=Q,J=q;break}if(J===-1)break}const rt=_[J];rt&&rt.connect(Q)}}const R=new O,B=new O;function Z(k,V,Q){R.setFromMatrixPosition(V.matrixWorld),B.setFromMatrixPosition(Q.matrixWorld);const J=R.distanceTo(B),rt=V.projectionMatrix.elements,q=Q.projectionMatrix.elements,Et=rt[14]/(rt[10]-1),ft=rt[14]/(rt[10]+1),_t=(rt[9]+1)/rt[5],ht=(rt[9]-1)/rt[5],Ft=(rt[8]-1)/rt[0],yt=(q[8]+1)/q[0],xt=Et*Ft,ae=Et*yt,te=J/(-Ft+yt),ee=te*-Ft;V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ee),k.translateZ(te),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const _e=Et+te,Yt=ft+te,Nt=xt-ee,We=ae+(J-ee),Se=_t*ft/Yt*_e,E=ht*ft/Yt*_e;k.projectionMatrix.makePerspective(Nt,We,Se,E,_e,Yt)}function j(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;x.near=A.near=v.near=k.near,x.far=A.far=v.far=k.far,(w!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,L=x.far);const V=k.parent,Q=x.cameras;j(x,V);for(let rt=0;rt<Q.length;rt++)j(Q[rt],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),k.matrix.copy(x.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const J=k.children;for(let rt=0,q=J.length;rt<q;rt++)J[rt].updateMatrixWorld(!0);Q.length===2?Z(x,v,A):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.getPlanes=function(){return M};let G=null;function tt(k,V){if(c=V.getViewerPose(l||a),m=V,c!==null){const Q=c.views;h!==null&&(t.setRenderTargetFramebuffer(p,h.framebuffer),t.setRenderTarget(p));let J=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,J=!0);for(let rt=0;rt<Q.length;rt++){const q=Q[rt];let Et=null;if(h!==null)Et=h.getViewport(q);else{const _t=u.getViewSubImage(f,q);Et=_t.viewport,rt===0&&(t.setRenderTargetTextures(p,_t.colorTexture,f.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(p))}let ft=P[rt];ft===void 0&&(ft=new Ne,ft.layers.enable(rt),ft.viewport=new Wt,P[rt]=ft),ft.matrix.fromArray(q.transform.matrix),ft.projectionMatrix.fromArray(q.projectionMatrix),ft.viewport.set(Et.x,Et.y,Et.width,Et.height),rt===0&&x.matrix.copy(ft.matrix),J===!0&&x.cameras.push(ft)}}for(let Q=0;Q<_.length;Q++){const J=y[Q],rt=_[Q];J!==null&&rt!==void 0&&rt.update(J,V,l||a)}if(G&&G(k,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let Q=null;for(const J of M)V.detectedPlanes.has(J)||(Q===null&&(Q=[]),Q.push(J));if(Q!==null)for(const J of Q)M.delete(J),S.delete(J),n.dispatchEvent({type:"planeremoved",data:J});for(const J of V.detectedPlanes)if(!M.has(J))M.add(J),S.set(J,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:J});else{const rt=S.get(J);J.lastChangedTime>rt&&(S.set(J,J.lastChangedTime),n.dispatchEvent({type:"planechanged",data:J}))}}m=null}const K=new dc;K.setAnimationLoop(tt),this.setAnimationLoop=function(k){G=k},this.dispose=function(){}}}function yg(o,t){function e(d,p){p.color.getRGB(d.fogColor.value,uc(o)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,M)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,y):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Je&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Je&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uv2Transform.value.copy(M.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=y*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Je&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Sg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function l(y,M){const S=M.program;n.uniformBlockBinding(y,S)}function c(y,M){let S=i[y.id];S===void 0&&(g(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",p));const v=M.program;n.updateUBOMapping(y,v);const A=t.render.frame;r[y.id]!==A&&(h(y),r[y.id]=A)}function u(y){const M=f();y.__bindingPointIndex=M;const S=o.createBuffer(),v=y.__size,A=y.usage;return o.bindBuffer(35345,S),o.bufferData(35345,v,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,S),S}function f(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=i[y.id],S=y.uniforms,v=y.__cache;o.bindBuffer(35345,M);for(let A=0,P=S.length;A<P;A++){const x=S[A];if(m(x,A,v)===!0){const w=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let $=0;$<L.length;$++){const I=L[$],R=d(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,w+U,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,U),U+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function m(y,M,S){const v=y.value;if(S[M]===void 0){if(typeof v=="number")S[M]=v;else{const A=Array.isArray(v)?v:[v],P=[];for(let x=0;x<A.length;x++)P.push(A[x].clone());S[M]=P}return!0}else if(typeof v=="number"){if(S[M]!==v)return S[M]=v,!0}else{const A=Array.isArray(S[M])?S[M]:[S[M]],P=Array.isArray(v)?v:[v];for(let x=0;x<A.length;x++){const w=A[x];if(w.equals(P[x])===!1)return w.copy(P[x]),!0}}return!1}function g(y){const M=y.uniforms;let S=0;const v=16;let A=0;for(let P=0,x=M.length;P<x;P++){const w=M[P],L={boundary:0,storage:0},U=Array.isArray(w.value)?w.value:[w.value];for(let $=0,I=U.length;$<I;$++){const R=U[$],B=d(R);L.boundary+=B.boundary,L.storage+=B.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,P>0){A=S%v;const $=v-A;A!==0&&$-L.boundary<0&&(S+=v-A,w.__offset=S)}S+=L.storage}return A=S%v,A>0&&(S+=v-A),y.__size=S,y.__cache={},this}function d(y){const M={boundary:0,storage:0};return typeof y=="number"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function _(){for(const y in i)o.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function bg(){const o=fs("canvas");return o.style.display="block",o}function xc(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:bg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=di,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1;const d=this;let p=!1,_=0,y=0,M=null,S=-1,v=null;const A=new Wt,P=new Wt;let x=null,w=t.width,L=t.height,U=1,$=null,I=null;const R=new Wt(0,0,w,L),B=new Wt(0,0,w,L);let Z=!1;const j=new qa;let G=!1,tt=!1,K=null;const k=new Qt,V=new St,Q=new O,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return M===null?U:1}let q=e;function Et(T,z){for(let X=0;X<T.length;X++){const N=T[X],Y=t.getContext(N,z);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",At,!1),q===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),q=Et(z,T),q===null)throw Et(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ft,_t,ht,Ft,yt,xt,ae,te,ee,_e,Yt,Nt,We,Se,E,b,W,nt,it,at,vt,C,F,lt;function ut(){ft=new Fp(q),_t=new Ap(q,ft,o),ft.init(_t),C=new gg(q,ft,_t),ht=new pg(q,ft,_t),Ft=new zp,yt=new tg,xt=new mg(q,ft,ht,yt,_t,C,Ft),ae=new Pp(d),te=new Ip(d),ee=new Hh(q,_t),F=new Tp(q,ft,ee,_t),_e=new Op(q,ee,Ft,F),Yt=new Gp(q,_e,ee,Ft),it=new kp(q,_t,xt),b=new Cp(yt),Nt=new Qm(d,ae,te,ft,_t,F,b),We=new yg(d,yt),Se=new ng,E=new lg(ft,_t),nt=new wp(d,ae,te,ht,Yt,u,a),W=new dg(d,Yt,_t),lt=new Sg(q,Ft,_t,ht),at=new Ep(q,ft,Ft,_t),vt=new Np(q,ft,Ft,_t),Ft.programs=Nt.programs,d.capabilities=_t,d.extensions=ft,d.properties=yt,d.renderLists=Se,d.shadowMap=W,d.state=ht,d.info=Ft}ut();const ot=new Mg(d,q);this.xr=ot,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,z,X){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=z,t.width=Math.floor(T*U),t.height=Math.floor(z*U),X!==!1&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(w*U,L*U).floor()},this.setDrawingBufferSize=function(T,z,X){w=T,L=z,U=X,t.width=Math.floor(T*X),t.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,z,X,N){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,z,X,N),ht.viewport(A.copy(R).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,z,X,N){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,z,X,N),ht.scissor(P.copy(B).multiplyScalar(U).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){ht.setScissorTest(Z=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(T=!0,z=!0,X=!0){let N=0;T&&(N|=16384),z&&(N|=256),X&&(N|=1024),q.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",At,!1),Se.dispose(),E.dispose(),yt.dispose(),ae.dispose(),te.dispose(),Yt.dispose(),F.dispose(),lt.dispose(),Nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ct),ot.removeEventListener("sessionend",mt),K&&(K.dispose(),K=null),Ot.stop()};function pt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ft.autoReset,z=W.enabled,X=W.autoUpdate,N=W.needsUpdate,Y=W.type;ut(),Ft.autoReset=T,W.enabled=z,W.autoUpdate=X,W.needsUpdate=N,W.type=Y}function At(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){const z=T.target;z.removeEventListener("dispose",Pt),zt(z)}function zt(T){D(T),yt.remove(T)}function D(T){const z=yt.get(T).programs;z!==void 0&&(z.forEach(function(X){Nt.releaseProgram(X)}),T.isShaderMaterial&&Nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,N,Y,gt){z===null&&(z=J);const Mt=Y.isMesh&&Y.matrixWorld.determinant()<0,wt=bu(T,z,X,N,Y);ht.setMaterial(N,Mt);let Tt=X.index,It=1;N.wireframe===!0&&(Tt=_e.getWireframeAttribute(X),It=2);const Lt=X.drawRange,Dt=X.attributes.position;let Zt=Lt.start*It,Le=(Lt.start+Lt.count)*It;gt!==null&&(Zt=Math.max(Zt,gt.start*It),Le=Math.min(Le,(gt.start+gt.count)*It)),Tt!==null?(Zt=Math.max(Zt,0),Le=Math.min(Le,Tt.count)):Dt!=null&&(Zt=Math.max(Zt,0),Le=Math.min(Le,Dt.count));const mn=Le-Zt;if(mn<0||mn===1/0)return;F.setup(Y,N,wt,X,Tt);let Xn,$t=at;if(Tt!==null&&(Xn=ee.get(Tt),$t=vt,$t.setIndex(Xn)),Y.isMesh)N.wireframe===!0?(ht.setLineWidth(N.wireframeLinewidth*rt()),$t.setMode(1)):$t.setMode(4);else if(Y.isLine){let Rt=N.linewidth;Rt===void 0&&(Rt=1),ht.setLineWidth(Rt*rt()),Y.isLineSegments?$t.setMode(1):Y.isLineLoop?$t.setMode(2):$t.setMode(3)}else Y.isPoints?$t.setMode(0):Y.isSprite&&$t.setMode(4);if(Y.isInstancedMesh)$t.renderInstances(Zt,mn,Y.count);else if(X.isInstancedBufferGeometry){const Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Es=Math.min(X.instanceCount,Rt);$t.renderInstances(Zt,mn,Es)}else $t.render(Zt,mn)},this.compile=function(T,z){function X(N,Y,gt){N.transparent===!0&&N.side===Br?(N.side=Je,N.needsUpdate=!0,He(N,Y,gt),N.side=hi,N.needsUpdate=!0,He(N,Y,gt),N.side=Br):He(N,Y,gt)}h=E.get(T),h.init(),g.push(h),T.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(d.physicallyCorrectLights),T.traverse(function(N){const Y=N.material;if(Y)if(Array.isArray(Y))for(let gt=0;gt<Y.length;gt++){const Mt=Y[gt];X(Mt,T,N)}else X(Y,T,N)}),g.pop(),h=null};let H=null;function et(T){H&&H(T)}function ct(){Ot.stop()}function mt(){Ot.start()}const Ot=new dc;Ot.setAnimationLoop(et),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(T){H=T,ot.setAnimationLoop(T),T===null?Ot.stop():Ot.start()},ot.addEventListener("sessionstart",ct),ot.addEventListener("sessionend",mt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,z,M),h=E.get(T,g.length),h.init(),g.push(h),k.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(k),tt=this.localClippingEnabled,G=b.init(this.clippingPlanes,tt,z),f=Se.get(T,m.length),f.init(),m.push(f),oe(T,z,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort($,I),G===!0&&b.beginShadows();const X=h.state.shadowsArray;if(W.render(X,T,z),G===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(f,T),h.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const N=z.cameras;for(let Y=0,gt=N.length;Y<gt;Y++){const Mt=N[Y];fe(f,T,Mt,Mt.viewport)}}else fe(f,T,z);M!==null&&(xt.updateMultisampleRenderTarget(M),xt.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(d,T,z),F.resetDefaultState(),S=-1,v=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function oe(T,z,X,N){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){N&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const Mt=Yt.update(T),wt=T.material;wt.visible&&f.push(T,Mt,wt,X,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ft.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ft.render.frame),!T.frustumCulled||j.intersectsObject(T))){N&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const Mt=Yt.update(T),wt=T.material;if(Array.isArray(wt)){const Tt=Mt.groups;for(let It=0,Lt=Tt.length;It<Lt;It++){const Dt=Tt[It],Zt=wt[Dt.materialIndex];Zt&&Zt.visible&&f.push(T,Mt,Zt,X,Q.z,Dt)}}else wt.visible&&f.push(T,Mt,wt,X,Q.z,null)}}const gt=T.children;for(let Mt=0,wt=gt.length;Mt<wt;Mt++)oe(gt[Mt],z,X,N)}function fe(T,z,X,N){const Y=T.opaque,gt=T.transmissive,Mt=T.transparent;h.setupLightsView(X),gt.length>0&&Hn(Y,z,X),N&&ht.viewport(A.copy(N)),Y.length>0&&Vt(Y,z,X),gt.length>0&&Vt(gt,z,X),Mt.length>0&&Vt(Mt,z,X),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Hn(T,z,X){const N=_t.isWebGL2;K===null&&(K=new pi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?wr:fi,minFilter:br,samples:N&&r===!0?4:0})),d.getDrawingBufferSize(V),N?K.setSize(V.x,V.y):K.setSize(Ea(V.x),Ea(V.y));const Y=d.getRenderTarget();d.setRenderTarget(K),d.clear();const gt=d.toneMapping;d.toneMapping=En,Vt(T,z,X),d.toneMapping=gt,xt.updateMultisampleRenderTarget(K),xt.updateRenderTargetMipmap(K),d.setRenderTarget(Y)}function Vt(T,z,X){const N=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,gt=T.length;Y<gt;Y++){const Mt=T[Y],wt=Mt.object,Tt=Mt.geometry,It=N===null?Mt.material:N,Lt=Mt.group;wt.layers.test(X.layers)&&pn(wt,z,X,Tt,It,Lt)}}function pn(T,z,X,N,Y,gt){T.onBeforeRender(d,z,X,N,Y,gt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(d,z,X,N,T,gt),Y.transparent===!0&&Y.side===Br?(Y.side=Je,Y.needsUpdate=!0,d.renderBufferDirect(X,z,N,Y,T,gt),Y.side=hi,Y.needsUpdate=!0,d.renderBufferDirect(X,z,N,Y,T,gt),Y.side=Br):d.renderBufferDirect(X,z,N,Y,T,gt),T.onAfterRender(d,z,X,N,Y,gt)}function He(T,z,X){z.isScene!==!0&&(z=J);const N=yt.get(T),Y=h.state.lights,gt=h.state.shadowsArray,Mt=Y.state.version,wt=Nt.getParameters(T,Y.state,gt,z,X),Tt=Nt.getProgramCacheKey(wt);let It=N.programs;N.environment=T.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(T.isMeshStandardMaterial?te:ae).get(T.envMap||N.environment),It===void 0&&(T.addEventListener("dispose",Pt),It=new Map,N.programs=It);let Lt=It.get(Tt);if(Lt!==void 0){if(N.currentProgram===Lt&&N.lightsStateVersion===Mt)return fo(T,wt),Lt}else wt.uniforms=Nt.getUniforms(T),T.onBuild(X,wt,d),T.onBeforeCompile(wt,d),Lt=Nt.acquireProgram(wt,Tt),It.set(Tt,Lt),N.uniforms=wt.uniforms;const Dt=N.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=b.uniform),fo(T,wt),N.needsLights=Tu(T),N.lightsStateVersion=Mt,N.needsLights&&(Dt.ambientLightColor.value=Y.state.ambient,Dt.lightProbe.value=Y.state.probe,Dt.directionalLights.value=Y.state.directional,Dt.directionalLightShadows.value=Y.state.directionalShadow,Dt.spotLights.value=Y.state.spot,Dt.spotLightShadows.value=Y.state.spotShadow,Dt.rectAreaLights.value=Y.state.rectArea,Dt.ltc_1.value=Y.state.rectAreaLTC1,Dt.ltc_2.value=Y.state.rectAreaLTC2,Dt.pointLights.value=Y.state.point,Dt.pointLightShadows.value=Y.state.pointShadow,Dt.hemisphereLights.value=Y.state.hemi,Dt.directionalShadowMap.value=Y.state.directionalShadowMap,Dt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Dt.spotShadowMap.value=Y.state.spotShadowMap,Dt.spotLightMatrix.value=Y.state.spotLightMatrix,Dt.spotLightMap.value=Y.state.spotLightMap,Dt.pointShadowMap.value=Y.state.pointShadowMap,Dt.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Zt=Lt.getUniforms(),Le=ls.seqWithValue(Zt.seq,Dt);return N.currentProgram=Lt,N.uniformsList=Le,Lt}function fo(T,z){const X=yt.get(T);X.outputEncoding=z.outputEncoding,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function bu(T,z,X,N,Y){z.isScene!==!0&&(z=J),xt.resetTextureUnits();const gt=z.fog,Mt=N.isMeshStandardMaterial?z.environment:null,wt=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:di,Tt=(N.isMeshStandardMaterial?te:ae).get(N.envMap||Mt),It=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Lt=!!N.normalMap&&!!X.attributes.tangent,Dt=!!X.morphAttributes.position,Zt=!!X.morphAttributes.normal,Le=!!X.morphAttributes.color,mn=N.toneMapped?d.toneMapping:En,Xn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$t=Xn!==void 0?Xn.length:0,Rt=yt.get(N),Es=h.state.lights;if(G===!0&&(tt===!0||T!==v)){const De=T===v&&N.id===S;b.setState(N,T,De)}let le=!1;N.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Es.state.version||Rt.outputEncoding!==wt||Y.isInstancedMesh&&Rt.instancing===!1||!Y.isInstancedMesh&&Rt.instancing===!0||Y.isSkinnedMesh&&Rt.skinning===!1||!Y.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==Tt||N.fog===!0&&Rt.fog!==gt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==b.numPlanes||Rt.numIntersection!==b.numIntersection)||Rt.vertexAlphas!==It||Rt.vertexTangents!==Lt||Rt.morphTargets!==Dt||Rt.morphNormals!==Zt||Rt.morphColors!==Le||Rt.toneMapping!==mn||_t.isWebGL2===!0&&Rt.morphTargetsCount!==$t)&&(le=!0):(le=!0,Rt.__version=N.version);let qn=Rt.currentProgram;le===!0&&(qn=He(N,z,Y));let po=!1,ar=!1,As=!1;const xe=qn.getUniforms(),Yn=Rt.uniforms;if(ht.useProgram(qn.program)&&(po=!0,ar=!0,As=!0),N.id!==S&&(S=N.id,ar=!0),po||v!==T){if(xe.setValue(q,"projectionMatrix",T.projectionMatrix),_t.logarithmicDepthBuffer&&xe.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,ar=!0,As=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const De=xe.map.cameraPosition;De!==void 0&&De.setValue(q,Q.setFromMatrixPosition(T.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&xe.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Y.isSkinnedMesh)&&xe.setValue(q,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){xe.setOptional(q,Y,"bindMatrix"),xe.setOptional(q,Y,"bindMatrixInverse");const De=Y.skeleton;De&&(_t.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),xe.setValue(q,"boneTexture",De.boneTexture,xt),xe.setValue(q,"boneTextureSize",De.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cs=X.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&_t.isWebGL2===!0)&&it.update(Y,X,N,qn),(ar||Rt.receiveShadow!==Y.receiveShadow)&&(Rt.receiveShadow=Y.receiveShadow,xe.setValue(q,"receiveShadow",Y.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Yn.envMap.value=Tt,Yn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),ar&&(xe.setValue(q,"toneMappingExposure",d.toneMappingExposure),Rt.needsLights&&wu(Yn,As),gt&&N.fog===!0&&We.refreshFogUniforms(Yn,gt),We.refreshMaterialUniforms(Yn,N,U,L,K),ls.upload(q,Rt.uniformsList,Yn,xt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ls.upload(q,Rt.uniformsList,Yn,xt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&xe.setValue(q,"center",Y.center),xe.setValue(q,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(q,"normalMatrix",Y.normalMatrix),xe.setValue(q,"modelMatrix",Y.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const De=N.uniformsGroups;for(let Ps=0,Eu=De.length;Ps<Eu;Ps++)if(_t.isWebGL2){const mo=De[Ps];lt.update(mo,qn),lt.bind(mo,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function wu(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Tu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,z,X){yt.get(T.texture).__webglTexture=z,yt.get(T.depthTexture).__webglTexture=X;const N=yt.get(T);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const X=yt.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){M=T,_=z,y=X;let N=!0,Y=null,gt=!1,Mt=!1;if(T){const Tt=yt.get(T);Tt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),N=!1):Tt.__webglFramebuffer===void 0?xt.setupRenderTarget(T):Tt.__hasExternalTextures&&xt.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Mt=!0);const Lt=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Lt[z],gt=!0):_t.isWebGL2&&T.samples>0&&xt.useMultisampledRTT(T)===!1?Y=yt.get(T).__webglMultisampledFramebuffer:Y=Lt,A.copy(T.viewport),P.copy(T.scissor),x=T.scissorTest}else A.copy(R).multiplyScalar(U).floor(),P.copy(B).multiplyScalar(U).floor(),x=Z;if(ht.bindFramebuffer(36160,Y)&&_t.drawBuffers&&N&&ht.drawBuffers(T,Y),ht.viewport(A),ht.scissor(P),ht.setScissorTest(x),gt){const Tt=yt.get(T.texture);q.framebufferTexture2D(36160,36064,34069+z,Tt.__webglTexture,X)}else if(Mt){const Tt=yt.get(T.texture),It=z||0;q.framebufferTextureLayer(36160,36064,Tt.__webglTexture,X||0,It)}S=-1},this.readRenderTargetPixels=function(T,z,X,N,Y,gt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){ht.bindFramebuffer(36160,wt);try{const Tt=T.texture,It=Tt.format,Lt=Tt.type;if(It!==sn&&C.convert(It)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Lt===wr&&(ft.has("EXT_color_buffer_half_float")||_t.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Lt!==fi&&C.convert(Lt)!==q.getParameter(35738)&&!(Lt===ri&&(_t.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-N&&X>=0&&X<=T.height-Y&&q.readPixels(z,X,N,Y,C.convert(It),C.convert(Lt),gt)}finally{const Tt=M!==null?yt.get(M).__webglFramebuffer:null;ht.bindFramebuffer(36160,Tt)}}},this.copyFramebufferToTexture=function(T,z,X=0){const N=Math.pow(2,-X),Y=Math.floor(z.image.width*N),gt=Math.floor(z.image.height*N);xt.setTexture2D(z,0),q.copyTexSubImage2D(3553,X,0,0,T.x,T.y,Y,gt),ht.unbindTexture()},this.copyTextureToTexture=function(T,z,X,N=0){const Y=z.image.width,gt=z.image.height,Mt=C.convert(X.format),wt=C.convert(X.type);xt.setTexture2D(X,0),q.pixelStorei(37440,X.flipY),q.pixelStorei(37441,X.premultiplyAlpha),q.pixelStorei(3317,X.unpackAlignment),z.isDataTexture?q.texSubImage2D(3553,N,T.x,T.y,Y,gt,Mt,wt,z.image.data):z.isCompressedTexture?q.compressedTexSubImage2D(3553,N,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Mt,z.mipmaps[0].data):q.texSubImage2D(3553,N,T.x,T.y,Mt,wt,z.image),N===0&&X.generateMipmaps&&q.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X,N,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=T.max.x-T.min.x+1,Mt=T.max.y-T.min.y+1,wt=T.max.z-T.min.z+1,Tt=C.convert(N.format),It=C.convert(N.type);let Lt;if(N.isData3DTexture)xt.setTexture3D(N,0),Lt=32879;else if(N.isDataArrayTexture)xt.setTexture2DArray(N,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,N.flipY),q.pixelStorei(37441,N.premultiplyAlpha),q.pixelStorei(3317,N.unpackAlignment);const Dt=q.getParameter(3314),Zt=q.getParameter(32878),Le=q.getParameter(3316),mn=q.getParameter(3315),Xn=q.getParameter(32877),$t=X.isCompressedTexture?X.mipmaps[0]:X.image;q.pixelStorei(3314,$t.width),q.pixelStorei(32878,$t.height),q.pixelStorei(3316,T.min.x),q.pixelStorei(3315,T.min.y),q.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?q.texSubImage3D(Lt,Y,z.x,z.y,z.z,gt,Mt,wt,Tt,It,$t.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Lt,Y,z.x,z.y,z.z,gt,Mt,wt,Tt,$t.data)):q.texSubImage3D(Lt,Y,z.x,z.y,z.z,gt,Mt,wt,Tt,It,$t),q.pixelStorei(3314,Dt),q.pixelStorei(32878,Zt),q.pixelStorei(3316,Le),q.pixelStorei(3315,mn),q.pixelStorei(32877,Xn),Y===0&&N.generateMipmaps&&q.generateMipmap(Lt),ht.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xt.setTextureCube(T,0):T.isData3DTexture?xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xt.setTexture2DArray(T,0):xt.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){_=0,y=0,M=null,ht.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class wg extends xc{}wg.prototype.isWebGL1Renderer=!0;class Tg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Za extends Vn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],f=new O,h=new O,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const y=[],M=_/n;let S=0;_==0&&a==0?S=.5/e:_==n&&l==Math.PI&&(S=-.5/e);for(let v=0;v<=e;v++){const A=v/e;f.x=-t*Math.cos(i+A*r)*Math.sin(a+M*s),f.y=t*Math.cos(a+M*s),f.z=t*Math.sin(i+A*r)*Math.sin(a+M*s),g.push(f.x,f.y,f.z),h.copy(f).normalize(),d.push(h.x,h.y,h.z),p.push(A+S,1-M),y.push(c++)}u.push(y)}for(let _=0;_<n;_++)for(let y=0;y<e;y++){const M=u[_][y+1],S=u[_][y],v=u[_+1][y],A=u[_+1][y+1];(_!==0||a>0)&&m.push(M,S,A),(_!==n-1||l<Math.PI)&&m.push(S,v,A)}this.setIndex(m),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(p,2))}static fromJSON(t){return new Za(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Eg extends Or{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ag extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const la=new Qt,El=new O,Al=new O;class Cg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;El.setFromMatrixPosition(t.matrixWorld),e.position.copy(El),Al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Al),e.updateMatrixWorld(),la.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cl=new Qt,pr=new O,ca=new O;class Pg extends Cg{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(pr),ca.copy(n.position),ca.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ca),n.updateMatrixWorld(),i.makeTranslation(-pr.x,-pr.y,-pr.z),Cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}class Lg extends Ag{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const Ll={type:"change"},ua={type:"start"},Dl={type:"end"};class Dg extends xi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Se),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ll),n.update(),r=i.NONE},this.update=function(){const C=new O,F=new mi().setFromUnitVectors(t.up,new O(0,1,0)),lt=F.clone().invert(),ut=new O,ot=new mi,pt=2*Math.PI;return function(){const At=n.object.position;C.copy(At).sub(n.target),C.applyQuaternion(F),s.setFromVector3(C),n.autoRotate&&r===i.NONE&&w(P()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Pt=n.minAzimuthAngle,zt=n.maxAzimuthAngle;return isFinite(Pt)&&isFinite(zt)&&(Pt<-Math.PI?Pt+=pt:Pt>Math.PI&&(Pt-=pt),zt<-Math.PI?zt+=pt:zt>Math.PI&&(zt-=pt),Pt<=zt?s.theta=Math.max(Pt,Math.min(zt,s.theta)):s.theta=s.theta>(Pt+zt)/2?Math.max(Pt,s.theta):Math.min(zt,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(s),C.applyQuaternion(lt),At.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ut.distanceToSquared(n.object.position)>a||8*(1-ot.dot(n.object.quaternion))>a?(n.dispatchEvent(Ll),ut.copy(n.object.position),ot.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",ae),n.domElement.removeEventListener("pointercancel",_e),n.domElement.removeEventListener("wheel",We),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",ee),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Se)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Pl,l=new Pl;let c=1;const u=new O;let f=!1;const h=new St,m=new St,g=new St,d=new St,p=new St,_=new St,y=new St,M=new St,S=new St,v=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function w(C){l.theta-=C}function L(C){l.phi-=C}const U=function(){const C=new O;return function(lt,ut){C.setFromMatrixColumn(ut,0),C.multiplyScalar(-lt),u.add(C)}}(),$=function(){const C=new O;return function(lt,ut){n.screenSpacePanning===!0?C.setFromMatrixColumn(ut,1):(C.setFromMatrixColumn(ut,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(lt),u.add(C)}}(),I=function(){const C=new O;return function(lt,ut){const ot=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;C.copy(pt).sub(n.target);let dt=C.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),U(2*lt*dt/ot.clientHeight,n.object.matrix),$(2*ut*dt/ot.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(lt*(n.object.right-n.object.left)/n.object.zoom/ot.clientWidth,n.object.matrix),$(ut*(n.object.top-n.object.bottom)/n.object.zoom/ot.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(C){h.set(C.clientX,C.clientY)}function j(C){y.set(C.clientX,C.clientY)}function G(C){d.set(C.clientX,C.clientY)}function tt(C){m.set(C.clientX,C.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;w(2*Math.PI*g.x/F.clientHeight),L(2*Math.PI*g.y/F.clientHeight),h.copy(m),n.update()}function K(C){M.set(C.clientX,C.clientY),S.subVectors(M,y),S.y>0?R(x()):S.y<0&&B(x()),y.copy(M),n.update()}function k(C){p.set(C.clientX,C.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(p),n.update()}function V(C){C.deltaY<0?B(x()):C.deltaY>0&&R(x()),n.update()}function Q(C){let F=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),F=!0;break}F&&(C.preventDefault(),n.update())}function J(){if(v.length===1)h.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),F=.5*(v[0].pageY+v[1].pageY);h.set(C,F)}}function rt(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const C=.5*(v[0].pageX+v[1].pageX),F=.5*(v[0].pageY+v[1].pageY);d.set(C,F)}}function q(){const C=v[0].pageX-v[1].pageX,F=v[0].pageY-v[1].pageY,lt=Math.sqrt(C*C+F*F);y.set(0,lt)}function Et(){n.enableZoom&&q(),n.enablePan&&rt()}function ft(){n.enableZoom&&q(),n.enableRotate&&J()}function _t(C){if(v.length==1)m.set(C.pageX,C.pageY);else{const lt=vt(C),ut=.5*(C.pageX+lt.x),ot=.5*(C.pageY+lt.y);m.set(ut,ot)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;w(2*Math.PI*g.x/F.clientHeight),L(2*Math.PI*g.y/F.clientHeight),h.copy(m)}function ht(C){if(v.length===1)p.set(C.pageX,C.pageY);else{const F=vt(C),lt=.5*(C.pageX+F.x),ut=.5*(C.pageY+F.y);p.set(lt,ut)}_.subVectors(p,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(p)}function Ft(C){const F=vt(C),lt=C.pageX-F.x,ut=C.pageY-F.y,ot=Math.sqrt(lt*lt+ut*ut);M.set(0,ot),S.set(0,Math.pow(M.y/y.y,n.zoomSpeed)),R(S.y),y.copy(M)}function yt(C){n.enableZoom&&Ft(C),n.enablePan&&ht(C)}function xt(C){n.enableZoom&&Ft(C),n.enableRotate&&_t(C)}function ae(C){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",ee)),nt(C),C.pointerType==="touch"?E(C):Yt(C))}function te(C){n.enabled!==!1&&(C.pointerType==="touch"?b(C):Nt(C))}function ee(C){it(C),v.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",ee)),n.dispatchEvent(Dl),r=i.NONE}function _e(C){it(C)}function Yt(C){let F;switch(C.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Mi.DOLLY:if(n.enableZoom===!1)return;j(C),r=i.DOLLY;break;case Mi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;G(C),r=i.PAN}else{if(n.enableRotate===!1)return;Z(C),r=i.ROTATE}break;case Mi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Z(C),r=i.ROTATE}else{if(n.enablePan===!1)return;G(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ua)}function Nt(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;tt(C);break;case i.DOLLY:if(n.enableZoom===!1)return;K(C);break;case i.PAN:if(n.enablePan===!1)return;k(C);break}}function We(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(ua),V(C),n.dispatchEvent(Dl))}function Se(C){n.enabled===!1||n.enablePan===!1||Q(C)}function E(C){switch(at(C),v.length){case 1:switch(n.touches.ONE){case yi.ROTATE:if(n.enableRotate===!1)return;J(),r=i.TOUCH_ROTATE;break;case yi.PAN:if(n.enablePan===!1)return;rt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Et(),r=i.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ua)}function b(C){switch(at(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_t(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ht(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(C),n.update();break;default:r=i.NONE}}function W(C){n.enabled!==!1&&C.preventDefault()}function nt(C){v.push(C)}function it(C){delete A[C.pointerId];for(let F=0;F<v.length;F++)if(v[F].pointerId==C.pointerId){v.splice(F,1);return}}function at(C){let F=A[C.pointerId];F===void 0&&(F=new St,A[C.pointerId]=F),F.set(C.pageX,C.pageY)}function vt(C){const F=C.pointerId===v[0].pointerId?v[1]:v[0];return A[F.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",ae),n.domElement.addEventListener("pointercancel",_e),n.domElement.addEventListener("wheel",We,{passive:!1}),this.update()}}function yn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$i={duration:.5,overwrite:!1,delay:0},$a,me,Jt,Ze=1e8,Bt=1/Ze,Ca=Math.PI*2,Rg=Ca/4,Ig=0,Mc=Math.sqrt,Fg=Math.cos,Og=Math.sin,ue=function(t){return typeof t=="string"},qt=function(t){return typeof t=="function"},An=function(t){return typeof t=="number"},Ka=function(t){return typeof t>"u"},dn=function(t){return typeof t=="object"},Ae=function(t){return t!==!1},yc=function(){return typeof window<"u"},as=function(t){return qt(t)||ue(t)},Sc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ge=Array.isArray,Pa=/(?:-?\.?\d|\.)+/gi,bc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ha=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wc=/[+-]=-?[.\d]+/,Tc=/[^,'"\[\]\s]+/gi,Ng=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,Ye,La,Ja,Ge={},ds={},Ec,Ac=function(t){return(ds=_i(t,Ge))&&Ve},Qa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ps=function(t,e){return!e&&console.warn(t)},Cc=function(t,e){return t&&(Ge[t]=e)&&ds&&(ds[t]=e)||Ge},Er=function(){return 0},zg={suppressEvents:!0,isStart:!0,kill:!1},cs={suppressEvents:!0,kill:!1},Ug={suppressEvents:!0},to={},zn=[],Da={},Pc,Oe={},fa={},Rl=30,us=[],eo="",no=function(t){var e=t[0],n,i;if(dn(e)||qt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=us.length;i--&&!us[i].targetTest(e););n=us[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Kc(t[i],n)))||t.splice(i,1);return t},li=function(t){return t._gsap||no($e(t))[0]._gsap},Lc=function(t,e,n){return(n=t[e])&&qt(n)?t[e]():Ka(n)&&t.getAttribute&&t.getAttribute(e)||n},Ce=function(t,e){return(t=t.split(",")).forEach(e)||t},jt=function(t){return Math.round(t*1e5)/1e5||0},he=function(t){return Math.round(t*1e7)/1e7||0},Wi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Bg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ms=function(){var t=zn.length,e=zn.slice(0),n,i;for(Da={},zn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dc=function(t,e,n,i){zn.length&&!me&&ms(),t.render(e,n,i||me&&e<0&&(t._initted||t._startAt)),zn.length&&!me&&ms()},Rc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Tc).length<2?e:ue(t)?t.trim():t},Ic=function(t){return t},Qe=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},kg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},_i=function(t,e){for(var n in e)t[n]=e[n];return t},Il=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=dn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},gs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Mr=function(t){var e=t.parent||Ht,n=t.keyframes?kg(ge(t.keyframes)):Qe;if(Ae(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Gg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Fc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},bs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Bn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},ci=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Vg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ra=function(t,e,n,i){return t._startAt&&(me?t._startAt.revert(cs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Wg=function o(t){return!t||t._ts&&o(t.parent)},Fl=function(t){return t._repeat?Ki(t._tTime,t=t.duration()+t._rDelay)*t:0},Ki=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},_s=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ws=function(t){return t._end=he(t._start+(t._tDur/Math.abs(t._ts||t._rts||Bt)||0))},Ts=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=he(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ws(t),n._dirty||ci(n,t)),t},Oc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=_s(t.rawTime(),e),(!e._dur||zr(0,e.totalDuration(),n)-e._tTime>Bt)&&e.render(n,!0)),ci(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Bt}},cn=function(t,e,n,i){return e.parent&&Bn(e),e._start=he((An(n)?n:n||t!==Ht?qe(t,n,e):t._time)+e._delay),e._end=he(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Fc(t,e,"_first","_last",t._sort?"_start":0),Ia(e)||(t._recent=e),i||Oc(t,e),t._ts<0&&Ts(t,t._tTime),t},Nc=function(t,e){return(Ge.ScrollTrigger||Qa("scrollTrigger",e))&&Ge.ScrollTrigger.create(e,t)},zc=function(t,e,n,i,r){if(ro(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!me&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Pc!==ze.frame)return zn.push(t),t._lazy=[r,i],1},Hg=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Ia=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Xg=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Hg(t)&&!(!t._initted&&Ia(t))||(t._ts<0||t._dp._ts<0)&&!Ia(t))?0:1,s=t._rDelay,l=0,c,u,f;if(s&&t._repeat&&(l=zr(0,t._tDur,e),u=Ki(l,s),t._yoyo&&u&1&&(a=1-a),u!==Ki(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||me||i||t._zTime===Bt||!e&&t._zTime){if(!t._initted&&zc(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Bt:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Ra(t,e,n,!0),t._onUpdate&&!n&&Ke(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ke(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Bn(t,1),!n&&!me&&(Ke(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ji=function(t,e,n,i){var r=t._repeat,a=he(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:he(a*(r+1)+t._rDelay*r):a,s>0&&!i&&Ts(t,t._tTime=t._tDur*s),t.parent&&ws(t),n||ci(t.parent,t),t},Ol=function(t){return t instanceof Te?ci(t):Ji(t,t._dur)},Yg={_start:0,endTime:Er,totalDuration:Er},qe=function o(t,e,n){var i=t.labels,r=t._recent||Yg,a=t.duration()>=Ze?r.endTime(!1):t._dur,s,l,c;return ue(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",s=e.indexOf("="),l==="<"||l===">"?(s>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(s-1)+e.substr(s+1)),c&&n&&(l=l/100*(ge(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+l:a+l)):e==null?a:+e},yr=function(t,e,n){var i=An(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Ae(l.vars.inherit)&&l.parent;a.immediateRender=Ae(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new ie(e[0],a,e[r+1])},Wn=function(t,e){return t||t===0?e(t):e},zr=function(t,e,n){return n<t?t:n>e?e:n},pe=function(t,e){return!ue(t)||!(e=Ng.exec(t))?"":e[1]},jg=function(t,e,n){return Wn(n,function(i){return zr(t,e,i)})},Fa=[].slice,Uc=function(t,e){return t&&dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&dn(t[0]))&&!t.nodeType&&t!==Ye},Zg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ue(i)&&!e||Uc(i,1)?(r=n).push.apply(r,$e(i)):n.push(i)})||n},$e=function(t,e,n){return Jt&&!e&&Jt.selector?Jt.selector(t):ue(t)&&!n&&(La||!Qi())?Fa.call((e||Ja).querySelectorAll(t),0):ge(t)?Zg(t,n):Uc(t)?Fa.call(t,0):t?[t]:[]},Oa=function(t){return t=$e(t)[0]||ps("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return $e(e,n.querySelectorAll?n:n===t?ps("Invalid scope")||Ja.createElement("div"):t)}},Bc=function(t){return t.sort(function(){return .5-Math.random()})},kc=function(t){if(qt(t))return t;var e=dn(t)?t:{each:t},n=ui(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=e.axis,u=i,f=i;return ue(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],f=i[1]),function(h,m,g){var d=(g||e).length,p=a[d],_,y,M,S,v,A,P,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Ze])[1],!w){for(P=-Ze;P<(P=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=a[d]=[],_=l?Math.min(w,d)*u-.5:i%w,y=w===Ze?0:l?d*f/w-.5:i/w|0,P=0,x=Ze,A=0;A<d;A++)M=A%w-_,S=y-(A/w|0),p[A]=v=c?Math.abs(c==="y"?S:M):Mc(M*M+S*S),v>P&&(P=v),v<x&&(x=v);i==="random"&&Bc(p),p.max=P-x,p.min=x,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=pe(e.amount||e.each)||0,n=n&&d<0?jc(n):n}return d=(p[h]-p.min)/p.max||0,he(p.b+(n?n(d):d)*p.v)+p.u}},Na=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=he(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(An(n)?0:pe(n))}},Gc=function(t,e){var n=ge(t),i,r;return!n&&dn(t)&&(i=n=t.radius||Ze,t.values?(t=$e(t.values),(r=!An(t[0]))&&(i*=i)):t=Na(t.increment)),Wn(e,n?qt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ze,u=0,f=t.length,h,m;f--;)r?(h=t[f].x-s,m=t[f].y-l,h=h*h+m*m):h=Math.abs(t[f]-s),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:a,r||u===a||An(a)?u:u+pe(a)}:Na(t))},Vc=function(t,e,n,i){return Wn(ge(t)?!e:n===!0?!!(n=0):!i,function(){return ge(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},$g=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Kg=function(t,e){return function(n){return t(parseFloat(n))+(e||pe(n))}},Jg=function(t,e,n){return Hc(t,e,0,1,n)},Wc=function(t,e,n){return Wn(n,function(i){return t[~~e(i)]})},Qg=function o(t,e,n){var i=e-t;return ge(t)?Wc(t,o(0,t.length),e):Wn(n,function(r){return(i+(r-t)%i)%i+t})},t_=function o(t,e,n){var i=e-t,r=i*2;return ge(t)?Wc(t,o(0,t.length-1),e):Wn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Ar=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?Tc:Pa),n+=t.substr(e,i-e)+Vc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Hc=function(t,e,n,i,r){var a=e-t,s=i-n;return Wn(r,function(l){return n+((l-t)/a*s||0)})},e_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ue(t),s={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ge(t)&&!ge(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(o(t[c-1],t[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=e}else i||(t=_i(ge(t)?[]:{},t));if(!u){for(l in e)io.call(s,t,l,"get",e[l]);r=function(g){return oo(g,s)||(a?t.p:t)}}}return Wn(n,r)},Nl=function(t,e,n){var i=t.labels,r=Ze,a,s,l;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Ke=function(t,e,n){var i=t.vars,r=i[e],a=Jt,s=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&zn.length&&ms(),s&&(Jt=s),u=l?r.apply(c,l):r.call(c),Jt=a,u},xr=function(t){return Bn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!me),t.progress()<1&&Ke(t,"onInterrupt"),t},ki,n_=function(t){t=!t.name&&t.default||t;var e=t.name,n=qt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Er,render:oo,add:io,kill:x_,modifier:__,rawVars:0},a={targetTest:0,get:0,getSetter:ao,aliases:{},register:0};if(Qi(),t!==i){if(Oe[e])return;Qe(i,Qe(gs(t,r),a)),_i(i.prototype,_i(r,gs(t,a))),Oe[i.prop=e]=i,t.targetTest&&(us.push(i),to[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Cc(e,i),t.register&&t.register(Ve,i,Pe)},Ut=255,vr={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},da=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ut+.5|0},Xc=function(t,e,n){var i=t?An(t)?[t>>16,t>>8&Ut,t&Ut]:0:vr.black,r,a,s,l,c,u,f,h,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),vr[t])i=vr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ut,t&Ut]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Pa),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=da(l+1/3,r,a),i[1]=da(l,r,a),i[2]=da(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(bc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Pa)||vr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Ut,a=i[1]/Ut,s=i[2]/Ut,f=Math.max(r,a,s),h=Math.min(r,a,s),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===r?(a-s)/m+(a<s?6:0):f===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qc=function(t){var e=[],n=[],i=-1;return t.split(Un).forEach(function(r){var a=r.match(Bi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},zl=function(t,e,n){var i="",r=(t+i).match(Un),a=e?"hsla(":"rgba(",s=0,l,c,u,f;if(!r)return t;if(r=r.map(function(h){return(h=Xc(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=qc(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Un,"1").split(Bi),f=c.length-1;s<f;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Un),f=c.length-1;s<f;s++)i+=c[s]+r[s];return i+c[f]},Un=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in vr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),i_=/hsl[a]?\(/,Yc=function(t){var e=t.join(" "),n;if(Un.lastIndex=0,Un.test(e))return n=i_.test(e),t[1]=zl(t[1],n),t[0]=zl(t[0],n,qc(t[1])),!0},Cr,ze=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,f,h,m,g=function d(p){var _=o()-i,y=p===!0,M,S,v,A;if(_>t&&(n+=_-e),i+=_,v=i-n,M=v-a,(M>0||y)&&(A=++f.frame,h=v-f.time*1e3,f.time=v=v/1e3,a+=M+(M>=r?4:r-M),S=1),y||(l=c(d)),S)for(m=0;m<s.length;m++)s[m](v,h,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Ec&&(!La&&yc()&&(Ye=La=window,Ja=Ye.document||{},Ge.gsap=Ve,(Ye.gsapVersions||(Ye.gsapVersions=[])).push(Ve.version),Ac(ds||Ye.GreenSockGlobals||!Ye.gsap&&Ye||{}),u=Ye.requestAnimationFrame),l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Cr=1,g(2))},sleep:function(){(u?Ye.cancelAnimationFrame:clearTimeout)(l),Cr=0,c=Er},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,_,y){var M=_?function(S,v,A,P){p(S,v,A,P),f.remove(M)}:p;return f.remove(p),s[y?"unshift":"push"](M),Qi(),M},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},f}(),Qi=function(){return!Cr&&ze.wake()},Ct={},r_=/^[\d.\-M][\d.\-,\s]/,s_=/["']/g,a_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),e[i]=isNaN(c)?c.replace(s_,"").trim():+c,i=l.substr(s+1).trim();return e},o_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},l_=function(t){var e=(t+"").split("("),n=Ct[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[a_(e[1])]:o_(t).split(",").map(Rc)):Ct._CE&&r_.test(t)?Ct._CE("",t):n},jc=function(t){return function(e){return 1-t(1-e)}},Zc=function o(t,e){for(var n=t._first,i;n;)n instanceof Te?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ui=function(t,e){return t&&(qt(t)?t:Ct[t]||l_(t))||e},vi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ce(t,function(s){Ct[s]=Ge[s]=r,Ct[a=s.toLowerCase()]=n;for(var l in r)Ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ct[s+"."+l]=r[l]}),r},$c=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pa=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Ca*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Og((u-a)*r)+1},l=t==="out"?s:t==="in"?function(c){return 1-s(1-c)}:$c(s);return r=Ca/r,l.config=function(c,u){return o(t,c,u)},l},ma=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:$c(n);return i.config=function(r){return o(t,r)},i};Ce("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;vi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;vi("Elastic",pa("in"),pa("out"),pa());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};vi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);vi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});vi("Circ",function(o){return-(Mc(1-o*o)-1)});vi("Sine",function(o){return o===1?1:-Fg(o*Rg)+1});vi("Back",ma("in"),ma("out"),ma());Ct.SteppedEase=Ct.steps=Ge.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Bt;return function(s){return((i*zr(0,a,s)|0)+r)*n}}};$i.ease=Ct["quad.out"];Ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return eo+=o+","+o+"Params,"});var Kc=function(t,e){this.id=Ig++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Lc,this.set=e?e.getSetter:ao},tr=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ji(this,+e.duration,1,1),this.data=e.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Cr||ze.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ji(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qi(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ts(this,n),!r._dp||r.parent||Oc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&cn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ki(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?_s(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(zr(-this._delay,this._tDur,i),!0),ws(this),Vg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&cn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ae(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_s(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ug);var i=me;return me=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),me=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ol(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ol(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(qe(this,n),Ae(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ae(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Bt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=qt(n)?n:Ic,s=function(){var c=i.then;i.then=null,qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){xr(this)},o}();Qe(tr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var Te=function(o){vc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ae(n.sortChildren),Ht&&cn(n.parent||Ht,yn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Nc(yn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return yr(0,arguments,this),this},e.from=function(i,r,a){return yr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return yr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Mr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ie(i,r,qe(this,a),1),this},e.call=function(i,r,a){return cn(this,ie.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ie(i,a,qe(this,l)),this},e.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Mr(a).immediateRender=Ae(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},e.staggerFromTo=function(i,r,a,s,l,c,u,f){return s.startAt=a,Mr(s).immediateRender=Ae(s.immediateRender),this.staggerTo(i,r,s,l,c,u,f)},e.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:he(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,d,p,_,y,M,S,v,A,P;if(this!==Ht&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),h=u,S=this._start,M=this._ts,_=!M,f&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(h=he(u%p),u===l?(d=this._repeat,h=c):(d=~~(u/p),d&&d===u/p&&(h=c,d--),h>c&&(h=c)),v=Ki(this._tTime,p),!s&&this._tTime&&v!==d&&(v=d),A&&d&1&&(h=c-h,P=1),d!==v&&!this._lock){var x=A&&v&1,w=x===(A&&d&1);if(d<v&&(x=!x),s=x?0:c,this._lock=1,this.render(s||(P?0:he(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ke(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Zc(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=qg(this,he(s),he(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&h&&!r&&(Ke(this,"onStart"),this._tTime!==u))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,a),h!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-Bt);break}}m=g}else{m=this._last;for(var L=i<0?i:h;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||me&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=L?-Bt:Bt);break}}m=g}}if(y&&!r&&(this.pause(),y.render(h>=s?0:-Bt)._zTime=h>=s?1:-1,this._ts))return this._start=S,ws(this),this.render(i,r,a);this._onUpdate&&!r&&Ke(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Bn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Ke(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(An(r)||(r=qe(this,r,i)),!(i instanceof tr)){if(ge(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ue(i))return this.addLabel(i,r);if(qt(i))i=ie.delayedCall(0,i);else return this}return this!==i?cn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Ze);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof ie?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ue(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(bs(this,i),i===this._recent&&(this._recent=this._last),ci(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=he(ze.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=qe(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=ie.delayedCall(0,r||Er,a);return s.data="isPause",this._hasPause=1,cn(this,s,qe(this,i))},e.removePause=function(i){var r=this._first;for(i=qe(this,i);r;)r._start===i&&r.data==="isPause"&&Bn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)In!==s[l]&&s[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=$e(i),l=this._first,c=An(r),u;l;)l instanceof ie?Bg(l._targets,s)&&(c?(!In||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=qe(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,g=ie.to(a,Qe({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Bt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ji(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Qe({startAt:{time:qe(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nl(this,qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nl(this,qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Bt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ci(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ci(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,l=Ze,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,cn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Ji(a,a===Ht&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ht._ts&&(Dc(Ht,_s(i,Ht)),Pc=ze.frame),ze.frame>=Rl){Rl+=ke.autoSleep||120;var r=Ht._first;if((!r||!r._ts)&&ke.autoSleep&&ze._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ze.sleep()}}},t}(tr);Qe(Te.prototype,{_lock:0,_hasPause:0,_forcing:0});var c_=function(t,e,n,i,r,a,s){var l=new Pe(this._pt,t,e,0,1,iu,null,r),c=0,u=0,f,h,m,g,d,p,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ar(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),h=n.match(ha)||[];f=ha.exec(i);)g=f[0],d=i.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Wi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ha.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(wc.test(i)||_)&&(l.e=0),this._pt=l,l},io=function(t,e,n,i,r,a,s,l,c,u){qt(i)&&(i=i(r||0,t,a));var f=t[e],h=n!=="get"?n:qt(f)?c?t[e.indexOf("set")||!qt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,m=qt(f)?c?p_:eu:so,g;if(ue(i)&&(~i.indexOf("random(")&&(i=Ar(i)),i.charAt(1)==="="&&(g=Wi(h,i)+(pe(h)||0),(g||g===0)&&(i=g))),!u||h!==i||za)return!isNaN(h*i)&&i!==""?(g=new Pe(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?g_:nu,0,m),c&&(g.fp=c),s&&g.modifier(s,this,t),this._pt=g):(!f&&!(e in t)&&Qa(e,i),c_.call(this,t,e,h,i,m,l||ke.stringFilter,c))},u_=function(t,e,n,i,r){if(qt(t)&&(t=Sr(t,r,e,n,i)),!dn(t)||t.style&&t.nodeType||ge(t)||Sc(t))return ue(t)?Sr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=Sr(t[s],r,e,n,i);return a},Jc=function(t,e,n,i,r,a){var s,l,c,u;if(Oe[t]&&(s=new Oe[t]).init(r,s.rawVars?e[t]:u_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Pe(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==ki))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},In,za,ro=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,y=t._targets,M=t.parent,S=M&&M.data==="nested"?M.vars.targets:y,v=t._overwrite==="auto"&&!$a,A=t.timeline,P,x,w,L,U,$,I,R,B,Z,j,G,tt;if(A&&(!g||!r)&&(r="none"),t._ease=ui(r,$i.ease),t._yEase=m?jc(ui(m===!0?r:m,$i.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(R=y[0]?li(y[0]).harness:0,G=R&&i[R.prop],P=gs(i,to),_&&(_._zTime<0&&_.progress(1),e<0&&h&&s&&!d?_.render(-1,!0):_.revert(h&&p?cs:zg),_._lazy=0),a){if(Bn(t._startAt=ie.set(y,Qe({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!_&&Ae(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(me||!s&&!d)&&t._startAt.revert(cs),s&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(s=!1),w=Qe({overwrite:!1,data:"isFromStart",lazy:s&&!_&&Ae(l),immediateRender:s,stagger:0,parent:M},P),G&&(w[R.prop]=G),Bn(t._startAt=ie.set(y,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(me?t._startAt.revert(cs):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,Bt,Bt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Ae(l)||l&&!p,x=0;x<y.length;x++){if(U=y[x],I=U._gsap||no(y)[x]._gsap,t._ptLookup[x]=Z={},Da[I.id]&&zn.length&&ms(),j=S===y?x:S.indexOf(U),R&&(B=new R).init(U,G||P,t,j,S)!==!1&&(t._pt=L=new Pe(t._pt,U,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(K){Z[K]=L}),B.priority&&($=1)),!R||G)for(w in P)Oe[w]&&(B=Jc(w,P,t,j,U,S))?B.priority&&($=1):Z[w]=L=io.call(t,U,w,"get",P[w],j,S,0,i.stringFilter);t._op&&t._op[x]&&t.kill(U,t._op[x]),v&&t._pt&&(In=t,Ht.killTweensOf(U,Z,t.globalTime(e)),tt=!t.parent,In=0),t._pt&&l&&(Da[I.id]=1)}$&&ru(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,g&&e<=0&&A.render(Ze,!0,!0)},h_=function(t,e,n,i,r,a,s){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,f,h;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,h=t._targets.length;h--;){if(c=f[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return za=1,t.vars[e]="+=0",ro(t,s),za=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=jt(n)+pe(u.e)),u.b&&(u.b=c.s+pe(u.b))},f_=function(t,e){var n=t[0]?li(t[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return e;r=_i({},e);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},d_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(ge(e))s=n[t]||(n[t]=[]),e.forEach(function(l,c){return s.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},Sr=function(t,e,n,i,r){return qt(t)?t.call(e,n,i,r):ue(t)&&~t.indexOf("random(")?Ar(t):t},Qc=eo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tu={};Ce(Qc+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return tu[o]=1});var ie=function(o){vc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Mr(i))||this;var l=s.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,y=i.parent||Ht,M=(ge(n)||Sc(n)?An(n[0]):"length"in i)?[n]:$e(n),S,v,A,P,x,w,L,U;if(s._targets=M.length?no(M):ps("GSAP target "+n+" not found. https://greensock.com",!ke.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||h||as(c)||as(u)){if(i=s.vars,S=s.timeline=new Te({data:"nested",defaults:d||{},targets:y&&y.data==="nested"?y.vars.targets:M}),S.kill(),S.parent=S._dp=yn(s),S._start=0,h||as(c)||as(u)){if(P=M.length,L=h&&kc(h),dn(h))for(x in h)~Qc.indexOf(x)&&(U||(U={}),U[x]=h[x]);for(v=0;v<P;v++)A=gs(i,tu),A.stagger=0,_&&(A.yoyoEase=_),U&&_i(A,U),w=M[v],A.duration=+Sr(c,yn(s),v,w,M),A.delay=(+Sr(u,yn(s),v,w,M)||0)-s._delay,!h&&P===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),S.to(w,A,L?L(v,w,M):0),S._ease=Ct.none;S.duration()?c=u=0:s.timeline=0}else if(g){Mr(Qe(S.vars.defaults,{ease:"none"})),S._ease=ui(g.ease||i.ease||"none");var $=0,I,R,B;if(ge(g))g.forEach(function(Z){return S.to(M,Z,">")}),S.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||d_(x,g[x],A,g.easeEach);for(x in A)for(I=A[x].sort(function(Z,j){return Z.t-j.t}),$=0,v=0;v<I.length;v++)R=I[v],B={ease:R.e,duration:(R.t-(v?I[v-1].t:0))/100*c},B[x]=R.v,S.to(M,B,$),$+=B.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||s.duration(c=S.duration())}else s.timeline=0;return m===!0&&!$a&&(In=yn(s),Ht.killTweensOf(M),In=0),cn(y,yn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!c&&!g&&s._start===he(y._time)&&Ae(f)&&Wg(yn(s))&&y.data!=="nested")&&(s._tTime=-Bt,s.render(Math.max(0,-u)||0)),p&&Nc(yn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Bt&&!u?l:i<Bt?0:i,h,m,g,d,p,_,y,M,S;if(!c)Xg(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,M=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(h=he(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(S=this._yEase,h=c-h),p=Ki(this._tTime,d),h===s&&!a&&this._initted)return this._tTime=f,this;g!==p&&(M&&this._yEase&&Zc(M,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(he(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(zc(this,u?i:h,a,r,f))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!s&&!r&&(Ke(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;M&&M.render(i<0?i:!h&&_?-Bt:M._dur*M._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ra(this,i,r,a),Ke(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Ke(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ra(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Bn(this,1),!r&&!(u&&!s)&&(f||s||_)&&(Ke(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s){Cr||ze.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ro(this,l),c=this._ease(l/this._dur),h_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Ts(this,0),this.parent||Fc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,In&&In.vars.overwrite!==!0)._first||xr(this),this.parent&&a!==this.timeline.totalDuration()&&Ji(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?$e(i):s,c=this._ptLookup,u=this._pt,f,h,m,g,d,p,_;if((!r||r==="all")&&Gg(s,l))return r==="all"&&(this._pt=0),xr(this);for(f=this._op=this._op||[],r!=="all"&&(ue(r)&&(d={},Ce(r,function(y){return d[y]=1}),r=d),r=f_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){h=c[_],r==="all"?(f[_]=r,g=h,m={}):(m=f[_]=f[_]||{},g=r);for(d in g)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&bs(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&xr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return yr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return yr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Ht.killTweensOf(i,r,a)},t}(tr);Qe(ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ce("staggerTo,staggerFrom,staggerFromTo",function(o){ie[o]=function(){var t=new Te,e=Fa.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var so=function(t,e,n){return t[e]=n},eu=function(t,e,n){return t[e](n)},p_=function(t,e,n,i){return t[e](i.fp,n)},m_=function(t,e,n){return t.setAttribute(e,n)},ao=function(t,e){return qt(t[e])?eu:Ka(t[e])&&t.setAttribute?m_:so},nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},g_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},iu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},oo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},__=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},x_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?bs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},v_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ru=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Pe=function(){function o(e,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||nu,this.d=l||this,this.set=c||so,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=v_,this.m=n,this.mt=r,this.tween=i},o}();Ce(eo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return to[o]=1});Ge.TweenMax=Ge.TweenLite=ie;Ge.TimelineLite=Ge.TimelineMax=Te;Ht=new Te({sortChildren:!1,defaults:$i,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ke.stringFilter=Yc;var er=[],hs={},M_=[],Ul=0,ga=function(t){return(hs[t]||M_).map(function(e){return e()})},Ua=function(){var t=Date.now(),e=[];t-Ul>2&&(ga("matchMediaInit"),er.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Ye.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ga("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Ul=t,ga("matchMedia"))},su=function(){function o(e,n){this.selector=n&&Oa(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){qt(n)&&(r=i,i=n,n=qt);var a=this,s=function(){var c=Jt,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Oa(r)),Jt=a,f=i.apply(a,arguments),qt(f)&&a._r.push(f),Jt=c,a.selector=u,a.isReverted=!1,f};return a.last=s,n===qt?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof ie&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof tr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=er.indexOf(this);~s&&er.splice(s,1)}},t.revert=function(n){this.kill(n||{})},o}(),y_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){dn(n)||(n={matches:n});var a=new su(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ye.matchMedia(n[c]),l&&(er.indexOf(a)<0&&er.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ua):l.addEventListener("change",Ua)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),xs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return n_(i)})},timeline:function(t){return new Te(t)},getTweensOf:function(t,e){return Ht.getTweensOf(t,e)},getProperty:function(t,e,n,i){ue(t)&&(t=$e(t)[0]);var r=li(t||{}).get,a=n?Ic:Rc;return n==="native"&&(n=""),t&&(e?a((Oe[e]&&Oe[e].get||r)(t,e,n,i)):function(s,l,c){return a((Oe[s]&&Oe[s].get||r)(t,s,l,c))})},quickSetter:function(t,e,n){if(t=$e(t),t.length>1){var i=t.map(function(u){return Ve.quickSetter(u,e,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}t=t[0]||{};var a=Oe[e],s=li(t),l=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;ki._pt=0,f.init(t,n?u+n:u,ki,0,[t]),f.render(1,f),ki._pt&&oo(1,ki)}:s.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Ve.to(t,_i((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Ht.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ui(t.ease,$i.ease)),Il($i,t||{})},config:function(t){return Il(ke,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Oe[s]&&!Ge[s]&&ps(e+" effect requires "+s+" plugin.")}),fa[e]=function(s,l,c){return n($e(s),Qe(l||{},r),c)},a&&(Te.prototype[e]=function(s,l,c){return this.add(fa[e](s,dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ct[t]=ui(e)},parseEase:function(t,e){return arguments.length?ui(t,e):Ct},getById:function(t){return Ht.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Te(t),i,r;for(n.smoothChildTiming=Ae(t.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ie&&i.vars.onComplete===i._targets[0]))&&cn(n,i,i._start-i._delay),i=r;return cn(Ht,n,0),n},context:function(t,e){return t?new su(t,e):Jt},matchMedia:function(t){return new y_(t)},matchMediaRefresh:function(){return er.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ua()},addEventListener:function(t,e){var n=hs[t]||(hs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=hs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Qg,wrapYoyo:t_,distribute:kc,random:Vc,snap:Gc,normalize:Jg,getUnit:pe,clamp:jg,splitColor:Xc,toArray:$e,selector:Oa,mapRange:Hc,pipe:$g,unitize:Kg,interpolate:e_,shuffle:Bc},install:Ac,effects:fa,ticker:ze,updateRoot:Te.updateRoot,plugins:Oe,globalTimeline:Ht,core:{PropTween:Pe,globals:Cc,Tween:ie,Timeline:Te,Animation:tr,getCache:li,_removeLinkedListItem:bs,reverting:function(){return me},context:function(t){return t&&Jt&&(Jt.data.push(t),t._ctx=Jt),Jt},suppressOverwrites:function(t){return $a=t}}};Ce("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return xs[o]=ie[o]});ze.add(Te.updateRoot);ki=xs.to({},{duration:0});var S_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},b_=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=S_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},_a=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ue(r)&&(l={},Ce(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}b_(s,r)}}}},Ve=xs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)me?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_a("roundProps",Na),_a("modifiers"),_a("snap",Gc))||xs;ie.version=Te.version=Ve.version="3.11.4";Ec=1;yc()&&Qi();Ct.Power0;Ct.Power1;Ct.Power2;Ct.Power3;Ct.Power4;Ct.Linear;Ct.Quad;Ct.Cubic;Ct.Quart;Ct.Quint;Ct.Strong;Ct.Elastic;Ct.Back;Ct.SteppedEase;Ct.Bounce;Ct.Sine;Ct.Expo;Ct.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bl,Fn,Hi,lo,si,kl,co,w_=function(){return typeof window<"u"},Cn={},ei=180/Math.PI,Xi=Math.PI/180,Ni=Math.atan2,Gl=1e8,uo=/([A-Z])/g,T_=/(left|right|width|margin|padding|x)/i,E_=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ba=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},A_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},C_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},P_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},au=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ou=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},L_=function(t,e,n){return t.style[e]=n},D_=function(t,e,n){return t.style.setProperty(e,n)},R_=function(t,e,n){return t._gsap[e]=n},I_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},F_=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},O_=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Xt="transform",an=Xt+"Origin",N_=function(t,e){var n=this,i=this.target,r=i.style;if(t in Cn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Sn(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Sn(i,t)),this.props.indexOf(Xt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,e,"")),t=Xt}(r||e)&&this.props.push(t,e,r[t])},lu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},z_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(uo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=co(),r&&!r.isStart&&!n[Xt]&&(lu(n),i.uncache=1)}},cu=function(t,e){var n={target:t,props:[],revert:z_,save:N_};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},uu,ka=function(t,e){var n=Fn.createElementNS?Fn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Fn.createElement(t);return n.style?n:Fn.createElement(t)},fn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(uo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,nr(e)||e,1)||""},Vl="O,Moz,ms,Ms,Webkit".split(","),nr=function(t,e,n){var i=e||si,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Vl[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Vl[a]:"")+t},Ga=function(){w_()&&window.document&&(Bl=window,Fn=Bl.document,Hi=Fn.documentElement,si=ka("div")||{style:{}},ka("div"),Xt=nr(Xt),an=Xt+"Origin",si.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uu=!!nr("perspective"),co=Ve.core.reverting,lo=1)},xa=function o(t){var e=ka("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Hi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Hi.removeChild(e),this.style.cssText=r,a},Wl=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},hu=function(t){var e;try{e=t.getBBox()}catch{e=xa.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===xa||(e=xa.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Wl(t,["x","cx","x1"])||0,y:+Wl(t,["y","cy","y1"])||0,width:0,height:0}:e},fu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&hu(t))},Pr=function(t,e){if(e){var n=t.style;e in Cn&&e!==an&&(e=Xt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(uo,"-$1").toLowerCase())):n.removeAttribute(e)}},On=function(t,e,n,i,r,a){var s=new Pe(t._pt,e,n,0,1,a?ou:au);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},Hl={deg:1,rad:1,turn:1},U_={grid:1,flex:1},kn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=si.style,l=T_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",m=i==="%",g,d,p,_;return i===a||!r||Hl[i]||Hl[a]?r:(a!=="px"&&!h&&(r=o(t,e,n,"px")),_=t.getCTM&&fu(t),(m||a==="%")&&(Cn[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[u],jt(m?r/g*f:r/100*g)):(s[l?"width":"height"]=f+(h?a:i),d=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===Fn||!d.appendChild)&&(d=Fn.body),p=d._gsap,p&&m&&p.width&&l&&p.time===ze.time&&!p.uncache?jt(r/p.width*f):((m||a==="%")&&!U_[fn(d,"display")]&&(s.position=fn(t,"position")),d===t&&(s.position="static"),d.appendChild(si),g=si[u],d.removeChild(si),s.position="absolute",l&&m&&(p=li(d),p.time=ze.time,p.width=d[u]),jt(h?g*r/f:g&&r?f/g*r:0))))},Sn=function(t,e,n,i){var r;return lo||Ga(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Cn[e]&&e!=="transform"?(r=Dr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ms(fn(t,an))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=vs[e]&&vs[e](t,e,n)||fn(t,e)||Lc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?kn(t,e,r,n)+n:r},B_=function(t,e,n,i){if(!n||n==="none"){var r=nr(e,t,1),a=r&&fn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=fn(t,"borderTopColor"))}var s=new Pe(this._pt,t.style,e,0,1,iu),l=0,c=0,u,f,h,m,g,d,p,_,y,M,S,v;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=fn(t,e)||i,t.style[e]=n),u=[n,i],Yc(u),n=u[0],i=u[1],h=n.match(Bi)||[],v=i.match(Bi)||[],v.length){for(;f=Bi.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,S=d.substr((m+"").length),p.charAt(1)==="="&&(p=Wi(m,p)+S),_=parseFloat(p),M=p.substr((_+"").length),l=Bi.lastIndex-M.length,M||(M=M||ke.units[e]||S,l===i.length&&(i+=M,s.e+=M)),S!==M&&(m=kn(t,e,d,M)||0),s._pt={_next:s._pt,p:y||c===1?y:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=e==="display"&&i==="none"?ou:au;return wc.test(i)&&(s.e=0),this._pt=s,s},Xl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},k_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Xl[n]||n,e[1]=Xl[i]||i,e.join(" ")},G_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Cn[s]&&(l=1,s=s==="transformOrigin"?an:Xt),Pr(n,s);l&&(Pr(n,Xt),a&&(a.svg&&n.removeAttribute("transform"),Dr(n,1),a.uncache=1,lu(i)))}},vs={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Pe(t._pt,e,n,0,0,G_);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Lr=[1,0,0,1,0,0],du={},pu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ql=function(t){var e=fn(t,Xt);return pu(e)?Lr:e.substr(7).match(bc).map(jt)},ho=function(t,e){var n=t._gsap||li(t),i=t.style,r=ql(t),a,s,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Lr:r):(r===Lr&&!t.offsetParent&&t!==Hi&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,s=t.nextElementSibling,Hi.appendChild(t)),r=ql(t),l?i.display=l:Pr(t,"display"),c&&(s?a.insertBefore(t,s):a?a.appendChild(t):Hi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Va=function(t,e,n,i,r,a){var s=t._gsap,l=r||ho(t,!0),c=s.xOrigin||0,u=s.yOrigin||0,f=s.xOffset||0,h=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],y=l[5],M=e.split(" "),S=parseFloat(M[0])||0,v=parseFloat(M[1])||0,A,P,x,w;n?l!==Lr&&(P=m*p-g*d)&&(x=S*(p/P)+v*(-d/P)+(d*y-p*_)/P,w=S*(-g/P)+v*(m/P)-(m*y-g*_)/P,S=x,v=w):(A=hu(t),S=A.x+(~M[0].indexOf("%")?S/100*A.width:S),v=A.y+(~(M[1]||M[0]).indexOf("%")?v/100*A.height:v)),i||i!==!1&&s.smooth?(_=S-c,y=v-u,s.xOffset=f+(_*m+y*d)-_,s.yOffset=h+(_*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=S,s.yOrigin=v,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[an]="0px 0px",a&&(On(a,s,"xOrigin",c,S),On(a,s,"yOrigin",u,v),On(a,s,"xOffset",f,s.xOffset),On(a,s,"yOffset",h,s.yOffset)),t.setAttribute("data-svg-origin",S+" "+v)},Dr=function(t,e){var n=t._gsap||new Kc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(t),c=fn(t,an)||"0",u,f,h,m,g,d,p,_,y,M,S,v,A,P,x,w,L,U,$,I,R,B,Z,j,G,tt,K,k,V,Q,J,rt;return u=f=h=d=p=_=y=M=S=0,m=g=1,n.svg=!!(t.getCTM&&fu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),P=ho(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Va(t,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,P)),v=n.xOrigin||0,A=n.yOrigin||0,P!==Lr&&(U=P[0],$=P[1],I=P[2],R=P[3],u=B=P[4],f=Z=P[5],P.length===6?(m=Math.sqrt(U*U+$*$),g=Math.sqrt(R*R+I*I),d=U||$?Ni($,U)*ei:0,y=I||R?Ni(I,R)*ei+d:0,y&&(g*=Math.abs(Math.cos(y*Xi))),n.svg&&(u-=v-(v*U+A*I),f-=A-(v*$+A*R))):(rt=P[6],Q=P[7],K=P[8],k=P[9],V=P[10],J=P[11],u=P[12],f=P[13],h=P[14],x=Ni(rt,V),p=x*ei,x&&(w=Math.cos(-x),L=Math.sin(-x),j=B*w+K*L,G=Z*w+k*L,tt=rt*w+V*L,K=B*-L+K*w,k=Z*-L+k*w,V=rt*-L+V*w,J=Q*-L+J*w,B=j,Z=G,rt=tt),x=Ni(-I,V),_=x*ei,x&&(w=Math.cos(-x),L=Math.sin(-x),j=U*w-K*L,G=$*w-k*L,tt=I*w-V*L,J=R*L+J*w,U=j,$=G,I=tt),x=Ni($,U),d=x*ei,x&&(w=Math.cos(x),L=Math.sin(x),j=U*w+$*L,G=B*w+Z*L,$=$*w-U*L,Z=Z*w-B*L,U=j,B=G),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=jt(Math.sqrt(U*U+$*$+I*I)),g=jt(Math.sqrt(Z*Z+rt*rt)),x=Ni(B,Z),y=Math.abs(x)>2e-4?x*ei:0,S=J?1/(J<0?-J:J):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!pu(fn(t,Xt)),j&&t.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=jt(m),n.scaleY=jt(g),n.rotation=jt(d)+s,n.rotationX=jt(p)+s,n.rotationY=jt(_)+s,n.skewX=y+s,n.skewY=M+s,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[an]=Ms(c)),n.xOffset=n.yOffset=0,n.force3D=ke.force3D,n.renderTransform=n.svg?W_:uu?mu:V_,n.uncache=0,n},Ms=function(t){return(t=t.split(" "))[0]+" "+t[1]},va=function(t,e,n){var i=pe(e);return jt(parseFloat(e)+parseFloat(kn(t,"x",n+"px",i)))+i},V_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mu(t,e)},Kn="0deg",mr="0px",Jn=") ",mu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,y=n.target,M=n.zOrigin,S="",v=_==="auto"&&t&&t!==1||_===!0;if(M&&(f!==Kn||u!==Kn)){var A=parseFloat(u)*Xi,P=Math.sin(A),x=Math.cos(A),w;A=parseFloat(f)*Xi,w=Math.cos(A),a=va(y,a,P*w*-M),s=va(y,s,-Math.sin(A)*-M),l=va(y,l,x*w*-M+M)}p!==mr&&(S+="perspective("+p+Jn),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(v||a!==mr||s!==mr||l!==mr)&&(S+=l!==mr||v?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Jn),c!==Kn&&(S+="rotate("+c+Jn),u!==Kn&&(S+="rotateY("+u+Jn),f!==Kn&&(S+="rotateX("+f+Jn),(h!==Kn||m!==Kn)&&(S+="skew("+h+", "+m+Jn),(g!==1||d!==1)&&(S+="scale("+g+", "+d+Jn),y.style[Xt]=S||"translate(0, 0)"},W_=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,y=n.forceCSS,M=parseFloat(a),S=parseFloat(s),v,A,P,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xi,c*=Xi,v=Math.cos(l)*f,A=Math.sin(l)*f,P=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Xi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),P*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),v*=w,A*=w)),v=jt(v),A=jt(A),P=jt(P),x=jt(x)):(v=f,x=h,A=P=0),(M&&!~(a+"").indexOf("px")||S&&!~(s+"").indexOf("px"))&&(M=kn(m,"x",a,"px"),S=kn(m,"y",s,"px")),(g||d||p||_)&&(M=jt(M+g-(g*v+d*P)+p),S=jt(S+d-(g*A+d*x)+_)),(i||r)&&(w=m.getBBox(),M=jt(M+i/100*w.width),S=jt(S+r/100*w.height)),w="matrix("+v+","+A+","+P+","+x+","+M+","+S+")",m.setAttribute("transform",w),y&&(m.style[Xt]=w)},H_=function(t,e,n,i,r){var a=360,s=ue(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ei:1),c=l-i,u=i+c+"deg",f,h;return s&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Gl)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Gl)%a-~~(c/a)*a)),t._pt=h=new Pe(t._pt,e,n,i,c,A_),h.e=u,h.u="deg",t._props.push(n),h},Yl=function(t,e){for(var n in e)t[n]=e[n];return t},X_=function(t,e,n){var i=Yl({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,f,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xt]=e,s=Dr(n,1),Pr(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],a[Xt]=e,s=Dr(n,1),a[Xt]=c);for(l in Cn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=pe(c),g=pe(u),f=m!==g?kn(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new Pe(t._pt,s,l,f,h-f,Ba),t._pt.u=g||0,t._props.push(l));Yl(s,i)};Ce("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});vs[t>1?"border"+o:o]=function(s,l,c,u,f){var h,m;if(arguments.length<4)return h=a.map(function(g){return Sn(s,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=h[d]=h[d]||h[(d-1)/2|0]}),s.init(l,m,f)}});var gu={name:"css",register:Ga,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,l=n.vars.startAt,c,u,f,h,m,g,d,p,_,y,M,S,v,A,P,x;lo||Ga(),this.styles=this.styles||cu(t),x=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Oe[d]&&Jc(d,e,n,i,t,r)))){if(m=typeof u,g=vs[d],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ar(u)),g)g(this,t,d,u,n)&&(P=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",Un.lastIndex=0,Un.test(c)||(p=pe(c),_=pe(u)),_?p!==_&&(c=kn(t,d,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,t,r):l[d],ue(c)&&~c.indexOf("random(")&&(c=Ar(c)),pe(c+"")||(c+=ke.units[d]||pe(Sn(t,d))||""),(c+"").charAt(1)==="="&&(c=Sn(t,d))):c=Sn(t,d),h=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),d in Tn&&(d==="autoAlpha"&&(h===1&&Sn(t,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,s.visibility),On(this,s,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Tn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),M=d in Cn,M){if(this.styles.save(d),S||(v=t._gsap,v.renderTransform&&!e.parseTransform||Dr(t,e.parseTransform),A=e.smoothOrigin!==!1&&v.smooth,S=this._pt=new Pe(this._pt,s,Xt,0,1,v.renderTransform,v,0,-1),S.dep=1),d==="scale")this._pt=new Pe(this._pt,v,"scaleY",v.scaleY,(y?Wi(v.scaleY,y+f):f)-v.scaleY||0,Ba),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(an,0,s[an]),u=k_(u),v.svg?Va(t,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&On(this,v,"zOrigin",v.zOrigin,_),On(this,s,d,Ms(c),Ms(u)));continue}else if(d==="svgOrigin"){Va(t,u,1,A,0,this);continue}else if(d in du){H_(this,v,d,h,y?Wi(h,y+u):u);continue}else if(d==="smoothOrigin"){On(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){X_(this,u,t);continue}}else d in s||(d=nr(d)||d);if(M||(f||f===0)&&(h||h===0)&&!E_.test(u)&&d in s)p=(c+"").substr((h+"").length),f||(f=0),_=pe(u)||(d in ke.units?ke.units[d]:p),p!==_&&(h=kn(t,d,c,_)),this._pt=new Pe(this._pt,M?v:s,d,h,(y?Wi(h,y+f):f)-h,!M&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?P_:Ba),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=C_);else if(d in s)B_.call(this,t,d,c,y?y+u:u);else if(d in t)this.add(t,d,c||t[d],y?y+u:u,i,r);else if(d!=="parseTransform"){Qa(d,u);continue}M||(d in s?x.push(d,0,s[d]):x.push(d,1,c||t[d])),a.push(d)}}P&&ru(this)},render:function(t,e){if(e.tween._time||!co())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Sn,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in Cn&&e!==an&&(t._gsap.x||Sn(t,"x"))?n&&kl===n?e==="scale"?I_:R_:(kl=n||{})&&(e==="scale"?F_:O_):t.style&&!Ka(t.style[e])?L_:~e.indexOf("-")?D_:ao(t,e)},core:{_removeProperty:Pr,_getMatrix:ho}};Ve.utils.checkPrefix=nr;Ve.core.getStyleSaver=cu;(function(o,t,e,n){var i=Ce(o+","+t+","+e,function(r){Cn[r]=1});Ce(t,function(r){ke.units[r]="deg",du[r]=1}),Tn[i[13]]=o+","+t,Ce(n,function(r){var a=r.split(":");Tn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ke.units[o]="px"});Ve.registerPlugin(gu);var _u=Ve.registerPlugin(gu)||Ve;_u.core.Tween;const Ur=new Tg,q_=new Za(3,64,64),Y_=new Eg({color:"#F7CAC9"}),xu=new wn(q_,Y_);Ur.add(xu);const be={width:window.innerWidth,height:window.innerHeight},vu=new Lg(16777215,1,100);vu.position.set(5,10,10);Ur.add(vu);const Gn=new Ne(45,be.width/be.height,.1,100);Gn.position.z=20;Gn.position.y=1;Ur.add(Gn);const Mu=document.querySelector(".canvas"),ir=new xc({canvas:Mu});ir.setSize(be.width,be.height);ir.setPixelRatio(2);ir.render(Ur,Gn);const sr=new Dg(Gn,Mu);sr.enableDamping=!0;sr.enablePan=!1;sr.enableZoom=!1;sr.autoRotate=!0;sr.autoRotateSpeed=4;window.addEventListener("resize",()=>{be.width=window.innerWidth,be.height=window.innerHeight,Gn.aspect=be.width/be.height,Gn.updateProjectionMatrix();const o=be.width>be.height?0:(be.height-be.width)/2;ir.setSize(be.width,be.height),ir.domElement.style.top=o+"px"});const yu=()=>{const o=j_();_u.to(xu.material.color,{r:parseInt(o.slice(1,3),16)/255,g:parseInt(o.slice(3,5),16)/255,b:parseInt(o.slice(5,7),16)/255,duration:2,ease:"power4.inOut",onComplete:yu})};yu();const Su=()=>{sr.update(),window.requestAnimationFrame(Su),ir.render(Ur,Gn)};Su();function j_(){const o="0123456789ABCDEF";let t="#";for(let e=0;e<6;e++)t+=o[Math.floor(Math.random()*16)];return t}
