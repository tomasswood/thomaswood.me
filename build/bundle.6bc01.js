!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}({"+5hP":function(e){e.exports={header:{title:"Thomas Wood",subtitle:"Web Developer | Software Engineer",background_color:"#58A4B0",background_image:"newcastle.jpg",background_images:[{width:2560,filename:"newcastle-xlarge.jpg"},{width:1920,filename:"newcastle.jpg"},{width:1600,filename:"newcastle-large.jpg"},{width:1280,filename:"newcastle-medium.jpg"},{width:960,filename:"newcastle-small.jpg"},{width:480,filename:"newcastle-xsmall.jpg"}]},profile:{title:"Profile",background_color:"#FFF",about:{title:"About me",description:"Web developer & software engineer with 6 years' experience focusing on scalable solutions for frontend and backend development. Passionate about creating high quality products and improving user experience."},bio:{title:"Bio",list:[{label:"Name",value:"Thomas Wood"},{label:"Age",value:24},{label:"Location",value:"Newcastle"}]}},experience:{title:"Experience",background_color:"#414857",list:[{title:"Education",list:[{location:"Tomaree High School",time:{from:"2005",to:"2010"},title:"High School Certificate",description:"I graduated high school where I had a large focus in Information Technology and Software Development."},{location:"University of Newcastle",time:{from:"2011",to:"2013"},title:"Bachelor of Information Technology",description:"During my degree I focused on Software Development whilst also taking a keen interest in Digital Media and design. I learnt a lot of different languages and about OOP principles."}]},{title:"Career",list:[{location:"Wipro Promax Analytics Solutions",time:{from:"Nov 2011",to:"Apr 2014"},title:"QA Analyst",description:"During my studies I worked part-time as a QA analyst writing and performing functional, regression, integration and unit tests. I was responsible for evaluating software test procedures and documenting test cases based on functionl and technical specifications."},{location:"One-Clique Designs",time:{from:"Jan 2011",to:"May 2014"},title:"Web Engineer, Co-Founder",description:"I ran a partnership web design business catering to small and medium sized businesses; where we completed multiple contracts working alongside clients to deliver to them a solution for their future web presence. I worked on the design and coding solution side of the business, focusing mainly on building dynamic templates from scratch and implementing them into a Content Management System."},{location:"Flindle",time:{from:"Aug 2013",to:"May 2014"},title:"Developer, DBA, Co-Founder",description:"I co-founded and was one of the main developers of Flindle; working on both the frontend and the backend, building a scalable online booking management system for small-medium businesses. We won the DiG Festival Pitch Competition and participated in and completed the Slingshot Start-up Acceleration program."},{location:"YesBookit",time:{from:"May 2014",to:"Present"},title:"Software & Web Developer",description:"During my time at YesBookit I have been responsible for developing the core software in an agile environment through continuous improvement from database design through to frontend development. I manage my own projects from inception to implementation working directly alongside support and sales teams, as well as clients, to determine the requirements and scope of new features. My main focus within the team is on front-end design and the implementation of modern technology."}]}]},skills:{title:"Skills",background_color:"#FFF",list:[{label:"HTML",value:5},{label:"CSS",value:5},{label:"SASS",value:4},{label:"LESS",value:3},{label:"JavaScript",value:4},{label:"jQuery",value:5},{label:"React",value:4},{label:"Perl",value:3},{label:"PHP",value:2},{label:"MySQL",value:4}]},contact:{title:"Contact",background_color:"#DF6F5D",list:[{label:"Screencast-O-Matic",link:"https://screencast-o-matic.com/u/h3Hj/thomas-wood",icon_class:"dot-circle-o"},{label:"tom@thomaswood.me",link:"mailto:tom@thomaswood.me",icon_class:"envelope"},{label:"Stack Overflow",link:"https://stackoverflow.com/users/1850782/thomas-wood",icon_class:"stack-overflow"},{label:"CodePen",link:"https://codepen.io/tomasswood/",icon_class:"codepen"},{label:"LinkedIn",link:"https://www.linkedin.com/in/thomas-wood-aus",icon_class:"linkedin-square"},{label:"GitHub",link:"https://github.com/tomasswood",icon_class:"github"}]}}},0:function(e,t,n){e.exports=n("pwNi")},"4eXR":function(e,t,n){e.exports=n.p+"234e30fcb8d8f3074faf94677f88c158.jpg"},"6GSK":function(e,t,n){"use strict";function o(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return d});var a=n("KM04"),l=(n.n(a),n("QAmr")),s=n("jJeW"),c=n("I3gj"),u=n("XGvW"),p=n("rR8P"),f=n("TqHG"),d=function(e){function t(){for(var t,o,i,a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return t=o=r(this,e.call.apply(e,[this].concat(l))),o.state={profile:n("+5hP")},i=t,r(o,i)}return i(t,e),t.prototype.componentDidMount=function(){var e=this;n.i(l.default)("/profile.json").then(function(e){return e.json()}).then(function(t){return e.setState({profile:t})})},t.prototype.render=function(e,t){var r=t.profile;return o(e),n.i(a.h)("div",{itemscope:!0,itemprop:"Person",itemtype:"https://schema.org/Person"},r.header&&n.i(a.h)(s.a,r.header),r.profile&&n.i(a.h)(c.a,r.profile),r.experience&&n.i(a.h)(u.a,r.experience),r.skills&&n.i(a.h)(p.a,r.skills),r.contact&&n.i(a.h)(f.a,r.contact))},t}(a.Component)},ELET:function(e,t,n){e.exports=n.p+"f07de9feb4b96a94cca030577f550cd5.jpg"},I3gj:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return l});var i=n("KM04"),a=(n.n(i),n.i(i.h)("div",{class:"divider"})),l=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.bio.list.map(function(e){return n.i(i.h)("li",{key:e.label},n.i(i.h)("strong",null,e.label))}),o=e.bio.list.map(function(e){return n.i(i.h)("li",{key:e.value},e.value)}),r=t.reduce(function(e,t,n){return e.push(t,o[n]),e},[]);return n.i(i.h)("main",{class:"main profile",style:{backgroundColor:e.background_color||null}},n.i(i.h)("div",{class:"main-wrapper"},n.i(i.h)("div",{class:"main-wrapper-text"},n.i(i.h)("h3",null,e.title)),a,n.i(i.h)("div",{class:"summary"},n.i(i.h)("h5",null,e.about.title),n.i(i.h)("p",null,e.about.description)),r.length&&n.i(i.h)("div",{class:"details"},n.i(i.h)("h5",null,e.bio.title),n.i(i.h)("ul",null,r))))},t}(i.Component)},JBMF:function(e,t,n){function o(e){return n(r(e))}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./newcastle-large.jpg":"TH7f","./newcastle-medium.jpg":"mo1Q","./newcastle-small.jpg":"ELET","./newcastle-xlarge.jpg":"YmqD","./newcastle-xsmall.jpg":"4eXR","./newcastle.jpg":"UCVP"};o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="JBMF"},JkW7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("yY49");n.n(o);t.default=n("qLaj").a},KM04:function(e){!function(){"use strict";function t(){}function n(e,n){var o,r,i,a,l=W;for(a=arguments.length;a-- >2;)M.push(arguments[a]);for(n&&null!=n.children&&(M.length||M.push(n.children),delete n.children);M.length;)if((r=M.pop())&&void 0!==r.pop)for(a=r.length;a--;)M.push(r[a]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?l[l.length-1]+=r:l===W?l=[r]:l.push(r),o=i;var s=new t;return s.nodeName=e,s.children=l,s.attributes=null==n?void 0:n,s.key=null==n?void 0:n.key,void 0!==E.vnode&&E.vnode(s),s}function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e,t){return n(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==A.push(e)&&(E.debounceRendering||L)(a)}function a(){var e,t=A;for(A=[];e=t.pop();)e.__d&&O(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function u(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===R.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)d(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var l=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function d(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this.__l[e.type](E.event&&E.event(e)||e)}function m(){for(var e;e=D.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function b(e,t,n,o,r,i){I++||(U=null!=r&&void 0!==r.ownerSVGElement,H=null!=e&&!("__preactattr_"in e));var a=_(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--I||(H=!1,i||m()),a}function _(e,t,n,o,r){var i=e,a=U;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0))),i.__preactattr_=!0,i;var l=t.nodeName;if("function"==typeof l)return P(e,t,n,o);if(U="svg"===l||"foreignObject"!==l&&U,l+="",(!e||!s(e,l))&&(i=u(l,U),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),y(e,!0)}var c=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)p[d[h].name]=d[h].value}return!H&&f&&1===f.length&&"string"==typeof f[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=f[0]&&(c.nodeValue=f[0]):(f&&f.length||null!=c)&&v(i,f,n,o,H||null!=p.dangerouslySetInnerHTML),w(i,t.attributes,p),U=a,i}function v(e,t,n,o,r){var i,a,s,c,u,f=e.childNodes,d=[],h={},m=0,b=0,v=f.length,g=0,w=t?t.length:0;if(0!==v)for(var k=0;k<v;k++){var j=f[k],x=j.__preactattr_,C=w&&x?j._component?j._component.__k:x.key:null;null!=C?(m++,h[C]=j):(x||(void 0!==j.splitText?!r||j.nodeValue.trim():r))&&(d[g++]=j)}if(0!==w)for(var k=0;k<w;k++){c=t[k],u=null;var C=c.key;if(null!=C)m&&void 0!==h[C]&&(u=h[C],h[C]=void 0,m--);else if(!u&&b<g)for(i=b;i<g;i++)if(void 0!==d[i]&&l(a=d[i],c,r)){u=a,d[i]=void 0,i===g-1&&g--,i===b&&b++;break}u=_(u,c,n,o),s=f[k],u&&u!==e&&u!==s&&(null==s?e.appendChild(u):u===s.nextSibling?p(s):e.insertBefore(u,s))}if(m)for(var k in h)void 0!==h[k]&&y(h[k],!1);for(;b<=g;)void 0!==(u=d[g--])&&y(u,!1)}function y(e,t){var n=e._component;n?S(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||p(e),g(e))}function g(e){for(e=e.lastChild;e;){var t=e.previousSibling;y(e,!0),e=t}}function w(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||f(e,o,n[o],n[o]=void 0,U);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||f(e,o,n[o],n[o]=t[o],U)}function k(e){var t=e.constructor.name;(F[t]||(F[t]=[])).push(e)}function j(e,t,n){var o,r=F[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),T.call(o,t,n)):(o=new T(t,n),o.constructor=e,o.render=x),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.__b=r[i].__b,r.splice(i,1);break}return o}function x(e,t,n){return this.constructor(e,n)}function C(e,t,n,o,r){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?i(e):O(e,1,r)),e.__r&&e.__r(e))}function O(e,t,n,r){if(!e.__x){var i,a,l,s=e.props,u=e.state,p=e.context,f=e.__p||s,d=e.__s||u,h=e.__c||p,_=e.base,v=e.__b,g=_||v,w=e._component,k=!1;if(_&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,u,p)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(s,u,p),e.props=s,e.state=u,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!k){i=e.render(s,u,p),e.getChildContext&&(p=o(o({},p),e.getChildContext()));var x,P,T=i&&i.nodeName;if("function"==typeof T){var N=c(i);a=w,a&&a.constructor===T&&N.key==a.__k?C(a,N,1,p,!1):(x=a,e._component=a=j(T,N,p),a.__b=a.__b||v,a.__u=e,C(a,N,0,p,!1),O(a,1,n,!0)),P=a.base}else l=g,x=w,x&&(l=e._component=null),(g||1===t)&&(l&&(l._component=null),P=b(l,i,p,n||!_,g&&g.parentNode,!0));if(g&&P!==g&&a!==w){var M=g.parentNode;M&&P!==M&&(M.replaceChild(P,g),x||(g._component=null,y(g,!1)))}if(x&&S(x),e.base=P,P&&!r){for(var W=e,L=e;L=L.__u;)(W=L).base=P;P._component=W,P._componentConstructor=W.constructor}}if(!_||n?D.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,d,h),E.afterUpdate&&E.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);I||r||m()}}function P(e,t,n,o){for(var r=e&&e._component,i=r,a=e,l=r&&e._componentConstructor===t.nodeName,s=l,u=c(t);r&&!s&&(r=r.__u);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(C(r,u,3,n,o),e=r.base):(i&&!l&&(S(i),e=a=null),r=j(t.nodeName,u,n),e&&!r.__b&&(r.__b=e,a=null),C(r,u,1,n,o),e=r.base,a&&e!==a&&(a._component=null,y(a,!1))),e}function S(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?S(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,p(t),k(e),g(t)),e.__r&&e.__r(null)}function T(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function N(e,t,n){return b(n,e,{},!1,t,!1)}var E={},M=[],W=[],L="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,R=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],D=[],I=0,U=!1,H=!1,F={};o(T.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),O(this,2)},render:function(){}});var q={h:n,createElement:n,cloneElement:r,Component:T,render:N,rerender:a,options:E};e.exports=q}()},NfrT:function(e,t,n){function o(e){return n(r(e))}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./newcastle-large.jpg":"TH7f","./newcastle-medium.jpg":"mo1Q","./newcastle-small.jpg":"ELET","./newcastle-xlarge.jpg":"YmqD","./newcastle-xsmall.jpg":"4eXR","./newcastle.jpg":"UCVP"};o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id="NfrT"},QAmr:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){function r(){var e,t=[],n=[],o={};return i.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,i,a){t.push(i=i.toLowerCase()),n.push([i,a]),e=o[i],o[i]=e?e+","+a:a}),{ok:1==(i.status/200|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:r,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}var i=new XMLHttpRequest;i.open(t.method||"get",e);for(var a in t.headers)i.setRequestHeader(a,t.headers[a]);i.withCredentials="include"==t.credentials,i.onload=function(){n(r())},i.onerror=o,i.send(t.body)})}},TH7f:function(e,t,n){e.exports=n.p+"9e4e1d8d6f4efb1f85bcc338de57704f.jpg"},TqHG:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return c});var i=n("KM04"),a=(n.n(i),n("nRaQ")),l=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.label,o=e.link,r=e.icon_class;return n.i(i.h)("div",{class:"footer-link"},n.i(i.h)("a",{href:o,target:"_blank",rel:"noopener noreferrer"},n.i(i.h)(a.a,{icon:r})," ",t))},t}(i.Component),s=n.i(i.h)("div",{class:"divider"}),c=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){return n.i(i.h)("footer",{class:"footer",style:{backgroundColor:e.background_color||null}},n.i(i.h)("div",{class:"footer-wrapper"},n.i(i.h)("div",{class:"footer-wrapper-text"},n.i(i.h)("h3",null,e.title)),s,e.list&&e.list.map(function(e){return n.i(i.h)(l,e)})))},t}(i.Component)},UCVP:function(e,t,n){e.exports=n.p+"cfb572d7700e8995aefaf25a49cbb7d9.jpg"},XGvW:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return c});var i=n("KM04"),a=(n.n(i),function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.location,o=e.time,r=e.title,a=e.description,l=[o.from,o.to].filter(function(e){return e}).join(" - ");return n.i(i.h)("div",{class:"resume-item"},n.i(i.h)("div",{class:"qualification"},n.i(i.h)("strong",null,t),n.i(i.h)("p",null,l)),n.i(i.h)("div",{class:"summary"},n.i(i.h)("strong",null,r),n.i(i.h)("p",null,a)))},t}(i.Component)),l=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.title,o=e.list;return n.i(i.h)("div",{class:"resume"},n.i(i.h)("h5",null,t),o&&o.map(function(e){return n.i(i.h)(a,e)}))},t}(i.Component),s=n.i(i.h)("div",{class:"divider"}),c=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){return n.i(i.h)("section",{class:"experience section",style:{backgroundColor:e.background_color||null}},n.i(i.h)("div",{class:"main-wrapper"},n.i(i.h)("div",{class:"main-wrapper-text"},n.i(i.h)("h3",null,e.title)),e.list&&e.list.map(function(e){return n.i(i.h)("div",{class:"experience-item"},s,n.i(i.h)(l,e))})))},t}(i.Component)},YmqD:function(e,t,n){e.exports=n.p+"fa1386098b541e95769539f4bdb64bf8.jpg"},jJeW:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return s});var i=n("KM04"),a=(n.n(i),function(e){return e.keys().map(e)}),l=function(e,t){var o="undefined"!=typeof window?window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth:"1920",r="undefined"!=typeof window?window.devicePixelRatio||1:1,i=n("JBMF")("./"+e);if(t){var l=a(n("NfrT")),s=t.reduce(function(e,t,n){return o*r<t.width&&(t.filename=l[n],e.push(t)),e},[]);if(s.length){var c=s.pop();c&&c.filename&&(i=c.filename)}}if(i)return"url("+i+")"},s=function(e){function t(t){var n=o(this,e.call(this));return n.state.background_image=l(t.background_image,t.background_images),n}return r(t,e),t.prototype.render=function(e,t){var o=t.background_image;return n.i(i.h)("header",{class:"header",style:{backgroundColor:e.background_color||null,backgroundImage:o}},n.i(i.h)("div",{class:"header-wrapper"},n.i(i.h)("div",{class:"header-wrapper-text"},n.i(i.h)("h1",{class:"title",itemprop:"name"},e.title),n.i(i.h)("h2",{class:"subtitle",itemprop:"jobTitle"},e.subtitle))))},t}(i.Component)},mo1Q:function(e,t,n){e.exports=n.p+"dde14227fd6e8257f5a31eb7deb2ea3a.jpg"},nRaQ:function(e,t,n){"use strict";var o=n("KM04");n.n(o);t.a=function(e){var t=e.icon;return n.i(o.h)("i",{class:"fa fa-"+t,"aria-hidden":"true"})}},pwNi:function(e,t,n){"use strict";var o=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var r=function(e){return e&&e.default||e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};a()}},qLaj:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return s});var i=n("KM04"),a=(n.n(i),n("6GSK")),l=n.i(i.h)("div",{id:"app"},n.i(i.h)(a.a,null)),s=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return l},t}(i.Component)},rR8P:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var i=n("KM04"),a=(n.n(i),n("nRaQ")),l=n.i(i.h)(a.a,{icon:"star"}),s=n.i(i.h)(a.a,{icon:"star-o"}),c=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){var t=e.label,o=e.value,r=Array(o).fill().map(function(){return l}),a=Array(5-o).fill().map(function(){return s});return n.i(i.h)("div",{class:"skillset-item"},n.i(i.h)("div",{class:"skill-values"},n.i(i.h)("div",{class:"skill-name"},n.i(i.h)("p",null,t)),n.i(i.h)("div",{class:"skill-score"},r,a)))},t}(i.Component),u=n.i(i.h)("div",{class:"divider"}),p=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(e){return n.i(i.h)("section",{class:"skills section",style:{backgroundColor:e.background_color||null}},n.i(i.h)("div",{class:"main-wrapper"},n.i(i.h)("div",{class:"main-wrapper-text"},n.i(i.h)("h3",null,e.title)),u,e.list&&e.list.map(function(e){return n.i(i.h)(c,e)})))},t}(i.Component)},yY49:function(){}});
//# sourceMappingURL=bundle.6bc01.js.map