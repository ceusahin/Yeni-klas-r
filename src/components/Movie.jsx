import { useEffect } from "react";
import desire from "../sounds/freedfromdesirecut.mp3";
import airhorn from "../sounds/airhorn.mp3";

export default function Movie() {
  useEffect(() => {
    const emojis = ["🥺", "😔", "😭", "😢"];
    const emojiGrid = document.getElementById("emojiGrid");

    if (emojiGrid) {
      for (let i = 0; i < 1000; i++) {
        // 10.000 çok ağır olabilir
        const div = document.createElement("div");
        div.textContent = emojis[i % emojis.length];
        emojiGrid.appendChild(div);
      }
    }

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const loveMessage = document.getElementById("loveMessage");
    const container = document.getElementById("container");

    const freed = new Audio(desire);
    freed.loop = true;
    freed.volume = 1;

    const duduk = new Audio(airhorn);
    duduk.loop = false;
    duduk.volume = 1;

    if (noBtn && container) {
      noBtn.addEventListener("mouseover", () => {
        const x = Math.floor(Math.random() * (window.innerWidth - 100));
        const y = Math.floor(Math.random() * (window.innerHeight - 50));
        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
      });
    }

    if (yesBtn && loveMessage) {
      yesBtn.addEventListener("click", () => {
        confetti({
          particleCount: 500,
          spread: 100,
          origin: { y: 0.6 },
        });

        duduk.play();

        setTimeout(() => {
          freed.play();
        }, 2300);

        loveMessage.style.display = "block";
      });
    }
  }, []);

  return (
    <>
      <div className="emoji-bg" id="emojiGrid"></div>

      <div id="container">
        <h1>**** beni affeder misin?</h1>
        <button className="btn" id="yesBtn">
          Evet
        </button>
        <button className="btn" id="noBtn">
          Hayır
        </button>
        <div id="loveMessage">
          <h2>TEŞEKKÜR EDERİM SENİ ÇOOOK SEVİYOOOOM &lt;3 &lt;3</h2>
        </div>
      </div>
    </>
  );
}
