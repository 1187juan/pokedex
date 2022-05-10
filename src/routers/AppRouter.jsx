import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetailsPokemonPage, Error404Page, HomePage } from '../pages'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/pokemon/:pokemonId' element={<DetailsPokemonPage />} />
				<Route path='/*' element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	)
}
