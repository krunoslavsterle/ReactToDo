import React, { Component } from "react";

import classes from "./index.module.css";

class TaskEdit extends Component {
  state = {
    task: {
      ...this.props.task
    }
  };

  changeNameHandler = event => {
    var newTask = { ...this.state.task };
    newTask.description = event.target.value;
    this.setState({ task: newTask });
  };

  changeNoteHandler = event => {
    var newTask = { ...this.state.task };
    newTask.note = event.target.value;
    this.setState({ task: newTask });
  };

  render() {
    const { id, description, completed, note } = this.state.task;
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

        <button
          className={classes.ConfirmButton}
          type="button"
          onClick={() => this.props.saved(this.state.task)}
        >
          SAVE
        </button>

        <button
          className={classes.ConfirmButton}
          type="button"
          onClick={this.props.cancelled}
        >
          CANCEL
        </button>
      </div>
    );
  }
}

export default TaskEdit;
