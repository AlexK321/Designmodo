import * as React from 'react';
import Typography from '@mui/material/Typography';

import { Box, IOSSlider, SliderWrapper } from './Slider.styles';

export const Slider = ({ label, name, defaultValue, onChange, ...props }: any) => {
  return (
    <Box>
      <Typography
        gutterBottom
        width={'16%'}
        textAlign={'right'}
        color={'#444444'}
        sx={{ fontSize: '11px', fontWeight: 'bold' }}
      >
        {label}
      </Typography>
      <SliderWrapper>
        <IOSSlider defaultValue={defaultValue} valueLabelDisplay="on" onChange={onChange} name={name} {...props} />
      </SliderWrapper>
    </Box>
  );
};
