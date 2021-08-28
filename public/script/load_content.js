class Content_load{
    constructor(maxObjPage, maxObjContainer, imgs){
        this.e=new String();
        this.scroll=0;
        this.poScroll=0;
        this.objs=new Array();
        this.objsInUse=new Array();
        this.qtdObj=0;
        this.maxObjPage=maxObjPage;
        this.maxObjContainer=maxObjContainer;
        this.randomCont=0;
        this.ObjIsExist=false;
        this.state=true;
        this.imgs=imgs;
    }

    newContent(){
        while(this.objs.length<this.maxObjContainer){
            this.randomCont=Math.floor(Math.random()*this.imgs.length);
            while(i<this.objsInUse.length){
                if(this.randomCont===this.objsInUse[i]){
                    this.ObjIsExist=true;
                }
                i++;
            }
            i=0;
            if(!this.ObjIsExist){
                this.objs.push(_cover(`img${this.randomCont}`, this.imgs[this.randomCont]));
                this.objsInUse.push(this.randomCont);
                if((this.maxObjPage*this.maxObjContainer)===this.objsInUse.length){
                    this.objsInUse.shift();  
                }
            }
            this.ObjIsExist=false;
        }
        _hqs=sec("hqs", [ list("l_c", this.objs)]);
        this.objs=new Array();
    }

    render(){
        window.onscroll=(function(event){
            if(this.state){
                this.e=event.target.scrollingElement;
                this.scroll=Math.floor(this.e.scrollHeight-this.e.scrollTop); 
                if(this.e.clientHeight===this.scroll || this.e.clientHeight===(this.scroll+1)){
                    this.qtdObj=$('main').childNodes.length;
                    if(this.qtdObj===this.maxObjPage){
                        $('main').querySelectorAll('section')[1].remove();
                    }
                    this.poScroll=(document.body.getBoundingClientRect().y*(-1));
                    window.scrollTo(0, (this.poScroll-2));
                    this.newContent();
                    $('main').innerHTML+=_hqs;
                }
            }
        }).bind(this);
    }

    enable(){this.state=false;}
    disable(){this.state=true;}
}

let i=0;
let j=0;
let _hqs=new Array();
let contentload= new Content_load(6, 6, []);
contentload.render(); 











// list("lcat", ['mangás', 'histórias em quadrinhos']),









// let pPage='';
// let hPage='';
// window.addEventListener('scroll', ()=>{
//     pPage=window.pageYOffset || window.scrollTop;
//     hPage=window.outerHeight;
//     if(pPage>hPage){
//         $('main').appendChild($('main').childNodes[0]);
//     }
// });
