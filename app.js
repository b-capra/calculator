const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const vpText = document.getElementById('viewText');
vpText.textContent = '';

const history = document.getElementById('histText');
history.textContent = '';


one.addEventListener('click', () => {
    console.log('1');
});

two.addEventListener('click', () => {
    console.log('2');
});

three.addEventListener('click', () => {
    console.log('3');
});

four.addEventListener('click', () => {
    console.log('4');
});

five.addEventListener('click', () => {
    console.log('5');
});

six.addEventListener('click', () => {
    console.log('6');
});

seven.addEventListener('click', () => {
    console.log('7');
});

eight.addEventListener('click', () => {
    console.log('8');
});

nine.addEventListener('click', () => {
    console.log('9');
});

zero.addEventListener('click', () => {
    console.log('0');
})