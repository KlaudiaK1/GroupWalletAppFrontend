import React from 'react';
import BaseInput from '@shared/inputs/base-input/BaseInput';
import BaseButton from '@shared/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import WavyShape from '@shared/shapes/wavy-shape/WavyShape';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import ErrorMessage from '@shared/error-message/ErrorMessage';
import axios from 'axios';
import {storeData} from '../../../services/device-storage/DeviceStorage';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;
const StyledInputContainer = styled.View`
  align-items: center;
  align-items: center;
  padding: 8px 8px 0 8px;
`;
const StyledButtonContainer = styled.View`
  align-items: center;
  padding: 8px;
`;
const StyledButtonsContainer = styled.View`
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
  height: 16px;
`;

interface LoginForm {
  email: string;
  password: string;
}

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginScreen = () => {
  const navigation = useNavigation();
  const {errors, handleSubmit, control} = useForm();

  const onSubmit = (data: LoginForm) => {
    axios
      .post('http://10.0.2.2:8080/api/services/controller/user/login', {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        storeData('accessToken', response.data.accessToken).then(() =>
          console.log(response.data.accessToken),
        );
      })
      .catch((error) => {
        console.log(error);
      });
    navigation.navigate('Home');
  };

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <WavyShape />
      <StyledImage source={require('@images/logo_dark.png')} />
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
      <StyledButtonsContainer>
        <StyledButtonContainer>
          <BaseButton
            bg={theme.colors.secondary}
            color={theme.colors.white}
            onPress={() => handleSubmit(onSubmit)()}>
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
      </StyledButtonsContainer>
    </StyledKeyboardAvoidingView>
  );
};

export default LoginScreen;
