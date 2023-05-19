import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";
import { FinalPage } from "../pages/FinalPage";


export const Navigation = () => {
    return (
        <Routes>
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/game" element={ <GamePage /> } />
            <Route path="/final" element={ <FinalPage /> } />
            <Route path="/*" element={ <Navigate to="/home" replace /> } />         
        </Routes>
    )
}
