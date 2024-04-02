import { StoryFn, Meta } from '@storybook/react';
import App from '../App';

export default {
  title: 'Components/App',
  component: App,
} as Meta;

const Template: StoryFn = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};
