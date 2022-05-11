import { getPokemon } from './getPokemon'

const API = import.meta.env.VITE_POKEMONS_API

export const getPokemons = async (query = `${API}/pokemon`) => {
	const res = await fetch(query)
	if (!res.ok) throw new Error('Error al traer Pokémones, intentalo más tarde.')
	const data = await res.json()

	const pokemonsPromise = data.results.map((pokemon) => {
		const pokemonId = pokemon.url.split('/')[6]
		return getPokemon(pokemonId)
	})

	const results = await Promise.all(pokemonsPromise)

	return { ...data, results }
}
