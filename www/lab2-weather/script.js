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
    results += '<h2>weather in ' + json.name.toLowerCase() + "</h2>";
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
        if (i == 0) {
            forecast += "<h4>next twenty-four hours...</h4>";
        }
        if (i == 8) {
            forecast += "<h4>two days from now...</h4>";
        }
        if (i == 16) {
            forecast += "<h4>three days from now...</h4>";
        }
        if (i == 24) {
            forecast += "<h4>four days from now...</h4>";
        }
        if (i == 32) {
            forecast += "<h4>five days from now...</h4>";
        }
        if (i == 0 || i == 8 || i == 16 || i == 24 || i == 32) {
            forecast += "<div class=\"row\">";
        }
        forecast += "<div class=\"col inner-forest\">";
        forecast += "<p>" + moment(json.list[i].dt_txt).format('h A') + "</p>";
        forecast += "<p>" + json.list[i].main.temp + "°</p>";
        // forecast += "<p><em>" + json.list[i].weather[i].description + "</em></p>";
        forecast += '<p> feels like: ' + json.list[i].main.feels_like.toFixed() + ' &deg;F</p>'
        forecast += '<p> humidity: ' + json.list[i].main.humidity + '%</p>'
        forecast += '<p> wind: ' + json.list[i].wind.speed.toFixed() + 'mph</p>'
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        forecast += "</div>";
        if (i == 7 || i == 15 || i == 23 || i == 31 || i == 39) {
            forecast += "</div>";
            forecast += "<br>";
            forecast += "<br>";
            forecast += "<br>";
        }
    }
    forecast += "<div class=\"whitespace\"></div>"
    document.getElementById("forecastResults").innerHTML = forecast;
}