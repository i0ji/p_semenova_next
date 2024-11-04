'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Slides() {
    const [slides, setSlides] = useState<SlideModel[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('/pages/api/slides');
                if (!response.ok) {
                    console.log(response);
                    throw new Error('Ошибка при загрузке слайдов');
                }
                const data = await response.json();
                setSlides(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        fetchSlides();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Слайды</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {slides.map((slide) => (
                    <div key={slide.id} style={{ margin: '10px' }}>
                        <h3>{slide.slide_name}</h3>
                        {slide.image_path &&
                            <Image src={slide.image_path} alt={slide.slide_name} width={300} />
                        }
                        {slide.description && <p>{slide.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};
