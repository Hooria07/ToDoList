#!/usr/bin/env node
import inquirer from "inquirer"
let todos = []; //Shopper[]
let condition = true;

while(condition)
{ 
    let todoQuestion = await inquirer.prompt(
    [
        {
            name: "firstQuestion",
            type:'input',
            message:"what you would you like to add in your Todos?",
        },
        {
            name:"secondQuestion",
            type: 'confirm',// when type is confirm answer is in yes or no
            message: "Would  you like to add more in your todos?",
            default: 'true',
        }
    
    ]
);
todos.push(todoQuestion.firstQuestion);
console.log(todos);
// The loop is running on the based of  this varriable condition
condition = todoQuestion.secondQuestion;
}

// read, update , delete ,add Home work
