import Img from '../../assets/svgs/undraw_page_not_found_re_e9o6.svg?component'
import { Title } from '../../components/common'
import styles from './Error404.module.scss'

export const Error404Page = () => {
	return (
		<div className={styles.container}>
			<Img />
			<div>
				<Title>Hmmm!</Title>
				<p>No encontramos lo que buscabas.</p>
			</div>
		</div>
	)
}
