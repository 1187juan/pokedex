import styles from './Drawer.module.scss'
import Close from '../../assets/svgs/icons/close.svg?component'

export const Drawer = ({ open = true, children, onClose }) => {
	if (open)
		return (
			<>
				<div className={styles.bg} onClick={onClose} />
				<div className={styles.container}>{children}</div>
				<button className={styles.closeButton} onClick={onClose}>
					<Close />
				</button>
			</>
		)
	return null
}
