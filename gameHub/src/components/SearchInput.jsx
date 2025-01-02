import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  // useRef: form只有一个input元素 ref就可以处理
  const ref = useRef(null);

  const setSearchText = useGameQueryStore(s => s.setSearchText)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
         console.log(ref.current.value);
         setSearchText(ref.current.value);
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

export default SearchInput;
