
import styles from './footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://steamcommunity.com/id/Cookiemp4/" className={styles.wrapper_footer}>
        <span>Steam</span>
      </a>
      <a href="https://github.com/devollox" target="_blank" className={styles.wrapper_footer}>
        <span>GitHub</span>
      </a>
      <a href="https://ru.stackoverflow.com/users/560760/devollox" target="_blank" className={styles.wrapper_footer}>
        <span>stackoverflow</span>
      </a>
      <a href="https://www.reddit.com/user/Devollox/" target="_blank" className={styles.wrapper_footer}>
        <span>reddit</span>
      </a>
    </footer>
  )
}
export default Footer
