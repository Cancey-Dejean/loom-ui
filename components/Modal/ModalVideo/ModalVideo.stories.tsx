import type { Meta, StoryObj } from "@storybook/react"
import ModalVideo from "./"

const meta = {
  title: "Components/ModalVideo",
  component: ModalVideo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[1000px]">
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
} satisfies Meta<typeof ModalVideo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <ModalVideo {...args} />
  },
}
