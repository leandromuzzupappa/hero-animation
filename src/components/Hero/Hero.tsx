import styles from "./Hero.module.css";

interface IHeroProps {
  headline: string;
  section: string;
  difficulty?: string;
}

export const Hero = ({ headline, section, difficulty }: IHeroProps) => {
  return (
    <section className={styles.hero}>
      <p>
        {section} <span>{difficulty}</span>
      </p>
      <h1>{headline}</h1>
    </section>
  );
};
