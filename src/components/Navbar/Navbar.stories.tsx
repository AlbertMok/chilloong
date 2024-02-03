import type { Meta, StoryObj } from "@storybook/react";
import { Navbar, NavbarItem } from "./Navbar";
const meta = {
  title: "Navbar",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

export const NavbarStory: StoryObj<{ value: string }> = {
  args: { value: "home" },
  render: ({ value }) => {
    return (
      <Navbar pathName={value}>
        <NavbarItem pathName="/home">主页</NavbarItem>
        <NavbarItem pathName="/posts">文章</NavbarItem>
        <NavbarItem pathName="/projects">项目</NavbarItem>
        <NavbarItem pathName="/collections">收藏</NavbarItem>
      </Navbar>
    );
  },
  argTypes: {
    value: {
      control: {
        type: "radio",
      },
      options: ["home", "posts", "projects", "collections"],
    },
  },
};
