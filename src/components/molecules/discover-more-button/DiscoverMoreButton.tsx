import { Link } from 'react-router-dom';

import styles from './discover-more-button.module.scss';

export const DiscoverMoreButton = () => {
	return (
        <Link to="/about" className={styles.root}>
            <div className={styles.discoverCircle}>
                <div className={styles.contentWrapper}>
                    <span className={styles.discoverText}>Discover more</span>
                    <div className={styles.arrowLine}>
                        <svg
                            width="120"
                            height="12"
                            viewBox="0 0 120 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 6H119M119 6L114 1M119 6L114 11"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};
