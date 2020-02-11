import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Animal } from './bear';

function displayAnimal(animal){
  let animalDiv = $("#animals");
  let animalStats = `<span>${animal.name}</span><br><span>${animal.foodLevel}</span><br><span>${animal.sleepLevel}</span><br><span>${animal.playLevel}</span>`
  let animalImage = `<div></div>`
  let animalButtons = `<button id="feed" class="btn btn-primary">Feed</button> <button id="sleep" class="btn btn-primary">Sleep</button> <button id="play" class="btn btn-primary">Play</button>`
  animalDiv.html(animalStats + animalImage + animalButtons)

}
// var idVar = setInterval(() => { 
//   timer()
// }, 1000);

function timer() {
  var dateVar = new Date();
  var time = dateVar.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let name = $("#name").val();
    let animal = new Animal(name);
    animal.setHunger();
    animal.setPlay();
    animal.setSleep();
    displayAnimal(animal);
  });

});