import clsx from 'clsx';

import styles from './burger.module.scss';

interface BurgerProps {
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
}

export const Burger = ({ className, onClick, isActive }: BurgerProps) => {
    const classes = clsx(styles.root, className, isActive && styles.active);

    return (
        <button className={classes} onClick={onClick}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    );
};