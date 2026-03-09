import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.Main}>
      <Image
        className={styles.Background}
        src="/viegetal_background.jpg"
        alt="Background"
        fill
      />
      
      <Image
        className={styles.Viegetal__Logo}
        src="/viegetal_logo_white.png"
        alt="Logo blanc"
        width={320}
        height={189}
      />

      <div className={styles.Card}>
        <div className={styles.Card__Content}>
          {/* MAIN TITLE */}
          <h1 className={styles.Title}>Atelier de printemps</h1>

          {/* ORGANISER */}
          <div className={styles.Hosts}>
            <div className={styles.Host__Card}>
              <span>
                <strong>Romain</strong> <span className={styles.Family__Name}>Barthelot de Bellefonds</span>
              </span>
              <span className={styles.Host__Status}>Organisateur</span>
            </div>

            <div className={styles.Host__Card}>
              <span>
                <strong>Sarah</strong> <span className={styles.Family__Name}>Fiolleau</span>
              </span>
              <span className={styles.Host__Status}>Intervenante</span>
            </div>
          </div>

          {/* BODY HEADER */}
          <div className={styles.Body__Container}>
            <strong className={styles.Body__Title}>Hygiène de vie • Mouvement • Cuisine végétale</strong>
            <span className={styles.Body__SubTitle}>Approche globale du bien-être</span>
          </div>
              
          <Image
            className={styles.Background__Inner_Card}
            src="/background_layout.png"
            alt="Inner card background particle"
            width={430}
            height={720}
          />

          {/* BODY CARDS */}
          <div className={styles.Body__Cards}>

            {/* CARD #1 */}
            <div className={styles.Body__Card}>
              <strong className={styles.Body__Card__Title}>Échange</strong> <span>autour du</span>
              <ul>
                <li>sommeil</li>
                <li>l'alimentation</li>
                <li>mouvement</li>
                <li>respiration</li>
              </ul>
            </div>
            
            {/* CARD #2 */}
            <div className={styles.Body__Card}>
              <strong className={styles.Body__Card__Title}>Atelier culinaire</strong>
              <span className={styles.Body__Card__Text}>Réalisation d'une recette gourmande et équilibrée</span>
            </div>
            
            {/* CARD #3 */}
            <div className={styles.Body__Card} style={{maxWidth: 360}}>
              <strong className={styles.Body__Card__Title} style={{display: 'flex', justifyContent: 'center'}}>Bonus</strong>
              <ul>
                <li>Bilan individuel gratuit sur l'hygiene de vie</li>
                <li>Une séance de stretching posturale offerte animée par Sarah FIOLLEAU</li>
              </ul>
            </div>
          </div>

          {/* PRICE & BOOKING */}
          <div className={styles.Booking__Info}>
            <span>
              <strong className={styles.Pricing}>35€</strong> <span>/participant</span>
            </span>
            <span>Inscription obligatoire (places limitées) au</span>
            <strong><a href="tel:+33675022956">06 75 02 29 56</a></strong>
            <span>ou sur : <strong><a href="mailto:contact@viegetal.com">contact@viegetal.com</a></strong></span>
          </div>

          {/* FOOTER */}
          <div className={styles.Footer}>

            <div className={styles.Footer__Time_Address}>
              {/* TIME */}
              <span className={styles.Footer__Time}>
                De <strong>15H</strong> à <strong>18H</strong>
              </span>
              
              {/* ADDRESS */}
              <span className={styles.Footer__Address}>
                39 <strong>Grande Rue</strong> 44770 <span className={styles.Uppercase}>Préfailles</span>
              </span>
            </div>

            {/* DATE */}
            <strong className={styles.Footer__Date}>
              Dimanche 22 mars 2026
            </strong>
          </div>
        </div>
      </div>
    </main>
  );
}
