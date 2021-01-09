import React from 'react';
import WavyShape from '@shared/shapes/wavy-shape/WavyShape';
import BaseInput from '@shared/based/inputs/base-input/BaseInput';
import BaseButton from '@shared/based/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessage from '@shared/based/error-message/ErrorMessage';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;
const StyledInputContainer = styled.View`
  align-items: center;
  align-items: center;
  padding-horizontal: 8px;
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
const Space = styled.View`
  height: 8px;
`;

interface RegisterForm {
  username: string;
  password: string;
}
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterScreen = () => {
  const navigation = useNavigation();

  const {errors, handleSubmit, control} = useForm();

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    navigation.navigate('Login');
  };

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <WavyShape />
      <StyledImage source={require('@images/logo_dark.png')} />
      <StyledInputContainer>
        <Controller
          defaultValue=""
          name="username"
          rules={{
            required: {
              value: true,
              message: 'Username is required',
            },
            minLength: {
              value: 3,
              message: 'Username should contains at least 3 characters',
            },
          }}
          control={control}
          render={({onChange, value}) => (
            <BaseInput
              placeholder="Username"
              iconType="User"
              onChangeText={(text: string) => onChange(text)}
              value={value}
            />
          )}
        />
      </StyledInputContainer>
      {errors?.username ? (
        <ErrorMessage>{errors.username.message}</ErrorMessage>
      ) : (
        <Space />
      )}
      <StyledInputContainer>
        <Controller
          defaultValue=""
          name="email"
          rules={{
            required: {value: true, message: 'Email is required'},
            pattern: {
              value: EMAIL_REGEX,
              message: 'Not a valid email',
            },
          }}
          control={control}
          render={({onChange, value}) => (
            <BaseInput
              placeholder="Email"
              iconType="At"
              onChangeText={(text: string) => onChange(text)}
              value={value}
            />
          )}
        />
      </StyledInputContainer>
      {errors?.email ? (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      ) : (
        <Space />
      )}
      <StyledInputContainer>
        <Controller
          defaultValue=""
          name="password"
          rules={{
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password should contains at least 6 characters',
            },
          }}
          control={control}
          render={({onChange, value}) => (
            <BaseInput
              placeholder="Password"
              isSecure={true}
              iconType="Padlock"
              onChangeText={(text: string) => onChange(text)}
              value={value}
            />
          )}
        />
      </StyledInputContainer>
      {errors?.password ? (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      ) : (
        <Space />
      )}
      <StyledInputContainer>
        <Controller
          defaultValue=""
          name="repeatedPassword"
          rules={{
            required: {
              value: true,
              message: 'Repeated password is required',
            },
            minLength: {
              value: 6,
              message: 'Password should contains at least 6 characters',
            },
          }}
          control={control}
          render={({onChange, value}) => (
            <BaseInput
              placeholder="Repeat password"
              isSecure={true}
              iconType="Padlock"
              onChangeText={(text: string) => onChange(text)}
              value={value}
            />
          )}
        />
      </StyledInputContainer>
      {errors?.repeatedPassword ? (
        <ErrorMessage>{errors.repeatedPassword.message}</ErrorMessage>
      ) : (
        <Space />
      )}
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.secondary}
          color={theme.colors.white}
          onPress={() => handleSubmit(onSubmit)()}>
          Create Account
        </BaseButton>
      </StyledButtonContainer>
    </StyledKeyboardAvoidingView>
  );
};

export default RegisterScreen;
