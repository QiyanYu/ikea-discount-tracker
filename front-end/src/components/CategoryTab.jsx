import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function CategoryTab({ categories }) {
  console.log(categories);
  return (
    <Tabs variant="soft-rounded" colorScheme="gray" size="sm" isFitted>
      <TabList>
        {categories.map((c) => (
          <Tab key={c}>{c}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
