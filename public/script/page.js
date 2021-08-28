let _header=header([
    img('loopicone.png'),
    div()
]);

let _main=main([    
    sec("sls", [
        img(''),
        title('Titulo'),
        p('texto', 'Lorem ipsum dolor sit amet consectetur adipiscing elit, lacinia gravida vestibulum rhoncus ullamcorper curabitur, molestie variuslacinia gravida vestibulum rhoncus ullamcorper...')
    ])
]);

page.init([
    _header, 
    form("cad", "get", list('finpts' ,Array(
        input('img', 'img', 'file'),
        input(false, 'btnimg', 'button', 'inserir')
    ))),
    _main
]);

