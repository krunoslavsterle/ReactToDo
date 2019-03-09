import React from "react";

import classes from "./index.module.css";

const SignUp = () => (
  <div className={classes.SignUp}>
    <div className={classes.Wrap}>
      <form className={classes.Form}>
        <span className={classes.Title}>Sign Up</span>

        <div className={classes.InputWrapper}>
          <input className={classes.Input} type="text" placeholder="Email" />
        </div>

        <div className={classes.InputWrapper}>
          <input className={classes.Input} type="text" placeholder="Password" />
        </div>

        <div className={classes.InputWrapper}>
          <input
            className={classes.Input}
            type="text"
            placeholder="Confirm Password"
          />
        </div>

        <button className={classes.ConfirmButton} type="button">
          SIGN UP
        </button>
      </form>
    </div>
  </div>
);

export default SignUp;
