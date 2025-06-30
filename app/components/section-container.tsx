import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
}
