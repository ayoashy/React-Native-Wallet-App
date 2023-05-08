import React, { FunctionComponent } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { colors } from '../colors';
import styled from 'styled-components/native';

// custom component
import BigText from '../Texts/BigText';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            color: colors.secondary,
            fontSize: 32,
          },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={[
          {
            color: colors.grayDark,
          },
        ]}
      >
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
