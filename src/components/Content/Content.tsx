import { useContext, useEffect } from 'react';

import { Context } from '../../App';
import { PREVIEW_ID_PREFIX } from '../../constants';

import { ContentWrapper, Description, Image, TestButton } from './Content.styles';

type Option = 'top' | 'left' | 'opacity' | 'transform' | 'filter';

export const Content = () => {
  const [animationOptions, setAnimationOptions] = useContext<any>(Context);
  useEffect(() => {
    const element = document.getElementById(animationOptions.currentElementId);

    const getValue = (key: string, value: number) => {
      switch (key) {
        case 'bottom':
          return `${value}px`;
        case 'left':
          return `${value}px`;
        case 'opacity':
          return `${value}%`;
        case 'transform':
          return `scale(${value})`;
        case 'filter':
          return `blur(${value}px)`;
        case 'speed':
          return String(value);
        case 'delay':
          return String(value);
        default:
          return `${value}px`;
      }
    };

    if (element) {
      const currentOptions = animationOptions.options[animationOptions.currentElementId] || {};
      Object.entries(currentOptions).forEach(([key, value]) => {
        element.style[key as Option] = getValue(key, (value || 0) as number);
      });
    }
  }, [Object.values(animationOptions.options)]);

  const handleClick = (e: any) => {
    const element = document.getElementById(e.target.id);

    if (element) {
      const elementStyles = window.getComputedStyle(element);
      let secondElement = document.getElementById(`${PREVIEW_ID_PREFIX}${e.target.id}`);

      if (animationOptions.currentElementId === e.target.id && secondElement) {
        if (secondElement.parentNode) secondElement.parentNode.insertBefore(element, secondElement);
        element.style.position = 'relative';
        secondElement.remove();
        setAnimationOptions((prev: any) => ({ ...prev, currentElementId: null }));
      } else if (!e.target.id.includes(PREVIEW_ID_PREFIX)) {
        secondElement = document.createElement('div');
        secondElement.id = `${PREVIEW_ID_PREFIX}${e.target.id}`;
        secondElement.style.width = `${element?.offsetWidth}px`;
        secondElement.style.height = `${element?.offsetHeight}px`;
        secondElement.style.backgroundColor = '#3e87f846';
        secondElement.style.marginTop = elementStyles.marginTop;
        secondElement.style.marginBottom = elementStyles.marginBottom;
        secondElement.style.marginLeft = elementStyles.marginLeft;
        secondElement.style.marginRight = elementStyles.marginRight;
        secondElement.style.position = 'relative';
        if (element.parentNode) element.parentNode.insertBefore(secondElement, element);
        secondElement.appendChild(element);
        element.style.position = 'absolute';
        setAnimationOptions((prev: any) => ({ ...prev, currentElementId: e.target.id }));
      }
    }
  };

  return (
    <ContentWrapper onClick={handleClick}>
      <Description>
        <h1 id="title" style={{ position: 'relative' }}>
          Animation Settings
        </h1>
        <p id="description" style={{ position: 'relative' }}>
          The user should have the option to select any element on the page and set up its animation using the controls
          in the right panel. A dotted line will show the elements position and state before the animation begins,
          giving the user a clear idea of how the animation will appear. The preview button on the top panel will open
          the result in a new tab.
        </p>
        <TestButton id="testButton">Button</TestButton>
      </Description>
      <div style={{ position: 'relative' }} id="image">
        <Image
          src="https://png.pngtree.com/background/20230611/original/pngtree-picture-of-a-blue-bird-on-a-black-background-picture-image_3124189.jpg"
          alt="preview"
          id="image"
        />
      </div>
    </ContentWrapper>
  );
};
