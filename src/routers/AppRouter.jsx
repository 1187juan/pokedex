import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, MenuButton } from '../components/layouts'
import { DetailsPokemonPage, Error404Page, HomePage } from '../pages'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/pokemon/:pokemonId' element={<DetailsPokemonPage />} />
				<Route path='/*' element={<Error404Page />} />
			</Routes>
			<MenuButton />
		</BrowserRouter>
	)
}
