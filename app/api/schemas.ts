import { z } from "zod";

export const PostSchema = z.object({
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
  _embedded: z
    .object({
      "wp:featuredmedia": z
        .array(
          z.object({
            source_url: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
});

export type Post = z.infer<typeof PostSchema>;
