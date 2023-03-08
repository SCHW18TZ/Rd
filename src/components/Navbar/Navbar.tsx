import React from "react";
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex height="44px" padding="6px 12px">
      <Flex align="center">
        <Image
          height="30px"
          src="https://raw.githubusercontent.com/shadeemerhi/reddit-clone-yt/d2470a696e9eae2c86622d23ff5256ad45daf2ae/public/images/redditFace.svg"
        />
        <Image
          height="46px"
          display={{ base: "none", md: "unset" }}
          src="https://raw.githubusercontent.com/shadeemerhi/reddit-clone-yt/d2470a696e9eae2c86622d23ff5256ad45daf2ae/public/images/redditText.svg"
        />
      </Flex>
      {/* <Directory/> */}
      <SearchInput />
    </Flex>
  );
};
export default Navbar;
