/*############################################
#    Global Varialbes
##############################################*/
// sidenav elements
var citySearchForm = $("#citySearchForm");
var cityInput = $("#cityInput");
var searchedCardGroup = $("#searchedCardGroup");

//main content elements
var curWeatherCard = $("#curWeatherCard");
var dayForcastDiv = $("#dayForcast");

//OpenWeather
var authKey = "6b1f3503a9686063d7fa4518108b400c";
var dayforcastQRY = "https://api.openweathermap.org/data/2.5/forecast?appid="+authKey+"&q=";
var curWeatherQry = "https://api.openweathermap.org/data/2.5/weather?appid="+authKey+"&q=";
var curWeatherQry = "https://api.openweathermap.org/data/2.5/weather?appid="+authKey+"&q=";


/*############################################
#    Functions
##############################################*/
function kelvToF(temp){
    return ((temp - 273.15)*(9/5) + 32).toFixed(2);
}

function getIcon(weather){
    
    weatherIcon = $("<i/>");
    //accounting for possibility of multiple weather icons, as described in the api documentation
    for (const elem of weather){
        weatherIcon.append( $("<img/>",{src:'http://openweathermap.org/img/wn/'+elem.icon+'@2x.png', alt:elem.description}))
        console.log(weatherIcon);
    }


    //Implementation using fontAwesome
    // weatherIcon = $("<i/>");
    // weatherIcon.addClass("ml-3")
    // switch(weather){
    //     case "Rain":
    //         weatherIcon.addClass("fas fa-cloud-showers-heavy")
    //         break;
    //     default:
    //         weatherIcon.addClass("far fa-question-circle")
    //         break;
    // }

    return weatherIcon;
}

function printWeatherForCity(cityName){
    $.ajax({url:curWeatherQry+cityName, method:"GET"})
    .then(function(response){

        console.log(response);
        //clear previous information
        curWeatherCard.empty();

        // append data from JSON
        curWeatherCard.append([
            $('<h3/>',{text:response.name}).append(
                getIcon(response.weather)
            ),
            $('<div/>',{text:"Temperature: "+kelvToF(response.main.temp)+"°F"}),
            $('<div/>',{text:"Humidity: "+response.main.humidity+"%"}),
            $('<div/>',{text:"Wind Speed: "+response.wind.speed+" MPH"}),
            $('<div/>',{text:"UV Index: "}).append(
                $("<div/>",{class:"uv"})
            )
        ])

    });
}

/*############################################
#    Main
##############################################*/

printWeatherForCity("Pflugerville");