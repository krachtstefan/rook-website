import { Zodios, makeApi } from "@zodios/core";

import { env } from "../env";
import { z } from "zod";

const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

const apiDefinition = makeApi([
  {
    method: "get",
    path: "/wp-json/wp/v2/posts",
    alias: "getPosts",
    description: "Get all posts",
    response: z.array(PostSchema),
  },
]);

const baseUrl = env.VITE_API_BASE_URL;

export const apiClient = new Zodios(baseUrl, apiDefinition);

export type ApiClient = typeof apiClient;
