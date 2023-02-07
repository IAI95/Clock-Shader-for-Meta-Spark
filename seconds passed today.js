const Patches = require('Patches');
const Time = require("Time");

function update (){

    var d = new Date(Date.now());
    var SecondsPassedToday =  d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    Patches.inputs.setScalar('SecondsPassedToday' , SecondsPassedToday);
}

Time.setInterval(update,1000);