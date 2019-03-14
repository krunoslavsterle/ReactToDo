import React from "react";

import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = { authUser: JSON.parse(localStorage.getItem("authUser")) };

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        console.log("auth changed");
        if (authUser) {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.setState({ authUser });
        } else {
          localStorage.removeItem("authUser");
          this.setState({ authUser: null });
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
