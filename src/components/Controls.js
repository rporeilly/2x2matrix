import {
  Box, Text, Heading, Stack, Input
} from '@chakra-ui/react';
import Options from './Options';

function Controls() {
  return (
    <Stack spacing={5}>
      <Input placeholder="X-axis" />
      <Input placeholder="Y-axis" />
      <Options />
    </Stack>
  );
}

export default Controls;
