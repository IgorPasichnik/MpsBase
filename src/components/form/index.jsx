import React, { useState } from "react";
import { Link } from "react-router-dom";
import ready from "../../images/done-64.png";
import Styles from "./checkbox.module.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [inputsHighlighted, setInputsHighlighted] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const isFormValid =
    email !== "" && message !== "" && phoneNumber !== "" && checkbox !== false;

  const HandleInputChange = () => {
    setShowMessage(false);
    setInputsHighlighted(false);
    if (error) setError(false);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid && checkbox) {
      const feedbackData = { name, email, message, phoneNumber };
      try {
        const response = await fetch("http://localhost:8000/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedbackData }),
        });

        if (response.ok) {
          setDone(true);
        } else {
          setError(true);
          throw new Error("Ошибка отправки данных");
        }
      } catch (error) {
        setError(true);
      }
    } else {
      setShowMessage(true);
      setInputsHighlighted(true);
    }
  };

  return (
    <form
      id="form"
      className="py-[158px] grid items-center justify-center gap-8"
    >
      <h1 className="w-[370px] sm:w-[500px] md:w-[700px] text-center font-semibold text-2xl sm:text-3xl">
        Оставьте свои контакты и наш менеджер свяжется с Вами
      </h1>
      <div className="w-[370px] sm:w-[500px] md:w-[700px] grid justify-between gap-4">
        <div className="flex items-center justify-between">
          <label className="mb-4">ФИО</label>
          <div>
            <input
              type="name"
              maxLength={50}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[250px] sm:w-[350px] md:w-[550px] h-10 px-4 py-2 border-2 border-gray-200 rounded-sm shadow-sm focus:outline-none focus:border-customOrange"
            />
            <p className="text-xs text-gray-400">необязательное поле</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="mb-4">E-mail</label>
          <div>
            <input
              type="email"
              maxLength={50}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={HandleInputChange}
              className={`w-[250px] sm:w-[350px] md:w-[550px] h-10 px-4 py-2 border-2 border-gray-200 rounded-sm shadow-sm focus:outline-none focus:border-customOrange ${
                inputsHighlighted ? "border-red-500" : ""
              }`}
            />
            <p className="text-xs text-gray-400">например: ivanov@yandex.ru</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="mb-4">Текст заявки</label>
          <div>
            <input
              type="text"
              maxLength={1000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onClick={HandleInputChange}
              className={`w-[250px] sm:w-[350px] md:w-[550px] h-10 px-4 py-2 border-2 border-gray-200 rounded-sm shadow-sm focus:outline-none focus:border-customOrange ${
                inputsHighlighted ? "border-red-500" : ""
              }`}
            />
            <p className="text-xs text-gray-400">
              не забудьте указать название компании
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label>Телефон</label>
          <input
            type="tel"
            maxLength={20}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onClick={HandleInputChange}
            className={`w-[250px] sm:w-[350px] md:w-[550px] h-10 px-4 py-2 border-2 border-gray-200 rounded-sm shadow-sm focus:outline-none focus:border-customOrange ${
              inputsHighlighted ? "border-red-500" : ""
            }`}
          />
        </div>
        <label className="my-4 text-xs flex items-center justify-start">
          <input
            type="checkbox"
            value="checkbox"
            onChange={(e) => setCheckbox(e.target.checked)}
            onClick={HandleInputChange}
            className={Styles.realCheckbox}
          />
          <span
            className={`${Styles.customCheckbox} ${
              inputsHighlighted ? "ring-red-500 ring-2" : ""
            }`}
          ></span>
          <p className="pl-4 text-sm ">
            Подверждаю свое согласие на{" "}
            <Link to="/terms-of-use" className="underline">
              обработку персональных данных
            </Link>
            .
          </p>
        </label>

        <button
          onClick={HandleSubmit}
          className={`w-[370px] sm:w-[500px] md:w-[700px] px-4 py-4 font-medium text-xl rounded-sm shadow-lg 
               transition-colors duration-400 ease-in-out ${
                 !isFormValid
                   ? "bg-gray-300 text-gray-600 "
                   : "bg-customOrange lg:hover:bg-customHoverOrange active:bg-customHoverOrange lg:active:outline-none"
               }`}
        >
          Отправить
        </button>

        {showMessage ? (
          <div className="text-red-500 flex justify-center">
            <p>Заполните обязательные поля и примите условия соглашения.</p>
          </div>
        ) : done ? (
          <div className="flex items-center justify-center">
            <img src={ready} alt="done" className="w-6 h-6" />
            <p>Заявка успешно отправлена!</p>
          </div>
        ) : error ? (
          <div className="text-red-500 flex justify-center">
            <p>Ошибка отправки формы!</p>
          </div>
        ) : (
          <div className="h-[28px]"></div>
        )}
      </div>
    </form>
  );
};
