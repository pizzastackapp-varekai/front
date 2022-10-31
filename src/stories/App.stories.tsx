import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { App } from '../App'

export default {
	title: 'Example/App',
	component: App,

	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = args => <App />

export const Primary = Template.bind({})
