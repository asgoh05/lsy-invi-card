import React from "react";
import style from "./MapPage.module.css";
import navermap_icon from "../../images/navermap_icon.png";
import kakaomap_icon from "../../images/kakaomap_icon.png";

export default function MapPage() {
  return (
    <div className={style.container}>
      <h1 data-aos="fade-up" ata-aos-duration="3000" className={style.title}>
        | 오시는 길 |
      </h1>
      <embed
        className={style.map}
        data-aos="fade-up"
        ata-aos-duration="3000"
        loading={"lazy"}
        referrerpolicy={"no-referrer-when-downgrade"}
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.8479913322544!2d127.1079131150648!3d37.39342697983062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b59134e82d649%3A0xada88a791d61b3f0!2sGRAVITY%20Seoul%20Pangyo%2C%20Autograph%20Collection!5e0!3m2!1sko!2skr!4v1678106845648!5m2!1sko!2skr"
        }
      ></embed>
      <h3 className={style.location_name}>
        그래비티 서울 판교 오토그래프 컬렉션 호텔 <br />
        지하 1층 연회장 (루나+솔)
      </h3>
      <div className={style.mapinfo}>
        <p className={style.address}>경기 성남시 분당구 판교역로146번길 2</p>
        <img
          className={style.navermap_icon}
          onClick={() => window.open("https://naver.me/xL1EWfQb", "_blank")}
          src={navermap_icon}
          alt="naver map"
        />
        <img
          className={style.kakaomap_icon}
          onClick={() => window.open("http://kko.to/sbY5sMLmB4", "_blank")}
          src={kakaomap_icon}
          alt="kakao map"
        />
      </div>
    </div>
  );
}
