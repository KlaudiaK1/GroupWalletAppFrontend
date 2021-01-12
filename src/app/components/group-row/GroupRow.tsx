import React from 'react';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const StyledView = styled.View`
  margin: 16px;
  padding: 16px;
  elevation: 1;
  border-radius: 16px;
  background-color: ${theme.colors.secondary};
`;
const StyledText = styled.Text`
  color: ${theme.colors.white};
  font-size: 18px;
  text-align: center;
`;
interface Props {
  groupId: number;
  groupName: string;
}

const GroupRow = ({groupName, groupId}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('GroupDetails', {id: groupId, groupName: groupName})
      }>
      <StyledView>
        <StyledText>{groupName}</StyledText>
      </StyledView>
    </TouchableOpacity>
  );
};

export default GroupRow;
