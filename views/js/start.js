window.onload = function(){
  setTime();
  setInterval(setTime, 1000);

  var lat = 45.411171;
  var long = -75.698120;
  var apiKey = "9fc3e0b97c0156c6aade72a379c58f90";
  //var apiK = "616c105604fa51a09a40bddd22431919";
  var id = "6094817";
  //$.get("https://maps.googleapis.com/maps/api/browserlocation/json?browser=chrom&sensor=true",function(result){
    //console.log(result);
    $.get("https://crossorigin.me/https://api.darksky.net/forecast/"+apiKey+"/"+lat+","+long+"?lang=en&units=si", function(result){
            var weather = result;
            var temp = weather.currently.temperature;
            var summary = weather.currently.summary;
            //var temp = weather.main.temp;
            console.log(temp);
            $("#weather").text(parseInt(temp)+"°C | "+summary);
            //drawIcon(weather.currently.icon);
    });
  //});
};

  /*function drawIcon(icon){

  };*/

function setTime(){
  var date = new Date();
  var min = (""+date.getMinutes()).length>1 ? date.getMinutes() : "0"+date.getMinutes();
  var t = date.getHours() + ":" + min;
  $("#time").text(t);
  $("#date").text(date.toDateString());
};
