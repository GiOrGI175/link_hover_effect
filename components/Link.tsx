'use client';

import { FiArrowRight } from 'react-icons/fi';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent, useRef } from 'react';

type LinkPropsT = {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
};

export default function Link({
  heading,
  subheading,
  imgSrc,
  href,
}: LinkPropsT) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const top = useTransform(ySpring, [0.5, -0.5], ['40%', '60%']);
  const left = useTransform(xSpring, [0.5, -0.5], ['60%', '70%']);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    // console.log(rect);

    // console.log('x:', e.clientX, 'y:', e.clientY);

    // console.log('rect.width:', rect.width, 'rect.height:', rect.height);

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // console.log(rect.left);

    // console.log('mouseX:', mouseX, 'mouseY:', mouseY);

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // console.log(xPct, yPct);

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      ref={ref}
      initial='initial'
      onMouseMove={handleMouseMove}
      whileHover='whileHover'
      href={href}
      className='group relative flex items-center justify-between  border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 '
    >
      <div>
        <motion.span
          variants={{
            initial: {
              x: 0,
            },
            whileHover: {
              x: -16,
            },
          }}
          transition={{
            type: 'spring',
            delayChildren: 0.25,
            staggerChildren: 0.075,
          }}
          className='relative z-10 block text-4xl
           font-bold  text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl '
        >
          {heading.split('').map((l, idx) => {
            return (
              <motion.span
                variants={{
                  initial: {
                    x: 0,
                  },
                  whileHover: {
                    x: 16,
                  },
                }}
                transition={{ type: 'spring' }}
                className='inline-block'
                key={idx}
              >
                {l}
              </motion.span>
            );
          })}
        </motion.span>
        <span className='relative z-10 mt-2 block text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50'>
          {subheading}
        </span>
      </div>

      <motion.img
        variants={{
          initial: {
            scale: 0,
            rotate: '-12.5deg',
          },
          whileHover: {
            scale: 1,
            rotate: '12.5deg',
          },
        }}
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{
          type: 'spring',
        }}
        src={imgSrc}
        className='absolute z-0 h-24 w-32 rounded-lg object-cover md:h-38 md:w-54'
        alt={`img-${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{
          type: 'spring',
        }}
        className='relative z-10 p-4 '
      >
        <FiArrowRight className='text-5xl text-neutral-50' />
      </motion.div>
    </motion.a>
  );
}
