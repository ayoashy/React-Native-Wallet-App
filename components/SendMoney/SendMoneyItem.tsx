import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// types
import { SendMoneyProps } from './types';

// colors
import { colors } from '../colors';

// components
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import { screenWidth } from '../shared';
import Profile from '../Header/Profile';

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${screenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{
        backgroundColor: props.background,
      }}
      onPress={() => {
        alert('send money');
      }}
    >
      <>
        <Profile
          img={props.image}
          imgContainerStyle={{
            marginBottom: 10,
          }}
        />
        <SmallText
          textStyles={{
            textAlign: 'left',
            color: colors.white,
            fontSize: 12,
          }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{
            textAlign: 'left',
            color: colors.white,
            fontSize: 13,
          }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
