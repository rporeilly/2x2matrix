import {
  Box, Center, SimpleGrid, Text, ListItem, ListIcon, UnorderedList, Flex, Spacer
} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { motion } from "framer-motion"

function Display(props) {

  const options = useSelector(state => state)
  const optionsObject = [...Object.values(options), ...Object.keys(options)]
  // console.log(optionsObject)
  const fadeInSpeed = 0.5

  console.log("Display: " + options)

  let listItemsTopLeft = optionsObject[0] ? optionsObject[0].filter(effortType => effortType.effort === '12').map((i) =>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: fadeInSpeed }} >
      <ListItem key={i.index}>{i.name}</ListItem>
    </motion.div>
  ) : null
  let listItemsTopRight = optionsObject[0] ? optionsObject[0].filter(effortType => effortType.effort === '22').map((i) =>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: fadeInSpeed }} >
      <ListItem key={i.index}>{i.name}</ListItem>
    </motion.div>
  ) : null
  let listItemsBottomLeft = optionsObject[0] ? optionsObject[0].filter(effortType => effortType.effort === '11').map((i) =>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: fadeInSpeed }} >
      <ListItem key={i.index}>{i.name}</ListItem>
    </motion.div>
  ) : null
  let listItemsBottomRight = optionsObject[0] ? optionsObject[0].filter(effortType => effortType.effort === '21').map((i) =>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: fadeInSpeed }} >
      <ListItem key={i.index}>{i.name}</ListItem>
    </motion.div>
  ) : null

  let matrixHeightInit = document.getElementById('matrix') !== null ? document.getElementById('matrix').clientHeight : null
  props.setMatrixHeight(matrixHeightInit)

  return (
    <Box position="relative">
      <Box transform="rotate(-90deg)" position="absolute" bottom="55px">
        <Text position="absolute" top="-25px" left="-50px" w="250px" align="left">{props.yAxisStart}</Text>
        <Text
          fontWeight="bold"
          fontSize="1.25rem"
          position="absolute"
          top="-60px"
          left="-50px"
          w={props.matrixHeight}
          align="center"
          borderBottom="1px solid lightgray" >{props.YAxisValue}</Text>
        <Text position="absolute" top="-25px" right={-props.matrixHeight + 50}>{props.yAxisEnd}</Text>
      </Box>
      <Box id="matrix" rounded="md" boxShadow="md">
        <SimpleGrid columns={2} spacing={0}>
          <Box minH="200" bg="#227387" color="#fff">
            <Center p="10">
              <UnorderedList align="left">
                {listItemsTopLeft}
              </UnorderedList>
            </Center>
          </Box>
          <Box minH="200" bg="#0F4261" color="#fff">
            <Center p="10">
              <UnorderedList align="left">
                {listItemsTopRight}
              </UnorderedList>
            </Center>
          </Box>
          <Box minH="200" bg="#BBE1DE">
            <Center p="10">
              <UnorderedList align="left">
                {listItemsBottomLeft}
              </UnorderedList>
            </Center>
          </Box>
          <Box minH="200" bg="#85AFAC">
            <Center p="10">
              <UnorderedList align="left">
                {listItemsBottomRight}
              </UnorderedList>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
      <Box position="absolute" w="100%">
        <Flex w="100%" justify="space-between">
          <Text align="left" mt="3px">{props.xAxisStart}</Text>
          <Text
            fontWeight="bold"
            fontSize="1.25rem"
            align="center"
            position="absolute"
            top="25px"
            w="100%"
            borderTop="1px solid lightgray">{props.XAxisValue}</Text>
          <Text align="left" mt="3px">{props.xAxisEnd}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Display;
