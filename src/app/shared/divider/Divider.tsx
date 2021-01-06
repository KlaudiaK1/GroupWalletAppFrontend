import styled from 'styled-components/native';
import {theme} from '@styles/theme';

export const Divider = styled.View<{bg?: string}>`
  background-color: ${({bg}) => bg || theme.colors.primary};
  height: 1px;
`;
