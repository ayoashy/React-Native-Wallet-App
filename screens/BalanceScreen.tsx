import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

// custom components
import { colors } from '../components/colors';
import { container } from '../components/shared';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import ButtonSection from '../components/Balance/ButtonSection';

// types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Balance'>;

const BalanceContainer = styled(container)`
  background-color: ${colors.grayLight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const BalanceScreen: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceContainer>
      <StatusBar style='dark' />
      <AmountSection balance={route?.params.balance} />
      <BalanceCardSection {...route?.params} />
    </BalanceContainer>
  );
};

export default BalanceScreen;
