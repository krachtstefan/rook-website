import Layout from "@/components/layout";
import { createFileRoute } from "@tanstack/react-router";
import { postOptions } from "@/api/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ context: { queryClient }, params: { slug } }) =>
    queryClient.ensureQueryData(postOptions(slug)),
  component: RouteComponent,
});

function RouteComponent() {
  return <Layout>Hello /blog/$id!</Layout>;
}
