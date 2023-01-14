// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
let courseName = "100 days of code"
//    - A variable that stores the price of that course
let coursePrice = 15
//    - A variable that stores the three main goals that you have, when taking this course
let courseGoal = {
    goal1:"Get good at programming",
    goal2:"Get a remote job",
    goal3:"Make fat stacks of cash"
}
// 2) Output ("alert") the three variable values
alert(courseGoal.goal1)
alert(courseGoal.goal2)
alert(courseGoal.goal3)

// 3) Try "grouping" the three variables together and still output their values thereafter
alert(courseGoal.goal1 + ", " + courseGoal.goal2 + ", " + courseGoal.goal3)
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function listGoal(goal1){
    alert(goal1)
}
// 6) Execute your custom command from (5) and output ("alert") the result
listGoal(courseGoal.goal1);