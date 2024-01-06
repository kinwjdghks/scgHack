import { ReactNode } from "react";

const NutritionAmount = ({
  carbo,
  protein,
  fat,
}: {
  carbo: number;
  protein: number;
  fat: number;
}): ReactNode => {
  return (
    <div className="(nutrition amount) w-full flex mt-auto content-between">
      <div className="w-1/3 flex items-center">
        <h3 className="w-min p-[6px] py-1 bg-[#ed653f] text-white rounded-md">탄</h3>
        <div className="mx-2 text-gray-500">{carbo}g</div>
      </div >
      <div className="w-1/3 flex items-center">
        <h3 className="w-min p-[6px] py-1 bg-[#6ca2f2] text-white rounded-md">단</h3>
        <div className="mx-2 text-gray-500">{protein}g</div>
      </div>
      <div className="w-1/3 flex items-center">
        <h3 className="w-min p-[6px] py-1 bg-[#f2bd6c] text-white rounded-md">지</h3>
        <div className="mx-2 text-gray-500">{fat}g</div>
      </div>
    </div>
  );
};

export default NutritionAmount;
