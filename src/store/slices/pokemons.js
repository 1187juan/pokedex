import { createSlice } from '@reduxjs/toolkit'
import { getPokemons } from '../../services'

export const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState: {
		count: null,
		next: null,
		previous: null,
		results: [],
		isLoading: true,
	},
	reducers: {
		addPokemons: (state, action) => {
			if (state.results?.[0]?.id !== action.payload.results[0].id) {
				state.count = action.payload.count
				state.next = action.payload.next
				state.previous = action.payload.previous
				state.results = [...state.results, ...action.payload.results]
			}
		},
		loadingPokemons: (state, action) => {
			state.isLoading = action.payload
		},
	},
})

export const { addPokemons, loadingPokemons } = pokemonsSlice.actions

export const pokemons = pokemonsSlice.reducer

export const fetchPokemons = (query) => async (dispatch) => {
	try {
		dispatch(loadingPokemons(true))
		const pokemons = await getPokemons(query)
		dispatch(addPokemons(pokemons))
	} catch (error) {
		alert(error.message)
	}
	dispatch(loadingPokemons(false))
}
