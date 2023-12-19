import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Button",
  component: Button,
  args: {
    size: "medium",
    variant: "primary",
    fontWeight: "normal",
    className: "",
    url: "",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
    fontWeight: {
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Button variant="primary" url="/" {...args} />
  },
}
