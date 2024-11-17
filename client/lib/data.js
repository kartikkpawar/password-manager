import {
  CircleUserIcon,
  CreditCardIcon,
  HomeIcon,
  KeyIcon,
  MapPinIcon,
  NotebookIcon,
  RectangleEllipsisIcon,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Main",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Account",
    url: "/home",
    icon: CircleUserIcon,
  },
  {
    title: "Bank Cards",
    url: "/cards",
    icon: CreditCardIcon,
  },
  {
    title: "Notes",
    url: "/notes",
    icon: NotebookIcon,
  },
  {
    title: "Address",
    url: "/address",
    icon: MapPinIcon,
  },
  {
    title: "Password Check",
    url: "/password-check",
    icon: KeyIcon,
  },
  {
    title: "Password Generator",
    url: "/password-generator",
    icon: RectangleEllipsisIcon,
  },
];
