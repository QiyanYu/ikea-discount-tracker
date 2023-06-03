import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
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
    <Card width="250px" height="350px" p="5px" position="relative">
      <CardBody p="10px">
        <Link as="a" href={data.link} target="_blank" isExternal>
          <Image
            src={data.image}
            alt={data.name + data.details}
            objectFit="cover"
          />
        </Link>
        <Stack>
          <Heading size="sm">{data.name}</Heading>
          <Text fontSize="xs" noOfLines={2}>
            {data.details}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter p="5px">
        <Text textDecor="line-through" fontSize="md">
          {data.originalPrice}
        </Text>
        <Text fontWeight="bold" color="red.400" fontSize="lg" px="8px">
          {data.currentPrice}
        </Text>
        <Badge p={1} fontSize={12}>
          {data.discountPercent + "OFF"}
        </Badge>
        <Box as="button">
          <FaHeart
            size={20}
            color={isLiked ? "#EF5350" : "gray"}
            style={{ position: "absolute", top: "15px", right: "15px" }}
            onClick={handleLikeClick}
          />
        </Box>
      </CardFooter>
    </Card>
  );
}
