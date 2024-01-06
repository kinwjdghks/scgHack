import { ReactNode } from "react";
import arrowBtn from "../assets/images/arrowBtn.svg";

import fridge from "../assets/images/Fridge.svg";
import IngredientChip from "../components/IngredientChip";
type FridgePageProps = {
  openInfoPage: () => void;
};
const FridgePage = ({ openInfoPage }: FridgePageProps): ReactNode => {
  return (
    <div className="(fridgepage) w-1/2 h-full p-24 bg-[#ED653F] text-white relative">
      <h1 className="text-3xl mb-10 font-['Gmarketmedium']">
        당신의 냉장고를 열어주세요
      </h1>
      <h2 className="leading-6 font-[400]">
        냉장고에 있는 재료를 입력해주세요.
        <br />
        아래의 냉장고가 채워진답니다.
      </h2>

      <div className="absolute bottom-0 left-0 w-full h-[545px] flex justify-center items-center bg-white/20">
        <img className="w-[298px] h-[470px]" src={fridge} alt="fridge" />
        <div className="absolute w-[270px] h-[310px] mt-[128px] flex flex-wrap ">
          <IngredientChip ingredient="재료" deleteChip={()=>{}}/>
          <IngredientChip ingredient="이름이긴재료" deleteChip={()=>{}}/>
          <IngredientChip ingredient="이름이조금더긴재료" deleteChip={()=>{}}/>
          <IngredientChip ingredient="다른재료" deleteChip={()=>{}}/>
          <IngredientChip ingredient="또다른재료" deleteChip={()=>{}}/>
        </div>
      </div>

      <img
        className="absolute w-10 h-10 top-2/3 left-[90%] cursor-pointer"
        src={arrowBtn}
        alt="button"
        onClick={openInfoPage}
      />

    </div>
  );
};

export default FridgePage;
