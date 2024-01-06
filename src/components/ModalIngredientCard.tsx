import { ReactNode } from "react";

const ModalIngredientCard = ({children}:{children:ReactNode}):ReactNode =>{
    return <div className="flex items-center ">
        <p className="text-center text-2xl p-12">{children}</p>
    </div>
}

export default ModalIngredientCard;