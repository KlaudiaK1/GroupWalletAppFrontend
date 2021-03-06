import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Group} from '../home/HomeScreen';
import UserRow from '@components/user-row/UserRow';
import GroupIcon from '@icons/group.svg';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import {Divider} from '@shared/divider/Divider';
import BaseButton from '@shared/buttons/base-button/BaseButton';
import {useNavigation} from '@react-navigation/native';
import BorderedButton from '@shared/buttons/bordered-button/BorderedButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
type RootStackParamList = {
  Group: {id: string; groupName: string};
};

type Props = StackScreenProps<RootStackParamList, 'Group'>;

interface User {
  userId: number;
  username: string;
  owesToUser: number;
  owesByUser: number;
}

export interface GroupDetails extends Group {
  usersList: User[];
}

const StyledMainView = styled.View`
  flex: 1;
`;
const StyledView = styled.View`
  align-items: center;
  padding: 16px;
`;
const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
  color: ${theme.colors.primary};
`;
const StyledBalanceText = styled.Text<{textColor: string}>`
  color: ${({textColor}) => textColor};
  font-size: 16px;
  font-weight: bold;
`;
const StyledBalanceContainer = styled.View`
  align-items: center;
  padding-bottom: 8px;
`;
const StyledButtonContainer = styled.View`
  bottom: 0;
  align-items: center;
  padding: 16px;
`;
const StyledDebtButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;
const GroupDetailsScreen = ({route}: Props) => {
  const navigation = useNavigation();
  const [members, setMembers] = useState([
    {debt: 0, debtor: {username: '', id: 0}},
  ]);

  const {groupName} = route.params;

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

  const printBalance = () => {
    const userBalance = members
      .map((item) => item.debt)
      .reduce((prev, curr) => prev + curr, 0);
    let color: string;
    if (userBalance < 0) {
      color = theme.colors.darkPink;
    } else if (userBalance > 0) {
      color = theme.colors.secondary;
    } else {
      color = theme.colors.primary;
    }
    return (
      <StyledBalanceText textColor={color}>${userBalance}</StyledBalanceText>
    );
  };

  return (
    <StyledMainView>
      <StyledView>
        <GroupIcon width={40} height={40} fill={theme.colors.secondary} />
        <StyledText>{groupName}</StyledText>
      </StyledView>
      <StyledBalanceContainer>
        <StyledBalanceText textColor={theme.colors.gray}>
          Your balance
        </StyledBalanceText>
        {printBalance()}
      </StyledBalanceContainer>
      <StyledDebtButtonContainer>
        <BorderedButton onPress={() => navigation.navigate('AddDebt')}>
          Add a debt
        </BorderedButton>
      </StyledDebtButtonContainer>
      <Divider />
      <ScrollView>
        {members.map((item) => (
          <UserRow
            username={item.debtor.username}
            userId={item.debtor.id}
            key={item.debtor.id}
            owes={item.debt}
          />
        ))}
      </ScrollView>
      <StyledButtonContainer>
        <BaseButton
          onPress={() => navigation.navigate('AddUser')}
          color={theme.colors.secondary}>
          Add a user
        </BaseButton>
      </StyledButtonContainer>
    </StyledMainView>
  );
};

export default GroupDetailsScreen;
