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
  const [xAxisStart, setXAxisStart] = useStickyState("", "xaxisstart");
  const [xAxisEnd, setXAxisEnd] = useStickyState("", "xaxisend");
  const [yAxis, setYAxis] = useStickyState("", "yaxis");
  const [yAxisStart, setYAxisStart] = useStickyState("", "yaxisstart");
  const [yAxisEnd, setYAxisEnd] = useStickyState("", "yaxisend");
  const [matrixTitle, setMatrixTitle] = useStickyState("", "title");
  // const [optionsListArray, setOptionsListArray] = useStickyState([], "options");
  const [optionsListArray, setOptionsListArray] = useState([])
  const [matrixHeight, setMatrixHeight] = useState("400", "matrixheight")

  const getXAxisValue = (event) => {
    setXAxis(event.target.value)
  }

  const getXAxisValueStart = (event) => {
    setXAxisStart(event.target.value)
  }

  const getXAxisValueEnd = (event) => {
    setXAxisEnd(event.target.value)
  }

  const getYAxisValue = (event) => {
    setYAxis(event.target.value)
  }

  const getYAxisValueStart = (event) => {
    setYAxisStart(event.target.value)
  }

  const getYAxisValueEnd = (event) => {
    setYAxisEnd(event.target.value)
  }

  const setTitle = (event) => {
    setMatrixTitle(event.target.value)
  }

  const getMatrixHeight = (height) => {
    setMatrixHeight(height)
  }

  const clearState = () => {
    setXAxis("")
    setXAxisStart("")
    setXAxisEnd("")
    setYAxis("")
    setYAxisStart("")
    setYAxisEnd("")
    setMatrixTitle("")
    dispatch({type: 'clear_options'})
  }
  // console.log(xAxisStart)
  // console.log(optionsListArray)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        <Heading as="h1" m="30px 0 -30px">{matrixTitle ? matrixTitle : "Title"}</Heading>
        <Box boxShadow="md" p="6" bg="white" rounded="md" minH="50vh" maxW="1400px" m="5vh auto 0" className="wrapper">
          <Grid templateColumns="repeat(6, 1fr)" gap={10}>
            <GridItem colSpan={2} p="5">
              <Controls
                yAxis={yAxis}
                getY={getYAxisValue}
                yAxisStart={yAxisStart}
                yAxisEnd={yAxisEnd}
                getyAxisStart={getYAxisValueStart}
                getyAxisEnd={getYAxisValueEnd}
                xAxis={xAxis}
                getX={getXAxisValue}
                xAxisStart={xAxisStart}
                xAxisEnd={xAxisEnd}
                getxAxisStart={getXAxisValueStart}
                getxAxisEnd={getXAxisValueEnd}
                clearState={clearState}
                setTitle={setTitle}
                matrixTitle={matrixTitle}
                optionsListArray={optionsListArray}
                setOptionsListArray={setOptionsListArray}
              />
            </GridItem>
            <GridItem colSpan={4} p="5">
              <Display
                XAxisValue={xAxis}
                YAxisValue={yAxis}
                optionsListArray={optionsListArray}
                xAxisStart={xAxisStart}
                xAxisEnd={xAxisEnd}
                yAxisStart={yAxisStart}
                yAxisEnd={yAxisEnd}
                matrixHeight={matrixHeight}
                setMatrixHeight={getMatrixHeight}
              />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
