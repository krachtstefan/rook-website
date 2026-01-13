import { ErrorPage, ErrorPageContainer } from "@/components/error-page";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import appCss from "@/styles/app.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "R∞k",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
  }),
  component: RootComponent,
  errorComponent: RootErrorComponent,
  notFoundComponent: RootNotFoundComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootErrorComponent({ error }: { error: Error }) {
  return (
    <RootDocument>
      <ErrorPageContainer>
        <ErrorPage
          title="Something went wrong"
          description={error.message || "An unexpected error occurred"}
          to="/"
          linkText="Go to Homepage"
        />
      </ErrorPageContainer>
    </RootDocument>
  );
}

function RootNotFoundComponent() {
  return (
    <ErrorPage
      title="Page not found"
      description="The page you're looking for doesn't exist."
      to="/"
      linkText="Go to Homepage"
    />
  );
}
