import React from "react";

import classes from "./index.module.css";

const Task = props => {
  const iconClasses = ["material-icons", "icon", "icon-md", classes.CheckIcon];

  let taskClasses = [classes.Task];
  let taskButtonClasses = [classes.TaskButton];
  let taskBodyClasses = [
    classes.TaskContainer,
    classes.TaskContainerWide,
    classes.CursorPointer
  ];

  let checkIcon = "check_box_outline_blank";
  if (props.completed) {
    checkIcon = "check_box";
    taskButtonClasses.push(classes.TaskButtonCompleted);
  }

  if (props.selected) {
    taskClasses.push(classes.Selected);
  }

  return (
    <div className={taskClasses.join(" ")}>
      <div className={classes.TaskContainer}>
        <i className={iconClasses.join(" ")} onClick={props.stateChanged}>
          {checkIcon}
        </i>
      </div>
      <div className={taskBodyClasses.join(" ")} onClick={props.taskSelected}>
        <div className={classes.TaskBody}>
          <div className={taskButtonClasses.join(" ")}>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
