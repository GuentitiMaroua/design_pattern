import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogoImage } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  

  return (
    <Flex align='center' direction='column'>
   <img src={HorizonLogoImage} alt="Horizon Logo" style={{ width: '175px', height: '150px', marginBottom: '32px' }} />

    {/* Ajoutez le séparateur ici si nécessaire */}
  </Flex>
);

}

export default SidebarBrand;
