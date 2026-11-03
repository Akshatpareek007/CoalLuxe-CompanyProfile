import React from 'react';
import { motion } from 'framer-motion';

interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}

export const Floating: React.FC<FloatingProps> = ({
  children,
  className = '',
  duration = 3,
  distance = 10,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface PulseProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  scale?: number;
}

export const Pulse: React.FC<PulseProps> = ({
  children,
  className = '',
  duration = 2,
  scale = 1.05,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, scale, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

interface GlowProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
}

export const Glow: React.FC<GlowProps> = ({
  children,
  className = '',
  color = 'rgba(217, 119, 6, 0.5)',
  duration = 2,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          `0 0 20px ${color}`,
          `0 0 40px ${color}`,
          `0 0 20px ${color}`,
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

interface RotateProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export const Rotate: React.FC<RotateProps> = ({
  children,
  className = '',
  duration = 20,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  );
};

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

interface ShimmerProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export const Shimmer: React.FC<ShimmerProps> = ({
  children,
  className = '',
  duration = 2,
}) => {
  return (
    <motion.div
      className={className}
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['200% 0', '-200% 0'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  );
};
