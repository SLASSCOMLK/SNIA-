import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WinnersPage } from './pages/WinnersPage';
import { SponsorshipPage } from './pages/SponsorshipPage';

// Helper component to manage smooth scroll-to-hash navigation across route changes
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Slight delay to ensure React elements are fully rendered and layout is ready
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  useEffect(() => {
    // Slight delay to ensure elements are rendered in the DOM
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-bg');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      });

      revealElements.forEach(el => observer.observe(el));

      return () => {
        revealElements.forEach(el => observer.unobserve(el));
      };
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
        <ScrollManager />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/winners" element={<WinnersPage />} />
            <Route path="/sponsorship" element={<SponsorshipPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
