import {
  Box, Center, SimpleGrid, Text
} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'

function Display(props) {
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
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </Center>
          </Box>
          <Box bg="#b4e0b4">
            <Center p="10">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
              </ul>
            </Center>
          </Box>
          <Box bg="#f1a8a8">
            <Center p="10">
              <ul>
                <li>Option 1</li>
              </ul>
            </Center>
          </Box>
          <Box bg="#f3d89d">
            <Center p="10">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
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
