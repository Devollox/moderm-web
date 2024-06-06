import styles from '@components/entry/work.module.scss'

const WrapperWork = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}
export default WrapperWork