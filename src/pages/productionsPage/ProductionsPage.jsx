import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "../../components/layout";
import image from "../../images/background/2.jpg";
import { useGetRestorationProductionsQuery } from "../../app/services/productions";

export const ProductionsPage = () => {
  const { data, isLoading } = useGetRestorationProductionsQuery();
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
        <div id="structures" className="h-[162px]"></div>
        <section
          className="bg-cover bg-bottom h-60 flex jusify-start xl:justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h1
            className="p-2 md:p-4 xl:w-4/5 max-w-screen-custom2xl flex items-center text-white text-[38px] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              textShadow: "4px 4px 30px #000000, -4px -4px 30px #000000",
            }}
          >
            Металлоконструкции
          </h1>
        </section>
        <section className="flex flex-col items-center border-b-4 border-gray-300">
          <div className="text-justify p-4 xl:w-4/5 max-w-screen-custom2xl grid gap-4">
            <p className="text-lg md:text-xl ">
              Одним из направлений деятельности нашей компании является заказное
              производство металлоконструкций различной сложности и назначения:
            </p>
            <ul className="text-lg text-start md:text-xl  py-6 grid gap-2">
              <li>- балки перекрытия и фермы;</li>
              <li>- колонны и опоры;</li>
              <li>- каркасы и стойки;</li>
              <li>- павильоны и навесы;</li>
              <li>- ограждающие и декоративные элементы.</li>
            </ul>
            <p className="text-lg md:text-xl ">
              Наш персонал регулярно повышает квалификацию и гарантирует
              надежность и качество на каждом этапе производства —{" "}
              <span className="text-customOrange font-semibold">
                от разработки чертежей КМД до поэлементной и комплексной сборки
                в цехе.
              </span>
            </p>
          </div>
        </section>
        <section
          id="restoration"
          className="flex flex-col items-center border-b border-gray-200 shadow-lg"
        >
          <div className="px-4 pb-[180px] w-full xl:w-4/5 max-w-screen-custom2xl flex flex-col items-start border-b">
            <h2 className="pt-[100px] font-bold text-2xl">
              МЕХАНИЧЕСКАЯ ОБРАБОТКА
            </h2>
            <table className="text-lg w-full max-w-screen-custom2xl">
              <thead>
                <tr className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left">
                  <th>Вид работ</th>
                  <th>Общая характеристика</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  !isLoading &&
                  data.map((item) => (
                    <tr
                      key={item.id}
                      className="h-[100px] border-b-[1px] border-solid border-gray-300 py-2 text-left"
                    >
                      <td className="h-[20px] text-lg w-[200px] md:w-[380px] xl:w-[500px]">
                        {item.name}
                      </td>
                      <td className="text-lg flex-grow">{item.description}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
};
