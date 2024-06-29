import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../../components/layout";
import forward from "../../images/forward-64.png";
import image from "../../images/background/1.jpg";

export const AboutCompanyPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const headerHeight = 100; // Высота шапки
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const offset = element.offsetTop - headerHeight; // Учесть высоту шапки при прокрутке
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout>
      <main className="w-full max-w-full">
        <div id="aboutCompany" className="h-[162px]"></div>
        <section
          className="bg-cover bg-center h-60 flex jusify-start xl:justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h1
            className="p-2 md:p-4 xl:w-4/5 max-w-screen-custom2xl flex items-center text-white text-[38px] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              textShadow: "4px 4px 30px #000000, -4px -4px 30px #000000",
            }}
          >
            О компании
          </h1>
        </section>
        <section className="flex flex-col items-center border-b border-gray-200 shadow-lg">
          <div className="text-justify p-4 xl:w-4/5 max-w-screen-custom2xl grid gap-4">
            <h2 className="py-2 font-semibold text-xl md:text-2xl">
              Предприятие ООО «МПС» — опытный участник рынка черного
              металлопроката.
            </h2>
            <p className="text-lg md:text-xl">
              Наш металлоцентр предлагает широкий ассортимент листового,
              сортового и трубного металлопроката различных толщин и марок
              стали.
            </p>
            <p className="text-lg md:text-xl">
              В перечень сервисных услуг входят: порезка в размер, гибка,
              сверлильные, токарные, вальцовочные, фрезерные и др. работы.
              Помимо механической обработки, наша компания занимается
              производством металлоконструкций под заказ.
            </p>
          </div>
          <figure className="py-16 px-4 md:px-16 xl:w-4/5 max-w-screen-custom2xl flex justify-center items-center">
            <div className="flex flex-wrap justify-center lg:grid grid-cols-2 gap-16">
              <div className="w-[350px] h-[150px] flex items-start">
                <img
                  src={forward}
                  alt="forward"
                  className="w-[64px] h-[64px]"
                />
                <div className="grid justify-center gap-2">
                  <h2 className="pt-4 text-customOrange text-[48px]">10 лет</h2>

                  <p className="ml-1 text-gray-500 text-2xl font-normal ">
                    на рынке
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[150px] flex items-start">
                <img
                  src={forward}
                  alt="forward"
                  className="w-[64px] h-[64px]"
                />
                <div className="grid justify-center gap-2">
                  <h2 className="pt-4 text-customOrange text-[48px]">
                    2000 м&sup2;
                  </h2>

                  <p className="text-gray-500 text-2xl font-normal ">
                    производственных площадей
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[150px] flex items-start">
                <img
                  src={forward}
                  alt="forward"
                  className="w-[64px] h-[64px]"
                />
                <div className="grid justify-center gap-2">
                  <h2 className="pt-4 text-customOrange text-[48px]">1000 т</h2>

                  <p className="ml-1 text-gray-500 text-2xl font-normal">
                    продукции на складе
                  </p>
                </div>
              </div>
              <div className="w-[350px] h-[150px] flex items-start">
                <img
                  src={forward}
                  alt="forward"
                  className="w-[64px] h-[64px]"
                />
                <div className="grid justify-center gap-2">
                  <h2 className="pt-4 text-customOrange text-[48px]">25</h2>

                  <p className="text-gray-500 text-2xl font-normal ">
                    сотрудников в штате
                  </p>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </main>
    </Layout>
  );
};
