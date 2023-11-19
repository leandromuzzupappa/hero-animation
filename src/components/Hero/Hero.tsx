import styles from "./Hero.module.css";

interface IHeroProps {
  headline: string;
  section: string;
}

export const Hero = ({ headline, section }: IHeroProps) => {
  return (
    <section className={styles.hero}>
      <h1>{headline}</h1>
      <p>{section}</p>
    </section>
  );
};
