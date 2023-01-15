let paragraphElement = document.querySelector('p');

function changeParagraphText(){
    paragraphElement.textContent = "Clicked!";
    console.log("Paragraph clicked!");
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputBox = document.querySelector('input');

function countText(event){
    let enteredText = inputBox.value;
    console.log(enteredText);
    console.log(event);
}

inputBox.addEventListener('input', countText)