let form=document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location=document.getElementById("weather").value
    let fetchWeather= async()=>{
      
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=00e940ece1002ce1b846dc169b117af6`)
     let finalData= await data.json()
   
     let finalDescription=(finalData.weather[0].main).toUpperCase()
     let finalTemp=Math.floor(finalData.main.temp - 273)
     let finalHumidity=(finalData.main.humidity)

     let desc=document.getElementById("desc")
     desc.innerHTML=finalDescription.toUpperCase()

      let temp1=document.querySelector("#thirdSection1 h1")
      temp1.innerHTML=`${finalTemp}<sup>0</sup>`


      let hum1=document.querySelector("#thirdSection2 h1")
      hum1.innerHTML=finalHumidity


      let img=document.getElementById("img")
      let bgc=document.getElementById("container")
     
      switch(finalDescription){
case "CLEAR":
    img.src="./Assets/clear-sky.png"
  bgc.style.backgroundImage="url(./Assets/Clear_sky.gif)"
    break;

    case "CLOUDS":
    img.src="./Assets/clouds.png"
  bgc.style.backgroundImage="url(./Assets/Broken_clouds.gif)"
    break;

    case "MIST":
    img.src="./Assets/clear-sky.png"
  bgc.style.backgroundImage="url(./Assets/Mist_gif.gif)"
    break;

    case "HAZE":
    img.src="./Assets/haze.png"
  bgc.style.backgroundImage="url(./Assets/Haze.gif)"
    break;

    case "RAIN":
    img.src="./Assets/rainy-day.png"
  bgc.style.backgroundImage="url(./Assets/rain-gif-.gif)"
    break;

    case "SNOW":
    img.src="./Assets/clear-sky.png"
  bgc.style.backgroundImage="url(./Assets/snowWeather.gif)"
    break;

    default:
    img.src="./Assets/clear-sky.png"
  bgc.style.backgroundImage="url(./Assets/Clear_sky.gif)"
    break;
      }
    }
    fetchWeather()
})
