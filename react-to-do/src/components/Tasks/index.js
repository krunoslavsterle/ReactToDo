import React from "react";

import classes from "./index.module.css";
import Task from "./Task";

const Tasks = props => (
  <div className={classes.Tasks}>
    <Task />
    <Task />
    <Task />
    <Task />
  </div>
);

export default Tasks;
