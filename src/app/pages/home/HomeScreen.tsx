import React, {useEffect, useState} from 'react';
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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({username: ''});
  const [groups, setGroups] = useState([{id: 0, name: ''}]);

  useEffect(() => {
    async function getDataFromAPI() {
      let JWTToken = await AsyncStorage.getItem('accessToken');
      axios
        .get('http://10.0.2.2:8080/api/services/controller/user/me', {
          headers: {Authorization: `Bearer ${JWTToken}`},
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => console.log(error));
      axios
        .get('http://10.0.2.2:8080/api/services/controller/group/list', {
          headers: {Authorization: `Bearer ${JWTToken}`},
        })
        .then((response) => {
          setGroups(response.data);
        })
        .catch((error) => console.log(error));
    }
    getDataFromAPI();
  }, [user, groups]);

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
