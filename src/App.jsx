import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes , Route} from "react-router-dom";
import './App.css'

import Navbar from './Components/Navbar/Navbar'

import Contact from './Components/Pages/Contact'
import Home from './Components/Home/Home'

import Footer from "./Components/footer/Footer"
import Villa from './Components/Pages/Villa';
import PropertyDetail from './Components/Pages/PropertyDetail';

function App() {
return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/PropertyDetail" element={<PropertyDetail/>}/>
    <Route path="/Villa" element={<Villa/>}/>
  
  </Routes>
  <Footer/>
  </BrowserRouter>
)
}
export default App

