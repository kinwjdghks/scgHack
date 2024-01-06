import { ReactNode } from "react";
import FoodCard from "./FoodCard";
import IngredientChip from "./IngredientChip";
import dummyfoodImg from '../assets/images/dummyfoodImg.png'

const InfoSide = (): ReactNode => {
  return (
    <div className="(infoside) w-1/2 h-screen overflow-scroll p-24 bg-[#FFF7EF] z-[50]">
      {/* <FoodCard foodName={'브로콜리 컬리플라위 샐러드와 두유 요거트 소스'} calories={450} carbo={180} protein={180} fat={120}/> */}
      <div className="flex items-center gap-8 mb-8">
        <h1 className="text-gray-800 font-['Gmarketmedium'] text-2xl">
          레시피 추천
        </h1>
        <p className="text-gray-600">
          냉장고에 있는 재료를 바탕으로 메뉴를 추천해드립니다
        </p>
      </div>

      <div className="(my ingredients) w-full font-['Pretendardmedium']">
        <h1 className="m-2">나의 재료</h1>
        <div className="(ingredients list) w-full mb-12 flex flex-wrap ">
          <IngredientChip ingredient="재료" deleteChip={() => {}} />
          <IngredientChip ingredient="이름이긴재료" deleteChip={() => {}} />
          <IngredientChip
            ingredient="이름이조금더긴재료"
            deleteChip={() => {}}
          />
          <IngredientChip ingredient="다른재료" deleteChip={() => {}} />
          <IngredientChip ingredient="또다른재료" deleteChip={() => {}} />
        </div>
      </div>

      <div className="(foodCards container) w-full h-max flex flex-col items-center">
        <FoodCard foodName="브로콜리 컬리플라워 샐러드와 두유 요거트 소스" foodImg={dummyfoodImg} wayToCook="BOILING" calories={300} carbo={200} protein={120} fat={80}/>
        <FoodCard foodName="브로콜리 컬리플라워 샐러드와 두유 요거트 소스" foodImg={dummyfoodImg} wayToCook="BOILING" calories={300} carbo={200} protein={120} fat={80}/>
        <FoodCard foodName="브로콜리 컬리플라워 샐러드와 두유 요거트 소스" foodImg={dummyfoodImg} wayToCook="BOILING" calories={300} carbo={200} protein={120} fat={80}/>
        <FoodCard foodName="브로콜리 컬리플라워 샐러드와 두유 요거트 소스" foodImg={dummyfoodImg} wayToCook="BOILING" calories={300} carbo={200} protein={120} fat={80}/>
      
      </div>
    </div>
  );
};

export default InfoSide;
