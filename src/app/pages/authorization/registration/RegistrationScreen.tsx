import React from 'react';
import WavyShape from '../../../shared/shapes/wavy-shape/WavyShape';
import BaseInput from '../../../shared/based/inputs/base-input/BaseInput';
import BaseButton from '../../../shared/based/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
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
`;

const RegistrationScreen = () => {
  const navigation = useNavigation();
  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <WavyShape />
      <StyledImage source={require('@images/logo_dark.png')} />
      <StyledInputContainer>
        <BaseInput placeholder="Full name" iconType="Name" />
      </StyledInputContainer>
      <StyledInputContainer>
        <BaseInput placeholder="Username" iconType="User" />
      </StyledInputContainer>
      <StyledInputContainer>
        <BaseInput placeholder="Email" iconType="At" />
      </StyledInputContainer>
      <StyledInputContainer>
        <BaseInput placeholder="Password" isSecure={true} iconType="Padlock" />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.secondary}
          color={theme.colors.white}
          onPress={() => navigation.goBack()}>
          Create Account
        </BaseButton>
      </StyledButtonContainer>
    </StyledKeyboardAvoidingView>
  );
};

export default RegistrationScreen;
