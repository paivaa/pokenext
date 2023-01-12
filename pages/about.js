import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Meu primeiro projeto para entender e aplicar os conhecimentos do
        framework react: Next.js. Consumindo através de uma api pública os dados
        e imagens, construimos um pokedex gerando dinamicamente os cards com
        informações de 200 pokémons. Usado como base a{" "}
        <a href="https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft">
          playlist
        </a>{" "}
        do curso de Next.js do canal do youtube do Matheus Battisti.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
