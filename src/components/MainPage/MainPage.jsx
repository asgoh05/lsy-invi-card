import React from "react";
import style from "./MainPage.module.css";
import mainImage from "../../images/lsy_main_image.png";
import { BiMap } from "react-icons/bi";

export default function MainPage() {
  return (
    <div className={style.main_page}>
      <h1 className={style.header} data-aos="fade-up" ata-aos-duration="3000">
        <span className={style.name_highlight}>시윤</span>이의 <br />
        돌잔치에 초대합니다
      </h1>
      <div
        className={style.image_frame}
        data-aos="fade-up"
        ata-aos-duration="3000"
      >
        <img
          className={style.main_image}
          src={mainImage}
          alt="file not found"
        />
      </div>
      <div className={style.info} data-aos="fade-up" ata-aos-duration="3000">
        <h2 className={style.datetime}>2023.03.18 토요일 오후 12:00</h2>
        <h1 className={style.location}>
          그래비티 서울 판교 <br />
          오토그래프 컬렉션 1F 연회장
        </h1>
        <button className={style.mapbutton} onClick={openMap}>
          지도 열기
          <BiMap className={style.icon} />
        </button>
      </div>
    </div>
  );
}

function openMap() {
  window.open("https://naver.me/xL1EWfQb", "_blank");
}
