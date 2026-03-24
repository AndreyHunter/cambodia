import { useSwiper } from 'swiper/react';
import styles from './slider-controls.module.scss';

interface SliderControlsProps {
	currentSlide: number;
	totalSlides: number;
}

export const SliderControls = ({ currentSlide, totalSlides }: SliderControlsProps) => {
	const swiper = useSwiper();

	const handlePrev = () => swiper?.slidePrev();
	const handleNext = () => swiper?.slideNext();

	const formatNumber = (num: number) => num.toString().padStart(2, '0');

	const progressPercentage = ((currentSlide) / totalSlides) * 100;

	return (
		<div className={styles.root}>
			<span className={styles.label}>Next project</span>
			<div className={styles.navigation}>
				<button onClick={handlePrev} className={styles.arrowButton} aria-label="Previous Slide">
					<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 1L1 12L11 23" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
				<div className={styles.pagination}>
					<span className={styles.current}>{formatNumber(currentSlide)}</span>
					<div className={styles.line}>
						<div className={styles.progress} style={{ width: `${progressPercentage}%` }}></div>
					</div>
					<span className={styles.total}>{formatNumber(totalSlides)}</span>
				</div>
				<button onClick={handleNext} className={styles.arrowButton} aria-label="Next Slide">
					<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
						<path d="M11 1L1 12L11 23" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
		</div>
	);
};