const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const paiInput = document.getElementById("pai");
const maeInput = document.getElementById("mãe");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");

// Evento que so é ativado quando um formulário for enviado
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = nomeInput.value;
    const pai = paiInput.value;
    const mae = maeInput.value;
    const telefone = telefoneInput.value;
    const email = emailInput.value;

    form.reset();
});

// Função para limpar os campos requisitados no site
function limparCampos() {
    var campos = document.getElementsByTagName("input");
    for (var i =0; i < campos.length; i ++) {
        if (campos[i].type =="text" || campos[i].type =="tel") {
            campos[i].value = "";
        }
    }
}
