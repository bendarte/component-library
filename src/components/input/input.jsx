import PropTypes from 'prop-types';

export const Input = ({ icon, placeholder, name, className, ...props }) => {
  return (
    <div className="ui-relative ui-w-full">
      {icon && (
        <span className="ui-absolute ui-left-3 ui-top-1/2 ui-transform ui--translate-y-1/2">
          {icon}
        </span>
      )}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`ui-w-full ui-py-3 ${icon ? 'ui-pl-10' : 'ui-pl-4'} ui-pr-4 ui-text-gray-900 ui-bg-white ui-rounded-lg ui-border ui-border-gray-200 ui-text-base ${className}`}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Input;