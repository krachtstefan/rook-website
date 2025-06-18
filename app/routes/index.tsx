import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { ConvertKitForm } from "./-components/convertkit-form";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Gallery } from "./-components/gallery";
import Header from "@/components/header/header";
import { Mails } from "lucide-react";
import { RookComputerMK2 } from "./-components/rook-computer-mk2";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Header />
      <main className="container flex min-h-screen flex-col items-center justify-center gap-20 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl">Ask me about RooK!</h1>
            <h1 className="text-2xl">The Kids-Friendly Retro Gaming Console</h1>
            <p className="text-pretty text-lg font-medium sm:text-xl/8">
              RooK is a DIY console built by a few nerds, retro gaming fans and
              parents in Germany. It was important to us to have a retro gaming
              device for which we could design and 3D print our own cases, that
              our kids could easily use, and that would be suitable for retro
              tournaments. Think of it as the ultimate blend of nostalgia and
              modern convenience – without the annoying hum of an old CRT or the
              eternal loading screens.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Mails />
                    Stay in the LooP about RooK!
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-[700px]">
                  <DialogHeader>
                    <DialogTitle>Newsletter</DialogTitle>
                    <DialogDescription>
                      If you have any questions about RooK: Drop us your mail
                      here: askmeabout@rook.computer We do not have any
                      commercial interests and promise to only send interesting
                      and fun stuff your way :)
                    </DialogDescription>
                  </DialogHeader>
                  <div className="max-sm:h-[420px] max-sm:overflow-y-auto">
                    <ConvertKitForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative p-2 max-md:h-[300px]">
            <div className="absolute inset-0">
              <RookComputerMK2 />
            </div>
          </div>
        </div>

        {/* <Gallery /> */}
      </main>
    </>
  );
}
