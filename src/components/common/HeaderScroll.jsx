import { useEffect, useRef } from 'react'
import styles from './HeaderScroll.module.scss'

const limitRange = (num, bottomLimit) => {
	if (num > 0) return 0
	if (num < bottomLimit) return bottomLimit
	return num
}

export const HeaderScroll = ({ children }) => {
	const ref = useRef()

	useEffect(() => {
		const scroll = () => {
			const element = ref.current
			const { top } = element.getBoundingClientRect()
			const scrollYBefore = Number(element.getAttribute('data-scrollY')) ?? 0
			const { scrollY } = window
			const translateY = scrollYBefore - scrollY
			const positionY = top + translateY
			const elementHeight = element.clientHeight
			const topAfter = limitRange(positionY, elementHeight * -1)

			element.style.top = topAfter + 'px'
			element.setAttribute('data-scrollY', scrollY)
		}

		document.addEventListener('scroll', scroll)

		return () => document.removeEventListener('scroll', scroll)
	}, [])

	useEffect(() => {
		let timeout = null
		let timeoutTransitionReset = null
		const scroll = () => {
			timeout && clearTimeout(timeout)
			timeout = setTimeout(() => {
				const element = ref.current
				const { top } = element.getBoundingClientRect()
				const elementHeight = element.clientHeight
				const isHide = elementHeight / 2 < top * -1

				element.style.transition = 'top 0.1s ease'

				isHide
					? (element.style.top = elementHeight * -1 + 'px')
					: (element.style.top = 0)

				timeoutTransitionReset && clearTimeout(timeoutTransitionReset)
				timeoutTransitionReset = setTimeout(
					() => (element.style.transition = 'none'),
					100
				)
			}, 200)
		}

		document.addEventListener('scroll', scroll)

		return () => document.removeEventListener('scroll', scroll)
	}, [])

	return (
		<header className={styles.header} ref={ref}>
			{children}
		</header>
	)
}
