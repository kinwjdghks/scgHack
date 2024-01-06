import { ReactNode } from "react";
import SearchResultCard from "./SearchResultCard";

const SearchResultDropDown = ({resultList,selectIngredient}:{resultList:string[],selectIngredient:(target:string)=>void}):ReactNode =>{


    return <div className="absolute top-[240px] left-[165px] w-[320px] h-full max-h-[276px] z-50 bg-white overflow-scroll">
        {resultList.map((ingredient)=><SearchResultCard ingredient={ingredient} selectIngredient={selectIngredient}/>)}
    </div>
}

export default SearchResultDropDown;