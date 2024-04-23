import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: 'input',
            message: "what you would you like to add in your Todos?",
        },
        {
            name: "secondQuestion",
            type: 'confirm',
            message: "Would  you like to add more in your todos?",
            default: 'true',
        }
    ]);
    todos.push(todoQuestion.firstQuestion);
    condition = todoQuestion.secondQuestion;
    console.log(todos);
}
