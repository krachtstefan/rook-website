import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { paginatedPostListOptions } from "@/api/posts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";

const blogSearchSchema = z.object({
  page: z.number().int().positive().catch(1),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: blogSearchSchema,
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: ({ context: { queryClient }, deps: { page } }) =>
    queryClient.ensureQueryData(paginatedPostListOptions(page)),
  component: RouteComponent,
});

function RouteComponent() {
  const { page } = Route.useSearch();
  const postsQuery = useSuspenseQuery(paginatedPostListOptions(page));
  const { posts, totalPages } = postsQuery.data;

  const hasPrev = page > 1;
  const hasNext = page < totalPages;

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

      <div className="mt-8 flex items-center justify-between">
        <Link to="/blog" search={{ page: page - 1 }} disabled={!hasPrev}>
          <Button variant="outline" disabled={!hasPrev}>
            Previous
          </Button>
        </Link>
        <span className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </span>
        <Link to="/blog" search={{ page: page + 1 }} disabled={!hasNext}>
          <Button variant="outline" disabled={!hasNext}>
            Next
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
