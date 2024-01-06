import Header from "./components/Header";
import "./index.css";
import './assets/fonts/font.css';
import MainPage from './pages/Mainpage'

function App() {
  async function fetchDataFromHello() {
    try {
      // Define the endpoint URL
      const response = await fetch('http://openapi.foodsafetykorea.go.kr/api/21b0f4c6886d44648373/COOKRCP01/json/908/908');
      const data = await response.json();
      console.log(data.COOKRCP01.row[0].MANUAL01);
    }catch(error){
      console.log(error);
    }
  }
  
  // Call the function to fetch and log data
  // fetchDataFromHello();
  
  
  return (
    <>
      <Header/>
      <MainPage/>
    </>
  )
}

export default App
