var inputBox = document.getElementsByClassName('input-box')[0];
var submitBtn = document.getElementsByClassName('submit-btn')[0];
var todoPending = document.getElementsByClassName('pending')[0];

var check_box = document.getElementsByClassName('checkBox');
var todoTasks = document.getElementsByClassName('todo-tasks')[0];
var cut = document.getElementsByClassName('cut');
var dlt = document.getElementsByClassName('dlt');

function updateList() {
  check_box = document.getElementsByClassName('checkBox');
  todoTasks = document.getElementsByClassName('todo-tasks')[0];
  cut = document.getElementsByClassName('cut');
  dlt = document.getElementsByClassName('dlt');

  for (let i = 0; i < cut.length; i++) {
    cut[i].onclick = function () {
      let todoDiv = cut[i].parentNode;
      todoDiv.parentNode.parentNode.removeChild(todoDiv.parentNode);
      updateList();
    };
  }

  for (let i = 0; i < dlt.length; i++) {
    dlt[i].onclick = function () {
      let todoDiv = dlt[i].parentNode;
      todoDiv.parentNode.parentNode.removeChild(todoDiv.parentNode);
      updateList();
    };
  }

  for (let i = 0; i < check_box.length; i++) {
    check_box[i].onclick = function () {
      let todoDiv = check_box[i].parentNode;
      todoTasks.appendChild(todoDiv);
      updateList();
    };
  }
}
for (let i = 0; i < cut.length; i++) {
  cut[i].onclick = function () {
    let todoDiv = cut[i].parentNode;

    todoDiv.parentNode.parentNode.removeChild(todoDiv.parentNode);
  };
}

for (let i = 0; i < dlt.length; i++) {
  dlt[i].onclick = function () {
    let todoDiv = dlt[i].parentNode;

    todoDiv.parentNode.parentNode.removeChild(todoDiv.parentNode);
  };
}

for (let i = 0; i < check_box.length; i++) {
  check_box[i].onclick = function () {
    let todoDiv = check_box[i].parentNode;
    todoTasks.appendChild(todoDiv);
  };
}

function createTodo(todo) {
  // <div class="todoTask pending">
  //       <div class="checkBox"><i class="fas fa-check"></i></div>
  //       <div class="desc">
  //         <p class="todoDesc">Make something awesome</p>
  //         <i class="fas fa-times cut"></i>
  //         <i class="far fa-trash-alt dlt"></i>
  //       </div>
  // </div>
  let todoTask = document.createElement('div');
  todoTask.classList.add('todoTask');

  let checkBox = document.createElement('div');
  checkBox.classList.add('checkBox');
  let check = document.createElement('i');
  check.classList.add('fas');
  check.classList.add('fa-check');
  checkBox.appendChild(check);
  todoTask.appendChild(checkBox);
  let desc = document.createElement('div');
  desc.classList.add('desc');
  let todoDesc = document.createElement('p');
  todoDesc.classList.add('todoDesc');
  todoDesc.innerText = todo;
  desc.appendChild(todoDesc);
  let cut = document.createElement('i');
  cut.classList.add('fas');
  cut.classList.add('fa-times');
  cut.classList.add('cut');
  desc.appendChild(cut);
  let dlt = document.createElement('i');
  dlt.classList.add('far');
  dlt.classList.add('fa-trash-alt');
  dlt.classList.add('dlt');
  desc.appendChild(dlt);
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

  updateList();
}

submitBtn.addEventListener('click', todoCreateHandler);

inputBox.addEventListener('keyup', function (e) {
  if (e.which === 13) {
    todoCreateHandler();
  }
});
