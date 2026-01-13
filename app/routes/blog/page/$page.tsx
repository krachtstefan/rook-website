import { createFileRoute, redirect } from "@tanstack/react-router";

import { BlogList } from "../-components/blog-list";
import { paginatedPostListOptions } from "@/api/posts";

export const Route = createFileRoute("/blog/page/$page")({
  beforeLoad: ({ params }) => {
    const page = parseInt(params.page);
    // Redirect to /blog if page is 1 or invalid
    if (isNaN(page) || page < 1) {
      throw redirect({ to: "/blog" });
    }
    if (page === 1) {
      throw redirect({ to: "/blog" });
    }
  },
  loader: ({ context: { queryClient }, params }) => {
    const page = parseInt(params.page);
    return queryClient.ensureQueryData(paginatedPostListOptions(page));
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { page } = Route.useParams();
  const pageNum = parseInt(page);

  return <BlogList page={pageNum} />;
}
