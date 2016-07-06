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

  // it('can submit task then see task displayed', function(done) {
  //   console.log('1')
  //   browser.visit('/').then(function(){
  //         console.log('2')
  //     browser.fill('task', 'Feed grandma');
  //     return browser.pressButton('Add Task');
  //   }).then(function(){
  //         console.log('3')
  //     assert(browser.text('#list') === "Feed grandma", "error message");
  //   }).then(done, done);
  //       console.log('4')
  // });
  

});