import styles from './list.module.css'

const List = ({
  listTitle,
  children

              }) => {
  return (
    <div>
      <h2 className={styles.title_block}>{listTitle}</h2>
      {children}
    </div>
  )
}

export default List