let labelNome = document.getElementById("labelNome")
let inputNome = document.getElementById("inputNome")
let validNome = false
let labelEmail = document.getElementById("labelEmail")
let inputEmail = document.getElementById("inputEmail")
let validEmail = false
let inputDataNascimento = document.getElementById("inputDataNascimento")
let labelTelefone = document.getElementById("labelTelefone")
let inputTelefone = document.getElementById("inputTelefone")
let labelCpfCnpj = document.getElementById("labelCpfCnpj")
let inputCpfCnpj = document.getElementById("inputCpfCnpj")
let validCpfCnpj = false
let inputProfissao = document.getElementById("inputProfissao")
let validProfissao = false
let inputRegistroProfissional = document.getElementById("inputRegistroProfissional")
let validRegistroProfissional = false
let labelSenha = document.getElementById("labelSenha")
let inputSenha = document.getElementById("inputSenha")
let validSenha = false
let labelConfirmeSenha = document.getElementById("labelConfirmeSenha")
let inputConfirmeSenha = document.getElementById("inputConfirmeSenha")
let validConfirmeSenha = false

let btnCadastrar = document.getElementById("btnCadastrar")

let listaUser = []
let usuarioCadastrado = []
let usuarios = []

const url = "https://672e45cf229a881691ef9103.mockapi.io/api/v1/usuarios"
async function getDados() {
    const resposta = await fetch(url);
    console.log(resposta)

    const dados = await resposta.json()
    console.log(dados)
  
    usuarioCadastrado = dados.map((dado) => dado[0].cpfCnpj)
    console.log( "CPFs/CNPJs CADASTRADOS", usuarioCadastrado)
}
getDados()

inputNome.addEventListener("keyup", () =>{
    if(inputNome.value.length < 3){
        labelNome.innerHTML = "Insira no mínimo 3 caracteres"
        labelNome.style.color = "red"
        validNome = false
    } else {
        labelNome.innerHTML = ""
        validNome = true
    }
})


inputEmail.addEventListener("keyup", () => {
    let valorDoEmail = inputEmail.value
    function isValidEmail(valorDoEmail) {
        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(valorDoEmail);
      }
      if (!isValidEmail(valorDoEmail) || valorDoEmail.length == "") {
        labelEmail.innerHTML = "Informe um e-mail válido"
        labelEmail.style.color = "red"
        validEmail = false
      }  else {
        labelEmail.innerHTML = ""
        validEmail = true
      }   
})


inputTelefone.addEventListener("keyup", () => {
    let valorDoTelefone = inputTelefone.value
    function isValidTelefone(valorDoTelefone) {
        const telefoneRegex = /^(\(?\d{2}\)?\s?)?9?\d{4}-?\d{4}$/;
        return telefoneRegex.test(valorDoTelefone);
      }
      if (!isValidTelefone(valorDoTelefone)) {
        labelTelefone.innerHTML = "Informe um telefone válido"
        labelTelefone.style.color = "red"
        
      }  else {
        labelTelefone.innerHTML = ""
        
      }   
})



inputCpfCnpj.addEventListener("keyup", () =>{
    let valorDoCpfCnpj = inputCpfCnpj.value
    function isValidCpfFormat(valorDoCpf) {
        const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
        return cpfRegex.test(valorDoCpfCnpj);    
      }

      if (!isValidCpfFormat(valorDoCpfCnpj)) {
        labelCpfCnpj.innerHTML = "Inclua pontos e traços"
        labelCpfCnpj.style.color = "red"
        validCpf = false
      }  else {
        labelCpfCnpj.innerHTML = ""
        validCpfCnpj = true
      }  

      usuarioCadastrado.map((usuario) =>{
        if(usuario == valorDoCpfCnpj){
            labelCpfCnpj.innerHTML = "CPF já está cadastrado"
            labelCpfCnpj.style.color = "red"    
            btnCadastrar.disabled = true
            btnCadastrar.style.background = "red"
            btnCadastrar.style.color = "white"      
        } else {
            labelCpfCnpj.innerHTML = ""   
            btnCadastrar.disabled = false
            btnCadastrar.style.background = "transparent"
            btnCadastrar.style.color = "black" 
        }
     })
    })


      inputProfissao.addEventListener("keyup", () =>{
        if(inputProfissao.value.length == ""){
            validProfissao = false
        }else{
            validProfissao = true
        }
    })


    inputRegistroProfissional.addEventListener("keyup", () =>{
        if(inputRegistroProfissional.value.length == ""){
            validRegistroProfissional = false
        }else{
            validRegistroProfissional = true  
        }
    })


    inputSenha.addEventListener("keyup", () =>{
        if(inputSenha.value.length <= 5){
            labelSenha.innerHTML = "Senha precisa ter no mínimo 6 caracteres"
            labelSenha.style.color = "red"
            validSenha = false
        } else {
            labelSenha.innerHTML = ""
            validSenha = true
        }
    })


    inputConfirmeSenha.addEventListener("keyup", () =>{
        if(inputConfirmeSenha.value !== inputSenha.value){
            labelConfirmeSenha.innerHTML = "As senhas precisam ser iguais"
            labelConfirmeSenha.style.color = "red"
            validConfirmeSenha = false
        } else {
            labelConfirmeSenha.innerHTML = ""
            validConfirmeSenha = true
        }
    })



    btnCadastrar.addEventListener("click", (e) =>{
        e.preventDefault()   
      
        if(inputNome.value !== "" && inputEmail.value !==  inputCpfCnpj.value !== "" && inputProfissao.value !== "" && inputRegistroProfissional.value !== "" && inputSenha.value !== "" && inputConfirmeSenha.value !== "") {
        
            listaUser.push(
                {
                    nome: inputNome.value,
                    email: inputEmail.value,
                    dataNascimento: inputDataNascimento.value,
                    telefone: inputTelefone.value,
                    cpfCnpj: inputCpfCnpj.value,
                    profissao: inputProfissao.value,
                    registroProfissional: inputRegistroProfissional.value, 
                    senha: inputSenha.value,
                    confirmeSenha: inputConfirmeSenha.value,
                    
                },   
            );
    
            fetch("https://672e45cf229a881691ef9103.mockapi.io/api/v1/usuarios", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(listaUser)
                })
                .then (response => {
                    if(!response.ok) {
                        throw new Error("Erro na requisicao")
                    }
                    return response.json()
                })
                .then(data =>{
                    console.log("Dados enviados com sucesso", data)
                    alert("Usuario cadastrado com sucesso")
                })
                .catch(error =>{
                    console.error("Erro na requisicao POST", error)
                });
    
             
                inputNome.value = "",
                inputEmail.value = "",
                inputDataNascimento.value = "",
                inputTelefone.value = "",
                inputCpfCnpj.value = "",
                inputProfissao.value = "",
                inputRegistroProfissional.value = "", 
                inputSenha.value = "",
                inputConfirmeSenha.value = "";

                window.location.href = "login.html"
    
        } else {
            alert("Necessario preecher os campos")
        }
    })
       
  


   


