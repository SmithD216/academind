function greetUser(greetingPrefix, userName = "user"){
    //console.log( greetingPrefix + " " + userName + "!");
    console.log(`${greetingPrefix} ${userName}`);
}

greetUser('hi', 'DeeDee');
greetUser('Hello');

function sumUp(...numbers){
    let result = 0
    for(const number of numbers){
        result += number
    }

    return result;
}

console.log(sumUp(1, 3,4, 5,6));

const inputNumbers = [1, 5, 3, 5, 10]

console.log(sumUp(...inputNumbers));

console.log(sumUp);