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

// adding an event
var inputText; 
function addEvent(event){
    var clicked = event.target;
    
            if (clicked.getAttribute("class") === "textHere"){
               inputText = document.createElement("textarea");
               inputText.style.width="800px";
                clicked.appendChild(inputText);
                
            }
}
// saving to local storage
function saveEvent(event){
    if(event.target.getAttribute("class") === "btn"){
        console.log("clicked save");
   var rowID = event.target.parent("tr").getAttribute("id");
   console.log(rowID);
}}
document.addEventListener("click",addEvent);
document.addEventListener("click",saveEvent);

