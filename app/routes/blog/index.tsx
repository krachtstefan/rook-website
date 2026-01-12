import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <h1 className="mb-8 text-5xl uppercase">Blog</h1>
      <div className="grid w-full gap-8 md:grid-cols-2">
        {posts.map((post) => {
          const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          return (
            <Link
              key={post.id}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block h-full transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full overflow-hidden">
                {image && (
                  <div className="aspect-video w-full overflow-hidden border-b">
                    <img
                      src={image}
                      alt={post.title.rendered}
                      className="size-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    className="text-xl"
                  />
                  <CardDescription>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="break-words text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
