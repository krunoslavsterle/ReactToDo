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

        <div
          className={[
            classes.Container,
            classes.ContainerFirst,
            classes.Selected
          ].join(" ")}
        >
          <div className={[classes.DrawerToggle].join(" ")}>
            <i className="material-icons icon icon-white icon-md">done_all</i>
          </div>
          <div className={classes.Label}>
            <h4>Home</h4>
          </div>
        </div>

        <div className={[classes.Container].join(" ")}>
          <div className={[classes.DrawerToggle].join(" ")}>
            <i className="material-icons icon icon-white icon-md">star</i>
          </div>
          <div className={classes.Label}>
            <h4>Important</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
