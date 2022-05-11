import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export const Menu = ({ onClick }) => {
	return (
		<div className={styles.menu} onClick={onClick}>
			<Link to='/info' className={styles.menuItem}>
				Información
			</Link>
			<a
				href='https://pokeapi.co'
				target='_blank'
				className={styles.menuItem}
				rel='noreferrer'
			>
				PokéApi
			</a>
		</div>
	)
}
