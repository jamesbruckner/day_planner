// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.


function updateCurrentTime() {
  var currentTime = dayjs().format('MMM D, YYYY h:mm:ss a')
  $('#currentDay').text(currentTime)
}
setInterval(updateCurrentTime, 1000);


// var textInput = document.querySelector("#hour-9 #hour textarea");
// var saveButton = document.querySelector('#saveButton');
// // var text = [];

// saveButton.addEventListener('click', function (event) {
//   event.preventDefault();
//   localStorage.setItem("hour-9", JSON.stringify(textInput.value));
// });

// function init() {
//   var storedText = JSON.parse(localStorage.getItem('hour-9'));
//   if (storedText !== null) {
//     text = document.querySelector("#hour-9 textarea");
//     text.innerText = storedText
//   }
//   console.log(storedText)
// }
// init()

$(document).ready(function () {
  $(".saveButton").click(function (event) {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      event.preventDefault();
      localStorage.setItem(time, value);

      console.log(value)
      console.log(time)
  })
})

function checkTime() {
  var currentTime = dayjs().$H
  var timeBlock =  document.querySelectorAll('.time-block')
  for(var i = 0; i < timeBlock.length; i++) {
    var hour = Number(timeBlock[i].id.split('-')[1])
    console.log(currentTime)
console.log(timeBlock[i].id.split('-')[1])
if (currentTime < hour) {
    styles.css.future
  }
  if (currentTime > hour) {
    styles.css.past
  }
  else if (currentTime === hour) {
    style.css.present
  }}
}
//red present, gray past, green future
//these are the only differences between CSS classes
// function for current time,
checkTime();
//
//document.getElementsByClassName('time-block') <-- anohter option

//i was very close to getting this all to work but i had to trash everything and i blame the tutor i had. 

//this still doesnt work and it never will but I know how to do it.

function init() {
$("#hour-09 textarea").val(localStorage.getItem('hour-09'));
$("#hour-10 textarea").val(localStorage.getItem('hour-10'));
$("#hour-11 textarea").val(localStorage.getItem('hour-11'));
$("#hour-12 textarea").val(localStorage.getItem('hour-12'));
$("#hour-13 textarea").val(localStorage.getItem('hour-13'));
$("#hour-14 textarea").val(localStorage.getItem('hour-14'));
$("#hour-15 textarea").val(localStorage.getItem('hour-15'));
$("#hour-16 textarea").val(localStorage.getItem('hour-16'));
$("#hour-17 textarea").val(localStorage.getItem('hour-17'));
}