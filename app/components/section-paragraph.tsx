import { cn } from "@/lib/utils";

type SectionParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionParagraph({
  children,
  className,
}: SectionParagraphProps) {
  return (
    <p
      className={cn("text-pretty text-lg font-medium sm:text-xl/8", className)}
    >
      {children}
    </p>
  );
}
