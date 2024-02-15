import { useEffect } from 'react';

import { Slider } from '../../core/Slider/Slider';

import { ToolsWrapper } from './Tools.styles';

export const Tools = () => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToolsWrapper>
      <Slider name={'x'} label={'X'} defaultValue={20} onChange={console.log} />
      <Slider name={'y'} label={'Y'} defaultValue={20} onChange={console.log} />
      <Slider name={'opacity'} label={'Opacity'} defaultValue={20} onChange={console.log} />
      <Slider name={'scale'} label={'Scale'} defaultValue={20} onChange={console.log} />
      <Slider name={'blur'} label={'Blur'} defaultValue={20} onChange={console.log} />
      <Slider name={'speed'} label={'Speed'} defaultValue={20} onChange={console.log} />
      <Slider name={'delay'} label={'Delay'} defaultValue={20} onChange={console.log} />
    </ToolsWrapper>
  );
};
