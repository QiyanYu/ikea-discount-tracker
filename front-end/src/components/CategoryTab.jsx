import { Tab, TabList, Tabs } from "@chakra-ui/react";

export default function CategoryTab({ data }) {
  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <Tabs>
      <TabList>
        {categories.map((c) => (
          <Tab key={c}>{c}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
