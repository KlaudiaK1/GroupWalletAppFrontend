import React from 'react';
import {FlatList, Platform} from 'react-native';
import BaseInput from '../../shared/based/inputs/base-input/BaseInput';
import BaseButton from '../../shared/based/buttons/base-button/BaseButton';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {GroupDetails} from '../group-details/GroupDetailsScreen';
import {Divider} from '../../shared/divider/Divider';
import UserRow from '@components/user-row/UserRow';

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`;
const StyledInputContainer = styled.View`
  align-items: center;
  padding: 16px;
`;
const StyledButtonContainer = styled.View`
  align-items: center;
  padding: 8px;
`;
const StyledText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
`;

const AddDebtScreen = () => {
  const navigation = useNavigation();

  const groupDetails: GroupDetails = {
    id: 1,
    name: 'MoutainTrip',
    usersList: [
      {userId: 1, username: 'Ola150', owesToUser: 120, owesByUser: 0},
      {userId: 2, username: 'Patryk8', owesToUser: 0, owesByUser: 70},
      {userId: 3, username: 'Aga44', owesToUser: 0, owesByUser: 0},
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
        <BaseInput placeholder="Amount" iconType={'Money'} />
      </StyledInputContainer>
      <StyledText>Select users, who split the debt</StyledText>
      <Divider />
      <FlatList
        data={groupDetails.usersList}
        keyExtractor={(item) => item.userId.toString()}
        renderItem={({item}) => (
          <UserRow
            username={item.username}
            userId={item.userId}
            key={item.userId}
            owesToUser={item.owesToUser}
            owesByUser={item.owesByUser}
          />
        )}
      />
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

export default AddDebtScreen;
