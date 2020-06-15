
window.onload = getPosts();

// const posts = getPosts();

// console.log(posts , 'alo');

function plotarPosts(posts) {

    var random = parseInt(Math.random() * posts.length);
    plotarRandomPost(posts[random]);
    

    for (let i = 0; i < posts.length; i++) {
        if(posts[i].imagem == null){
            posts[i].imagem = 'bg.jpg';
        }

        cards.innerHTML += `<div id="card" class="card">
                                <img src="./img/${posts[i].imagem}" alt="">
                                <h3 id="cardTitle">${posts[i].titulo}</h3>
                                <p id="cardDesc">${posts[i].descricao}</p>
                                <a href="#abrirModal"><button onclick="getById(${posts[i].idPostagem})">Mais</button></a>
                            </div>
                            `; 
        
    }
}

function plotarModal (post) {
    console.log(post);
    
    const dataCadastro = new Date(post[0].dataCadastro);
    let dia = dataCadastro.getDate()
    let mes = dataCadastro.getMonth() + 1;
    let ano = dataCadastro.getFullYear();

    const dataFormatada = `${dia>9? '' : '0'}${dia}/${mes>9? '' : '0'}${mes}/${ano}`;
    console.log(dataFormatada);
    

    postTitle.innerHTML = post[0].titulo;
    postDescricao.innerHTML = post[0].descricao;
    postConteudo.innerHTML = post[0].conteudo;
    postDataCadastro.innerHTML = dataFormatada;
    postNomeAutor.innerHTML = post[0].nome;
    postImg.src = post[0].imagem == null ? "./img/bg.jpg" : `./img/${post[0].imagem}`;
}

function filtro() {
    cards.innerHTML = '';
    if(campoFiltro.value == 1){
        getPosts();
    }else {
        getPostsAsc();  
    }
}

function plotarRandomPost(post) {
    console.log(post);
    mainImg.src = post.imagem == null ? "./img/bg.jpg" : `./img/${post.imagem}`;
    mainTitle.innerHTML = post.titulo;
    mainDesc.innerHTML = post.descricao;
    mainButton.innerHTML = ` <button onclick="getById(${post.idPostagem})">Mais</button>`;
}




