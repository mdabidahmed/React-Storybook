import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from './Button';
// argTypes: { contact: { control: 'radio', options: ['email', 'phone', 'mail'] }}
export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
      defaultValue: 'button'
    },
    primary: {
      control: 'select',
      options: [true, false]
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  console.log('hello');
  return <Button {...args} />;
};
export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  size: 'medium'
  // label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  // ...Primary.args,
  // primary: false,
  size: 'medium'
  // label: 'Button'
};
