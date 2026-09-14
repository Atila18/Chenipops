import "../styles/Services.scss";

function Services() {

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
  },
  {
    icon: "💡",
    title: "Lampes & luminaires",
    description:
      "Des pièces chaleureuses qui jouent avec la lumière et les textures pour créer une ambiance douce et feutrée.",
  },
  {
    icon: "🌼",
    title: "Magnets & porte-clés",
    description:
      "De petits accessoires du quotidien pleins de peps pour emporter une touche de fantaisie partout avec soi.",
  },
  {
    icon: "✨",
    title: "Décorations & accessoires",
    description:
      "Des suspensions, bibelots et objets fantaisistes pensés pour personnaliser chaque recoin de la maison.",
  },
  {
  icon: season.icon,
  title: "Collections saisonnières",
  description:
    `Découvrez nos créations du moment autour de ${season.label}, ainsi que nos collections pour Halloween, Noël et les différentes saisons de l’année.`,
},
];;

  return (
    <main className="services-page">
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
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}

export default Services;