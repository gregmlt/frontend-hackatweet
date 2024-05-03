import styles from "../styles/Home.module.css";
import Login from "./Login"
import PostBar from "./PostBar";
import Tweet from "./Tweet"
import Trends from "./Trends"

function Home() {


  return (  
    <div className={styles.main}>
    <div className={styles.left}>
      <img
        src="/assets/logo-twitter.png"
        alt="Twitter logo"
        className={styles.miniLogo}
      />
      <div className={styles.footer}>
        <div className={styles.userCard}>
          <img
            className={styles.profilePic}
            src={"/assets/profile1.jpg"} 
            alt="Profile"
          />
          <div className={styles.userText}>
            <h4 className={styles.username}>Firstname</h4>
            <h5 className={styles.identifier}>@username</h5>
          </div>
        </div>
        <button className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
    <div className={styles.middle}>

      <div className={styles.container}>
        <h1>Home</h1>
        <div className={styles.postcontainer}>
         <PostBar />

        </div>
      </div>
      <Tweet />
    </div>
    <div className={styles.right}>
      <h1 className={styles.title}>Trends</h1>
      <div>
        <Trends />
      </div>
    </div>
  </div>

  )
}

export default Home;
