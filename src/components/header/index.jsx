import React, { useState, useRef } from "react";
import logo from "../../images/logo.svg";
import marker from "../../images/marker-48.png";
import phone from "../../images/phone-52.png";
import menuForward from "../../images/menu-forward-24.png";
import menuForPhone from "../../images/menu-for-phone-50.png";
import { CustomButton } from "../custom-button/custom-button";
import { MenuProducts } from "./menu/MenuProducts";
import { useClickOutside } from "./menu/useClickOutside";
import { Link } from "react-router-dom";
import { Menu } from "./menu/Menu";
import { MenuProductions } from "./menu/MenuProduction";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenProductions, setIsOpenProductions] = useState(false);
  const menuProductionsRef = useRef(null);
  const menuProductsRef = useRef(null);
  const menuRef = useRef(null);

  useClickOutside(menuProductsRef, () => {
    if (isOpenProducts) setTimeout(() => setIsOpenProducts(false), 100);
  });

  useClickOutside(menuProductionsRef, () => {
    if (isOpenProductions) setTimeout(() => setIsOpenProductions(false), 100);
  });

  useClickOutside(menuRef, () => {
    if (isOpenMenu) setTimeout(() => setIsOpenMenu(false), 100);
  });

  return (
    <header className="fixed left-0 right-0 top-0 bg-white shadow-2xl z-50">
      <nav className="h-[94px] border-b-2 border-gray-300 flex flex-col items-center">
        <div className="p-4 w-full xl:w-4/5 max-w-screen-custom2xl flex items-center justify-between">
          <img src={logo} alt="logo MPS" className="w-32 md:w-40" />
          <div className="grid grid-flow-col items-center gap-4">
            <div className="hidden md:grid grid-flow-col justify-center gap-2 text-base">
              <Link to="#contacts">
                <CustomButton>
                  <img src={phone} alt="phone-icon" className="w-6 m-0.5" />
                  <span>+7 (949) 605-26-47</span>
                </CustomButton>
              </Link>
              <Link to="#contacts">
                <CustomButton>
                  <img src={marker} alt="marker-icon" className="w-6 m-0.5" />
                  <span>Мариуполь</span>
                </CustomButton>
              </Link>
            </div>
            <Link to="#form">
              <button className="bg-customOrange ml-2 px-2 lg:px-6 py-4 font-medium md:text-xl rounded-md shadow-lg lg:hover:bg-customHoverOrange active:bg-customHoverOrange active:text-customHoverOrange transition-colors duration-400 ease-in-out">
                ОТПРАВИТЬ ЗАЯВКУ
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="h-[68px] flex flex-col items-center">
        <div className="w-full xl:w-4/5 max-w-screen-custom2xl">
          <div className="flex items-center justify-between md:hidden">
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="p-2 my-2 ml-4 border-2 rounded-md active:bg-gray-400"
            >
              <img src={menuForPhone} alt="menu for phone" className="w-8" />
            </button>
            <div className="grid grid-flow-col justify-center gap-1 text-base">
              <Link to="#contacts" className="py-2 my-2 mr-2 ">
                <CustomButton>
                  <img src={phone} alt="phone" className="w-6 m-0.5" />
                  <span>+7 (949) 605-26-47</span>
                </CustomButton>
              </Link>
              <Link to="#contacts" className="py-2 my-2 mr-4 ">
                <CustomButton>
                  <img src={marker} alt="marker" className="w-6 m-0.5" />
                  <span>Мариуполь</span>
                </CustomButton>
              </Link>
            </div>
          </div>

          {isOpenMenu && <Menu />}

          <div
            ref={menuRef}
            className="p-4 hidden md:grid grid-flow-col gap-10 justify-start items-center"
          >
            <div className="mr-6">
              <Link to="/#aboutCompany">
                <CustomButton>О компании</CustomButton>
              </Link>
            </div>
            <div className="grid items-center gap-4">
              <CustomButton onClick={() => setIsOpenProducts(!isOpenProducts)}>
                Продукция
                <img
                  src={menuForward}
                  alt="menu-forward"
                  className={`w-6 m-1 transition-transform transform ${
                    isOpenProducts ? "rotate-90" : ""
                  }
                  `}
                />
              </CustomButton>
            </div>
            <CustomButton
              onClick={() => setIsOpenProductions(!isOpenProductions)}
            >
              Производство
              <img
                src={menuForward}
                alt="menu-forward"
                className={`w-6 m-1 transition-transform transform ${
                  isOpenProductions ? "rotate-90" : ""
                }
                  `}
              />
            </CustomButton>
            <Link to="#contacts">
              <CustomButton>Контакты</CustomButton>
            </Link>
          </div>
        </div>

        {isOpenProducts && (
          <div
            className="max-w-screen-custom2xl  w-full xl:w-4/5 flex justify-start"
            ref={menuProductsRef}
          >
            {<MenuProducts />}
          </div>
        )}

        {isOpenProductions && (
          <div
            className="max-w-screen-custom2xl  w-full xl:w-4/5 flex justify-start"
            ref={menuProductionsRef}
          >
            {<MenuProductions />}
          </div>
        )}
      </section>
    </header>
  );
};
