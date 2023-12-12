import type { Meta, StoryObj } from "@storybook/react";
import Video from "./";

const meta = {
  title: "Sections/Video",
  component: Video,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    showBgImg: true,
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Video {...args} />;
  },
};
