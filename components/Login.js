import React from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { createPortal } from "react-dom"


function Login(){


  function handleClick() {
    window.location.href = '/home' ; 
  }

  return (
    <div >
      <div className={styles.main}>
        <div className={styles.leftcontent}>
          <img src="/assets/logo-twitter.png" />
        </div>
        <div className={styles.rightcontent}>
          <img src="/assets/logo-twitter.png" />
          <div className={styles.signincontent}>
            <h1>See what's happening</h1>
            <p>Join Hacktweet today.</p>
            <div className={styles.buttonscontainer}>
              <button className={styles.buttonsignin} onClick={handleClick}>Sign In</button>
              <Link href="/">
                <span className={styles.link}>Already have an account ?</span>
              </Link>
              <button className={styles.buttonsignup}>Sing Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
