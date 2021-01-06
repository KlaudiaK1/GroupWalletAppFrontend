import React from 'react';
import BaseInput from '../../shared/based/inputs/base-input/BaseInput';
import styled from 'styled-components/native';
import {theme} from '@styles/theme';
import BaseButton from '../../shared/based/buttons/base-button/BaseButton';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

const StyledInputContainer = styled.View`
  align-items: center;
  align-items: center;
  padding: 8px;
  top: 200px;
`;
const StyledButtonContainer = styled.View`
  align-items: center;
  padding: 8px;
  top: 300px;
`;

const CreateGroupScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <StyledInputContainer>
        <BaseInput placeholder="Group name" iconType={'Group'} />
      </StyledInputContainer>
      <StyledButtonContainer>
        <BaseButton
          bg={theme.colors.secondary}
          color={theme.colors.white}
          onPress={() => navigation.navigate('Home')}>
          Create
        </BaseButton>
      </StyledButtonContainer>
    </View>
  );
};

export default CreateGroupScreen;
