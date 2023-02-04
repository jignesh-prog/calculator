document.getElementById('zero');
document.getElementById('seven');
document.getElementById('output');

let presszero = () => {
    output.innerHTML = '0';
}
let pressseven = () => {
    output.innerHTML = '7';
}

zero.onclick = presszero;
seven.onclick = pressseven;