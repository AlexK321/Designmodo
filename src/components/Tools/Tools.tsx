import { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Context } from '../../App';
import { PREVIEW_ID_PREFIX } from '../../constants';
import { Button } from '../../core/Button/Button';
import { Option } from '../../core/Option/Option';
import { getDefaultValue } from '../Content';

import { DEFAULT_SLIDER_OPTIONS } from './Tools.constants';

import { ButtonContainer, SavingContainer, ToolsWrapper } from './Tools.styles';

type TOption = 'top' | 'left' | 'opacity' | 'transform' | 'filter';

export const Tools = () => {
  const elementRef = useRef<any>();
  const [animationOptions, setAnimationOptions] = useContext<any>(Context);
  useEffect(() => {
    setAnimationOptions(
      JSON.parse(localStorage.getItem('animationOptions') || '{"currentElementId": null, "options": {}}'),
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('animationOptions', JSON.stringify({ ...animationOptions, currentElementId: null }));
  }, [Object.values(animationOptions.options)]);

  const currentOptions = animationOptions.options?.[animationOptions.currentElementId] || {};

  let preparingOptions = DEFAULT_SLIDER_OPTIONS;
  useEffect(() => {
    preparingOptions = DEFAULT_SLIDER_OPTIONS.map(item => ({
      ...item,
      value: currentOptions[item.name] || item.defaultValue,
    }));
  }, [animationOptions.currentElementId]);

  const handleChange = (e: any) => {
    if (!animationOptions.currentElementId) {
      alert('Please select element');
      return;
    }
    console.log(234234234, e.target.name, e.target.checked, e.target.value);
    setAnimationOptions((prev: any) => ({
      ...prev,
      options: {
        ...prev.options,
        [prev.currentElementId]: {
          ...prev.options[prev.currentElementId],
          [e.target.name]: e.target.name === 'repeat' ? e.target.checked : e.target.value,
        },
      },
    }));
  };

  const handleReset = () => {
    localStorage.clear();
    setAnimationOptions({ currentElementId: null, options: {} });
    window.location.reload();
  };

  const startAnimation = (e: any) => {
    const elementId = e.target.id.replace('start-', '');
    const element = document.getElementById(elementId);
    elementRef.current = element;

    console.log(element);

    if (element) {
      const secondElement = document.getElementById(`${PREVIEW_ID_PREFIX}${elementId}`);

      if (animationOptions.currentElementId === elementId && secondElement) {
        if (secondElement.parentNode) secondElement.parentNode.insertBefore(element, secondElement);
        element.style.position = 'relative';

        const currentOptions = animationOptions.options?.[animationOptions.currentElementId] || {};
        Object.entries(currentOptions)
          .filter(item => item[0] !== 'repeat' && item[0] !== 'duration' && item[0] !== 'delay' && item[0] !== 'speed')
          .forEach(([key]) => {
            element.style[key as TOption] = getDefaultValue(key);
          });

        secondElement.remove();
        setAnimationOptions((prev: any) => ({ ...prev, currentElementId: null }));
      }
    }

    const options = animationOptions.options?.[elementId] || {};
    gsap.killTweensOf(elementRef.current);
    console.log(element);
    gsap.to(element, {
      x: options.left,
      y: options.bottom * -1,
      opacity: options.opacity / 100,
      filter: `blur(${options.filter}px)`,
      repeat: options.repeat ? 1000 : 0,
      duration: 10 / (options.speed || 10),
      // delay: 10 / (options.delay || 10),
      ease: options.easing || 'none',
      scale: options.transform,
    });
  };

  const startAllAnimations = () => {
    Object.entries(animationOptions.options).forEach(([key]) => {
      if (key !== animationOptions.currentElementId) {
        startAnimation({ target: { id: key } });
      }
    });
  };

  return (
    <ToolsWrapper>
      <p style={{ textAlign: 'center' }}>
        {animationOptions.currentElementId ? (
          `Current element: ${animationOptions.currentElementId}`
        ) : (
          <span style={{ color: '#ba6645' }}>Please choose element</span>
        )}
      </p>
      {preparingOptions.map(slider => (
        <Option key={slider.name} onChange={handleChange} {...slider} />
      ))}
      <ButtonContainer>
        <Button onClick={handleReset} variant="small" fullwidth="true">
          Reset all
        </Button>
        Start animations:
        <Button onClick={startAllAnimations} variant="small" key={'S_A'} fullwidth="true">
          Start all
        </Button>
        {Object.entries(animationOptions.options).map(item => (
          <Button onClick={startAnimation} variant="small" key={item[0]} id={`start-${item[0]}`} fullwidth="true">
            {item[0]}
          </Button>
        ))}
      </ButtonContainer>
    </ToolsWrapper>
  );
};
