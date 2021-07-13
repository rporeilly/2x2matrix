import {
  Button, HStack, Flex, Heading, Radio, RadioGroup, Stack, Input
} from '@chakra-ui/react';

function Options(props) {
  return (
    <Flex direction="column">
      <Input variant="flushed" placeholder="Option" />
      <HStack spacing="24px">
        <Flex direction="column">
        <Heading size="sm" m="15px 0 0" align="left" as="h3">{props.xAxis}</Heading>
          <RadioGroup mt="10px" onChange={props.setEffort} value={props.effort}>
            <Stack direction="row">
              <Radio value="1">Low</Radio>
              <Radio value="2">High</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex direction="column">
        <Heading size="sm" m="15px 0 0" align="left" as="h3">{props.yAxis}</Heading>
        <RadioGroup mt="10px" onChange={props.setEffort} value={props.effort}>
          <Stack direction="row">
            <Radio value="3">Low</Radio>
            <Radio value="4">High</Radio>
          </Stack>
        </RadioGroup>
        </Flex>
      </HStack>
      <Button mt="20px">Add</Button>
    </Flex>
  );
}

export default Options;
