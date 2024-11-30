import React, { useState, useEffect, useRef } from 'react';
import homeRestaurantImage from '../../assets/images/home_restaraunt.jpg';
import styles from './AboutUs.module.css';

export const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);  // Ссылка на элемент, который нужно отслеживать

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Если элемент видим, меняем состояние
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Элемент должен быть на 50% видимым для активации
        );

        // Начинаем отслеживание элемента
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current); // Очищаем отслеживание
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`${styles.main_container} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.info_container}>
                <div className={styles.header_container}>About Us</div>
                <div className={styles.text_container}>
                    Looking for the perfect place to eat? Our TasteTrail helps you find a wide range of restaurants, from cozy local spots to elegant fine dining. Whether you're craving Italian, sushi, or something new, we've got you covered. Explore reviews, menus, and ratings to make informed decisions and enjoy your next meal out. Let us help you find the best dining experiences nearby!
                </div>
            </div>
            <div className={styles.image_container}>
                <img className={styles.image} src={homeRestaurantImage} alt="Restaurant" />
            </div>
        </div>
    );
}
