import { Zodios, makeApi } from "@zodios/core";
import { z } from "zod";
import { env } from "../env";

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
    path: "/posts",
    alias: "getPosts",
    description: "Get all posts",
    response: z.array(PostSchema),
  },
]);

const baseUrl = env.VITE_API_BASE_URL;

export const apiClient = new Zodios(baseUrl, apiDefinition);

export type ApiClient = typeof apiClient;
