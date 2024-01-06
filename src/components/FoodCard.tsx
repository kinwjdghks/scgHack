import { ReactNode } from "react";
import NutritionAmount from "./NutritionAmount";
import boiling_filled from '../assets/images/boiling_filled.svg';
import frying_filled from '../assets/images/frying_filled.svg';
import stirfry_filled from '../assets/images/stirfry_filled.svg';
import steaming_filled from '../assets/images/steaming_filled.svg';
import roasting_filled from '../assets/images/roasting_filled.svg';
import etc_filled from '../assets/images/etc_filled.svg';
import { wayToCook } from "../templates/types";

type foodCardProps = {
    foodName: string,
    foodImg:string,
    wayToCook: wayToCook,
    calories:number,
    carbo:number,
    protein:number,
    fat:number,
}

const FoodCard = ({foodName,foodImg,wayToCook,calories,carbo,protein,fat}:foodCardProps):ReactNode=>{

    const wayToCookImg = wayToCook == 'BOILING' ? boiling_filled
      : wayToCook == 'FRYING' ? frying_filled
      : wayToCook == 'ROASTING' ? roasting_filled
      : wayToCook == 'STEAMING' ? steaming_filled
      : wayToCook == 'STIRFRY' ? stirfry_filled
      : etc_filled;

      const sum = carbo + protein + fat;
      const carboPercentage = (carbo / sum) * 100;
      const proteinPercentage = (protein / sum) * 100;
      const fatPercentage = (fat / sum) * 100;


    return <div className="(container) w-[466px] h-[205px] mb-5 rounded-[4px] flex bg-white border-[#fff7ef] border-2 hover:border-[#ED653F] border-solid box-content">
        <img className="(image) w-[177px] h-full"
          src={foodImg}
          alt='foodImg'/>
        <div className="(info) w-[289px] p-4 py-[22px] h-full flex flex-col items-start font-['Pretendard']">
          <img className="(waytocook) h-[22px] mb-4"
            src={wayToCookImg}/>
          <h1 className="(food name) w-[180px] text-[18px] pb-3 leading-5 break-normal">{foodName}</h1>
          <div className="(calories) text-gray-500 pb-4">{calories}kcal</div>
          <div className="(percentage bar) w-full h-[6px] flex">
              <div style={{width: `${carboPercentage}%`}} className="bg-[#ed653f] h-full"></div>
              <div style={{width: `${proteinPercentage}%`}} className="bg-[#6ca2f2] h-full"></div>
              <div style={{width: `${fatPercentage}%`}} className="bg-[#f2bd6c] h-full"></div>
          </div>
          <NutritionAmount carbo={carbo} protein={protein} fat={fat}/>
        </div>
    </div>
}
export default FoodCard;