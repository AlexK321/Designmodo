import * as React from 'react';
import { Checkbox, MenuItem, Select } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Box, IOSSlider, SliderWrapper } from './Option.styles';

export const Option = ({ label, name, defaultValue, onChange, type = 'slider', ...props }: any) => {
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
        {type === 'slider' && (
          <IOSSlider defaultValue={defaultValue} valueLabelDisplay="on" onChange={onChange} name={name} {...props} />
        )}
        {type === 'checkbox' && (
          <Checkbox
            defaultChecked={defaultValue}
            onChange={onChange}
            name={name}
            style={{ margin: '-6px -12px' }}
            {...props}
            checked={props.value}
          />
        )}
        {type === 'select' && (
          <Select
            style={{ width: '100%', height: '30px', fontSize: '12px' }}
            defaultValue={defaultValue}
            name={name}
            onChange={onChange}
            {...props}
          >
            <MenuItem value="bounce.out">bounce.out</MenuItem>
            <MenuItem value="steps">steps</MenuItem>
            <MenuItem value="power1.in">power1.in</MenuItem>
            <MenuItem value="none">none</MenuItem>
          </Select>
        )}
      </SliderWrapper>
    </Box>
  );
};
