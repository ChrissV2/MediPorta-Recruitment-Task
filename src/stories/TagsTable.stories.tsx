import { StoryFn, Meta } from '@storybook/react';
import TagsTable, { TagsTableProps } from '../TagsTable';

export default {
  title: 'Components/TagsTable',
  component: TagsTable,
} as Meta;

const Template: StoryFn<TagsTableProps> = (args) => <TagsTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { name: 'Tag1', count: 10 },
    { name: 'Tag2', count: 20 },
    { name: 'Tag3', count: 30 },
    // Add more tag objects here as needed
  ],
};
