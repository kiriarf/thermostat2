class Thermostat {

  constructor() {
    this.temperature = 20;
  }

  up(degrees) {
    this.temperature += degrees
  }

  down(degrees) {
    this.temperature -= degrees
  }

}