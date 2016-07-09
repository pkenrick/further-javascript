
var expect = require("chai").expect;
var ToDoItem = require("../models/toDoItem").ToDoItem;
var toDoItem;

describe ("ToDoItem", function() {
  
  beforeEach(function() {
    toDoItem = new ToDoItem();
  });

  it("object is instantiated with an empty text and false complete attr", function() {
    expect(toDoItem.text).to.equal("");
    expect(toDoItem.complete).to.equal(false);
  });

  describe ("#setTask", function() {
    it("can store a task", function() {
      toDoItem.setText("Eat breakfast");
      expect(toDoItem.text).to.equal("Eat breakfast");
    });
  });

  describe ("#getTask", function() {
    it("can retrive a task", function() {
      toDoItem.setText("Eat breakfast");
      expect(toDoItem.getText()).to.equal("Eat breakfast");
    });
  });

  describe ("#complete", function() {
    it("completes a task", function() {
      toDoItem.completeTask();
      expect(toDoItem.complete).to.equal(true);
    });
  });

  describe ("#checkComplete", function() {
    it("checks if taks is completed", function() {
      toDoItem.completeTask();
      expect(toDoItem.checkComplete()).to.equal('Complete');
    });
  });

});