import styles from './Header.module.scss';
import { HeaderNav } from '../header-nav/Header-nav';
import { Container } from '../../helpers/container/Container';
import { Logo } from '../../atoms/logo/Logo';

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps) => {
	return (
		<header className={`${styles.header} ${className}`}>
			<Container className={styles.container}>
				<div className={styles.container}>
					<div className={styles.block}>
						<Logo />

						<HeaderNav />
					</div>
					<div className={styles.socials}>
						<a href="#instagram">INSTAGRAM</a>
						<a href="#facebook">FACEBOOK</a>
						<a href="#pinterest">PINTEREST</a>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
