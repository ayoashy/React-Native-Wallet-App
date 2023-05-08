import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { colors } from '../colors';

import styled from 'styled-components/native';

import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import RegularText from '../Texts/RegularText';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

interface ButtonProp {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProp> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
