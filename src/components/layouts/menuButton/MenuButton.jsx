import { useState } from 'react'
import { Drawer } from '../../common'
import styles from './MenuButton.module.scss'
import MenuIcon from '../../../assets/svgs/icons/menu.svg?component'
import { Menu } from './Menu'

export const MenuButton = () => {
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const handleOpen = () => setOpen(true)

	return (
		<>
			<button onClick={handleOpen} className={styles.button}>
				<MenuIcon />
			</button>
			<Drawer open={open} onClose={handleClose}>
				<Menu onClick={handleClose} />
			</Drawer>
		</>
	)
}
