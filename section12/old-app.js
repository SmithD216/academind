//"Drilling" into the DOM
//document.body.children[1].children[0].href =  'https://www.google.com'

//Searching the DOM for elements
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://www.google.com";

//This uses css selectors to ID the first matching element
anchorElement = document.querySelector('p a');
anchorElement.href ="https://academind.com";

//This uses css selectors to ID all matching elements
anchorElement = document.querySelectorAll('p a');
anchorElement.href ="https://www.youtube.com";


//These are the same
//alert()
//window.alert()



//ADD ELEMENTS
let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://www.youtube.com"
newAnchorElement.textContent = "YouTube";


let firstParagraph= document.querySelector('p');

firstParagraph.appendChild(newAnchorElement);

//REMOVE ELEMENTS
let firstH1 = document.querySelector('h1');

firstH1.remove();
//to remove in older browsers
//firstH1.parentElement.removeChild(firstH1);

//MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

//innerHTML

firstParagraph.innerHTML = "Hi! This is <strong>important</strong>";