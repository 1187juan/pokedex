import { useState, useEffect } from 'react'
import { getPokemon } from '../../services'
import { Card } from '../common'
import styles from './SearchResults.module.scss'

export const SearchResults = ({ search }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemon, setPokemon] = useState(null)

	useEffect(() => {
		const task = async () => {
			try {
				const data = await getPokemon(search)
				setPokemon(data)
			} catch (error) {
				setPokemon(null)
			}
			setIsLoading(false)
		}
		task()
	}, [])

	if (isLoading) return <div className={styles.box}>Cargando...</div>

	if (!pokemon) return <div className={styles.box}>Sin resultados</div>

	return (
		<div className={styles.container}>
			<Card title={pokemon.name} imgUrl={pokemon.imgUrl} id={pokemon.id} />
		</div>
	)
}
