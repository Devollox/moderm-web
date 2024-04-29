
import styles from './footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://steamcommunity.com/id/Cookiemp4/" className={styles.wrapper_footer}>
        <span className={styles.footer_text}>Steam</span>
        <i className={styles.footer_padding}></i>
      </a>
      <a href="https://github.com/devollox" target="_blank" className={styles.wrapper_footer}>
        <span className={styles.footer_text}>GitHub</span>
        <i className={styles.footer_padding}></i>
      </a>
    </footer>
  )
}
export default Footer
