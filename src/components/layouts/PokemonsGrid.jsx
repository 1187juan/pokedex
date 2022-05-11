import { usePokemons } from '../../contexts/PokemonsProvider'
import { Card } from '../common/Card'
import styles from './PokemonsGrid.module.scss'
import { nanoid } from 'nanoid'
import { getPokemons } from '../../services'
import { useState } from 'react'

export const PokemonsGrid = () => {
	const { isLoading, pokemons, addPokemons } = usePokemons()
	const [loading, setLoading] = useState(false)

	const handleMore = async () => {
		try {
			setLoading(true)
			const data = await getPokemons(pokemons.next)
			addPokemons(data)
		} catch (error) {
			alert(error.message)
		}
		setLoading(false)
	}

	if (isLoading) return <div>Cargando...</div>

	return (
		<>
			<div className={styles.container}>
				{pokemons.results.map((pokemon) => (
					<Card
						key={nanoid()}
						id={pokemon.id}
						imgUrl={pokemon.imgUrl}
						title={pokemon.name}
					/>
				))}
			</div>
			{loading && <div>Cargando...</div>}
			{pokemons.next && !loading && (
				<button onClick={handleMore} className={styles.button}>
					Mostrar más
				</button>
			)}
		</>
	)
}
