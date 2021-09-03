import {
  Box, Button, Stack, Text, Input, Flex, Spacer, Accordion,
  AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react';
import Options from './Options';

function Controls(props) {

  return (
    <Box>
      <Accordion defaultIndex={0}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <b>Configurations</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Stack spacing={5}>
              <Text align="left">Enter setup configurations below to set up your 2x2 decision making matrix.</Text>
              <Input rounded="sm" variant="filled" onChange={props.setTitle} value={props.matrixTitle} placeholder="Title" />
              <Input rounded="sm" variant="filled" onChange={props.getX} value={props.xAxis} placeholder="X-axis" />
              <Flex>
                <Input rounded="sm" mr="20px" variant="filled" onChange={props.getxAxisStart} value={props.xAxisStart} placeholder="X-axis start" />
                <Spacer />
                <Input rounded="sm" variant="filled" onChange={props.getxAxisEnd} value={props.xAxisEnd} placeholder="X-axis end" />
              </Flex>
              <Input rounded="sm" variant="filled" onChange={props.getY} value={props.yAxis} placeholder="Y-axis" />
              <Flex>
                <Input rounded="sm" mr="20px" variant="filled" onChange={props.getyAxisStart} value={props.yAxisStart} placeholder="Y-axis start" />
                <Spacer />
                <Input rounded="sm" variant="filled" onChange={props.getyAxisEnd} value={props.yAxisEnd} placeholder="Y-axis end" />
              </Flex>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <b>Ideas</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Options
              optionsListArray={props.optionsListArray}
              setOptionsListArray={props.setOptionsListArray}
              xAxis={props.xAxis}
              xAxisStart={props.xAxisStart}
              xAxisEnd={props.xAxisEnd}
              yAxis={props.yAxis}
              yAxisStart={props.yAxisStart}
              yAxisEnd={props.yAxisEnd}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button mt="20px" onClick={props.clearState}>Reset</Button>
    </Box>

  );
}

export default Controls;
