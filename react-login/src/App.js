import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import Login from './component/login/';
import LoginUser from "./component/LoginUser";

function App() {
  return (
   /* <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter> */

    <LoginUser/>
  )
}

export default App