import React from 'react';
import {ScrollView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Group} from '../home/HomeScreen';
import UserRow from '@components/user-row/UserRow';
import GroupIcon from '@icons/group.svg';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import {Divider} from '../../shared/divider/Divider';
import BaseButton from '../../shared/based/buttons/base-button/BaseButton';
type RootStackParamList = {
  Group: {id: string};
};

type Props = StackScreenProps<RootStackParamList, 'Group'>;

interface User {
  userId: number;
  username: string;
  owesToUser: number;
  owesByUser: number;
}

interface GroupDetails extends Group {
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
const GroupDetailsScreen = ({route}: Props) => {
  const {id} = route.params;

  const groupDetails: GroupDetails = {
    id: 1,
    name: 'MoutainTrip',
    usersList: [
      {userId: 1, username: 'Ola150', owesToUser: 120, owesByUser: 0},
      {userId: 2, username: 'Patryk8', owesToUser: 0, owesByUser: 70},
      {userId: 3, username: 'Aga44', owesToUser: 0, owesByUser: 0},
    ],
  };

  const printBalance = () => {
    const userBalance = groupDetails.usersList
      .map((item) => item.owesToUser - item.owesByUser)
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
        <StyledText>{groupDetails.name}</StyledText>
      </StyledView>
      <StyledBalanceContainer>
        <StyledBalanceText textColor={theme.colors.gray}>
          Your balance
        </StyledBalanceText>
        {printBalance()}
      </StyledBalanceContainer>
      <Divider />
      <ScrollView>
        {groupDetails.usersList.map((user) => (
          <UserRow
            username={user.username}
            userId={user.userId}
            key={user.userId}
            owesToUser={user.owesToUser}
            owesByUser={user.owesByUser}
          />
        ))}
      </ScrollView>
      <StyledButtonContainer>
        <BaseButton
          onPress={() => console.log('Pressed')}
          color={theme.colors.secondary}>
          Add a friend
        </BaseButton>
      </StyledButtonContainer>
    </StyledMainView>
  );
};

export default GroupDetailsScreen;
