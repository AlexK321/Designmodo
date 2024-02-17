import { useContext, useEffect } from 'react';
import gsap from 'gsap';

import { Context } from '../../App';
import { Button } from '../../core/Button/Button';
import { Slider } from '../../core/Slider/Slider';

import { SLIDER_OPTIONS } from './Tools.constants';

import { ButtonContainer, ToolsWrapper } from './Tools.styles';

export const Tools = () => {
  const [animationOptions, setAnimationOptions] = useContext<any>(Context);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: any) => {
    setAnimationOptions((prev: any) => ({
      ...prev,
      options: {
        ...prev.options,
        [prev.currentElementId]: { ...prev.options[prev.currentElementId], [e.target.name]: e.target.value },
      },
    }));
  };

  const startAnimation = () => {
    const element = document.getElementById(animationOptions.currentElementId);
    gsap.to(element, { duration: 1, x: 100, opacity: 0.5 });
  };

  return (
    <ToolsWrapper>
      {SLIDER_OPTIONS.map(slider => (
        <Slider key={slider.name} onChange={handleChange} {...slider} />
      ))}
      <ButtonContainer>
        <Button onClick={startAnimation} variant="small">
          Start animation
        </Button>
        <Button
          onClick={() => localStorage.setItem('animationOptions', JSON.stringify(animationOptions))}
          variant="small"
        >
          Save in storage
        </Button>
        <Button onClick={() => localStorage.clear()} variant="small">
          Reset all
        </Button>
      </ButtonContainer>
    </ToolsWrapper>
  );
};
