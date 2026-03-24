import type { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './container.module.scss';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
	const classes = clsx(styles.root, className);

	return <div className={classes}>{children}</div>;
};