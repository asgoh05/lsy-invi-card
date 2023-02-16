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
        <div
          className={style.family}
          data-aos="fade-up"
          ata-aos-duration="3000"
        >
          <h2 className={style.name} data-aos="fade-up" ata-aos-duration="3000">
            이 시 윤
          </h2>
          <div className={style.parents}>
            <div className={style.parents_name}>
              <span className={style.role}>아빠</span>이현승
            </div>
            <div className={style.dot}>❤︎</div>
            <div className={style.parents_name}>
              <span className={style.role}>엄마</span>원 희
            </div>
          </div>
        </div>
        <button
          className={style.button}
          onClick={openForm}
          data-aos="fade-up"
          ata-aos-duration="3000"
        >
          눌러서 참석 여부 알리기
        </button>
        <p className={style.message} data-aos="fade-up" ata-aos-duration="3000">
          조금 번거로우시더라도
          <br /> 버튼을 눌러서 참석 여부를 꼭 알려주세요.
        </p>
      </div>
    </div>
  );
}

function openForm() {
  window.open("https://forms.gle/hjcfcKbhvFwst5EV9", "_blank");
}
