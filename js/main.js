var url = "https://api.openweathermap.org/data/2.5/weather?";
var wrapper = document.querySelector('.wrapper');
var sousTitre = document.querySelector('h2');
var monSelect = document.querySelector('select');



function beauTemps() {
  var currentCity = monSelect.value;
  wrapper.innerHTML = "";
  fetch(`${url}q=${currentCity}&appid=c65b019fe59221617776cb635070de57&lang=fr&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var myTemplate = `
      <h2>${currentCity}</h2>
      <p>La situation mÃ©tÃ©o Ã  ${currentCity} est : ${data.weather[0].description} <img class="ico-weather" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png".</p>
      <p>ðŸŒ¡ï¸ La tempÃ©rature actuelle est de ${Math.round(data.main.temp)} degrÃ©s
      <p>ðŸ’§ Le taux d'humiditÃ© est de ${data.main.humidity}%</p>
    `
    wrapper.innerHTML = myTemplate;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

  monSelect.addEventListener('change', function() {
    beauTemps();
  })