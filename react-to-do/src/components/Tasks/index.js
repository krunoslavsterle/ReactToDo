import React, { Component, Fragment } from "react";

import classes from "./index.module.css";
import Task from "./Task";
import NewTask from "./NewTask";
import TaskEdit from "./TaskEdit";

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, description: "This is my first task", completed: false },
      { id: 2, description: "This is my second task", completed: true },
      { id: 3, description: "Buy some milk", completed: true },
      { id: 4, description: "Study React", completed: false }
    ],
    selected: null
  };

  taskSelectionHandler = id => {
    this.setState({ selected: id });
  };

  taskUnselectedHandler = () => {
    this.setState({ selected: null });
  };

  taskSavedHandler = savedTask => {
    this.setState(prevState => {
      var editedTasks = [...prevState.tasks];
      var task = editedTasks.find(t => t.id === savedTask.id);
      task.description = savedTask.description;
      task.note = savedTask.note;

      return { tasks: editedTasks, selected: null };
    });
  };

  taskStateChangedHandler = (event, id) => {
    event.preventDefault();

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
    let taskEdit = null;
    let taskEditClasses = [classes.TaskEditContainer];

    if (this.state.selected) {
      var task = this.state.tasks.find(t => t.id === this.state.selected);
      taskEdit = (
        <TaskEdit
          task={task}
          cancelled={this.taskUnselectedHandler}
          saved={this.taskSavedHandler}
        />
      );

      taskEditClasses.push(classes.Opened);
    }

    return (
      <Fragment>
        <div className={classes.Tasks}>
          {this.state.tasks.map(task => {
            return (
              <Task
                key={task.id}
                description={task.description}
                selected={this.state.selected === task.id}
                completed={task.completed}
                stateChanged={event =>
                  this.taskStateChangedHandler(event, task.id)
                }
                taskSelected={() => this.taskSelectionHandler(task.id)}
              />
            );
          })}
          <NewTask taskCreated={this.addNewTaskHandler} />
        </div>
        <div className={taskEditClasses.join(" ")}>{taskEdit}</div>
      </Fragment>
    );
  }
}

export default Tasks;
