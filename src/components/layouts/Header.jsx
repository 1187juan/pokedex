import { HeaderScroll, LinkLogo, Search } from '../common'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<HeaderScroll>
			<nav className={styles.nav}>
				<LinkLogo />
				<Search />
			</nav>
		</HeaderScroll>
	)
}
