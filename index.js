#! /usr/bin/env node
import inquirqr from "inquirer";
let todoList = [];
let condition = true;
console.log("\n \t welcome to my Todo List Cli Application \n");
let main = async () => {
    while (condition) {
        let option = await inquirqr.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirqr.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
let viewTask = () => {
    console.log("\n your Todo-List \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirqr.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter 'index no' of the task you want to deleted",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-List \n`);
};
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirqr.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task add index no. ${update_task_index.index - 1} updated successfully [for updated list check option: "view Todo-List"]`);
};
main();
