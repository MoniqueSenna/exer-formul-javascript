const form = document.getElementById('contato');
const nome = document.getElementById('nome');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= '1';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const marcaCampo = document.getElementById('marca-campo');
    const mensagem = document.getElementById('mensagem');
    const mensagemSucesso = <b>'Formulário enviado com sucesso'</b>
    
    formEValido = validaNome(nome.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';                                                                                                                                                                                                                   

        nome.value = '';
        email.value = '';
        tel.value =  '';
        marcaCampo.value = '';
        mensagem.value = '';
    } else {
        nome.style.border = '1px solid red';
        document.querySelector('.erro').style.display = 'block';
    }
})

nome.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nome.style.classList.add('erro');
        document.querySelector('.erro').style.display = 'block';
    } else {
        nome.style.classList.remove('erro');
        document.querySelector('.erro').style.display = 'none';
    }
}); 

