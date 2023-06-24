let unorder_ele = document.getElementById("todoItemsContainer")
let user_input = document.getElementById("todoUserInput")

let todoList=[
    {
        text:"javascript",
        unq_id:1
    },
    {
        text:"css",
        unq_id:2
    },
    {
        text:"react",
        unq_id:3
    },
    {
        text:"angular",
        unq_id:4
    },
    {
        text:"python",
        unq_id:5
    },
    {
        text:"react_native",
        unq_id:6
    }
];
let oldTodolist = todoList.length

function newTodoList(){

    if (user_input.value === ""){
        alert("please enter valid input")
       return
    }
   
    let newTodo={
        text:user_input.value,
        unq_id:oldTodolist+1
    }

    create_todo_app(newTodo)
    user_input.value=""

 

}

//for checked line


function deleteelement(delunq){
    let del_element = document.getElementById(delunq)
    unorder_ele.removeChild(del_element)
}



function add(){
   newTodoList()
}


function create_todo_app(todo){

    let checkunq = "checkIds"+todo.unq_id
    let labelunq = "labelId"+todo.unq_id
    let delunq = "delId"+todo.unq_id

    let list_ele = document.createElement("list")
    list_ele.classList="todo-item-container"
    list_ele.id=delunq
    unorder_ele.appendChild(list_ele)
    
    let input_ele = document.createElement("input")
    input_ele.type="checkbox"
    input_ele.id = checkunq
   input_ele.onclick=function(){
    additem(labelunq,checkunq)
   }
    input_ele.classList.add("checkbox-input")
    list_ele.appendChild(input_ele) 

    let label_contaoiner_ele = document.createElement("div")
    label_contaoiner_ele.classList="label-container"
    list_ele.appendChild(label_contaoiner_ele)
    
    let label_ele = document.createElement("label")
    label_ele.classList="checkbox-label"
    input_ele.id = labelunq
    label_ele.setAttribute("for",checkunq)
    label_ele.textContent=todo.text
    label_contaoiner_ele.appendChild(label_ele)
    
    let del_container_ele = document.createElement("div")
    del_container_ele.classList="delete-icon-container"
    
    del_container_ele.onclick=function(){
        deleteelement(delunq)
    }
    label_contaoiner_ele.appendChild(del_container_ele)
    
    let del_ele = document.createElement("i")
    del_ele.classList="fa-regular fa-trash-can delete-icon"
    del_container_ele.appendChild(del_ele)

    

}


for (let todo of todoList){
    create_todo_app(todo)
}


