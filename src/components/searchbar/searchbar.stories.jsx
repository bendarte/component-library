import { SearchBar } from './searchbar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    onSearch: { action: 'searched' },
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: 'Sök...',
  },
};

export const CustomPlaceholder = {
  args: {
    placeholder: 'Skriv för att söka...',
  },
};

export const WithCallback = {
  args: {
    placeholder: 'Sök produkter...',
    onSearch: (term) => console.log('Searching for:', term),
  },
};