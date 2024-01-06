import { ReactNode, useRef } from "react";
import arrowBtn from "../assets/images/arrowBtn.svg";

import fridge from "../assets/images/Fridge.svg";
import IngredientChip from "../components/IngredientChip";
type FridgePageProps = {
  openInfoPage: () => void;
  userIngredientList: string[];
  onSearchIngredient:(input:string)=>void;
  selectIngredient:(target:string)=>void;
  deleteIngredient:(target:string)=>void;

};
const FridgePage = ({ openInfoPage,userIngredientList,onSearchIngredient,deleteIngredient }: FridgePageProps): ReactNode => {
    const ingredientSearchRef = useRef<HTMLInputElement>(null);
    const onIngredientSearch = (e:React.MouseEvent) =>{
      e.preventDefault();
      if(!ingredientSearchRef.current || ingredientSearchRef.current.value.trim() == '') return;
      const userInput = ingredientSearchRef.current.value;
      onSearchIngredient(userInput);
      ingredientSearchRef.current.value='';
    }
  
    return (
    <div className="(fridgepage) w-1/2 h-full px-[164px] pt-[78px] bg-[#ED653F] text-white relative">
      <h1 className="text-3xl mb-4 font-['Gmarketmedium']">
        당신의 냉장고를 열어주세요
      </h1>
      <h2 className="leading-6 font-[400] mb-4">
        냉장고에 있는 재료를 입력해주세요.
        <br />
        아래의 냉장고가 채워진답니다.
      </h2>

      <div className="flex">
        <input className="rounded-md w-[370px] p-2 mr-4 text-black outline-none" 
          type="text"
          ref={ingredientSearchRef}/>
        <button className="w-[78px] h-[43px] rounded-md bg-[#ffbe5e] text-black"
          onClick={(e)=>onIngredientSearch(e)}>검색</button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[545px] flex justify-center items-center bg-white/20">
        <img className="w-[298px] h-[470px]" src={fridge} alt="fridge" />
        <div className="absolute top-[60px] w-[270px] h-min max-h-[310px] mt-[128px] flex flex-wrap">
          {userIngredientList.map((ingredient)=>
            <IngredientChip ingredient={ingredient} deleteChip={deleteIngredient}/>)}
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
