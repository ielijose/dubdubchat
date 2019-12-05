import PropTypes from 'prop-types';
import { characterShape } from './character';

const { shape } = PropTypes;

export const messageType = {
  character: characterShape,
  id: PropTypes.number,
  isMine: PropTypes.bool,
  text: PropTypes.string,
};

export const messageShape = shape(messageType);
