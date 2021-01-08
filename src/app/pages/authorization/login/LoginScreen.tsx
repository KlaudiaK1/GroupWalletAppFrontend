import React from 'react';
import BaseInput from '../../../shared/based/inputs/base-input/BaseInput';
import BaseButton from '../../../shared/based/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import WavyShape from '../../../shared/shapes/wavy-shape/WavyShape';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
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

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <WavyShape />
      <StyledImage source={require('@images/logo_dark.png')} />
      <StyledInputContainer>
        <BaseInput placeholder="Username" iconType="User" />
      </StyledInputContainer>
      <StyledInputContainer>
        <BaseInput placeholder="Password" isSecure={true} iconType="Padlock" />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.secondary}
          color={theme.colors.white}
          onPress={() => navigation.navigate('Home')}>
          Log in
        </BaseButton>
      </StyledButtonContainer>
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.white}
          color={theme.colors.secondary}
          onPress={() => navigation.navigate('Registration')}>
          Sign up
        </BaseButton>
      </StyledButtonContainer>
    </StyledKeyboardAvoidingView>
  );
};

export default LoginScreen;
