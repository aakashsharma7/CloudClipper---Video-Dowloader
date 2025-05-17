
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex sm:mb-16 py-10 md:py-0 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border  text-base text-white transition-all ease-in hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1   transition ease-out  hover:duration-300 hover:text-neutral-400">
          <span>✨ Universal Video Downloader</span>
          <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
