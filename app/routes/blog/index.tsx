import { Link, createFileRoute } from "@tanstack/react-router";

import Layout from "@/components/layout";
import { postListOptions } from "@/api/posts";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/blog/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postListOptions),
  component: RouteComponent,
});

function RouteComponent() {
  const postsQuery = useSuspenseQuery(postListOptions);
  const posts = postsQuery.data;

  return (
    <Layout>
      <h1 className="text-5xl uppercase">Blog</h1>
      <ul className="list-disc pl-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to="/blog/$slug" params={{ slug: post.slug }}>
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
