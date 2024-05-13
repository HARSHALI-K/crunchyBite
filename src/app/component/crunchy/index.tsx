"use client"
import React, { useState, useEffect, useRef } from 'react';
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
import { motion } from 'framer-motion';
import { useSearchParams  } from 'next/navigation';
const components = [<FriedChicken />, <Pizza />, <Barbecue />, <Cheddar />, <Lemon />, <Shishkebab />, <Paprika />]; 
const colors = ['#000000', '#59A125',  '#000000', '#B39846', '#3EAA06','#930DE5','#5D42FF'];

const transitionDuration = 1; // Transition duration in seconds
const transitionDelay = 200; // Delay before updating index in milliseconds
const debounceDelay = 50; // Delay before handling scroll stop

const MyCarousel = () => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const scrollRef = useRef(null);
    let scrollTimeout = useRef(null);
    const [index, setIndex] = useState(0);

    const searchParams = useSearchParams()

    const indexValue = searchParams.get('index')

    useEffect(() => {
        setIndex(Number(indexValue));
    },[indexValue])
    useEffect(() => {
        const handleWheel = (event) => {
            const delta = Math.sign(event.deltaY);
            const maxIndex = components.length - 1;
            const minIndex = 0;

            // if ((delta === -1 && index < maxIndex) || (delta === 1 && index > minIndex)) {
                event.preventDefault();
                const newIndex = index + delta;
                
                debounce(handleScrollStop, debounceDelay);

            // }
        };

        const handleScrollStop = () => {
            console.log("Scroll stopped",components.length-1,index);
            const len = components.length === index ? components.length - 1 : index + 1;
            handleSlideChange(len);
        };

        const debounce = (func, delay) => {
            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(func, delay);
        };

        const handleScroll = () => {
            debounce(handleScrollStop, debounceDelay);
        };

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [index]);
    

     
    useEffect(() => {
        let touchStartY = 0;
        let touchEndY = 0;
    
        const handleTouchStart = (event) => {
            // console.log('hello scroll start');

            touchStartY = event.touches[0].clientY;
        };
    
        const handleTouchMove = (event) => {
            touchEndY = event.touches[0].clientY;
        };
    
        const handleTouchEnd = () => {
            // console.log('hello  world ')
            const deltaY = touchEndY - touchStartY;
            const deltaThreshold = 50; // Minimum vertical distance for a swipe to be considered
            // console.log('hello scroll end');

            if (Math.abs(deltaY) >= deltaThreshold) {
                const delta = Math.sign(deltaY);
                const newIndex = index - delta; // Change this line to match your desired scroll direction
                if (newIndex >= 0 && newIndex < components.length) {
                    // console.log(newIndex)
                    handleSlideChange(newIndex);
                }
            }
        };
    
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [index]);
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            if (key === 'ArrowDown' && index < components.length - 1) {
                event.preventDefault();
                handleSlideChange(index + 1);
            } else if (key === 'ArrowUp' && index > 0) {
                event.preventDefault();
                handleSlideChange(index - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [index]);
    const handleSlideChange = (newIndex) => {
        console.log('hello scroll up');
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setIndex(newIndex);
            setIsTransitioning(false);
        }, transitionDelay);
    };
    const handleScrollDown = () => {
        if (index < components.length - 1) {
            handleSlideChange(index + 1);
        }
    };
    return (
        <>
            <div className='height-main' style={{ position: 'relative',  display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors[index], overflow: 'hidden' }}>
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
                {index < components.length - 1 && (
                    <div  style={{ position: 'absolute', bottom: '10%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', cursor: 'pointer' }} onClick={handleScrollDown}>
                        <motion.img style={{ width: "80%" }} src="/images/down-arrow.png" alt="" animate={{
                            y: [-5, 0, -5],
                            transition: { duration: 2.1, repeat: Infinity },
                        }} />
                        <span style={{color:"white"}}>Scroll Down</span>
                    </div>
                )}

                <FixedBottomNavigation />
            </div>
        </>
    );
};

export default MyCarousel;
