!function(e){"use strict";function t(e,n,u){var r;e.html(function(e,t){return r=t.length,t.substr(0,r-1)}),r>1?setTimeout(function(){t(e,n,u)},n):u()}function n(e,t,u,r,l){e.html(function(e,n){return n+t[u]}),u<t.length-1?setTimeout(function(){n(e,t,u+1,r,l)},r):l()}e("html").addClass("js").removeClass("no-js"),e.fn.extend({teletype:function(u){var r=e.extend({},e.teletype.defaults,u);return e(this).each(function(){!function e(u,l){n(u,r.text[l],0,r.delay,function(){setTimeout(function(){t(u,r.delay,function(){e(u,(l+1)%r.text.length)})},r.pause)})}(e(this),0)})}}),e.extend({teletype:{defaults:{delay:150,pause:3e3,text:[]}}}),e(".typer-text").teletype({text:["Ben Welsby","Web Developer","Search Marketer","Front-end Developer","UX Designer","Digital Marketer","WordPress Developer","SEO"]}),e(".period").teletype({text:["."," "],delay:1500,pause:550})}(jQuery);