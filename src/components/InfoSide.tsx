import { Dispatch, ReactNode, SetStateAction } from "react";
import FoodCard from "./FoodCard";
import IngredientChip from "./IngredientChip";
import { FoodItem } from "../pages/Mainpage";
type InfoSide={
    userIngredientList:string[];
    searchedRecipeList:FoodItem[];
    setSelectedRecipe:Dispatch<SetStateAction<FoodItem|null>>;
    deleteIngredient:(target:string)=>void
}
const InfoSide = ({userIngredientList,searchedRecipeList,setSelectedRecipe,deleteIngredient}:InfoSide): ReactNode => {
    // console.log(searchedRecipeList);
  return (
    <div className="(infoside) w-1/2 h-screen overflow-scroll p-24 pt-[78px] bg-[#FFF7EF] z-[50]">
      {/* <FoodCard foodName={'브로콜리 컬리플라위 샐러드와 두유 요거트 소스'} calories={450} carbo={180} protein={180} fat={120}/> */}
      <div className="flex items-center gap-8 mb-8">
        <h1 className="text-[#444444] font-['Gmarketmedium'] text-2xl">
          레시피 추천
        </h1>
        <p className="text-gray-600">
          냉장고에 있는 재료를 바탕으로 메뉴를 추천해드립니다
        </p>
      </div>

      <div className="(my ingredients) w-full font-['Pretendardmedium']">
        <h1 className="m-2 ml-0 text-[#666666]">나의 재료</h1>
        <div className="(ingredients list) w-full h-[90px] mb-12 flex flex-wrap relative bg-[#FFE8D1]">
            <p className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 font-['Pretendardlight'] text-[#666666]">{userIngredientList.length!=0 ? '' : '냉장고에 재료를 추가해주세요!'}</p>
        {userIngredientList.map((ingredient)=>
            <IngredientChip ingredient={ingredient} deleteChip={deleteIngredient}/>)}
        </div>
      </div>

      <div className="(foodCards container) w-full h-max flex flex-col items-center">
          {Array.isArray(searchedRecipeList) ? (
        searchedRecipeList.map((food) => (
          <FoodCard foodData={food} setSelectedRecipe={setSelectedRecipe} enableHover={true}/>
        ))
      ) : (
        <p>No recipes found.</p>
  )}
      </div>
    </div>
  );
};

export default InfoSide;
