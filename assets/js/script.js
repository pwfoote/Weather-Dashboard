$(document).ready(function(){
    $("#form-submit").submit(function(event){
        perfromSearch(event);
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
        },
        wind: {
            speed: 'imperial',
        },
    });

    request.done(function(response){
        formatSearch(response);
    });
}

function formatSearch(jSonObject) {
    var city_name = jSonObject.name;
    var city_weather = jSonObject.weather[0].main;
    var city_temp = jSonObject.main.temp;
    var wind_speed = jSonObject.wind.speed;
    var humidity_val = jSonObject.main.humidity;

    $("#city-name").text(city_name);
    $("#city-weahter").text(city_weather);
    $("#city-temp").text(" Temp: " + city_temp +  " ° ");
    $("#wind-speed").text(" Wind: " + wind_speed + " MPH ");
    $("#humidity").text(" Humidity: " + humidity_val + " % " );
}