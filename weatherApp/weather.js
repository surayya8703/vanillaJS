window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.temperature-timezone');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
           long = position.coords.longitude;
      lat = position.coords.latitude;

           const proxy ="https://cors-anywhere.herokuapp.com/"
           const api =`${proxy}https://api.dakrsky.net/forecast/fd9d9c6418c23d94745b8367721ad1/${lat},${long}`;


           
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            console.log(data);
            const{temperature, summary} = data.currently;
            // Set DOM Elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = date.timezone;
            
        });
           
        });
    }

    function setIcons(icon, iconID)
});

