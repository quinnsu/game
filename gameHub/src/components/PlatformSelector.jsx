import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import PropTypes from "prop-types";

function PlatformSelector({ onSelectedPlatform, selectedPlatform }) {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"} 
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform.id) }>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

PlatformSelector.propTypes = {
  onSelectedPlatform: PropTypes.func.isRequired,
  selectedPlatform: PropTypes.number.isRequired,
};

export default PlatformSelector;
