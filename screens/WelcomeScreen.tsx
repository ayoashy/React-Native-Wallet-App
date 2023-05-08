import React, { FunctionComponent } from 'react';
// import { StatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

// custom components
import { colors } from '../components/colors';
import { container } from '../components/shared';

// types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeContainer = styled(container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

// image

import background from '../assets/bg/bg1.jpg';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Bottons/RegularButton';

const WelcomeScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style='light' />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText
            textStyles={{
              width: '70%',
              marginBottom: 25,
            }}
          >
            Best way to track your money
          </BigText>
          <SmallText
            textStyles={{
              width: '70%',
              marginBottom: 25,
            }}
          >
            Best payment method, Connect your money to your friend, family
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default WelcomeScreen;
