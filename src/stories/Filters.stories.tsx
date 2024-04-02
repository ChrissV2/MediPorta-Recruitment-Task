import { StoryFn, Meta } from '@storybook/react';
import Filters, { FiltersProps } from '../Filters';

export default {
  title: 'Components/Filters',
  component: Filters,
} as Meta;

const Template: StoryFn<FiltersProps> = (args) => <Filters {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
  sortBy: 'name',
  sortOrder: 'asc',
  onPageSizeChange: () => {}, // Dummy function for demonstration
  onSortByChange: () => {}, // Dummy function for demonstration
  onSortOrderChange: () => {}, // Dummy function for demonstration
};
