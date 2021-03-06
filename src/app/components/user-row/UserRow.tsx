import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';
import {Divider} from '@shared/divider/Divider';

interface Props {
  userId: number;
  username: string;
  owes: number;
}

const StyledView = styled.View`
  padding-horizontal: 16px;
  height: 64px;
  background-color: ${theme.colors.white};
  flex-direction: row;
  align-items: center;
`;
const StyledUsernameContainer = styled.View`
  flex: 2;
`;
const StyledOwesContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const StyledUsername = styled.Text`
  color: ${theme.colors.primary};
  font-size: 18px;
  text-align: left;
  font-weight: bold;
`;
const StyledOwes = styled.Text<{textColor: string}>`
  color: ${({textColor}) => textColor};
  font-size: 14px;
  text-align: right;
`;

const UserRow = ({userId, username, owes}: Props) => {
  const printOwes = () => {
    if (owes > 0) {
      return (
        <StyledOwesContainer>
          <StyledOwes textColor={theme.colors.secondary}>owes you</StyledOwes>
          <StyledOwes textColor={theme.colors.secondary}>${owes}</StyledOwes>
        </StyledOwesContainer>
      );
    } else if (owes < 0) {
      return (
        <StyledOwesContainer>
          <StyledOwes textColor={theme.colors.darkPink}>you owe</StyledOwes>
          <StyledOwes textColor={theme.colors.darkPink}>${owes}</StyledOwes>
        </StyledOwesContainer>
      );
    } else {
      return (
        <StyledOwesContainer>
          <StyledOwes textColor={theme.colors.primary}>settled up</StyledOwes>
        </StyledOwesContainer>
      );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => Alert.alert('LOl')}>
        <StyledView>
          <StyledUsernameContainer>
            <StyledUsername>{username}</StyledUsername>
          </StyledUsernameContainer>
          {printOwes()}
        </StyledView>
        <Divider />
      </TouchableOpacity>
    </View>
  );
};

export default UserRow;
