import React, { Component } from "react";

import classes from "./index.module.css";

class NewTask extends Component {
  state = {
    input: ""
  };

  submitOnEnterHandler = event => {
    if (event.key === "Enter") {
      this.addNewTask();
    }
  };

  inputChangedHandler = event => {
    this.setState({ input: event.target.value });
  };

  addTaskHandler = () => {
    if (this.state.input === "") {
      this.inputElement.focus();
    } else {
      this.addNewTask();
    }
  };

  addNewTask = () => {
    this.setState({ input: "" });
    this.props.taskCreated(this.inputElement.value);
  };

  render() {
    const iconClasses = [
      "material-icons",
      "icon",
      "icon-md",
      classes.CheckIcon
    ];

    return (
      <div className={classes.NewTask}>
        <div className={classes.TaskBody}>
          <i className={iconClasses.join(" ")} onClick={this.addTaskHandler}>
            add
          </i>
          <div className={classes.TaskButton}>
            <input
              ref={input => {
                this.inputElement = input;
              }}
              type="text"
              placeholder="Add a task"
              value={this.state.input}
              onChange={this.inputChangedHandler}
              onKeyPress={this.submitOnEnterHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewTask;
