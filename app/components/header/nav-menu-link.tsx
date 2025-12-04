import type { LinkOptions } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type NavMenuLinkProps = LinkOptions & {
  label: string;
  className?: string;
};

export function NavMenuLink({
  label,
  className,
  ...linkOptions
}: NavMenuLinkProps) {
  return (
    <NavigationMenuLink asChild>
      <Link {...linkOptions} className={cn("py-1.5", className)}>
        {label}
      </Link>
    </NavigationMenuLink>
  );
}
