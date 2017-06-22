google.charts.load('current', {'packages':['corechart']});

// google.charts.setOnLoadCallback(drawChart);

var tasks = [];

var me = 0;
var jeremy = 0;
var cheri = 0;
var easy = 0;
var moderate = 0;
var hard = 0;

var meEasy = 0;
var meModerate = 0;
var meHard = 0;
var jeremyEasy = 0;
var jeremyModerate = 0;
var jeremyHard = 0;
var cheriEasy = 0;
var cheriModerate = 0;
var cheriHard = 0;

function addTask() {
  console.log("Added Task!");
  event.preventDefault();
  var form = document.querySelector("form");
  var newTask = {taskName: form.task.value,
                 who: form.who.value,
                 difficulty: form.difficulty.value};
  tasks.push(newTask);
  sortTaskOwner();
  form.reset();
  if (tasks.length > 0) {
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
    drawChart();
    drawChart2();
    drawChart3();
  }

}
//function used to both sort tasks to be displayed
//and tallies them for use in charts
function sortTaskOwner() {
  //creates parent containers
  var myListContainer = document.getElementById("todo-list-me");
  var jeremyListContainer = document.getElementById("todo-list-jeremy");
  var cheriListContainer = document.getElementById("todo-list-cheri");
  //clears parent container
  myListContainer.innerHTML = "";
  jeremyListContainer.innerHTML = "";
  cheriListContainer.innerHTML = "";
  //creates ul elements to hold tasks
  var ulMyList = document.createElement("ul");
  var ulJeremyList = document.createElement("ul");
  var ulCheriList = document.createElement("ul");
  //resets variable counts to zero
  me = 0;
  jeremy = 0;
  cheri = 0;
  easy = 0;
  moderate = 0;
  hard = 0;

  meEasy = 0;
  meModerate = 0;
  meHard = 0;
  jeremyEasy = 0;
  jeremyModerate = 0;
  jeremyHard = 0;
  cheriEasy = 0;
  cheriModerate = 0;
  cheriHard = 0;

  //for loop used to organize task owner
  //and class additions based on difficulty
  for (var i = 0; i < tasks.length; i++) {
    var currentTask = tasks[i].taskName;
    var who = tasks[i].who;
    var difficulty = tasks[i].difficulty;
    var li = document.createElement("li");
    if (who === "Me") {
      me += 1;
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
        meEasy += 1;
        easy += 1;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
        moderate += 1;
        meModerate += 1;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
        hard += 1;
        meHard += 1;
      }
      ulMyList.appendChild(li);
    } else if (who === "Jeremy") {
      jeremy += 1;
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
        jeremyEasy += 1;
        easy += 1;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
        moderate += 1;
        jeremyModerate += 1;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
        hard += 1;
        jeremyHard += 1;
      }
      ulJeremyList.appendChild(li);
    } else {
      cheri += 1;
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
        cheriEasy += 1;
        easy += 1;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
        moderate += 1;
        cheriModerate += 1;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
        hard += 1;
        cheriHard += 1;
      }
      ulCheriList.appendChild(li);
    }
  }
  myListContainer.appendChild(ulMyList);
  jeremyListContainer.appendChild(ulJeremyList);
  cheriListContainer.appendChild(ulCheriList);
}

function resetPage() {
}

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Difficulty', '# of Tasks'],
    ['Easy', easy],
    ['Medium', moderate],
    ['Hard', hard],
  ]);

  var options = {
    title: 'Ratio of Task Difficulty',
    width: 500,
    height: 300,
    fontName: "Indie Flower",
    fontSize: 18,
    backgroundColor: "#B5CCC9",
    is3D: true,
    colors: ["#74b76c", "#e78332", "#D54545"]
  };
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
         ['Who', '# of Tasks', { role: 'style' }],
         ['Me', me, 'stroke-color: #703593; stroke-width: 3; fill-color: #C5A5CF'],
         ['Jeremy', jeremy, 'stroke-color: #703593; stroke-width: 3; fill-color: #C5A5CF'],
         ['Cheri', cheri, 'stroke-color: #703593; stroke-width: 3; fill-color: #C5A5CF'],
      ]);

  var options = {
    title: "Distribution of Tasks by Person",
    backgroundColor: "#B5CCC9",
    fontName: "Indie Flower",
    width: 500,
    height: 300,
    fontSize: 18,
    vAxis: {
      title: "Who's Task"
    },
    hAxis: {
      title: '# of Tasks',
      gridlines: {
        color: "#A8B6AD"
      }
    },
    legend: {
      position: "none"
    }
  }

  var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

  chart.draw(data, options);
}

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
        ['Difficulty', 'Easy', 'Medium', 'Hard'],
        ['Me', meEasy, meModerate, meHard],
        ['Jeremy', jeremyEasy, jeremyModerate, jeremyHard],
        ['Cheri', cheriEasy, cheriModerate, cheriHard]
      ]);

      var options = {
        title: "Distribution of Tasks by Difficulty",
        width: 600,
        height: 400,
        legend: { position: 'right', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        backgroundColor: "#B5CCC9",
        colors: ["#74b76c", "#e78332", "#D54545"],
        fontName: "Indie Flower",
        fontSize: 18,
        vAxis: {
          title: "Number of Tasks",
          fontSize: 12
        },
        hAxis: {
          title: "Who's Task?",
          fontSize: 12
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart3_div'));

      chart.draw(data, options);
}
