import type { Swiper as SwiperType } from 'swiper';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import { SliderControls } from '@components/molecules/slider-controls/SliderControls';
import { DiscoverMoreButton } from '@components/molecules/discover-more-button/DiscoverMoreButton';
import clsx from 'clsx';

import mainImg1 from '@assets/images/img1.png';
import mainImg2 from '@assets/images/img2.png';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import styles from './hero-section.module.scss';

interface HeroSectionProps {
    className?: string;
}

const slidesData = [
    {
        id: 1,
        title: 'Cambodia',
        leftImage: mainImg1,
        rightImage: mainImg2,
        description: 'Minimalism in dark colors \nwith oriental motifs...',
    },
    {
        id: 2,
        title: 'Cambodia',
        leftImage: mainImg2,
        rightImage: mainImg1,
        description: 'Modern elegance \nwith natural materials...',
    },
];

export const HeroSection = ({ className = '' }: HeroSectionProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const classes = clsx(styles.root, className);

    return (
        <section className={classes}>
            <Swiper
                modules={[EffectFade, Navigation]}
                effect="fade"
                speed={1200}
                className={styles.swiper}
                onSlideChange={(swiper: SwiperType) =>
                    setActiveIndex(swiper.realIndex)
                }
                loop
            >
                <div className={styles.staticUI}>
                    <div className={styles.staticLeft}>
                        <div className={styles.leftOverlayItems}>
                            <div className={styles.langSwitch}>
                                <span className={styles.langLine}></span>
                                EN
                            </div>
                            <div className={styles.controlsWrapper}>
                                <SliderControls
                                    currentSlide={activeIndex + 1}
                                    totalSlides={slidesData.length}
                                />
                            </div>
                        </div>
                        <div className={styles.centerTextWrapper}>
                            <div className={styles.titleBlock}>
                                <h1 className={styles.mainTitle}>Cambodia</h1>
                                <h1 className={styles.outlineTitle}>
                                    Cambodia
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.staticRight}>
                        <div className={styles.discoverButtonWrapper}>
                            <DiscoverMoreButton />
                        </div>
                    </div>
                </div>

                {slidesData.map((slide, index) => (
                    <SwiperSlide key={slide.id} className={styles.slide}>
                        <div className={styles.slideContent}>
                            <div className={styles.leftColumn}>
                                <img
                                    src={slide.leftImage}
                                    alt="Interior representation"
                                    className={styles.bgImg}
                                />
                            </div>
                            <div className={styles.rightColumn}>
                                <img
                                    src={slide.rightImage}
                                    alt="Details representation"
                                    className={styles.bgImg}
                                />
                                <div className={styles.darkOverlay}></div>
                                <div className={styles.descriptionBox}>
                                    <span className={styles.slideNumber}>
                                        {(index + 1)
                                            .toString()
                                            .padStart(2, '0')}
                                    </span>
                                    <p className={styles.descriptionText}>
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
