//First example: sum numbers
const calculateSumButtonElement = document.querySelector('#calculator button');

calculateSumButtonElement.addEventListener('click', calculateSum);

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for(let i = 0; i <= enteredNumber; i++){
        sumUpToNumber += i;
    }

    const outputResultElement = document.getElementById('calculated-sum')
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

// Second example: highlight links
const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks(){
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// Third example: display user data

const dummyUserData = {
    name: 'blaj',
    surname: 'blah',
    age: 32
}

const displayUserDataButtonElement = document.querySelector('#user-data button')

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = '';
    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key]; 
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);

// Fourth example: roll dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice(){
}

function deriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;

    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);