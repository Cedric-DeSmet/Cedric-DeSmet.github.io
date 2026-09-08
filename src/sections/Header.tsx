export const Header = () => (
  <header className="preview-header" id="top">
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="preview-container preview-navigation">
      <a className="preview-name" href="#top" aria-label="Cedric De Smet — home">
        Cedric De Smet<span aria-hidden="true">.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#project-enquiry">
          Contact me <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </div>
  </header>
);
