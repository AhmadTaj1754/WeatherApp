


function loadDoc()
{


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      var response = this.responseText;

       var myObj = JSON.parse(this.responseText);



      var arrWeatherText= myObj.weather;

      document.getElementById("weathertext").innerHTML =
      arrWeatherText[0].main;

      document.getElementById("weatherdesc").innerHTML =
      arrWeatherText[0].description;



      document.getElementById("ico").src=
       arrWeatherText[0].icon;

      var arrMain= myObj.main;

      //round degree
      var degreeRound =  Math.round(arrMain.temp);

      document.getElementById("tempcel").innerHTML=
       degreeRound + " ºC";




        document.getElementById("info").innerHTML =
      response;


    }
  };

   // + lat + "&" + lon
  xhttp.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat=42.418560&lon=-71.106450", true);
  xhttp.send();
}



function weatherFetcher() {



var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

  var urlString = api + "lat=42.418560" + "&" + "lon=-71.106450";
  $.ajax({
    url: urlString,
    success: function (result)
    {
     $("#weathertext").text(result.weather[0].main);
     $("#weatherdesc").text(result.weather[0].description);
     $("#tempcel").text(Math.round(result.main.temp));
      var image = result.weather[0].icon;
      console.log(image);
      $("#ico").append("<img src= '"+image+"' >");


     $("#info").text(JSON.stringify(result));
    }
  });
}
