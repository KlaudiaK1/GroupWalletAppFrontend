import React from 'react';
import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';

interface Props {
  borderColor?: string;
  color?: string;
  children: string;
  onPress(): void;
}
const StyledRipple = styled(Ripple)<{borderColor?: string}>`
  justify-content: center;
  align-items: center;
  min-height: 20px;
  width: 30%;
  border-radius: 16px;
  border-color: ${({borderColor}) => borderColor || theme.colors.primary};
  border-width: 2px;
`;

const StyledText = styled.Text<{color?: string}>`
  color: ${({color}) => color || theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
`;

const BorderedButton = ({borderColor, color, children, onPress}: Props) => {
  return (
    <StyledRipple
      rippleContainerBorderRadius={20}
      borderColor={borderColor}
      onPress={onPress}>
      <StyledText color={color}>{children}</StyledText>
    </StyledRipple>
  );
};

export default BorderedButton;
