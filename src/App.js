import {
  ChakraProvider, Box, Grid, Heading, GridItem
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import theme from './theme';
import Controls from './components/Controls';
import Display from './components/Display';
import { useDispatch} from 'react-redux'

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function App() {
  const dispatch = useDispatch()
  const [xAxis, setXAxis] = useStickyState("", "xaxis");
  const [yAxis, setYAxis] = useStickyState("", "yaxis");
  const [matrixTitle, setMatrixTitle] = useStickyState("", "title");
  // const [optionsListArray, setOptionsListArray] = useStickyState([], "options");
  const [optionsListArray, setOptionsListArray] = useState([])

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
    dispatch({type: 'RESET'})
  }

  // console.log(optionsListArray)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        <Box boxShadow="md" p="6" bg="white" rounded="md" minH="90vh" maxW="92%" m="5vh auto 0" className="wrapper">
          <Heading as="h1">{matrixTitle ? matrixTitle : "Title"}</Heading>
          <Grid templateColumns="repeat(6, 1fr)" gap={4}>
            <GridItem colSpan={2} p="5">
              <Controls
                getX={getXAxisValue}
                getY={getYAxisValue}
                clearState={clearState}
                setTitle={setTitle}
                matrixTitle={matrixTitle}
                yAxis={yAxis}
                xAxis={xAxis}
                optionsListArray={optionsListArray}
                setOptionsListArray={setOptionsListArray}
              />
            </GridItem>
            <GridItem colSpan={4} p="5">
              <Display
                XAxisValue={xAxis}
                YAxisValue={yAxis}
                optionsListArray={optionsListArray}
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
