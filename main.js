var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

function getLocation()
{
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition);


  }
  else
  {
    document.getElementById("error").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

    lat = position.coords.latitude;
    lon = position.coords.longitude;
}

function weatherFetcher() {

  // var urlString = api + "lat=42.418560" + "&" + "lon=-71.106450";
  getLocation();
   var urlString = api + "lat=" + lat + "&" + "lon=" + lon;

  $.ajax({
    url: urlString,
    success: function (result)
    {
     $("#weathertext").text(result.weather[0].main);
     $("#weatherdesc").text(result.weather[0].description);
     $("#tempcel").text(Math.round(result.main.temp) + "º C");
      var image = result.weather[0].icon;
      console.log(image);
      $("#ico").append("<img src= '"+image+"' >");
      $("#alerting").text("Hello " + result.name + "!");

//       Details
      $("#pressure").text("Pressure "+ result.main.pressure);
      $("#humidity").text("Humidity "+ result.main.humidity);
      $("#temp_min").text("Low "+ Math.round(result.main.temp_min)+ "º C");
      $("#temp_max").text("High "+ Math.round(result.main.temp_max) +"º C");
      $("#visibility").text("Visibility "+ result.visibility);
      $("#windspeed").text("Wind Speed "+ result.wind.speed);

      // $("#winddegree").text("Wind Degree "+ result.wind.deg);
      $("#sunrise").text("Sunrise "+ result.sys.sunrise);
      $("#sunset").text("Sunset "+ result.sys.sunset);


    }
  });
}
