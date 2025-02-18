"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  startAnimation?: boolean; 
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startAnimation = false,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={startAnimation ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.3, delay: startAnimation ? delay / 1000 : 0 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startTyping?: boolean;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startTyping = false, // 🔹 Se activa solo cuando el scroll llega
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    if (!startTyping) return; 
    setDisplayedText("");

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, startTyping]);

  return (
    <MotionComponent
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children?: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={terminalRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-neutral-200 p-4 dark:border-neutral-800">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">
          <TypingAnimation startTyping={startAnimation} className="text-lg font-semibold text-blue-600 mb-4">
            🚀 Contributing to Haibu
          </TypingAnimation>

          <AnimatedSpan startAnimation={startAnimation} delay={1000} className="text-base text-gray-700 block mb-2">
            🔍 Issue #42: "Update user profile page"
          </AnimatedSpan>

          <AnimatedSpan startAnimation={startAnimation} delay={2000} className="text-base text-green-600 block mb-2">
            ✅ Issue assigned to you
          </AnimatedSpan>

          <AnimatedSpan startAnimation={startAnimation} delay={3000} className="text-base text-gray-700 block mb-2">
            📦 Cloning repository...
          </AnimatedSpan>

          <AnimatedSpan startAnimation={startAnimation} delay={4000} className="text-base text-green-600 block mb-2">
            🌿 Created branch: feature/update-profile
          </AnimatedSpan>

          <AnimatedSpan startAnimation={startAnimation} delay={5000} className="text-base text-gray-700 block mb-2">
            💻 Making changes...
          </AnimatedSpan>

          <AnimatedSpan startAnimation={startAnimation} delay={6000} className="text-base text-green-600 block mb-2">
            🚀 Changes pushed to Haibu
          </AnimatedSpan>

          <TypingAnimation startTyping={startAnimation} delay={7000} className="text-base font-semibold text-blue-600 mt-4">
            🎉 Contribution successful!
          </TypingAnimation>
        </code>
      </pre>
    </motion.div>
  );
};
