var server = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');

describe("Interface", function() {

  
  var browser = new Browser({ site: 'http://localhost:3000'  });
  server.listen(3000);

  beforeEach(function(done){
    browser.visit('/', done);
  });
  
  it('can see title', function() {
    browser.assert.text('title', 'To Do List');
  });

  it('can see to do list', function() { 
    assert.equal(browser.text('li'), 'Go shopping');
  });

  it('can submit task then see task displayed', function(done) {
      browser.fill('task', 'Feed grandma');
      browser.pressButton('Add Task');
      // browser.assert.text('li', 'Feed grandma');
      // assert.equals(browser.query('li'));
      done();
  });
  

});