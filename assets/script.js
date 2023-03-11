var currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm A")
$('#currentDay').text(currentTime);


$(function (){

  var currentHour= parseInt(dayjs().hour());

 $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);
    var time= $(this);

    // if the time Id attribute is before the current hour, add the past class
    if (timeId < currentHour) {
      time.addClass('past');
      time.removeClass('present');
      time.removeClass('future');
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeId === currentHour) {
      time.removeClass('past');
      time.removeClass('future');
      time.addClass('present');
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else if (timeId > currentHour) {
      time.removeClass('past');
      time.removeClass('present');
      time.addClass('future');
    }else {
      return
    }})
  });

$(".saveBtn").on("click", function(){
  var userInput =$(this).siblings('.description').val();
  var timeBlock = $(this).parent().attr("id");
  localStorage.setItem(timeBlock,userInput)
});

    $('#hour-8 .description').val(localStorage.getItem("hour-8"));
    $('#hour-9 .description').val(localStorage.getItem("hour-9"));
    $('#hour-10 .description').val(localStorage.getItem("hour-10"));
    $('#hour-11 .description').val(localStorage.getItem("hour-11"));
    $('#hour-12 .description').val(localStorage.getItem("hour-12"));
    $('#hour-13 .description').val(localStorage.getItem("hour-13"));
    $('#hour-14 .description').val(localStorage.getItem("hour-14"));
    $('#hour-15 .description').val(localStorage.getItem("hour-15"));
    $('#hour-16 .description').val(localStorage.getItem("hour-16"));
    $('#hour-17 .description').val(localStorage.getItem("hour-17"));
    $('#hour-18 .description').val(localStorage.getItem("hour-18"));
    $('#hour-19 .description').val(localStorage.getItem("hour-19"));
    $('#hour-20 .description').val(localStorage.getItem("hour-20"));
    $('#hour-21 .description').val(localStorage.getItem("hour-21"));
    $('#hour-22 .description').val(localStorage.getItem("hour-22"));
    $('#hour-23 .description').val(localStorage.getItem("hour-23"));
    $('#hour-1 .description').val(localStorage.getItem("hour-1"));





