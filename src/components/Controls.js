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
              <Input onChange={props.setTitle} value={props.matrixTitle} placeholder="Title" />
              <Input  onChange={props.getX} value={props.xAxis} placeholder="X-axis" />
              <Input onChange={props.getY} value={props.yAxis} placeholder="Y-axis" />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Options />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button onClick={props.clearState}>Reset</Button>
    </Box>

  );
}

export default Controls;
