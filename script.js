// google.charts.load('current', {'packages':['corechart']});
//
// google.charts.setOnLoadCallback(drawChart);
//
// function drawChart() {
//   var data = new google.visualization.DataTable();
//         data.addColumn('string', 'Difficulty');
//         data.addColumn('number', 'Tasks');
//         data.addRows([
//           ['Easy', taskCounter.easy],
//           ['Medium', taskCounter.medium],
//           ['Hard', taskCounter.hard],
//         ]);
//
//         var options = {'title':'Difficulty of Tasks Breakdown',
//                        'width':300,
//                        'height':200};
//
//         // Instantiate and draw our chart, passing in some options.
//         var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
//         chart.draw(data, options);
// }

var tasks = [];

// var taskCounter = {
//   me: 0,
//   jeremy: 0,
//   cheri: 0,
//   easy: 0,
//   medium: 0,
//   hard: 0
// }

var me = 0;
var jeremy = [];
var cheri = [];
var easy = [];
var moderate = [];
var hard = [];

// function counter() {
//   event.preventDefault();
//   console.log("time to count");
//   for (var i = 0; i < tasks.length; i++) {
//     var who = tasks[i].who;
//     if (who == "me") {
//       me = me + 1;
//     }
//   }
// }

function addTask() {
  console.log("Added Task!");

  event.preventDefault();
  var form = document.querySelector("form");
  var newTask = {taskName: form.task.value,
                 who: form.who.value,
                 difficulty: form.difficulty.value};
  tasks.push(newTask);
  // counter();
  sortTaskOwner();
  form.reset();
}

function sortTaskOwner() {
  var myListContainer = document.getElementById("todo-list-me"); //parents
  var jeremyListContainer = document.getElementById("todo-list-jeremy");
  var cheriListContainer = document.getElementById("todo-list-cheri");

  myListContainer.innerHTML = "";
  jeremyListContainer.innerHTML = "";
  cheriListContainer.innerHTML = "";

  var ulMyList = document.createElement("ul");
  var ulJeremyList = document.createElement("ul");
  var ulCheriList = document.createElement("ul");

  for (var i = 0; i < tasks.length; i++) {

    var currentTask = tasks[i].taskName;
    var who = tasks[i].who;
    var difficulty = tasks[i].difficulty;
    var li = document.createElement("li");

    if (who === "Me") {
      me = me + 1;
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
      }
      ulMyList.appendChild(li);
      // myList.appendChild(ulMyList);
    } else if (who === "Jeremy") {

      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
      }
      ulJeremyList.appendChild(li);
      // jeremyList.appendChild(ulJeremyList);
    } else {

      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
      }
      ulCheriList.appendChild(li);
      // cheriList.appendChild(ulCheriList);
    }
  }
  myListContainer.appendChild(ulMyList);
  jeremyListContainer.appendChild(ulJeremyList);
  cheriListContainer.appendChild(ulCheriList);
}

function resetPage() {
}
