import telegram from "../../images/telegram-48.png";
import React from "react";
import { Map } from "./map/index";

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-customGray4 flex items-start justify-center text-white shadow-customUpShodow">
      <div className="w-full xl:w-4/5 max-w-screen-custom2xl flex items-center">
        <div
          id="contacts"
          className="md:w-1/2 p-4 text-gray-400 text-[20px] grid gap-6"
        >
          <h1 className="font-bold text-white text-[32px]">Контакты</h1>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-bold text-white">Отдел продаж металлопроката</p>
            <p>+7 949 605-26-47</p>
            <p>metal-center.mps@mail.ru</p>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-bold text-white">
              Отдел продаж металлоконструкций
            </p>
            <p>+7 949 605-26-48</p>
            <p>mps.metkonst@mail.ru</p>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-bold text-white">Общие вопросы</p>
            <p>marstal2022@mail.ru</p>
            <p>mps.metal-n-constructions@mail.ru</p>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-bold text-white">График работы</p>
            <p>Понедельник-пятница: 8:30 - 17:00</p>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-bold text-white">Адрес:</p>
            <p>ДНР, г. Мариуполь, улица Пржевальского, 7.</p>
          </div>
          <a
            href="https://t.me/mpsmetalcenter"
            className="mt-1 flex items-center gap-1"
          >
            <img src={telegram} alt="tg" className="w-6 h-6" />
            https://t.me/mpsmetalcenter
          </a>
        </div>
        <div id="map" className="hidden md:block w-1/2 h-[700px]">
          <Map />
        </div>
      </div>
    </footer>
  );
};
