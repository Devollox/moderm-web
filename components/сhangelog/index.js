import styles from './changelog.module.css'

const Changelog = ({ children }) => {
  return (
    <ul className={styles.wrapper_list}>
      {children}
    </ul>
  )
}

export default Changelog