(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1024,t=.8,n=new Float32Array(256).map((e,t)=>{let n=t/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4});function r(e){let t=e<=.0031308?e*12.92:1.055*Math.min(1,e)**(1/2.4)-.055;return Math.round(Math.min(1,Math.max(0,t))*255)}function i(e){let[[t,n],[r,i],[a,o],[s,c]]=e,l=t-r+a-s,u=n-i+o-c,d,f,p,m,h=0,g=0;if(Math.abs(l)<1e-9&&Math.abs(u)<1e-9)d=r-t,f=s-t,p=i-n,m=c-n;else{let e=r-a,_=s-a,v=i-o,y=c-o,b=e*y-_*v;h=(l*y-_*u)/b,g=(e*u-l*v)/b,d=r-t+h*r,f=s-t+g*s,p=i-n+h*i,m=c-n+g*c}return(e,r)=>{let i=h*e+g*r+1;return[(d*e+f*r+t)/i,(p*e+m*r+n)/i]}}var a=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]);function o(e){let t=(a(e[0],e[1])+a(e[3],e[2]))/2,n=(a(e[0],e[3])+a(e[1],e[2]))/2;return t/Math.max(n,1)}function s(t,a,o,s){let c=o>=1?e:Math.round(e*o),l=o>=1?Math.round(e/o):e,u=document.createElement(`canvas`);u.width=Math.max(8,c),u.height=Math.max(8,l);let d=t.width,f=t.height,p=t.getContext(`2d`).getImageData(0,0,d,f).data,m=u.getContext(`2d`),h=m.createImageData(u.width,u.height),g=i(a),_=s??[1,1,1],v=new Float32Array(3);for(let e=0;e<u.height;e++)for(let t=0;t<u.width;t++){let[i,a]=g((t+.5)/u.width,(e+.5)/u.height),o=Math.min(Math.max(i-.5,0),d-1.001),s=Math.min(Math.max(a-.5,0),f-1.001),c=Math.floor(o),l=Math.floor(s),m=o-c,y=s-l,b=(l*d+c)*4,x=b+4,S=b+d*4,C=S+4;for(let e=0;e<3;e++){let t=n[p[b+e]]*(1-m)+n[p[x+e]]*m,r=n[p[S+e]]*(1-m)+n[p[C+e]]*m;v[e]=(t*(1-y)+r*y)*_[e]}let w=(e*u.width+t)*4;h.data[w]=r(v[0]),h.data[w+1]=r(v[1]),h.data[w+2]=r(v[2]),h.data[w+3]=255}return m.putImageData(h,0,0),u}function c(e,r){let i=Math.max(3,Math.round(Math.min(e.width,e.height)/150)),a=Math.max(0,Math.round(r[0])-i),o=Math.max(0,Math.round(r[1])-i),s=Math.min(e.width-a,2*i+1),c=Math.min(e.height-o,2*i+1),l=e.getContext(`2d`).getImageData(a,o,s,c).data,u=[0,0,0];for(let e=0;e<l.length;e+=4)for(let t=0;t<3;t++)u[t]+=n[l[e+t]];let d=l.length/4;return u.map(e=>Math.min(4,Math.max(.5,t/Math.max(e/d,.001))))}function l(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n&&(r.textContent=n),r}function u(e,t,n){let r=Math.min(1,2200/Math.max(e.width,e.height)),i=document.createElement(`canvas`);i.width=Math.round(e.width*r),i.height=Math.round(e.height*r);let u=i.getContext(`2d`,{willReadFrequently:!0});u.imageSmoothingQuality=`high`,u.drawImage(e,0,0,i.width,i.height);let d=.12,f=i.width,p=i.height,m=[[f*d,p*d],[f*.88,p*d],[f*.88,p*.88],[f*d,p*.88]],h=null,g=!1,_=!1;return new Promise(e=>{let r=l(`div`,`prep`),u=l(`div`,`prep-box`),d=l(`h2`,`prep-title`,`${t}: kumaşı hazırla`),v=l(`p`,`hint`,`Köşeleri kumaşın düz duran bir parçasının köşelerine taşı. Mümkünse tam bir desen tekrarını içine al.`),y=l(`div`,`prep-stage`),b=l(`canvas`,`prep-view`);b.width=f,b.height=p,b.getContext(`2d`).drawImage(i,0,0);let x=`http://www.w3.org/2000/svg`,S=document.createElementNS(x,`svg`);S.setAttribute(`class`,`prep-svg`),S.setAttribute(`viewBox`,`0 0 ${f} ${p}`);let C=document.createElementNS(x,`polygon`);C.setAttribute(`class`,`prep-outline`);let w=document.createElementNS(x,`circle`);w.setAttribute(`class`,`prep-white`),w.setAttribute(`r`,String(Math.max(f,p)/60)),w.style.display=`none`,S.append(C,w);let T=Math.max(f,p)/40,E=m.map(()=>{let e=document.createElementNS(x,`circle`);return e.setAttribute(`class`,`prep-handle`),e.setAttribute(`r`,String(T)),S.append(e),e});y.append(b,S),y.style.width=`min(100%, ${(55*f/p).toFixed(2)}vh)`;let D=l(`div`,`zone-row`),O=l(`input`);O.type=`number`,O.min=`2`,O.max=`400`,O.step=`0.5`,O.value=String(n);let k=l(`input`);k.type=`number`,k.min=`2`,k.max=`400`,k.step=`0.5`,D.append(l(`p`,`hint`,`Genişlik (cm)`),O,l(`p`,`hint`,`Yükseklik (cm)`),k);let A=l(`div`,`zone-row`),j=l(`button`,`prep-btn`,`Beyaz noktası seç`);j.type=`button`;let M=l(`p`,`hint`,`İsteğe bağlı: fotoğrafta beyaz kâğıt ya da etiket varsa ona dokun.`);A.append(j,M);let N=l(`canvas`,`prep-preview`),P=l(`div`,`prep-actions`),F=l(`button`,`prep-btn`,`Vazgeç`);F.type=`button`;let I=l(`button`,`prep-btn primary`,`Uygula`);I.type=`button`,P.append(F,I),u.append(d,v,y,D,A,N,P),r.append(u),document.body.append(r);let L=()=>Math.max(2,Number(O.value)||n),R=()=>Math.max(2,Number(k.value)||L()),z=()=>{_||(k.value=(L()/o(m)).toFixed(1))},B=null,V=()=>{B=s(i,m,L()/R(),h?c(i,h):null);let e=Math.round(140*R()/L());N.width=280,N.height=e*2;let t=N.getContext(`2d`);for(let n=0;n<4;n++)t.drawImage(B,n%2*140,Math.floor(n/2)*e,140,e)},H=()=>{C.setAttribute(`points`,m.map(e=>e.join(`,`)).join(` `)),E.forEach((e,t)=>{e.setAttribute(`cx`,String(m[t][0])),e.setAttribute(`cy`,String(m[t][1]))}),h&&(w.style.display=``,w.setAttribute(`cx`,String(h[0])),w.setAttribute(`cy`,String(h[1])))},U=e=>{let t=S.getBoundingClientRect();return[Math.min(f,Math.max(0,(e.clientX-t.left)/t.width*f)),Math.min(p,Math.max(0,(e.clientY-t.top)/t.height*p))]},W=-1;S.addEventListener(`pointerdown`,e=>{let t=U(e);if(g){h=t,g=!1,j.classList.remove(`on`),M.textContent=`Beyaz referans seçildi; renk ve parlaklık ona göre ayarlandı.`,H(),V();return}let n=-1,r=1/0;m.forEach((e,i)=>{let o=a(e,t);o<r&&(r=o,n=i)}),!(r>T*3)&&(W=n,S.setPointerCapture(e.pointerId),e.preventDefault())}),S.addEventListener(`pointermove`,e=>{W<0||(m[W]=U(e),z(),H())});let G=()=>{W<0||(W=-1,V())};S.addEventListener(`pointerup`,G),S.addEventListener(`pointercancel`,G),j.addEventListener(`click`,()=>{g=!g,j.classList.toggle(`on`,g),g&&(M.textContent=`Fotoğrafta beyaz olan bir yere dokun.`)}),O.addEventListener(`change`,()=>{z(),V()}),k.addEventListener(`change`,()=>{_=!0,V()});let K=t=>{r.remove(),e(t)};F.addEventListener(`click`,()=>K(null)),I.addEventListener(`click`,()=>{B||V(),K({tile:B,widthCm:L(),heightCm:R()})}),z(),H(),V()})}var d=.6,f=1e4,p=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,m=`vec2 mapUV() { return vec2(v_uv.x, 1.0 - v_uv.y); }`,h=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_light;
uniform sampler2D u_dark;
uniform sampler2D u_wallMask;
uniform float u_lightScale;
uniform float u_darkScale;

