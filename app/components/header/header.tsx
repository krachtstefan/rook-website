import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Logo } from "./logo";
import MobileMenuButton from "./mobile-menu-btn";
import { NavMenuLink } from "./nav-menu-link";
import { navigationLinks } from "./nav-items";

export default function Component() {
  return (
    <header className="flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <Popover>
        <PopoverTrigger asChild>
          <MobileMenuButton className="md:hidden" />
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64 p-1 md:hidden">
          <NavigationMenu className="max-w-none *:w-full">
            <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
              {navigationLinks.map((link, index) => {
                const isSubmenu = link.type === "submenu";
                const isLastItem = index === navigationLinks.length - 1;
                return (
                  <NavigationMenuItem key={index} className="w-full">
                    {isSubmenu ? (
                      <>
                        <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                          {link.label}
                        </div>
                        <ul>
                          {link.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavMenuLink
                                href={item.href}
                                label={item.label}
                              />
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <NavMenuLink href={link.href} label={link.label} />
                    )}
                    {!isLastItem && (
                      <div
                        role="separator"
                        aria-orientation="horizontal"
                        className="h-px w-full bg-border"
                      />
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent>
      </Popover>
      <a href="/" className="flex grow items-center gap-2 text-primary">
        <Logo className="size-16 fill-primary" />
        <span>R∞k Komputer</span>
      </a>
      <NavigationMenu viewport={false} className="max-md:hidden">
        <NavigationMenuList className="gap-2">
          {navigationLinks.map((link, index) => {
            const isSubmenu = link.type === "submenu";
            return (
              <NavigationMenuItem key={index}>
                {isSubmenu ? (
                  <>
                    <NavigationMenuTrigger className="px-2 py-1.5">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-50 p-1">
                      <ul className="min-w-48">
                        {link.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <NavMenuLink href={item.href} label={item.label} />
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavMenuLink
                    href={link.href}
                    className="py-1.5"
                    label={link.label}
                  />
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
