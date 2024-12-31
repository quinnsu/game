import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import ProtoTypes from "prop-types";

const SearchInput = ({ onSearch }) => {
  // useRef: form只有一个input元素 ref就可以处理
  const ref = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
         console.log(ref.current.value);
         onSearch(ref.current.value);
        }
      }}
    >
      {/* onSubmit={(e) => e.preventDefault()}: 阻止表单提交 */}
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

SearchInput.propTypes = {
  onSearch: ProtoTypes.func.isRequired,
};

export default SearchInput;
