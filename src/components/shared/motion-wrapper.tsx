"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";

// ─── FadeUp ──────────────────────────────────────────────────────────────────

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

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
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
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

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

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

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

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
// Accepts a plain text string. Splits into words and animates each on mount.
// For headlines that need styled spans (neon words etc.), animate inline instead.

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduce) {
    return (
      <h1 className={`font-display font-extrabold ${className ?? ""}`}>
        {text}
      </h1>
    );
  }

  return (
    <h1
      className={`font-display font-extrabold tracking-tight leading-none ${className ?? ""}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
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
  delay = 0.5,
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
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
}