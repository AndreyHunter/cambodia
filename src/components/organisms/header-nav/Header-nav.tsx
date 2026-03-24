import { Link } from 'react-router-dom';

import styles from './header-nav.module.scss';

export const HeaderNav = () => {
	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<Link to="/">Home page</Link>
				</li>
				<li>
					<Link to="/about">About us</Link>
				</li>
				<li>
					<Link to="/services">Services</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/career">Career</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/contacts">Contacts</Link>
				</li>
			</ul>
		</nav>
	);
};
