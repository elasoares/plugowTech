let msnErro = document.getElementById("msnErro")
let inputEmail = document.getElementById("inputEmail")
let inputSenha = document.getElementById("inputSenha")
let btnEntrar = document.getElementById("btnEntrar")
let btnSignUp = document.getElementById("btnSignUp")

let listaUser = []
let usuarioCadastradoEmail = []
let usuarioCadastradoSenha = []
let usuarios = []

const url = "https://672e45cf229a881691ef9103.mockapi.io/api/v1/usuarios"
async function getDados() {
    const resposta = await fetch(url);
    console.log(resposta)

    const dados = await resposta.json()
    console.log(dados)
  
    usuarioCadastradoEmail = dados.map((dado) => dado[0].email)
    console.log( "EMAIL CADASTRADOS", usuarioCadastradoEmail)

    usuarioCadastradoSenha = dados.map((dado) => dado[0].senha)
    console.log( "SENHAS CADASTRADAS", usuarioCadastradoSenha)
}
getDados()


btnEntrar.addEventListener("click", (e) => {
    e.preventDefault()
    alert("botao")
})

btnSignUp.addEventListener("click", (e) =>{
    e.preventDefault()
    window.location.href = "index.html"
    
})



