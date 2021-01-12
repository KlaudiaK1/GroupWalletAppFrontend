import React from 'react';
import BaseInput from '@shared/inputs/base-input/BaseInput';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';
import BaseButton from '@shared/buttons/base-button/BaseButton';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessage from '@shared/error-message/ErrorMessage';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;
const StyledInputContainer = styled.View`
  align-items: center;
  padding: 8px 8px 0 8px;
`;
const StyledButtonContainer = styled.View`
  margin-top: 64px;
  align-items: center;
  padding: 8px;
`;
const Space = styled.View`
  height: 8px;
`;

interface GroupForm {
  groupName: string;
}

const CreateGroupScreen = () => {
  const navigation = useNavigation();

  const {errors, handleSubmit, control} = useForm();

  const onSubmit = (data: GroupForm) => {
    console.log(data);
    navigation.goBack();
  };

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StyledInputContainer>
        <Controller
          defaultValue=""
          name="groupName"
          rules={{
            required: {
              value: true,
              message: 'Group name is required',
            },
            minLength: {
              value: 3,
              message: 'Group name should contains at least 3 characters',
            },
          }}
          control={control}
          render={({onChange, value}) => (
            <BaseInput
              placeholder="Group name"
              iconType={'Group'}
              onChangeText={(text: string) => onChange(text)}
              value={value}
            />
          )}
        />
      </StyledInputContainer>
      {errors?.groupName ? (
        <ErrorMessage>{errors.groupName.message}</ErrorMessage>
      ) : (
        <Space />
      )}
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.secondary}
          color={theme.colors.white}
          onPress={() => handleSubmit(onSubmit)()}>
          Create
        </BaseButton>
      </StyledButtonContainer>
    </StyledKeyboardAvoidingView>
  );
};

export default CreateGroupScreen;
