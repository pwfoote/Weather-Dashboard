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
            lon: '',
            lat: ''
        
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

function uvIndex (event) {
    event.preventDefault();
    var uvRequest;
    uvRequest = $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/solar_radiation?lat=' + lat + '&lon=' + lon + '/',
            type:"GET",
            data: {
                appid : '77d7d15744369c1de8f1bf9fbece59e6',
            },
            coord: {
                lon: '',
                lat: '',
            },
            list: [
                {
                    radiation: {  
                        dni: '',
                    }
                }
            ]
            
    });
    uvRequest.done(function(response){
        formatUV (response);
    })
}

function formatUV (jSonObject){
    var uv_Index = jSonObject.list.dni;

    $("#uv-index").text(" UV Index " + uv_Index + " % ");
}

function formatForecast(jSonObject){
    //console.log(jSonObject)

    //day 1
   var forecast_date = jSonObject.list[0].dt_txt;
   var city_forecast_temp = jSonObject.list[0].main.temp;
   var forecast_wind = jSonObject.list[0].wind.speed;
   var forecast_humidity = jSonObject.list[0].main.humidity;
    
    
    $("#forecast-date").text(forecast_date);
    $("#forecast-temp").text(" Temp: " + city_forecast_temp + " ° " );
    $("#forecast-wind").text(" Wind: " + forecast_wind + " MPH ");
    $("#forecast-humidity").text(" Humidity: " + forecast_humidity + " % ");

    //day 2
    var forecast_date_2 = jSonObject.list[3].dt_txt;
    var city_forecast_temp_2 = jSonObject.list[3].main.temp;
    var forecast_wind_2 = jSonObject.list[3].wind.speed;
    var forecast_humidity_2 = jSonObject.list[3].main.humidity;
    $("#forecast-date-2").text(forecast_date_2);
    $("#forecast-temp-2").text(" Temp: " + city_forecast_temp_2 + " ° " );
    $("#forecast-wind-2").text(" Wind: " + forecast_wind_2 + " MPH ");
    $("#forecast-humidity-2").text(" Humidity: " + forecast_humidity_2 + " % ");

    //day 3
    var forecast_date_3 = jSonObject.list[11].dt_txt;
    var city_forecast_temp_3 = jSonObject.list[11].main.temp;
    var forecast_wind_3 = jSonObject.list[11].wind.speed;
    var forecast_humidity_3 = jSonObject.list[11].main.humidity;
    $("#forecast-date-3").text(forecast_date_3);
    $("#forecast-temp-3").text(" Temp: " + city_forecast_temp_3 + " ° " );
    $("#forecast-wind-3").text(" Wind: " + forecast_wind_3 + " MPH ");
    $("#forecast-humidity-3").text(" Humidity: " + forecast_humidity_3 + " % ");

    //day 4
    var forecast_date_4 = jSonObject.list[19].dt_txt;
    var city_forecast_temp_4 = jSonObject.list[19].main.temp;
    var forecast_wind_4 = jSonObject.list[19].wind.speed;
    var forecast_humidity_4 = jSonObject.list[19].main.humidity;
    $("#forecast-date-4").text(forecast_date_4);
    $("#forecast-temp-4").text(" Temp: " + city_forecast_temp_4 + " ° " );
    $("#forecast-wind-4").text(" Wind: " + forecast_wind_4 + " MPH ");
    $("#forecast-humidity-4").text(" Humidity: " + forecast_humidity_4 + " % ");

    //day 5
    var forecast_date_5 = jSonObject.list[27].dt_txt;
    var city_forecast_temp_5 = jSonObject.list[27].main.temp;
    var forecast_wind_5 = jSonObject.list[27].wind.speed;
    var forecast_humidity_5 = jSonObject.list[27].main.humidity;
    $("#forecast-date-5").text(forecast_date_5);
    $("#forecast-temp-5").text(" Temp: " + city_forecast_temp_5 + " ° " );
    $("#forecast-wind-5").text(" Wind: " + forecast_wind_5 + " MPH ");
    $("#forecast-humidity-5").text(" Humidity: " + forecast_humidity_5 + " % ");
}


//current day forecast
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