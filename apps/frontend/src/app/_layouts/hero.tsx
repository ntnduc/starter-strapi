import { cn } from "@/lib/utils";
import AvatarCircles from "@components/magicui/avatar-circles";
import { BorderBeamm } from "@components/magicui/border-beam";
import { Badge } from "@components/ui/badge";
import { buttonVariants } from "@components/ui/button";
import { Headline } from "@components/ui/headline";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Announcement } from "./announcement";

export default function Hero() {
  const avatars = [
    {
      url: "https://avatars.githubusercontent.com/u/68223190?s…00&u=9bc21effaf9e9a11dbae7202a4f486afd6edbf4f&v=4",
      name: "Duc Nguyen",
    },
    {
      url: "https://avatars.githubusercontent.com/u/68223190?s…00&u=9bc21effaf9e9a11dbae7202a4f486afd6edbf4f&v=4",
      name: "Duc Nguyen",
    },
    {
      url: "https://avatars.githubusercontent.com/u/68223190?s…00&u=9bc21effaf9e9a11dbae7202a4f486afd6edbf4f&v=4",
      name: "Duc Nguyen",
    },
    {
      url: "https://avatars.githubusercontent.com/u/68223190?s…00&u=9bc21effaf9e9a11dbae7202a4f486afd6edbf4f&v=4",
      name: "Duc Nguyen",
    },
  ];
  return (
    <section className="container flex flex-col items-start gap-5 text-center md:items-center">
      <Announcement />
      <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
        <Headline
          variant={"h1"}
          className="relative mx-0 max-w-[43.5rem] text-balance bg-gradient-to-br from-primary from-50% to-neutral-200/60 bg-clip-text pt-5 text-left text-5xl font-semibold tracking-tighter text-transparent dark:text-white sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl"
        >
          Nextjs & Strapi boilerplate
        </Headline>
        <Badge className="absolute right-0 top-2.5 z-10 rotate-3 md:top-12 md:-rotate-12">
          fast implementation
        </Badge>
      </div>
      <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg">
        Build a fast app with this <b>Nextjs</b>, <b>Strapi</b> boilerplate
      </p>

      <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href="https://github.com/ntnduc"
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "gap-2 whitespace-pre md:flex",
              "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50",
            )}
          >
            <GitHubLogoIcon className="size-5" /> Give a star ⭐{" "}
          </Link>
          <Link
            href="https://github.com/ntnduc"
            target="_blank"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
              }),
              "gap-2 whitespace-pre md:flex",
              "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black",
            )}
          >
            Get Started
            <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="flex max-w-xl flex-row items-center justify-between text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-base">
        <Headline variant={"h3"} className="text-md mr-2">
          Trusted by
        </Headline>
        <AvatarCircles numPeople={99} avatars={avatars} />
      </div>

      <div className="relative rounded-xl lg:block">
        <Image
          src="/dashboard-dark.png"
          alt="Hero section desktop"
          width={1200}
          height={350}
          className="hidden max-w-[350px] rounded-[inherit] object-contain shadow-lg dark:block lg:max-w-[1200px]"
        />
        <Image
          src="/dashboard-light.png"
          alt="Hero section mobile"
          width={1200}
          height={350}
          className="block max-w-[350px] rounded-[inherit] object-contain shadow-lg dark:hidden lg:max-w-[1200px]"
        />

        <BorderBeamm size={250} duration={12} delay={9} />
      </div>
    </section>
  );
}
