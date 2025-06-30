import { Gallery, ImageProps } from "./-components/gallery";

import { ConvertKitForm } from "./-components/convertkit-form";
import Header from "@/components/header/header";
import { RookComputerMK2 } from "./-components/3d/rook-computer-mk2";
import SectionContainer from "@/components/section-container";
import SectionHeading from "@/components/section-heading";
import SectionParagraph from "@/components/section-paragraph";
import { createFileRoute } from "@tanstack/react-router";
import rookMk1ConsoleImage from "../assets/images/rook-mk1-console-components-layout.png";
import rookMk1LegoSketchImage from "../assets/images/rook-mk1-lego-sketch.webp";
import rookMk1PlaytestImage from "../assets/images/rook-mk1-playtesting.webp";
import rookToadImage from "../assets/images/rook-mk1-toad-super-mario-kart.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const insideRookImages: ImageProps[] = [
  {
    src: rookMk1ConsoleImage,
    alt: "Disassembled Rook MK1 console with case, PCB, buttons, and LEGO parts on a work mat.",
    imageDescription: "This is what a RooK looks like before it is assembled",
  },
  {
    src: rookToadImage,
    alt: "Rook MK1 console with LEGO Toad, running Super Mario Kart.",
    imageDescription: "Here when it does what it does best",
  },
  {
    src: rookMk1PlaytestImage,
    alt: "Three people in an office testing a pixel-style game on a monitor",
    imageDescription:
      "Some RooKies having fun with our first self-coded game for RooK",
  },
];

