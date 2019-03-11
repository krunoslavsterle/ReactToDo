import React, { Component } from "react";

import classes from "./index.module.css";

class TaskEdit extends Component {
  state = {
    task: {
      ...this.props.task
    }
  };

  changeNameHandler = event => {
    const newTask = { ...this.state.task };
    newTask.description = event.target.value;
    this.setState({ task: newTask });
  };

  changeNoteHandler = event => {
    const newTask = { ...this.state.task };
    newTask.note = event.target.value;
    this.setState({ task: newTask });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.task.id === state.task.id) {
      return state;
    }

    // If new task was selected need to reset the state values.
    return {
      task: {
        ...props.task
      }
    };
  }

  render() {
    const { description, note } = this.state.task;
    let drawerClasses = [classes.TaskEdit, classes.Opened];

    return (
      <div className={drawerClasses.join(" ")}>
        <div className={classes.Widget}>
          <div className={classes.TaskButton}>
            <input
              type="text"
              placeholder="Task name"
              value={description}
              onChange={this.changeNameHandler}
            />
          </div>
        </div>

        <div className={classes.Widget}>
          <div className={classes.TaskButton}>
            <textarea
              rows="5"
              placeholder="Description..."
              value={note}
              onChange={this.changeNoteHandler}
            />
          </div>
        </div>

        <div className={classes.Buttons}>
          <button
            className={[classes.Button, classes.Confirm].join(" ")}
            type="button"
            onClick={() => this.props.saved(this.state.task)}
          >
            SAVE
          </button>

          <button
            className={[classes.Button, classes.Delete].join(" ")}
            type="button"
            onClick={this.props.deleted}
          >
            DELETE
          </button>

          <button
            className={[classes.Button, classes.Cancel].join(" ")}
            type="button"
            onClick={this.props.cancelled}
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}

export default TaskEdit;
