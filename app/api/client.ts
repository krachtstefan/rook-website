import { Zodios, makeApi } from "@zodios/core";

import { env } from "../env";
import { z } from "zod";

const PostSchema = z.object({
  id: z.number(),
  date: z.string(),
  date_gmt: z.string(),
  guid: z.object({
    rendered: z.string(),
  }),
  modified: z.string(),
  modified_gmt: z.string(),
  slug: z.string(),
  status: z.string(),
  type: z.string(),
  link: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
    protected: z.boolean(),
  }),
  excerpt: z.object({
    rendered: z.string(),
    protected: z.boolean(),
  }),
  author: z.number(),
  featured_media: z.number(),
  comment_status: z.string(),
  ping_status: z.string(),
  sticky: z.boolean(),
  template: z.string(),
  format: z.string(),
  meta: z.any(),
  categories: z.array(z.number()),
  tags: z.array(z.number()),
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
