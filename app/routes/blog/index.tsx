import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

import Layout from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Link
              to="/blog"
              search={{ page: page - 1 }}
              disabled={!hasPrev}
              aria-label="Go to previous page"
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "gap-1 pl-2.5",
                !hasPrev && "pointer-events-none opacity-50"
              )}
            >
              <ChevronLeft className="size-4" />
              <span>Previous</span>
            </Link>
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <Link
              to="/blog"
              search={{ page: page + 1 }}
              disabled={!hasNext}
              aria-label="Go to next page"
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "gap-1 pr-2.5",
                !hasNext && "pointer-events-none opacity-50"
              )}
            >
              <span>Next</span>
              <ChevronRight className="size-4" />
            </Link>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Layout>
  );
}
