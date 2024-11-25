import { Card } from './card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

export const BankID = {
  args: {
    icon: '🔒',
    title: 'BankID',
    description: 'Logga in med BankID för att boka',
  },
};

export const Chat = {
  args: {
    icon: '💬',
    title: 'Chat',
    description: 'Få hjälp via chatt eller video',
  },
};

export const FollowUp = {
  args: {
    icon: '👥',
    title: 'Uppföljning',
    description: 'Uppföljning med samma vårdgivare',
  },
};

// Extra exempel för att visa flexibiliteten
export const Health = {
  args: {
    icon: '🏥',
    title: 'Vård',
    description: 'Snabb tillgång till vård',
  },
};

export const NoIcon = {
  args: {
    title: 'Utan Ikon',
    description: 'Ett kort utan ikon',
  },
};