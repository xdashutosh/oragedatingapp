import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {useCookies} from 'react-cookie';
function App() {
  const [cookie,setcookie,removecookie]=useCookies(['user']);
const authtoken = cookie.Authtoken;
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path ="/" element={<Home/>}/>
 {authtoken && <Route path ="/dashboard" element={<Dashboard/>}/>}
{authtoken && <Route path ="/onboarding" element={<Onboarding/>}/>}
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
