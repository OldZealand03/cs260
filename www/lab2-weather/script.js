document.getElementById("weatherSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=0cc64844b5e5a6901ab917e63f458bb6";
    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=0cc64844b5e5a6901ab917e63f458bb6";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            formatCurrent(json);
        });
    fetch(url2)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            formatForecast(json);
        });

});

function formatCurrent(json) {
    let results = "<div class=\"inner-current\">";
    results += '<h2>Weather in ' + json.name + "</h2>";
    for (let i = 0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
    }
    results += '<h2>' + json.main.temp + " &deg;F</h2>"
    results += "<p>"
    for (let i = 0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
            results += ", "
    }
    results += "</p>";
    results += '<p> humidity: ' + json.main.humidity + '%</p>'
    results += '<p> wind: ' + json.wind.speed.toFixed() + ' mph</p>'
    results += '</div>'
    document.getElementById("weatherResults").innerHTML = results;
}

function formatForecast(json) {
    let forecast = "";
    for (let i = 0; i < json.list.length; i++) {
        if (i == 0 || i == 8 || i == 16 || i == 24 || i == 32) {
            forecast += "<div class=\"one-day-block\">";
        }
        forecast += "<div class=\"inner-forest\">";
        forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
        forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        forecast += "</div>";
        if (i == 7 || i == 15 || i == 23 || i == 31 || i == 39) {
            forecast += "</div>";
        }
    }

    document.getElementById("forecastResults").innerHTML = forecast;
}