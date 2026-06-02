'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function Leadership() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const teamMembers = [
    { name: 'Tiffany Sergi', role: 'CEO', image: '/images/Tiffany Sergi.png', bio: 'COO/CEO with 12+ years scaling service-based businesses. At Landscapes by D&J, she grew revenue from $2M to $5M+ while managing 60+ employees with full P&L ownership.', imageStyle: { transform: 'scale(1.4) translateY(14%)' }, linkedin: 'https://www.linkedin.com/in/tiffany-sergi-111527256/' },
    { name: 'Gavin Mestler', role: 'Managing Partner and Co-Founder', image: '/images/V-Gavin Mestler.png', bio: 'Gavin co-founded Methodic Landscaping alongside his brother Logan with a mission to preserve and modernize the businesses that America runs on.', imageStyle: { transform: 'scale(1.65) translateY(12%)' }, linkedin: 'https://www.linkedin.com/in/gavinmestler/' },
    { name: 'Logan Mestler', role: 'Managing Partner and Co-Founder', image: '/images/LoganMestler444.png', bio: 'Logan co-founded Methodic Landscaping alongside his brother Gavin with a mission to preserve and modernize the businesses that America runs on.', imageStyle: { objectFit: 'contain' as const, transform: 'scale(3.9) translateY(-1%)' }, linkedin: 'https://www.linkedin.com/in/logan-mestler-753917253/', brightness: 1.35 },
    { name: 'Dean Farber', role: 'Managing Partner and Co-Founder', image: '/images/V-Dean Farber.png', bio: 'Dean is the founder of Duff Goods, an independently operated e-commerce business with $1M+ in revenue, and has experience across product sourcing, online sales, and managing the full lifecycle of a small business from end to end.', imageStyle: { transform: 'scale(1.0) translateY(3%)' }, linkedin: 'https://www.linkedin.com/in/dean-farber-8b2159399/', brightness: 1.2 },
  ]

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="leadership" id="team">
      <div className="container">
        <div className="leadership-content">
          <h2>Our People</h2>
          <p className="leadership-subtext">We've assembled a diverse team of operators, blending talents from various backgrounds and industries, to effectively support the landscaping businesses we acquire from all angles.</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-card ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={340}
                  className="team-image"
                  style={{
                    ...member.imageStyle,
                    ...(member.brightness && {
                      filter: expandedIndex === index
                        ? `grayscale(0%) contrast(1.05) brightness(${member.brightness})`
                        : `grayscale(85%) contrast(1.05) brightness(${member.brightness})`
                    })
                  }}
                />
                <div className="team-info-wrapper">
                  <div className={`team-info ${expandedIndex === index ? 'expanded' : ''}`}>
                    <div className="team-info-text">
                      <div className="team-name-row">
                        <span className="team-name">{member.name}</span>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Image
                              src="/images/linkedin-icon-44.png"
                              alt="LinkedIn"
                              width={18}
                              height={18}
                              className="linkedin-icon"
                            />
                          </a>
                        )}
                      </div>
                      <div className="team-role">{member.role}</div>
                      <div className="team-expanded-content">
                        {member.bio || 'Bio coming soon...'}
                      </div>
                    </div>
                    <span className="dropdown-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
