import { ImageSourcePropType } from 'react-native';

export interface SendMoneyProps {
  id: number;
  name: string;
  amount: string;
  background: string;
  image: ImageSourcePropType;
}

export type SendMoneySectionProps = {
  data: SendMoneyProps[];
};
