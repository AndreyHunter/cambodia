import { useState } from 'react';
import styles from './Header.module.scss';
import { HeaderNav } from '@components/organisms/header-nav/Header-nav';
import { Container } from '@components/helpers/container/Container';
import { Logo } from '@components/atoms/logo/Logo';
import { Burger } from '@components/atoms/burger/Burger';

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header className={`${styles.header} ${className}`}>
			<Container>
				<div className={styles.container}>
					<div className={styles.block}>
						<Logo />

						<HeaderNav />
					</div>
					<div className={styles.right}>
						<div className={styles.socials}>
							<a href="#instagram" className={styles.socialLink}>
								INSTAGRAM
							</a>
							<a href="#facebook" className={styles.socialLink}>
								FACEBOOK
							</a>
							<a href="#pinterest" className={styles.socialLink}>
								PINTEREST
							</a>
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

export default Header;
