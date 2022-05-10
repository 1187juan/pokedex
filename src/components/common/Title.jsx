import styles from './Title.module.scss'

export const Title = ({ variant = 'h1', component, children }) => {
	const Elemnt = component || variant

	return (
		<Elemnt className={`${styles.title} ${styles[variant]}`}>{children}</Elemnt>
	)
}
