import React from "react";

import classes from "./index.module.css";

const Task = props => {
  const iconClasses = ["material-icons", "icon", "icon-md", classes.CheckIcon];

  let checkIcon = "check_box_outline_blank";
  let taskButtonClasses = [classes.TaskButton];
  if (props.completed) {
    checkIcon = "check_box";
    taskButtonClasses.push(classes.TaskButtonCompleted);
  }

  return (
    <div className={classes.Task}>
      <div className={classes.TaskBody}>
        <i className={iconClasses.join(" ")} onClick={props.stateChanged}>
          {checkIcon}
        </i>
        <div className={taskButtonClasses.join(" ")}>{props.description}</div>
      </div>
    </div>
  );
};

export default Task;
