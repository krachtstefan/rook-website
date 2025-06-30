import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return <h2 className={cn("text-2xl", className)}>{children}</h2>;
}
