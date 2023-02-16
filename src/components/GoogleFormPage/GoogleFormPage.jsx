import React from "react";
import style from "./GoogleFormPage.module.css";

export default function GoogleFormPage() {
  return (
    <div className={style.page}>
      <div
        className={style.messagebox}
        data-aos="fade-up"
        ata-aos-duration="3000"
      >
        <p className={style.message} data-aos="fade-up" ata-aos-duration="3000">
          조금 번거로우시더라도 아래 버튼을 눌러서 참석 여부를 꼭 알려주세요.
        </p>
        <button className={style.button} onClick={openForm}>
          참석 여부
        </button>
      </div>
    </div>
  );
}

function openForm() {
  window.open("https://forms.gle/hjcfcKbhvFwst5EV9", "_blank");
}
