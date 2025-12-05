import { queryOptions } from "@tanstack/react-query";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: () =>
    new Promise<{ id: number; title: string }[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "First Post" },
          { id: 2, title: "Second Post" },
        ]);
      }, 500);
    }),
});
