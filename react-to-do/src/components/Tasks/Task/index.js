import React from "react";

import classes from "./index.module.css";

const Task = props => {
  const iconClasses = ["material-icons", "icon", "icon-md", classes.CheckIcon];
  let checkIcon = "check_box_outline_blank";
  if (props.completed) {
    checkIcon = "check_box";
  }

  return (
    <div className={classes.Task}>
      <div className={classes.TaskBody}>
        <i className={iconClasses.join(" ")} onClick={props.stateChanged}>
          {checkIcon}
        </i>
        <div className={classes.TaskButton}>{props.description}</div>
      </div>
    </div>
  );
};

export default Task;
