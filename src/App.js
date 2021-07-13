import {
  ChakraProvider, Box, Text, Heading, VStack, Code, Grid, GridItem, extendTheme, Input, Button, List, ListItem, ListIcon, OrderedList, UnorderedList, Fade, ScaleFade, Slide, SlideFade, Flex, Spacer, useColorMode, useColorModeValue, Link, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import theme from './theme';
import Controls from './components/Controls';
import Display from './components/Display';

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function App() {


  const [xAxis, setXAxis] = useStickyState("", "xaxis");
  const [yAxis, setYAxis] = useStickyState("", "yaxis");
  const [matrixTitle, setMatrixTitle] = useStickyState("", "title");

  const getXAxisValue = (event) => {
    setXAxis(event.target.value)
  }

  const getYAxisValue = (event) => {
    setYAxis(event.target.value)
  }

  const setTitle = (event) => {
    setMatrixTitle(event.target.value)
  }

  const clearState = () => {
    setXAxis("")
    setYAxis("")
    setMatrixTitle("")
  }


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        <Box boxShadow="md" p="6" bg="white" rounded="md" minH="90vh" maxW="92%" m="5vh auto 0" className="wrapper">
          <Heading as="h1">{matrixTitle ? matrixTitle : "Title"}</Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem colSpan={2} p="5">
              <Controls
                getX={getXAxisValue}
                getY={getYAxisValue}
                clearState={clearState}
                setTitle={setTitle}
                matrixTitle={matrixTitle}
                yAxis={yAxis}
                xAxis={xAxis}
              />
            </GridItem>
            <GridItem colSpan={3} p="5">
              <Display
                XAxisValue={xAxis}
                YAxisValue={yAxis}
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
