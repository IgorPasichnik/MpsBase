import { Footer } from "../footer";
import { Header } from "../header";

export const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-full text-customBlack text-lg flex flex-col items-center justify-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
