import { PokemonsProvider } from './contexts/PokemonsProvider'
import { AppRouter } from './routers/AppRouter'

export const App = () => {
	return (
		<>
			<PokemonsProvider>
				<AppRouter />
			</PokemonsProvider>
		</>
	)
}
