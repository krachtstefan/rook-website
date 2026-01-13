import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Link, type LinkProps } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/header/logo";
import type { ReactNode } from "react";

type ErrorPageProps = {
  title: string;
  description: string;
  linkText: string;
} & Pick<LinkProps, "to">;

export function ErrorPage({
  title,
  description,
  to,
  linkText,
}: ErrorPageProps) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <Logo className="h-12 w-auto" />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      <Button asChild>
        <Link to={to}>{linkText}</Link>
      </Button>
    </Empty>
  );
}

type ErrorPageContainerProps = {
  children: ReactNode;
};

export function ErrorPageContainer({ children }: ErrorPageContainerProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {children}
    </div>
  );
}
