import React from 'react'
import { useState } from 'react';
import styles from '../styles/Signup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
  return (
    <div className={styles.modalsignup}>
    <FontAwesomeIcon className={styles.closeicon} icon={faXmark}/>
  <div className={styles.modalcontent}>
  <img src="/assets/logo-twitter.png" />
  <p>Create your Hackatweet account</p>
  <div className={styles.inputcontainer}>
  <input className={styles.inputstyle} type="Username" placeholder="Username"/>
  <input className={styles.inputstyle} type="Password" placeholder="Password"/>
  <button className={styles.buttonsignup}>Sign Up</button>
    </div> 
  </div>
</div>
  )
}

export default SignIn