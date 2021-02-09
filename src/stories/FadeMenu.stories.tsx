import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import FadeMenu, { FadeMenuProps  } from "../components/FadeMenu";

export default {
    title: 'Example/FadeMenu',
    component: FadeMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<FadeMenuProps> = (args) => <FadeMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    menuItems: ['111', '2222', '33333']
};
