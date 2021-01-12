import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import GroupRow from '@components/group-row/GroupRow';
import {theme} from '@styles/theme';
import {useNavigation} from '@react-navigation/native';
import AddButton from '../../shared/buttons/add-button/AddButton';
import UserIcon from '@icons/user.svg';
import {Divider} from '@shared/divider/Divider';
import styled from 'styled-components/native';
import TurnOffIcon from '@icons/turn-off.svg';
import axios from 'axios';
import {removeData} from '../../services/device-storage/DeviceStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Group {
  id: number;
  name: string;
}

const StyledView = styled.View`
  flex: 1;
`;
const StyledUserView = styled.View`
  align-items: center;
  padding: 16px;
`;
const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
  color: ${theme.colors.primary};
`;
const StyledSvgButtonContainer = styled.View`
  align-items: flex-end;
  padding: 16px 16px 0 16px;
`;
interface User {
  userId: number;
  username: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  const getGroups = async () => {
    let JWTToken = await AsyncStorage.getItem('accessToken');
    axios
      .get('http://10.0.2.2:8080/api/services/controller/group/list', {
        headers: {Authorization: `Bearer ${JWTToken}`},
      })
      .then((response) => {
        console.log('profile is:', response.data);
      })
      .catch((error) => console.log(JWTToken));
  };

  const groups: Group[] = [
    {id: 1, name: 'Mountain Trip'},
    {id: 2, name: 'Baltic Sea Holidays'},
    {id: 3, name: 'Students Group'},
    {id: 4, name: 'Friday Meeting'},
  ];
  const user: User = {
    userId: 1,
    username: 'Monika Nowak',
  };

  const logout = () => {
    removeData('accessToken').then(() => console.log('Token removed'));
    navigation.navigate('Login');
  };
  return (
    <StyledView>
      <StyledSvgButtonContainer>
        <TouchableOpacity onPress={logout}>
          <TurnOffIcon width={24} height={24} fill={theme.colors.darkPink} />
        </TouchableOpacity>
      </StyledSvgButtonContainer>
      <StyledUserView>
        <UserIcon width={40} height={40} fill={theme.colors.secondary} />
        <StyledText>{user.username}</StyledText>
      </StyledUserView>
      <Divider />
      <ScrollView>
        {groups.map((group) => (
          <GroupRow groupName={group.name} groupId={group.id} key={group.id} />
        ))}
      </ScrollView>
      <AddButton
        onPress={() => navigation.navigate('AddGroup')}
        bg={theme.colors.white}
        color={theme.colors.secondary}
      />
    </StyledView>
  );
};

export default HomeScreen;