const sketchImages: ImageProps[] = [
  {
    src: rookMk1LegoSketchImage,
    alt: "Sketch of a RooK console with LEGO parts",
    imageDescription: "First rough sketches for PS1, PS2, N64, Xbox, and SNES:",
  },
] as const;

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
          <SectionHeading>What’s inside the RooK Console?</SectionHeading>
          <SectionParagraph>
            All components are self-designed – right down to the carrier board,
            the cartridge reader, and the case. Pop in a Raspberry Pi Compute
            Module, and you’re good to go. With a Pi 5 CM, RooK can even play up
            to PlayStation 2 games. But let’s be real, the really old games are
            what truly matter to us. We’re talking about games where a single
            pixel could define an entire character, and joypads had fewer
            buttons than a modern car’s dashboard.
          </SectionParagraph>
          <SectionParagraph>
            And there’s more: You can design and print your own RooK case,
            making it truly yours. Because what’s cooler than beating your high
            score? Beating it on a console YOU designed. Take that, Nintendo
            Labo!
          </SectionParagraph>
          <Gallery images={insideRookImages} />
        </SectionContainer>

        <SectionContainer>
          <SectionHeading>Why build your own console?</SectionHeading>
          <SectionParagraph>
            In short: For the reason that’s usually the worst of all reasons.
            But in this case, it’s the best:{" "}
            <b className="uppercase">Because you can</b>. 😎
          </SectionParagraph>
          <SectionParagraph>
            And let’s be honest, we’re all still waiting for that one feature
            from our childhood consoles that never quite made it into mass
            production. Now’s our chance to make it happen, one 3D-printed case
            at a time.
          </SectionParagraph>
        </SectionContainer>

        <SectionContainer>
          <SectionHeading>Why are retro games good for kids?</SectionHeading>
          <SectionParagraph>We love gaming with our kids.</SectionParagraph>
          <SectionParagraph>
            Because: Time spent together playing is not screen time, it’s
            quality time! Just like in the old days when multiplayer meant
            huddling around a single TV, rather than shouting at each other
            through headsets.
          </SectionParagraph>
          <SectionParagraph>
            Retro games are so well suited for this because they are easy to
            play but hard to master. It’s much easier for kids to spend 60 or 70
            tries beating a level boss, and then eventually turn off the console
            because a) it’s exhausting and challenging, and b) it’s still fun
            and fulfilling to do hard things.
          </SectionParagraph>
          <SectionParagraph>
            Remember that feeling of finally beating Mike Tyson in Punch-Out!!?
            Pure, unadulterated triumph.
          </SectionParagraph>
          <SectionParagraph>
            In contrast, modern games are designed to constantly draw us in with
            continuous dopamine kicks, dedicating our attention to the game
            instead of Netflix, TikTok, or our family. They’re like digital
            sugar rushes – thrilling in the moment, but leaving you with a
            crash. Retro games are more like a slow-cooked meal; satisfying and
            wholesome.
          </SectionParagraph>
          <SectionParagraph>
            As nerdy parents, we want to enable our kids to game, but also
            protect them from hyper-stimulating games. When you observe your
            children playing Super Mario or Tetris compared to modern Switch
            games, we’ve consistently found that older games evoke just as much
            fascination but have much less addictive potential. Kids can
            regulate themselves much better with older games that have less
            overstimulation. Plus, no microtransactions or loot boxes trying to
            raid your piggy bank.
          </SectionParagraph>
          <SectionParagraph>
            We also wanted to make it possible to save only a single game per
            cartridge if needed – similar to a Tonie-Box or a Jookie for audio
            plays or music – but just for gaming. Sure, a cartridge could
            contain hundreds of games, but that would helplessly overwhelm and
            overstimulate our children. Imagine telling a kid they have 500 NES
            games on one cartridge – they’d probably just default to Mario,
            because choice paralysis is real, even for tiny humans.
          </SectionParagraph>
        </SectionContainer>

        <SectionContainer>
          <SectionHeading>RooK’s Genesis Story</SectionHeading>

          <SectionParagraph>
            It all started when Enno wanted to learn how to source fully
            assembled PCBs. He already used the software{" "}
            <a
              href="https://www.kicad.org/"
              target="_blank"
              rel="noreferrer nofollow"
              className="underline"
            >
              kicad.org
            </a>{" "}
            to never ordered one. He wanted to learn this because it would give
            him a much larger inventory of chips for his own projects. The only
            problem: he lacked a concrete project. So, like any good engineer,
            he went looking for a problem to solve with his newfound knowledge.
          </SectionParagraph>

          <SectionParagraph>
            And then it so happened that Konstantin hosted a second retro gaming
            tournament and came away from it with two concrete feedbacks: the
            humming of the old devices is exhausting, and the loading times are
            annoying. Even if his museum pieces exert a special fascination on
            the kids. (more on that below) Clearly, the magic of blowing into a
            cartridge and waiting an eternity for the game to load was lost on
            the younger generation.
          </SectionParagraph>

          <SectionParagraph>
            Then it was suggested that we could make our own console. In that
            conversation, the idea emerged that one could make several console
            designs and that anyone who wanted to could make their own console
            design. Because why settle for one iconic design when you can have a
            dozen?
          </SectionParagraph>
        </SectionContainer>

        <SectionContainer>
          <SectionHeading>RooK’s First Design</SectionHeading>

          <SectionParagraph>
            We found the idea charming to retain the retro gaming character –
            even in the external design. Because if it doesn’t look like it came
            straight out of 1989, are you really retro gaming?
          </SectionParagraph>

          <SectionParagraph>
            We could go crazy and design and print a separate console case for
            each system! Meaning: For PS2 games, a PS2 case that incorporates
            and reproduces the console’s design. Then each station directly
            makes it clear what’s being played here. Imagine a whole wall of
            custom-designed, 3D-printed consoles, each a tribute to a different
            era. The ultimate &quot;museum&quot; of gaming, right in your living
            room.
          </SectionParagraph>

          <SectionParagraph>
            A special appeal of the tournaments is being able to see and use the
            old consoles. There’s just something about holding a piece of
            history in your hands, even if that history sometimes emitted a
            high-pitched whine.
          </SectionParagraph>

          <SectionParagraph>
            Konstantin’s first sketches were driven by the idea: Only use
            rectangles and circles! If the LEGO idea began with the cartridges,
            why not apply the LEGO concept to the entire device as a design
            framework? Because who hasn’t dreamed of building their own console
            out of LEGOs?
          </SectionParagraph>

          <Gallery images={sketchImages} />

          <SectionParagraph>
            Then Konstantin began designing a console with LEGO (!!!)
          </SectionParagraph>
          <SectionParagraph>
            And as always with LEGO, the ratio was:
            <ul className="list-inside list-disc p-4">
              <li>2% planning</li>
              <li>6% building</li>
              <li>92% searching for bricks</li>
            </ul>
            But the result was impressive, and the form factor was born. It’s
            also funny that a USB-A plug fits exactly into the gap of 2 LEGO
            studs. Almost like it was meant to be.
          </SectionParagraph>

          <SectionParagraph>
            So Enno had both a 3D model of the case to build a board that could
            be ordered from China. The circle of life for a DIY console: design,
            build, source, repeat.
          </SectionParagraph>
        </SectionContainer>
      </main>
    </>
  );
}
