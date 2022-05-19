// function redirecionar(){
//     window.location.replace("http://www.google.com.br");
// }
const users = {
    "admin": {
        "name": "admin",
        "password": "21232f297a57a5a743894a0e4a801fc3"
    },
    "cozinheira": {
        "name": "cozinheira",
        "password": "c55e65313c05cbab75e66d6b121198cf"
    }
};

function validateForm(event){
    let loginDigitado = event.target.elements.namedItem("username").value;
    let senhaDigitada = CryptoJS.MD5(event.target.elements.namedItem("user-pass").value);
    if (!loginDigitado || !senhaDigitada) {
        alert('Preencher usuário e senha');
        return false;
    }

    if (validUser(loginDigitado, senhaDigitada)){
        event.preventDefault();
        if (loginDigitado == "admin") {
            window.location.href='diretora-home.html';
        } else if (loginDigitado == "admin") {
            window.location.href='diretora-home.html';
        }
    } else {
        alert('Usuário ou senha incorretos');
    } 
    return true;
}

function validUser(loginDigitado, senhaDigitada){
    let userOK = loginDigitado in users;
    if (!userOK)
        return false;
    let senhaEsperada = users[loginDigitado]["password"];
    return senhaEsperada == senhaDigitada;
}