// The light maps are stored on a gamma curve so eight bits can hold both a dim
// room and a sunlit window; this puts them back into linear light.
vec3 decodeHDR(vec4 texel, float scale) {
  return pow(texel.rgb, vec3(2.2)) * scale;
}
uniform vec3 u_aLight;
uniform vec3 u_aDark;
uniform vec3 u_wall;

${m}

void main() {
  vec2 m = mapUV();
  vec3 light = decodeHDR(texture(u_light, m), u_lightScale);
  vec3 dark = decodeHDR(texture(u_dark, m), u_darkScale);
  float mask = texture(u_wallMask, m).r;

  // On the wall: work out how much light reaches it for this albedo, then apply
  // the albedo. Off the wall: blend the two bakes, because a darker wall bounces
  // less light back into the room.
  vec3 eLight = light / max(u_aLight, vec3(1e-4));
  vec3 eDark = dark / max(u_aDark, vec3(1e-4));
  vec3 t = clamp((u_wall - u_aDark) / max(u_aLight - u_aDark, vec3(1e-4)), 0.0, 1.5);
  vec3 wall = (eDark + t * (eLight - eDark)) * u_wall;

  const vec3 luma = vec3(0.2126, 0.7152, 0.0722);
  float tl = clamp((dot(u_wall, luma) - dot(u_aDark, luma))
                 / max(dot(u_aLight, luma) - dot(u_aDark, luma), 1e-4), 0.0, 1.5);
  vec3 rest = dark + tl * (light - dark);

  outColor = vec4(mix(rest, wall, mask), 1.0);
}`,g=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_light;
uniform sampler2D u_dark;
uniform sampler2D u_uv;
uniform sampler2D u_fabric;
uniform sampler2D u_trimFabric;
uniform sampler2D u_slot;

uniform float u_lightScale;
uniform float u_darkScale;
uniform vec2 u_uvScale;
uniform float u_aLight;
uniform float u_aDark;
uniform vec3 u_color;
uniform vec3 u_trimColor;
uniform float u_hasFabric;
uniform float u_hasTrimFabric;
uniform float u_hasTrim;
uniform vec2 u_repeat;      // tiles per metre of cloth
uniform vec2 u_trimRepeat;
uniform float u_blend;      // where this fabric sits between the two bakes
uniform float u_openwork;   // how hard the photograph's openwork is cut out
uniform float u_openInvert; // 1 when the holes are the dark part of it
uniform float u_coverageOnly; // 1 to write only how much this zone covers
uniform sampler2D u_closedLight;
uniform sampler2D u_closedDark;
uniform float u_closedLightScale;
uniform float u_closedDarkScale;
uniform float u_hasClosed;
uniform sampler2D u_tau;      // daylight let through by the layers behind
uniform float u_part;         // 0: the light the room gives it, 1: the daylight through it

vec3 decodeHDR(vec4 texel, float scale) {
  return pow(texel.rgb, vec3(2.2)) * scale;
}

// u and v are each split across two channels, so a three metre drop keeps
// sub-millimetre precision through an eight-bit texture.
vec2 decodeUV(vec4 texel, vec2 scale) {
  float u = (texel.r * 255.0 * 256.0 + texel.g * 255.0) / 65535.0;
  float v = (texel.b * 255.0 * 256.0 + texel.a * 255.0) / 65535.0;
  return vec2(u, v) * scale;
}

${m}

vec3 sampleFabric(sampler2D tex, vec2 cloth, vec2 repeat) {
  vec2 uv = cloth * repeat;
  // The fold squeezes many repeats of the pattern into one pixel, so hand the
  // hardware the real footprint and let it average them. Point sampling here
  // makes a checked fabric sparkle and read far too bright.
  return textureGrad(tex, uv, dFdx(uv), dFdy(uv)).rgb;
}

void main() {
  vec2 m = mapUV();
  vec4 light = texture(u_light, m);
  vec4 dark = texture(u_dark, m);
  float alpha = light.a;
  if (alpha <= 0.0005) discard;

  vec2 cloth = decodeUV(texture(u_uv, m), u_uvScale);

  vec3 fabric = u_color;
  if (u_hasFabric > 0.5) fabric = sampleFabric(u_fabric, cloth, u_repeat);
  if (u_hasTrim > 0.5) {
    vec3 trim = u_trimColor;
    if (u_hasTrimFabric > 0.5) trim = sampleFabric(u_trimFabric, cloth, u_trimRepeat);
    fabric = mix(fabric, trim, texture(u_slot, m).r);
  }

  // How much light reaches the cloth depends on how much the cloth bounces back
  // at its own folds, which is set by the panel as a whole, not by one pixel.
  vec3 eLight = decodeHDR(light, u_lightScale) / u_aLight;
  vec3 eDark = decodeHDR(dark, u_darkScale) / u_aDark;
  vec3 lit = mix(eDark, eLight, u_blend);

  // A sheer is baked with the window open behind it, so the daylight coming
  // through it is in its picture. With a roller lowered behind it that light
  // is mostly gone, and the open bake alone printed the bright panes through
  // the sheer. It is baked a second time with the window shut off, and the two
  // are mixed by how much daylight the layers behind let through. Light is
  // linear in what arrives, so this is a straight line between the two.
  if (u_hasClosed > 0.5) {
    vec3 cLight = decodeHDR(texture(u_closedLight, m), u_closedLightScale) / u_aLight;
    vec3 cDark = decodeHDR(texture(u_closedDark, m), u_closedDarkScale) / u_aDark;
    vec3 closed = mix(cDark, cLight, u_blend);
    vec3 tau = texelFetch(u_tau, ivec2(gl_FragCoord.xy), 0).rgb;
    // The two parts are drawn apart. Layers in front shade the light the room
    // gives this sheer, but not the daylight reaching it from the window behind;
    // shading both put the drapes' shadow on a backlit sheer and drew it a
    // quarter too dark, and against that grey the sashes and the garden behind
    // stood out hard. See drawScene.
    lit = u_part > 0.5 ? tau * (lit - closed) : closed;
  } else if (u_part > 0.5) {
    lit = vec3(0.0);
  }

  // Lace is cloth with holes in it. Where the photograph says hole, the zone
  // covers less, so the room behind comes through -- the same thing a screen
  // roller's open weave does, except the holes come from the pattern.
  // The lighting arrives premultiplied by coverage, so it is cut by the same
  // factor; otherwise the hole would keep its light and glow.
  if (u_openwork > 0.0) {
    float lum = dot(fabric, vec3(0.2126, 0.7152, 0.0722));
    float hole = smoothstep(0.45, 0.85, lum);
    if (u_openInvert > 0.5) hole = smoothstep(0.45, 0.85, 1.0 - lum);
    float keep = 1.0 - u_openwork * hole;
    alpha *= keep;
    lit *= keep;
  }

  // The shadow bookkeeping pass: where this cloth covers, nothing behind it is
  // seen any more, so the record of shadows applied so far starts over at one.
  // All or nothing: a half-covered edge pixel would mix "no layer yet" into a
  // real factor and read back as a huge one -- a bright line along every edge.
  if (u_coverageOnly > 0.5) {
    float covered = step(0.5, alpha);
    outColor = vec4(vec3(covered * ${f.toFixed(1)}), covered);
    return;
  }
  outColor = vec4(lit * fabric, alpha);
}`,_=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_light;
uniform sampler2D u_dark;
uniform sampler2D u_min;
uniform sampler2D u_second;
uniform sampler2D u_sunBook;  // rgb: product of sun factors so far; a: 1 while the room shows
uniform sampler2D u_share;    // the bare room's sun share
uniform sampler2D u_sunLight;
uniform sampler2D u_sunDark;
uniform sampler2D u_restLight;
uniform sampler2D u_restDark;
uniform float u_lightScale;
uniform float u_darkScale;
uniform vec2 u_sunScale;      // light, dark
uniform vec2 u_restScale;
uniform float u_hasSplit;     // this layer has sun / rest maps
uniform float u_hasShare;     // the room has a sun share
uniform float u_blend;
// 0: the factor for the canvas. Bookkeeping, each drawn with its own blend:
// 1: the factor for m1; 2: max(m1, factor) for m2; 3: the sun factor;
// 4: the whole factor as is (a roller's transmittance uses this).
uniform float u_raw;

