export const getValue = (key: string, value: number) => {
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

export const getDefaultValue = (key: string) => {
  switch (key) {
    case 'bottom':
      return '0px';
    case 'left':
      return '0px';
    case 'opacity':
      return '1';
    case 'transform':
      return 'scale(1)';
    case 'filter':
      return 'blur(0px)';
    default:
      return '0';
  }
};
