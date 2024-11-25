import PropTypes from 'prop-types';

export const Card = ({ icon, title, description }) => {
  return (
    <div className="ui">
      <div className="ui-bg-white ui-rounded-lg ui-shadow-lg ui-overflow-hidden ui-p-4 ui-flex ui-flex-col ui-items-center ui-w-64">
        {icon && <span className="ui-text-4xl ui-mb-4">{icon}</span>}
        <h2 className="ui-font-sans ui-text-gray-900 ui-font-bold ui-text-lg ui-mb-2">{title}</h2>
        <p className="ui-font-sans ui-text-gray-600 ui-text-center">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;