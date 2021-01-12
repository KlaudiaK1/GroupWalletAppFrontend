import React from 'react';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';

export const StyledErrorText = styled.Text`
  color: ${theme.colors.darkPink};
  text-align: left;
  padding-left: 48px;
`;

interface Props {
  children: string;
}

const ErrorMessage = ({children}: Props) => {
  return <StyledErrorText>{children}</StyledErrorText>;
};

export default ErrorMessage;
