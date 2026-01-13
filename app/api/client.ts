import { Zodios, makeApi } from "@zodios/core";

import { PostSchema } from "./schemas";
import { env } from "../env";
import { z } from "zod";

export * from "./schemas";

const apiDefinition = makeApi([
  {
    method: "get",
    path: "/wp-json/wp/v2/posts?_embed",
    alias: "getPosts",
    description: "Get all posts",
    response: z.array(PostSchema),
  },
  {
    method: "get",
    path: "/wp-json/wp/v2/posts?slug=:slug",
    alias: "getPostBySlug",
    description: "Get post by slug",
    response: z.array(PostSchema),
  },
]);

const baseUrl = env.VITE_API_BASE_URL;

export const apiClient = new Zodios(baseUrl, apiDefinition);

type PaginatedPostsResponse = {
  posts: z.infer<typeof PostSchema>[];
  totalPages: number;
  totalPosts: number;
};

export async function getPaginatedPosts(
  page: number = 1,
  perPage: number = 10
): Promise<PaginatedPostsResponse> {
  const url = `${baseUrl}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1");
  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0");
  const data = await response.json();
  const posts = z.array(PostSchema).parse(data);

  return { posts, totalPages, totalPosts };
}
