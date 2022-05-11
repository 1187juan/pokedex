import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import { Title } from './Title'

export const Card = ({ title, imgUrl, id }) => {
	return (
		<Link to={'/pokemon/' + id} className={styles.link}>
			<img src={imgUrl} alt={title} className={styles.img} />
			<Title variant='h4' component='h1'>
				{title}
			</Title>
		</Link>
	)
}
