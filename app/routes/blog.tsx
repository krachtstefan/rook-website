import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout";

export const Route = createFileRoute("/blog")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <div>Hello &quot;/blog&quot;!</div>
    </Layout>
  );
}
