// create global variables

var time = new Date();
var currentHour = time.getHours();
const currentDate = time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear();
const currentTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
var nineAM = $("#nineAM");

// displays current date on webpage
$("#currentDay").append(currentDate);
$("#timeOfDay").append(currentTime);
// sets color based on hour
if (currentHour === 9) {
    nineAM.addClass("currenthour")
} else if (currentHour > 9) {
    nineAM.addClass("pasthour");
} else if (currentHour < 9) {
    nineAM.addClass("futurehour");
};


