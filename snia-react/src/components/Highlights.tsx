import React from "react";
import ExpandableGallery from "./ui/gallery-animation";

const highlightImages = [
  "/images/slideshow/EAF03286.webp",
  "/images/slideshow/EAF03360(1).webp",
  "/images/slideshow/EAF03628 (2).jpg",
  "/images/slideshow/EAF03734.webp",
  "/images/slideshow/EAF03891.webp",
  "/images/slideshow/EAF04037.webp",
  "/images/slideshow/EAF04193.webp",
  "/images/slideshow/EAF04319.webp",
  "/images/slideshow/NVD_0823.webp",
  "/images/slideshow/NVD_1146.webp",
  "/images/slideshow/NVD_1616.webp",
];

export const Highlights: React.FC = () => {
  return (
    <section className="highlights-section section" id="highlights" data-theme="dark">
      <div className="container">
        <div className="text-center" style={{ marginBottom: "56px" }}>
          <span className="section-label reveal">Event Highlights</span>
          <h2 className="section-title reveal delay-1">
            Unforgettable <span className="highlight">Moments</span>
          </h2>
          <p className="highlights-subtitle reveal delay-2">SNIA 2026</p>
        </div>

        <div className="reveal delay-3">
          <ExpandableGallery
            images={highlightImages}
          />
        </div>

        {/* VIDEO SECTION — hidden until new video is ready. Uncomment to restore:
        <div className="video-card fadeInUp-anim" style={{ marginTop: "80px" }}>
          <div className="video-container">
            <iframe
              src="https://drive.google.com/file/d/1-R9SUT7AEPWlnaoZMSwWFuITA_364ecL/preview"
              width="640"
              height="480"
              allowFullScreen
              title="SNIA Highlights Video"
              style={{ border: "none" }}
            />
          </div>
          <div className="video-card-content">
            <h3 className="video-title">SNIA 2025 Highlights</h3>
            <p className="video-desc">
              Relive the most exciting moments and unforgettable plays from our latest event. Watch the highlights now!
            </p>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};
