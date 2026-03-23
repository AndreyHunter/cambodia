import styles from './logo.module.scss';

interface Logo {
	className?: string;
}

export const Logo = ({ className }: Logo) => {
	return (
		<a href="/" className={`${styles.logo} ${className}`}>
			<div className={styles.logoText}>
				<span className={styles.logoMain}>Cambodia</span>
				<div className={styles.logoSubWrapper}>
					<span className={styles.logoSub}>interior</span>
					<div className={styles.line}></div>
				</div>
			</div>
		</a>
	);
};
