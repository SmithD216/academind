for(let i = 0; i < 10; i++){
    console.log(i);
}

const users = ['Max', 'Anna', 'Jake']

for(const user of users){
    console.log(user);
}

const loggedInUser = {
    name : "Max",
    age: 32,
    isAdmin: true
};

for(const loggedIn in loggedInUser){
    console.log(loggedIn);
    console.log(loggedIn['name']);
};

let isFinished = false;

while(!isFinished){
    isFinished = confirm("Are you sure you want to?");
}