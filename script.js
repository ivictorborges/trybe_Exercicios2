function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// REQUISITO 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function makeCalendaryDays () {
    const daysUnList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let days = dezDaysList[index];
        let daysList = document.createElement('li');
        if (days === 24 || days === 31) {
            daysList.className ='day holiday';
            daysList.innerHTML = days;
            daysUnList.appendChild(daysList);
        }
        else if (days === 25) {
            daysList.className = 'day holiday friday';
            daysList.innerHTML = days;
            daysUnList.appendChild(daysList);
        }
        else if (days === 4 || days === 11 || days === 18) {
            daysList.className ='day friday';
            daysList.innerHTML = days;
            daysUnList.appendChild(daysList);
        }
        else {
            daysList.className ='day';
            daysList.innerHTML = days;
            daysUnList.appendChild(daysList);
        }
    }
}
makeCalendaryDays();

// REQUISITO 2
function makeHolidayButton (string) {
    const buttonContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = string;
    buttonContainer.appendChild(button);
}
makeHolidayButton('Feriados');

// REQUISITO 3
function eventInButton () {
    const holidayButton = document.querySelector('#btn-holiday');
    const getHolidays = document.querySelectorAll('.holiday');
    let currentColor = 'rgb(238,238,238)';
    let newColor = 'white';
    
    holidayButton.addEventListener('click',function() {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === newColor) {
                getHolidays[index].style.backgroundColor = currentColor;
            }
            else {
                getHolidays[index].style.backgroundColor = newColor;
            }
        }
    })
}
eventInButton();

// REQUISITO 4
function makeFridayButton (string) {
    const buttonContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerHTML = string;
    buttonContainer.appendChild(button);
}
makeFridayButton('Sexta-Feira');

// REQUISITO 5
function eventInButton2 (fridays) {
    const fridayButton = document.querySelector('#btn-friday');
    const getFridays = document.querySelectorAll('.friday');
    
    fridayButton.addEventListener('click',function() {
        for (let index = 0; index < getFridays.length; index += 1) {
            if (getFridays[index].innerHTML !== 'SEXTA !!!') {
                getFridays[index].innerHTML = 'SEXTA !!!';
            }
            else {
                getFridays[index].innerHTML = fridays[index];
            }
        }
    })
}
let fridays = [4,11,18,25];
eventInButton2(fridays);

// REQUISITO 6
function eventMouseOver () {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    });
}

function eventMouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout',function (event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
    });
}

eventMouseOver();
eventMouseOut();

// REQUISITO 7
function makeTask (string) {
    const myTasks = document.querySelector('.my-tasks');
    const task = document.createElement('span');
    task.innerHTML = string;
    myTasks.appendChild(task);
}
makeTask('To Cross');

// REQUISITO 8
function setLegendColor (string) {
    const myTasks = document.querySelector('.my-tasks');
    const task = document.createElement('div');
    task.className = 'task';
    task.style.backgroundColor = string;
    myTasks.appendChild(task);
}
setLegendColor('blue');

// REQUISITO 9
function selected () {
    const taskSelected = document.getElementsByClassName('task selected');
    const task = document.querySelector('.task');
    task.addEventListener('click', function(event){
        if (taskSelected.length === 0) {
            event.target.className = 'task selected';
        }
        else {
            event.target.className = 'task';
        };
    })
}
selected();

// REQUISITO 10
function setDayColor() {
    const selectedTask = document.getElementsByClassName('task selected');
    const days = document.querySelector('#days');
    const task = document.querySelector('.task');
    const taskColor = task.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

// REQUISITO 11
function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();