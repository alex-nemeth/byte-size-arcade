import"./modulepreload-polyfill-3cfb730f.js";let l="black";c(32);function c(e){let o=document.querySelector(".container");o.style.gridTemplateColumns=`repeat(${e}, 1fr)`,o.style.gridTemplateRows=`repeat(${e}, 1fr)`;let n=e*e;for(let r=0;r<n;r++){let t=document.createElement("div");t.classList.add("boxes"),t.style.backgroundColor="white",t.addEventListener("mouseover",a),o.insertAdjacentElement("beforeend",t)}}function a(){this.style.backgroundColor=l}