const mainText = document.getElementById('viewText');
mainText.textContent = '';

const histText = document.getElementById('histText');
histText.textContent = '';

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(parseInt(number.textContent));
        mainText.textContent += number.textContent;
    });
});

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    mainText.textContent = '';
    histText.textContent = '';
});

const equal = document.querySelector('.equal');

equal.addEventListener('click', () => {
    histText.textContent = mainText.textContent + " =";
    mainText.textContent = "Answer"
})

const add = function() {

}