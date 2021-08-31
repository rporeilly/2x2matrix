import {
  Button, HStack, Flex, Heading, Radio, RadioGroup, Stack, Input
} from '@chakra-ui/react';

function Options(props) {

  const optionName = (event) => {
    props.setOptionName(event.target.value)
  }

  return (
    <Flex direction="column">
      <Input variant="flushed" onChange={optionName} placeholder="Option" />
      <HStack spacing="24px">
        <Flex direction="column" w="100%">
          <Heading className="optionLable" size="xs" as="h3">{props.xAxis}</Heading>
          <RadioGroup mt="10px" onChange={props.setEffort} value={props.effort}>
            <Stack direction="row">
              <Radio value="1">Low</Radio>
              <Radio value="2">High</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex direction="column" w="100%">
          <Heading className="optionLable" size="xs" as="h3">{props.yAxis}</Heading>
          <RadioGroup mt="10px" onChange={props.setEffort} value={props.effort}>
            <Stack direction="row">
              <Radio value="3">Low</Radio>
              <Radio value="4">High</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </HStack>
      <Button mt="20px" onClick={props.addOptions}>Add</Button>
    </Flex>
  );
}

export default Options;
