$(document).ready(function() {
  let thermostat = new Thermostat();
  $('#savings_on').click();
  updTemp();

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    let city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#local-temperature').text(`Temperature in ${data.name}: ${data.main.temp} °C`);
    })
  };  

  $('#set').on('click', function() {
    const value = $('#temp_input').val()
    thermostat.setTemperature(value);
    updTemp();
    $('#temp_input').val('');
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    updTemp();
  });

  $('#usage').on('click', function() {
    $('#usage_output').text(thermostat.viewUsage());
  });

  $('#savings_off').on('click', function() {
    thermostat.savingsOff();
  });

  $('#savings_on').on('click', function() {
    thermostat.savingsOn();
    updTemp();
  });

  function updTemp() {
    $('#current_temp').text(`Temperature: ${thermostat.temperature}`);
    $('#current_temp').attr('class', thermostat.viewUsage()); 
  };
  
});