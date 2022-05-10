import { Link } from 'react-router-dom'
import Logo from '../../assets/svgs/pokemon_logo.svg?component'
import styles from './LinkLogo.module.scss'

export const LinkLogo = () => {
	return (
		<Link to='/' className={styles.link}>
			<Logo />
		</Link>
	)
}
