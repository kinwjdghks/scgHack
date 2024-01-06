import { Dispatch, ReactNode, SetStateAction } from "react";
import arrowBtn from "../assets/images/arrowBtn.svg";
import soup from "../assets/images/국_찌개.svg";
import etc from "../assets/images/기타.svg";
import side from "../assets/images/반찬.svg";
import rice from "../assets/images/밥.svg";
import dish from "../assets/images/한그릇.svg";
import dessert from "../assets/images/후식.svg";
import soup_clicked from "../assets/images/국_찌개_clicked.svg";
import etc_clicked from "../assets/images/기타_clicked.svg";
import side_clicked from "../assets/images/반찬_clicked.svg";
import rice_clicked from "../assets/images/밥_clicked.svg";
import dish_clicked from "../assets/images/한그릇_clicked.svg";
import dessert_clicked from "../assets/images/후식_clicked.svg";
import boiling from '../assets/images/Boiling_default.svg';
import frying from '../assets/images/frying_default.svg';
import stirfry from '../assets/images/stirfry_default.svg';
import steaming from '../assets/images/steaming_default.svg';
import roasting from '../assets/images/roasting_default.svg';
import etc_cook from '../assets/images/etc_default.svg';
import boiling_clicked from '../assets/images/Boiling_clicked.svg';
import frying_clicked from '../assets/images/frying_clicked.svg';
import stirfry_clicked from '../assets/images/stirfry_clicked.svg';
import steaming_clicked from '../assets/images/steaming_clicked.svg';
import roasting_clicked from '../assets/images/roasting_clicked.svg';
import etc_cook_clicked from '../assets/images/etc_clicked.svg';

type MoreInfoPageProps={
    open:boolean,
    closeInfoPage:()=>void,
    userFoodTypeInput:{
        RICE:boolean,
        SOUP:boolean,
        DISH:boolean,
        DESSERT:boolean,
        SIDE:boolean,
        ETC:boolean,
      }
    setUserFoodTypeInput:Dispatch<SetStateAction<{
        RICE:boolean,
        SOUP:boolean,
        DISH:boolean,
        DESSERT:boolean,
        SIDE:boolean,
        ETC:boolean,
      }>>,
    userCookingMethodInput:{
        BOILING:boolean,
        STIRFRY:boolean,
        FRYING:boolean,
        STEAMING:boolean,
        ROASTING:boolean,
        ETC:boolean},
    setUserCookingMethodInput:Dispatch<SetStateAction<{
        BOILING:boolean,
        STIRFRY:boolean,
        FRYING:boolean,
        STEAMING:boolean,
        ROASTING:boolean,
        ETC:boolean}>>,
    setUserCaloriesInput:Dispatch<SetStateAction<{
        min:number|null,
        max:number|null,}>>
}

