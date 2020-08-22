// create global variables

var time = new Date();
var currentHour = time.getHours();
const currentDate = time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear();
const currentTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(); 
var nineAM = $("#nineAM");
var tenAM = $("#tenAM")
var elevAM = $("#elevAM")
var twelvPM = $("#twelvPM")
var onePM = $("#onePM")
var twoPM = $("#twoPM")
var threePM = $("#threePM")
var fourPM = $("#fourPM")
var fivePM = $("#fivePM")
var sixPM = $("#sixPM")
var sevPM = $("#sevPM")
var eightPM = $("#eightPM")
var ninePM = $("#ninePM")
var saveEl = $("#saveEl")
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
// 
if (currentHour === 10) {
    tenAM.addClass("currenthour")
} else if (currentHour > 10) {
    tenAM.addClass("pasthour");
} else if (currentHour < 10) {
    tenAM.addClass("futurehour");
};
// 
if (currentHour === 11) {
    elevAM.addClass("currenthour")
} else if (currentHour > 11) {
    elevAM.addClass("pasthour");
} else if (currentHour < 11) {
    elevAM.addClass("futurehour");
};
// 
if (currentHour === 12) {
    twelvPM.addClass("currenthour")
} else if (currentHour > 12) {
    twelvPM.addClass("pasthour");
} else if (currentHour < 12) {
    twelvPM.addClass("futurehour");
};
// 
if (currentHour === 13) {
    onePM.addClass("currenthour")
} else if (currentHour > 13) {
    onePM.addClass("pasthour");
} else if (currentHour < 13) {
    onePM.addClass("futurehour");
};
// 
if (currentHour === 14) {
    twoPM.addClass("currenthour")
} else if (currentHour > 14) {
    twoPM.addClass("pasthour");
} else if (currentHour < 14) {
    twoPM.addClass("futurehour");
};
// 
if (currentHour === 15) {
    threePM.addClass("currenthour")
} else if (currentHour > 15) {
    threePM.addClass("pasthour");
} else if (currentHour < 15) {
    threePM.addClass("futurehour");
};
// 
if (currentHour === 16) {
    fourPM.addClass("currenthour")
} else if (currentHour > 16) {
    fourPM.addClass("pasthour");
} else if (currentHour < 16) {
    fourPM.addClass("futurehour");
};
if (currentHour === 17) {
    fivePM.addClass("currenthour")
} else if (currentHour > 17) {
    fivePM.addClass("pasthour");
} else if (currentHour < 17) {
    fivePM.addClass("futurehour");
};
// 
if (currentHour === 18) {
    sixPM.addClass("currenthour")
} else if (currentHour > 18) {
    sixPM.addClass("pasthour");
} else if (currentHour < 18) {
    sixPM.addClass("futurehour");
};
// 
if (currentHour === 19) {
    sevPM.addClass("currenthour")
} else if (currentHour > 19) {
    sevPM.addClass("pasthour");
} else if (currentHour < 19) {
    sevPM.addClass("futurehour");
};
// 
if (currentHour === 20) {
    nineAM.addClass("currenthour")
} else if (currentHour > 20) {
    eightPM.addClass("pasthour");
} else if (currentHour < 20) {
    eightPM.addClass("futurehour");
};
// 
if (currentHour === 21) {
    ninePM.addClass("currenthour")
} else if (currentHour > 21) {
    ninePM.addClass("pasthour");
} else if (currentHour < 21) {
    ninePM.addClass("futurehour");
};

var tempArray =[];

$(".saveEl").on("click", function(){
    preventDefault();
    var text = $(this).parent().siblings(".form-control").val();
    console.log(text);
    var time = $(this).parent().siblings(".form-control").attr("id");
    console.log(time);
    // $(this).parent().siblings(".form-control").text(text);
    var saveText = {
        appointText: text,
        appointTime: time
    }
    
     tempArray = JSON.parse(localStorage.getItem("savedText"));
    if (tempArray === null) {
        localStorage.setItem("savedText", JSON.stringify(saveText));
    } else {
        tempArray.push(saveText);
        localStorage.setItem("savedText", JSON.stringify(tempArray));
    }
    
   
});