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

      document.getElementById("temp").innerHTML=
       arrMain.temp;




        document.getElementById("info").innerHTML =
      response;


    }
  };


  xhttp.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", true);
  xhttp.send();
}
