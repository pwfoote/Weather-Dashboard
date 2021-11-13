$(document).ready(function(){
    $("#form-submit").submit(function(event){
        perfromSearch(event);
        forecastSearch(event);
    });
});

function perfromSearch(event) {
    event.preventDefault();
    var request;
    request = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather/', 
        type:"GET",
        data: {
            q: $("#city").val(),
            appid: '77d7d15744369c1de8f1bf9fbece59e6', 
            units: 'imperial',
            humidity: 'units',
            icon: '',
            
        },
        wind: {
            speed: 'imperial',
        },

    });

    request.done(function(response){
        formatSearch(response);
    });
}

function forecastSearch (event) {
    event.preventDefault();
    var forecastRequest;
    forecastRequest = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast/',
            type:"GET",
            data: {
            q: $("#city").val(),
            appid: '77d7d15744369c1de8f1bf9fbece59e6',
            units: 'imperial',
            humidity: 'units',
            icon : '',

            },
            wind: {
                speed: 'imperial'
            },

    });
    forecastRequest.done(function(response){
        formatForecast(response);
    });
}

function formatForecast(jSonObject){
    console.log(jSonObject)
   var forecast_date = jSonObject.list[0].dt_txt;
   var city_forecast_temp = jSonObject.list[0].main.temp;
   var forecast_wind = jSonObject.list[0].wind.speed;
   var forecast_humidity = jSonObject.list[0].main.humidity;
    
    
    $("#forecast-date").text(forecast_date);
    $("#forecast-temp").text(" Temp: " + city_forecast_temp + " ° " );
    $("#forecast-wind").text(" Wind: " + forecast_wind + " MPH ");
    $("#forecast-humidity").text(" Humidity: " + forecast_humidity + " % ");

    $("#forecast-date-2").text(forecast_date);
    $("#forecast-temp-2").text(" Temp: " + city_forecast_temp + " ° " );
    $("#forecast-wind-2").text(" Wind: " + forecast_wind + " MPH ");
    $("#forecast-humidity-2").text(" Humidity: " + forecast_humidity + " % ");
}

function formatSearch(jSonObject) {
    var city_name = jSonObject.name;
    var city_weather = jSonObject.weather[0].main;
    var city_temp = jSonObject.main.temp;
    var wind_speed = jSonObject.wind.speed;
    var humidity_val = jSonObject.main.humidity;
    var weather_icon = jSonObject.weather.icon;

    $("#city-name").text(city_name) + (weather_icon);
    $("#city-weahter").text(city_weather);
    $("#city-temp").text(" Temp: " + city_temp +  " ° ");
    $("#wind-speed").text(" Wind: " + wind_speed + " MPH ");
    $("#humidity").text(" Humidity: " + humidity_val + " % " );
}