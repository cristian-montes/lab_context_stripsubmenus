import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
      <section className='hero' onMouseOver={closeSubmenu}>
        <div className='hero-center'>
          <article className='hero-info'>
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Millions of companies of all size-from startups to 
              Fortune 500-use
              Stripe's software and APIs to accept payments, send payouts, and
              manage their businesses online.
            </p>
            <button className='btn'> Start now</button>
          </article>
          <article>
            <img src={phoneImg} className='phone-img' alt='phone' />
          </article>
        </div>
      </section>
  )
}

export default Hero