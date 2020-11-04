class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  up(degrees) {
    if (this.powerSaving) {
      if (this.temperature + degrees > 25) {
        throw new Error('Maximum temperature in Power Saving mode is 25');
      } else {
        this.temperature += degrees;
      };
    } else {
      if (this.temperature + degrees > 32) {
        throw new Error('Maximum temperature is 32');
      } else {
        this.temperature += degrees;
      };
    };  
  }

  down(degrees) {
    if (this.temperature - degrees >= 10) {
     this.temperature -= degrees
    } else {
      throw new Error('Minimum temperature is 10')
    }
  }

  savingsOff() {
    this.powerSaving = false;
  }
  
  savingsOn() {
    if (this.temperature > 25) {
      this.temperature = 25;
    };
    this.powerSaving = true;
  }

}