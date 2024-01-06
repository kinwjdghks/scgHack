import { ReactNode } from "react";
import arrowBtn from "../assets/images/arrowBtn.svg";
import fridge from "../assets/images/Fridge.svg";
type MoreInfoPageProps={
    open:boolean,
    closeInfoPage:()=>void,
}

const MoreInfoPage = ({open,closeInfoPage}:MoreInfoPageProps):ReactNode=>{



    return <div className={`(moreInfoPage) absolute top-0 ${open ? 'left-0':'left-1/2'} w-1/2 h-full p-24 bg-[#ED653F] text-white transition-all duration-700`}>
        <h1 className="text-3xl mb-10 font-['Gmarketmedium']">더 많은 정보를 입력해주세요</h1>
        <h2 className="leading-6 font-[400]">이런 정보들을 알면 더 딱 맞는 레시피를 추천해드릴 수 있어요!</h2>
        <img className="absolute w-10 h-10 top-2/3 left-[10%] cursor-pointer rotate-180" 
          src={arrowBtn} 
          alt='button'
          onClick={closeInfoPage}/>
    </div>
}

export default MoreInfoPage;