import { apiClient, getPaginatedPosts } from "./client";

import { queryOptions } from "@tanstack/react-query";

export const paginatedPostListOptions = (
  page: number = 1,
  perPage: number = 10
) =>
  queryOptions({
    queryKey: ["posts", page, perPage],
    queryFn: () => getPaginatedPosts(page, perPage),
  });

export const postOptions = (slug: string) =>
  queryOptions({
    queryKey: ["post", slug],
    queryFn: () => apiClient.getPostBySlug({ params: { slug } }),
    select(data) {
      return data.at(0);
    },
  });
