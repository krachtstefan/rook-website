import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavMenuLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function NavMenuLink({ href, label, className }: NavMenuLinkProps) {
  return (
    <NavigationMenuLink href={href} className={cn("py-1.5", className)}>
      {label}
    </NavigationMenuLink>
  );
}
