import React from "react";
import { IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ placeholder }) => {
  return (
    <InputGroup w={{ base: "100%", md: "250px" }}>
      <InputLeftElement
        children={
          <IconButton
            bg='inherit'
            borderRadius='inherit'
            _hover='none'
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            icon={<SearchIcon color="rgba(74, 251, 72, 1)" />}
          />
        }
      />
      <Input
        variant='filled'
        fontSize='sm'
        bg='secondaryGray.300'
        color='gray.700'
        fontWeight='500'
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius='30px'
        placeholder={placeholder ? placeholder : "Search..."}
        border="1px solid gray.200" // Add border here
        boxShadow="0px 0px 3px rgba(0, 0, 0, 0.1)" // Add boxShadow here
      />
    </InputGroup>
  );
};

export default SearchBar;
