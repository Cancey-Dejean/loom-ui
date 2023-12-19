import type { Meta, StoryObj } from "@storybook/react"

import Text from "./Text"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Text",
  component: Text,
  args: {
    as: "h1",
    variant: "display-lg",
    className: "",
    children: "Text goes here",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: (args) => {
    return <Text {...args} />
  },
}
