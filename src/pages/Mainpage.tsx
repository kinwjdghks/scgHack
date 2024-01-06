import { ReactNode, useEffect, useState } from "react";
import RecipeModal from "../components/RecipeModal";
import Modal from "../components/Modal";
import InfoSide from "../components/InfoSide";
import FridgePage from "./FridgePage";
import MoreInfoPage from "./MoreInfoPage";
import { getRecipes } from "../lib/functions/crud";

export type FoodItem = {
  foodName: string;
  index: number;
  imgUrl: string;
  wayToCook: "튀기기"|"굽기"|"찌기"|"튀기기"|"볶기"|"기타"|"끓이기";
  nutritionDTO: {calorie: number, carbon: number, protein: number, fat: number}; // You might want to define this more precisely based on what it contains
};
const MainPage = (): ReactNode => {
  const [searchedRecipeList,setSearchedRecipeList] = useState<FoodItem[]>([]);
  const [selectedRecipe,setSelectedRecipe] = useState<FoodItem|null>(null);
  const [infoPageOpen,setInfoPageOpen] = useState<boolean>(false);
  const [userIngredientList,setUserIngredientList] = useState<string[]>([]);
  const [userFoodTypeInput,setUserFoodTypeInput]= useState<{
    RICE:boolean,
    SOUP:boolean,
    DISH:boolean,
    DESSERT:boolean,
    SIDE:boolean,
    ETC:boolean,
  }>({
    RICE:false,
    SOUP:false,
    DISH:false,
    DESSERT:false,
    SIDE:false,
    ETC:false,
  });
  const [userCookingMethodInput,setUserCookingMethodInput]= useState<{
    BOILING:boolean,
    STIRFRY:boolean,
    FRYING:boolean,
    STEAMING:boolean,
    ROASTING:boolean,
    ETC:boolean}>(
    {BOILING:false,
    STIRFRY:false,
    FRYING:false,
    STEAMING:false,
    ROASTING:false,
    ETC:false});
  const [userCaloriesInput,setUserCaloriesInput]= useState<{
    min:number|null,
    max:number|null,}>({
    min:null,
    max:null,
  });

  
  const searchRecipe = async () =>{
    const wayToCook:("튀기기"|"굽기"|"찌기"|"튀기기"|"볶기"|"기타"|"끓이기")[] = [];
    if(userCookingMethodInput.BOILING) wayToCook.push('끓이기');
    if(userCookingMethodInput.FRYING) wayToCook.push('튀기기');
    if(userCookingMethodInput.ROASTING) wayToCook.push('굽기');
    if(userCookingMethodInput.STEAMING) wayToCook.push('찌기');
    if(userCookingMethodInput.STIRFRY) wayToCook.push('볶기');
    if(userCookingMethodInput.ETC) wayToCook.push('기타');

    const foodType:("밥"|"반찬"|"일품"|"기타"|"후식"|"국_찌개")[] = [];
    if(userFoodTypeInput.RICE) foodType.push('밥');
    if(userFoodTypeInput.SOUP) foodType.push('국_찌개');
    if(userFoodTypeInput.DISH) foodType.push('일품');
    if(userFoodTypeInput.DESSERT) foodType.push('후식');
    if(userFoodTypeInput.SIDE) foodType.push('반찬');
    if(userFoodTypeInput.ETC) foodType.push('기타');

    const inputData = {ingredientList:userIngredientList,wayToCook:wayToCook,foodType:foodType,caloriesMax:userCaloriesInput.max,caloriesMin:userCaloriesInput.min};
    const result = await getRecipes(inputData);
    console.log(inputData);
    console.log(result);
    setSearchedRecipeList(result.data);
  }

  const initialFetch = async () =>{
    const resultList = await getRecipes({ingredientList:[],wayToCook:[],foodType:[],caloriesMax:null,caloriesMin:null});
    console.log(resultList.data);
    setSearchedRecipeList(resultList.data);
  }

  useEffect(()=>{
    initialFetch();
  },[]);

  const onSearchIngredient = async (input:string)=>{
      setUserIngredientList([...userIngredientList,input]);
  }

  const selectIngredient = (target:string) =>{
    const newUserIngredientList = [...userIngredientList,target];
    setUserIngredientList(newUserIngredientList);
  }
  const deleteIngredient = (target:string) => {
    const newUserIngredientList = userIngredientList.filter((ingredient)=>ingredient!==target);
    setUserIngredientList(newUserIngredientList);
  }


  useEffect(()=>{
    console.log(selectedRecipe);
  },[selectedRecipe]);

  useEffect(()=>{
    searchRecipe();
  },[userIngredientList,userFoodTypeInput,userCookingMethodInput,userCaloriesInput]);

  return (
    <div className="w-screen h-screen flex bg-white">
      <FridgePage 
        openInfoPage={()=>setInfoPageOpen(true)} 
        userIngredientList={userIngredientList}
        onSearchIngredient={onSearchIngredient}
        selectIngredient={selectIngredient}
        deleteIngredient={deleteIngredient}/>
      <MoreInfoPage 
        open={infoPageOpen} 
        closeInfoPage={()=>setInfoPageOpen(false)}
        userFoodTypeInput={userFoodTypeInput}
        setUserFoodTypeInput={setUserFoodTypeInput}
        userCookingMethodInput={userCookingMethodInput}
        setUserCookingMethodInput={setUserCookingMethodInput}
        setUserCaloriesInput={setUserCaloriesInput}/>
      <InfoSide 
        userIngredientList={userIngredientList} 
        searchedRecipeList={searchedRecipeList}
        setSelectedRecipe={setSelectedRecipe}
        deleteIngredient={deleteIngredient}/>
      {selectedRecipe &&
        <Modal>
          <RecipeModal foodData={selectedRecipe} closeModal={()=>{setSelectedRecipe(null)}}/>
        </Modal>
      }
      
    </div>
  );
};

export default MainPage;
