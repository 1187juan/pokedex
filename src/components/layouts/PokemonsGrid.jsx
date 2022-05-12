import { Card } from '../common/Card'
import styles from './PokemonsGrid.module.scss'
import { useEffect } from 'react'
import { fetchPokemons } from '../../store/slices/pokemons'
import { useDispatch, useSelector } from 'react-redux'

export const PokemonsGrid = () => {
	const dispatch = useDispatch()
	const pokemons = useSelector((state) => state.pokemons)

	const handleNext = () => dispatch(fetchPokemons(pokemons.next))

	useEffect(() => {
		dispatch(fetchPokemons())
	}, [dispatch])

	if (pokemons.isLoading && !pokemons.results.length)
		return <div>Cargando...</div>

	return (
		<>
			<div className={styles.container}>
				{pokemons.results.map((pokemon) => (
					<Card
						key={pokemon.id}
						id={pokemon.id}
						imgUrl={pokemon.imgUrl}
						title={pokemon.name}
					/>
				))}
			</div>

			{pokemons.next && !pokemons.isLoading && (
				<button onClick={handleNext} className={styles.button}>
					Mostrar más
				</button>
			)}
		</>
	)
}
