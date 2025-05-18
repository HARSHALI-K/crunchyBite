
"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
// import Pizza from '@/app/component/app/pages/pizza/page';
import Barbecue from '@/app/component/pages/barbucue/page';
import Cheddar from '@/app/component/pages/cheddar/page';
import FriedChicken from '@/app/component/pages/fried-chicken/page';
import Paprika from '@/app/component/pages/paprika/page';
import Shishkebab from '@/app/component/pages/shishkebab/page';
// import NavbarBG from '../navbar-bg/page';
//import FixedBottomNavigation from '../footer/page';

import Lemon from '@/app/component/pages/lemon/page';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import NavbarBG from '@/app/component/navbar-bg/page';
import Navbar from '@/app/component/navbar/page';
import FixedBottomNavigation from '@/app/component/footer/page';
import Pizza from '@/app/component/pages/pizza/page';

const components = [<FriedChicken />, <Pizza />, <Barbecue />, <Cheddar />, <Lemon />, <Shishkebab />, <Paprika />];
const colors = ['#000000', '#59A125', '#000000', '#B39846', '#3EAA06', '#930DE5', '#5D42FF'];

const transitionDuration = 1;
const transitionDelay = 200;
const scrollDelay = 30000; // 30 seconds delay

const MyCarousel = () => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [scrollDisabled, setScrollDisabled] = useState(false);
    const [touchStartY, setTouchStartY] = useState(null);

    const searchParams = useSearchParams();
    const indexValue = searchParams.get('index');

    useEffect(() => {
        setIndex(Number(indexValue));
    }, [indexValue]);

    useEffect(() => {
        const handleWheel = (event) => {
            if (isTransitioning || scrollDisabled) return;
            const delta = Math.sign(event.deltaY);
            const newIndex = index + delta;
            const maxIndex = components.length - 1;
            const minIndex = 0;
            if (newIndex < minIndex || newIndex > maxIndex) return;

            setIsTransitioning(true);
            setScrollDisabled(true);

            setTimeout(() => {
                setIndex(newIndex);
            }, transitionDelay);

            setTimeout(() => {
                setIsTransitioning(false);
                setScrollDisabled(false);
            }, transitionDelay + transitionDuration * 1000);

            setTimeout(() => {
                setScrollDisabled(false);
            }, scrollDelay);
        };

        const handleTouchStart = (event) => {
            if (isTransitioning || scrollDisabled) return;
            setTouchStartY(event.touches[0].clientY);
        };

        const handleTouchMove = (event) => {
            if (!touchStartY || isTransitioning || scrollDisabled) return;
            const deltaY = event.touches[0].clientY - touchStartY;
            if (Math.abs(deltaY) > 50) {
                const delta = Math.sign(deltaY);
                const newIndex = index - delta;
                const maxIndex = components.length - 1;
                const minIndex = 0;
                if (newIndex >= minIndex && newIndex <= maxIndex) {
                    setIndex(newIndex);
                    setTouchStartY(null);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [index, isTransitioning, scrollDisabled, touchStartY]);

    const handleScrollDown = () => {
        const nextIndex = (index + 1) % components.length;
        setIndex(nextIndex);
    };

    return (
        <div className='height-main' style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors[index], overflow: 'hidden' }}>
            <Navbar />
            <div style={{ textAlign: 'center', marginRight: '20px', transition: `transform ${isTransitioning ? transitionDuration : 0}s ease` }}>
                {components[index]}
            </div>
            <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column' }}>
                {components.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{
                            margin: '5px',
                            minWidth: '20px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '100%',
                            cursor: 'pointer',
                            backgroundColor: i === index ? 'orange' : 'white',
                        }}
                    />
                ))}
            </div>
            {index !== 6 && (<div style={{ position: 'absolute', bottom: '10%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', cursor: 'pointer' }} onClick={handleScrollDown}>
                <motion.img style={{ width: "80%" }} src="/images/down-arrow.png" alt="" animate={{
                    y: [-5, 0, -5],
                    transition: { duration: 2.1, repeat: Infinity },
                }} />
                <span style={{ color: "white" }}>Scroll Down</span>
            </div>)}
            <div className="floating-whatsapp-icon">
      <motion.a 
      href="https://wa.me/971521746423" 
      target="_blank" 
        rel="noopener noreferrer" 
        animate={{
          y: [-10, 0, -10],
          transition: { duration: 2.1, repeat: Infinity },
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#25d366",
          borderRadius: "50%",
          color: "white",
          textAlign: "center",
          fontSize: "30px",
          boxShadow: "2px 2px 3px #999",
        }}
      >
        <i className="fab fa-whatsapp" style={{color:'white'}}></i>
      </motion.a>
    </div>
            <FixedBottomNavigation />
        </div>
    );
};

export default MyCarousel;
