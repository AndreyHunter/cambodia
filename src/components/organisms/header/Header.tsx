import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { HeaderNav } from '@components/organisms/header-nav/Header-nav';
import { Container } from '@components/helpers/container/Container';
import { Logo } from '@components/atoms/logo/Logo';
import { Burger } from '@components/atoms/burger/Burger';

import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const classes = clsx(styles.root, className);

    return (
        <header className={classes}>
            <Container>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <Logo />
                        <HeaderNav />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.socials}>
                            <Link to="/instagram">INSTAGRAM</Link>
                            <Link to="/facebook">FACEBOOK</Link>
                            <Link to="/pinterest">PINTEREST</Link>
                        </div>
                        <Burger
                            className={styles.burger}
                            isActive={isMenuOpen}
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
};
