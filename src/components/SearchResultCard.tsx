import { ReactNode } from "react";

const SearchResultCard = ({ingredient,selectIngredient}:{ingredient:string,selectIngredient:(target:string)=>void}):ReactNode =>{


    return <div className=" w-[320px] h-[54px] bg-white text-black cursor-pointer" onClick={()=>selectIngredient(ingredient)}>
       <p className="p-4">{ingredient}</p>
    </div>
}

export default SearchResultCard;