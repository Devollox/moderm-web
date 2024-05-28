import styles from '@components/entry/work.module.css'

const WrappperWork = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}
export default WrappperWork