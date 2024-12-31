import PropTypes from "prop-types";

export const genrePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image_background: PropTypes.string.isRequired,
});

export const platformPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
});

export const sortOrderPropTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export const gameQueryPropTypes = PropTypes.shape({
  genre: genrePropTypes,
  platform: platformPropTypes,
  sortOrder: sortOrderPropTypes,
  searchText: PropTypes.string,
});
