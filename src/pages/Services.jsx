import { useState } from "react";
import "../styles/Services.scss";
import SEO from "../components/SEO.jsx";

import Lys from "../assets/Lys.png";
import Tournesol from "../assets/Tournesol.png";
import Chat from "../assets/Chat.png";
import Hibou from "../assets/Hibou.png";
import Paon from "../assets/Paon.png";
import Fleur from "../assets/Fleur.png";
import Déco from "../assets/Déco.png";
import Serretête from "../assets/Serretête.png";
import Bague from "../assets/Bague.png";
import Citrouille from "../assets/Citrouille.png";
import Bat from "../assets/Bat.jpg";
import Fantôme from "../assets/Fantôme.png";
import Ange from "../assets/Ange.png";
import Escargot from "../assets/Escargot.png";
import Herisson from "../assets/Herisson.png";
import Magnets from "../assets/Magnets.png";
import Renne from "../assets/Renne.png";
import Lampe from "../assets/Lampe.png";

function Services() {

  const [selectedService, setSelectedService] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const getSeason = () => {
  const month = new Date().getMonth() + 1;

  if (month === 12) {
    return {
      icon: "🎄",
      label: "Noël",
    };
  }

  if (month >= 9 && month <= 11) {
    return {
      icon: "🍂",
      label: "Automne",
    };
  }

  if (month >= 6 && month <= 8) {
    return {
      icon: "☀️",
      label: "Été",
    };
  }

  if (month >= 3 && month <= 5) {
    return {
      icon: "🌸",
      label: "Printemps",
    };
  }

  return {
    icon: "❄️",
    label: "Hiver",
  };
};

const season = getSeason();


const services = [
  {
    icon: "🌸",
    title: "Fleurs & bouquets",
    description:
      "Des compositions florales intemporelles qui ne fanent jamais, idéales pour illuminer un intérieur ou offrir un cadeau durable.",
    images: [
      Lys,
      Tournesol,
      Fleur,
    ],
  },
    {
  icon: "🐾",
  title: "Animaux",
  description:
    "De petits animaux entièrement réalisés en fil chenille, pleins de douceur et de personnalité pour décorer ou offrir.",
  images: [
    Chat,
    Hibou,
    Paon,
  ],
},
  {
    icon: "💡",
    title: "Lampes & luminaires",
    description:
      "Des pièces chaleureuses qui jouent avec la lumière et les textures pour créer une ambiance douce et feutrée.",
    images: [
      Lampe,
    ],
  },
  {
    icon: "🌼",
    title: "Magnets & porte-clés",
    description:
      "De petits accessoires du quotidien pleins de peps pour emporter une touche de fantaisie partout avec soi.",
    images: [
      Escargot,
      Herisson,
      Magnets,
    ],
  },
  {
    icon: "✨",
    title: "Décorations & accessoires",
    description:
      "Des suspensions, bibelots et objets fantaisistes pensés pour personnaliser chaque recoin de la maison.",
    images: [
      Déco,
      Serretête,
      Bague,
    ],
  },
  {
    icon: season.icon,
    title: "Collections saisonnières",
    description: `Découvrez nos créations du moment autour de ${season.label}, ainsi que nos collections pour Halloween, Noël et les différentes saisons de l’année.`,
    images: [
      Citrouille,
      Bat,
      Fantôme,
      Ange,
      Renne,
    ],
  },
];;

  return (
    <main className="services-page">
      <SEO
  title="Créations personnalisées | Les Chenipops"
  description="Découvrez les créations et personnalisations proposées par Les Chenipops, réalisées artisanalement en fil chenille."
/>
      <section className="services-container">

        <div className="services-header">
          <span>Nos créations</span>

          <h1>Des créations faites pour vous</h1>

          <p>
            Spécialisée dans la petite décoration et les accessoires originaux,
            Chenipops propose une large gamme de créations personnalisées et
            minutieusement travaillées.
          </p>
        </div>

        <div className="services-grid">
  {services.map((service) => (
    <article
      className="service-card"
      key={service.title}
      onClick={() => setSelectedService(service)}
    >
      <div className="service-icon">{service.icon}</div>

      <h2>{service.title}</h2>

      <p>{service.description}</p>

      <span className="service-gallery-link">
        Voir les créations
      </span>
    </article>
  ))}
</div>

{selectedService && (
  <div
    className="gallery-overlay"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="gallery-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="gallery-close"
        onClick={() => setSelectedService(null)}
        aria-label="Fermer la galerie"
      >
        ×
      </button>

      <div className="gallery-title">
        <span>{selectedService.icon}</span>
        <h2>{selectedService.title}</h2>
      </div>

      {selectedService.images.length > 0 ? (
        <div className="gallery-grid">
          {selectedService.images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${selectedService.title} - création ${index + 1}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      ) : (
        <p className="gallery-empty">
          Les photos arrivent bientôt 🌸
        </p>
      )}
    </div>
  </div>
)}

{selectedImage && (
  <div
    className="image-overlay"
    onClick={() => setSelectedImage(null)}
  >
    <button
      className="image-close"
      onClick={() => setSelectedImage(null)}
      aria-label="Fermer l'image"
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Création Les Chenipops agrandie"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}

      </section>
    </main>
  );
}

export default Services;