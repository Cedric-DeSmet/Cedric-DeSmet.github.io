import Image from "next/image";
import aliKirmizi from "@/assets/images/ali-kirmizi-burger-portfolio.webp";
import { FeaturedProject } from "@/components/FeaturedProject";

export const ProjectsSection = () => (
  <section id="more-work" className="work wrap direction-preview work-snapshots" aria-labelledby="work-heading">
    <div className="section-heading"><h2 id="work-heading">Selected work</h2></div>
    <FeaturedProject />
    <article className="project-feature burger-feature" aria-labelledby="burger-heading">
      <div className="project-stage burger-stage"><Image src={aliKirmizi} alt="Ali Kırmızı Burger website showing its burger photography and restaurant navigation" sizes="(max-width: 700px) 92vw, 80vw" /></div>
      <div className="project-caption">
        <div className="project-name"><div><h3 id="burger-heading">Ali Kırmızı Burger</h3><p className="project-category">Restaurant website</p></div></div>
        <div className="project-description"><p>A restaurant website with a bold, food-led presentation and a distinct identity.</p></div>
      </div>
    </article>
  </section>
);
