"use strict";var precacheConfig=[["/index.html","ee434ead399a2b404b36563063365fdd"],["/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/static/js/main.5e5749bd.js","cf0668e36c59db08d902cfb50f42ebbe"],["/static/media/0.0ab468a6.gif","0ab468a664feadfb49b363c1c4301a6b"],["/static/media/0.454bfb01.gif","454bfb01851ca301a5a643a99cb5693d"],["/static/media/0.7f4e6c4f.gif","7f4e6c4f51495ea6e4e49c84ac60fb3e"],["/static/media/1.51e1fa2e.gif","51e1fa2eded0f00d1ac0056cf2df5d8c"],["/static/media/1.61302a83.gif","61302a839b46aa7208adb6eaddd4c38e"],["/static/media/1.7f2407bb.gif","7f2407bb6b46420153bd07e819a58f05"],["/static/media/10.fa2c4547.gif","fa2c4547a2183a9a4c2a83964ee6f7d4"],["/static/media/11.816455b3.gif","816455b34fdf3f64048cf38e7e15726d"],["/static/media/12.7b0276b4.gif","7b0276b471868d7c76c8721814430371"],["/static/media/13.cebc445f.gif","cebc445fdf0505645866bf0d234bac49"],["/static/media/2.01b4f497.gif","01b4f49743102f3daf8a37241089987c"],["/static/media/2.762f16c3.gif","762f16c3c38ca5bb6a7329cdc688c4ed"],["/static/media/2.7d42ecec.gif","7d42ecec3f638c25e6e327e23a0c2924"],["/static/media/3.0ee759c5.gif","0ee759c5861c6b904f6be7f51883ec1c"],["/static/media/3.299f13d7.gif","299f13d768a84f1273e627fa3d28401e"],["/static/media/3.4299321f.gif","4299321f3faad9ec606c3483327efc3f"],["/static/media/4.6c04169d.gif","6c04169de77ebd0cccb03b24640ff769"],["/static/media/4.85ce6365.gif","85ce63652a8826947bf97269395b58f7"],["/static/media/5.3e0ba9a0.gif","3e0ba9a017a75ec8c4c060821876d4d0"],["/static/media/5.6939b8c9.gif","6939b8c9e80f165aa675f03419193221"],["/static/media/6.c75383e5.gif","c75383e5e5218675b1797caf13c38c17"],["/static/media/6.d49039d6.gif","d49039d60c6e64cc71ca8c7736843448"],["/static/media/7.261f16ba.gif","261f16bab645978889ea02e62b56b488"],["/static/media/7.e88d0012.gif","e88d00123954ef602bc4adb3305b0d81"],["/static/media/8.a218441d.gif","a218441da99986d7d35326b7d60bb307"],["/static/media/9.54ec1db4.gif","54ec1db4000335fcd733e3945138f631"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});