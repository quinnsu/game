import { Menu, Button, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import PropTypes from "prop-types";
const SortSelector = ({ selectedSort, onSelectedSort }) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort?.label || "Relevance"} 
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem 
          onClick={() => onSelectedSort(sortOrder)}
          key={sortOrder.value}>{sortOrder.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

SortSelector.propTypes = {
    selectedSort: PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }),
  onSelectedSort: PropTypes.func.isRequired,
};
export default SortSelector;
