const bring_=async (file, func, body=false, namebody=String, e)=>{
    let fetch_;
    let param={headers:{'Accept': 'application/json'}};
    let files;
    let formData;
    if(body){ 
        files=e.target.files;
        formData=new FormData();
        formData.append(namebody, files[0]);
        param.method='POST';
        param.body=formData;
    }else{
        param.method='GET';
    }
    fetch_=await fetch(`${file}`, param); 
    const data=await fetch_.text();
    func(data);
};

let img_final=$('#img');
img_final.addEventListener('change', (e)=>{
    bring_('img/save', function(){}, true, 'myImg', e);
});