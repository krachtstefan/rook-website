import { createFileRoute, useRouter } from "@tanstack/react-router";

import { createServerFn } from "@tanstack/react-start";

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return `hello from server it is ${new Date().toLocaleString()}`;
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <button
      type="button"
      onClick={() => {
        getCount().then(() => {
          router.invalidate();
        });
      }}
    >
      {state}
    </button>
  );
}
