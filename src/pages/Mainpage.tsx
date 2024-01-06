import { ReactNode, useState } from "react";
import RecipeModal from "../components/RecipeModal";
import Modal from "../components/Modal";
import InfoSide from "../components/InfoSide";
import FridgePage from "./FridgePage";
import MoreInfoPage from "./MoreInfoPage";


const MainPage = (): ReactNode => {
  const [recipeModalopen, setRecipeModalOpen] = useState<boolean>(false);
  const [infoPageOpen,setInfoPageOpen] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen flex bg-white">
      <FridgePage openInfoPage={()=>setInfoPageOpen(true)}/>
      <MoreInfoPage open={infoPageOpen} closeInfoPage={()=>setInfoPageOpen(false)}/>
      <InfoSide />
      {recipeModalopen &&
        <Modal>
          <RecipeModal />
        </Modal>
      }
      
    </div>
  );
};

export default MainPage;
