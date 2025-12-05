import { Link, createFileRoute } from "@tanstack/react-router";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { postOptions } from "@/api/posts";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ context: { queryClient }, params: { slug } }) =>
    queryClient.ensureQueryData(postOptions(slug)),
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const postsQuery = useSuspenseQuery(postOptions(slug));
  const post = postsQuery.data;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Layout>
      <div className="flex w-full justify-start">
        <Button asChild variant="outline">
          <Link to="/blog">
            <ArrowLeft className="mr-2 size-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      <h1 className="text-5xl uppercase">{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Layout>
  );
}
