// components/Slide.tsx
"use client"
import React from 'react';
import styled from '@emotion/styled';
import { Spring } from 'react-spring/renderprops';

interface SlideProps {
  content: React.ReactNode;
  index: number;
  onChange: (index: number) => void;
}

const SlideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideCard = styled.div`
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Slide: React.FC<SlideProps> = ({ content, index, onChange }) => {
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      onChange(index + 1);
    } else if (event.deltaY < 0) {
      onChange(index - 1);
    }
  };

  return (
    <Spring
      from={{ opacity: 0, transform: 'translateY(-50%) scale(0.5)' }}
      to={{ opacity: 1, transform: 'translateY(-50%) scale(1)' }}
    >
      {props => (
        <SlideContainer style={props} onWheel={handleWheel}>
          <SlideCard>
            {content}
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
};

export default Slide;
