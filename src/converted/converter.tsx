import { useState } from "react";
import converterController from "../controllers/converter/converter.controller";
import styles from "./converted.module.scss";

export default function Converter() {
  const [inputText, setInputText] = useState<string>("");

  async function onChangeText(event: any) {
    if (event.target.value === "") {
      setInputText("");
    }
    const response = await converterController.getLatinToTifinaghText(
      event.target.value
    );
    const convertedText = response.data.result;
    setInputText(convertedText);
  }

  return (
    <main className={styles.converter}>
      <article className={styles.converter__latinToTifinagh}>
        <section className={styles.converter__latinToTifinagh__inputSection}>
          <label htmlFor="latin-to-tifinagh-input">Type your text here :</label>
          <input
            id="latin-to-tifinagh-input"
            type="text"
            title="latin text"
            onChange={onChangeText}
          />
        </section>
        <p className={styles.converter__latinToTifinagh__text}>{inputText}</p>
      </article>
    </main>
  );
}
