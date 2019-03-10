import React, { Component, Fragment } from "react";

import Header from "../Header";
import SideDrawer from "../SideDrawer";
import Tasks from "../Tasks";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Header />
        </header>
        <nav>
          <SideDrawer />
        </nav>
        <main>
          <Tasks />
        </main>
      </Fragment>
    );
  }
}

export default HomePage;
