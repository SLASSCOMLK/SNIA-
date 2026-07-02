import React from 'react';

export const Partners: React.FC = () => {
  const ecosystemPartners = [
    { name: 'LAN', logo: '/images/sponsors/LAN Logo High Res-01 (1).png' },
    { name: 'Hatch', logo: '/images/sponsors/Hatch.png' },
    { name: 'nVentures', logo: '/images/sponsors/nVentures Logos-01.png' },
    { name: 'IEEE', logo: '/images/sponsors/IEEE SL Logo - Vertical - Original (2).png' },
    { name: 'TRACE', logo: '/images/sponsors/TRACE logo.png' },
    { name: 'BCS', logo: '/images/sponsors/BCS-SL-Black (1).png' },
    { name: 'FASL', logo: '/images/sponsors/FASL.png' },
    { name: 'NCIT', logo: '/images/sponsors/NCIT_Logo.png' },
    { name: 'CIMA', logo: '/images/sponsors/AICPA_CIMA.png' },
    { name: 'EDB', logo: '/images/sponsors/Copy of EDB - LOGO (1) (1).png' },
    { name: 'IMG', logo: '/images/sponsors/img_logo (1).gif' },
    { name: 'NCE', logo: '/images/sponsors/NCE - Voice of the exporter.png' },
    { name: 'FITIS', logo: '/images/sponsors/fitis-logo.png' },
    { name: 'CSSL', logo: '/images/sponsors/CSSL_Logo.png' },
  ];

  // Duplicate items for continuous animation loop
  const marqueeLogos = [...ecosystemPartners, ...ecosystemPartners];

  return (
    <section className="partners section reveal-bg" id="partners" data-theme="light" style={{ paddingTop: '20px' }}>
      <div className="container text-center">
        {/* Main Organizer */}
        <div className="partners-row main-tier" style={{ marginBottom: '100px' }}>
          <div className="partner-block">
            <span className="partner-label">Organized By</span>
            <img src="/images/sponsors/slasscom_logo-removebg-preview.png" alt="SLASSCOM" className="partner-logo" />
          </div>
        </div>

        <span className="section-label reveal">Our Partners</span>
        <h2 className="section-title reveal delay-1">Sponsors & <span className="highlight">Partners</span></h2>

        <div className="partners-hierarchy reveal delay-2">
          {/* Row 1: Corporate & Strategic Sponsor */}
          <div className="partners-row top-tier">
            <div className="partner-block">
              <img src="/images/sponsors/NationTrustBank.png" alt="Nations Trust Bank" className="partner-logo" />
              <span className="partner-label">Corporate Sponsor</span>
            </div>
            <div className="partner-block">
              <img src="/images/sponsors/zoho logo.png" alt="Zoho" className="partner-logo" />
              <span className="partner-label">Strategic Sponsor</span>
            </div>
          </div>

          {/* Row 2: Category Sponsors */}
          <div className="partners-row category-tier">
            <div className="category-logos-group">
              <img src="/images/sponsors/Sysco LABS Logo Blue-01.png" alt="Sysco Labs" className="category-logo" />
              <img src="/images/sponsors/Vital Hub.png" alt="Vital Hub" className="category-logo" />
              <img src="/images/sponsors/innodata.png" alt="Innodata" className="category-logo category-logo-innodata" />
              <img src="/images/sponsors/frontwalker-logo-gradient.png" alt="Frontwalker" className="category-logo" />
            </div>
            <span className="partner-label">Category Sponsors</span>
          </div>

          {/* Row 3: Process & Governance Partner & National Partners */}
          <div className="partners-row bottom-tier">
            <div className="partner-block">
              <div className="partner-logo-wrapper">
                <img src="/images/sponsors/Deloitte Logo[62]_page-0001.png" alt="Deloitte" className="partner-logo" />
              </div>
              <span className="partner-label">Process and Governance Partner</span>
            </div>
            <div className="partner-block national-partner-block">
              <div className="national-logos-group">
                <img src="/images/sponsors/Ministry-of-Digital-Economy-logo.png" alt="Ministry of Digital Economy" className="national-logo" style={{ height: '50px', width: 'auto' }} />

                <img src="/images/sponsors/ministry of industry logo (1).png" alt="Ministry of Industry" className="national-logo" style={{ height: '120px', width: 'auto' }} />
                <img src="/images/sponsors/ministrylogo.png" alt="Ministry of Technology" className="national-logo" style={{ height: '50px', width: 'auto' }} />
              </div>
              <span className="partner-label">National Partners</span>
            </div>
          </div>

          {/* Row 4: Official Snack Partner */}
          <div className="partners-row bottom-tier" style={{ justifyContent: 'center', marginTop: '40px' }}>
            <div className="partner-block">
              <div className="partner-logo-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/sponsors/munchee.PNG" alt="Munchee" className="partner-logo" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <span className="partner-label">Official Snack Partner</span>
            </div>
          </div>
        </div>
      </div>

      <div className="partners-marquee" style={{ marginTop: '60px' }}>
        <div className="marquee-content marquee-left-to-right">
          {marqueeLogos.map((item, idx) => (
            <div key={idx} className="partner-logo-card">
              <img src={item.logo} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center" style={{ marginTop: '20px' }}>
        <div className="key-partner-label reveal delay-3">Eco system Partners</div>
      </div>
    </section>
  );
};
