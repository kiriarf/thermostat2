class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  setTemperature(number) {
    if (number < 10 ) {
      throw new Error('Minimum temperature is 10');
    }; 

    if (this.powerSaving && number > 25) {
      throw new Error('Maximum temperature in Power Saving mode is 25');
    };
    
    if (!this.powerSaving && number > 32) {
      throw new Error('Maximum temperature is 32');
    };
     
    this.temperature = number;
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

  reset() {
    this.temperature = 20
  }

  viewUsage() {
    if (this.temperature < 18) { return 'low-usage' }
    else if (this.temperature >= 18 && this.temperature <= 25) { return 'medium-usage' };
    return 'high-usage'
    }

 }

