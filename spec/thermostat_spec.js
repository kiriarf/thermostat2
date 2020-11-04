describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  }) 
  describe('temperature', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20)
    })

  })

  describe('up', function(){
    it('can increase the temperature', function(){
      thermostat.up(5);
      expect(thermostat.temperature).toEqual(25);
    })
  })

  describe('down', function(){
    it('can decrease the temperature', function(){
      thermostat.down(5);
      expect(thermostat.temperature).toEqual(15);
    })
  })
})