import { ConvertKitForm } from "./-components/convertkit-form";
import { Gallery } from "./-components/gallery";
import Header from "@/components/header/header";
import { RookComputerMK2 } from "./-components/3d/rook-computer-mk2";
import SectionContainer from "@/components/section-container";
import SectionHeading from "@/components/section-heading";
import SectionParagraph from "@/components/section-paragraph";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Header />
      <main className="container flex flex-col items-center gap-20 py-10">
        <div className="grid gap-10 md:grid-cols-2">
          <SectionContainer>
            <h1 className="text-5xl uppercase">Ask me about RooK!</h1>
            <SectionHeading>
              The Kids-Friendly Retro Gaming Console
            </SectionHeading>
            <SectionParagraph>
              RooK is a DIY console built by a few nerds, retro gaming fans and
              parents in Germany. It was important to us to have a retro gaming
              device for which we could design and 3D print our own cases, that
              our kids could easily use, and that would be suitable for retro
              tournaments. Think of it as the ultimate blend of nostalgia and
              modern convenience – without the annoying hum of an old CRT or the
              eternal loading screens.
            </SectionParagraph>
          </SectionContainer>
          <div className="relative p-2 max-md:h-[300px]">
            <div className="absolute inset-0">
              <RookComputerMK2 />
            </div>
          </div>
        </div>

        <SectionContainer>
          <SectionHeading>Newsletter</SectionHeading>
          <SectionParagraph>
            If you have any questions about RooK: Drop us your mail here:{" "}
            askmeabout@rook.computer. We do not have any commercial interests
            and promise to only send interesting and fun stuff your way :)
          </SectionParagraph>
          <div className="flex justify-center">
            <ConvertKitForm />
          </div>
        </SectionContainer>

        <SectionContainer>
          <SectionHeading>What&#39;s inside the RooK Console?</SectionHeading>
          <SectionParagraph>
            All components are self-designed – right down to the carrier board,
            the cartridge reader, and the case. Pop in a Raspberry Pi Compute
            Module, and you&#39;re good to go. With a Pi 5 CM, RooK can even
            play up to PlayStation 2 games. But let&#39;s be real, the really
            old games are what truly matter to us. We’re talking about games
            where a single pixel could define an entire character, and joypads
            had fewer buttons than a modern car&#39;s dashboard.
          </SectionParagraph>
          <SectionParagraph>
            And there&#39;s more: You can design and print your own RooK case,
            making it truly yours. Because what’s cooler than beating your high
            score? Beating it on a console YOU designed. Take that, Nintendo
            Labo!
          </SectionParagraph>
          <Gallery />
        </SectionContainer>
      </main>
    </>
  );
}