const MoreInfoPage = ({open,closeInfoPage,userFoodTypeInput,setUserFoodTypeInput,userCookingMethodInput,setUserCookingMethodInput,setUserCaloriesInput}:MoreInfoPageProps):ReactNode=>{



    return <div className={`(moreInfoPage) absolute top-0 ${open ? 'left-0':'left-1/2'} w-1/2 h-full px-[164px] pt-[78px] bg-[#ED653F] text-white transition-all duration-700 z-[10]`}>
        <h1 className="text-3xl mb-4 font-['Gmarketmedium']">더 많은 정보를 입력해주세요</h1>
        <h2 className="mb-12 leading-6 font-[400]">이런 정보들을 알면 더 딱 맞는 레시피를 추천해드릴 수 있어요!</h2>

        <div className="(which food) mb-16 font-['Pretendard']">
        <h2 className="text-[#FABEAC]">음식의 종류를 선택해주세요</h2>
        <div className="w-full my-4 flex justify-between">
            <img className="cursor-pointer" src={userFoodTypeInput.RICE ? rice_clicked : rice} alt='rice'
                onClick={() => setUserFoodTypeInput(prev => ({...prev, RICE: !prev.RICE}))}/>
            <img className="cursor-pointer" src={userFoodTypeInput.SOUP ? soup_clicked : soup} alt='soup'
                onClick={() => setUserFoodTypeInput(prev => ({...prev, SOUP: !prev.SOUP}))}/>
            <img className="cursor-pointer" src={userFoodTypeInput.DISH ? dish_clicked : dish} alt='dish'
                onClick={() => setUserFoodTypeInput(prev => ({...prev, DISH: !prev.DISH}))}/>
            <img className="cursor-pointer" src={userFoodTypeInput.DESSERT ? dessert_clicked : dessert} alt='dessert'
                onClick={() => setUserFoodTypeInput(prev => ({...prev, DESSERT: !prev.DESSERT}))}/>
            <img className="cursor-pointer" src={userFoodTypeInput.SIDE ? side_clicked : side} alt='side'
                onClick={() => setUserFoodTypeInput(prev => ({...prev, SIDE: !prev.SIDE}))}/>
            <img className="cursor-pointer" src={userFoodTypeInput.ETC ? etc_clicked : etc} alt='etc'
                onClick={() => setUserFoodTypeInput(prev => ({...prev, ETC: !prev.ETC}))}/>
        </div>
    </div>


        <div className="(which method) mb-16 font-['Pretendard']">
        <h2 className="text-[#FABEAC]">요리 방법을 선택해주세요</h2>
        <div className="w-5/6 my-4 flex flex-wrap">
            <img className="m-[3px] cursor-pointer" 
            src={userCookingMethodInput.BOILING ? boiling_clicked : boiling} 
            alt='boiling'
            onClick={() => setUserCookingMethodInput(prev => ({...prev, BOILING: !prev.BOILING}))}/>
            <img className="m-[3px] cursor-pointer" 
            src={userCookingMethodInput.STIRFRY ? stirfry_clicked : stirfry} 
            alt='stirfry'
            onClick={() => setUserCookingMethodInput(prev => ({...prev, STIRFRY: !prev.STIRFRY}))}/>
            <img className="m-[3px] cursor-pointer" 
            src={userCookingMethodInput.STEAMING ? steaming_clicked : steaming} 
            alt='steaming'
            onClick={() => setUserCookingMethodInput(prev => ({...prev, STEAMING: !prev.STEAMING}))}/>
            <img className="m-[3px] cursor-pointer" 
            src={userCookingMethodInput.ROASTING ? roasting_clicked : roasting} 
            alt='roasting'
            onClick={() => setUserCookingMethodInput(prev => ({...prev, ROASTING: !prev.ROASTING}))}/>
            <img className="m-[3px] cursor-pointer" 
            src={userCookingMethodInput.FRYING ? frying_clicked : frying} 
            alt='frying'
            onClick={() => setUserCookingMethodInput(prev => ({...prev, FRYING: !prev.FRYING}))}/>
            <img className="m-[3px] cursor-pointer" 
            src={userCookingMethodInput.ETC ? etc_cook_clicked : etc_cook} 
            alt='etc'
            onClick={() => setUserCookingMethodInput(prev => ({...prev, ETC: !prev.ETC}))}/>
        </div>
        </div>


        <div className="(which method) text-[#FABEAC] mb-16 font-['Pretendardmedium']">
          <h2 className=" mb-4">혹시 식단 관리중이신가요? 열량 설정도 가능하답니다.</h2>
          <div className="w-2/3 my-8 flex flex-wrap justify-between gap-2">
            <fieldset className="w-full items-center flex gap-8">
              <label className="w-max font-['Pretendardlight']">최소열량</label>
              <input className="w-[250px] h-[40px] p-2 text-black rounded-md bg-[#FFF7EF] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                type="number"
                onChange={(e)=>setUserCaloriesInput((prev)=>({min:e.target.value ? +e.target.value : null, max:prev.max}))}/>
              <p className="text-[#ED653F] -translate-x-20">kcal</p>
            </fieldset >
            <fieldset className="w-full items-center flex gap-8">
              <label className="w-max font-['Pretendardlight']">최대열량</label>
              <input className="w-[250px] h-[40px] p-2 text-black rounded-md bg-[#FFF7EF] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                type="number"
                onChange={(e)=>setUserCaloriesInput((prev)=>({max:e.target.value ? +e.target.value : null, min:prev.min}))}/>
              <p className="text-[#ED653F] -translate-x-20">kcal</p>
            </fieldset>
          </div>
        </div>


        <img className="absolute w-10 h-10 top-2/3 left-[10%] cursor-pointer rotate-180" 
          src={arrowBtn} 
          alt='button'
          onClick={closeInfoPage}/>
    </div>
}

export default MoreInfoPage;