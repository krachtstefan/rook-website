import Layout from "@/components/layout";
import { createFileRoute } from "@tanstack/react-router";
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
      <h1>{post.title.rendered}</h1>
    </Layout>
  );
}
