import "../styles/About.scss";
import deco from "../assets/Déco.png";
import SEO from "../components/SEO.jsx";

function About() {
  return (
    <main className="about">
      <SEO
  title="À propos | Les Chenipops"
  description="Découvrez l'univers des Chenipops et l'histoire derrière ces créations artisanales réalisées à la main en fil chenille."
/>
      <section className="about-content">
        <div className="about-text">
          <h1>Qui sommes-nous ?</h1>
          <p>Chenipops insuffle une dose de poésie et de créativité dans le quotidien en transformant un matériau simple et nostalgique — le cure-pipe — en objets d'art et accessoires uniques. Derrière cette micro-entreprise se cache un univers coloré, ludique et entièrement façonné à la main, où l'art de la plieuse de fil prend toute sa mesure.</p>

          <h2>Objectifs</h2>
          <p>
            Nos objectifs sont de valoriser le fait-main à travers des créations uniques et colorées en cure-pipe, tout en insufflant une touche de poésie et de fantaisie dans le quotidien de chacun, accessible à chacun. Nous souhaitons également sensibiliser le public à l'importance de l'artisanat et de la créativité dans notre société, en mettant en avant le travail manuel et la passion qui se cachent derrière chaque création.
          </p>
        </div>

        <div className="product-image">
            <img className="about-img" src={deco} alt="Exemple" />
        </div>
      </section>
    </main>
  );
}

export default About;