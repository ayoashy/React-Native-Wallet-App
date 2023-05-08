import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// components
import { screenWidth } from '../shared';
import { colors } from '../colors';
import card_bg from '../../assets/bg/bg-transparent.jpeg';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

import { useNavigation } from '@react-navigation/native';
import { Props as HomeProps } from '../../screens/HomeScreen';

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${screenWidth * 0.67}px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

// types
import { CardProps } from './types';
import { View } from 'react-native';

const StyledCardItem = styled.View``;

const CardItem: FunctionComponent<CardProps> = (props) => {
  // configuring navigation
  const navigation = useNavigation<HomeProps['navigation']>();

  const handlePress = () => {};
  return (
    <CardBackground source={card_bg}>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <CardRow>
            <RegularText
              textStyles={{
                color: colors.white,
              }}
            >
              *******{props.accountNo.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{
                  marginBottom: 5,
                  color: colors.grayLight,
                }}
              >
                Total balance
              </SmallText>
              <RegularText
                textStyles={{
                  fontSize: 19,
                }}
              >
                {props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
