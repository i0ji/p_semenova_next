'use client'

import { SlideModel } from '@/services/declarations';
import { useEffect, useState } from 'react';

const Slides = () => {
    const [slides, setSlides] = useState<SlideModel[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('/api/slides'); // Убедитесь, что путь правильный

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
                }

                const data: SlideModel[] = await response.json();
                setSlides(data);
            } catch (err) {
                console.error('Ошибка при загрузке слайдов:', err);
                setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
            }
        };

        fetchSlides();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {slides.map(slide => (
                <div key={slide.id}>
                    <h2>{slide.slide_name}</h2>
                    <p>{slide.description}</p>
                    <img src={slide.image_path} alt={slide.slide_name} />
                </div>
            ))}
        </div>
    );
};

export default Slides;
