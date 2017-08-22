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
$(document).ready(function (event) {
    
     $.get({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=Nairobi&mode=json&units=imperial&APPID=bb06a3a2f8dea8a4a2d84ec5b34fdd84',
            success: function (weather_data) {
                to_be_run_on_server_response(weather_data);
            }
        })
    
//action for nairobi link 
    $('#nairobi').click(function (event) {
        event.preventDefault();
 $('.clearField').empty();
        alert('Please be patient, data is currently being fetched.');
        $.get({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=Nairobi&mode=json&units=imperial&APPID=bb06a3a2f8dea8a4a2d84ec5b34fdd84',
            success: function (weather_data) {
                to_be_run_on_server_response(weather_data);
            }
        })
    })
//action for london link 
     $('#london').click(function (event) {
         event.preventDefault();
      $('.clearField').empty();
        alert('Please be patient, data is currently being fetched.');
        $.get({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=London&mode=json&units=imperial&APPID=bb06a3a2f8dea8a4a2d84ec5b34fdd84',
            success: function (weather_data) {
                to_be_run_on_server_response(weather_data);
            }
        })
    })
    //action for paris link 
     $('#paris').click(function (event) {
         event.preventDefault();
         $('.clearField').empty();
        alert('Please be patient, data is currently being fetched.');
        $.get({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=Paris&mode=json&units=imperial&APPID=bb06a3a2f8dea8a4a2d84ec5b34fdd84',
            success: function (weather_data) {
                to_be_run_on_server_response(weather_data);
            }
        })
    })
    //action for new york link 
     $('#new-york').click(function (event) {
         event.preventDefault();
        $('.clearField').empty();
        alert('Please be patient, data is currently being fetched.');
        $.get({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=New%20York&mode=json&units=imperial&APPID=bb06a3a2f8dea8a4a2d84ec5b34fdd84',
            success: function (weather_data) {
                to_be_run_on_server_response(weather_data);
            }
        })
    })
    
    
});
