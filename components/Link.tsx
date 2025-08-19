'use client';

import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
  return (
    <motion.a
      initial='initial'
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
