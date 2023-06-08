import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Link,
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
    <Card height="300px" width="250px">
      <Link href={data.link} isExternal>
        <CardBody h="180px" p="5px">
          <Image
            src={data.image}
            alt={data.name + data.details}
            objectFit="contain"
            w="100%"
            h="100%"
          />
        </CardBody>
      </Link>
      <CardBody h="50px" p="5px" mx="10px">
        <Stack>
          <Heading size="xs">{data.name}</Heading>
          <Text fontSize="sm" noOfLines={2}>
            {data.details}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter h="40px" p="5px" mx="10px">
        <HStack>
          <Text textDecor="line-through" my="0" fontSize="sm">
            {data.originalPrice}
          </Text>
          <Text fontWeight="bold" color="red.400" my="0">
            {data.currentPrice}
          </Text>
          <Badge fontSize={12} position="absolute" right="20px" bottom="12px">
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
