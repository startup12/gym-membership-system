"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";

// ─── Base Variants ───────────────────────────────────────────────────────────

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.085, delayChildren: 0.1 },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.23, 0.48, 0.38, 0.96] },
  },
};

// ─── FadeUp ──────────────────────────────────────────────────────────────────

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0, ...props }: FadeUpProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? undefined : fadeUpVariants}
      initial={shouldReduce ? undefined : "hidden"}
      whileInView={shouldReduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.65,
        ease: [0.23, 0.48, 0.38, 0.96],
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerContainer ────────────────────────────────────────────────────────

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function StaggerContainer({
  children,
  className,
  ...props
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? undefined : staggerContainerVariants}
      initial={shouldReduce ? undefined : "hidden"}
      whileInView={shouldReduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ─────────────────────────────────────────────────────────────

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? undefined : staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── AnimatedHeadline ────────────────────────────────────────────────────────

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  highlightLastWord?: boolean; // e.g. highlight "YESTERDAY."
  highlightColor?: string;
}

export function AnimatedHeadline({
  text,
  className,
  highlightLastWord = false,
  highlightColor = "text-brand-primary",
}: AnimatedHeadlineProps) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduce) {
    return (
      <h1 className={`font-display font-bold tracking-[-0.03em] ${className ?? ""}`}>
        {text}
      </h1>
    );
  }

  return (
    <h1
      className={`font-display font-bold tracking-[-0.03em] leading-[0.92] ${className ?? ""}`}
      aria-label={text}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        const shouldHighlight = highlightLastWord && isLast;

        return (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.3em] last:mr-0"
          >
            <motion.span
              className={`inline-block ${shouldHighlight ? highlightColor : ""}`}
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: i * 0.09,
                ease: [0.23, 0.48, 0.38, 0.96],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}

// ─── AnimatedSubtext ─────────────────────────────────────────────────────────

interface AnimatedSubtextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSubtext({
  children,
  delay = 0.4,
  className,
}: AnimatedSubtextProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.p
      initial={shouldReduce ? undefined : { opacity: 0, y: 20 }}
      animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.23, 0.48, 0.38, 0.96],
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
}