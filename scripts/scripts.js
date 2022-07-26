/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id:getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let EmailOk = false
let AssuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOk = true

    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        EmailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande no máximo 100 caracteres'
        txtAssunto.style.color =  'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        AssuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && EmailOk == true && AssuntoOk == true){
        alert('Formulario enviado com sucesso!')
    }else{
        alert('Preencha o formulario corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'
}


function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.heigth = '450px'
}

