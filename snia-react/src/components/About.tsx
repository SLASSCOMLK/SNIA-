import React, { useRef } from 'react';

interface SpotlightCardData {
  title: string;
  description: string;
  delay: string;
}

export const About: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const spotlightData: SpotlightCardData[] = [
    {
      title: 'Mission',
      description: 'To inspire innovation, build intellectual property, and support Sri Lanka’s ambition of becoming a US$5 billion knowledge economy by 2030.',
      delay: 'delay-2'
    },
    {
      title: 'Eligibility',
      description: 'Open to registered companies in Sri Lanka, ICT startups registered after 1 Jan 2022, University students, and School students.',
      delay: 'delay-3'
    },
    {
      title: 'Judging Criteria',
      description: 'Submissions are rigorously evaluated based on Originality, Scalability, Practicality, and Impact.',
      delay: 'delay-4'
    },
    {
      title: 'Evaluation Process',
      description: 'A structured journey:\nStage 1 – Initial Screening,\nStage 2 – Provincial Evaluation,\nStage 3 – National Finals.',
      delay: 'delay-5'
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  const handleMouseLeave = () => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      card.style.setProperty('--mouse-x', '-500px');
      card.style.setProperty('--mouse-y', '-500px');
    });
  };

  return (
    <section className="about section" id="about" data-theme="light">
      <div className="container">
        <div className="about-grid">

          <div className="about-text">
            <span className="section-label reveal">The Digital Pearl</span>
            <h2 className="section-title reveal delay-1">About <span className="highlight">SNIA</span></h2>
            <p className="reveal delay-2">
              The SLASSCOM National Ingenuity Awards is Sri Lanka’s leading platform recognizing technological innovation
              across corporates, startups, universities, and schools.
            </p>
            <p className="reveal delay-3">
              Now having successfully concluded its 8th edition, SNIA 2026 brought to the spotlight a remarkable cohort of trailblazers. This year's awards highlighted groundbreaking solutions that pushed the boundaries of originality, demonstrated massive commercial potential, and delivered measurable societal impact.
            </p>
          </div>

          <div className="about-cards spotlight-wrapper">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="spotlight-grid"
            >
              {spotlightData.map((card, idx) => (
                <div
                  key={idx}
                  ref={(el) => { cardsRef.current[idx] = el; }}
                  className={`spotlight-card reveal ${card.delay}`}
                >
                  <div className="spotlight-card-border" />
                  <div className="spotlight-card-content">
                    <h3>{card.title}</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
