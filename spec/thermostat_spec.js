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

  describe('up', function(){
    it('can increase the temperature', function(){
      thermostat.up(5);
      expect(thermostat.temperature).toEqual(25);
    });

    it('cannot increase beyond 25 if power saving mode is on', function() {
      thermostat.savingsOff();
      thermostat.savingsOn();
      expect(function() {thermostat.up(6)}).toThrowError('Maximum temperature in Power Saving mode is 25');
    });

    it('can increase to 25<x<32 if power saving mode is off', function() {
      thermostat.savingsOff();
      thermostat.up(7);
      expect(thermostat.temperature).toEqual(27);
    });

    it('cannot increase beyond 32 if power saving mode is off', function() {
      thermostat.savingsOff();
      expect(function() {thermostat.up(13)}).toThrowError('Maximum temperature is 32');
    });
  });

  describe('down', function(){
    it('can decrease the temperature', function(){
      thermostat.down(5);
      expect(thermostat.temperature).toEqual(15);
    });

    it('cant decrease temp below 10 degrees', function(){
      expect(function() {thermostat.down(11)}).toThrowError('Minimum temperature is 10');
    });
  });

  describe('savingsOn', function() {
    it('switches to max temp of savings mode if temp above 25', function() {
      thermostat.savingsOff();
      thermostat.up(8);
      thermostat.savingsOn();
      expect(thermostat.temperature).toEqual(25);
    });
  });
});