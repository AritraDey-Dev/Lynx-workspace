"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const [isClient, setIsClient] = useState(false); // Client-side check
  
  // Ensure this code only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!words) return <div>No text available</div>; // Fallback in case of no words.

  let wordsArray = words.split(" ");
  
  // We only need to run the animation when we know we're on the client.
  useEffect(() => {
    if (isClient) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.2), // Adjust delay as needed
        }
      );
    }
  }, [scope.current, filter, duration, isClient]); // Adding isClient to the dependency array to ensure that animation only runs after the client is ready

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {isClient ? renderWords() : words} {/* Render text immediately until client-side mount */}
        </div>
      </div>
    </div>
  );
};
