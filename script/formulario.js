// Função para validar o formulário
function validarFormulario() {
    // Pegando os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var assunto = document.getElementById("assunto").value;
    var descricao = document.getElementById("descricao").value;

    // Verificando se os campos estão preenchidos
    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }
    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }
    if (telefone === "") {
        alert("Por favor, preencha o campo Telefone.");
        return false;
    }
    if (assunto === "") {
        alert("Por favor, preencha o campo Assunto.");
        return false;
    }
    if (descricao === "") {
        alert("Por favor, preencha o campo Descrição.");
        return false;
    }

    // Validação básica de email (somente verifica se há um '@')
    if (!email.includes("@")) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }

    if (telefone.length < 10 || telefone.length > 11) {
        alert("Por favor, insira um número de telefone válido com DDD.");
        return false;
    }

    // Se tudo estiver certo, o formulário pode ser enviado
    alert("Formulário enviado com sucesso!");
    return true;
}

// Adicionando o evento ao botão de enviar
document.querySelector(".form-conteudo").addEventListener("submit", function(event) {
    // Impede o envio do formulário se a validação falhar
    if (!validarFormulario()) {
        event.preventDefault(); // Impede o envio do formulário
    }
});
