import styles from './burger.module.scss';

interface BurgerProps {
	className?: string;
	onClick?: () => void;
	isActive?: boolean;
}

export const Burger = ({ className, onClick, isActive }: BurgerProps) => {
	return (
		<button
			className={`${styles.root} ${className} ${isActive ? styles.active : ''}`}
			onClick={onClick}
		>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	);
};
