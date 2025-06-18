type Link = {
  label: string;
  href: string;
};

type MenuLink = Link & {
  type: "link";
};

type MenuWithSubmenuLink = {
  type: "submenu";
  label: string;
  items: Array<Link>;
};

type NavigationLink = MenuLink | MenuWithSubmenuLink;

export const navigationLinks: Array<NavigationLink> = [
  // { type: "link", label: "Home", href: "#" },
  // {
  //   label: "Features",
  //   type: "submenu",
  //   items: [
  //     {
  //       label: "Components",
  //       href: "#",
  //     },
  //     {
  //       label: "Documentation",
  //       href: "#",
  //     },
  //     {
  //       label: "Templates",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Pricing",
  //   type: "submenu",
  //   items: [
  //     { label: "Product A", href: "#" },
  //     { label: "Product B", href: "#" },
  //     { label: "Product C", href: "#" },
  //     { label: "Product D", href: "#" },
  //   ],
  // },
  // {
  //   label: "About",
  //   type: "submenu",
  //   items: [
  //     { label: "Getting Started", href: "#" },
  //     { label: "Tutorials", href: "#" },
  //     { label: "About Us", href: "#" },
  //   ],
  // },
] as const;
