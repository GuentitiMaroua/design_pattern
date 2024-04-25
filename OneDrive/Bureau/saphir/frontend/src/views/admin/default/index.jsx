import React from "react";
import {
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import CheckTable from "views/admin/default/components/CheckTable";
import Map from "views/admin/default/components/Map";
import SearchBar from "views/admin/default/components/SearchBar";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";

import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div style={{ marginTop: "5px" }}>
      {/* Place the SearchBar component here */}
      <SearchBar />
      <div style={{ marginTop: "20px" }}>
        {/* Place the Map component here */}
        <Map />
      </div>
    </div>


      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px' mt='20px'>
        <WeeklyRevenue />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <Tasks />
        <MiniCalendar h='100%' minW='100%' selectRange={false} />
      </SimpleGrid>
    </Box>
  );
}
