function ToDoList(){
  this.itemList = [];
}

ToDoList.prototype.addTask = function(task){
  this.itemList.push(new ToDoItem(task));
};

module.exports = ToDoList;