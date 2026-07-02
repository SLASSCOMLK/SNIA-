import React, { useState } from 'react';

interface CardData {
  icon: string;
  title: string;
  preview: string;
  description: string;
}

export const WhatWeDo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const cards: CardData[] = [
    {
      icon: 'fas fa-search',
      title: 'Discover & Recognise',
      preview: 'Identify regional innovations...',
      description: 'Identify innovations from schools, universities, startups, and enterprises across Sri Lanka, ensuring no great idea goes unnoticed.'
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Evaluate & Validate',
      preview: 'A multi-stage assessment...',
      description: 'Entries are assessed through a rigorous multi-stage process: Initial screening → Provincial review → National finals by industry experts.'
    },
    {
      icon: 'fas fa-award',
      title: 'Celebrate & Amplify',
      preview: 'Rewarding ICT excellence...',
      description: 'Winners are celebrated at a grand ceremony at ITC Ratnadipa, Colombo, giving them national recognition and media exposure.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Inspire the Next Wave',
      preview: 'Empowering young minds...',
      description: 'Encouraging the next generation of innovators and entrepreneurs through school and university category highlights.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Build IP Ownership',
      preview: 'Securing Sri Lanka\'s future...',
      description: 'Promoting Sri Lanka\'s transition from a service-based economy to a product-based one by fostering local intellectual property.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Attract Investment',
      preview: 'Connecting to capital...',
      description: 'Highlighting high-potential innovations to local and global investors, accelerating startup growth and scaling.'
    }
  ];

  const handleCardClick = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="what-we-do section" id="what-we-do" data-theme="light">
      <div className="container text-center">
        <span className="section-label reveal">Our Focus</span>
        <h2 className="section-title reveal delay-1">What SNIA <span className="highlight">Does</span></h2>
        <p className="section-subtitle reveal delay-2">Driving Sri Lanka's transition from service-based to product innovation.</p>

        <div className="wwdo-connector-container reveal delay-3">
          <svg className="wwdo-svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
            <path d="M500,0 L500,30" className="wwdo-line"></path>
            <path d="M166,30 L834,30" className="wwdo-line"></path>
            <path d="M166,30 L166,80" className="wwdo-line"></path>
            <path d="M500,30 L500,80" className="wwdo-line"></path>
            <path d="M834,30 L834,80" className="wwdo-line"></path>
          </svg>
        </div>

        <div className="wwdo-grid reveal delay-3">
          {cards.map((card, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`wwdo-card ${isActive ? 'active' : ''}`}
              >
                <div className="wwdo-card-header">
                  <div className="wwdo-card-icon">
                    <i className={card.icon}></i>
                  </div>
                  <div className="wwdo-card-title">
                    <h3>{card.title}</h3>
                    <p className="wwdo-preview">{card.preview}</p>
                  </div>
                  <div className="wwdo-card-arrow">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
                
                <div className="wwdo-card-body" style={{ maxHeight: isActive ? '200px' : '0px' }}>
                  <div className="wwdo-card-inner">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
