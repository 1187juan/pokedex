const API = import.meta.env.VITE_POKEMONS_API

export const getPokemon = async (id) => {
	const res = await fetch(`${API}/pokemon/${id}`)
	if (!res.ok)
		throw new Error('Error al cargar el Pokémon, intentalo más tarde.')

	const data = await res.json()
	const { name, height, base_experience: baseExperience, weight } = data
	const { front_default: imgUrl } = data.sprites.other.dream_world

	return { name, id, imgUrl, height, baseExperience, weight }
}
