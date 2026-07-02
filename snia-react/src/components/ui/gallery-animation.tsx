import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableGalleryProps {
  images: string[];
  className?: string;
}

const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({ images, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  // Measure container and item widths dynamically
  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (itemRef.current) {
        setItemWidth(itemRef.current.offsetWidth);
      }
    };

    updateSize();

    // Use ResizeObserver for accurate sizing on window resize and layout shifts
    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(containerRef.current);
    if (itemRef.current) {
      resizeObserver.observe(itemRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [images]);

  // Autoplay functionality: slides every 3 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleItemClick = (index: number) => {
    if (index === currentIndex) {
      setSelectedIndex(index);
    } else {
      setCurrentIndex(index);
    }
  };

  const closeImage = () => setSelectedIndex(null);

  const goToNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const goToPrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  // Calculate translation offset to center the active item
  const gap = 30; // matches CSS gap
  const offset = containerWidth && itemWidth
    ? (containerWidth / 2) - (currentIndex * (itemWidth + gap)) - (itemWidth / 2)
    : 0;

  return (
    <div 
      className={`carousel-container ${className}`}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="carousel-viewport" ref={containerRef}>
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(${offset}px)` }}
        >
          {images.map((image, index) => {
            let itemClass = "carousel-item";
            if (index === currentIndex) {
              itemClass += " active";
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
              itemClass += " prev";
            } else if (index === (currentIndex + 1) % images.length) {
              itemClass += " next";
            }

            return (
              <div
                key={index}
                ref={index === 0 ? itemRef : null}
                className={itemClass}
                onClick={() => handleItemClick(index)}
              >
                <img
                  src={image}
                  alt={`Highlight image ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous slide">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="carousel-btn next" onClick={handleNext} aria-label="Next slide">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}

      {/* Lightbox / Modal Overlay for Fullscreen View */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(5,5,15,0.96)",
              padding: "16px",
              backdropFilter: "blur(12px)",
            }}
            onClick={closeImage}
          >
            <button
              style={{
                position: "absolute", top: "16px", right: "16px", zIndex: 10,
                background: "#d4af37", border: "none",
                borderRadius: "50%", width: "40px", height: "40px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#111",
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
              }}
              onClick={closeImage}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {images.length > 1 && (
              <button
                style={{
                  position: "absolute", left: "24px", zIndex: 10,
                  background: "#d4af37", border: "none",
                  borderRadius: "50%", width: "56px", height: "56px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#111",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
                }}
                onClick={goToPrevModal}
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <motion.div
              style={{ position: "relative", maxWidth: "700px", width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 1}`}
                style={{
                  width: "100%", height: "auto", objectFit: "contain",
                  borderRadius: "12px", maxHeight: "60vh",
                  border: "1px solid rgba(212,175,55,0.25)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
                  display: "block",
                }}
                decoding="async"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35 }}
              />
            </motion.div>

            {images.length > 1 && (
              <button
                style={{
                  position: "absolute", right: "24px", zIndex: 10,
                  background: "#d4af37", border: "none",
                  borderRadius: "50%", width: "56px", height: "56px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#111",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
                }}
                onClick={goToNextModal}
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            <div style={{
              position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
              color: "#d4af37", fontSize: "13px",
              background: "rgba(10,10,20,0.75)", border: "1px solid rgba(212,175,55,0.3)",
              padding: "6px 20px", borderRadius: "999px",
              backdropFilter: "blur(8px)", letterSpacing: "0.1em",
            }}>
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableGallery;
