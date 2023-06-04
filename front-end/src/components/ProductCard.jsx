import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ data }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <Card height="400px" width="300px">
      <CardBody h="260px" p="10px">
        <Image
          src={data.image}
          alt={data.name + data.details}
          objectFit="contain"
          w="100%"
          h="100%"
        />
      </CardBody>
      <CardBody h="90px" px="20px" py="10px">
        <Stack>
          <Heading size="sm">{data.name}</Heading>
          <Text size="sm" noOfLines={2}>
            {data.details}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter h="50px" px="20px" py="10px">
        <HStack>
          <Text textDecor="line-through" fontSize="md" my="0">
            {data.originalPrice}
          </Text>
          <Text fontWeight="bold" color="red.400" fontSize="lg" my="0">
            {data.currentPrice}
          </Text>
          <Badge fontSize={12} position="absolute" right="20px" bottom="17px">
            {data.discountPercent + "OFF"}
          </Badge>
        </HStack>
      </CardFooter>
      <Box as="button">
        <FaHeart
          size={20}
          color={isLiked ? "#EF5350" : "#E2E8F0"}
          style={{ position: "absolute", top: "20px", right: "20px" }}
          onClick={handleLikeClick}
        />
      </Box>
    </Card>
  );
}
