import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  Shirt,
  Pill,
  Pizza,
  Carrot
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Orders",
      menus: [
        {
          href: "/dashboard",
          label: "My Orders",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Products",
      menus: [
        {
          href: "/medicines",
          label: "Medicines",
          active: pathname.includes("/medicines"),
          icon: Pill,
          submenus: []
        },
        {
          href: "/groccery",
          label: "Grocceries",
          active: pathname.includes("/groccery"),
          icon: Carrot,
          submenus: []
        },
        {
          href: "/food",
          label: "Food",
          active: pathname.includes("/food"),
          icon: Pizza,
          submenus: []
        },
        {
          href: "/fashion",
          label: "Fashion",
          active: pathname.includes("/fashion"),
          icon: Shirt,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
      
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
