
const formCalculo = document.getElementById('form-Calculo')
formCalculo.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = (document.getElementById('campoA').value);
    const campoB = (document.getElementById('campoB').value);

    const respostaDiv = document.getElementById('resposta');

    if (campoB > campoA) {
        alert('O formulário é válido! Campo B é maior que Campo A.');
    } else if (campoB === campoA){
        alert('Os valores são iguais, tente novamente!');
    }
    else{
        alert('O formulário é inválido! Campo B deve ser maior que Campo A.');
    }
    location.reload()
});


