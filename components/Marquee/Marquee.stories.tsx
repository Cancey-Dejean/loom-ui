import type { Meta, StoryObj } from "@storybook/react"
import Marquee from "./"

const meta = {
  title: "Components/Marquee",
  component: Marquee,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[1600px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  args: {
    thumb: "https://dummyimage.com/2020x1136.png/dddddd/ffffff",
    thumbAlt: "Modal video thumbnail",
    videoSrc: "/videos/video.mp4",
  },
  argTypes: {
    thumbnailClass: { control: false },
    videoWidth: { control: false },
    videoHeight: { control: false },
  },
} satisfies Meta<typeof Marquee>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Marquee {...args} />
  },
}
