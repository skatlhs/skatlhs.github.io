(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0W5w":function(e,t,n){},"3yXv":function(e,t,n){},"7oih":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky");n("HP2+"),n("0W5w"),n("3yXv"),n("Ggrg"),n("k5Q+"),n("ZnJG"),n("8XYx");t.a=function(e){return a.a.createElement("div",null,a.a.createElement(o.a,null,a.a.createElement("title",null,e.pageTitle),a.a.createElement("meta",{charSet:"UTF-8"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap",rel:"stylesheet"})),a.a.createElement("div",{className:"page-wrapper"},e.children))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"8XYx":function(e,t,n){},Ggrg:function(e,t,n){},"HP2+":function(e,t,n){},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},JwsL:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("JX7q"),a=n("dI71"),o=n("q1tI"),i=n.n(o),c=n("bTua"),l=n.n(c),s=function(e){function t(){var t;return(t=e.call(this)||this).scrollTop=function(){window.scrollTo(0,0)},t.state={scrollBtn:!1},t.handleScroll=t.handleScroll.bind(Object(r.a)(t)),t.scrollTop=t.scrollTop.bind(Object(r.a)(t)),t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.handleScroll=function(){window.scrollY>70?this.setState({scrollBtn:!0}):window.scrollY<70&&this.setState({scrollBtn:!1})},n.render=function(){return i.a.createElement("div",null,i.a.createElement("footer",{className:"site-footer"},i.a.createElement("div",{className:"site-footer__upper"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"footer-widget footer-widget__about"},i.a.createElement("img",{src:l.a,width:"119",alt:"",className:"footer-widget__logo"}),i.a.createElement("p",{className:"footer-widget__contact"},i.a.createElement("a",{href:"tel:888-666-0000"},"888 666 0000")),i.a.createElement("p",{className:"footer-widget__contact"},i.a.createElement("a",{href:"mailto:needhelp@example.com"},"needhelp@example.com")),i.a.createElement("p",{className:"footer-widget__contact"},"855 road, broklyn street ",i.a.createElement("br",null)," new york 600"))),i.a.createElement("div",{className:"col-lg-6 d-flex justify-content-between footer-widget__links-wrap"},i.a.createElement("div",{className:"footer-widget"},i.a.createElement("h3",{className:"footer-widget__title"},"Explore"),i.a.createElement("ul",{className:"footer-widget__links list-unstyled"},i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Our Team")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Features")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Blog")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"How It Works")))),i.a.createElement("div",{className:"footer-widget"},i.a.createElement("h3",{className:"footer-widget__title"},"Services"),i.a.createElement("ul",{className:"footer-widget__links list-unstyled"},i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Speed Optimization ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Marketing Analysis ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"SEO and Backlinks ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Content Marketing")))),i.a.createElement("div",{className:"footer-widget"},i.a.createElement("h3",{className:"footer-widget__title"},"Links"),i.a.createElement("ul",{className:"footer-widget__links list-unstyled"},i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Help ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Support ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Clients ")),i.a.createElement("li",null,i.a.createElement("a",{href:"#none"},"Contact"))))),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"footer-widget"},i.a.createElement("div",{className:"site-footer__social"},i.a.createElement("a",{href:"#s-link","aria-label":"social icon","aria-hidden":"true"},i.a.createElement("i",{className:"fa fa-facebook-square"})),i.a.createElement("a",{href:"#none","aria-label":"social icon","aria-hidden":"true"},i.a.createElement("i",{className:"fa fa-twitter"})),i.a.createElement("a",{href:"#none","aria-label":"social icon","aria-hidden":"true"},i.a.createElement("i",{className:"fa fa-instagram"})),i.a.createElement("a",{href:"#none","aria-label":"social icon","aria-hidden":"true"},i.a.createElement("i",{className:"fa fa-pinterest-p"})))))))),i.a.createElement("div",{className:"site-footer__bottom"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"inner-container text-center"},i.a.createElement("p",{className:"site-footer__copy"},"© copyright ",(new Date).getFullYear()," by"," ",i.a.createElement("a",{href:"#none"},"Layerdrops.com")))))),i.a.createElement("div",{onClick:this.scrollTop,onKeyDown:this.scrollTop,role:"button",tabIndex:"0",className:"scroll-to-target scroll-to-top",style:{display:this.state.scrollBtn?"block":"none"}},i.a.createElement("i",{className:"fa fa-angle-up"})))},t}(o.Component)},ZnJG:function(e,t,n){},bTua:function(e,t,n){e.exports=n.p+"static/logo-dark-ea368ead38c9a36c49c85732627d6036.png"},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},"k5Q+":function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n("E9XD");var r,a,o,i,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("YVoz"),y=n.n(h),b="bodyAttributes",E="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",A="href",O="http-equiv",C="innerHTML",S="itemprop",k="name",N="property",j="rel",_="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",q="onChangeClientState",R="titleTemplate",B=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,w.TITLE),n=Z(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},W=function(e){return Z(e,q)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,a),ce(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,o),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+J(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case E:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(E,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,l,r),style:pe(w.STYLE,s,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:V([A,x],e),bodyAttributes:G(b,e),defer:Z(e,I),encode:Z(e,M),htmlAttributes:G(E,e),linkTags:Q(w.LINK,[j,A],e),metaTags:Q(w.META,[k,v,O,N,S],e),noscriptTags:Q(w.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:Q(w.SCRIPT,[_,C],e),styleTags:Q(w.STYLE,[T],e),title:K(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return Y(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case w.BODY:return F({},a,{bodyAttributes:F({},o)});case w.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.a=he}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=commons-90175aba5889b7702b5a.js.map