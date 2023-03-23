import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./PRoute";
import PhoneSignUp from "./components/PhoneSignUp";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={
                <PhoneSignUp/>}/>
            <Route path={'/home'} element={
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>
                }/>
        </Routes>
    </div>
  )
}

export default App