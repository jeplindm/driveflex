'use client'

import Image from 'next/image'

import { CustomButton } from '.'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <section id="hero" className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Your Ultimate Car Rental Destination</h1>

        <p className="hero__subtitle">
          Your Journey, Your Way - Effortless Car Rentals for Every Adventure.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </section>
  )
}

export default Hero
