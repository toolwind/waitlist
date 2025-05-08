import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
// import { IconContext } from "react-icons";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center px-4">
      <div className="flex flex-col items-center mb-4">
        <motion.div
          layout
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, type: "spring" }}
          className="mb-2"
        >
          <img src="/logo.png" alt="Toolwind Logo" width="64" height="100" className="w-16 h-25" />
        </motion.div>
        <SplitText className="text-5xl tracking-tighter font-medium subpixel-antialiased">
          toolwind
        </SplitText>
        <SplitText className="tracking-tight max-w-2xl text-base text-balance text-rose-700 dark:text-rose-300 mt-1">
          Building the definitive registry of Tailwind CSS tools.
        </SplitText>
        {/* <SplitText className="tracking-tight text-xl text-balance mt-6">
          Be the first to experience the future of styling.
        </SplitText> */}
      </div>
      <WaitlistForm />
      <div className="mt-4">
        <Counter />
      </div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2, delay: 0.375, type: "spring" }}
        className="mb-2"
      >
        <footer className="flex items-center text-3xl mt-2 *:transition-colors *:ease-out *:p-3 *:duration-300 dark:*:text-rose-400/50 dark:*:hover:text-rose-50 *:text-rose-900/50 *:hover:text-black">
          <Link href="https://x.com/toolwind" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://github.com/toolwind" target="_blank">
            <FaXTwitter />
          </Link>
        </footer>
      </motion.div>
    </div>
  );
}
