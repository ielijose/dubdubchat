import PropTypes from 'prop-types';

const { shape, number, string, bool, objectOf } = PropTypes;

export const characterType = {
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  isSelected: bool,
};

export const characterShape = shape(characterType);

export const selectedMapType = objectOf(PropTypes.bool);

export const selectedListType = PropTypes.arrayOf(
  shape({
    color: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
);
