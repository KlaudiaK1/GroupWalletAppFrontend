import React from 'react';
import BaseInput from '../../../shared/based/inputs/base-input/BaseInput';
import BaseButton from '../../../shared/based/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import WavyShape from '../../../shared/shapes/wavy-shape/WavyShape';
import Ripple from 'react-native-material-ripple';

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;
const StyledInputContainer = styled.View`
  align-items: center;
  align-items: center;
  padding: 8px;
`;
const StyledButtonContainer = styled.View`
  align-items: center;
  padding: 8px;
`;
const StyledImage = styled.Image`
  width: 260px;
  height: 260px;
  border-radius: 130px;
  align-self: center;
  margin-top: 32px;
  margin-bottom: 16px;
`;
const StyledText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 13px;
  text-align: center;
  padding: 8px;
`;

const LoginScreen = () => {
  return (
    <StyledContainer>
      <WavyShape />
      <StyledImage source={require('@images/logo_dark.png')} />
      <StyledInputContainer>
        <BaseInput placeholder="Email" iconType="User" />
      </StyledInputContainer>
      <StyledInputContainer>
        <BaseInput placeholder="Password" isSecure={true} iconType="Padlock" />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BaseButton bg={theme.colors.secondary} color={theme.colors.white}>
          Log in
        </BaseButton>
      </StyledButtonContainer>
      <StyledButtonContainer>
        <BaseButton bg={theme.colors.white} color={theme.colors.secondary}>
          Sign up
        </BaseButton>
      </StyledButtonContainer>
      <Ripple>
        <StyledText>Forgot Password?</StyledText>
      </Ripple>
    </StyledContainer>
  );
};

export default LoginScreen;
