import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Book from "./bookPage";


function App() {
  return(
  <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/book" element={<Book/>}/>
    </Routes>
    </BrowserRouter>
    
  </>
    
  );
}

export default App
