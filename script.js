//Configuração da Data de agendamento
function pad(valor) { // completa com zeros à esquerda, caso necessário
    return valor.toString().padStart(2, '0');
}

function formata(data) {
    return `${data.getFullYear()}-${pad(data.getMonth() + 1)}-${pad(data.getDate())}`;
}

const campo = document.querySelector('#campoData');

window.addEventListener('DOMContentLoaded', function() {
    var data = new Date(); // data de hoje
    campo.min = formata(data);
    // 2 anos à frente
    data.setFullYear(data.getFullYear() + 2);
    campo.max = formata(data);
});

// mensagens de validação
campo.addEventListener('input', () => {
  campo.setCustomValidity('');
  campo.checkValidity();
});

// se tentar submeter o form com data fora do intervalo, mostra o erro
campo.addEventListener('invalid', () => {
    campo.setCustomValidity('A data deve estar entre hoje e 2 anos à frente');
});
