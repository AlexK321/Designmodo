import { useContext } from 'react';
import gsap from 'gsap';

import { Context } from '../App';
import { PREVIEW_ID_PREFIX } from '../constants';

import { getDefaultValue } from './getValues';

type TOption = 'top' | 'left' | 'opacity' | 'transform' | 'filter';

export const useStartAnimation = () => {
  const [animationOptions, setAnimationOptions] = useContext<any>(Context);

  const startAnimation = (elementId: any) => {
    const element = document.getElementById(elementId);
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
    gsap.to(element, {
      x: options.left,
      y: options.bottom * -1,
      opacity: options.opacity / 100,
      filter: `blur(${options.filter}px)`,
      repeat: options.repeat - 1 || 0,
      duration: 10 / (options.speed || 10),
      // delay: 10 / (options.delay || 10),
      ease: options.easing || 'none',
      scale: options.transform,
    });
  };

  const startAllAnimations = () => {
    Object.entries(animationOptions.options).forEach(([key]) => {
      if (key !== animationOptions.currentElementId) {
        startAnimation(key);
      }
    });
  };

  return { startAnimation, startAllAnimations };
};
