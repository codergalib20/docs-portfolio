import { AiFillHome } from "react-icons/ai";

type Data = {
  name: string;
  icon: string;
  sub?: {
    name: string;
    icon: string;
  }[];
};

const menus: Data[] = [
  {
    name: "Home",
    icon: ``,
  },
  {
    name: "About",
    icon: "icon",
    sub: [
      {
        name: "About 2",
        icon: "icon2",
      },
      {
        name: "About 2",
        icon: "icon2",
      },
    ],
  },
  {
    name: "blogs",
    icon: "blogicon",
    sub: [
      {
        name: "blog-1",
        icon: "blogicon-1",
      },
      {
        name: "blog-2",
        icon: "blogicon-2",
      },
      {
        name: "blog-3",
        icon: "blogicon-3",
      },
      {
        name: "blog-4",
        icon: "blogicon-4",
      },
    ],
  },
  {
    name: "docs",
    icon: "docs",
    sub: [
      {
        name: "docs 1",
        icon: "docs icon",
      },
      {
        name: "docs 2",
        icon: "docs icon",
      },
      {
        name: "docs 3",
        icon: "docs icon",
      },
    ],
  },
];

export default menus;
