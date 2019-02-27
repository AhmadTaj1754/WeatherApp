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


     $("#info").text(JSON.stringify(result));
    }
  });
}
