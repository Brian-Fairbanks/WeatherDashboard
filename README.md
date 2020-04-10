# Weather Dashboard
[hosted on github pages](https://brian-fairbanks.github.io/WeatherDashboard/)

In this project, I have implemented a simple weather dashboard, using data retrieved via AJAX calls to OpenWeather api. 

[OpenWeather API](https://openweathermap.org/api) is able to provide weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.

Use `localStorage` to store any persistent data.

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Functionality

```
GIVEN a weather dashboard with form inputs

* WHEN I search for a city
if the city does not exist, I will display an error message.
else, I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
color scale and numbers pulled from [epa.gov](https://www.epa.gov/sunsafety/uv-index-scale-0)

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Screenshot
![Weather Dashboard screenshot](https://github.com/Brian-Fairbanks/WeatherDashboard/blob/master/weatherDashboard.PNG?raw=true)
