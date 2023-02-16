import React from "react";
import style from "./MessagePage.module.css";

export default function MessagePage() {
  return (
    <div className={style.message_page}>
      <div
        className={style.messagebox}
        data-aos="fade-up"
        ata-aos-duration="3000"
      >
        <p className={style.message}>
          세상에서 가장 큰 선물로 <br />
          저희에게 온 시윤이가 건강하게 자라서 <br />
          첫돌을 맞이하게 되었습니다. <br />
          더욱 건강하고 예쁘게 자랄 수 있도록 <br />
          함께 축하해 주세요 ❤︎
        </p>
      </div>
    </div>
  );
}
