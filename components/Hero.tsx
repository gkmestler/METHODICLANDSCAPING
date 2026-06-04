import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Preserving <span className="italic">What Works</span>.<br />
            Growing <span className="italic">What's Possible</span>.
          </h1>
          <p>
            Partner with the next generation of entrepreneurs committed to preserving your legacy and methodically scaling the landscaping company you've built.
          </p>
          <a href="/sell" className="hero-cta-button">
            See if we're a fit
          </a>
        </div>
      </div>
    </section>
  )
}