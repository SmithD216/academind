let inputBox = document.querySelector('input');
let characterCount = document.getElementById("charcount");

function countChars(){
    let charCount = inputBox.value.length;
    characterCount.textContent = charCount;
}

inputBox.addEventListener('input', countChars);