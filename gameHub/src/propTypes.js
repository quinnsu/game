import PropTypes from "prop-types";



export const sortOrderPropTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export const gameQueryPropTypes = PropTypes.shape({
  genreId: PropTypes.string,
  platformId: PropTypes.string,
  sortOrder: sortOrderPropTypes,
  searchText: PropTypes.string,
});
