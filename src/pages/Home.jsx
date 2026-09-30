import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

import SEO from "../components/SEO.jsx";
import image2 from "../assets/Chat.png";
import image3 from "../assets/Bague.png";
import image4 from "../assets/Bat.jpg";
import image5 from "../assets/Citrouille.png";
import image7 from "../assets/Fleur.png";
import image8 from "../assets/Hibou.png";
import image9 from "../assets/Scratch.png";


function Home() {

  const images = [image2,image3, image4, image5, image7, image8, image9];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="home">
      <SEO
        title="Les Chenipops | Créations artisanales en fil chenille"
        description="Découvrez Les Chenipops, des créations artisanales originales et personnalisées réalisées à la main en fil chenille."
      />
      {/* CARROUSEL */}
      <section className="home-carousel">
        <div className="carousel-wrapper">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Création Chenipops ${index + 1}`}
              className={
                index === currentIndex
                  ? "carousel-image active"
                  : "carousel-image"
              }
            />
          ))}

          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={
                  index === currentIndex
                    ? "carousel-dot active"
                    : "carousel-dot"
                }
                onClick={() => setCurrentIndex(index)}
                aria-label={`Afficher l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">Bienvenue chez Chenipops</span>
          <h1>Des créations originales faites avec soin</h1>
          <p>
            Découvrez un univers coloré autour de la décoration,
            des fleurs, des accessoires et des créations personnalisées.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="hero-button">
              Découvrir nos créations
            </Link>
            <Link to="/contact" className="hero-button secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>


      {/* PERSONNALISATION */}
      <section className="custom-home">
        <div className="custom-home-content">
          <span className="section-label">
            Créations personnalisées
          </span>
          <h2>
            Une idée, une couleur, un univers...
          </h2>
          <p>
            Chez Chenipops, certaines créations peuvent être personnalisées
            selon vos envies : couleurs, thèmes, styles ou petits détails.
            Chaque création peut ainsi devenir une pièce unique qui vous
            ressemble.
          </p>
          <Link to="/contact" className="custom-home-button">
            Imaginer ma création
          </Link>
        </div>
      </section>


      {/* PETITE PRÉSENTATION */}
      <section className="home-about">
        <div className="home-about-content">
          <span className="section-label">
            L'univers Chenipops
          </span>
          <h2>
            Des créations pleines de couleur et de douceur
          </h2>
          <p>
            Chenipops imagine de petites décorations et accessoires
            originaux, minutieusement travaillés pour apporter une touche
            de fantaisie à votre intérieur ou faire plaisir à vos proches.
          </p>
          <Link to="/about" className="home-link">
            En savoir plus →
          </Link>
        </div>
      </section>


      {/* APPEL VERS LES SERVICES */}
      <section className="home-services">
        <div className="home-services-content">
          <span className="section-label">
            Nos créations
          </span>
          <h2>
            Un univers pour chaque envie
          </h2>
          <p>
            Fleurs, bouquets, luminaires, porte-clés, décorations
            saisonnières et bien plus encore.
          </p>
          <Link to="/services" className="custom-home-button">
            Voir tous nos services
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;