
const api = "b61b129b23292682921023b4a43e03c4";

const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const search = document.querySelector(".search input");

const search_btn = document.querySelector(".search button");

const weather_icon = document.querySelector(".Weather_icon");


async function checkWeather(city){

    const response = await fetch(api_url + city + `&appid=${api}`);

    if (response.status == 404) {

        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";

    }else{

        var data = await response.json();

        //console.log(data);//
    
         document.querySelector(".city").innerHTML = data.name;
    
         document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
    
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
         document.querySelector(".wind").innerHTML = data.wind.speed + " KMPH";
    
            //algorithm for changing Images based on weather//
      
         if (data.weather[0].main == "Clouds") {
            weather_icon.src = "./images/clouds.png";
    
        }else if (data.weather[0].main == "Clear") {
            weather_icon.src = "./images/clear.png";
    
        }else if (data.weather[0].main == "Rain") {
            weather_icon.src = "./images/rain.png";
    
        }else if (data.weather[0].main == "Drizzle") {
            weather_icon.src = "./images/drizzle.png";
    
        }else if (data.weather[0].main == "Snow") {
            weather_icon.src = "./images/snow.png";
    
        }else if (data.weather[0].main == "Wind") {
            weather_icon.src = "./images/wind.png";
    
        }else if (data.weather[0].main == "Mist") {
            weather_icon.src = "./images/mist.png";
    
        }
       
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";



    }

   
}

search_btn.addEventListener('click', () =>{
    checkWeather(search.value);
})