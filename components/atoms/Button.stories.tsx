import { StoryFn, Meta } from "@storybook/nextjs-vite";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "select" }, // typeは文字列だけでなくオブジェクトで指定するのが推奨です
      options: ["blue-700", "blue-600", "yellow-500"],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>ボタン</Button>
);

export const Default = Template.bind({});
Default.args = {
  color: "blue-700",
};
