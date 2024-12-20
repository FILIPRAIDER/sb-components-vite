import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom color label",
    fontColor: "green",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    size: "h1",
    label: "Custom color label",
    fontColor: "white",
    backgroundColor: "black",
  },
};
