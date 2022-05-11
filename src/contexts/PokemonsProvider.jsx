import { createContext, useContext, useEffect, useState } from 'react'
import { getPokemons } from '../services'

const PokemonsContext = createContext()
export const usePokemons = () => useContext(PokemonsContext)

export const PokemonsProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemons, setPokemons] = useState({
		count: null,
		next: null,
		previous: null,
		results: [],
	})

	const addPokemons = (pokemonsNew) =>
		setPokemons((prev) => ({
			...pokemonsNew,
			results: [...prev.results, ...pokemonsNew.results],
		}))

	useEffect(() => {
		const task = async () => {
			try {
				const data = await getPokemons()
				addPokemons(data)
			} catch (error) {
				alert(error.message)
			}
			setIsLoading(false)
		}
		task()
	}, [])

	const value = { pokemons, addPokemons, isLoading }
	return (
		<PokemonsContext.Provider value={value}>
			{children}
		</PokemonsContext.Provider>
	)
}
