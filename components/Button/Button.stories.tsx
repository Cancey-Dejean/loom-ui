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
    className: "",
    url: "",
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => {
    return <Button variant="primary" url="/" {...args} />
  },
}
