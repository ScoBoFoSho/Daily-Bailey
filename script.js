//Display current time
var presentTime = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
$("#currentDay").append(presentTime);


//save user input in local storage
$(".btn").on("click",function(event){
    var formInputEl = $(event.target).siblings("input").val()
    var formIdEl = $(event.target).siblings("input").attr("id");
    console.log ($(event.target).siblings("input").val())
    console.log ($(event.target).siblings("input").attr('id'))
localStorage.setItem (formIdEl, formInputEl)
localStorage.getItem (formIdEl, formInputEl)
})


//array of blocks of time
var timeArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
console.log (timeArr)

timeArr.forEach(function(hour){
    var timeBlockEl = $("#block-" + hour)
  
  
    //time tracker function for comparing
    var timeNow = moment().hour();
  
  //   var colorClass = 'past';
  //   var colorClass = 'present';
  //   var colorClass = 'future';
  
    if (hour < timeNow){
      // colorClass = 'past'
      timeBlockEl.addClass("past");
    } else if (hour === timeNow){
      // colorClass = 'present'
      timeBlockEl.addClass("present");
    } else {
      // colorClass = 'future'
      timeBlockEl.addClass("future");
    }
});