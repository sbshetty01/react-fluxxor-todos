var React = require("react"),
    Fluxxor = require("fluxxor"),
    ReactDOM = require('react-dom'),
    TodoStore = require('./stores/todo_store'),
    STATES = require('./constants/states'),
    Application = require('./components/application');

var flux = new Fluxxor.Flux();

flux.addStore('TodoStore' ,new TodoStore());

flux.addActions({
  addTodo: function(text) {
    this.dispatch(STATES.ADD_TODO, {text: text});
  },

  toggleTodo: function(id) {
    this.dispatch(STATES.TOGGLE_TODO, {id: id});
  },

  clearTodos: function() {
    this.dispatch(STATES.CLEAR_TODOS);
  }
});

ReactDOM.render(<Application flux={flux} />, document.getElementById("app"));