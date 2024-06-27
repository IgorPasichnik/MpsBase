import { CustomButton } from "../../custom-button/custom-button";
import { Link } from "react-router-dom";

export const MenuProductions = () => {
  return (
    <ul className="ml-[300px] mt-[4px] w-54 border-2 border-gray-200 rounded-sm flex flex-col  absolute bg-white drop-d ">
      <div className="p-4 border-b-2 border-gray-200 flex justify-start">
        <Link to="/productions#structures">
          <CustomButton>Металлоконструкции</CustomButton>
        </Link>
      </div>
      <div className="p-4 flex justify-start">
        <Link to="/productions#restoration">
          <CustomButton>Механическая обработка</CustomButton>
        </Link>
      </div>
    </ul>
  );
};