let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = []
addButton.addEventListener("click", addTask)

function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,  //str대신!!!
        isComplete: false
    }
    taskList.push(task)
    console.log(taskList)
    render();
}
//그림은 렌더로 처리
function render(){
    let resultHTML = ''
    for(let i=0;i<taskList.length; i++){
        if (taskList[i].isComplete == true){
            resultHTML += `<div class="task task-done">
                    <div class = "task-done">${taskList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-rotate-right"></i></button>
                        <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can" style="color: #db490a;"></i></button>
                    </div>
                </div>`
        }else{
            resultHTML += `<div class="task">
                    <div>${taskList[i].taskContent}</div>
                    <div>
                        <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-square-check" style="color: #8aea2a;"></i></button>
                        <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can" style="color: #db490a;"></i></button>
                    </div>
                </div>`
            }
            
}
document.getElementById("task-board").innerHTML = resultHTML
}

function toggleComplete(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            if(taskList[i].isComplete == true){
                taskList[i].isComplete = false;
            }else{
                taskList[i].isComplete = true;
            }
            break;
        }
    }
    render()
    console.log(taskList)
}

function deleteTask(id){
    for(let i =0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    render()
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9)
}