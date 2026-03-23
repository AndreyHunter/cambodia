import styles from './container.module.scss';
import type { ReactNode } from 'react';

interface Container {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: Container) => {
	return <div className={`${styles.root} ${className}`}>{children}</div>;
};
