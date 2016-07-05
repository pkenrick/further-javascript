var expect = require("chai").expect;
var ToDoList = require("../models/toDoList");
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
      toDoList.addTask("Eat breakfast")
      expect(toDoList.tasks[0].task).to.equal("Eat breakfast")
    });
  });

});