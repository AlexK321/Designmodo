import { Slider } from '@mui/material';
import styled from 'styled-components';

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  margin-bottom: -2px;
`;

export const SliderWrapper = styled.div`
  width: 60%;
`;

export const IOSSlider = styled(Slider)(() => ({
  color: '##AFAFAF',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    backgroundColor: '#fff',
    border: '1px solid #AFAFAF',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',

      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
    '&:before': {
      boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
    },
  },
  '& .MuiSlider-valueLabel': {
    position: 'absolute',
    left: '-14px',
    top: '4px',
    fontSize: 12,
    fontWeight: 'normal',
    backgroundColor: 'unset',
    color: '#AFAFAF',
    '&::before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: '#AFAFAF',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 2,
    backgroundColor: '#AFAFAF',
  },
  '& .MuiSlider-rail': {
    height: 2,
    opacity: 0.5,
    boxShadow: 'inset 0px 0px 4px -2px #000',
    backgroundColor: '#E0E0E0',
  },
}));
