import { useContext, useEffect } from 'react';

import { Context } from '../../App';
import { Button } from '../../core/Button/Button';
import { Option } from '../../core/Option/Option';
import { IAnimationOptions } from '../../pages/types/interfaces';
import { useStartAnimation } from '../../utils/startAnimation';

import { DEFAULT_SLIDER_OPTIONS } from './Tools.constants';

import { ButtonContainer, ToolsWrapper } from './Tools.styles';

export const Tools = () => {
  const [animationOptions, setAnimationOptions] = useContext<any>(Context);
  const { startAnimation } = useStartAnimation();

  const currentOptions = animationOptions.options?.[animationOptions.currentElementId] || {};
  let preparingOptions = DEFAULT_SLIDER_OPTIONS;

  const handleChange = (e: any) => {
    setAnimationOptions((prev: IAnimationOptions) => ({
      ...prev,
      options: {
        ...prev.options,
        [prev.currentElementId as string]: {
          ...prev.options[prev.currentElementId as string],
          [e.target.name]: e.target.value,
        },
      },
    }));
  };

  const handleReset = () => {
    localStorage.clear();
    setAnimationOptions({ currentElementId: null, options: {} });
    window.location.reload();
  };

  useEffect(() => {
    setAnimationOptions(
      JSON.parse(localStorage.getItem('animationOptions') || '{"currentElementId": null, "options": {}}'),
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('animationOptions', JSON.stringify({ ...animationOptions, currentElementId: null }));
  }, [Object.values(animationOptions.options)]);

  useEffect(() => {
    preparingOptions = DEFAULT_SLIDER_OPTIONS.map(item => ({
      ...item,
      value: currentOptions[item.name] || item.defaultValue,
    }));
  }, [animationOptions.currentElementId]);

  return (
    <ToolsWrapper>
      <p style={{ textAlign: 'center' }}>
        {animationOptions.currentElementId ? (
          `Current element: ${animationOptions.currentElementId}`
        ) : (
          <span style={{ color: '#ba6645' }}>Please choose element</span>
        )}
      </p>
      {preparingOptions.map(item => (
        <Option
          key={item.name}
          value={currentOptions[item.name] || item.defaultValue}
          onChange={handleChange}
          {...item}
          disabled={!animationOptions.currentElementId}
        />
      ))}
      <ButtonContainer>
        <Button onClick={handleReset} variant="small" fullwidth="true">
          Reset all
        </Button>
        Start animation:
        {Object.entries(animationOptions.options).map(item => (
          <Button
            onClick={(e: any) => startAnimation(e.target.id.replace('start-', ''))}
            variant="small"
            key={item[0]}
            id={`start-${item[0]}`}
            fullwidth="true"
          >
            {item[0]}
          </Button>
        ))}
      </ButtonContainer>
    </ToolsWrapper>
  );
};
