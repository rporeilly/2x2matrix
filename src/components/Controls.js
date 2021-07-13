import {
  Box, Flex, Text, Heading, Stack, Input
} from '@chakra-ui/react';
import Options from './Options';

function Controls(props) {

  return (
    <Box>
      <Text align="left">Enter your X and Y axis' below.</Text>
      <Flex m="20px 0">
        <Input mr="20px" onChange={props.getX} placeholder="X-axis" />
        <Input onChange={props.getY} placeholder="Y-axis" />
      </Flex>
      <Options />
    </Box>

  );
}

export default Controls;
