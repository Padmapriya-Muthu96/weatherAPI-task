// REST Countries API
/*
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))

*/
// OpenWeatherMap API
/*
fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={49185ef9ff8a5e4aa64c5261fa9c02e2}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  */
 var API_key='49185ef9ff8a5e4aa64c5261fa9c02e2'
async function api(){
    v=fetch('https://restcountries.com/v3.1/all')
    A=await v  //res
    P=A.json()  //prom
    output=await P  //OUTPUT

 var parent_data_all =document.querySelector('.weather-data')
    for (let i of output){
try{
    //console.log(i.latlng);

    var datacontainer=document.createElement('div')
    lat=i.latlng[0]
    lng=i.latlng[1]
    datacontainer.setAttribute('lat',lat)
    datacontainer.setAttribute('lng',lng)
    console.log(i.latlng);

    datacontainer.classList.add('country_data')
    datacontainer.style.display='inline-block'
    datacontainer.classList.add('countryName')
    datacontainer.style.display='inline-block'
    //name
    var countryName=document.createElement('p')
    countryName.innerText=i.name.common
    console.log(i.name.common);
    datacontainer.append(countryName)
    //flag
    var countryFlag=document.createElement('img')
    countryFlag.setAttribute('src',i.flags.png)
    console.log(i.flags.png);
    datacontainer.append(countryFlag)
    //capital
    var countryCapital=document.createElement('p')
    countryCapital.innerText=`Capital: ${i.capital[0]}`
    console.log(`Capital:${i.capital[0]}`);
    datacontainer.append(countryCapital)
    //region
    var countryRegion=document.createElement('p')
    countryRegion.innerText=`Region: ${i.region}`
    console.log(`Region: ${i.region}`);
    datacontainer.append(countryRegion)


    //country code
    var countryCode=document.createElement('p')
    countryCode.innerText=`country Code: ${i['cca3']}`
    console.log(`country Code: ${i['cca3']}`);
    datacontainer.append(countryCode)

//button
    var button=document.createElement('button')
    button.setAttribute('onclick','weatherapi(this)')
    button.innerText='click for weather'
    datacontainer.append(button)

  parent_data_all.append(datacontainer)
} 
catch{

}
    }
}


api()

async function weatherapi(e){
    //console.log(e);
    //console.log(e.parentElement);
    var parent=e.parentElement
    var lat=parent.getAttribute('lat')
    var lon=parent.getAttribute('lng')
   // console.log('getting executed');
var weather_url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
v1=fetch(weather_url)
A1=await v1
P1=A1.json()
output1=await P1
console.log(`weather: ${output1.weather[0].main}`)

/* console.log(output[0].latlng);
    lat=output[0].latlng[0]
    lng=output[0].latlng[1]
    url='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={49185ef9ff8a5e4aa64c5261fa9c02e2}'
    v1=fetch(url)
    A1=await v1
    P1=A1.json()
    output1=await P1
    */
}