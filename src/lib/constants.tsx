import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Moon,
  User,
  Youtube,
} from "lucide-react";

export const sideBarItems = [
  {
    header: "Getting Started",
    item: [
      {
        label: "Introduction",
        uri: "#",
      },
      {
        label: "Gallery",
        uri: "#",
      },
      {
        label: "Quick Setup",
        uri: "#",
      },
      {
        label: "FAQ",
        uri: "#",
      },
    ],
  },
  {
    header: "Example 1",
    item: [
      {
        label: "Item 1",
        uri: "#",
      },
      {
        label: "Item 2",
        uri: "#",
      },
      {
        label: "Subsection A",
        uri: "#",
      },
      {
        label: "Subsection B",
        uri: "#",
      },
    ],
  },
  {
    header: "Example 2",
    item: [
      {
        label: "Overview",
        uri: "#",
      },
      {
        label: "Features",
        uri: "#",
      },
      {
        label: "Case Study 1",
        uri: "#",
      },
      {
        label: "Case Study 2",
        uri: "#",
      },
    ],
  },
  {
    header: "Resources",
    item: [
      {
        label: "Documentation",
        uri: "#",
      },
      {
        label: "API Reference",
        uri: "#",
      },
      {
        label: "Community Forums",
        uri: "#",
      },
      {
        label: "Support",
        uri: "#",
      },
    ],
  },
  {
    header: "Contact",
    item: [
      {
        label: "Support Team",
        uri: "#",
      },
      {
        label: "Sales",
        uri: "#",
      },
      {
        label: "Feedback",
        uri: "#",
      },
      {
        label: "Careers",
        uri: "#",
      },
    ],
  },
];
export const navBarItems = [
  {
    groupName: "Actions",
    item: [
      {
        Icon: <Moon />,
        label: "Go Dark",
      },
    ],
  },
  {
    groupName: "Navigation",
    item: [
      {
        Icon: <ArrowRight />,
        label: "Home",
        uri: "/",
      },
      {
        Icon: <ArrowRight />,
        label: "Posts",
        uri: "/post",
      },
    ],
  },
  {
    groupName: "Socials",
    item: [
      {
        Icon: <Linkedin />,
        label: "LinkedIn",
        href: "#",
      },
      {
        Icon: <Github />,
        label: "GitHub",
        href: "#",
      },
      {
        Icon: <Mail />,
        label: "Contact",
        href: "#",
      },
      {
        Icon: <User />,
        label: "About",
        href: "#",
      },
    ],
  },
];

export const badgeContent = [
  {
    label: "Frontend Developer",
    uri: "#",
  },
  {
    label: "About Me",
    uri: "#",
  },
  {
    label: "Projects",
    uri: "#",
  },
  {
    label: "Contact",
    uri: "#",
  },
];

export const cardContent = [
  {
    title: "My Journey to Success.",
    image: "/images/everestjpg.jpg",
    header: "Inspiring Stories",
    description:
      "From personal experiences to motivational tales, this section delves into the stories that inspire resilience, growth, and determination. Whether it’s overcoming obstacles, celebrating small victories, or sharing lessons learned along the way, these narratives aim to spark a sense of connection and motivate you to pursue your own dreams with courage and confidence.",
  },
  {
    title: "Mastering Productivity.",
    image: "/images/howtojpg.jpg",
    header: "How-To-Guides",
    description:
      "Tips and tricks to make life easier or tackle challenges head-on, this section is your go-to guide for practical solutions. From streamlining daily routines to overcoming complex obstacles, these insights are designed to empower you with actionable steps. Whether you're looking to boost productivity, save time, or navigate life's curveballs, you'll find plenty of tools and techniques to simplify and succeed.",
  },
  {
    title: "The Future of AI.",
    image: "/images/tech.jpg",
    header: "Tech Insights",
    description:
      "Exploring the latest trends, tools, and breakthroughs, this section dives into the ever-evolving world of technology and innovation. From cutting-edge advancements to game-changing tools, it’s your gateway to staying informed and inspired. Whether you’re a tech enthusiast, a professional, or just curious about the future, you’ll discover insights that bridge the gap between curiosity and expertise.",
  },
];
