// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var container = $(".container-fluid px-5")
//var time = ["9AM", "10AM", "11AM","12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"]
//var currentTime = moment().hour() - 9;
//var date = $("<h1>");
//date.text(moment().format('dddd MMMM Do'+ ", " +'YYYY'));
//container.append(date);

// TODO: Add code to display the current date in the header of the page. -->
var currentDate = (dayjs().format('dddd, MMMM D'));
document.getElementById("currentDay").innerHTML = currentDate;


$(document).ready(function() {
  
  // Event listener for when saveBtn is clicked
  //document.getElementById("saveBtn").addEventListener("click", function() {
  //$(".saveBtn").on("click", function() {
  $(document).on('click', '.saveBtn', function () {

    // Get the text of the attribute and the ID of the element
    var text = $(this).siblings(".description").val();
    var timeID = $(this).parent().attr("id");

    localStorage.setItem(timeID, text);
  })

  // Get current time hour
  $(function hourUpdater() {
    var currentTime = dayjs().hour()

  //Add code to apply the past, present, or future class to each time block
    
    $('.timeblock').each(function(){
      var blockHour = parseInt($(this).attr('id').split('r')[1])
      if (currentTime > blockHour){
        $(this).removeclass("future");
        $(this).removeclass("present");
        $(this).addclass("past");
      }
      else if (currentTime === blockHour){
        $(this).removeclass("past");
        $(this).removeclass("future");
        $(this).addclass("present");
      }
      else {
        $(this).removeclass("past");
        $(this).removeclass("present");
        $(this).addclass("future");
      }   

    });

    // Retrieves value entered into local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));



    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
  });
});