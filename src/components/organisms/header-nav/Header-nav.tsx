import styles from './header-nav.module.scss';

export const HeaderNav = () => {
	return (
		<nav className={styles.root}>
			<ul className={styles.list}>
				<li>
					<a href="/">Home page</a>
				</li>
				<li>
					<a href="/about">About us</a>
				</li>
				<li>
					<a href="/services">Services</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/career">Career</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/contacts">Contacts</a>
				</li>
			</ul>
		</nav>
	);
};
