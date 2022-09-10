var today = moment();
var day = today.format("[Today is] dddd");
var  time = today.format("hh:mm a");
$("#currentDay").text(`${day} the time is: ${time}`);
var timeSlots = [$("#nine"),$("#ten"),$("#eleven"),$("#twelve"),$("#one"),$("#two"),$("#three"),$("#four"),$("#five")];
// gets and displays day and time on screen
function getTime(){
     today = moment();
     day = today.format("[Today is] dddd");
     time = today.format("hh:mm a");
    $("#currentDay").text(`${day} the time is: ${time}`);
    // console.log(today.format("hh a"));
}
// change time every minute
setInterval(getTime,60000)

var currentHour;
var eventHour;
// color codes the planner (red for past, gray for present, green for future)
function changeColor(){
    currentHour = parseInt(today.format("HH"));
    for (let index = 0; index < timeSlots.length; index++) {
        eventHour = parseInt(timeSlots[index].attr("value"));
        
        if(eventHour < currentHour){
            timeSlots[index].children("#eventText").css("background-color","red");
            timeSlots[index].children("#eventText").css("opacity","0.6");
        } else if (eventHour > currentHour){
            timeSlots[index].children("#eventText").css("background-color","green");
            timeSlots[index].children("#eventText").css("opacity","0.6");
        } else{
            timeSlots[index].children("#eventText").css("background-color","grey");
            timeSlots[index].children("#eventText").css("opacity","0.6");
        }
        console.log(`curren hour is: ${currentHour} and event hour is: ${eventHour}`)
    }
    
}
changeColor();
setInterval(changeColor,60000);


// saving to local storage
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");
var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var text3 = document.querySelector("#text3");
var text4 = document.querySelector("#text4");
var text5 = document.querySelector("#text5");
var text6 = document.querySelector("#text6");
var text7 = document.querySelector("#text7");
var text8 = document.querySelector("#text8");
var text9 = document.querySelector("#text9");

btn1.addEventListener("click",function(){
    localStorage.setItem("9am",text1.value);
})
btn2.addEventListener("click",function(){
    localStorage.setItem("10am",text2.value);
})
btn3.addEventListener("click",function(){
    localStorage.setItem("11am",text3.value);
})
btn4.addEventListener("click",function(){
    localStorage.setItem("12pm",text4.value);
})
btn5.addEventListener("click",function(){
    localStorage.setItem("1pm",text5.value);
})
btn6.addEventListener("click",function(){
    localStorage.setItem("2pm",text6.value);
})
btn7.addEventListener("click",function(){
    localStorage.setItem("3pm",text7.value);
})
btn8.addEventListener("click",function(){
    localStorage.setItem("4pm",text8.value);
})
btn9.addEventListener("click",function(){
    localStorage.setItem("5pm",text9.value);
})

text1.textContent = localStorage.getItem("9am");
text2.textContent = localStorage.getItem("10am");
text3.textContent = localStorage.getItem("11am");
text4.textContent = localStorage.getItem("12pm");
text5.textContent = localStorage.getItem("1pm");
text6.textContent = localStorage.getItem("2pm");
text7.textContent = localStorage.getItem("3pm");
text8.textContent = localStorage.getItem("4pm");
text9.textContent = localStorage.getItem("5pm");








