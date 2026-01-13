import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { BlogList } from "../-components/blog-list";
import { ErrorPage } from "@/components/error-page";
import Layout from "@/components/layout";
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
  loader: async ({ context: { queryClient }, params }) => {
    const page = parseInt(params.page);
    const data = await queryClient
      .ensureQueryData(paginatedPostListOptions(page))
      .catch(() => {
        throw notFound();
      });

    if (page > data.totalPages) {
      throw notFound();
    }
    return data;
  },
  notFoundComponent: NotFoundComponent,
  component: RouteComponent,
});

function NotFoundComponent() {
  return (
    <Layout>
      <ErrorPage
        title="Page not found"
        description="The page you're looking for doesn't exist."
        to="/blog"
        linkText="Back to Blog"
      />
    </Layout>
  );
}

function RouteComponent() {
  const { page } = Route.useParams();
  const pageNum = parseInt(page);

  return <BlogList page={pageNum} />;
}
