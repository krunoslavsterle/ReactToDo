import React from "react";

import classes from "./index.module.css";

const DrawerToggle = props => (
  <div className={classes.DrawerToggle}>
    <i
      className="material-icons icon icon-white icon-md"
      onClick={props.clicked}
    >
      dehaze
    </i>
  </div>
);

export default DrawerToggle;
