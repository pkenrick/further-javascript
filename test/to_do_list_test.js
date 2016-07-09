var expect = require("chai").expect;
var sinon = require("sinon");
var ToDoList = require("../models/toDoList").ToDoList;
var ToDoItem = require("../models/toDoItem").ToDoItem;
var toDoList;
var Stub;

describe ("ToDoList", function() {

  beforeEach(function() {
    toDoList = new ToDoList();
    stubClass = sinon.stub();
    stubClass.withArgs('Feed grandma').returns({ text: 'Feed grandma', complete: false, completeString: 'Incomplete' });
    stubClass.withArgs('Walk dog').returns({ text: 'Walk dog', complete: false, completeString: 'Incomplete' });
  });

  it("object is instantiated with with an array to store to do objects", function() {
    expect(toDoList.tasks).to.be.a('array');
    expect(toDoList.tasks).to.have.length(0);
  });

  describe ("#addTask", function() {
    it("adds a new to do object to the to do list", function() {  
      toDoList.addTask("Feed grandma", stubClass);
      toDoList.addTask("Walk dog", stubClass);
      expect(toDoList.tasks.length).to.equal(2);
      expect(toDoList.tasks[0].text).to.equal('Feed grandma');
      expect(toDoList.tasks[1].text).to.equal('Walk dog');
    });
  });

  describe ("#display", function() {
    it("displays a to do list in html format", function() {
      toDoList.addTask("Feed grandma", stubClass);
      toDoList.addTask("Walk dog",  stubClass);
      expect(toDoList.display()).to.equal("<form id='completeTaskForm'\ action='/tasks/complete'\ method='post'><ul><li><div>Feed grandma:\ Incomplete <input id='completeTaskButton0' type='submit' value='Complete'/></div></li><li><div>Walk dog:\ Incomplete <input id='completeTaskButton1' type='submit' value='Complete'/></div></li></ul></form>");
    });
  });

});
