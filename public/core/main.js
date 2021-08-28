const $= document.querySelector.bind(document);
const all$= document.querySelectorAll.bind(document);
const add$= document.createElement.bind(document);
const modal_=(str='')=>{
    let nEle=add$('div');
    nEle.setAttribute('class', 'modal');
    nEle.innerText=str;
    nEle.appendChild(new_ele);
    nEle.addEventListener('click', ()=>nEle.remove());
}
const _g={h:window.outerHeight, w:window.outerWidth};

window.addEventListener('load', ()=>{bring_('/teste', (data)=>{
    console.log(data);
})});