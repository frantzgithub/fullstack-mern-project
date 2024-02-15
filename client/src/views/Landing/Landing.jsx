import { Link } from 'react-router-dom';
import styles from './landing.module.scss';
const Landing = () => {
    return (
      <section className={styles.landing}>
          <h1>welcome to my website</h1>
          <p>click the button to go to the home page</p>
          <Link to='/home'>Home</Link>
      </section>
    )
  }
  
  export default Landing
