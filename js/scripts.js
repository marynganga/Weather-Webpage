//Back End Logic
var to_be_run_on_server_response = function (weather_data) {
    $('.temp').append(weather_data.main.temp);
    var sunriseTime = new Date(weather_data.sys.sunrise * 1000);
    $('.sunrise').append(sunriseTime);
    var sunsetTime = new Date(weather_data.sys.sunset * 1000);
    $('.sunset').append(sunsetTime);
    $('.maxTemp').append(weather_data.main.temp_max);
    $('.minTemp').append(weather_data.main.temp_min);
    $('.windSpeed').append(weather_data.wind.speed);
    var descriptionWeather = new String(weather_data.weather[0].description);
    $('.weatherDescription').append(descriptionWeather);
}

//Front End Logic
$.get({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Nairobi&mode=json&units=imperial&APPID=bb06a3a2f8dea8a4a2d84ec5b34fdd84',
    success: function (weather_data) {
        to_be_run_on_server_response(weather_data);
    }
})
//$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=bb06a3a2f8dea8a4a2d84ec5b34fdd84').success(to_be_run_on_server_response);
//  var sunriseTime = new Date(weather_data.sys.sunrise * 1000);
//$('.sunrise').append(sunriseTime);
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
