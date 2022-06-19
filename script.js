// REQUISITO 3
window.onload = function () {
    const button = document.getElementById('btn');
    button.addEventListener('click', function (event) {
        event.preventDefault();
    })
}

// REQUISITO 4
const form = document.getElementById('form');
const buttonClear = document.createElement('button');
buttonClear.type = 'reset';
buttonClear.innerText = 'Limpar';
form.appendChild(buttonClear);

// BÔNUS
// REQUISITO 1
function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
  }