(()=>{"use strict";const e=function(){let e,t,n,d;t=document.createElement("div"),t.classList.add("pTop");const a=document.createElement("h1");a.textContent="The Ever Best Restaurant";const c=document.createElement("div"),i=document.createElement("button");i.textContent="Main",i.setAttribute("page","1"),c.appendChild(i);const o=document.createElement("button");o.textContent="Menu",o.setAttribute("page","2"),c.appendChild(o);const l=document.createElement("button");function p(e,t,n){let d;d=document.createElement("div"),d.classList.add("pMiddleContent");const a=document.createElement("img");a.src=t,a.alt="Picture",a.setAttribute("height","auto"),a.setAttribute("width","300px");const c=document.createElement("p");return c.textContent=n,e?(d.appendChild(a),d.appendChild(c)):(d.appendChild(c),d.appendChild(a)),d}l.textContent="Contact",l.setAttribute("page","3"),c.appendChild(l),t.appendChild(a),t.appendChild(c);const s=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div");r.classList.add("pMiddle");const u=p(!0,"images/cafe-5579069_960_720.jpg","Escape from you busy office to where you fulfill your mind"),h=p(!1,"images/table-5706576_960_720.jpg","This is our value"),C=p(!0,"images/place-setting-2110245_960_720.jpg","You will always discover what you want here !");return r.appendChild(u),r.appendChild(h),r.appendChild(C),n=document.createElement("div"),n.classList.add("pBody"),n.appendChild(s),n.appendChild(r),n.appendChild(m),d=document.createElement("div"),d.classList.add("pBottom"),d.textContent="No copyright at all (2021)",e=document.createElement("div"),e.setAttribute("id","inner-content"),e.appendChild(t),e.appendChild(n),e.appendChild(d),e};function t(a){const c=a.target.getAttribute("page");if(console.log(c),console.log(n),c!=n){for(n=c;d.firstChild;)d.removeChild(d.firstChild);1==c?d.appendChild(e()):2==c?d.appendChild(function(){let e,t,n,d;t=document.createElement("div"),t.classList.add("pTop");const a=document.createElement("h1");a.textContent="The Ever Best Restaurant";const c=document.createElement("div"),i=document.createElement("button");i.textContent="Main",i.setAttribute("page","1"),c.appendChild(i);const o=document.createElement("button");o.textContent="Menu",o.setAttribute("page","2"),c.appendChild(o);const l=document.createElement("button");function p(e,t,n){let d;d=document.createElement("div"),d.classList.add("picContainer");const a=document.createElement("img");a.src=e,a.alt="Picture",a.setAttribute("height","auto"),a.setAttribute("width","500px");const c=document.createElement("h4");c.textContent=t;const i=document.createElement("p");i.textContent=n;const o=document.createElement("div");return o.classList.add("picText-block"),o.appendChild(c),o.appendChild(i),d.appendChild(a),d.appendChild(o),d}l.textContent="Contact",l.setAttribute("page","3"),c.appendChild(l),t.appendChild(a),t.appendChild(c);const s=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div");r.classList.add("pMiddle");const u=p("images/bowl-1932375_960_720.jpg","Desset......1 USD","The most charming dessert from our restaurant."),h=p("images/cake-1850011_960_720.jpg","Cake......1 USD","Nothing is so refreshing like our really sweet cake."),C=p("images/orange-cake-398966_960_720.jpg","Orange Cake......1 USD","Very delicious !");return r.appendChild(u),r.appendChild(h),r.appendChild(C),n=document.createElement("div"),n.classList.add("pBody"),n.appendChild(s),n.appendChild(r),n.appendChild(m),d=document.createElement("div"),d.classList.add("pBottom"),d.textContent="No copyright at all (2021)",e=document.createElement("div"),e.setAttribute("id","inner-content"),e.appendChild(t),e.appendChild(n),e.appendChild(d),e}()):3==c&&d.appendChild(function(){let e,t,n,d;t=document.createElement("div"),t.classList.add("pTop");const a=document.createElement("h1");a.textContent="The Ever Best Restaurant";const c=document.createElement("div"),i=document.createElement("button");i.textContent="Main",i.setAttribute("page","1"),c.appendChild(i);const o=document.createElement("button");o.textContent="Menu",o.setAttribute("page","2"),c.appendChild(o);const l=document.createElement("button");l.textContent="Contact",l.setAttribute("page","3"),c.appendChild(l),t.appendChild(a),t.appendChild(c);const p=document.createElement("div"),s=document.createElement("div"),r=document.createElement("div");s.classList.add("pMiddle");const m=document.createElement("div"),u=document.createElement("h4");u.textContent="Contact :";const h=document.createElement("p");h.textContent="1234 East/West Somewhere Road USA.";const C=document.createElement("p");C.textContent="Tel : 555-555-555",m.appendChild(u),m.appendChild(h),m.appendChild(C);const E=document.createElement("div"),g=document.createElement("div");g.setAttribute("style","width: 100%");const v=document.createElement("iframe");return v.setAttribute("width","600px"),v.setAttribute("height","300px"),v.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10307.720726378328!2d100.35730104752614!3d14.597204946277326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1638518269902!5m2!1sen!2sth"),g.appendChild(v),E.appendChild(g),s.appendChild(m),s.appendChild(E),n=document.createElement("div"),n.classList.add("pBody"),n.appendChild(p),n.appendChild(s),n.appendChild(r),d=document.createElement("div"),d.classList.add("pBottom"),d.textContent="No copyright at all (2021)",e=document.createElement("div"),e.setAttribute("id","inner-content"),e.appendChild(t),e.appendChild(n),e.appendChild(d),e}())}Array.from(document.querySelectorAll("button")).forEach((e=>e.addEventListener("click",t)))}let n=1;const d=document.getElementById("content");d.appendChild(e()),Array.from(document.querySelectorAll("button")).forEach((e=>e.addEventListener("click",t)))})();