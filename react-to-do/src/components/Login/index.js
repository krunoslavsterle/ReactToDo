import React from "react";

import classes from "./index.module.css";

const Login = () => (
  <div className={classes.Login}>
    <div className={classes.Wrap}>
      <form className={classes.Form}>
        <span className={classes.Title}>LOGIN</span>

        <div className={classes.InputWrapper}>
          <input className={classes.Input} type="text" placeholder="Email" />
        </div>

        <div className={classes.InputWrapper}>
          <input className={classes.Input} type="text" placeholder="Password" />
        </div>

        <button className={classes.ConfirmButton} type="button">
          LOGIN
        </button>
      </form>
    </div>
  </div>
);

export default Login;
