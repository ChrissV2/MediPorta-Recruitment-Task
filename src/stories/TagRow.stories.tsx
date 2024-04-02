import { StoryFn, Meta } from '@storybook/react';
import TagRow, { TagRowProps } from '../TagRow';
import { Table } from '@chakra-ui/react'

export default {
  title: 'Components/TagRow',
  component: TagRow,
} as Meta;

const Template: StoryFn<TagRowProps> = (args) => (
    <Table>
      <TagRow {...args} />
    </Table>
  );
  
export const Default = Template.bind({});
Default.args = {
  tag: { name: 'Tag1', count: 10 },
};
