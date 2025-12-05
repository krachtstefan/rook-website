import { Link, createFileRoute } from "@tanstack/react-router";

import Layout from "@/components/layout";
import { postsQueryOptions } from "@/api/posts";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/blog/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
  component: RouteComponent,
});

function RouteComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <Layout>
      <h1>Blog</h1>
      <ul className="list-disc pl-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to="/blog/$id" params={{ id: post.slug }}>
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
