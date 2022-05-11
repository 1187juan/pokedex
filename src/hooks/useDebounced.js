import { useEffect, useState } from 'react'

export const useDebounced = (initialValue, delay = 350) => {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		const timeout = setTimeout(() => setValue(initialValue), delay)

		return () => clearTimeout(timeout)
	}, [delay, initialValue])

	return value
}
