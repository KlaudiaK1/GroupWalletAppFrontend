import React from 'react';
import BaseInput from '../../shared/based/inputs/base-input/BaseInput';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';
import BaseButton from '../../shared/based/buttons/base-button/BaseButton';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;
const StyledInputContainer = styled.View`
  align-items: center;
  padding: 8px;
  margin-bottom: 64px;
`;
const StyledButtonContainer = styled.View`
  align-items: center;
  padding: 8px;
`;

const AddUserScreen = () => {
  const navigation = useNavigation();

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StyledInputContainer>
        <BaseInput placeholder="Username" iconType={'User'} />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.secondary}
          color={theme.colors.white}
          onPress={() => navigation.goBack()}>
          Add
        </BaseButton>
      </StyledButtonContainer>
    </StyledKeyboardAvoidingView>
  );
};

export default AddUserScreen;
