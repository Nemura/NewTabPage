var baseURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=";
var city = 'Antwerp';
var country = 'BE';
var key = "&APPID=15dac795069e9f6ef5b3c4c435136247";	
var apiurl = baseURL + city + "," + country + key;

function getWeather() {
	$.getJSON(apiurl,function(result){
    	console.log(result);
		var temp = result.main.temp;
			temp = temp - 273.15;
			temp = Math.round(temp);
		$("#weather").empty().append(result.name + ": " + temp + " °C, " + result.weather[0].description);
	});
}	
getWeather();
