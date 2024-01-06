import Header from "./components/Header";
import "./index.css";
import './assets/fonts/font.css';
import MainPage from './pages/Mainpage'

function App() {
  async function fetchDataFromHello() {
    try {
      // Define the endpoint URL
      const url = 'http://127.0.0.1:8080/hello';
  
      // Use the Fetch API to get data from the server
      const response = await fetch(url);
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the response as text or json depending on what's expected
      const data = await response.text(); // Use .json() if the server responds with JSON
  
      // Log the response data to the console
      console.log(data);
    } catch (error) {
      // Log any errors to the console
      console.error("Failed to fetch data from /hello:", error);
    }
  }
  
  // Call the function to fetch and log data
  fetchDataFromHello();
  
  
  return (
    <>
      <Header/>
      <MainPage/>
    </>
  )
}

export default App
