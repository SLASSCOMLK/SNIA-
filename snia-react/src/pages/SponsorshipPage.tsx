import React from 'react';

export const SponsorshipPage: React.FC = () => {
  return (
    <section className="sponsorship-wrapper font-body">
      <div className="grid-bg"></div>
      <div className="aura aura-1"></div>
      <div className="aura aura-2"></div>

      <div className="sponsorship-content">
        <h2 className="section-title">Become a <span className="highlight">Sponsor</span></h2>
        <p className="sponsor-subtitle">
          Partner with us to celebrate bold ideas and transformative solutions shaping Sri Lanka's knowledge and innovation economy. Discover how you can be part of this prestigious event.
        </p>

        <a 
          href="https://drive.google.com/file/d/11eyPAbB_wH5y7UkDLFk4TKQm2ubypHBa/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="sponsor-btn"
        >
          <i className="fas fa-file-pdf"></i> SNIA Sponsorship Proposal
        </a>

        <div className="contact-info text-center">
          <p className="contact-text">
            For any further clarifications or to discuss sponsorship opportunities, please contact:
          </p>
          <div className="contact-details">
            <span><i className="fas fa-user"></i> Mohammed Jaseem</span>
            <span>
              <i className="fas fa-envelope"></i> <a href="mailto:m.jaseem@slasscom.lk">m.jaseem@slasscom.lk</a> | 
              <i className="fas fa-phone"></i> <a href="tel:0772124930">0772124930</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
