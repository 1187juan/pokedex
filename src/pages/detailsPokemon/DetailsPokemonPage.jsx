import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Title } from '../../components/common'
import { getPokemon } from '../../services'
import styles from './DetailsPokemonPage.module.scss'

export const DetailsPokemonPage = () => {
	const { pokemonId } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	const [pokemon, setPokemon] = useState(null)

	useEffect(() => {
		const task = async () => {
			try {
				const data = await getPokemon(pokemonId)
				setPokemon(data)
			} catch (error) {
				alert(error.message)
			}
			setIsLoading(false)
		}
		task()
	}, [])

	if (isLoading) return <div>cargando...</div>

	return (
		<>
			<div className={styles.banner} />
			<div className={styles.container}>
				<img src={pokemon.imgUrl} alt='title' className={styles.img} />
				<Title>{pokemon.name}</Title>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<p>Experiencia base</p>
						<Title variant='h5' component='p'>
							{pokemon.baseExperience}
						</Title>
					</li>
					<li className={styles.listItem}>
						<p>Altura</p>
						<Title variant='h5' component='p'>
							{pokemon.height}
						</Title>
					</li>
					<li className={styles.listItem}>
						<p>Peso</p>
						<Title variant='h5' component='p'>
							{pokemon.weight}
						</Title>
					</li>
				</ul>
			</div>
		</>
	)
}
