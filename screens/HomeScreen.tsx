import React, { FunctionComponent } from 'react';

import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

// custom components
import { colors } from '../components/colors';
import { container } from '../components/shared';
import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

// cardLogos
import logo1 from './../assets/cards/mc.png';
import logo2 from './../assets/cards/visa.png';

// potrait images
import pot1 from './../assets/potraits/pot1.avif';
import pot2 from './../assets/potraits/pot2.avif';
import pot3 from './../assets/potraits/pot3.avif';

const HomeContainer = styled(container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: '4567898765',
      balance: 456.98,
      alias: 'Work debit',
      logo: logo1,
    },
    {
      id: 2,
      accountNo: '8763456709',
      balance: 98.57,
      alias: "Mary J's",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: '9873456793',
      balance: 9876.67,
      alias: 'Gazor',
      logo: logo1,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: '-678.98',
      date: '14 sep 2021',
      title: 'taxi',
      subtitle: 'uber car',
      art: {
        background: colors.primary,
        icon: 'car',
      },
    },
    {
      id: 2,
      amount: '-348.95',
      date: '16 sep 2021',
      title: 'sporty',
      subtitle: 'mo ta tete',
      art: {
        background: colors.primary,
        icon: 'ball',
      },
    },
    {
      id: 3,
      amount: '-629.23',
      date: '18 sep 2021',
      title: 'babes',
      subtitle: 'soft babes',
      art: {
        background: colors.primary,
        icon: 'woman',
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: '434.43',
      name: 'Cody Anboh',
      background: colors.tertiary,
      image: pot1,
    },
    {
      id: 2,
      amount: '615.33',
      name: 'Obo Dan',
      background: colors.primary,
      image: pot2,
    },
    {
      id: 3,
      amount: '222.03',
      name: 'Victor AKpan',
      background: colors.accent,
      image: pot3,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style='dark' />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default HomeScreen;
