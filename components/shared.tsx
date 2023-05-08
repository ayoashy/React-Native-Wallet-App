import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from './colors';

export const container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
