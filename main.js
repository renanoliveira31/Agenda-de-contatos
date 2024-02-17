const form = document.getElementById('formulário-agenda');
const nomes = [];
const numeros = [];
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('telefone');

    if(nomes.includes(inputNome.value)){
        alert(`O nome: ${inputNome.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function converterParaMaiusculas(elemento) {
    elemento.value = elemento.value.toUpperCase();
}

function validarFormulario() {
    var nomeCompleto = document.getElementById('nome').value;
    var partesNome = nomeCompleto.split(' ');
    
    if (partesNome.length < 2) {
        alert("Por favor, insira o nome completo");
        return false; 
    }
    return true; 
}

document.getElementById('telefone').addEventListener('focus', function() {
    this.setAttribute('type', 'text');
});

document.getElementById('telefone').addEventListener('blur', function() {
    this.setAttribute('type', 'number');
});
