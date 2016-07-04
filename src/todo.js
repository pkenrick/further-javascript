function ToDo(task){
this.task = task;
this.complete = false;
}

ToDo.prototype.setTask = function(task){
this.task = task
}

ToDo.prototype.viewTask = function(){
return this.task
}

ToDo.prototype.completeTask = function(){
this.complete = true
}
module.exports = ToDo
// "test": "echo \"Error: no test specified\" && exit 1"
