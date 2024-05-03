import React from 'react'
import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

function Tweet() {
  return (
    <div className={styles.tweetcontainer}>   
        <div className={styles.profile}>
            <img src="./assets/profile1.jpg" alt="profile picture"/>
            <p className={styles.username}>Antoine</p>
            <p className={styles.identifier}>@AntoineLeprof</p>
            <p className={styles.dates}>. 5 hours</p>
        </div>
        <div className={styles.tweetcontent}>
            <p>Hola Buenas tardes </p>
        </div>

            <div className={styles.likeIcon}>
            <FontAwesomeIcon icon={faHeart} />
            <p>1</p>
            <FontAwesomeIcon icon={faTrash} />
            </div> 
    </div>
  )
}


export default Tweet