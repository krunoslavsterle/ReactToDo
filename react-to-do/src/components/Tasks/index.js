import React, { Component } from "react";

import classes from "./index.module.css";
import Task from "./Task";
import NewTask from "./NewTask";

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, description: "This is my first task", completed: false },
      { id: 2, description: "This is my second task", completed: true },
      { id: 3, description: "Buy some milk", completed: true },
      { id: 4, description: "Study React", completed: false }
    ]
  };

  taskStateChangedHandler = id => {
    this.setState(prevState => {
      var updatedTasks = [...this.state.tasks];
      var task = updatedTasks.find(t => t.id === id);
      task.completed = !task.completed;

      return { tasks: updatedTasks };
    });
  };

  addNewTaskHandler = description => {
    this.setState(prevState => {
      var updatedTasks = [...this.state.tasks];
      var nextId = updatedTasks[updatedTasks.length - 1].id + 1;
      var newTask = { id: nextId, description: description, completed: false };
      updatedTasks.push(newTask);
      return { tasks: updatedTasks };
    });
  };

  render() {
    return (
      <div className={classes.Tasks}>
        {this.state.tasks.map(task => {
          return (
            <Task
              key={task.id}
              description={task.description}
              completed={task.completed}
              stateChanged={() => this.taskStateChangedHandler(task.id)}
            />
          );
        })}
        <NewTask taskCreated={this.addNewTaskHandler} />
      </div>
    );
  }
}

export default Tasks;
