import styles from "./Options.module.css";

export interface IOptionsProps {
  responses: string[];
  onSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Options = ({ responses, onSelect }: IOptionsProps) => {
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(e);
  };

  return (
    <ul className={styles.optionsList}>
      {responses?.map((respuesta, index) => {
        return (
          <li key={index} className={styles.option}>
            <button className={styles.button} onClick={handleSelect}>
              {respuesta}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
