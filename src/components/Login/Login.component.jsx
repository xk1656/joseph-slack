import React from "react";
import "./Login.styles.scss";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebase";
import { useStateValue } from "../../provider/provider";
import { actionTypes } from "../../reducer/reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) =>
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    );
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Welcome to Joseph's Slack</h1>
        <p>joseph-slack.heroku.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
