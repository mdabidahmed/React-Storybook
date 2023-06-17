import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Header} from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.storyName = 'LoggedOut';

LoggedOut.args = {};
export const LoggedIn = Template.bind({});
LoggedIn.storyName = 'LoggedIn';
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
};
