// Create a request variable and assign a new XMLHttpRequest object to it.
const { machine } = require('os');
var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();

request.open('GET', 'https://opdb.org/api/search?api_token=Jn602xYeOig5ycHATFANM9ZvdoIiT6Ud50nYcJHEMsi3stBuHT3Mh1LF3Vmm&q=godzilla&require_opdb=false')
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(machine => {
      console.log(machine.name)
    })
  } else {
    console.log('error')
  }
}

request.send()