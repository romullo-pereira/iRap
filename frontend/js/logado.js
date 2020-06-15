

function validarUser() {
    if(sessionStorage.user == undefined) {
        window.location = 'index.html'
    }  
}

window.onload = validarUser();

function logout() {
    sessionStorage.removeItem('user');
    window.location = 'index.html';
}

const user = JSON.parse(sessionStorage.user);

nomeUser.innerHTML = user.nome

if(user.isAdmin.data == 1){
    cadPostagem.innerHTML = 'Cadastro de postagens';
}

