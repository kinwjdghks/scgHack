import { Dispatch, ReactNode, SetStateAction } from "react";
import NutritionAmount from "./NutritionAmount";
import boiling_card from '../assets/images/boiling_card.svg';
import frying_card from '../assets/images/frying_card.svg';
import stirfry_card from '../assets/images/stirfry_card.svg';
import steaming_card from '../assets/images/steaming_card.svg';
import roasting_card from '../assets/images/roasting_card.svg';
import etc_card from '../assets/images/etc_card.svg';
import { FoodItem } from "../pages/Mainpage";

export type foodCardProps = {
    foodData:FoodItem;
    setSelectedRecipe:Dispatch<SetStateAction<FoodItem|null>>;
    enableHover:boolean
}

const FoodCard = ({foodData,setSelectedRecipe,enableHover}:foodCardProps):ReactNode=>{

    const wayToCookImg = foodData.wayToCook == '끓이기' ? boiling_card
      : foodData.wayToCook == '튀기기' ? frying_card
      : foodData.wayToCook == '굽기' ? roasting_card
      : foodData.wayToCook == '찌기' ? steaming_card
      : foodData.wayToCook == '볶기' ? stirfry_card
      : etc_card;

      const sum = foodData.nutritionDTO.carbon + foodData.nutritionDTO.protein + foodData.nutritionDTO.fat;
      const carboPercentage = ( foodData.nutritionDTO.carbon / sum) * 100;
      const proteinPercentage = ( foodData.nutritionDTO.protein / sum) * 100;
      const fatPercentage = ( foodData.nutritionDTO.fat / sum) * 100;


    return <div className={`(container) w-[466px] h-[205px] mb-5 rounded-[4px] flex bg-white border-[#fff7ef] border-2 ${enableHover ? 'hover:border-[#ED653F]' : 'hover:border-[#fff7ef]'} border-solid box-content`}
            onClick={()=>{setSelectedRecipe(foodData)}}>
        <img className="(image) w-[177px] h-full object-cover"
          src={foodData.imgUrl}
          alt='foodImg'
          />
        <div className="(info) w-[289px] p-4 py-[22px] h-full flex flex-col items-start font-['Pretendard']">
          <img className="(waytocook) h-[22px] mb-4"
            src={wayToCookImg}/>
          <h1 className="(food name) w-[180px] text-[18px] pb-3 leading-5 break-normal">{foodData.foodName}</h1>
          <div className="(calories) text-gray-500 pb-4">{foodData.nutritionDTO.calorie}kcal</div>
          <div className="(percentage bar) w-full h-[6px] flex">
              <div style={{width: `${carboPercentage}%`}} className="bg-[#ed653f] h-full"></div>
              <div style={{width: `${proteinPercentage}%`}} className="bg-[#6ca2f2] h-full"></div>
              <div style={{width: `${fatPercentage}%`}} className="bg-[#f2bd6c] h-full"></div>
          </div>
          <NutritionAmount carbo={foodData.nutritionDTO.carbon} protein={foodData.nutritionDTO.protein} fat={foodData.nutritionDTO.fat}/>
        </div>
    </div>
}
export default FoodCard;