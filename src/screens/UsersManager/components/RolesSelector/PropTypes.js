import PropTypes from 'prop-types';

const shape = PropTypes.shape;
const string = PropTypes.string;

const phrases = [
  'choose_role',
];

export const phrasesShape = shape({
  choose_role: string.isRequired,
});

export default phrases;
