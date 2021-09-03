import {
  Button, HStack, Flex, Heading, Radio, RadioGroup, Stack, Input, Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch} from 'react-redux'

function Options(props) {

  const [optionNameValue, setOptionNameValue] = useState('')
  const [optionEffort1Value, setOptionEffort1Value] = useState()
  const [optionEffort2Value, setOptionEffort2Value] = useState()

  // const options = useSelector(state => state)
  const dispatch = useDispatch()

  const optionName = (event) => {
    setOptionNameValue(event.target.value)
  }

  const optionEffort1 = (event) => {
    setOptionEffort1Value(event.target.value)
  }

  const optionEffort2 = (event) => {
    setOptionEffort2Value(event.target.value)
  }

  let optionEffortValue = optionEffort1Value + optionEffort2Value

  const optionValues = {
    name: optionNameValue,
    effort: optionEffortValue
  }

  const optionNameObject = optionValues.name
  const optionEffortObject = optionValues.effort

  const addEntryClick = () => {
    //passing array back to App
    // props.setOptionsListArray([...props.optionsListArray, optionValues])
    dispatch({type: "add_option", name: optionNameObject, effort: optionEffortObject})
    setOptionNameValue('')
  };

  let disabled = optionNameValue === '' || optionEffort1Value === '' || optionEffort2Value === '' ? true : false

  // console.log('Redux: ' + options.option[1].name)
  // console.log('Option: ' + optionValues.name + optionValues.effort)

  return (
    <Flex direction="column">
      <Text align="left">Plot out your ideas here</Text>
      <Input rounded="sm" mt="20px" variant="filled" onChange={optionName} value={optionNameValue} placeholder="Idea" />
      <HStack spacing="24px">
        <Flex direction="column" w="100%">
          <Heading className="optionLable" size="xs" as="h3">{props.xAxis}</Heading>
          <RadioGroup mt="10px">
            <Stack direction="row">
              <Radio w="30%" name="effort" onChange={optionEffort1} value="1">{props.xAxisStart}</Radio>
              <Radio w="30%" name="effort" onChange={optionEffort1} value="2">{props.xAxisEnd}</Radio>
            </Stack>
          </RadioGroup>
          <Heading className="optionLable" size="xs" as="h3">{props.yAxis}</Heading>
          <RadioGroup mt="10px">
            <Stack direction="row">
              <Radio w="30%" name="effort" onChange={optionEffort2} value="1">{props.yAxisStart}</Radio>
              <Radio w="30%" name="effort" onChange={optionEffort2} value="2">{props.yAxisEnd}</Radio>
            </Stack>
          </RadioGroup>
        </Flex>

      </HStack>
      <Button mt="20px" onClick={addEntryClick} disabled={disabled}>Add</Button>
    </Flex>
  );
}

export default Options;
