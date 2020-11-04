describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('setTemperature', function() {
    it('can increase the temperature', function(){
      thermostat.setTemperature(24);
      expect(thermostat.temperature).toEqual(24);
    });

    it('cannot increase beyond 25 if power saving mode is on', function() {
      thermostat.savingsOff();
      thermostat.savingsOn();
      expect(function() {thermostat.setTemperature(26)}).toThrowError('Maximum temperature in Power Saving mode is 25');
    });

    it('can increase to 25<x<32 if power saving mode is off', function() {
      thermostat.savingsOff();
      thermostat.setTemperature(27);
      expect(thermostat.temperature).toEqual(27);
    });

    it('cannot increase beyond 32 if power saving mode is off', function() {
      thermostat.savingsOff();
      expect(function() {thermostat.setTemperature(33)}).toThrowError('Maximum temperature is 32');
    });

    it('can decrease the temperature', function(){
      thermostat.setTemperature(15);
      expect(thermostat.temperature).toEqual(15);
    });

    it('cant decrease temp below 10 degrees', function(){
      expect(function() {thermostat.setTemperature(9)}).toThrowError('Minimum temperature is 10');
    });

  });

  describe('savingsOn', function() {
    it('switches to max temp of savings mode if temp above 25', function() {
      thermostat.savingsOff();
      thermostat.setTemperature(28);
      thermostat.savingsOn();
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('reset', function() {
    it('resets the temperature to 20', function() {
      thermostat.setTemperature(15);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('viewUsage', function(){
    it('gives a low usage level to the user when temperature < 18', function(){
      thermostat.setTemperature(15);
      expect(thermostat.viewUsage()).toEqual('low-usage');
    });

    it('gives a medium usage level to the user when 18 >= temperature >= 25', function(){
      expect(thermostat.viewUsage()).toEqual('medium-usage');
    });

    it('gives a high usage level to the user when 25 < temperature', function(){
      thermostat.savingsOff();
      thermostat.setTemperature(28);
      expect(thermostat.viewUsage()).toEqual('high-usage');
    });
  });
});