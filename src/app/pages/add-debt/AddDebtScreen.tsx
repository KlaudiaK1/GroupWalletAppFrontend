import React from 'react';
import {FlatList, Platform} from 'react-native';
import BaseInput from '../../shared/based/inputs/base-input/BaseInput';
import BaseButton from '../../shared/based/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {GroupDetails} from '../group-details/GroupDetailsScreen';
import {Divider} from '@shared/divider/Divider';
import {Controller, useForm} from 'react-hook-form';
import ErrorMessage from '@shared/based/error-message/ErrorMessage';
import UsernameRow from '@components/username-row/UsernameRow';

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

  const onSubmit = (data: DebtForm) => {
    console.log(data);
    navigation.goBack();
  };

  const groupDetails: GroupDetails = {
    id: 1,
    name: 'Moutain Trip',
    usersList: [
      {userId: 1, username: 'Ola Kowalska', owesToUser: 120, owesByUser: 0},
      {userId: 2, username: 'Patryk Nowy', owesToUser: 0, owesByUser: 70},
      {userId: 3, username: 'Aga Lewandowska', owesToUser: 0, owesByUser: 0},
    ],
  };

  // let selectedMembers = [];
  //
  // const selectItem = (key) => {
  //   selectedMembers = [...this.selectedMembers];
  //   for (let item of authUsers) {
  //     if (item.key == key) {
  //       item.isSelected = item.isSelected == null ? true : !item.isSelected;
  //       break;
  //     }
  //   }
  //   this.setState({authUsers});
  // };
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
        data={groupDetails.usersList}
        keyExtractor={(item) => item.userId.toString()}
        renderItem={({item}) => (
          <UsernameRow
            username={item.username}
            userId={item.userId}
            key={item.userId}
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
