import { apiClient } from "./client";
import { queryOptions } from "@tanstack/react-query";

export const postListOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: () => apiClient.getPosts(),
});

export const postOptions = (slug: string) =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => apiClient.getPostBySlug({ params: { slug } }),
    select(data) {
      return data.at(0);
    },
  });
