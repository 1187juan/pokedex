import { useSearchParams } from 'react-router-dom'
import { SearchResults } from '../../components/layouts'
import { PokemonsGrid } from '../../components/layouts/PokemonsGrid'
import { useDebounced } from '../../hooks'

export const HomePage = () => {
	const [serachParams] = useSearchParams()
	const search = serachParams.get('search')
	const searchDebounced = useDebounced(search) ?? null

	if (searchDebounced)
		return <SearchResults search={searchDebounced} key={searchDebounced} />

	return <PokemonsGrid />
}
