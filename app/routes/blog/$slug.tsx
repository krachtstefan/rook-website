import { Link, createFileRoute } from "@tanstack/react-router";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { postOptions } from "@/api/posts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";

const postSearchSchema = z.object({
  page: z.number().int().positive().optional(),
});

export const Route = createFileRoute("/blog/$slug")({
  validateSearch: postSearchSchema,
  loader: ({ context: { queryClient }, params: { slug } }) =>
    queryClient.ensureQueryData(postOptions(slug)),
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const { page } = Route.useSearch();
  const postsQuery = useSuspenseQuery(postOptions(slug));
  const post = postsQuery.data;

  const backLink = page && page > 1 ? `/blog/page/${page}` : "/blog";

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Layout>
      <div className="flex w-full justify-start">
        <Button asChild variant="outline">
          <Link to={backLink}>
            <ArrowLeft className="mr-2 size-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      <h1
        className="text-5xl uppercase"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="wordpress-container"
      />
    </Layout>
  );
}
