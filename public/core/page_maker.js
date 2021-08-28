class Pag{
    constructor(){
        this.dirImg='public/img/';
        this.countEle=0;
    }

    init(content){
        document.body.innerHTML=this.obj('div', {class:'container'}, content);
    }

    obj(tag, prms, contents=false){
        this.newEle=("<"+tag);
        if(prms!==false){
            this.prmsKeys=Object.keys(prms);
            this.prms=Object.values(prms);
            for(this.count=0;this.count<this.prms.length;this.count++){
                this.newEle+=(" "+this.prmsKeys[this.count]);
                this.newEle+=(`='${this.prms[this.count]}'`);
            }
        }
        this.newEle+=">";
        if(contents!==false){
            if(Array.isArray(contents))
                for(this.count=0;this.count<contents.length;this.count++){
                    this.newEle+=contents[this.count];
                }
            else this.newEle+=contents;
            this.newEle+=("</"+tag+">");
        }   
        this.countEle++;
        return String(this.newEle);
    }
}

const page=new Pag();
const title=(content, size=2, name='titulo')=>{return page.obj(`h${size}`,{class:name},content);};
const header=(content)=>{return page.obj('header',false,content);};
const list=(name, els=Array('test','test2'))=>{
    let content=String();
    for(let el of els) content+=page.obj('li', false, el);
    return page.obj('ul', {'class': name, 'id': name}, content);
};
const img=(src='', alt='')=>{return page.obj('img', {'src':page.dirImg+src, 'alt':alt});};
const sec=(name, content)=>{return page.obj('section', {'class': name, 'id': name}, content);};
const div=(name, content)=>{return page.obj('div', {'class': name, 'id': name},content);};
const main=(content)=>{return page.obj('main', false, content);};
const p=(name ,content=String())=>{return page.obj('p',{'class': name, 'id': name},content);};
const link=(content, href)=>{return page.obj('a', {'href':href}, content);};
const form=(name, method, content)=>{return page.obj('form', {'class': name, 'id': name, 'method':method, 'enctype':"multipart/form-data"}, content);};
const input=(lbl ,name, type, value=String())=>{
    let content='';
    let prms0={'class': name, 'id': name, 'type':type};
    if(lbl!=false){ content=page.obj('label', {'for': name}, lbl);}
    if(value!=String()){ prms0.value=value;}
    content+=page.obj('input', prms0);    
    return content;
};
const article=(name, text, src)=>{
    return page.obj('article', false, [
        title(name, 3),
        p('text', text),
        page.obj('div', {class:'i', id:'i', style:`background-image: url(${page.dirImg}${src})`}, '')
    ]);
};
const _cover=(iden, src)=>{
    return page.obj('article', false, [
        page.obj('div', {class:'i', id:iden, style:`background-image: url(${page.dirImg}${src})`}, '')
    ]);
};
const onlyText=(name, text)=>{
    return page.obj('article', false, [
        title(name, 3),
        p('text', text)
    ]);
};
