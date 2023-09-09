import Image from "next/image";
import styles from "./contactDriver.module.css";

import shield from "../../../../public/shieldIcon.svg";
import phone from "../../../../public/phoneIcon.svg";
import ButtonComponent from "../button/button";

export default function ContactDriver() {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputSendMessage}
        type="text"
        name="sendMessage"
        id="sendMessage"
        placeholder="Enviar mensagem para Jake..."
      />
      <div className={styles.emergencyIcons}>
        <ButtonComponent></ButtonComponent>
        <Image
          className={styles.phone}
          src={phone}
          alt="celular"
          width={48}
          height={48}
        />
        <Image
          className={styles.shield}
          src={shield}
          alt="escudo"
          width={46}
          height={48}
        />
      </div>
    </div>
  );
}
