import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Modal from "../app/components/Modal";

const meta = {
  title: "Example/Modal",
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    children: undefined,
    isOpen: true,
    onConfirm: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  args: {
    isOpen: false,
    onConfirm: fn(),
    onClose: fn(),
  },
};
