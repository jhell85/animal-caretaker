export class Animal {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
  }

  setHunger(){
    setInterval(() => {
      this.foodLevel--;
    }, 10000);
  }

  setSleep(){
    setInterval(() => {
      if(this.sleepLevel > 0){
      this.sleepLevel--;
      }else {
        this.foodLevel--;
      }
    },50000);
  }
  setPlay(){
    setInterval(() => {
      if(this.playLevel > 0){
        this.playLevel--;
      } else {
        this.sleepLevel--;
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
}