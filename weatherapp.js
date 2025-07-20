const apikey="199add1da2a5c408aa244aeafcd654fa";
const city=document.querySelector(".city");
const weatherform=document.querySelector(".weatherform");
const card=document.querySelector(".card");
const tempcard=document.querySelector(".temp");

weatherform.addEventListener("submit",async event=>{
    event.preventDefault();
    console.log(city.value);
    if(city.value){
        try{
            const data=await getWeatherData();
            addWeatherDetails(data);
        }
        catch(error){
            displayError("Errorr");
            console.log(error);
            }
    }
    else{
        displayError("Please Enter City")
    }
    
}
   
   
)
async function getWeatherData(){
    try{const api=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${"199add1da2a5c408aa244aeafcd654fa"}`
    response=await fetch(api);
    console.log(response);
    if(!response.ok){
        displayError("couldn't fetch data");
    }
    else{
        return await response.json();
    }
    }
    catch(error){
        displayError("couldn't fetch data");


    }
    
    
}
function addWeatherDetails(data){
    const tempclass=document.querySelector(".temp");
    console.log(data);
    const {
        weather: [{ main, description, icon }],
        main: { temp, temp_min, temp_max, humidity },
        visibility
      } = data;
      emoji=document.createElement("img");
      emoji.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
      climate=document.createElement("p");
      climate.textContent=main;
      desc=document.createElement("p");
      desc.textContent=description;
      mintemp=document.createElement("p");
      mintemp.textContent=temp_min;
      mintemp.classList.add("temp");
      tempp=document.createElement("p");
      tempp.textContent=temp;
      tempp.classList.add("temp");
      maxtemp=document.createElement("p");
      maxtemp.textContent=temp_max;
      maxtemp.classList.add("temp");
      hum=document.createElement("p");
      hum.textContent=humidity;
      visible=document.createElement("p");
      card.style.display="flex";
      visible.textContent=visibility;
      card.textContent=" ";
      card.append(city.value);
      card.append(emoji);
      card.append(desc);
      card.append(mintemp);
      card.append(tempp);
      card.append(maxtemp);
      card.append(hum);
      card.append(visible);




      

      
      
      
}
function displayError(message){
    card.textContent=" ";
    const errordisplay=document.createElement("p");
    errordisplay.textContent=message;
    card.style.display="flex";
    card.append(errordisplay);

}



// async function a(){
// try{
//     const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"199add1da2a5c408aa244aeafcd654fa"}`
//     const response=await fetch(apiurl);
//     console.log(response);
//     console.log(response.json())

// }
// catch(error){
//     console.error(error);
// }
// }
// a();