import { ReactNode, useState } from "react";
import RecipeModal from "../components/RecipeModal";
import Modal from "../components/Modal";
import FridgeSide from "../components/FridgeSide";
import InfoSide from "../components/InfoSide";

const MainPage = (): ReactNode => {
  const [recipeModalopen, setRecipeModalOpen] = useState<boolean>(false);

  return (
    <div className="w-screen min-h-[100vh] bg-white">
      <FridgeSide />
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
