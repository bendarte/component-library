import PropTypes from 'prop-types';
import { Input } from '../input/input';
import { Button } from '../button/button';

export const SearchBar = ({ placeholder, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    onSearch?.(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="ui-w-full ui-flex ui-justify-center ui-gap-2">
      <div className="ui-w-full ui-max-w-2xl">
        <Input 
          name="search"
          placeholder={placeholder}
          icon="🔍"
        />
      </div>
      <Button type="submit">
        Sök
      </Button>
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: 'Sök...',
};

export default SearchBar;