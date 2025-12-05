import { queryOptions } from "@tanstack/react-query";
import { apiClient } from "./client";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: () => apiClient.getPosts(),
});
