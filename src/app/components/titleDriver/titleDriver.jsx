import styles from "./titleDriver.module.css";

export default function TitleDriver() {
  return (
    <div>
      <h1 className={styles.title}>
        Encontre <span>Jake</span> no local de partida
      </h1>
      <p className={styles.subtitle}>Chega em 3 minutos (800 metros)</p>
    </div>
  );
}
