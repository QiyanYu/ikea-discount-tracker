import { SearchIcon } from "@chakra-ui/icons";
import { Form } from "react-router-dom";
import {
  Input,
  Button,
  FormControl,
  FormHelperText,
  Textarea,
  HStack,
} from "@chakra-ui/react";

export default function SearchInput() {
  return (
    <Form>
      <FormControl>
        <HStack>{/* TODO search part */}</HStack>
      </FormControl>
    </Form>
  );
}
