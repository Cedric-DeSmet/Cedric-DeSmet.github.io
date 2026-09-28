import { ProjectVideo } from "@/components/ProjectVideo";
export const FeaturedProject = () => (
  <article className="preview-project" id="projects" aria-labelledby="davetli-heading">
    <div className="preview-project-top">
      <span className="preview-project-category">Digital invitation website</span>
    </div>
    <h2 id="davetli-heading">Davetli Misafir</h2>
    <div className="preview-project-image">
      <div className="preview-desktop-image">
        <ProjectVideo />
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
