import React, { useState } from 'react';

interface CategoryItem {
  type: 'School' | 'University' | 'Corporate' | 'Startup';
  title: string;
  fee: string;
  icon: string;
  delayClass: string;
}

export const Categories: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const categories: CategoryItem[] = [
    { type: 'School', title: 'Best Innovative Product', fee: '', icon: 'fas fa-school', delayClass: 'reveal delay-4' },
    { type: 'University', title: 'Best Innovative Product', fee: '', icon: 'fas fa-university', delayClass: 'reveal delay-3' },
    { type: 'Corporate', title: 'Fintech & Banking', fee: '', icon: 'fas fa-building', delayClass: 'reveal delay-1' },
    { type: 'Startup', title: 'Best Startup', fee: '', icon: 'fas fa-rocket', delayClass: 'reveal delay-2' },
    { type: 'Startup', title: 'Woman Technopreneur', fee: '', icon: 'fas fa-female', delayClass: 'reveal delay-5' },
    { type: 'Corporate', title: 'Transportation & Logistics', fee: '', icon: 'fas fa-truck', delayClass: 'reveal delay-6' },
    // Hidden Corporate Items
    { type: 'Corporate', title: 'Agritech', fee: '', icon: 'fas fa-leaf', delayClass: '' },
    { type: 'Corporate', title: 'Manufacturing', fee: '', icon: 'fas fa-industry', delayClass: '' },
    { type: 'Corporate', title: 'Hospitality & Tourism', fee: '', icon: 'fas fa-hotel', delayClass: '' },
    { type: 'Corporate', title: 'E-commerce & Retail', fee: '', icon: 'fas fa-cart-shopping', delayClass: '' },
    { type: 'Corporate', title: 'Edutech', fee: '', icon: 'fas fa-graduation-cap', delayClass: '' },
    { type: 'Corporate', title: 'Healthtech', fee: '', icon: 'fas fa-heartbeat', delayClass: '' },
    { type: 'Corporate', title: 'Government', fee: '', icon: 'fas fa-building-columns', delayClass: '' },
    { type: 'Corporate', title: 'General Innovation', fee: '', icon: 'fas fa-lightbulb', delayClass: '' },
    { type: 'Corporate', title: 'Internal Processes / RPA', fee: '', icon: 'fas fa-cogs', delayClass: '' },
    { type: 'Corporate', title: 'Tech for Good', fee: '', icon: 'fas fa-hands-helping', delayClass: '' }
  ];

  return (
    <section className="section" id="categories" data-theme="light">
      <div className="container text-center">
        <span className="section-label reveal">Award Categories</span>
        <h2 className="section-title reveal delay-1">Compete Across <span className="highlight">Multiple Domains</span></h2>
        <p className="section-subtitle reveal delay-2">From disruptive Fintech solutions to socially impactful innovations, find your category and showcase your ingenuity.</p>

        <div className="categories-modern-grid" id="catGrid">
          {categories.map((item, idx) => {
            const isHidden = idx >= 6;

            // Only render items if visible or showAll is active
            if (isHidden && !showAll) return null;

            const isFree = item.fee.includes('FREE');

            return (
              <div
                key={idx}
                className={`cat-modern-card ${item.delayClass} ${isHidden ? 'active' : ''}`}
                style={isHidden ? { display: 'flex', opacity: 1, transform: 'translateY(0)' } : undefined}
              >
                <div className="cat-modern-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="cat-modern-content">
                  <span className="cat-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <span className={`cat-fee ${isFree ? 'cat-free' : ''}`}>{item.fee}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '40px' }}>
          <button
            id="viewMoreCatsBtn"
            className="btn-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less Categories' : 'View More Categories'}
            <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} ml-1`}></i>
          </button>
        </div>
      </div>
    </section>
  );
};
