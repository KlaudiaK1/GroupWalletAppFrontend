import React, {useState} from 'react';
import {theme} from '@styles/theme';
import styled from 'styled-components/native';
import PadlockIcon from '@icons/padlock.svg';
import UserIcon from '@icons/user.svg';
import NameIcon from '@icons/name.svg';
import AtIcon from '@icons/at.svg';
import GroupIcon from '@icons/group.svg';
import MoneyIcon from '@icons/money.svg';

const StyledTextInputContainer = styled.View<{isFocused: boolean}>`
  width: 80%;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.isFocused ? theme.colors.secondary : theme.colors.primary};
  flex-direction: row;
  align-items: center;
  margin: 8px;
`;
const StyledTextInput = styled.TextInput`
  color: ${theme.colors.primary};
  font-size: 15px;
  flex: 1;
  padding: 0;
  margin-left: 8px;
`;

type IconTypes = 'User' | 'Padlock' | 'Name' | 'At' | 'Group' | 'Money';
type KeyboardTypes = 'default' | 'number-pad';

interface Props {
  placeholder: string;
  isSecure?: boolean;
  iconType?: IconTypes;
  onChangeText: any;
  value: any;
  keyboardType?: KeyboardTypes;
}

const BaseInput = ({
  placeholder,
  isSecure = false,
  iconType,
  onChangeText,
  value,
  keyboardType = 'default',
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const userIcon = (
    <UserIcon
      width={14}
      height={14}
      fill={isFocused ? theme.colors.secondary : theme.colors.primary}
    />
  );
  const padlockIcon = (
    <PadlockIcon
      width={14}
      height={14}
      fill={isFocused ? theme.colors.secondary : theme.colors.primary}
    />
  );
  const nameIcon = (
    <NameIcon
      width={14}
      height={14}
      fill={isFocused ? theme.colors.secondary : theme.colors.primary}
    />
  );
  const atIcon = (
    <AtIcon
      width={14}
      height={14}
      fill={isFocused ? theme.colors.secondary : theme.colors.primary}
    />
  );
  const groupIcon = (
    <GroupIcon
      width={14}
      height={14}
      fill={isFocused ? theme.colors.secondary : theme.colors.primary}
    />
  );
  const moneyIcon = (
    <MoneyIcon
      width={14}
      height={14}
      fill={isFocused ? theme.colors.secondary : theme.colors.primary}
    />
  );
  return (
    <StyledTextInputContainer isFocused={isFocused}>
      {iconType === 'User' && userIcon}
      {iconType === 'Padlock' && padlockIcon}
      {iconType === 'Name' && nameIcon}
      {iconType === 'At' && atIcon}
      {iconType === 'Group' && groupIcon}
      {iconType === 'Money' && moneyIcon}
      <StyledTextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        selectionColor={theme.colors.primary}
        underlineColorAndroid="transparent"
        placeholderTextColor={theme.colors.primary}
        keyboardAppearance="light"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </StyledTextInputContainer>
  );
};

export default BaseInput;
