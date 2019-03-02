var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var TempInCelsius;
var TempInCelsiusLow;
var TempInCelsiusHigh;
var TempInFarenheit;
var TempInFarenheitLow;
var TempInFarenheitHigh;
var IsFar = false;

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

function weatherFetcher()
{

  // var urlString = api + "lat=42.418560" + "&" + "lon=-71.106450";
  getLocation();
   var urlString = api + "lat=" + lat + "&" + "lon=" + lon;

  $.ajax
({
    url: urlString,
    success: function (result)
    {

     TempInCelsius = result.main.temp;

     $("#weathertext").text(result.weather[0].main);
     $("#weatherdesc").text(result.weather[0].description);
     $("#temp").text(Math.round(result.main.temp) + "º C");
      var image = result.weather[0].icon;
      console.log(image);
      $("#ico").append("<img src= '"+image+"' >");
      $("#alerting").text("Hello " + result.name + "!");

//       Details
      TempInCelsiusLow = result.main.temp_min;
      TempInCelsiusHigh = result.main.temp_max;



      $("#pressure").text("Pressure "+ result.main.pressure);
      $("#humidity").text("Humidity "+ result.main.humidity);
      $("#temp_min").text("Low "+ Math.round(result.main.temp_min)+ "º C");
      $("#temp_max").text("High "+ Math.round(result.main.temp_max) +"º             C");
      $("#visibility").text("Visibility "+ result.visibility);
      $("#windspeed").text("Wind Speed "+ result.wind.speed);

      // $("#winddegree").text("Wind Degree "+ result.wind.deg);

      //convert  date/ time  -- result.sys.sunrise

//       $("#sunrise").text("Sunrise "+ result.sys.sunrise );
//       $("#sunset").text("Sunset "+ result.sys.sunset);


    }
  });
}

function convertToFar()
{
  if(IsFar)
  {
    TempInCelsius =  Math.round((TempInFarenheit - 32) * (5/9));
    TempInCelsiusLow = Math.round((TempInFarenheitLow - 32) * (5/9));
    TempInCelsiusHigh = Math.round((TempInFarenheitHigh - 32) * (5/9));

    document.getElementById("temp").innerHTML = TempInCelsius + "º C";
    document.getElementById("temp_min").innerHTML = TempInCelsiusLow + "º C";
    document.getElementById("temp_max").innerHTML = TempInCelsiusHigh + "º C";


    IsFar= false;
  }
  else
    {

      TempInFarenheit =  Math.round((TempInCelsius * (9/5)) + 32);
      TempInFarenheitLow =  Math.round((TempInCelsiusLow * (9/5)) + 32);
      TempInFarenheitHigh =  Math.round((TempInCelsiusHigh * (9/5)) + 32);

      document.getElementById("temp").innerHTML = TempInFarenheit + "º F";
      document.getElementById("temp_min").innerHTML = TempInFarenheitLow + "º F";
      document.getElementById("temp_max").innerHTML = TempInFarenheitHigh + "º F";




      IsFar = true;
    }


}
