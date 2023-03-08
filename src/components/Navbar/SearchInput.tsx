import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
type SearchInputProps = {
  //   user: any;
};

const SearchInput: React.FC<SearchInputProps> = () => (
  <Flex>
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input type="tel" placeholder="Search" />
    </InputGroup>
  </Flex>
);
export default SearchInput;
