import styles from './InfoPage.module.scss'
import Logo from '../../assets/svgs/pokemon_logo.svg?component'
import { Title } from '../../components/common'

export const InfoPage = () => {
	return (
		<section className={styles.container}>
			<Logo className={styles.logo} />
			<Title>Sobre el sitio </Title>
			<p className={styles.text}>
				Esta es una aplcación web para buscar y conocer detalles de Pokémons.
			</p>
		</section>
	)
}