// The shadow of everything recorded so far, from its two darkest factors.
vec3 combined(vec3 m1, vec3 m2) {
  const float none = ${f.toFixed(1)};
  vec3 second = mix(m2, vec3(1.0), step(vec3(none * 0.5), m2));
  return min(m1, vec3(1.0)) * pow(second, vec3(${d.toFixed(3)}));
}

vec3 decodeHDR(vec4 texel, float scale) {
  return pow(texel.rgb, vec3(2.2)) * scale;
}

${m}

void main() {
  vec2 m = mapUV();
  vec3 hi = decodeHDR(texture(u_light, m), u_lightScale);
  vec3 lo = decodeHDR(texture(u_dark, m), u_darkScale);
  vec3 s = max(mix(lo, hi, u_blend), vec3(0.0));
  ivec2 px = ivec2(gl_FragCoord.xy);
  if (u_raw > 3.5) {
    outColor = vec4(s, 1.0);
    return;
  }

  // Where nothing has been drawn over the room yet, its shadow is split: the
  // sun's part multiplies, the rest takes the two-darkest rule. Anywhere a
  // layer already covers, the whole factor and the two-darkest rule as before.
  vec4 book = texelFetch(u_sunBook, px, 0);
  bool room = book.a > 0.5;
  vec3 sunS = s;
  vec3 restS = s;
  if (u_hasSplit > 0.5) {
    sunS = max(mix(decodeHDR(texture(u_sunDark, m), u_sunScale.y),
                   decodeHDR(texture(u_sunLight, m), u_sunScale.x), u_blend), vec3(0.0));
    restS = max(mix(decodeHDR(texture(u_restDark, m), u_restScale.y),
                    decodeHDR(texture(u_restLight, m), u_restScale.x), u_blend), vec3(0.0));
  }
  vec3 f = u_hasShare > 0.5 ? texture(u_share, m).rgb : vec3(0.0);
  vec3 own = room ? restS : s;

  // The sun book is the target here, so it cannot be read: always multiply.
  // Where a layer already covers, its product was cleared to zero and stays so.
  if (u_raw > 2.5) {
    outColor = vec4(sunS, 1.0);
    return;
  }
  if (u_raw > 1.5) {
    outColor = vec4(max(texelFetch(u_min, px, 0).rgb, own), 1.0);
    return;
  }
  if (u_raw > 0.5) {
    outColor = vec4(own, 1.0);
    return;
  }
  vec3 m1 = max(texelFetch(u_min, px, 0).rgb, vec3(1e-4));
  vec3 m2 = max(texelFetch(u_second, px, 0).rgb, vec3(1e-4));
  vec3 n1 = min(m1, own);
  vec3 n2 = min(m2, max(m1, own));
  if (room) {
    vec3 sunBefore = book.rgb;
    vec3 before = f * sunBefore + (1.0 - f) * combined(m1, m2);
    vec3 after = f * sunBefore * sunS + (1.0 - f) * combined(n1, n2);
    outColor = vec4(after / max(before, vec3(1e-4)), 1.0);
    return;
  }
  outColor = vec4(combined(n1, n2) / combined(m1, m2), 1.0);
}`,v=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_light;
uniform sampler2D u_dark;
uniform sampler2D u_grain;
uniform float u_lightScale;
uniform float u_darkScale;
uniform float u_aLight;
uniform float u_aDark;
uniform vec3 u_color;
uniform float u_blend;
uniform float u_wood;      // how much of the grain to show, 0 for a painted frame

vec3 decodeHDR(vec4 texel, float scale) {
  return pow(texel.rgb, vec3(2.2)) * scale;
}

${m}

void main() {
  vec2 m = mapUV();
  vec4 hi = texture(u_light, m);
  float alpha = hi.a;
  if (alpha <= 0.0005) discard;
  vec3 lit = mix(decodeHDR(texture(u_dark, m), u_darkScale) / u_aDark,
                 decodeHDR(hi, u_lightScale) / u_aLight, u_blend);
  // The grain map is already centred on one: it says how much lighter or darker
  // than the chosen colour each point is. Only a wood finish carries it -- a
  // white frame with grain in it is not a window anyone sells.
  float grain = mix(1.0, texture(u_grain, m).r, u_wood);
  vec3 colour = u_color * grain;
  outColor = vec4(lit * colour, alpha);
}`,y=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;
uniform sampler2D u_src;
uniform sampler2D u_glow;   // sheers' daylight, kept out of the shadow passes
uniform float u_exposure;

// AgX, the same curve Blender renders these scenes with.
//
// The previous curve was a filmic approximation, and it was not the same: cloth
// that came out matt in Blender came out looking like satin here, and a bright
// window hardened instead of rolling off. Since every judgement about the bake
// is made by comparing the two, they have to agree.
//
// It works in a slightly rotated colour space, compresses to log, applies a
// contrast curve, then rotates back -- which is what keeps a blown-out window
// desaturating towards white like film rather than clipping to a flat colour.
const mat3 AGX_IN = mat3(
  0.8424790622, 0.0423282423, 0.0423756549,
  0.0784336000, 0.8784686365, 0.0784336000,
  0.0792237451, 0.0791661275, 0.8791429738);
