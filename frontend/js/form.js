var c = true;

var nameValid = false;
var passwordValid = false;
var emailValid = false;

function trocar() {

    if(c) {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
        c = false;
    }else{
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
        c = true;
    }
}

function validarNome() {
    var nome = inputNome.value;

    if(nome.length > 2) {
        nomeValido.style.display = 'block';
        nomeInvalido.style.display = 'none';
        nameValid = true;
    }else {
        nomeValido.style.display = 'none';
        nomeInvalido.style.display = 'block';
        nameValid = false;
    }
}

function validarEmail() {
    var email = inputEmail.value;

    if((email.indexOf('@') >= 0) && (email.indexOf('.') >= 0)) {
        emailValido.style.display = 'block';
        emailInvalido.style.display = 'none';
        emailValid = true;
    }else {
        emailValido.style.display = 'none';
        emailInvalido.style.display = 'block';
        emailValid = false;
    }
}

function validarSenha() {
    var senha = inputSenha.value;
    var senha2 = inputConfSenha.value;

    var senhasIguais = senha == senha2;
    console.log(senha.length , senha2.length);
    
    if((senha.length > 0 ) || (senha2.length > 0)) {
        if(senhasIguais) {
        senhaValida.style.display = 'block';
        senhainvalido.style.display = 'none';

        confirmaValida.style.display = 'block';
        confirmaInvalida.style.display = 'none';

        passwordValid = true;
        }else {
            senhaValida.style.display = 'none';
            senhainvalido.style.display = 'block';

            confirmaValida.style.display = 'none';
            confirmaInvalida.style.display = 'block';
            passwordValid = false;
        }
    }else {
        senhainvalido.style.display = 'block';
        confirmaInvalida.style.display = 'block';
        passwordValid = false;
    }
    
}

function validarForm(event) {
    event.preventDefault();
    if(nameValid && emailValid && passwordValid) {
        console.log('entrou');
        createUser();
        alert('Cadastrado com sucesso!');
    }else {
        alert('Informações Invalidas, verifique os campos!');
    }

}

form1.addEventListener('submit' , validarForm);

function logar(event) {
    event.preventDefault();
    login();
}

form2.addEventListener('submit' , logar);