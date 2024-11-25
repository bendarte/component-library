import { Button } from './button';  // lowercase import

const meta = {
  title: 'components/button',
  component: Button,  // Fixat stavfelet från 'Buttontton'
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    children: { control: 'text' },
  },
};

export default meta;

export const Primary = {
  args: {
    children: 'Klicka här',
  },
};

export const Submit = {
  args: {
    children: 'Skicka',
    type: 'submit',
  },
};

export const CustomClass = {
  args: {
    children: 'Anpassad',
    className: 'ui-bg-green-600 hover:ui-bg-green-700',
  },
};