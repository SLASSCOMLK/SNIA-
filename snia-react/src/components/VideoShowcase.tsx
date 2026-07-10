import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'motion/react';

export const VideoShowcase: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35, once: false });
  const hasStarted = useRef(false);

  const sendCommand = useCallback((func: 'playVideo' | 'pauseVideo') => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: '' }),
      '*'
    );
  }, []);

  useEffect(() => {
    if (isInView) {
      sendCommand('playVideo');
      hasStarted.current = true;
    } else if (hasStarted.current) {
      sendCommand('pauseVideo');
    }
  }, [isInView, sendCommand]);

  return (
    <section
      id="video-showcase"
      data-theme="dark"
      className="video-showcase-section"
      aria-label="SNIA Event Highlights Video"
    >
      {/* Ambient background glow */}
      <div className="video-showcase-bg" aria-hidden="true" />

      <div className="container">
        {/* Section header */}
        <motion.div
          className="video-showcase-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Relive the Moment</span>
          <h2 className="video-showcase-title">
            SNIA 2026 —<span className="video-title-gold"> Official Highlights</span>
          </h2>
        </motion.div>

        {/* Video frame with liquid glass border */}
        <motion.div
          ref={containerRef}
          className="video-glass-outer"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Radial glow behind frame */}
          <div className="video-ambient-glow" aria-hidden="true" />

          {/* Liquid glass border frame */}
          <div className="video-glass-frame" aria-hidden="false">
            {/* Inner dark wrapper */}
            <div className="video-iframe-inner">
              <iframe
                ref={iframeRef}
                id="snia-highlights-iframe"
                src="https://www.youtube.com/embed/fRlV6osl9Yk?si=_BIQG7e2nsU-oPvd&start=7&enablejsapi=1&mute=1&rel=0&modestbranding=1&playsinline=1"
                title="SNIA 2025 Official Highlights — YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              {/* Top-edge inner highlight */}
              <div className="video-inner-highlight" aria-hidden="true" />
            </div>
          </div>

          {/* Corner accent sparks */}
          <div className="video-corner-tl" aria-hidden="true" />
          <div className="video-corner-br" aria-hidden="true" />
        </motion.div>

        {/* Watch full ceremony CTA */}
        <motion.div
          className="video-cta-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <a
            id="watch-ceremony-cta"
            href="https://www.youtube.com/watch?v=fRlV6osl9Yk&t=7s"
            target="_blank"
            rel="noopener noreferrer"
            className="video-watch-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Watch Full Ceremony on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
};
