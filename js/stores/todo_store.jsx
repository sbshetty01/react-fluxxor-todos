var Fluxxor = require('fluxxor'), 
    STATES = require('../constants/states');

var TodoStore = Fluxxor.createStore({
  initialize: function() {
    this.todoId = 0;
    this.todos = {};

    this.bindActions(
      STATES.ADD_TODO, this.onAddTodo,
      STATES.TOGGLE_TODO, this.onToggleTodo,
      STATES.CLEAR_TODOS, this.onClearTodos
    );
  },

  onAddTodo: function(payload) {
    var id = this._nextTodoId();
    var todo = {
      id: id,
      text: payload.text,
      complete: false
    };
    this.todos[id] = todo;
    this.emit("change");
  },

  onToggleTodo: function(payload) {
    var id = payload.id;
    this.todos[id].complete = !this.todos[id].complete;
    this.emit("change");
  },

  onClearTodos: function() {
    var todos = this.todos;

    Object.keys(todos).forEach(function(key) {
      if(todos[key].complete) {
        delete todos[key];
      }
    });

    this.emit("change");
  },

  getState: function() {
    return {
      todos: this.todos
    };
  },

  _nextTodoId: function() {
    return ++this.todoId;
  }
});

module.exports = TodoStore;