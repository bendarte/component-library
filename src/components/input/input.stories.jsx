import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    placeholder: 'Skriv här...',
  },
};

export const WithIcon = {
  args: {
    placeholder: 'Sök...',
    icon: '🔍',
  },
};

export const CustomStyle = {
  args: {
    placeholder: 'Anpassad stil...',
    className: 'ui-border-blue-500 ui-bg-blue-50',
  },
};