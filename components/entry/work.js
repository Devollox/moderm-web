import styles from '@components/entry/work.module.scss'

const WorkEntry = ({ title, description, image, href, position, number }) => {
  return (
    <a href={href} target="_blank" className={styles.link_work}>
      <span className={styles.span}>
        <div className={styles.image_work}>
          <div className={styles.image_work_} style={{color: 'var(--fg)'}}>{image}</div>
        </div>
        <div className={styles.wrapper_work}>
          <p className={styles.title_work}>{title}</p>
          <p className={styles.description_work}>{description}</p><p
          className={styles.number}>{number}</p>
        </div>
      </span>
    </a>
  )
}
export default WorkEntry