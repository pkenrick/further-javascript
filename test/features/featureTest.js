var server = require("http-server").createServer();
var Browser = require('zombie');
var assert = require('chai').assert;

describe("Interface", function() {

  
  var browser = new Browser({ site: 'http://localhost:3000'  });
  server.listen(3000);

  beforeEach(function(done){
    browser.visit('/', done);
  });
  
  // it('can see title', function(done) {
  //   assert.equal(browser.text('title'), 'To Do List');
  //   done();
  // });

  it('can see to do list (pulled from API)', function() { 
      assert.include(browser.text('li'), 'Go to the bank: Incomplete');
  });

  it('can submit task then see task displayed', function(done) {
    browser.fill('task', 'Feed grandma');
    browser.pressButton('Add Task');
    browser.fill('task', 'Walk the dog');
    browser.pressButton('Add Task');
    assert.include(browser.text('li'), 'Feed grandma: Incomplete');
    assert.include(browser.text('li'), 'Walk the dog: Incomplete');
    done();
    });
  
  it('can click the "complete" button to complete a task', function() {
    browser.fill('task', 'Feed grandma');
    browser.pressButton('Add Task');
    browser.pressButton('#completeTaskButton17');
    assert.include(browser.text('li'), 'Feed grandma: Complete');
  });


});