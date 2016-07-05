var expect = require("chai").expect;
var ToDoItem = require("../src/ToDoItem");

  describe('ToDoItem', function(){

  var toDoItem;

  beforeEach(function(){
  toDoItem = new ToDoItem('Eat breakfast');

  });

    describe('#setTask', function(){
      it ('can set tasks', function(){
        toDoItem.setTask('Breakfast')
        expect(toDoItem.task).to.equal('Breakfast')
      });
    });

    describe('#viewTask', function() {
      it('should be able to view tasks', function() {

        toDoItem.setTask('Breakfast')
        expect(toDoItem.viewTask()).to.equal('Breakfast');
      });
    });

    describe('#completeTask', function(){
      it('marks a complete task', function(){
        toDoItem.completeTask();
        expect(toDoItem.complete).to.equal(true)

      });
    });
  });
