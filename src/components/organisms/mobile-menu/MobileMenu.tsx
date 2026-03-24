import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const navItems = [
	{ label: 'Home page', path: '/' },
	{ label: 'About us', path: '/about' },
	{ label: 'Services', path: '/services' },
	{ label: 'Projects', path: '/projects' },
	{ label: 'Career', path: '/career' },
	{ label: 'Blog', path: '/blog' },
	{ label: 'Contacts', path: '/contacts' },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	const classes = clsx(styles.root, isOpen && styles.open);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return createPortal(
		<div className={classes}>
			<div className={styles.inner}>
				<nav>
					<ul className={styles.list}>
						{navItems.map(({ label, path }) => (
							<li key={path}>
								<Link
									to={path}
									className={styles.link}
									onClick={onClose}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>,
		document.getElementById('root')!
	);
};
