var expect = require("chai").expect;
var sinon = require("sinon");
var ToDoList = require("../models/toDoList").ToDoList;
var ToDoItem = require("../models/toDoItem").ToDoItem;
var toDoList;

describe ("ToDoList", function() {

  beforeEach(function() {
    toDoList = new ToDoList();
  });

  it("object is instantiated with with an array to store to do objects", function() {
    expect(toDoList.tasks).to.be.a('array');
    expect(toDoList.tasks).to.have.length(0);
  });

  describe ("#addTask", function() {
    it("adds a new to do object to the to do list", function() {
      var ToDoItemSpy = sinon.spy(ToDoItem);
      toDoList.addTask(ToDoItemSpy, "This is a spy");
      expect(ToDoItemSpy.calledWithNew()).to.be.true;
      expect(toDoList.tasks.length).to.equal(1);
    });
  });

  describe ("#display", function() {
    it("displays a to do list in html format", function() {
      toDoList.addTask(ToDoItem, "Eat breakfast");
      toDoList.addTask(ToDoItem, "Eat lunch");
      expect(toDoList.display()).to.equal("<ul><li><div>Eat breakfast</div></li><li><div>Eat lunch</div></li></ul>");
    });
  });

});