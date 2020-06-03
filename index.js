var inputBox = document.getElementsByClassName('input-box')[0];
var submitBtn = document.getElementsByClassName('submit-btn')[0];
var todoPending = document.getElementsByClassName('pending')[0];
var todoTasks = document.getElementsByClassName('todo-tasks')[0];
var TodoTask = document.getElementsByClassName('todoTask');
function createTodo(todo) {
  // <div class="todoTask pending">
  //       <div class="checkBox"><i class="fas fa-check"></i></div>
  //       <div class="desc">
  //         <p class="todoDesc">Make something awesome</p>
  //         <i class="fas fa-times cut"></i>
  //         <i class="far fa-trash-alt dlt"></i>
  //       </div>
  // </div>
  document.getElementById('msg').style.display = 'none';
  let todoTask = document.createElement('div');
  todoTask.classList.add('todoTask');
  todoTask.id = 'todo' + new Date().getTime();

  let pendingCheck = true;
  let checkBox = document.createElement('div');
  checkBox.classList.add('checkBox');
  let check = document.createElement('i');
  check.classList.add('fas', 'fa-check');
  checkBox.appendChild(check);
  todoTask.appendChild(checkBox);
  checkBox.addEventListener('click', function () {
    if (pendingCheck) {
      todoTasks.appendChild(todoTask);
      pendingCheck = false;
    } else {
      todoPending.appendChild(todoTask);
      pendingCheck = true;
    }
  });
  let desc = document.createElement('div');
  desc.classList.add('desc');
  let todoDesc = document.createElement('p');
  todoDesc.classList.add('todoDesc');
  todoDesc.innerText = todo;
  desc.appendChild(todoDesc);
  let cut = document.createElement('i');
  cut.classList.add('fas', 'fa-times', 'cut');

  desc.appendChild(cut);
  cut.addEventListener('click', function () {
    todoTask.remove();
    if (TodoTask.length == 0) {
      document.getElementById('msg').style.display = 'block';
    }
  });
  let dlt = document.createElement('i');
  dlt.classList.add('far', 'fa-trash-alt', 'dlt');

  desc.appendChild(dlt);
  dlt.addEventListener('click', function () {
    todoTask.remove();
    if (TodoTask.length == 0) {
      document.getElementById('msg').style.display = 'block';
    }
  });
  todoTask.appendChild(desc);
  return todoTask;
}
function todoCreateHandler() {
  let enteredText = inputBox.value;
  if (enteredText != null && enteredText != '') {
    let todoCard = createTodo(enteredText);
    todoPending.appendChild(todoCard);
    inputBox.value = null;
  } else alert('please enter valid todo');
}

submitBtn.addEventListener('click', todoCreateHandler);

inputBox.addEventListener('keyup', function (e) {
  if (e.which === 13) {
    todoCreateHandler();
  }
});
