
// USuarios
function login() {

    const ajax = new XMLHttpRequest();

    const params = `email=${inputLogin.value}&pass=${inputPass.value}`;

    ajax.open("POST" , 'http://localhost:3333/sessions');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    ajax.onreadystatechange = function () {
        if(ajax.status === 200 && ajax.readyState === 4 ){

            const response = JSON.parse(ajax.responseText);
            if(response.length > 0) {
                const  user = {
                    id: response[0].idUsuario,
                    nome: response[0].nome,
                    email: response[0].email,
                    senha: response[0].senha,
                    isAdmin: response[0].isAdmin,
                }
                sessionStorage.setItem('user' , JSON.stringify(user));
                window.location = 'home.html';
            }else {
                alert('Usuario ou senha incorretos');
            }
                 
        }
    };

    ajax.send(params);
    
}

function validEmailUser() {

    const ajax = new XMLHttpRequest();

    const params = inputEmail.value;
    console.log(params , 'params');
    

    ajax.open('GET' , `http://localhost:3333/users/${params}`);
    ajax.onreadystatechange = function () {
        if(ajax.readyState == XMLHttpRequest.DONE) {
            const response = ajax.response;
            console.log(response);
            
            if(response.length > 2 || response == null){
                console.log('Email ja existe' , response.length);
                alert('Email ja cadastrado');
            }else { 
                createUser();
            }
        }
    };
    ajax.send();

}

function createUser() {
    
    const ajax = new XMLHttpRequest();

    const params = `name=${inputNome.value}&email=${inputEmail.value}&pass=${inputSenha.value}`;

    ajax.open("POST" , 'http://localhost:3333/users' , true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function () {
        if(ajax.status === 200 && ajax.readyState === 4 ){
            const response = ajax.responseText;
            alert('Cadastrado com sucesso!');
            window.location.reload();
        }
    };
    ajax.send(params);

}

//Postagens



function createPost(event) {

    event.preventDefault();
    const user = JSON.parse(sessionStorage.user);

    const ajax = new XMLHttpRequest();
    const now = new Date().getTime();
    const params = `title=${inputTitle.value}&desc=${inputDesc.value}&imagem=${inputImg.files[0].name}&content=${inputContent.value}&idUser=${user.id}`;

    ajax.open("POST" , 'http://localhost:3333/posts');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = () => {
        if(ajax.status === 200 && ajax.readyState === 4) {
            const response = JSON.parse(ajax.response);
            console.log(response);
            if(response.affectedRows > 0){
                alert('Postagem Cadastrada com sucesso');
                window.location.reload();
            }
        }
    };
    ajax.send(params);
}

cadPostForm.addEventListener('submit' , createPost);

function getPosts() {

    const ajax = new XMLHttpRequest();

    ajax.open('GET' , 'http://localhost:3333/posts' , true);
    ajax.onreadystatechange = () => {
        if(ajax.readyState == XMLHttpRequest.DONE) {
            const response = ajax.response;
            plotarPosts(JSON.parse(response));
        }
    };
    ajax.send();
}

function getPostsAsc() {
    const ajax = new XMLHttpRequest();

    ajax.open('GET' , 'http://localhost:3333/posts/asc' , true);
    ajax.onreadystatechange = () => {
        if(ajax.readyState == XMLHttpRequest.DONE) {
            const response = ajax.response;
            plotarPosts(JSON.parse(response));
        }
    };
    ajax.send();
}

function getIndexPosts() {

    const ajax = new XMLHttpRequest();

    ajax.open('GET' , 'http://localhost:3333/posts/limit/6' , true);
    ajax.onreadystatechange = () => {
        if(ajax.readyState == XMLHttpRequest.DONE) {
            const response = ajax.response;
            plotarPostsIndex(JSON.parse(response))
        }
    };
    ajax.send();
}

function getById(id) {
    const ajax = new XMLHttpRequest();
    ajax.open('GET' , `http://localhost:3333/posts/${id}` , true);
    ajax.onreadystatechange = () => {
        if(ajax.readyState == XMLHttpRequest.DONE) {
            const response = ajax.response;
            plotarModal(JSON.parse(response));
        }
    }
    ajax.send();
}



