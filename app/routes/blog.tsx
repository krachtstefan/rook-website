import { useSuspenseQuery } from "@tanstack/react-query";

import Layout from "@/components/layout";
import { createFileRoute } from "@tanstack/react-router";
import { postsQueryOptions } from "@/api/posts";

export const Route = createFileRoute("/blog")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
  component: RouteComponent,
});

function RouteComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <Layout>
      <div>Hello &quot;/blog&quot;!</div>
      <ul className="list-disc pl-4">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Layout>
  );
}
