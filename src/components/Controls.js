import {
  Box, Button, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Flex, Spacer
} from '@chakra-ui/react';
import Options from './Options';

function Controls(props) {

  return (
    <Box>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Configurations</Tab>
          <Tab>Options</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing={5}>
              <Text align="left">Enter setup configurations below.</Text>
              <Input variant="flushed" onChange={props.setTitle} value={props.matrixTitle} placeholder="Title" />
              <Input variant="flushed" onChange={props.getX} value={props.xAxis} placeholder="X-axis" />
              <Flex>
                <Input mr="20px" variant="flushed" onChange={props.getxAxisStart} value={props.xAxisStart} placeholder="X-axis start" />
                <Spacer />
                <Input variant="flushed" onChange={props.getxAxisEnd} value={props.xAxisEnd} placeholder="X-axis end" />
              </Flex>
              <Input variant="flushed" onChange={props.getY} value={props.yAxis} placeholder="Y-axis" />
              <Flex>
                <Input mr="20px" variant="flushed" onChange={props.getyAxisStart} value={props.yAxisStart} placeholder="Y-axis start" />
                <Spacer />
                <Input variant="flushed" onChange={props.getyAxisEnd} value={props.yAxisEnd} placeholder="Y-axis end" />
              </Flex>
            </Stack>
            <Button mt="20px" onClick={props.clearState}>Reset</Button>
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>

  );
}

export default Controls;
