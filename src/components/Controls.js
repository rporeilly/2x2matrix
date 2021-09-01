import {
  Box, Button, Stack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Input
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
              <Input variant="flushed" onChange={props.getY} value={props.yAxis} placeholder="Y-axis" />
            </Stack>
            <Button mt="20px" onClick={props.clearState}>Reset</Button>
          </TabPanel>
          <TabPanel>
            <Options
              optionsListArray={props.optionsListArray}
              setOptionsListArray={props.setOptionsListArray}
              xAxis={props.xAxis}
              yAxis={props.yAxis}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>

  );
}

export default Controls;
