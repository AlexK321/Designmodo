import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'small' | 'medium';
  fullwidth?: string;
}

export const Button: React.FC<ButtonProps> = styled.button`
  background: #3e87f8;
  color: white;
  border-width: 0;
  border-radius: 6px;
  font-size: ${props => (props.variant === 'small' ? '14px' : '16px')};
  padding: ${props => (props.variant === 'small' ? '10px 19px' : '14px 46px')};
  width: ${props => (props.fullwidth === 'true' ? '90%' : 'fit-content')};
  height: fit-content;
  position: relative;

  &:hover {
    background: #0d53bf;
  }
`;
