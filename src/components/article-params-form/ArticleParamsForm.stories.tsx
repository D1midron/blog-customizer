import type { Meta, StoryObj } from '@storybook/react';
import { ArticleParamsForm } from './ArticleParamsForm';
// Импортируем типы пропсов для вложенных компонентов
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { StoryDecorator } from 'src/ui/story-decorator';
import {
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';

const meta = {
	title: 'components/ArticleParamsForm',
	component: ArticleParamsForm,
	tags: ['autodocs'],
	decorators: [StoryDecorator],
} satisfies Meta<typeof ArticleParamsForm>;

export default meta;

type Story = StoryObj<typeof ArticleParamsForm>;

export const Default: Story = {
	args: {
		setArticleState: (state) => {
			console.log('Применены настройки:', state);
		},
	},
};
export const fontSizeOption = {
	render: () => (
		<RadioGroup
			title='Размер шрифта'
			name='fontSize'
			options={fontSizeOptions}
			selected={fontSizeOptions[0]}
			onChange={() => {}}
		/>
	),
};

export const fontColorOptions = {
	render: () => (
		<Select
			title='Цвет шрифта'
			options={fontColors}
			selected={fontColors[0]}
			onChange={() => {}}
		/>
	),
};

export const backgroundColor = {
	render: () => (
		<Select
			title='Цвет фона'
			options={backgroundColors}
			selected={backgroundColors[0]}
			onChange={() => {}}
		/>
	),
};

export const contentWidth = {
	render: () => (
		<Select
			title='Ширина контента'
			options={contentWidthArr}
			selected={contentWidthArr[0]}
			onChange={() => {}}
		/>
	),
};

export const separatorLine = {
	render: () => <Separator />,
};
