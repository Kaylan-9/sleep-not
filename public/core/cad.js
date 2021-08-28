// $('#btncad').addEventListener("click", ()=>{
//     let form={};
//     form.nome=$("#name").value;
//     form.pass=$("#pass").value;
//     form.passc=$("#passc").value;
//     form.email=$("#email").value;
//     if(form.pass==form.passc){
//         let param='nome='+form.nome+'&pass='+form.pass+'&email='+form.email;
//         fetch(`index.php?${param}`, {method: 'GET' ,headers: {'Accept': 'application/json'}})
//         .then((resolver)=>{return resolver.json()})
//         .then((data)=>{
//             modal_(data[0]);
//             mod_layout(form.nome, form.email);
//         });
//     }else modal_("Há senhas diferentes");
// });

// const mod_layout=(nome, email)=>{
//     all$("#slide *").forEach(e=>{e.remove();});
//     let new_eles={
//         "fotoperf":add$("div"),
//         "nome": add$("h2"),
//         "email": add$("p"),
//         "list": add$("ul"),
//         "li0": add$("li"),
//         "li1": add$("li")
//     };
//     new_eles.fotoperf.setAttribute('class', 'fotoperf');
//     new_eles.nome.innerText=nome;
//     new_eles.email.innerText=email;
//     $(".artigos").remove();
//     $(".galeria").style.width="100%";
//     $(".galeria ul").style.columnCount=6;
//     $("#slide").removeAttribute('style');
//     $("#slide").setAttribute('id', 'painel');
//     new_eles.li0.appendChild(new_eles.nome);
//     new_eles.li1.appendChild(new_eles.email);
//     $("#painel").appendChild(new_eles.fotoperf);   
//     new_eles.list.appendChild(new_eles.li0);
//     new_eles.list.appendChild(new_eles.li1);
//     $("#painel").appendChild(new_eles.list);    
//     clearInterval(modslideImg);
//     clearInterval(modslidePosition);
// } 
// mod_layout('teste', "teste@email.com.br");