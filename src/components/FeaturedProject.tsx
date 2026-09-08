import Image from "next/image";
import davetliDesktop from "@/assets/images/davetli-desktop.webp";

export const FeaturedProject = () => (
  <article className="preview-project" id="projects" aria-labelledby="davetli-heading">
    <div className="preview-project-top">
      <span className="preview-project-category">Digital invitation website</span>
    </div>
    <h2 id="davetli-heading">Davetli Misafir</h2>
    <div className="preview-project-image">
      <div className="preview-desktop-image">
        <Image
          src={davetliDesktop}
          alt="Davetli Misafir landing page with its navigation, serif headline, rose backdrop and invitation preview"
          sizes="(max-width: 1467px) 90vw, 1320px"
          priority
        />
      </div>
    </div>
    <p className="preview-project-description">
      A website for a digital invitation brand, presenting a collection of designs
      and public example invitations.
    </p>
    <div className="preview-project-bottom">
      <p><span>My role</span>Website development</p>
    </div>
  </article>
);
