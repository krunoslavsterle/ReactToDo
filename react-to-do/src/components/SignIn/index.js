import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import classes from "./index.module.css";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: ""
};

class SignIn extends Component {
  state = { ...INITIAL_STATE };

  onInputChangedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password == "" || email === "";

    return (
      <div className={classes.Login}>
        <div className={classes.Wrap}>
          <form className={classes.Form} onSubmit={this.onSubmitHandler}>
            <span className={classes.Title}>LOGIN</span>

            <div className={classes.InputWrapper}>
              <input
                name="email"
                value={email}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Email"
              />
            </div>

            <div className={classes.InputWrapper}>
              <input
                name="password"
                value={password}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Password"
              />
            </div>

            <button
              className={classes.ConfirmButton}
              type="submit"
              disabled={isInvalid}
            >
              LOGIN
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(withFirebase(SignIn));
