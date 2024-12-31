import { HStack , Image, } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import PropTypes from 'prop-types';
const NavBar = ({onSearch}) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px' ></Image>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}

NavBar.propTypes = {    
    onSearch: PropTypes.func.isRequired,
};
export default NavBar;