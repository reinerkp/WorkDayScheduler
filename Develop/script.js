// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var container = $(".container-fluid px-5")

// Add code to display the current date in the header of the page. -->
var currentDate = (dayjs().format('dddd, MMMM D'));
document.getElementById("currentDay").innerHTML = currentDate;


$(document).ready(function() {
  
  // Event listener for when saveBtn is clicked
  $(document).on('click', '.saveBtn', function () {

    // Get the text of the attribute and the ID of the element
    var text = $(this).siblings(".description").val();
    var timeID = $(this).parent().attr("id");

    localStorage.setItem(timeID, text);
  })

  // Get current time hour
  $(function hourUpdater() {
    var currentTime = dayjs().hour()


    //Creat Fuction that splits the time from "hour-"
    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

  //Add code to apply the past, present, or future class to each time block
      if (currentTime > blockHour){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (currentTime === blockHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
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


    
  });
});