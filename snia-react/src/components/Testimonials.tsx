import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Ashani Jayawickrama',
      role: 'Head of IT',
      company: 'Classic Travel (Pvt) Ltd',
      quote: 'The SLASSCOM National Ingenuity Awards serves as a distinguished benchmark for excellence within Sri Lanka’s IT and BPM industry. It provides a credible platform for organizations to demonstrate their capabilities, showcase innovation, and align themselves with the highest standards of industry performance. Recognition at SNIA reflects an organization’s commitment to delivering quality and driving innovation, while enhancing its reputation among industry stakeholders. Such acknowledgment contributes to strengthening brand equity and reinforces confidence among clients, partners, and the broader business community.'
    },
    {
      name: 'Nishani Maurice',
      role: 'Head of Marketing',
      company: 'Zone24x7',
      quote: 'Zone24x7’s recognition at the SLASSCOM National Ingenuity Awards 2025 was a proud milestone for our team. We are grateful to SLASSCOM for creating a platform that celebrates impactful innovation across Sri Lanka’s tech industry. These wins reflect the passion and problem-solving mindset we bring to every solution we build. More importantly, this reinforced our focus on delivering technology that drives real outcomes for our customers. As we move forward, this recognition strengthens our commitment to pushing boundaries and creating measurable impact through applied technology.'
    }
    ,
    {
      name: 'Abith Latiff',
      role: 'COO',
      company: 'Spectrify AI',
      quote: 'Winning 4 awards was an honor, made even more special by the exceptional event experience. Seamless organization, perfect timing, and outstanding execution showcased the professionalism and excellence behind the SLASSCOM Ingenuity Awards.'
    },
    {
      name: 'Dr. Dhanushi Hettiarachchi',
      role: 'Chief Executive Officer and Co-Founder',
      company: 'Ophtha Innovations (Pvt.) Ltd',
      quote: 'SLASSCOM has been more than a platform in my journey , it has been a catalyst. Being recognized as Woman Technopreneur of the Year 2026 strengthened my mission to prevent avoidable blindness, starting from Sri Lanka. I am especially grateful to SLASSCOM for opening doors such as the IITM Pravartak program and for genuinely empowering women entrepreneurs creating real impact.'
    },
  ];

  const [activeQuote, setActiveQuote] = useState<Testimonial | null>(null);

  // Duplicate items to ensure a continuous infinite scroll loop in the marquee track
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="testimonials section" id="testimonials" data-theme="light" style={{ paddingBottom: '5px' }}>
      <div className="container text-center">
        <span className="section-label reveal">Testimonials</span>
        <h2 className="section-title reveal delay-1">What Our <span className="highlight">Winners Say</span></h2>
      </div>

      <div className="testimonial-marquee reveal delay-2">
        <div className="marquee-content">
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="marquee-item">
              <div className="quote-text-container">
                <p className="marquee-quote clamped">
                  {item.quote}
                </p>
                <span className="read-more-btn" onClick={() => setActiveQuote(item)}>
                  Read More <i className="fas fa-chevron-right"></i>
                </span>
              </div>
              <div className="marquee-author">
                <div className="marquee-author-info">
                  <span className="name">{item.name}</span>
                  <span className="role">{item.role}, {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <div className={`testimonial-modal ${activeQuote ? 'active' : ''}`} id="testimonialModal">
        <div className="modal-overlay" onClick={() => setActiveQuote(null)}></div>
        <div className="modal-card">
          <button className="modal-close" onClick={() => setActiveQuote(null)}>&times;</button>
          <div className="modal-body">
            <i className="fas fa-quote-left quote-icon"></i>
            <p className="modal-text" id="modalText">"{activeQuote?.quote}"</p>
            <div className="modal-author">
              <span className="modal-author-name" id="modalAuthorName">{activeQuote?.name}</span>
              <span className="modal-author-role" id="modalAuthorRole">{activeQuote?.role}, {activeQuote?.company}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
