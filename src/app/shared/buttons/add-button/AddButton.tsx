import React from 'react';
import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';
import PlusIcon from '@icons/plus.svg';

interface Props {
  bg?: string;
  color?: string;
  onPress(): void;
}
const StyledRipple = styled(Ripple)<{bg?: string}>`
  background-color: ${({bg}) => bg || theme.colors.white};
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  elevation: 3;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const AddButton = ({bg, color, onPress}: Props) => {
  return (
    <StyledRipple rippleContainerBorderRadius={40} bg={bg} onPress={onPress}>
      <PlusIcon width={32} height={32} fill={color} />
    </StyledRipple>
  );
};

export default AddButton;
