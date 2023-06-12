var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,c;function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t){c=t}function h(t){(function(){if(!c)throw new Error("Function called outside component initialization");return c})().$$.on_mount.push(t)}const m=[],$=[];let v=[];const b=[],y=Promise.resolve();let _=!1;function x(t){v.push(t)}const w=new Set;let z=0;function k(){if(0!==z)return;const t=c;do{try{for(;z<m.length;){const t=m[z];z++,p(t),E(t.$$)}}catch(t){throw m.length=0,z=0,t}for(p(null),m.length=0,z=0;$.length;)$.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];w.has(e)||(w.add(e),e())}v.length=0}while(m.length);for(;b.length;)b.pop()();_=!1,w.clear(),p(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const L=new Set;let C;function T(t,e){t&&t.i&&(L.delete(t),t.i(e))}function O(t,n,r,i){const{fragment:c,after_update:a}=t.$$;c&&c.m(n,r),i||x((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(x)}function q(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];v.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),v=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,y.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,s,r,i,a,l,d,f=[-1]){const g=c;p(e);const h=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(g?g.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||g.$$.root};d&&d(h.root);let m=!1;if(h.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),m&&A(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();s.intro&&T(e.$$.fragment),O(e,s.target,s.anchor,s.customElement),k()}p(g)}class j{$destroy(){q(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n,o,r,c,p,h,m,$,v,b,y,_,x,w,z,k,E;return{c(){var t,e;n=d("main"),o=d("head"),o.innerHTML='<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&amp;display=swap"/>',r=f(),c=d("img"),h=f(),m=d("h1"),m.textContent="Optimized User Experience Starts",$=f(),v=d("h1"),v.textContent="Frictionless Transactions",b=f(),y=d("p"),y.innerHTML='<strong class="svelte-ize6c9">At our core, we revolutionize the landscape of on-chain transactions. Our mission is to address the friction surrounding transactions by fostering the equitable distribution of MEV and delivering better execution quality.</strong>',_=f(),x=d("button"),x.textContent="Join Beta",w=f(),z=d("footer"),z.innerHTML='<div class="social-icons svelte-ize6c9"><a href="https://twitter.com/qi_protocol_" target="_blank"><img src="/assets/images/svg/twitter.svg" alt="Twitter Logo" class="svelte-ize6c9"/></a> \n      <a href="https://discord.com/invite/your_invite_link" target="_blank" hidden="true"><img src="/assets/images/svg/discord.svg" alt="Discord Logo" class="svelte-ize6c9"/></a> \n      <a href="https://telegram.org/your_invite_link" target="_blank" hidden="true"><img src="/assets/images/svg/telegram.svg" alt="Telegram Logo" class="svelte-ize6c9"/></a> \n      <a href="https://github.com/qi-protocol" target="_blank"><img src="/assets/images/svg/github.svg" alt="Github Logo" class="svelte-ize6c9"/></a></div> \n    <div class="copywrite svelte-ize6c9">© 2023 Qi Protocol</div>',g(c,"class","logo svelte-ize6c9"),t=c.src,e=p="/assets/images/svg/logo.svg",i||(i=document.createElement("a")),i.href=e,t!==i.href&&g(c,"src","/assets/images/svg/logo.svg"),g(c,"alt","Qi Protocol"),g(c,"id","logo"),g(m,"class","thin-space svelte-ize6c9"),g(v,"class","svelte-ize6c9"),g(y,"class","svelte-ize6c9"),g(x,"class","custom-button svelte-ize6c9"),g(z,"class","svelte-ize6c9"),g(n,"class","svelte-ize6c9")},m(t,i){var u,d,f,g;l(t,n,i),a(n,o),a(n,r),a(n,c),a(n,h),a(n,m),a(n,$),a(n,v),a(n,b),a(n,y),a(n,_),a(n,x),a(n,w),a(n,z),k||(d="click",f=function(){s(e[0])&&e[0].apply(this,arguments)},(u=x).addEventListener(d,f,g),E=()=>u.removeEventListener(d,f,g),k=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&u(n),k=!1,E()}}}function N(t,e,n){let o;return h((()=>{!function(t,e){const n=document.createElement("script");n.src=t,document.head.appendChild(n),n.onload=e}("https://embed.typeform.com/embed.js",(()=>{n(0,o=()=>{window.typeformEmbed.makePopup("https://dzkr4d0zdua.typeform.com/to/C9O8STRt",{mode:"popup",autoClose:5e3,hideHeaders:!0,hideFooters:!0}).open()})}))})),[o]}class P extends j{constructor(t){super(),M(this,t,N,H,r,{})}}function S(e){let n,o,s;return o=new P({}),{c(){var t;n=d("main"),(t=o.$$.fragment)&&t.c()},m(t,e){l(t,n,e),O(o,n,null),s=!0},p:t,i(t){s||(T(o.$$.fragment,t),s=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),C.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}(o.$$.fragment,t),s=!1},d(t){t&&u(n),q(o)}}}return new class extends j{constructor(t){super(),M(this,t,null,S,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map