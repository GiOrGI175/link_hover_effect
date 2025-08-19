'use client';

import Link from './Link';

export default function HoverLinks() {
  return (
    <section className='min-h-screen overflow-x-hidden bg-neutral-950 p-4 md:p-8'>
      <div className='mx-auto max-w-5xl'>
        <Link
          heading='About'
          subheading='Learn what we do here'
          imgSrc='/imgs/img1.jpg'
          href='#'
        />
        <Link
          heading='Clients'
          subheading='We work with great people'
          imgSrc='/imgs/img2.jpg'
          href='#'
        />
        <Link
          heading='Portfolio'
          subheading='Our work speaks for itself'
          imgSrc='/imgs/img3.png'
          href='#'
        />
        <Link
          heading='Careers'
          subheading='We want cool people'
          imgSrc='/imgs/img4.jpeg'
          href='#'
        />
        <Link
          heading='Fun'
          subheading="Incase you're bored"
          imgSrc='/imgs/img5.jpg'
          href='#'
        />
      </div>
    </section>
  );
}
