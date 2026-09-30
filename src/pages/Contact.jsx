import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.scss";
import SEO from "../components/SEO.jsx";

function Contact() {
  const [state, handleSubmit] = useForm("moeqgvnp");

  if (state.succeeded) {
    return (
      <main className="contact-page">
        <SEO
  title="Contact | Les Chenipops"
  description="Contactez Les Chenipops pour obtenir des informations ou échanger autour d'une création personnalisée en fil chenille."
/>
        <div className="contact-success">
          <span>♡</span>
          <h1>Merci pour votre message !</h1>
          <p>
            Votre demande a bien été envoyée à Chenipops.
            Nous vous répondrons dès que possible.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="contact-page">

      <section className="contact-header">
        <span>Nous contacter</span>
        <h1>Parlons de votre projet</h1>

        <p>
          Une question, une envie particulière ou une création personnalisée ?
          N'hésitez pas à nous écrire.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">
          <h2>Chenipops</h2>

          <p>
            Nous serons ravis d'échanger avec vous autour de vos idées,
            commandes et demandes de personnalisation.
          </p>

          <div className="contact-item">
            <div>
              <h3>✉ Email</h3>
              <p>leschenipops@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div>
              <h3> ♡ Réseaux sociaux</h3>
              <p>Retrouvez Chenipops sur nos réseaux.</p>
            </div>
          </div>

          <div className="contact-item">

            <div>
              <h3>✿ Créations personnalisées</h3>
              <p>
                Décrivez-nous votre idée, vos couleurs et le thème souhaité.
              </p>
            </div>
          </div>
        </div>


        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">Nom</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Votre nom"
                required
              />

              <ValidationError
                prefix="Nom"
                field="name"
                errors={state.errors}
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="votre@email.com"
                required
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>


            <div className="form-group">
              <label htmlFor="subject">Sujet</label>

              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir un sujet
                </option>

                <option value="Question générale">
                  Question générale
                </option>

                <option value="Création personnalisée">
                  Création personnalisée
                </option>

                <option value="Commande">
                  Commande
                </option>

                <option value="Autre">
                  Autre
                </option>
              </select>
            </div>


            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Parlez-nous de votre projet..."
                required
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>


            <button
              type="submit"
              className="contact-button"
              disabled={state.submitting}
            >
              {state.submitting
                ? "Envoi en cours..."
                : "Envoyer mon message"}
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Contact;