import { BlogList } from "./-components/blog-list";
import { createFileRoute } from "@tanstack/react-router";
import { paginatedPostListOptions } from "@/api/posts";

export const Route = createFileRoute("/blog/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(paginatedPostListOptions(1)),
  component: RouteComponent,
});

function RouteComponent() {
  return <BlogList page={1} />;
}
