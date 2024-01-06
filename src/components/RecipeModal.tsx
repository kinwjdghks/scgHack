import { ReactNode, useEffect, useState } from "react";
import line from '../assets/images/dottedLine.svg'
import ModalIngredientCard from "./ModalIngredientCard";
import { FoodItem } from "../pages/Mainpage";
import FoodCard from "./FoodCard";
import { getRecipeInfo } from "../lib/functions/crud";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import ManualCard from "./ManualCard";
import { MdClose } from "react-icons/md";
const RecipeModal =({foodData,closeModal}:{foodData:FoodItem,closeModal:()=>void}):ReactNode =>{
    const [loading,setLoading] = useState<boolean>(true);
    const [ingredientList,setIngredientList] = useState<string>('');
    const [manuals,setManuals] = useState<string[]>([]);
    const initialize = async () =>{
        const data = await getRecipeInfo(foodData.index);
        setIngredientList(data?.ingredients);
        setManuals(data?.manuals);
        setLoading(false);
    }
    
    useEffect(()=>{
      initialize();
    },[])

    return <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-white flex">
        <div className="w-1/2 py-8 h-full flex flex-col items-center">
            <MdClose className="fill-[#454C53] absolute top-4 left-4 w-10 h-10 cursor-pointer"
              onClick={closeModal}/>
            <FoodCard foodData={foodData} setSelectedRecipe={()=>{}} enableHover={false}/>
            <p className="w-full p-4 pl-8 mt-16 bg-[#ED653F] text-white font-['Gmarketmedium'] text-2xl">필요한 재료들이에요!</p>

            <div className="(ingredient container) w-full flex-grow flex items-center justify-center overflow-scroll scrollbar-hide">
            {loading ? <AiOutlineLoading3Quarters className="w-12 h-12 animate-spin fill-[#fccdbd]"/> : <ModalIngredientCard>{ingredientList}</ModalIngredientCard>}
            </div>
        </div>
        <img src={line} className="absolute h-full left-1/2 "/>
        <div className="w-1/2 h-full flex flex-col p-20 items-center">
            <h1 className="pb-4 font-['Gmarketmedium'] text-[#444444] text-3xl">만드는 방법이에요!</h1>
            <h2 className="mb-8 font-['Pretendardlight'] text-[#444444] text-[1.5rem]">한 단계씩 천천히 따라해보세요</h2>
            <div className="h-[448px] relative flex flex-col overflow-scroll scrollbar-hide">
                {loading ? <AiOutlineLoading3Quarters className="w-12 h-12 mt-32 animate-spin fill-[#fccdbd]"/> : manuals.map((manual,index)=><ManualCard index={index} content={manual}/>)}
            </div>
        </div>

    </div>
}

export default RecipeModal;