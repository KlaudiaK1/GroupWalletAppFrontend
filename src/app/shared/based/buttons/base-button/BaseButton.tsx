import React from 'react';
import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';

interface Props {
  bg?: string;
  color?: string;
  children: string;
  onPress(): void;
}
const StyledRipple = styled(Ripple)<{bg?: string}>`
  background-color: ${({bg}) => bg || theme.colors.white};
  justify-content: center;
  align-items: center;
  min-height: 42px;
  width: 80%;
  border-radius: 22px;
  elevation: 3;
`;

const StyledText = styled.Text<{color?: string}>`
  color: ${({color}) => color || theme.colors.black};
  font-size: 16px;
`;

const BaseButton = ({bg, color, children, onPress}: Props) => {
  return (
    <StyledRipple rippleContainerBorderRadius={20} bg={bg} onPress={onPress}>
      <StyledText color={color}>{children}</StyledText>
    </StyledRipple>
  );
};

export default BaseButton;
