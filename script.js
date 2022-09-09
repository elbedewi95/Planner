var today = moment();
var day = today.format("[Today is] dddd");
var  time = today.format("hh:mm a");
$("#currentDay").text(`${day} the time is: ${time}`);
var timeSlots = [$("#nine"),$("#ten"),$("#eleven"),$("#twelve"),$("#one"),$("#two"),$("#three"),$("#four"),$("#five")];
function getTime(){
     today = moment();
     day = today.format("[Today is] dddd");
     time = today.format("hh:mm a");
    $("#currentDay").text(`${day} the time is: ${time}`);
    // console.log(today.format("hh a"));
}

setInterval(getTime,60000)

var currentHour;
var eventHour;
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

