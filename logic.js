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
var dayforcastQry = "https://api.openweathermap.org/data/2.5/forecast?appid="+authKey+"&q=";
var curWeatherQry = "https://api.openweathermap.org/data/2.5/weather?appid="+authKey+"&q=";
var uvQry = "https://api.openweathermap.org/data/2.5/uvi?appid="+authKey;


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
    }
    return weatherIcon;
}


function getUV(response){
    //get the UV index via ajax call
    $.ajax({url:uvQry+"&lat="+response.coord.lat+"&lon="+response.coord.lon, method:"GET"})
    .then(function(uvresponse){
        //console.log(uvresponse);
        // scale index colors pulled from https://www.epa.gov/sunsafety/uv-index-scale-0
        var uv = uvresponse.value;
        var uvScale;

        //set class name based on severity of UV
        if(uv < 3 ){uvScale = "uvLow"}
        else if(uv < 6 ){uvScale = "uvMod"}
        else if(uv < 8 ){uvScale = "uvHi"}
        else if(uv < 11 ){uvScale = "uvVH"}
        else{uvScale = "uvEx"}
        
        //add index and appropriate class
        $("#uvDiv").append( $("<span/>",{class:"uv "+uvScale, text:uv}) );
    });
}


function printWeatherForCity(cityName){
    $.ajax({url:curWeatherQry+cityName, method:"GET"})
    .then(function(response){
        console.log(response);
        var time = moment();

        //clear previous information
        curWeatherCard.empty();

        // append data from JSON to DOM
        curWeatherCard.append([
            $("<div/>",{class:"card-header text-center m-0 h-3", text:time.format('ddd MMMM Do YYYY, h:mm a')}),
            $("<div/>",{class:"card-body"}).append([
                $('<h3/>',{text:response.name}).append(
                    getIcon(response.weather)
                ),
                $('<div/>',{text:"Temperature: "+kelvToF(response.main.temp)+"°F"}),
                $('<div/>',{text:"Humidity: "+response.main.humidity+"%"}),
                $('<div/>',{text:"Wind Speed: "+response.wind.speed+" MPH"}),
                $('<div/>',{id:"uvDiv",text:"UV Index: "})
            ])
        ])
        getUV(response);

    });
}

/*############################################
#    Main
##############################################*/

printWeatherForCity("Pflugerville");