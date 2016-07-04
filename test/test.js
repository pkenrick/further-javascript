var expect = require("chai").expect;
var ToDo = require("../src/todo");
console.log(ToDo)



describe('To Do List', function() {
  var toDo

  beforeEach(function(){
     toDo = new ToDo('Eat breakfast');
  });

  describe('ToDo', function(){
    describe('#setTask', function(){
      it ('can set tasks', function(){
        console.log(toDo)
        toDo.setTask('Breakfast')
        expect(toDo.task).to.equal('Breakfast')
      });
    });

    describe('#viewTask', function() {
      it('should be able to view tasks', function() {

        toDo.setTask('Breakfast')
        expect(toDo.viewTask()).to.equal('Breakfast');
      });
    });
    describe('#completeTask', function(){
      it('marks a complete task', function(){
        toDo.completeTask();
        expect(toDo.complete).to.equal(true)

      });
    });
  });
});