const mat3 AGX_OUT = mat3(
   1.1968790051, -0.0528968518, -0.0529716355,
  -0.0980208811,  1.1519031299, -0.0980434501,
  -0.0990297441, -0.0989611768,  1.1510736726);

vec3 agxContrast(vec3 x) {
  vec3 x2 = x * x;
  vec3 x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4
       - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}

vec3 tonemap(vec3 colour) {
  const float minEv = -12.47393, maxEv = 4.026069;
  vec3 v = AGX_IN * max(colour, vec3(0.0));
  v = clamp(log2(max(v, vec3(1e-10))), minEv, maxEv);
  v = (v - minEv) / (maxEv - minEv);
  v = agxContrast(v);
  return clamp(AGX_OUT * v, 0.0, 1.0);
}

void main() {
  // AgX ends in display encoding already -- it is a display transform, not just
  // a curve -- so there is no sRGB step after it. Adding one here washed the
  // whole picture out.
  vec3 linear = texture(u_src, v_uv).rgb + texture(u_glow, v_uv).rgb;
  outColor = vec4(tonemap(linear * u_exposure), 1.0);
}`;function b(e,t,n){let r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(r)??`shader failed to compile`);return r}function x(e,t){let n=e.createProgram();if(e.attachShader(n,b(e,e.VERTEX_SHADER,p)),e.attachShader(n,b(e,e.FRAGMENT_SHADER,t)),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw Error(e.getProgramInfoLog(n)??`program failed to link`);return n}function S(e){let t=e.replace(`#`,``),n=e=>{let n=parseInt(t.slice(e*2,e*2+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4};return[n(0),n(1),n(2)]}var C=class{canvas;gl;plateProg;zoneProg;frameProg;shadowProg;toneProg;vao;target=null;targetTex=null;minTarget=null;minTex=null;sunTarget=null;sunTex=null;secondTarget=null;secondTex=null;tauTarget=null;tauTex=null;glowTarget=null;glowTex=null;size=[0,0];textures=new Map;constructor(e){this.canvas=e;let t=e.getContext(`webgl2`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!0});if(!t)throw Error(`Bu tarayıcı WebGL2 desteklemiyor.`);if(this.gl=t,!t.getExtension(`EXT_color_buffer_float`))throw Error(`Bu cihazda kayan noktalı doku desteği yok.`);this.plateProg=x(t,h),this.zoneProg=x(t,g),this.frameProg=x(t,v),this.shadowProg=x(t,_),this.toneProg=x(t,y),this.vao=t.createVertexArray(),t.bindVertexArray(this.vao);let n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.bindVertexArray(null)}upload(e,t,n={}){let r=this.gl,i=this.textures.get(e);i&&r.deleteTexture(i);let a=r.createTexture();return r.bindTexture(r.TEXTURE_2D,a),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),n.mipmap?(r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.REPEAT),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.REPEAT)):(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),this.textures.set(e,a),a}get(e){return this.textures.get(e)}ensureTarget(e,t){let n=this.gl;if(this.size[0]===e&&this.size[1]===t&&this.target)return;for(let e of[this.target,this.minTarget,this.secondTarget,this.sunTarget,this.tauTarget,this.glowTarget])e&&n.deleteFramebuffer(e);for(let e of[this.targetTex,this.minTex,this.secondTex,this.sunTex,this.tauTex,this.glowTex])e&&n.deleteTexture(e);let r=()=>{let r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,e,t,0,n.RGBA,n.HALF_FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let i=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,r,0),[r,i]};[this.targetTex,this.target]=r(),[this.minTex,this.minTarget]=r(),[this.secondTex,this.secondTarget]=r(),[this.sunTex,this.sunTarget]=r(),[this.tauTex,this.tauTarget]=r(),[this.glowTex,this.glowTarget]=r(),n.bindFramebuffer(n.FRAMEBUFFER,null),this.size=[e,t]}bind(e,t,n,r){let i=this.gl;i.activeTexture(i.TEXTURE0+r),i.bindTexture(i.TEXTURE_2D,n??null),i.uniform1i(i.getUniformLocation(e,t),r)}blendFor(e,t,n){let r=(e[0]+e[1]+e[2])/3;return Math.min(1.4,Math.max(0,(r-n)/(t-n)))}drawScene(e,t,n,r,i,a,o,s=7.5){let c=this.gl,{width:l,height:u}=e;this.canvas.width=l,this.canvas.height=u,this.ensureTarget(l,u),c.bindVertexArray(this.vao),c.viewport(0,0,l,u);for(let e of[this.minTarget,this.secondTarget,this.sunTarget,this.tauTarget,this.glowTarget]){let t=e===this.glowTarget?0:e===this.tauTarget||e===this.sunTarget?1:f;c.bindFramebuffer(c.FRAMEBUFFER,e),c.clearColor(t,t,t,1),c.clear(c.COLOR_BUFFER_BIT)}c.bindFramebuffer(c.FRAMEBUFFER,this.target),c.disable(c.BLEND),c.useProgram(this.plateProg),this.bind(this.plateProg,`u_light`,this.get(`plate_light`),0),this.bind(this.plateProg,`u_dark`,this.get(`plate_dark`),1),this.bind(this.plateProg,`u_wallMask`,this.get(`wall_mask`),2),c.uniform1f(c.getUniformLocation(this.plateProg,`u_lightScale`),e.plate.light.scale),c.uniform1f(c.getUniformLocation(this.plateProg,`u_darkScale`),e.plate.dark.scale),c.uniform3fv(c.getUniformLocation(this.plateProg,`u_aLight`),S(e.wall_bake.light)),c.uniform3fv(c.getUniformLocation(this.plateProg,`u_aDark`),S(e.wall_bake.dark)),c.uniform3fv(c.getUniformLocation(this.plateProg,`u_wall`),S(n)),c.drawArrays(c.TRIANGLES,0,3);let d=S(r);c.enable(c.BLEND),c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.useProgram(this.frameProg),this.bind(this.frameProg,`u_light`,this.get(`frame_light`),0),this.bind(this.frameProg,`u_dark`,this.get(`frame_dark`),1);let p=i?this.get(`grain_${i}`):void 0;this.bind(this.frameProg,`u_grain`,p,2),c.uniform1f(c.getUniformLocation(this.frameProg,`u_wood`),+!!p),c.uniform1f(c.getUniformLocation(this.frameProg,`u_lightScale`),e.frame.light.scale),c.uniform1f(c.getUniformLocation(this.frameProg,`u_darkScale`),e.frame.dark.scale),c.uniform1f(c.getUniformLocation(this.frameProg,`u_aLight`),e.frame_bake.light),c.uniform1f(c.getUniformLocation(this.frameProg,`u_aDark`),e.frame_bake.dark),c.uniform3fv(c.getUniformLocation(this.frameProg,`u_color`),d),c.uniform1f(c.getUniformLocation(this.frameProg,`u_blend`),this.blendFor(d,e.frame_bake.light,e.frame_bake.dark)),c.drawArrays(c.TRIANGLES,0,3);let m=e.zone_bake.light,h=e.zone_bake.dark;for(let{layer:n,key:r}of t){let t=a.get(`${n.slot}:0`),i=this.blendFor(t?.color??[.5,.5,.5],m,h);c.enable(c.BLEND),c.blendFunc(c.ZERO,c.SRC_COLOR),c.useProgram(this.shadowProg),this.bind(this.shadowProg,`u_light`,this.get(`${r}/shadow_light`),0),this.bind(this.shadowProg,`u_dark`,this.get(`${r}/shadow_dark`),1),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_lightScale`),n.shadow.light.scale),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_darkScale`),n.shadow.dark.scale),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_blend`),i);let s=n.room_shadow,l=!!s&&!!this.get(`${r}/sun_light`)&&!!this.get(`${r}/rest_dark`);c.uniform1f(c.getUniformLocation(this.shadowProg,`u_hasSplit`),+!!l),this.bind(this.shadowProg,`u_sunLight`,l?this.get(`${r}/sun_light`):void 0,6),this.bind(this.shadowProg,`u_sunDark`,l?this.get(`${r}/sun_dark`):void 0,7),this.bind(this.shadowProg,`u_restLight`,l?this.get(`${r}/rest_light`):void 0,8),this.bind(this.shadowProg,`u_restDark`,l?this.get(`${r}/rest_dark`):void 0,9),c.uniform2f(c.getUniformLocation(this.shadowProg,`u_sunScale`),s?.sun.light.scale??1,s?.sun.dark.scale??1),c.uniform2f(c.getUniformLocation(this.shadowProg,`u_restScale`),s?.rest.light.scale??1,s?.rest.dark.scale??1);let u=e.plate.sun_share?this.get(`sun_share`):void 0;c.uniform1f(c.getUniformLocation(this.shadowProg,`u_hasShare`),+!!u),this.bind(this.shadowProg,`u_share`,u,5),this.bind(this.shadowProg,`u_min`,this.minTex??void 0,2),this.bind(this.shadowProg,`u_second`,this.secondTex??void 0,3),this.bind(this.shadowProg,`u_sunBook`,this.sunTex??void 0,4),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_raw`),0),c.drawArrays(c.TRIANGLES,0,3),c.blendEquation(c.MIN),c.bindFramebuffer(c.FRAMEBUFFER,this.secondTarget),this.bind(this.shadowProg,`u_second`,void 0,3),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_raw`),2),c.drawArrays(c.TRIANGLES,0,3),c.bindFramebuffer(c.FRAMEBUFFER,this.minTarget),this.bind(this.shadowProg,`u_min`,void 0,2),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_raw`),1),c.drawArrays(c.TRIANGLES,0,3),c.blendEquation(c.FUNC_ADD),c.bindFramebuffer(c.FRAMEBUFFER,this.sunTarget),this.bind(this.shadowProg,`u_min`,this.minTex??void 0,2),this.bind(this.shadowProg,`u_sunBook`,void 0,4),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_raw`),3),c.drawArrays(c.TRIANGLES,0,3),n.transmittance&&(c.bindFramebuffer(c.FRAMEBUFFER,this.tauTarget),this.bind(this.shadowProg,`u_light`,this.get(`${r}/tau_light`),0),this.bind(this.shadowProg,`u_dark`,this.get(`${r}/tau_dark`),1),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_lightScale`),1),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_darkScale`),1),c.uniform1f(c.getUniformLocation(this.shadowProg,`u_raw`),4),c.drawArrays(c.TRIANGLES,0,3)),c.bindFramebuffer(c.FRAMEBUFFER,this.target),c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.useProgram(this.zoneProg);let d=this.zoneProg;n.zones.forEach((e,t)=>{let i=`${n.slot}:${t}`,s=a.get(i);if(!s)return;this.bind(d,`u_light`,this.get(`${r}/${e.id}_light`),0),this.bind(d,`u_dark`,this.get(`${r}/${e.id}_dark`),1),this.bind(d,`u_uv`,this.get(`${r}/${e.id}_uv`),2),this.bind(d,`u_fabric`,this.get(`fabric_${i}`),3),this.bind(d,`u_trimFabric`,this.get(`trim_${i}`),4),this.bind(d,`u_slot`,this.get(`${r}/${e.id}_slot`),5);let l=e.closed?this.get(`${r}/${e.id}_closed_light`):void 0,u=e.closed?this.get(`${r}/${e.id}_closed_dark`):void 0,f=!!(e.closed&&l&&u);this.bind(d,`u_closedLight`,l,6),this.bind(d,`u_closedDark`,u,7),this.bind(d,`u_tau`,this.tauTex??void 0,8),c.uniform1f(c.getUniformLocation(d,`u_hasClosed`),+!!f),c.uniform1f(c.getUniformLocation(d,`u_closedLightScale`),e.closed?.light.scale??1),c.uniform1f(c.getUniformLocation(d,`u_closedDarkScale`),e.closed?.dark.scale??1),c.uniform1f(c.getUniformLocation(d,`u_lightScale`),e.light.scale),c.uniform1f(c.getUniformLocation(d,`u_darkScale`),e.dark.scale),c.uniform2f(c.getUniformLocation(d,`u_uvScale`),e.uv.scale_u,e.uv.scale_v),c.uniform1f(c.getUniformLocation(d,`u_aLight`),m),c.uniform1f(c.getUniformLocation(d,`u_aDark`),h),c.uniform3fv(c.getUniformLocation(d,`u_color`),s.color),c.uniform1f(c.getUniformLocation(d,`u_hasFabric`),+!!s.image);let p=s.railroaded?100/Math.max(40,s.widthCm??300):100/(s.repeatCm*(s.tileAspect??1));c.uniform2f(c.getUniformLocation(d,`u_repeat`),100/s.repeatCm,p);let g=e.trim?o.get(i):void 0;c.uniform1f(c.getUniformLocation(d,`u_hasTrim`),+!!e.trim),c.uniform3fv(c.getUniformLocation(d,`u_trimColor`),g?.color??[.4,.33,.25]),c.uniform1f(c.getUniformLocation(d,`u_hasTrimFabric`),+!!g?.image);let _=g?.repeatCm??24;c.uniform2f(c.getUniformLocation(d,`u_trimRepeat`),100/_,100/_),c.uniform1f(c.getUniformLocation(d,`u_blend`),this.blendFor(s.color,m,h)),c.uniform1f(c.getUniformLocation(d,`u_openwork`),s.image?s.openwork??0:0),c.uniform1f(c.getUniformLocation(d,`u_openInvert`),+!!s.openInvert),c.uniform1f(c.getUniformLocation(d,`u_coverageOnly`),0),c.uniform1f(c.getUniformLocation(d,`u_part`),0),c.drawArrays(c.TRIANGLES,0,3),c.bindFramebuffer(c.FRAMEBUFFER,this.glowTarget),c.uniform1f(c.getUniformLocation(d,`u_part`),1),c.drawArrays(c.TRIANGLES,0,3),c.uniform1f(c.getUniformLocation(d,`u_part`),0),c.bindFramebuffer(c.FRAMEBUFFER,this.target),c.uniform1f(c.getUniformLocation(d,`u_coverageOnly`),1);for(let e of[this.minTarget,this.secondTarget])c.bindFramebuffer(c.FRAMEBUFFER,e),c.drawArrays(c.TRIANGLES,0,3);c.bindFramebuffer(c.FRAMEBUFFER,this.sunTarget),c.blendFunc(c.ZERO,c.ONE_MINUS_SRC_ALPHA),c.drawArrays(c.TRIANGLES,0,3),c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA),c.bindFramebuffer(c.FRAMEBUFFER,this.target)})}c.disable(c.BLEND),c.bindFramebuffer(c.FRAMEBUFFER,null),c.useProgram(this.toneProg),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,this.targetTex),c.uniform1i(c.getUniformLocation(this.toneProg,`u_src`),0),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,this.glowTex),c.uniform1i(c.getUniformLocation(this.toneProg,`u_glow`),1),c.uniform1f(c.getUniformLocation(this.toneProg,`u_exposure`),s),c.drawArrays(c.TRIANGLES,0,3),c.bindVertexArray(null)}},w=`/perde-saha/katman`,T={klasik:`Klasik salon`,modern:`Modern daire`,balikSirti:`Balık sırtı parke`,rustik:`Rustik ahşap`},E=[270,290,310],D=[`stor`,`tul`,`fon`,`bando`],O={stor:`Stor`,tul:`Tül`,fon:`Fon`,bando:`Bando`},k=[[`Beyaz`,`#EDEDE9`,null],[`Krem`,`#E2DCCB`,null],[`Dişbudak`,`#CBB48A`,`disbudak`],[`Altın meşe`,`#C9964E`,`mese`],[`Koyu meşe`,`#8F6034`,`koyu-mese`],[`Ceviz`,`#8A5A34`,`ceviz`],[`Antrasit`,`#3C3F41`,null],[`Siyah`,`#222422`,null]],A=[[`Beyaz`,`#F2F0EC`],[`Kırık beyaz`,`#EAE5DC`],[`Krem`,`#E6DCC8`],[`Bej`,`#DCCFB8`],[`Açık gri`,`#D6D6D4`],[`Adaçayı`,`#CBD3C4`],[`Pudralı mavi`,`#C7D2D8`]],j={tul:`#FFFFFF`,fon:`#A08A6E`,stor:`#D8CFC0`,blackout:`#C9C2B4`,zebra:`#D8CFC0`,bando:`#A08A6E`,japon:`#C7BCA8`},M=[`kristal`,`organze`,`vual`,`petek`,`santuk`,`keten`],N={tul:{option:`tul-kapali`,pleat:`normal3`,weave:`vual`},fon:{option:`fon-cift-kanat`,pleat:`normal3`,weave:null}},P=e=>document.getElementById(e),F=`perde-studyo-secim`,I=class{compositor=new C(P(`stage`));index=[];scene=null;room=``;window=``;wantedWindow=``;wanted=new Map;wall=`#EAE5DC`;roomHeight=270;frame=`#EDEDE9`;frameGrain=null;fabrics=new Map;trims=new Map;openSlot=`fon`;loaded=new Set;loading=!1;exposure=2;async start(){let e=await fetch(`${w}/index.json`);if(!e.ok)throw Error(`Sahne listesi bulunamadı. Önce pişirme yapılmalı.`);if(this.index=(await e.json()).scenes,!this.index.length)throw Error(`Henüz pişirilmiş sahne yok.`);this.room=this.rooms()[0],this.wantedWindow=this.windowsFor(this.room)[0].window;for(let[e,t]of Object.entries(N))this.wanted.set(e,t);this.restore(),this.resolveWindow(),this.bindRoom(),this.bindWalls(),this.bindFrames(),P(`save`).addEventListener(`click`,()=>this.save()),await this.load()}rooms(){let e=Object.keys(T),t=new Set(this.index.map(e=>e.room));return[...e.filter(e=>t.has(e)),...[...t].filter(t=>!e.includes(t))]}ceiling(){return E.includes(this.roomHeight)?this.roomHeight:E[0]}windowsFor(e){let t=this.ceiling(),n=this.index.filter(n=>n.room===e&&n.ceiling===t);return n.length?n:this.index.filter(t=>t.room===e)}renderMenus(){this.buttons(`rooms`,this.rooms().map(e=>({id:e,label:T[e]??e,active:e===this.room})),async e=>{this.room=e,this.resolveWindow(),await this.load()}),this.buttons(`windows`,this.windowsFor(this.room).map(e=>({id:e.window,label:e.window_label,active:e.window===this.window})),async e=>{this.wantedWindow=e,this.resolveWindow(),await this.load()}),this.renderSlots()}resolveWindow(){let e=this.windowsFor(this.room),t=e.find(e=>e.window===this.wantedWindow);this.window=(t??e[0])?.window??``}optionsFor(e){let t=new Map;for(let n of this.scene?.layers??[])n.slot===e&&!t.has(n.option)&&t.set(n.option,n.label);return[...t].map(([e,t])=>({id:e,label:t}))}pleatsFor(e,t){let n=new Map;for(let r of this.scene?.layers??[])r.slot===e&&r.option===t&&r.pleat&&n.set(r.pleat,r.pleat_label??r.pleat);return[...n].map(([e,t])=>({id:e,label:t}))}weavesFor(e,t){let n=new Map;for(let r of this.scene?.layers??[])r.slot===e&&r.option===t&&r.weave&&n.set(r.weave,r.weave_label??r.weave);return M.filter(e=>n.has(e)).map(e=>({id:e,label:n.get(e)}))}layerFor(e){let t=this.wanted.get(e);if(!t)return null;let n=(this.scene?.layers??[]).filter(n=>n.slot===e&&n.option===t.option);return n.find(e=>e.pleat===t.pleat&&e.weave===t.weave)??n.find(e=>e.pleat===t.pleat)??n[0]??null}stack(){let e=[];for(let t of D){let n=this.layerFor(t);n&&e.push({layer:n,key:n.key})}return e}renderSlots(){P(`slots`).replaceChildren(...D.flatMap(e=>{let t=this.optionsFor(e);if(!t.length)return[];let n=this.wanted.get(e),r=this.openSlot===e,i=document.createElement(`section`);i.className=r?`slot open`:`slot`;let a=document.createElement(`button`);a.type=`button`,a.className=`slot-head`,a.setAttribute(`aria-expanded`,String(r));let o=document.createElement(`span`);o.className=`slot-title`,o.textContent=O[e]??e;let s=n?t.find(e=>e.id===n.option):void 0,c=document.createElement(`span`);c.className=n?s?`slot-summary`:`slot-summary pending`:`slot-summary empty`,c.textContent=n?s?s.label:`henüz pişmedi`:`Yok`;let l=document.createElement(`i`);if(l.className=`chevron`,l.setAttribute(`aria-hidden`,`true`),a.append(o,c,l),a.addEventListener(`click`,()=>{this.openSlot=r?``:e,this.renderSlots()}),i.append(a),!r)return[i];let u=document.createElement(`div`);u.className=`slot-body`;let d=document.createElement(`div`);d.className=`cards`,u.append(d),i.append(u),d.append(this.card(``,`Yok`,null,!n,async()=>{this.wanted.set(e,null),await this.refresh()}));for(let r of t){let t=this.scene?.layers.find(t=>t.slot===e&&t.option===r.id);d.append(this.card(r.id,r.label,t?.preview?`${w}/${this.sceneKey()}/${t.key}/${t.preview}`:null,n?.option===r.id,async()=>{let t=this.pleatsFor(e,r.id),i=t.find(e=>e.id===n?.pleat)?.id,a=this.weavesFor(e,r.id),o=a.find(e=>e.id===n?.weave)?.id;this.wanted.set(e,{option:r.id,pleat:i??t[0]?.id??null,weave:o??a[0]?.id??null}),await this.refresh()}))}if(n){let t=this.pleatsFor(e,n.option);if(t.length>1){let r=document.createElement(`h3`);r.textContent=`Pile`;let i=document.createElement(`div`);i.className=`options pleats`,u.append(r,i),this.fill(i,t.map(e=>({id:e.id,label:e.label,active:e.id===n.pleat})),async t=>{this.wanted.set(e,{...n,pleat:t}),await this.refresh()})}let r=this.weavesFor(e,n.option);if(r.length>1){let t=document.createElement(`h3`);t.textContent=`Tül cinsi`;let i=document.createElement(`div`);i.className=`options pleats`,u.append(t,i),this.fill(i,r.map(e=>({id:e.id,label:e.label,active:e.id===n.weave})),async t=>{this.wanted.set(e,{...n,weave:t}),await this.refresh()})}}return[i]}))}card(e,t,n,r,i){let a=document.createElement(`button`);a.type=`button`,a.className=`card`,a.setAttribute(`aria-pressed`,String(r));let o=document.createElement(`span`);if(o.className=`card-figure`,n){let e=document.createElement(`img`);e.src=n,e.alt=``,e.loading=`lazy`,o.append(e)}else o.classList.add(`card-empty`);let s=document.createElement(`span`);return s.className=`card-label`,s.textContent=t,a.append(o,s),a.addEventListener(`click`,()=>{i()}),a}buttons(e,t,n){this.fill(P(e),t,n)}fill(e,t,n){e.replaceChildren(...t.map(e=>{let t=document.createElement(`button`);return t.type=`button`,t.textContent=e.label,t.setAttribute(`aria-pressed`,String(e.active)),t.addEventListener(`click`,()=>{n(e.id)}),t}))}bindWalls(){let e=P(`wallPicker`);e.value=this.wall,e.addEventListener(`input`,()=>{this.wall=e.value,this.renderWalls(),this.paint()}),this.renderWalls()}renderWalls(){this.buttons(`walls`,A.map(([e,t])=>({id:t,label:e,active:t.toLowerCase()===this.wall.toLowerCase()})),e=>{this.wall=e,P(`wallPicker`).value=e,this.renderWalls(),this.paint()})}bindRoom(){this.renderCeilings()}renderCeilings(){this.buttons(`ceilings`,E.map(e=>({id:String(e),label:`${(e/100).toFixed(2).replace(`.`,`,`)} m`,active:e===this.roomHeight})),async e=>{this.roomHeight=Number(e),await this.load()}),P(`roomNote`).textContent=`Perde boyu ${this.roomHeight-6} cm.`}bindFrames(){let e=P(`framePicker`);e.value=this.frame,e.addEventListener(`input`,()=>{this.frame=e.value,this.frameGrain=k.find(([,t])=>t.toLowerCase()===e.value.toLowerCase())?.[2]??null,this.applyFrame()}),this.renderFrames()}async applyFrame(){let e=this.scene;if(e&&this.frameGrain){let t=e.frame.grain[this.frameGrain];t&&await this.texture(`${w}/${this.sceneKey()}/${t}`,`grain_${this.frameGrain}`)}this.renderFrames(),this.paint()}renderFrames(){this.buttons(`frames`,k.map(([e,t])=>({id:t,label:e,active:t.toLowerCase()===this.frame.toLowerCase()})),e=>{this.frame=e,this.frameGrain=k.find(([,t])=>t===e)?.[2]??null,P(`framePicker`).value=e,this.applyFrame()})}renderZones(){P(`zones`).replaceChildren(...this.stack().flatMap(({layer:e})=>e.zones.flatMap((t,n)=>{let r=`${e.slot}:${n}`,i=t.sheer??t.kind===`tul`,a=[this.zoneCard(r,t.label,t.kind,this.fabrics,`fabric_${r}`,i)];return t.trim&&a.push(this.zoneCard(r,t.trim.label,t.trim.style,this.trims,`trim_${r}`,!1)),a})))}zoneCard(e,t,n,r,i,a){let o=r.get(e),s=document.createElement(`div`);s.className=`zone`;let c=document.createElement(`header`),l=document.createElement(`span`);l.className=`zone-name`,l.textContent=t;let u=document.createElement(`span`);u.className=`zone-kind`,u.textContent=n,c.append(l,u);let d=document.createElement(`div`);d.className=`zone-row`;let f=document.createElement(`input`);f.type=`color`,f.id=`${i}-color`,f.value=L(o.color),f.addEventListener(`input`,()=>{o.color=S(f.value),o.image=void 0,this.showLaceRow(i,!1),this.paint(),this.status(`${t}: renk uygulandı.`)});let p=document.createElement(`label`);p.className=`file`,p.textContent=`Kumaş fotoğrafı`;let m=document.createElement(`input`);m.type=`file`,m.accept=`image/*`,m.id=`${i}-file`,m.addEventListener(`change`,()=>{this.loadFabric(m,o,i,t)}),p.append(m),d.append(f,p);let h=document.createElement(`div`);h.className=`zone-row`;let g=document.createElement(`input`);g.type=`number`,g.min=`2`,g.max=`300`,g.step=`1`,g.id=`${i}-repeat`,g.value=String(o.repeatCm),g.addEventListener(`change`,()=>{o.repeatCm=Math.max(2,Number(g.value)||24),this.paint()});let _=document.createElement(`p`);if(_.className=`hint`,_.textContent=`Desen raporu (cm)`,h.append(g,_),s.append(c,d,h),a){let e=document.createElement(`div`);e.className=`zone-row`;let n=document.createElement(`label`);n.className=`check`;let r=document.createElement(`input`);r.type=`checkbox`,r.id=`${i}-railroaded`,r.checked=o.railroaded??!1,n.append(r,document.createTextNode(` Enine kullanılıyor`));let a=document.createElement(`input`);a.type=`number`,a.min=`40`,a.max=`400`,a.step=`10`,a.id=`${i}-width`,a.value=String(o.widthCm??300),a.disabled=!r.checked;let c=document.createElement(`p`);c.className=`hint`,c.textContent=`Kumaş eni (cm) — perdenin boyu bu olur`,r.addEventListener(`change`,()=>{o.railroaded=r.checked,a.disabled=!r.checked,this.paint(),this.status(r.checked?`${t}: kumaş enine kullanılıyor, eni perdenin boyu.`:`${t}: kumaş boyuna kullanılıyor.`)}),a.addEventListener(`change`,()=>{o.widthCm=Math.min(400,Math.max(40,Number(a.value)||300)),this.paint()}),e.append(n,a,c),s.append(e);let l=document.createElement(`div`);l.className=`zone-row lace`,l.hidden=!o.image;let u=document.createElement(`input`);u.type=`range`,u.min=`0`,u.max=`100`,u.step=`5`,u.id=`${i}-openwork`,u.value=String(Math.round((o.openwork??0)*100));let d=document.createElement(`label`);d.className=`check`;let f=document.createElement(`input`);f.type=`checkbox`,f.id=`${i}-openinvert`,f.checked=o.openInvert??!1,d.append(f,document.createTextNode(` Ters`));let p=document.createElement(`p`);p.className=`hint`;let m=()=>{let e=Math.round((o.openwork??0)*100);p.textContent=e===0?`Delik oranı — güpür ve dantel için`:`Delik oranı %${e}`};m(),u.addEventListener(`input`,()=>{o.openwork=Number(u.value)/100,m(),this.paint()}),f.addEventListener(`change`,()=>{o.openInvert=f.checked,this.paint()}),l.append(u,d,p),s.append(l)}return s}showLaceRow(e,t){let n=document.getElementById(`${e}-openwork`)?.closest(`.lace`);n instanceof HTMLElement&&(n.hidden=!t)}async loadFabric(e,t,n,r){let i=e.files?.[0];if(e.value=``,i){this.status(`${r}: kumaş işleniyor…`);try{let e=await createImageBitmap(i,{imageOrientation:`from-image`}),a=await u(e,r,t.repeatCm);if(e.close(),!a){this.status(`${r}: vazgeçildi.`);return}this.compositor.upload(n,a.tile,{mipmap:!0}),t.image=a.tile,t.repeatCm=a.widthCm,t.tileAspect=a.heightCm/a.widthCm;let o=document.getElementById(`${n}-repeat`);o&&(o.value=String(a.widthCm)),this.showLaceRow(n,!0),this.paint(),this.status(`${r}: kumaş uygulandı (${a.widthCm} × ${a.heightCm} cm).`)}catch(e){console.error(e),this.status(`Fotoğraf okunamadı. Tekrar dene.`)}}}sceneKey(){return`${this.room}__${this.window}__${this.ceiling()}`}async load(){if(!this.loading){this.loading=!0,this.status(`Sahne yükleniyor…`);try{let e=`${w}/${this.sceneKey()}`,t=await(await fetch(`${e}/manifest.json`)).json();this.scene=t,this.loaded.clear(),await Promise.all([this.texture(`${e}/${t.plate.light.file}`,`plate_light`),this.texture(`${e}/${t.plate.dark.file}`,`plate_dark`),this.texture(`${e}/${t.plate.wall_mask}`,`wall_mask`),this.texture(`${e}/${t.frame.light.file}`,`frame_light`),this.texture(`${e}/${t.frame.dark.file}`,`frame_dark`),...t.plate.sun_share?[this.texture(`${e}/${t.plate.sun_share}`,`sun_share`)]:[]]),await this.refresh(),this.renderCeilings(),this.frameGrain&&await this.applyFrame()}catch(e){console.error(e),this.status(`Sahne yüklenemedi: ${String(e)}`)}finally{this.loading=!1}}}async refresh(){let e=this.scene;if(!e)return;let t=`${w}/${this.sceneKey()}`,n=[];for(let{layer:e,key:r}of this.stack()){let i=`${t}/${r}`;if(n.push(this.texture(`${i}/${e.shadow.light.file}`,`${r}/shadow_light`)),n.push(this.texture(`${i}/${e.shadow.dark.file}`,`${r}/shadow_dark`)),e.room_shadow)for(let t of[`sun`,`rest`])for(let a of[`light`,`dark`])n.push(this.texture(`${i}/${e.room_shadow[t][a].file}`,`${r}/${t}_${a}`));e.transmittance&&(n.push(this.texture(`${i}/${e.transmittance.light}`,`${r}/tau_light`)),n.push(this.texture(`${i}/${e.transmittance.dark}`,`${r}/tau_dark`))),e.zones.forEach((t,a)=>{n.push(this.texture(`${i}/${t.light.file}`,`${r}/${t.id}_light`)),n.push(this.texture(`${i}/${t.dark.file}`,`${r}/${t.id}_dark`)),n.push(this.texture(`${i}/${t.uv.file}`,`${r}/${t.id}_uv`)),t.closed&&(n.push(this.texture(`${i}/${t.closed.light.file}`,`${r}/${t.id}_closed_light`)),n.push(this.texture(`${i}/${t.closed.dark.file}`,`${r}/${t.id}_closed_dark`))),t.trim&&n.push(this.texture(`${i}/${t.trim.slot}`,`${r}/${t.id}_slot`));let o=`${e.slot}:${a}`;this.fabrics.has(o)||this.fabrics.set(o,{color:S(j[t.kind]??`#B3A48C`),repeatCm:24}),t.trim&&!this.trims.has(o)&&this.trims.set(o,{color:S(`#6E5C46`),repeatCm:24})})}if(this.status(`Perde yükleniyor…`),await Promise.all(n),this.renderMenus(),this.renderZones(),this.paint(),!e.layers.length){this.status(`Bu oda için perdeler henüz pişirilmedi.`);return}let r=this.stack().map(({layer:e})=>e.label);this.status(r.length?r.join(` + `):`Perdesiz oda`)}async texture(e,t){if(this.loaded.has(t))return;let n=await fetch(e);if(!n.ok)throw Error(`${e} bulunamadı`);let r=await createImageBitmap(await n.blob(),{colorSpaceConversion:`none`,premultiplyAlpha:`none`});this.compositor.upload(t,r),this.loaded.add(t)}paint(){if(!this.scene)return;this.remember();let[e,t,n]=S(this.wall).map(e=>{let t=e*.82,n=t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055;return Math.round(Math.min(1,Math.max(0,n))*255)});document.documentElement.style.setProperty(`--room-edge`,`rgb(${e}, ${t}, ${n})`),this.compositor.drawScene(this.scene,this.stack(),this.wall,this.frame,this.frameGrain,this.fabrics,this.trims,this.exposure)}save(){let e=P(`stage`),t=document.createElement(`a`);t.href=e.toDataURL(`image/png`),t.download=`perde-${this.sceneKey()}.png`,t.click(),this.status(`Görsel indirildi.`)}restore(){try{let e=localStorage.getItem(F);if(!e)return;let t=JSON.parse(e);this.index.some(e=>e.room===t.room)&&(this.room=t.room),t.window&&(this.wantedWindow=t.window),this.wall=t.wall??this.wall,this.roomHeight=t.roomHeight??this.roomHeight,this.frame=t.frame??this.frame,this.frameGrain=t.frameGrain??this.frameGrain;for(let[e,n]of t.picks??[])this.wanted.set(e,n);for(let[e,n]of t.fabrics??[])this.fabrics.set(e,{...n});for(let[e,n]of t.trims??[])this.trims.set(e,{...n})}catch{}}remember(){let e=e=>[...e].map(([e,t])=>[e,{color:t.color,repeatCm:t.repeatCm,railroaded:t.railroaded,widthCm:t.widthCm,openwork:t.openwork,openInvert:t.openInvert}]);try{localStorage.setItem(F,JSON.stringify({room:this.room,window:this.wantedWindow,wall:this.wall,roomHeight:this.roomHeight,frame:this.frame,frameGrain:this.frameGrain,picks:[...this.wanted],fabrics:e(this.fabrics),trims:e(this.trims)}))}catch{}}status(e){P(`status`).textContent=e}};function L(e){let t=e=>{let t=e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055;return Math.round(Math.min(1,Math.max(0,t))*255).toString(16).padStart(2,`0`)};return`#${t(e[0])}${t(e[1])}${t(e[2])}`}new I().start().catch(e=>{console.error(e),P(`status`).textContent=String(e)});