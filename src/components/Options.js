import {
  Button, HStack, Flex, Heading, Radio, RadioGroup, Stack, Input
} from '@chakra-ui/react';
import React, { useState } from 'react';

function Options(props) {

  const [optionNameValue, setOptionNameValue] = useState()
  const [optionEffort1Value, setOptionEffort1Value] = useState()
  const [optionEffort2Value, setOptionEffort2Value] = useState()

  const optionName = (event) => {
    // props.setOptionName(event.target.value)
    setOptionNameValue(event.target.value)
  }

  const optionEffort1 = (event) => {
    setOptionEffort1Value(event.target.value)
  }

  const optionEffort2 = (event) => {
    setOptionEffort2Value(event.target.value)
  }

  let optionEffortValue = optionEffort1Value + optionEffort2Value
  const optionValues = [
    {
      name: optionNameValue,
      effort: optionEffortValue
    }
  ]

  const [optionsArray, setOptionsArray] = useState([]);
  const addEntryClick = () => {
    setOptionsArray([...optionsArray, optionValues]);
    // setOptionsArray(oldArray => [...oldArray, oldArray]);
  };


  console.log(optionsArray)

  return (
    <Flex direction="column">
      <Input variant="flushed" onChange={optionName} placeholder="Option" />
      <HStack spacing="24px">
        <Flex direction="column" w="100%">
          <Heading className="optionLable" size="xs" as="h3">{props.xAxis}</Heading>
          <RadioGroup mt="10px">
            <Stack direction="row">
              <Radio name="effort" onChange={optionEffort1} value="1">Low</Radio>
              <Radio name="effort" onChange={optionEffort1} value="2">High</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex direction="column" w="100%">
          <Heading className="optionLable" size="xs" as="h3">{props.yAxis}</Heading>
          <RadioGroup mt="10px">
            <Stack direction="row">
              <Radio name="effort" onChange={optionEffort2} value="1">Low</Radio>
              <Radio name="effort" onChange={optionEffort2} value="2">High</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </HStack>
      <Button mt="20px" onClick={addEntryClick}>Add</Button>
    </Flex>
  );
}

export default Options;
