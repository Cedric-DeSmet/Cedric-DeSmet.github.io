import { ContactForm } from "@/components/ContactForm";

export const HeroSection = () => (
  <section className="direction-preview" aria-labelledby="intro-heading">
    <div className="preview-container preview-opening">
      <div className="preview-introduction">
        <h1 id="intro-heading">
          <span className="preview-highlight">Websites</span>{" "}
          built around your business.
        </h1>
        <p className="preview-description">
          I’m Cedric. I develop and redesign websites for businesses and independent
          professionals. Take a look at my work, then tell me what you have in mind.
        </p>
        <div className="preview-actions">
          <a className="preview-secondary" href="#projects">
            Explore my work
          </a>
        </div>
        <p className="preview-personal-note">Your website. A direct conversation with the person building it.</p>
      </div>
      <ContactForm />
    </div>
  </section>
);
