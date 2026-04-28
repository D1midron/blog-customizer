import type { Meta, StoryObj } from '@storybook/react';
import { App } from './App';

const meta = {
	title: 'Pages/MainPage',
	component: App,
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof App>;

export const InteractivePage: Story = {};
