import React from "react";
import { useState } from "react";
import styles from "../styles/PostBar.module.css";

function PostBar() {


  return (
    <div>
      <form className={styles.form}>
        <textarea className={styles.textArea} placeholder="What's up ?"></textarea>
        <div className={styles.post}>
          <p className={styles.characterCount}>0/280</p>
          <button type="submit " className={styles.submitTweet}>
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostBar;
