import { createFileRoute, useRouter } from "@tanstack/react-router";

import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";

const getServerTime = createServerFn({
  method: "GET",
}).handler(() => {
  return new Date().toLocaleString();
});

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => {
    return await getServerTime();
  },
});

function Home() {
  const router = useRouter();
  const serverTime = Route.useLoaderData();
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <div className="mb-4">Server state: {serverTime}</div>
          <div className="mb-4">Client state: {count}</div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setCount((count) => {
                  return count + 1;
                });
              }}
              className="rounded border border-gray-300 px-4 py-2 hover:opacity-50"
            >
              increment client state
            </button>
            <button
              type="button"
              onClick={() => {
                router.invalidate();
              }}
              className="rounded border border-gray-300 px-4 py-2 hover:opacity-50"
            >
              refresh server state
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
