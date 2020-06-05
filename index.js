var inputBox = document.getElementsByClassName('input-box')[0];
var submitBtn = document.getElementsByClassName('submit-btn')[0];
var todoPending = document.getElementsByClassName('pending')[0];
var todoTasks = document.getElementsByClassName('todo-tasks')[0];
var TodoTask = document.getElementsByClassName('todoTask');
if (window.localStorage.getItem('cardArray') == null) {
  let cardArr = [];
  window.localStorage.setItem('cardArray', JSON.stringify(cardArr));
}
function getCard() {
  let getArr = window.localStorage.getItem('cardArray');
  getArr = JSON.parse(getArr);
  for (let i = 0; i < getArr.length; i++) {
    document.getElementById('msg').style.display = 'none';
    let todoTask = document.createElement('div');
    todoTask.classList.add('todoTask');
    todoTask.id = getArr[i].id;

    let pendingCheck1 = getArr[i].pendingCheck;
    let checkBox = document.createElement('div');
    checkBox.classList.add('checkBox');
    let check = document.createElement('i');
    check.classList.add('fas', 'fa-check');
    checkBox.appendChild(check);
    todoTask.appendChild(checkBox);

    let desc = document.createElement('div');
    desc.classList.add('desc');
    let todoDesc = document.createElement('p');
    todoDesc.classList.add('todoDesc');
    todoDesc.innerText = getArr[i].cardpara;
    desc.appendChild(todoDesc);
    let cut = document.createElement('i');
    cut.classList.add('fas', 'fa-times', 'cut');

    desc.appendChild(cut);
    cut.addEventListener('click', function () {
      todoTask.remove();
      let getArr1 = window.localStorage.getItem('cardArray');
      getArr1 = JSON.parse(getArr1);
      for (let i = 0; i < getArr1.length; i++) {
        if (getArr1[i].id == todoTask.id) {
          getArr1.splice(i, 1);
        }
      }
      getArr1 = JSON.stringify(getArr1);
      window.localStorage.setItem('cardArray', getArr1);
      if (TodoTask.length == 0) {
        document.getElementById('msg').style.display = 'block';
      }
    });
    let dlt = document.createElement('i');
    dlt.classList.add('far', 'fa-trash-alt', 'dlt');

    desc.appendChild(dlt);
    dlt.addEventListener('click', function () {
      todoTask.remove();
      let getArr1 = window.localStorage.getItem('cardArray');
      getArr1 = JSON.parse(getArr1);
      for (let i = 0; i < getArr1.length; i++) {
        if (getArr1[i].id == todoTask.id) {
          getArr1.splice(i, 1);
        }
      }
      getArr1 = JSON.stringify(getArr1);
      window.localStorage.setItem('cardArray', getArr1);
      if (TodoTask.length == 0) {
        document.getElementById('msg').style.display = 'block';
      }
    });
    todoTask.appendChild(desc);
    if (pendingCheck1) {
      todoPending.appendChild(todoTask);
    } else {
      todoTasks.appendChild(todoTask);
    }
    checkBox.addEventListener('click', function () {
      if (pendingCheck1) {
        todoTasks.appendChild(todoTask);
        pendingCheck1 = false;

        let getArr1 = window.localStorage.getItem('cardArray');
        getArr1 = JSON.parse(getArr1);
        for (let i = 0; i < getArr1.length; i++) {
          if (getArr1[i].id == todoTask.id) {
            getArr1[i].pendingCheck = false;
          }
        }
        getArr1 = JSON.stringify(getArr1);
        window.localStorage.setItem('cardArray', getArr1);
      } else {
        todoPending.appendChild(todoTask);
        pendingCheck1 = true;
        let getArr1 = window.localStorage.getItem('cardArray');
        getArr1 = JSON.parse(getArr1);
        for (let i = 0; i < getArr1.length; i++) {
          if (getArr1[i].id == todoTask.id) {
            getArr1[i].pendingCheck = true;
          }
        }
        getArr1 = JSON.stringify(getArr1);
        window.localStorage.setItem('cardArray', getArr1);
      }
    });
  }
}
getCard();
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

      let getArr1 = window.localStorage.getItem('cardArray');
      getArr1 = JSON.parse(getArr1);
      for (let i = 0; i < getArr1.length; i++) {
        if (getArr1[i].id == todoTask.id) {
          getArr1[i].pendingCheck = false;
        }
      }
      getArr1 = JSON.stringify(getArr1);
      window.localStorage.setItem('cardArray', getArr1);
    } else {
      todoPending.appendChild(todoTask);
      pendingCheck = true;
      let getArr1 = window.localStorage.getItem('cardArray');
      getArr1 = JSON.parse(getArr1);
      for (let i = 0; i < getArr1.length; i++) {
        if (getArr1[i].id == todoTask.id) {
          getArr1[i].pendingCheck = true;
        }
      }
      getArr1 = JSON.stringify(getArr1);
      window.localStorage.setItem('cardArray', getArr1);
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
    let getArr1 = window.localStorage.getItem('cardArray');
    getArr1 = JSON.parse(getArr1);
    for (let i = 0; i < getArr1.length; i++) {
      if (getArr1[i].id == todoTask.id) {
        getArr1.splice(i, 1);
      }
    }
    getArr1 = JSON.stringify(getArr1);
    window.localStorage.setItem('cardArray', getArr1);
    if (TodoTask.length == 0) {
      document.getElementById('msg').style.display = 'block';
    }
  });
  let dlt = document.createElement('i');
  dlt.classList.add('far', 'fa-trash-alt', 'dlt');

  desc.appendChild(dlt);
  dlt.addEventListener('click', function () {
    todoTask.remove();
    let getArr1 = window.localStorage.getItem('cardArray');
    getArr1 = JSON.parse(getArr1);
    for (let i = 0; i < getArr1.length; i++) {
      if (getArr1[i].id == todoTask.id) {
        getArr1.splice(i, 1);
      }
    }
    getArr1 = JSON.stringify(getArr1);
    window.localStorage.setItem('cardArray', getArr1);
    if (TodoTask.length == 0) {
      document.getElementById('msg').style.display = 'block';
    }
  });
  todoTask.appendChild(desc);
  // saving to local storage
  let cardData = {
    id: todoTask.id,
    cardpara: todo,
    pendingCheck: pendingCheck,
  };
  let getArr = window.localStorage.getItem('cardArray');
  getArr = JSON.parse(getArr);
  getArr.push(cardData);
  getArr = JSON.stringify(getArr);
  window.localStorage.setItem('cardArray', getArr);
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
