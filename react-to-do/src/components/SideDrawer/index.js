import React, { Component } from "react";

import classes from "./index.module.css";
import DrawerToggle from "./DrawerToggle";

class SideDrawer extends Component {
  state = {
    opened: false
  };

  drawerToggleHandler = () => {
    console.log("toggle clicked");
    this.setState(prevState => {
      return { opened: !prevState.opened };
    });
  };

  render() {
    let drawerClasses = [classes.SideDrawer, classes.Closed];
    if (this.state.opened) {
      drawerClasses = [classes.SideDrawer, classes.Opened];
    }

    return (
      <div className={drawerClasses.join(" ")}>
        <DrawerToggle clicked={this.drawerToggleHandler} />
        <div className={[classes.DrawerToggle, classes.Selected].join(" ")}>
          <i className="material-icons icon icon-white icon-md">done_all</i>
        </div>
        <div className={[classes.DrawerToggle].join(" ")}>
          <i className="material-icons icon-white icon-md">star_rate</i>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
