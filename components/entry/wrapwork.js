import styles from '@components/entry/work.module.scss'

const WrapperWork = ({ children, gridColumns, gridCRows }) => {
  return (
    <div className={styles.wrapper} style={{gridTemplateColumns: `${gridColumns}`, gridTemplateRows: `${gridCRows}`}}>
      {children}
    </div>
  )
}
export default WrapperWork