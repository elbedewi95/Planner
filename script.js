var today = moment();
var day = today.format("[Today is] dddd");
var  time = today.format("hh:mm");
$("#currentDay").text(`${day} the time is: ${time}`);

function getTime(){
     today = moment();
     day = today.format("[Today is] dddd");
     time = today.format("hh:mm");
    $("#currentDay").text(`${day} the time is: ${time}`);
    console.log(today.format("hh"));
}
setInterval(getTime,60000)
