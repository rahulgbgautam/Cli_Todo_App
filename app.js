import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const todos = [];

const showMenu = () => {
    console.log("\n 1:Add a task");
    console.log("2:view Task");
    console.log("3:exit");
    rl.question("Choose An Option",handleInput)//for selecting any of the option we did use question and handleinput    
}

const handleInput = (option) => {
    if(option === "1"){
        rl.question("Enter The Task:", (task) => {
            todos.push(task);
            console.log("Task added:",task);
            showMenu();
        })
    }else if(option === "2"){
        console.log("\nYour Todo Lists");
        todos.forEach((task,index)=>{
        console.log(`${index+1}. ${task}`)
        showMenu();
        })
    }else if(option === "3"){
        console.log('Good Bye');
        rl.close();
    }else{
        console.log("Invalid Option");
        showMenu();
    }
}

showMenu();