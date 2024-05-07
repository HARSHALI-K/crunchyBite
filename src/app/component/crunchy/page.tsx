"use client"
import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import Pizza from '../pages/pizza/page';
import Barbecue from '../pages/barbucue/page';
import Cheddar from '../pages/cheddar/page';
import FriedChicken from '../pages/fried-chicken/page';
import Paprika from '../pages/paprika/page';
import Shishkebab from '../pages/shishkebab/page';
import Navbar from '../navbar/page';
import FixedBottomNavigation from '../footer/page';
import Lemon from '../pages/lemon/page';

const components = [<FriedChicken />, <Pizza />, <Barbecue />, <Cheddar />, <Lemon />, <Shishkebab />, <Paprika />]; 
const colors = ['#000000', '#59A125',  '#000000', '#B39846', '#3EAA06','#930DE5','#5D42FF'];

const transitionDuration = 1; // Transition duration in seconds
const transitionDelay = 200; // Delay before updating index in milliseconds

const MyCarousel = () => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef(null);

    const handleSlideChange = (newIndex) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIndex(newIndex);
            setIsTransitioning(false);
        }, transitionDelay);
    };

    const handleWheel = (event) => {
        const delta = Math.sign(event.deltaY);
        const newIndex = (index - delta + components.length) % components.length; // Update index based on scroll direction
        handleSlideChange(newIndex);
    };

    return (
        <>
            <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors[index], overflow: 'hidden' }} onWheel={handleWheel}>
                <Navbar />
                <div style={{ textAlign: 'center', marginRight: '20px', transition: `transform ${isTransitioning ? transitionDuration : 0}s ease` }}>
                    {components[index]}
                </div>
                <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column' }}>
                    {components.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => handleSlideChange(i)}
                            style={{
                                margin: '5px',
                                minWidth: '20px',
                                width: '20px',
                                height: '20px',
                                borderRadius: '100%',
                                cursor: 'pointer',
                                backgroundColor: i === index ? 'orange' : 'white',
                            }}
                        >
                        </div>
                    ))}
                </div>
                <FixedBottomNavigation />
            </div>
        </>
    );
};

export default MyCarousel;
