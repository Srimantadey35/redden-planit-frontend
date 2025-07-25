import React from "react";
import Image from "next/image";
import Link from "next/link";

const VIEWPORTS = {
  desktop: "100%",
  tab: "768px",
  mobile: "375px",
};
const BANNER_HEIGHT = {
  desktop: "36rem",
  tab: "28rem",
  mobile: "16rem",
};
const NAV_TEXT = {
  desktop: "text-lg",
  tab: "text-md",
  mobile: "text-base",
};
const HEADING_FONT = {
  desktop: "text-4xl",
  tab: "text-3xl",
  mobile: "text-2xl",
};
const SUBHEADING_FONT = {
  desktop: "text-xl",
  tab: "text-lg",
  mobile: "text-sm",
};
const GALLERY_GRID = {
  desktop: "grid-cols-4",
  tab: "grid-cols-2",
  mobile: "grid-cols-1",
};
const GALLERY_IMG_HEIGHT = {
  desktop: "h-48",
  tab: "h-36",
  mobile: "h-32",
};

const FirstWebSite = ({ view, setView }) => {
  const navTextClass = NAV_TEXT[view];
  const headingFontClass = HEADING_FONT[view];
  const subheadingFontClass = SUBHEADING_FONT[view];
  const eventGridClass =
    view === "desktop"
      ? "grid md:grid-cols-2 gap-8"
      : view === "tab"
      ? "grid grid-cols-2 gap-4"
      : "grid grid-cols-1 gap-2";
  const galleryGridClass = `grid ${GALLERY_GRID[view]} gap-4 px-2`;
  const galleryImgHeight = GALLERY_IMG_HEIGHT[view];

  return (
    <div
      className="mx-auto transition-all duration-300"
      style={{
        width: VIEWPORTS[view],
        minWidth: view === "mobile" ? "320px" : undefined,
        border: "1px solid #e5e7eb",
        borderRadius: "1rem",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.07)",
      }}
    >
      {/* Hero */}
      <section
        className="relative bg-cover bg-center"
        style={{
          height: BANNER_HEIGHT[view],
          backgroundImage: `url('https://live.staticflickr.com/65535/50344935577_1aa9d7bb4c_o.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className={`${headingFontClass} font-serif mb-2`}>
            Alex & Jamie
          </h1>
          <p className={`${subheadingFontClass} mb-4`}>
            October 15, 2025 · Tuscany, Italy
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky py-2 bg-white shadow-md z-10 top-[76px]">
        <div
          className={`mx-auto py-2 px-4 flex ${
            view === "mobile" ? "justify-between" : "justify-center"
          } ${
            view === "desktop"
              ? "space-x-8"
              : view === "tab"
              ? "space-x-4"
              : "space-x-2"
          }`}
          style={{ maxWidth: VIEWPORTS[view] }}
        >
          {["Home", "Our Story", "Events", "Gallery", "RSVP", "FAQs"].map(
            (t) => (
              <a
                key={t}
                href={`#${t.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-gray-700 hover:text-blue-600 ${navTextClass}`}
              >
                {t}
              </a>
            )
          )}
        </div>
      </nav>

      <div className="px-4">
        <div className="font-sans text-gray-800 leading-relaxed">
          {/* Our Story */}
          <section id="our-story" className="py-8 bg-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className={`font-serif mb-4 ${headingFontClass}`}>
                Our Story
              </h2>
              <p className={`text-gray-600 mb-2 ${subheadingFontClass}`}>
                From that first coffee date to a decade of adventures and
                heartfelt memories, here&apos;s how we found our forever.
              </p>
            </div>
          </section>

          {/* Events */}
          <section id="events" className="py-8 bg-gray-50">
            <div className="mx-auto" style={{ maxWidth: VIEWPORTS[view] }}>
              <h2
                className={`font-serif text-center mb-6 ${headingFontClass}`}
              >
                Wedding Events
              </h2>
              <div className={eventGridClass}>
                <div className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">Ceremony</h3>
                  <p className="text-gray-600 text-sm">
                    Oct 15, 2025 · 4 PM · Villa di Fiori, Tuscany
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">Reception</h3>
                  <p className="text-gray-600 text-sm">
                    Oct 15, 2025 · 7 PM · Gardens by the Lake
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="py-8 bg-white text-center">
            <h2 className={`font-serif mb-4 ${headingFontClass}`}>
              Photo Gallery
            </h2>
            <div
              className={galleryGridClass}
              style={{ maxWidth: VIEWPORTS[view], margin: "0 auto" }}
            >
              {["1", "2", "3", "4"].map((i, index) => (
                <Image
                  key={i}
                  src={`/images/homepage-slider-images/event-now/card${index+1}.png`}
                  alt={`Gallery ${i}`}
                  className={`rounded shadow-md object-cover w-full ${galleryImgHeight}`}
                  width={200}
                  height={100}
                />
              ))}
            </div>
          </section>

          {/* RSVP */}
          <section id="rsvp" className="py-8 bg-gray-50 text-center">
            <h2 className={`font-serif mb-4 ${headingFontClass}`}>RSVP</h2>
            <p className={`mb-4 ${subheadingFontClass}`}>
              Kindly confirm your presence by September 15.
            </p>
            <a
              href="mailto:alexandjamie@example.com"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              RSVP via Email
            </a>
          </section>

          {/* FAQs */}
          <section id="faqs" className="py-8 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2
                className={`font-serif mb-4 text-center ${headingFontClass}`}
              >
                FAQs
              </h2>
              <dl className="space-y-2">
                <dt className="font-semibold">Dress Code?</dt>
                <dd className="text-gray-600">
                  Semi-formal – think light linens and elegant shoes.
                </dd>
                <dt className="font-semibold">Accommodation?</dt>
                <dd className="text-gray-600">
                  Nearby villas and B&Bs are linked above under Events.
                </dd>
              </dl>
            </div>
          </section>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="md:text-[16px] text-[14px]">
          &copy; {new Date().getFullYear()} Alex & Jamie. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default FirstWebSite;
