import {
  ChakraProvider, Box, Text, Heading, VStack, Code, Grid, GridItem, extendTheme, Input, Button, List, ListItem, ListIcon, OrderedList, UnorderedList, Fade, ScaleFade, Slide, SlideFade, Flex, Spacer, useColorMode, useColorModeValue, Link, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import theme from './theme';
import Controls from './components/Controls';
import Display from './components/Display';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        <Box boxShadow="md" p="6" bg="white" rounded="md" minH="90vh" maxW="92%" m="5vh auto 0" className="wrapper">
          <Heading as="h1">2x2 Matrix</Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2} p="5">
              <Controls />
            </GridItem>
            <GridItem colSpan={3} p="5">
              <Display />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
