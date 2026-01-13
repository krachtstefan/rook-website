import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import Layout from "@/components/layout";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { paginatedPostListOptions } from "@/api/posts";
import { useSuspenseQuery } from "@tanstack/react-query";

type BlogListProps = {
  page: number;
};

export function BlogList({ page }: BlogListProps) {
  const postsQuery = useSuspenseQuery(paginatedPostListOptions(page));
  const { posts, totalPages } = postsQuery.data;

  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  const prevLink = page === 2 ? "/blog" : `/blog/page/${page - 1}`;
  const nextLink = `/blog/page/${page + 1}`;

  if (posts.length === 0) {
    return (
      <Layout>
        <h1 className="mb-8 text-5xl uppercase">Blog</h1>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <FileText />
            </EmptyMedia>
            <EmptyTitle>No posts yet</EmptyTitle>
            <EmptyDescription>
              Check back soon for new content.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent />
        </Empty>
      </Layout>
    );
  }

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
              search={{ page }}
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

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              to={prevLink}
              aria-label="Go to previous page"
              size="default"
              className={cn(
                "gap-1 pl-2.5",
                !hasPrev && "pointer-events-none opacity-50"
              )}
            >
              <ChevronLeft className="size-4" />
              <span>Previous</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 text-sm text-muted-foreground">
              Page {page} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              to={nextLink}
              aria-label="Go to next page"
              size="default"
              className={cn(
                "gap-1 pr-2.5",
                !hasNext && "pointer-events-none opacity-50"
              )}
            >
              <span>Next</span>
              <ChevronRight className="size-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Layout>
  );
}
