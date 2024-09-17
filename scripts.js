document.getElementById('form-exercicio').addEventListener('submit', function(event) {
    event.preventDefault();

const numeroA = parseFloat(document.getElementById('numero-A').value);
const numeroB = parseFloat(document.getElementById('numero-B').value);
const messageDiv = document.getElementById('message');

messageDiv.textContent = '';
messageDiv.classList.remove('success', 'error');

if (numeroB > numeroA) {
    messageDiv.textContent = 'Formulário válido! numeroB é maior que numeroA.';
    messageDiv.classList.add('success');
} else {
    messageDiv.textContent = 'Formulário inválido. numeroB deve ser maior que numeroA.';
    messageDiv.classList.add('error');
}
});

