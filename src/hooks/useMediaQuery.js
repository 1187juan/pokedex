import { useEffect, useState } from 'react'

export const useMediaQuery = (mediaQuery) => {
	const [matches, setMatches] = useState(() => matchMedia(mediaQuery).matches)

	useEffect(() => {
		const resize = () => {
			const mql = matchMedia(mediaQuery)
			if (mql.matches !== matches) setMatches(mql.matches)
		}

		addEventListener('resize', resize)

		return () => removeEventListener('resize', resize)
	}, [mediaQuery, matches])

	return matches
}
