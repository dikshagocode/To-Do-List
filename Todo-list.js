const todoList = [{
    name : 'make dinner',
    dueDate : '2022-12-22'
},{
    name : 'wash dishes',
    dueDate : '2022-12-22'
}];

renderTodoList();

function renderTodoList () {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        const {name,dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick = "
              todoList.splice(${i}, 1);
              renderTodoList();
            " class = "todo-delete-button">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input')
    const dueDate = inputElement.value
    
    todoList.push({name,dueDate});
    inputElement.value = '';

    renderTodoList();;
}