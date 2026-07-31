function validateForm() {
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;


  if (user === "" || user.lenght <=3 ) {
    alert("Campo usuário necessita minimo 3 caracteres");
    return false;
  }
  

  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regexSenha.test(password)) {
    alert(`Por favor, insira uma senha forte: \n
        Pelo menos 1 letra minúscula\n
        Pelo menos 1 letra maiúscula\n
        Pelo menos 1 número\n
        Pelo menos 1 caractere especial\n
        Tamanho mínimo  8 Caracteres`)
    return false;
  }

  return true;
}

document.getElementById('contactForm')
.addEventListener('submit', function (event){
    event.preventDefault();
    if (validateForm()) {
        alert ('Formulário Validado')
    }


}) 