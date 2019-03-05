const invoc = new XMLHttpRequest();

window.onload = function(){
  setTime();
  setInterval(setTime, 1000);

  var lat = 45.411171;
  var long = -75.698120;
  let apiKey = "9fc3e0b97c0156c6aade72a379c58f90";
  apiKey = "059ef5fec537fe2b4737d26c7217a2b6";

  $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+apiKey+"/"+lat+","+long+"?units=ca", function(result){
          var weather = result;
          var temp = weather.currently.temperature;
          var summary = weather.currently.summary;
          $("#weather").text(parseInt(temp)+"°C | "+summary);
          console.log("temp: " + parseInt(temp) + "°C");
          drawIcon(weather.currently.icon);
  });
};

  function drawIcon(icon){
    var skycons = new Skycons({"color": "white"});
    skycons.add("weather-box",icon);
    skycons.play();
  };

function setTime(){
  var date = new Date();
  var min = (""+date.getMinutes()).length>1 ? date.getMinutes() : "0"+date.getMinutes();
  var t = date.getHours() + ":" + min;
  $("#time").text(t);
  $("#date").text(date.toDateString());
};

//https://crossorigin.me/
//http://cors.io/?
