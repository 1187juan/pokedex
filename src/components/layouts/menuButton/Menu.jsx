import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export const Menu = ({ onClick }) => {
	return (
		<div className={styles.menu} onClick={onClick}>
			<Link to='/' className={styles.menuItem}>
				Item 1
			</Link>
			<Link to='/' className={styles.menuItem}>
				Item 2
			</Link>
		</div>
	)
}
