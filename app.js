const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(parseInt(number.textContent))
    });
});

const vpText = document.getElementById('viewText');
vpText.textContent = '';

const history = document.getElementById('histText');
history.textContent = '';
