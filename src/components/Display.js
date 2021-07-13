import {
  Box, Center, SimpleGrid, Text, Heading, VStack, Input
} from '@chakra-ui/react';

function Display() {
  return (
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
  );
}

export default Display;
