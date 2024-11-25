import PropTypes from 'prop-types';

export const Button = ({ children, type, className, ...props }) => {
  return (
    <button
      type={type}
      className={`ui-px-6 ui-py-3 ui-bg-blue-600 ui-text-white ui-rounded-lg ui-font-semibold ui-text-base hover:ui-bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;