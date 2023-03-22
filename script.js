const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('button');

function valor() {
    if (altura.value === '' || peso.value === '' || altura.value == 0 || peso.value == 0) {
        alert('Preencha o campo ou informe um número válido!');
    } else {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        if (imc < 18.5)  {
            resultado.innerText = 'Abaixo do peso';
        } else if (imc < 25) {
            resultado.innerText = 'Peso normal';
        } else if (imc < 30) {
            resultado.innerText = 'Acima do peso';
        } else if (imc < 35) {
            resultado.innerText = 'Obesidade Grau I';
        } else if (imc < 41) {
            resultado.innerText = 'Obesidade Grau I';
        } else {
            resultado.innerText = 'Obesidade Grau III';
        }
    }
}

btn.addEventListener('click', valor);

8