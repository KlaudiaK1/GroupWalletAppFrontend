import React, {useEffect, useState} from 'react';
import {FlatList, Platform} from 'react-native';
import BaseInput from '../../shared/inputs/base-input/BaseInput';
import BaseButton from '../../shared/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '@shared/divider/Divider';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessage from '@shared/error-message/ErrorMessage';
import UsernameRow from '@components/username-row/UsernameRow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;
const StyledInputContainer = styled.View`
  align-items: center;
  padding: 16px 16px 0 16px;
`;
const StyledButtonContainer = styled.View`
  align-items: center;
  padding: 8px;
`;
const StyledText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
  padding: 16px 8px 8px 8px;
`;
const Space = styled.View`
  height: 16px;
`;

interface DebtForm {
  debt: number;
}

const AddDebtScreen = () => {
  const navigation = useNavigation();

  const {errors, handleSubmit, control} = useForm();
  const [members, setMembers] = useState([
    {debt: 0, debtor: {username: '', id: 0}},
  ]);

  const onSubmit = async (data: DebtForm) => {
    let JWTToken = await AsyncStorage.getItem('accessToken');
    axios
      .post(
        'http://10.0.2.2:8080/api/services/controller/debt/add-proportional-group-debt',
        {
          name: data.debt,
        },
        {
          headers: {Authorization: `Bearer ${JWTToken}`},
        },
      )
      .catch((error) => {
        console.log(error);
      });
    navigation.goBack();
  };

  useEffect(() => {
    async function getDataFromAPI() {
      let JWTToken = await AsyncStorage.getItem('accessToken');
      axios
        .get('http://10.0.2.2:8080/api/services/controller/debt/list-debtors', {
          headers: {Authorization: `Bearer ${JWTToken}`},
        })
        .then((response) => {
          setMembers(response.data);
        })
        .catch((error) => console.log(error));
    }
    getDataFromAPI();
  }, [members]);

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StyledInputContainer>
        <Controller
          defaultValue=""
          name="amount"
          rules={{
            required: {value: true, message: 'Amount is required'},
            validate: (value: number) => {
              if (value <= 0) {
                return 'Amount must be greater than 0';
              }
            },
          }}
          control={control}
          render={({onChange, value}) => (
            <BaseInput
              placeholder="Amount"
              iconType={'Money'}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              keyboardType="number-pad"
            />
          )}
        />
      </StyledInputContainer>
      {errors?.amount ? (
        <ErrorMessage>{errors.amount.message}</ErrorMessage>
      ) : (
        <Space />
      )}
      <StyledText>Select users, who split the debt</StyledText>
      <Divider />
      <FlatList
        data={members}
        keyExtractor={(item) => item.debtor.id.toString()}
        renderItem={({item}) => (
          <UsernameRow
            username={item.debtor.username}
            userId={item.debtor.id}
            key={item.debtor.id}
          />
        )}
      />
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.secondary}
          color={theme.colors.white}
          onPress={() => handleSubmit(onSubmit)()}>
          Add
        </BaseButton>
      </StyledButtonContainer>
    </StyledKeyboardAvoidingView>
  );
};

export default AddDebtScreen;
