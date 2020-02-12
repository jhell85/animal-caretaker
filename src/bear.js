
import $ from "jquery";

export class Game {
  constructor(){
    this.animals = [],
    this.currentId = 0;
  }

  addAnimal(animal){
    animal.id = this.assignId();
    this.animals.push(animal);
  }

  assignId(){
    this.currentId += 1;
    return this.currentId;
  }
}

export class Animal {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
  }

  setHunger(){
    console.log(this.foodLevel);
    setInterval(() => {
      this.foodLevel--;
      console.log('in', this.foodLevel);
      $(`.hunger${this.id}`).text(this.foodLevel);
    }, 10000);
  }


  setSleep() {
    this.sleepID = setInterval(() => {
      if(this.sleepLevel > 0){
        $(`.sleep${this.id}`).text(this.sleepLevel--);
      }else {
        $(`.food${this.id}`).text(this.foodLevel--);
      }
    },50000);
  }

  setPlay(){
    setInterval(() => {
      if(this.playLevel > 0){
        $(`.play${this.id}`).text(this.playLevel--);
      } else {
        $(`.sleep${this.id}`).text(this.sleepLevel--);
      }
    },25000);
  }

  isAlive(){
    if(this.foodLevel > 0){
      return true;
    }else { 
      return false;
    }
  }

  feedAnimal(){
    this.foodLevel = 10;
  }

  goSleep() {
    if(this.sleepLevel < 10){
      clearInterval(this.sleepID);
      let secondInternval = setInterval(() => {
        this.sleepLevel++;
        if(this.sleepLevel >= 10){
          clearInterval(secondInternval);
          this.setSleep();
        }
      },25000);
    }
  }

  goPlay() {
    this.playLevel = 10;
  }
}