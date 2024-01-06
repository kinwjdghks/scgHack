export const getRecipeInfo  =  async (index:number):Promise<{ingredients:string,manuals:string[]}> =>{
    const response = await fetch(`http://openapi.foodsafetykorea.go.kr/api/21b0f4c6886d44648373/COOKRCP01/json/${index}/${index}`);
    let data = await response.json();
    data = data.COOKRCP01.row[0];
    console.log(data);
    const ingredient_string = data.RCP_PARTS_DTLS;
    // const ingredient:string[] = ingredient_string.split(',');
    const manuals:string[] = [];
    for (let i = 1; i <= 20; i++) {
        // Constructing the key name based on the index
        const key = `MANUAL${i.toString().padStart(2, '0')}`;
        
        // Get the content of the manual
        const content = data[key];
      
        // Check if the content is non-empty
        if (content) {
          manuals.push(content.split('. ')[1]);
        } else {
          // If an empty string is encountered, stop the loop
          break;
        }
    }
  return {ingredients:ingredient_string, manuals:manuals};

}
export const getRecipes = async ({ingredientList,wayToCook,foodType,caloriesMax,caloriesMin}:{ingredientList:string[],wayToCook:("튀기기"|"굽기"|"찌기"|"튀기기"|"볶기"|"기타"|"끓이기")[],foodType:("밥"|"반찬"|"일품"|"기타"|"후식"|"국_찌개")[],caloriesMax:number|null,caloriesMin:number|null}) =>{
    const url = 'http://127.0.0.1:8080/hello';
    
    try{
      const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            'ingredient':ingredientList,
            'wayToCook':wayToCook,
            'foodType':foodType,
            'calorieMax':caloriesMax,
            'calorieMin':caloriesMin,
            'pageNumber':0,
            'pageSize':20,
        }),
    });
      const data = await response.json();
      return data;
    }catch(error){
      console.log(error);
    }
}