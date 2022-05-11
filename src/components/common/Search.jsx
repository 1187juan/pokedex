import styles from './Search.module.scss'
import SearchIcon from '../../assets/svgs/icons/search.svg?component'
import {
	createSearchParams,
	useNavigate,
	useSearchParams,
} from 'react-router-dom'
import { useRef } from 'react'

export const Search = () => {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const inputRef = useRef()
	const beforeSearch = searchParams.get('search') ?? ''

	const handleSubmit = (e) => {
		e.preventDefault()
		inputRef.current.blur()
	}

	const handleChange = (e) => {
		const value = e.target.value
		const search = createSearchParams({ search: value }).toString()

		navigate({
			pathname: '/',
			search,
		})
	}

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Búscar...'
				className={styles.input}
				value={beforeSearch}
				onChange={handleChange}
				ref={inputRef}
			/>
			<button type='submit' className={styles.button}>
				<SearchIcon className={styles.svg} />
			</button>
		</form>
	)
}
