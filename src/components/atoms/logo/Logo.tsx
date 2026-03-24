import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './logo.module.scss';

interface LogoProps {
	className?: string;
}

export const Logo = ({ className }: LogoProps) => {
	const classes = clsx(styles.root, className);

	return (
		<Link to="/" className={classes}>
			<div className={styles.text}>
				<span className={styles.rootMain}>Cambodia</span>
				<div className={styles.rootSubWrapper}>
					<span className={styles.rootSub}>interior</span>
					<div className={styles.line}></div>
				</div>
			</div>
		</Link>
	);
};