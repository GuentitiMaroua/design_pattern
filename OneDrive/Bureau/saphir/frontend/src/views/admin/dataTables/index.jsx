

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";


import React from "react";
import DailyTraffic from "./components/DailyTraffic";
import WeeklyRevenue from "./components/WeeklyRevenue";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      
      <SimpleGrid mb='20px' columns={{ sm: 1, md: 2 }} spacing={{ base: "20px", xl: "20px" }}>
      <DailyTraffic />
      </SimpleGrid>
      <SimpleGrid mb='20px' columns={{ sm: 1, md: 2 }} spacing={{ base: "20px", xl: "20px" }}>
      <WeeklyRevenue />
      </SimpleGrid>
    </Box>
  );
}
