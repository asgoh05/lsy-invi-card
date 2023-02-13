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
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.3054377638723!2d127.09021921504988!3d37.38260837983263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b585cbfcc79c9%3A0xded8081c9b0d780e!2z7IaM67Kg64m0!5e0!3m2!1sko!2skr!4v1676296803435!5m2!1sko!2skr"
        }
      ></embed>
      <h3 className={style.location_name}>소베뉴</h3>
      <div className={style.mapinfo} data-aos="fade-up" ata-aos-duration="3000">
        <p className={style.address}>
          경기 성남시 분당구 판교백현로 61 <br />
          (우)13539 지번 백현동 500-7
        </p>
        <img
          className={style.navermap_icon}
          onClick={() => window.open("https://naver.me/xCrPtwOy", "_blank")}
          src={navermap_icon}
          alt="naver map"
        />
        <img
          className={style.kakaomap_icon}
          onClick={() => window.open("http://kko.to/XktH7W-3uZ", "_blank")}
          src={kakaomap_icon}
          alt="kakao map"
        />
      </div>
    </div>
  );
}
