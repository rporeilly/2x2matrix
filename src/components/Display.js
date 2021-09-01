import {
  Box, Center, SimpleGrid, Text, ListItem, ListIcon, UnorderedList
} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { useSelector } from 'react-redux'

function Display(props) {

  const options = useSelector(state => state)
  const optionsObject = [...Object.values(options), ...Object.keys(options)]
  // console.log(optionsObject[0])

  // console.log("Display: " + options.option[0].name)
  const listItemsTopLeft = optionsObject[0].filter(effortType => effortType.effort === '12').map((i) =>
    <ListItem key={i.index}>{i.name}</ListItem>
  )
  const listItemsTopRight = optionsObject[0].filter(effortType => effortType.effort === '22').map((i) =>
    <ListItem key={i.index}>{i.name}</ListItem>
  )
  const listItemsBottomLeft = optionsObject[0].filter(effortType => effortType.effort === '11').map((i) =>
    <ListItem key={i.index}>{i.name}</ListItem>
  )
  const listItemsBottomRight = optionsObject[0].filter(effortType => effortType.effort === '21').map((i) =>
    <ListItem key={i.index}>{i.name}</ListItem>
  )
  return (
    <Box position="relative">
      <Box transform="rotate(-90deg)" position="absolute" bottom="55px">
        <Text fontSize="1.25rem" position="fixed" top="-30px" w="250px" align="left" >{props.YAxisValue}
          <ArrowForwardIcon position="absolute" top="5px" ml="10px"/>
        </Text>
      </Box>
      <Box rounded="md" boxShadow="md">
        <SimpleGrid columns={2} spacing={0}>
          <Box bg="#ffff76">
            <Center p="10">
              <UnorderedList>
                {listItemsTopLeft}
              </UnorderedList>
            </Center>
          </Box>
          <Box bg="#b4e0b4">
            <Center p="10">
              <UnorderedList>
                {listItemsTopRight}
              </UnorderedList>
            </Center>
          </Box>
          <Box bg="#f1a8a8">
            <Center p="10">
              <UnorderedList>
                {listItemsBottomLeft}
              </UnorderedList>
            </Center>
          </Box>
          <Box bg="#f3d89d">
            <Center p="10">
              <UnorderedList>
                {listItemsBottomRight}
              </UnorderedList>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
      <Text fontSize="1.25rem" align="left" ml="20px">{props.XAxisValue}
        <ArrowForwardIcon ml="10px"/>
      </Text>
    </Box>
  );
}

export default Display;
