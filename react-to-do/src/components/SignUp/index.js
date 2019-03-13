import React, { Component } from "react";

import { withFirebase } from "../Firebase";
import classes from "./index.module.css";

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: ""
};

class SignUp extends Component {
  state = { ...INITIAL_STATE };

  onSubmitHandler = event => {
    console.log(this.props);
    const { email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // TODO: ROUTER.
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onInputChangedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";

    return (
      <div className={classes.SignUp}>
        <div className={classes.Wrap}>
          <form className={classes.Form} onSubmit={this.onSubmitHandler}>
            <span className={classes.Title}>Sign Up</span>

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
                name="passwordOne"
                value={passwordOne}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Password"
              />
            </div>

            <div className={classes.InputWrapper}>
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onInputChangedHandler}
                className={classes.Input}
                type="text"
                placeholder="Confirm Password"
              />
            </div>

            <button
              className={classes.ConfirmButton}
              type="submit"
              disabled={isInvalid}
            >
              SIGN UP
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default withFirebase(SignUp);
