import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Animal, Game } from './bear';
let game = new Game();

// var idVar = setInterval(() => { 
//   timer()
// }, 1000);

// function timer() {
//   var dateVar = new Date();
//   var time = dateVar.toLocaleTimeString();
//   document.getElementById("clock").innerHTML = time;
// }

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let animal = new Animal(name);
    game.addAnimal(animal);

    animal.setHunger();
    animal.setPlay();
    animal.setSleep();
    
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=monkey&rating=G`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
      let animalDiv = $("#animals");
      let animalStats = `<span>${animal.name}</span><br><span>Hunger: </span><span class ="hunger${animal.id}">${animal.foodLevel}</span><br><span>Sleep: </span><span class="sleep${animal.id}">${animal.sleepLevel}</span><br><span>Play: </span><span class="play${animal.id}">${animal.playLevel}</span>`;
      let animalImage = `<div><img src="${response.data.images.downsized_medium.url}"></div>`;
      let animalButtons = `<button id="feed${animal.id}" class="btn btn-primary">Feed</button> <button id="sleep${animal.id}" class="btn btn-primary">Sleep</button> <button id="play${animal.id}" class="btn btn-primary">Play</button>`;
      animalDiv.append(animalStats + animalImage + animalButtons);
      
    };
  });
});
