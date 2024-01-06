import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";


const IngredientChip = ({ingredient,deleteChip}:{ingredient:string,deleteChip:(target:string)=>void}):ReactNode =>{

    return <div className="w-max h-8 m-1 p-4 rounded-4 flex items-center rounded-full bg-[#fccdbd] border-[1.5px] border-solid border-[#ed653f] z-[10]"
            onClick={()=>deleteChip(ingredient)}>
        <p className="text-[#ed653f] mr-1">{ingredient}</p>
        <IoMdClose 
          className="fill-[#ed653f] cursor-pointer"
          onClick={deleteChip}/>
    </div>

}

export default IngredientChip;