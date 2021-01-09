import React from 'react';
import {ScrollView, View} from 'react-native';
import GroupRow from '@components/group-row/GroupRow';
import {theme} from '@styles/theme';
import {useNavigation} from '@react-navigation/native';
import AddButton from '../../shared/based/buttons/add-button/AddButton';

export interface Group {
  id: number;
  name: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  const groups: Group[] = [
    {id: 1, name: 'Mountain Trip'},
    {id: 2, name: 'Baltic Sea Holidays'},
    {id: 3, name: 'Students Group'},
    {id: 4, name: 'Friday Meeting'},
  ];

  return (
    <View>
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
    </View>
  );
};

export default HomeScreen;
