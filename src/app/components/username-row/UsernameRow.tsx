import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {Divider} from '@shared/divider/Divider';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';

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
const StyledUsername = styled.Text`
  color: ${theme.colors.primary};
  font-size: 18px;
  text-align: left;
  font-weight: bold;
`;

interface Props {
  userId: number;
  username: string;
}

const UsernameRow = ({userId, username}: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => Alert.alert('LOl')}>
        <StyledView>
          <StyledUsernameContainer>
            <StyledUsername>{username}</StyledUsername>
          </StyledUsernameContainer>
        </StyledView>
        <Divider />
      </TouchableOpacity>
    </View>
  );
};

export default UsernameRow;
