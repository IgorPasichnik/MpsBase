import { CustomButton } from "../../custom-button/custom-button";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <ul className="ml-4 w-[368px] border-2 border-gray-200 rounded-sm flex flex-col absolute bg-white drop-d text-customBlack">
      <div className="p-4 border-b-2 border-gray-200 flex justify-start">
        <Link to="/#about-сompany">
          <CustomButton>О компании</CustomButton>
        </Link>
      </div>
      <div className="p-4 border-b-2 border-gray-200 flex justify-start">
        <Link to="/products">
          <CustomButton>Продукция</CustomButton>
        </Link>
      </div>
      <div className="p-4 border-b-2 border-gray-200 flex justify-start">
        <Link to="/productions">
          <CustomButton>Производство</CustomButton>
        </Link>
      </div>
      <div className="p-4 flex justify-start">
        <Link to="/#contacts">
          <CustomButton>Контакты</CustomButton>
        </Link>
      </div>
    </ul>
  );
};
